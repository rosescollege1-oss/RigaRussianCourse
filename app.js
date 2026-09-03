(() => {
  const COURSE = window.COURSE;
  const SETTINGS = window.RUSSIAN_TEAM_SETTINGS;
  const PROFILE_IDS = SETTINGS.profiles.map(p => p.id);
  const TOTAL_SESSIONS = COURSE.weeks.reduce((n,w)=>n+w.sessions.length,0);
  const LAST_WEEK = Math.max(...COURSE.weeks.map(w=>w.id));

  const state = {
    currentProfile: localStorage.getItem('riga_profile') || 'rose',
    groupHash: localStorage.getItem('riga_group_hash') || '',
    firebaseReady: false,
    db: null,
    auth: null,
    team: {},
    unsubscribers: [],
    tripDate: localStorage.getItem('riga_trip_date') || SETTINGS.defaultTripDate,
    flash: null,
    flashDeck: localStorage.getItem('riga_flash_deck') || 'reached',
    sentenceFilter: localStorage.getItem('riga_sentence_filter') || 'reached',
    sentence: null,
    openWeeks: new Set(),
    openGrammar: new Set(),
    gradedQuizzes: {}
  };

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  const shuffle = arr => { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; };

  function defaultProgress(id) {
    return {
      profileId:id, completed:[], quizScores:{}, reviewScores:{}, cefr:{}, b2Cefr:{},
      studyHistory:{}, flashKnown:0, flashMissed:0, sentenceCorrect:0, sentenceAttempts:0,
      updatedAt:new Date().toISOString()
    };
  }
  function localKey(id){ return `riga_progress_${id}`; }
  function loadLocal(id){
    try { return {...defaultProgress(id), ...JSON.parse(localStorage.getItem(localKey(id)) || '{}')}; }
    catch { return defaultProgress(id); }
  }
  function saveLocal(id, data){ localStorage.setItem(localKey(id), JSON.stringify(data)); }

  function toast(msg){
    const el=$('#toast'); if(!el) return; el.textContent=msg; el.classList.add('show'); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove('show'),2200);
  }
  function today(){ return new Date().toISOString().slice(0,10); }
  function markStudy(progress){
    progress.studyHistory ||= {};
    progress.studyHistory[today()] = (progress.studyHistory[today()] || 0) + 1;
    progress.updatedAt = new Date().toISOString();
  }
  function current(){ return state.team[state.currentProfile] || loadLocal(state.currentProfile); }
  function calcProgress(p){ return Math.round(((p.completed?.length || 0) / TOTAL_SESSIONS) * 100); }
  function quizAverage(p){ const vals=Object.values(p.quizScores || {}).map(Number).filter(Number.isFinite); return vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : null; }
  function taskId(week, i){ return `w${week}-s${i}`; }
  function weekPct(p, w){ const n=w.sessions.filter((_,i)=>p.completed?.includes(taskId(w.id,i))).length; return Math.round(n/w.sessions.length*100); }
  function currentWeek(p){ const first=COURSE.weeks.find(w=>weekPct(p,w)<100); return first ? first.id : LAST_WEEK; }

  function allUniqueVocab(){
    const map=new Map();
    COURSE.weeks.forEach(w=>w.vocab.forEach(v=>{ const [ru,en]=v.split('|'); if(!map.has(ru)) map.set(ru,{ru,en,source:`Week ${w.id}`}); }));
    (COURSE.vocabDecks||[]).forEach(d=>d.cards.forEach(v=>{ const [ru,en]=v.split('|'); if(!map.has(ru)) map.set(ru,{ru,en,source:d.name}); }));
    return [...map.values()];
  }

  async function saveProgress(p, rerender=true){
    markStudy(p);
    state.team[p.profileId]=p;
    if(state.firebaseReady && state.groupHash){
      await state.db.collection('groups').doc(state.groupHash).collection('profiles').doc(p.profileId).set(p,{merge:true});
    } else saveLocal(p.profileId,p);
    if(rerender) renderAll();
  }

  async function hashGroup(code){
    const bytes=new TextEncoder().encode('do-rigi-v1::'+code.trim());
    const digest=await crypto.subtle.digest('SHA-256',bytes);
    return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('');
  }

  async function initFirebase(){
    const cfg=window.FIREBASE_CONFIG||{};
    const configured=cfg.apiKey&&!cfg.apiKey.includes('PASTE_')&&cfg.projectId&&!cfg.projectId.includes('PASTE_');
    if(!configured||!window.firebase){
      state.firebaseReady=false; PROFILE_IDS.forEach(id=>state.team[id]=loadLocal(id)); updateSyncUI(); renderAll(); return;
    }
    try{
      if(!firebase.apps.length) firebase.initializeApp(cfg);
      state.auth=firebase.auth(); state.db=firebase.firestore(); await state.auth.signInAnonymously(); state.firebaseReady=true; updateSyncUI();
      if(state.groupHash) subscribeGroup(); else {PROFILE_IDS.forEach(id=>state.team[id]=loadLocal(id)); renderAll();}
    }catch(err){
      console.error(err); state.firebaseReady=false; PROFILE_IDS.forEach(id=>state.team[id]=loadLocal(id)); updateSyncUI(); renderAll();
      if($('#firebaseStatus')) $('#firebaseStatus').textContent='Firebase connection failed: '+err.message;
    }
  }

  function clearSubscriptions(){ state.unsubscribers.forEach(fn=>fn&&fn()); state.unsubscribers=[]; }
  async function subscribeGroup(){
    if(!state.firebaseReady||!state.groupHash)return;
    clearSubscriptions();
    const groupRef=state.db.collection('groups').doc(state.groupHash);
    const gUnsub=groupRef.onSnapshot(async snap=>{
      if(!snap.exists){await groupRef.set({tripDate:state.tripDate,createdAt:new Date().toISOString()},{merge:true});}
      else if(snap.data().tripDate){state.tripDate=snap.data().tripDate;localStorage.setItem('riga_trip_date',state.tripDate);if($('#tripDate'))$('#tripDate').value=state.tripDate;renderDashboard();}
    });
    state.unsubscribers.push(gUnsub);
    PROFILE_IDS.forEach(id=>{
      const ref=groupRef.collection('profiles').doc(id);
      const unsub=ref.onSnapshot(async snap=>{
        if(!snap.exists){const seed=loadLocal(id);await ref.set(seed);state.team[id]=seed;}
        else state.team[id]={...defaultProgress(id),...snap.data()};
        renderAll();
      },err=>console.error(err));
      state.unsubscribers.push(unsub);
    });
    toast('Shared group connected');
  }

  function updateSyncUI(){
    const badge=$('#syncBadge'), status=$('#firebaseStatus'); if(!badge||!status)return;
    if(state.firebaseReady){
      badge.textContent=state.groupHash?'Shared sync':'Firebase ready'; badge.classList.add('live');
      status.textContent=state.groupHash?'Firebase is connected and this browser is attached to your shared group.':'Firebase is connected. Enter your private group code below to attach this browser to the team.'; status.classList.add('ok');
    }else{
      badge.textContent='Local demo'; badge.classList.remove('live'); status.textContent='Local demo mode: progress is saved only in this browser until Firebase is configured.'; status.classList.remove('ok');
    }
  }

  function showView(name){
    $$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));
    $$('#nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function renderDashboard(){
    const p=current(), pct=calcProgress(p), avg=quizAverage(p), w=currentWeek(p);
    $('#heroName').textContent=`${profileName(state.currentProfile)}'s progress`;
    $('#heroPct').textContent=pct+'%'; $('#heroProgress').style.width=pct+'%';
    $('#metricSessions').textContent=`${p.completed?.length||0}/${TOTAL_SESSIONS}`;
    $('#metricQuiz').textContent=avg===null?'—':avg+'%';
    $('#metricDays').textContent=Object.keys(p.studyHistory||{}).length;
    $('#metricWeek').textContent=w;
    if($('#metricVocab')) $('#metricVocab').textContent=allUniqueVocab().length;
    if($('#metricBuilders')) $('#metricBuilders').textContent=COURSE.sentenceBank?.length||0;
    const deadline=new Date(state.tripDate+'T00:00:00'), now=new Date();
    const days=Math.max(0,Math.ceil((deadline-now)/(1000*60*60*24))); $('#daysLeft').textContent=days;
    $('#teamRows').innerHTML=SETTINGS.profiles.map(pr=>{
      const tp=state.team[pr.id]||loadLocal(pr.id), x=calcProgress(tp), qa=quizAverage(tp), builders=tp.sentenceCorrect||0;
      return `<div class="team-row rich"><div class="team-name">${pr.emoji} ${esc(pr.name)}<small>${qa===null?'No quiz yet':qa+'% quiz avg'} • ${builders} builders</small></div><div class="progress-track"><div class="progress-fill" style="width:${x}%"></div></div><div class="team-pct">${x}%</div></div>`;
    }).join('');
    const idx=Math.max(0,COURSE.weeks.findIndex(x=>x.id===w));
    $('#dashboardWeeks').innerHTML=COURSE.weeks.slice(Math.max(0,idx-1),Math.min(COURSE.weeks.length,idx+3)).map(x=>`<div class="week-mini"><div class="num">${x.id}</div><div><strong>${esc(x.title)}</strong><small>${esc(x.band)} • ${weekPct(p,x)}% complete</small></div><button class="btn small" onclick="window.openWeek(${x.id})">Open</button></div>`).join('');
  }

  function quizQuestionHTML(q,wid,qi,prefix='q'){
    return `<div class="quiz-q" id="${prefix}box-${wid}-${qi}"><strong>${qi+1}. ${esc(q[0])}</strong><div class="quiz-options">${q[1].map((opt,oi)=>`<label><input type="radio" name="${prefix}-${wid}-${qi}" value="${oi}"> <span>${esc(opt)}</span></label>`).join('')}</div><div class="question-feedback" id="${prefix}feedback-${wid}-${qi}"></div></div>`;
  }

  function renderCourse(){
    const p=current();
    $('#courseWeeks').innerHTML=COURSE.weeks.map(w=>{
      const done=weekPct(p,w), score=p.quizScores?.[w.id];
      const phrases=w.phrases.map(([ru,en])=>`<tr><td><button class="speak" onclick='window.speakRu(${JSON.stringify(ru)})'>🔊</button></td><td class="ru">${esc(ru)}</td><td class="muted">${esc(en)}</td></tr>`).join('');
      const tasks=w.sessions.map((s,i)=>{const id=taskId(w.id,i),checked=p.completed?.includes(id);return `<label class="task ${checked?'done':''}"><input type="checkbox" data-task="${id}" ${checked?'checked':''}><span><strong>Session ${i+1}</strong><br>${esc(s)}</span></label>`;}).join('');
      const vocab=w.vocab.map(v=>{const[ru,en]=v.split('|');return `<span class="pill" title="${esc(en)}">${esc(ru)} · ${esc(en)}</span>`;}).join('');
      const quiz=w.quiz.map((qq,qi)=>quizQuestionHTML(qq,w.id,qi)).join('');
      const sprint=w.id===1?'<div class="phase-banner sprint"><strong>Riga Sprint</strong> • Weeks 1–13 build travel independence fast.</div>':w.id===14?'<div class="phase-banner b2"><strong>B2 Continuation</strong> • Weeks 14–24 turn travel Russian into upper-intermediate Russian.</div>':'';
      return `${sprint}<article class="week-card ${state.openWeeks.has(w.id)?'open':''}" id="week-${w.id}">
        <div class="week-head" data-week-head="${w.id}"><div class="week-icon">${esc(w.icon)}</div><div><h3>Week ${w.id}: ${esc(w.title)}</h3><div class="week-meta">${esc(w.band)} • ${done}% complete ${score!==undefined?`• quiz ${score}%`:''} • ${w.vocab.length} core cards</div></div><div class="chev">⌄</div></div>
        <div class="week-body"><div class="pill-row">${w.goals.map(g=>`<span class="pill">✓ ${esc(g)}</span>`).join('')}</div>
          <div class="lesson-columns"><div><h3>Grammar lesson</h3><ul class="note-list">${w.grammar.map(g=>`<li>${esc(g)}</li>`).join('')}</ul></div><div><h3>Automatic phrases</h3><table class="phrase-table"><tbody>${phrases}</tbody></table></div></div>
          <h3 style="margin-top:20px">Core vocabulary</h3><div class="pill-row">${vocab}</div>
          <h3 style="margin-top:20px">Eight study sessions</h3><div class="task-list">${tasks}</div>
          <div style="margin-top:14px"><a class="btn ghost" href="${w.resource.url}" target="_blank" rel="noopener">Free external practice: ${esc(w.resource.label)} ↗</a></div>
          <div class="quiz-box"><h3>Week ${w.id} quiz <span class="score" id="score-${w.id}">${score!==undefined?score+'%':''}</span></h3><p class="muted small-copy">After grading, every question shows your answer, the correct answer, and an explanation.</p>${quiz}<button class="btn primary" data-grade="${w.id}" style="margin-top:12px">Grade + explain every answer</button></div>
        </div></article>`;
    }).join('');
    $$('[data-week-head]').forEach(h=>h.onclick=()=>{const id=Number(h.dataset.weekHead),card=h.closest('.week-card');card.classList.toggle('open');if(card.classList.contains('open'))state.openWeeks.add(id);else state.openWeeks.delete(id);});
    $$('[data-task]').forEach(cb=>cb.onchange=async()=>{const p={...current(),completed:[...(current().completed||[])]};if(cb.checked&&!p.completed.includes(cb.dataset.task))p.completed.push(cb.dataset.task);if(!cb.checked)p.completed=p.completed.filter(x=>x!==cb.dataset.task);await saveProgress(p);});
    $$('[data-grade]').forEach(btn=>btn.onclick=()=>gradeQuiz(Number(btn.dataset.grade)));
    Object.entries(state.gradedQuizzes).forEach(([wid,picks])=>{ const w=COURSE.weeks.find(x=>x.id===Number(wid)); if(!w)return; w.quiz.forEach((qq,qi)=>showQuestionFeedback(qq,picks[qi],`#qbox-${wid}-${qi}`,`#qfeedback-${wid}-${qi}`)); });
  }

  function showQuestionFeedback(q,pickedIndex,boxId,feedbackId){
    const correctIndex=q[2], box=$(boxId), fb=$(feedbackId), pickedText=pickedIndex===null?'No answer':q[1][pickedIndex], correctText=q[1][correctIndex], ok=pickedIndex===correctIndex;
    if(box){box.classList.remove('correct','incorrect');box.classList.add(ok?'correct':'incorrect');}
    if(fb){
      fb.className=`question-feedback show ${ok?'good':'bad'}`;
      fb.innerHTML=`<strong>${ok?'✓ Correct':'✗ Not quite'}</strong><div><b>Your answer:</b> ${esc(pickedText)}</div>${ok?'':`<div><b>Correct answer:</b> ${esc(correctText)}</div>`}<div class="why"><b>Why:</b> ${esc(q[3]||`The correct answer is “${correctText}”. Review the rule/examples above, then try this item again later.`)}</div>`;
    }
    return ok;
  }

  async function gradeQuiz(weekId){
    const w=COURSE.weeks.find(x=>x.id===weekId); let correct=0,answered=0; const picks=[];
    w.quiz.forEach((qq,qi)=>{const picked=document.querySelector(`input[name="q-${weekId}-${qi}"]:checked`); if(picked){answered++;picks[qi]=Number(picked.value);}else picks[qi]=null;});
    if(answered<w.quiz.length){toast(`Answer all ${w.quiz.length} questions first`);return;}
    w.quiz.forEach((qq,qi)=>{if(showQuestionFeedback(qq,picks[qi],`#qbox-${weekId}-${qi}`,`#qfeedback-${weekId}-${qi}`))correct++;});
    state.gradedQuizzes[weekId]=picks;
    const score=Math.round(correct/w.quiz.length*100), p={...current(),quizScores:{...(current().quizScores||{}),[weekId]:score}};
    await saveProgress(p,false); const scoreEl=$(`#score-${weekId}`);if(scoreEl)scoreEl.textContent=score+'%'; renderDashboard();
    toast(`Week ${weekId}: ${score}% • ${correct}/${w.quiz.length} correct`);
    const card=$(`#week-${weekId}`);card?.classList.add('open');state.openWeeks.add(weekId);
  }

  function renderPracticeTabs(){
    $$('#practiceTabs [data-practice-tab]').forEach(btn=>btn.onclick=()=>{
      $$('#practiceTabs [data-practice-tab]').forEach(b=>b.classList.toggle('active',b===btn));
      $$('.practice-panel').forEach(p=>p.classList.toggle('active',p.id===`practice-${btn.dataset.practiceTab}`));
    });
  }

  function renderCefr(){
    const p=current();
    $('#cefrChecklist').innerHTML=COURSE.cefr.map(([skill,text],i)=>{const checked=!!p.cefr?.[i];return `<label class="task ${checked?'done':''}"><input type="checkbox" data-cefr="${i}" ${checked?'checked':''}><span><strong>${esc(skill)}</strong><br>${esc(text)}</span></label>`;}).join('');
    $$('[data-cefr]').forEach(cb=>cb.onchange=async()=>{const np={...current(),cefr:{...(current().cefr||{}),[cb.dataset.cefr]:cb.checked}};await saveProgress(np);});
    if($('#b2Checklist')){
      $('#b2Checklist').innerHTML=(COURSE.b2Cefr||[]).map(([skill,text],i)=>{const checked=!!p.b2Cefr?.[i];return `<label class="task ${checked?'done':''}"><input type="checkbox" data-b2cefr="${i}" ${checked?'checked':''}><span><strong>${esc(skill)}</strong><br>${esc(text)}</span></label>`;}).join('');
      $$('[data-b2cefr]').forEach(cb=>cb.onchange=async()=>{const np={...current(),b2Cefr:{...(current().b2Cefr||{}),[cb.dataset.b2cefr]:cb.checked}};await saveProgress(np);});
    }
  }

  function buildFlashDeckOptions(){
    const sel=$('#vocabDeckSelect'); if(!sel)return;
    sel.innerHTML=`<option value="reached">Course cards up to my current week</option><option value="all">All course + extra vocabulary</option>`+(COURSE.vocabDecks||[]).map((d,i)=>`<option value="deck:${i}">${esc(d.name)} • ${esc(d.level)}</option>`).join('');
    if([...sel.options].some(o=>o.value===state.flashDeck))sel.value=state.flashDeck; else {state.flashDeck='reached';sel.value='reached';}
    sel.onchange=()=>{state.flashDeck=sel.value;localStorage.setItem('riga_flash_deck',state.flashDeck);nextFlash();renderFlashStats();};
  }

  function vocabPool(){
    if(state.flashDeck==='all') return allUniqueVocab();
    if(state.flashDeck.startsWith('deck:')){
      const d=COURSE.vocabDecks?.[Number(state.flashDeck.split(':')[1])];
      return d?d.cards.map(v=>{const[ru,en]=v.split('|');return{ru,en,source:d.name};}):[];
    }
    const max=currentWeek(current()), map=new Map();
    COURSE.weeks.filter(w=>w.id<=max).forEach(w=>w.vocab.forEach(v=>{const[ru,en]=v.split('|');if(!map.has(ru))map.set(ru,{ru,en,source:`Week ${w.id}`});}));
    return [...map.values()];
  }
  function nextFlash(){
    const pool=vocabPool(); if(!pool.length)return;
    state.flash=pool[Math.floor(Math.random()*pool.length)];
    $('#flashRu').textContent=state.flash.ru;$('#flashEn').textContent=state.flash.en;$('#flashMeta').textContent=state.flash.source||'Course vocabulary';$('#flashcard').classList.remove('revealed');
  }
  function renderFlashStats(){
    const p=current(), pool=vocabPool();
    if($('#flashKnownStat'))$('#flashKnownStat').textContent=p.flashKnown||0;
    if($('#flashMissedStat'))$('#flashMissedStat').textContent=p.flashMissed||0;
    if($('#flashAvailableStat'))$('#flashAvailableStat').textContent=pool.length;
  }
  async function flashResult(knew){
    const p={...current()};if(knew)p.flashKnown=(p.flashKnown||0)+1;else p.flashMissed=(p.flashMissed||0)+1;await saveProgress(p,false);renderFlashStats();renderDashboard();nextFlash();
  }

  function buildSentenceFilterOptions(){
    const sel=$('#sentenceWeekSelect'); if(!sel)return;
    sel.innerHTML=`<option value="reached">Reached material</option><option value="all">All 201+ builders</option><option value="riga">Riga Kit / sprint</option>`+COURSE.weeks.map(w=>`<option value="week:${w.id}">Week ${w.id} • ${esc(w.title)}</option>`).join('');
    if([...sel.options].some(o=>o.value===state.sentenceFilter))sel.value=state.sentenceFilter;else{state.sentenceFilter='reached';sel.value='reached';}
    sel.onchange=()=>{state.sentenceFilter=sel.value;localStorage.setItem('riga_sentence_filter',state.sentenceFilter);nextSentence();};
  }
  function sentencePool(){
    const bank=COURSE.sentenceBank||[];
    if(state.sentenceFilter==='all')return bank;
    if(state.sentenceFilter==='riga')return bank.filter(x=>x.level==='Riga'||x.week<=13);
    if(state.sentenceFilter.startsWith('week:'))return bank.filter(x=>x.week===Number(state.sentenceFilter.split(':')[1]));
    const max=currentWeek(current());return bank.filter(x=>x.week<=max);
  }
  function sentenceTokens(answer){return answer.split(/\s+/).map((text,i)=>({id:`tok-${Date.now()}-${i}-${Math.random().toString(36).slice(2,6)}`,text}));}
  function nextSentence(){
    const pool=sentencePool();if(!pool.length)return;
    state.sentence=pool[Math.floor(Math.random()*pool.length)];
    $('#sentencePrompt').textContent=state.sentence.prompt;$('#sentenceMeta').textContent=`${state.sentence.note} • ${state.sentence.level}`;$('#sentenceFeedback').className='answer-feedback';$('#sentenceFeedback').innerHTML='';
    const tokens=shuffle(sentenceTokens(state.sentence.answer));
    $('#sentenceAnswer').innerHTML='';$('#wordBank').innerHTML=tokens.map(tokenButtonHTML).join('');bindSentenceDnD();
  }
  function tokenButtonHTML(t){return `<button class="word-token" draggable="true" data-token-id="${esc(t.id)}">${esc(t.text)}</button>`;}
  function bindSentenceDnD(){
    const bank=$('#wordBank'), answer=$('#sentenceAnswer'); if(!bank||!answer)return;
    $$('.word-token').forEach(btn=>{
      btn.addEventListener('click',()=>{const parent=btn.parentElement; (parent===bank?answer:bank).appendChild(btn);});
      btn.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/token-id',btn.dataset.tokenId);e.dataTransfer.effectAllowed='move';});
      btn.addEventListener('dragover',e=>e.preventDefault());
      btn.addEventListener('drop',e=>{e.preventDefault();const id=e.dataTransfer.getData('text/token-id');const moving=document.querySelector(`[data-token-id="${CSS.escape(id)}"]`);if(moving&&moving!==btn)btn.parentElement.insertBefore(moving,btn);});
    });
    [bank,answer].forEach(zone=>{
      zone.ondragover=e=>{e.preventDefault();zone.classList.add('dragover');};
      zone.ondragleave=()=>zone.classList.remove('dragover');
      zone.ondrop=e=>{e.preventDefault();zone.classList.remove('dragover');const id=e.dataTransfer.getData('text/token-id');const moving=document.querySelector(`[data-token-id="${CSS.escape(id)}"]`);if(moving)zone.appendChild(moving);};
    });
  }
  function normalizeSentence(s){return s.replace(/\s+([,.!?;:])/g,'$1').replace(/\s+/g,' ').trim().toLowerCase().replace(/ё/g,'е');}
  async function checkSentence(){
    if(!state.sentence)return;
    const built=[...$('#sentenceAnswer').children].map(x=>x.textContent).join(' '), correct=normalizeSentence(built)===normalizeSentence(state.sentence.answer);
    const p={...current(),sentenceAttempts:(current().sentenceAttempts||0)+1,sentenceCorrect:(current().sentenceCorrect||0)+(correct?1:0)};
    await saveProgress(p,false);renderSentenceStats();renderDashboard();
    const fb=$('#sentenceFeedback');fb.className=`answer-feedback show ${correct?'good':'bad'}`;
    fb.innerHTML=correct?`<strong>✓ Correct.</strong> <button class="inline-speak" onclick='window.speakRu(${JSON.stringify(state.sentence.answer)})'>🔊 Hear it</button>`:`<strong>✗ Not yet.</strong><div><b>You built:</b> ${esc(built||'(nothing yet)')}</div><div><b>Correct:</b> ${esc(state.sentence.answer)} <button class="inline-speak" onclick='window.speakRu(${JSON.stringify(state.sentence.answer)})'>🔊</button></div><div class="why">Reset it and rebuild the correct version once from memory before moving on.</div>`;
  }
  function resetSentence(){
    if(!state.sentence)return;const tokens=shuffle(sentenceTokens(state.sentence.answer));$('#sentenceAnswer').innerHTML='';$('#wordBank').innerHTML=tokens.map(tokenButtonHTML).join('');$('#sentenceFeedback').className='answer-feedback';$('#sentenceFeedback').innerHTML='';bindSentenceDnD();
  }
  function renderSentenceStats(){
    const p=current(),a=p.sentenceAttempts||0,c=p.sentenceCorrect||0;
    if($('#sentenceCorrectStat'))$('#sentenceCorrectStat').textContent=c;if($('#sentenceAttemptStat'))$('#sentenceAttemptStat').textContent=a;if($('#sentenceAccuracyStat'))$('#sentenceAccuracyStat').textContent=a?Math.round(c/a*100)+'%':'—';
  }

  function renderGrammar(){
    const grid=$('#grammarGrid');if(!grid)return;
    grid.innerHTML=(COURSE.grammarReference||[]).map((g,i)=>`<article class="grammar-card ${state.openGrammar.has(i)?'open':''}"><button class="grammar-head" data-grammar="${i}"><div><span class="grammar-level">${esc(g.level)}</span><h3>${esc(g.title)}</h3><p>${esc(g.summary)}</p></div><span class="chev">⌄</span></button><div class="grammar-body"><div class="grammar-columns"><div><h4>Rules</h4><ul class="note-list">${g.rules.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></div><div><h4>Examples</h4>${g.examples.map(([ru,en,note])=>`<div class="grammar-example"><div><button class="speak" onclick='window.speakRu(${JSON.stringify(ru)})'>🔊</button><strong class="ru">${esc(ru)}</strong></div><div class="muted">${esc(en)}</div>${note?`<small>${esc(note)}</small>`:''}</div>`).join('')}</div></div>${g.traps?.length?`<div class="trap-box"><strong>Watch out</strong><ul>${g.traps.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`:''}</div></article>`).join('');
    $$('[data-grammar]').forEach(btn=>btn.onclick=()=>{const i=Number(btn.dataset.grammar),card=btn.closest('.grammar-card');card.classList.toggle('open');if(card.classList.contains('open'))state.openGrammar.add(i);else state.openGrammar.delete(i);});
  }

  function renderReviewQuizControls(){
    const sel=$('#reviewQuizSelect');if(!sel)return;
    sel.innerHTML=(COURSE.practiceQuizzes||[]).map(qz=>`<option value="${esc(qz.id)}">${esc(qz.title)} • ${esc(qz.level)} • ${qz.questions.length} questions</option>`).join('');
    const p=current();
    $('#reviewScoreList').innerHTML=(COURSE.practiceQuizzes||[]).map(qz=>`<div class="review-score-row"><span>${esc(qz.title)}</span><strong>${p.reviewScores?.[qz.id]===undefined?'—':p.reviewScores[qz.id]+'%'}</strong></div>`).join('');
  }
  function loadReviewQuiz(){
    const id=$('#reviewQuizSelect').value,qz=COURSE.practiceQuizzes.find(x=>x.id===id),card=$('#reviewQuizCard');if(!qz||!card)return;
    card.style.display='block';card.dataset.reviewId=id;card.innerHTML=`<div class="eyebrow">${esc(qz.level)}</div><h2>${esc(qz.title)}</h2><p class="muted">Repeat until you can explain why the correct answer is correct.</p>${qz.questions.map((qq,qi)=>quizQuestionHTML(qq,id,qi,'review')).join('')}<button class="btn primary" id="gradeReviewQuiz">Grade + explain</button>`;
    $('#gradeReviewQuiz').onclick=()=>gradeReviewQuiz(id);
    card.scrollIntoView({behavior:'smooth',block:'start'});
  }
  async function gradeReviewQuiz(id){
    const qz=COURSE.practiceQuizzes.find(x=>x.id===id);let correct=0,answered=0;const picks=[];
    qz.questions.forEach((qq,qi)=>{const picked=document.querySelector(`input[name="review-${id}-${qi}"]:checked`);if(picked){answered++;picks[qi]=Number(picked.value);}else picks[qi]=null;});
    if(answered<qz.questions.length){toast(`Answer all ${qz.questions.length} questions first`);return;}
    qz.questions.forEach((qq,qi)=>{if(showQuestionFeedback(qq,picks[qi],`#reviewbox-${id}-${qi}`,`#reviewfeedback-${id}-${qi}`))correct++;});
    const score=Math.round(correct/qz.questions.length*100),p={...current(),reviewScores:{...(current().reviewScores||{}),[id]:score}};await saveProgress(p,false);renderReviewQuizControls();renderDashboard();toast(`${qz.title}: ${score}%`);
  }

  function newPrompt(){
    const prompts=[...(COURSE.speakingPrompts||[]),
      "Argue both sides of this question for four minutes: Is it better to plan every detail of a trip or improvise? Use at least six B2 connectors.",
      "Retell a misunderstanding from two people's points of view. Then explain what could have prevented it.",
      "Summarize a news or travel article you read recently: main point, two details, the writer's viewpoint, and your reaction.",
      "Explain how to use a familiar app or device to someone who has never used it. Clarify steps and check understanding.",
      "Discuss whether learning Russian grammar tables helps speaking. Give advantages, disadvantages, examples, and a conclusion.",
      "Describe a difficult decision you made. Explain alternatives, consequences, what you would do differently, and why."
    ];
    $('#speakingPrompt').textContent=prompts[Math.floor(Math.random()*prompts.length)];
  }

  function renderPractice(){
    renderPracticeTabs();buildFlashDeckOptions();renderFlashStats();if(!state.flash)nextFlash();
    buildSentenceFilterOptions();renderSentenceStats();if(!state.sentence)nextSentence();
    renderGrammar();renderReviewQuizControls();renderCefr();if(!$('#speakingPrompt').textContent)newPrompt();
  }

  function renderRiga(){
    $('#rigaGrid').innerHTML=COURSE.riga.map(cat=>`<div class="riga-card"><div class="riga-title"><span>${cat.icon}</span><h3>${esc(cat.title)}</h3></div><table class="phrase-table"><tbody>${cat.phrases.map(([ru,en])=>`<tr><td><button class="speak" onclick='window.speakRu(${JSON.stringify(ru)})'>🔊</button></td><td class="ru">${esc(ru)}</td><td class="muted">${esc(en)}</td></tr>`).join('')}</tbody></table></div>`).join('');
  }
  function renderResources(){
    $('#resourceGrid').innerHTML=COURSE.resources.map(r=>`<div class="resource"><div class="type">${esc(r.type)}</div><h3>${esc(r.name)}</h3><p class="muted">${esc(r.note)}</p><a href="${r.url}" target="_blank" rel="noopener">Open resource ↗</a></div>`).join('');
  }

  function renderAll(){renderDashboard();renderCourse();renderPractice();renderRiga();renderResources();updateSyncUI();if($('#tripDate'))$('#tripDate').value=state.tripDate;}
  function profileName(id){return SETTINGS.profiles.find(p=>p.id===id)?.name||id;}

  window.speakRu=text=>{
    if(!('speechSynthesis'in window)){toast('Text-to-speech is not available in this browser');return;}
    speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='ru-RU';u.rate=.82;const voices=speechSynthesis.getVoices(),ru=voices.find(v=>v.lang?.toLowerCase().startsWith('ru'));if(ru)u.voice=ru;speechSynthesis.speak(u);
  };
  window.openWeek=id=>{state.openWeeks.add(id);showView('course');renderCourse();setTimeout(()=>{$(`#week-${id}`)?.scrollIntoView({behavior:'smooth',block:'start'});},80);};

  function initUI(){
    $('#profileSelect').innerHTML=SETTINGS.profiles.map(p=>`<option value="${p.id}">${p.emoji} ${p.name}</option>`).join('');$('#profileSelect').value=state.currentProfile;
    $('#profileSelect').onchange=e=>{state.currentProfile=e.target.value;localStorage.setItem('riga_profile',state.currentProfile);state.flash=null;state.sentence=null;renderAll();};
    $$('#nav button').forEach(b=>b.onclick=()=>showView(b.dataset.view));$$('[data-jump]').forEach(b=>b.onclick=()=>showView(b.dataset.jump));
    $('#expandAll').onclick=()=>{const cards=$$('.week-card'),allOpen=cards.every(c=>c.classList.contains('open'));state.openWeeks=allOpen?new Set():new Set(COURSE.weeks.map(w=>w.id));renderCourse();$('#expandAll').textContent=allOpen?'Expand all':'Collapse all';};
    $('#flashcard').onclick=e=>{if(e.target.id!=='flashSpeak')$('#flashcard').classList.toggle('revealed');};
    $('#flashSpeak').onclick=e=>{e.stopPropagation();window.speakRu(state.flash?.ru||$('#flashRu').textContent);};
    $('#knewCard').onclick=()=>flashResult(true);$('#missedCard').onclick=()=>flashResult(false);$('#newPrompt').onclick=newPrompt;
    $('#checkSentence').onclick=checkSentence;$('#resetSentence').onclick=resetSentence;$('#newSentence').onclick=nextSentence;$('#loadReviewQuiz').onclick=loadReviewQuiz;
    $('#connectGroup').onclick=async()=>{const code=$('#groupCode').value.trim();if(code.length<10){toast('Use a group phrase at least 10 characters long');return;}state.groupHash=await hashGroup(code);localStorage.setItem('riga_group_hash',state.groupHash);$('#groupCode').value='';if(state.firebaseReady)subscribeGroup();else toast('Group saved locally; connect Firebase to sync');updateSyncUI();};
    $('#forgetGroup').onclick=()=>{clearSubscriptions();state.groupHash='';localStorage.removeItem('riga_group_hash');PROFILE_IDS.forEach(id=>state.team[id]=loadLocal(id));updateSyncUI();renderAll();toast('Group forgotten on this device');};
    $('#saveTripDate').onclick=async()=>{const d=$('#tripDate').value;if(!d)return;state.tripDate=d;localStorage.setItem('riga_trip_date',d);if(state.firebaseReady&&state.groupHash)await state.db.collection('groups').doc(state.groupHash).set({tripDate:d},{merge:true});renderDashboard();toast('Trip deadline saved');};
  }

  initUI();initFirebase();renderAll();
})();
