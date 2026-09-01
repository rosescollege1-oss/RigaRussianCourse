(() => {
  const C = window.COURSE;
  C.title = "До Риги!";
  C.subtitle = "Russian to B2 • Riga sprint + full continuation";

  // Two additional retrieval-heavy sessions are added to every original Riga-sprint week.
  C.weeks.forEach(w => {
    if (w.sessions.length < 8) {
      w.sessions.push(`Sentence Lab: complete at least 12 sentence-builders from Week ${w.id} and repeat every missed item correctly twice.`);
      w.sessions.push(`Vocabulary Lab: review at least 40 flashcards from Week ${w.id}; say a Russian sentence aloud with every card you miss.`);
    }
  });

  const q = (question, options, correct, explanation) => [question, options, correct, explanation];

  // Extra quiz items for the original 13 weeks. The app shows specific feedback after grading.
  const extraQuiz = {
    1: [
      q("Which word means ‘where’?", ["когда", "где", "куда", "почему"], 1, "Где asks where something is located. Куда asks where someone/something is going."),
      q("Choose the natural polite request.", ["Повтори, пожалуйста.", "Повторите, пожалуйста.", "Повторять, пожалуйста.", "Вы повтори."], 1, "With polite вы, use the plural/polite imperative: повторите."),
      q("Which statement about Russian stress is correct?", ["Stress always falls on the first syllable.", "Stress is fixed by spelling.", "Stress can move and should be learned with the word.", "Only vowels е and ё can be stressed."], 2, "Russian lexical stress is variable and can move between forms, so it is worth learning with each word."),
      q("Choose ‘I speak a little Russian.’", ["Я немного говорю по-русски.", "Я маленький русский говорю.", "Мне русский немного.", "Я говоришь русский мало."], 0, "По-русски is the adverbial way to say ‘in Russian’; говорю agrees with я.")
    ],
    2: [
      q("Choose ‘my new friend’ for a male friend.", ["моя новая друг", "мой новый друг", "моё новое друг", "мои новый друг"], 1, "Друг is masculine, so both possessive and adjective take masculine forms: мой новый."),
      q("What is the natural present-tense equivalent of ‘She is a doctor’?", ["Она есть врач.", "Она быть врач.", "Она врач.", "Есть она врач."], 2, "Russian normally omits быть in present-tense identity sentences."),
      q("Choose the correct form: ‘You (polite) understand.’", ["Вы понимаешь.", "Вы понимаете.", "Вы понимаем.", "Вы понимать."], 1, "Вы takes the plural/polite verb ending -ете here: понимаете."),
      q("‘They want coffee’ is…", ["Они хочет кофе.", "Они хотите кофе.", "Они хотят кофе.", "Они хотеть кофе."], 2, "Хотеть is irregular: я хочу, ты хочешь, он хочет, мы хотим, вы хотите, они хотят.")
    ],
    3: [
      q("Choose ‘in beautiful Latvia.’", ["в красивую Латвию", "в красивой Латвии", "на красивой Латвии", "в красивое Латвии"], 1, "Location after в uses the prepositional: в красивой Латвии."),
      q("Which pair correctly contrasts location and destination?", ["в ресторане / в ресторан", "в ресторан / в ресторане", "на ресторане / на ресторан", "рестораном / ресторана"], 0, "Где? location: в ресторане. Куда? destination: в ресторан."),
      q("‘At the station’ is most naturally…", ["в вокзале", "на вокзале", "на вокзал", "в вокзал"], 1, "The conventional phrase is на вокзале for location."),
      q("What case normally follows о meaning ‘about’?", ["accusative", "prepositional", "instrumental", "dative"], 1, "О/об meaning ‘about’ normally takes the prepositional case: о поездке, об этом.")
    ],
    4: [
      q("Choose ‘I see my friend (male).’", ["Я вижу мой друг.", "Я вижу моего друга.", "Я вижу моему другу.", "Я вижу моим другом."], 1, "Animate masculine accusative matches the genitive: моего друга."),
      q("Choose ‘We are going to the market.’", ["Мы идём на рынке.", "Мы идём на рынок.", "Мы идём рынком.", "Мы идём рынка."], 1, "Movement toward a destination after на takes accusative: на рынок."),
      q("‘I’ll have the water’ is…", ["Я возьму воду.", "Я возьму вода.", "Я беру водой.", "Я возьмёт воду."], 0, "Вода is feminine; direct-object accusative changes -а to -у: воду."),
      q("Which phrase politely asks for the bill?", ["Счёт, пожалуйста.", "Считать, пожалуйста.", "Дайте считать.", "Я счёт есть."], 0, "Счёт, пожалуйста is a standard concise restaurant request.")
    ],
    5: [
      q("Choose ‘There is no time.’", ["Нет время.", "Нет времени.", "Не время есть.", "Времени не."], 1, "After нет, the absent thing is normally genitive: нет времени."),
      q("‘From Riga’ is…", ["из Риги", "от Риге", "с Ригу", "из Рига"], 0, "Из + genitive expresses movement from inside/out of a place: из Риги."),
      q("Choose ‘a cup of tea.’", ["чашка чай", "чашка чая", "чашку чаю", "чашкой чай"], 1, "The contents/quantity complement is genitive: чашка чая."),
      q("After много, a plural count noun normally appears in…", ["nominative plural", "genitive plural", "accusative singular", "instrumental plural"], 1, "Quantity words such as много and мало normally take genitive plural nouns.")
    ],
    6: [
      q("Choose ‘I need a taxi.’", ["Я нужен такси.", "Мне нужно такси.", "Мне нужна такси.", "Меня нужно такси."], 1, "The experiencer is dative: мне. Такси is neuter indeclinable, so нужно."),
      q("‘I like Riga’ is…", ["Я нравлюсь Ригу.", "Мне нравится Рига.", "Меня нравится Рига.", "Мне нравятся Рига."], 1, "The person who likes something is dative; the thing liked is grammatical subject: мне нравится Рига."),
      q("Choose ‘Give me the menu, please.’", ["Дайте мне меню, пожалуйста.", "Дайте я меню.", "Дай меня меню.", "Мне дать меню вы."], 0, "The recipient after дать is dative: мне."),
      q("Which form means ‘to him’?", ["его", "ему", "им", "нём"], 1, "Ему is the dative form of он.")
    ],
    7: [
      q("Choose ‘with my sister.’", ["с моя сестра", "с моей сестрой", "у моей сестры", "к моей сестре"], 1, "С meaning ‘with’ takes instrumental: с моей сестрой."),
      q("After работать meaning a profession (‘work as a doctor’), the profession is often…", ["instrumental", "accusative", "dative", "prepositional"], 0, "Professions after работать can take instrumental: работать врачом."),
      q("Choose ‘by bus.’", ["на автобус", "автобусом", "с автобусом", "автобуса"], 1, "Means of transport can be instrumental without a preposition: автобусом."),
      q("‘Between the hotel and the station’ requires…", ["между + instrumental", "между + accusative", "между + genitive", "между + nominative"], 0, "Между governs the instrumental case.")
    ],
    8: [
      q("Which aspect best fits a completed one-time result: ‘I finally bought the tickets’?", ["imperfective", "perfective", "either with no meaning difference", "infinitive only"], 1, "A bounded completed result is a core perfective meaning."),
      q("Choose the imperfective future ‘We will read.’", ["Мы прочитаем.", "Мы будем читать.", "Мы читали.", "Мы читаем завтра всегда."], 1, "Imperfective future uses буду + infinitive: будем читать."),
      q("Choose the perfective future ‘I will write it (and finish).’", ["Я буду писать.", "Я напишу.", "Я написал.", "Я писать буду закончил."], 1, "Perfective non-past forms normally have future meaning: напишу."),
      q("For repeated past activity (‘Every evening I read’), which is normally preferred?", ["perfective", "imperfective", "imperative", "short adjective"], 1, "Habitual/repeated past activity normally uses imperfective aspect.")
    ],
    9: [
      q("Choose ‘I am going there on foot right now.’", ["Я хожу туда сейчас.", "Я иду туда сейчас.", "Я езжу туда сейчас.", "Я ехал туда сейчас."], 1, "Идти is unidirectional motion on foot in progress."),
      q("Choose ‘I go to work by bus regularly.’", ["Я еду на работу каждый день.", "Я езжу на работу каждый день.", "Я иду автобусом на работу каждый день.", "Я хожу автобус на работу."], 1, "Ездить is multidirectional/habitual travel by vehicle."),
      q("The prefix при- in приехать often contributes the idea of…", ["arrival", "departure", "entering", "crossing"], 0, "Приехать is to arrive by vehicle; при- commonly marks arrival."),
      q("‘Leave/depart by vehicle’ is…", ["приехать", "уехать", "войти", "перейти"], 1, "Уехать means to leave/go away by vehicle.")
    ],
    10: [
      q("Choose the polite imperative of читать.", ["читай", "читайте", "прочитал", "читать бы"], 1, "The polite/plural imperative is читайте."),
      q("Which is a natural negative polite request?", ["Не говорите так быстро, пожалуйста.", "Нет говорите быстро.", "Не говорить вы быстро.", "Вы не говори быстро."], 0, "Не + polite imperative is the normal negative request pattern here."),
      q("Choose ‘Please call me tomorrow’ (polite).", ["Позвоните мне завтра, пожалуйста.", "Звонить меня завтра.", "Позвонишь мне пожалуйста вы.", "Позвоните я завтра."], 0, "Позвоните is polite imperative; the recipient is dative мне."),
      q("Perfective imperatives often present an action as…", ["a concrete bounded request/result", "a permanent state only", "always rude", "impossible in commands"], 0, "Aspect in imperatives is nuanced, but perfective commonly focuses a concrete completed action/result.")
    ],
    11: [
      q("Choose ‘the café that we found.’", ["кафе, который мы нашли", "кафе, которое мы нашли", "кафе, которая мы нашли", "кафе, которого мы нашли"], 1, "Кафе is neuter, so the relative pronoun starts as которое; inside the clause it is direct object and remains neuter inanimate accusative."),
      q("Choose ‘more interesting.’", ["интереснее", "самый интереснее", "более интересный чем всех", "интересный больше"], 0, "The simple comparative of интересный is интереснее."),
      q("‘The most convenient option’ is…", ["самый удобный вариант", "удобнее вариант", "самее удобный вариант", "вариант более всех удобно"], 0, "Самый + adjective is the common compound superlative pattern."),
      q("The form of который is determined by…", ["only the noun before it", "its role inside the relative clause, plus gender/number of its antecedent", "English word order", "the tense of the main verb"], 1, "Gender/number come from the antecedent, while case comes from the pronoun’s role inside the relative clause.")
    ],
    12: [
      q("Choose the connector meaning ‘although.’", ["поэтому", "хотя", "чтобы", "потому что"], 1, "Хотя introduces concession: although/even though."),
      q("Choose ‘I think that…’", ["Я думаю, что…", "Я думаю потому…", "Мне думаю что…", "Я думать, который…"], 0, "Что introduces many content clauses after verbs of thinking/saying."),
      q("Which connector means ‘therefore/so’?", ["однако", "например", "поэтому", "несмотря на"], 2, "Поэтому expresses consequence: therefore/so."),
      q("A natural way to soften an opinion is…", ["Мне кажется, что…", "Это точно и всё.", "Ты неправ.", "Никаких мнений."], 0, "Мне кажется, что… is a common hedging frame: it seems to me / I think.")
    ],
    13: [
      q("At B1 travel level, the best repair strategy when you forget a word is to…", ["stop speaking completely", "switch immediately to English every time", "paraphrase or describe it and ask for clarification", "guess random endings"], 2, "B1 interaction includes compensating for gaps by paraphrasing, checking understanding, and keeping the exchange going."),
      q("Choose the most flexible opening before using Russian in Riga.", ["Говорите по-русски!", "Здравствуйте. Вам удобнее по-латышски, по-русски или по-английски?", "Вы русский, да?", "Я буду говорить только по-русски."], 1, "Language preference is personal. Asking courteously gives the other person an easy choice."),
      q("Which task best tests real travel readiness?", ["reciting a case table only", "handling a changed reservation, asking follow-up questions, and confirming the solution", "copying vocabulary ten times", "reading transliteration"], 1, "Travel readiness depends on interactive problem-solving, not only recognition of forms."),
      q("For a 3-minute B1 monologue, you should aim to…", ["use isolated memorized phrases only", "connect ideas with time, reason, contrast, and examples", "avoid verbs", "translate every English sentence literally"], 1, "Connected speech uses linking devices and organized ideas rather than disconnected chunks.")
    ]
  };
  C.weeks.forEach(w => { if (extraQuiz[w.id]) w.quiz.push(...extraQuiz[w.id]); });

  const newWeeks = [
    {
      id:14, band:"B1 → B2", title:"Numbers, dates, quantities & pronoun precision", icon:"24",
      goals:["Handle dates, prices, percentages and larger numbers confidently","Use personal, demonstrative and negative pronouns across cases","Discuss quantities and approximations","Avoid common numeral-case mistakes"],
      grammar:[
        "Russian numerals control case. After 2–4, many counted nouns use genitive singular; after 5–20 and many larger numerals, genitive plural is typical: два билета, пять билетов.",
        "Compound numerals follow the final relevant component: двадцать один билет, двадцать два билета, двадцать пять билетов.",
        "Pronouns decline irregularly: меня/мне/мной; тебя/тебе/тобой; его/ему/им; её/ей/ею; нас/нам/нами; вас/вам/вами; их/им/ими.",
        "After many prepositions, third-person pronouns gain н-: у него, к ней, с ними. Not every environment adds н-, so learn high-frequency phrases as chunks.",
        "Negative pronouns split by stress and prepositions: никто́/ничто́, but не́кого/не́чего; with a preposition: ни с кем, не о чем."
      ],
      phrases:[["Сколько это стоит вместе?","How much is this altogether?"],["Нас будет трое.","There will be three of us."],["Мы приезжаем двадцать второго декабря.","We arrive on December 22."],["Около половины группы уже готово.","About half of the group is already ready."],["Ни у кого нет сдачи?","Does nobody have change?"],["Мне не с кем это обсудить.","I have nobody to discuss this with."],["Я ничего об этом не знаю.","I don't know anything about it."],["Дайте нам ещё два билета, пожалуйста.","Please give us two more tickets."]],
      vocab:["число|number/date","цифра|digit","количество|quantity","процент|percent","половина|half","треть|third (fraction)","четверть|quarter","пара|couple/pair","несколько|several","примерно|approximately","около|about/around","почти|almost","больше|more","меньше|less","каждый|each/every","любой|any","никто|nobody","ничто|nothing","кто-то|someone","что-то|something","кто-нибудь|anyone/someone","что-нибудь|anything/something","оба|both","весь|all/whole","остальной|remaining/rest of"],
      sessions:["Numeral drill: say prices from 1 to 10,000 ruble-style units and decline билет/минута/день after them.","Calendar drill: birthdays, arrival dates, hotel dates, and time ranges.","Pronoun case table from memory, then use every form in a short sentence.","Negative-pronoun transformation: кто → никто / некого; что → ничто / нечего; add prepositions.","Listening: transcribe ten prices/dates/numbers from native audio.","Sentence Lab: complete 15 numeral/pronoun builders.","Partner role-play: buy group tickets, correct a price misunderstanding, and confirm dates.","Quiz + 120-word message giving exact travel logistics."],
      resource:{label:"Между нами • case reference",url:"https://mezhdunami.ku.edu/cases.shtml"},
      quiz:[
        q("Choose ‘five tickets.’",["пять билета","пять билетов","пять билеты","пять билетами"],1,"After пять, the counted plural noun is normally genitive plural: билетов."),
        q("Choose ‘two minutes.’",["две минуты","два минуты","две минут","два минута"],0,"Минута is feminine, so use две; after 2–4 use genitive singular: минуты."),
        q("‘With them’ is…",["с их","с ними","с им","с них"],1,"The instrumental form after с is ними; third-person pronouns often gain н- after prepositions."),
        q("‘I know nothing’ is…",["Я не знаю ничто.","Я ничего не знаю.","Я никто не знаю.","Мне нечего знаю."],1,"Standard double negation uses genitive ничего with не знаю."),
        q("Choose ‘There is nobody to ask.’",["Некого спросить.","Никто спросить.","Ни кого спросить.","Нечего кого."],0,"Некого + infinitive means there is nobody available to be the object of the action."),
        q("21 tickets is…",["двадцать один билет","двадцать одна билета","двадцать один билетов","двадцать одно билет"],0,"A compound numeral ending in 1 (except 11) takes nominative singular here: один билет."),
        q("22 tickets is…",["двадцать два билета","двадцать две билеты","двадцать два билетов","двадцать второй билет"],0,"A compound numeral ending in 2–4 (except 12–14) takes genitive singular: билета."),
        q("‘About ten minutes’ is…",["около десяти минут","около десять минуты","около десять минут","около десятью минутами"],0,"Около takes genitive; десять declines to десяти and минут is genitive plural."),
        q("‘For each person’ is…",["для каждый человек","для каждого человека","каждому человека","каждым человек"],1,"Для takes genitive: каждого человека."),
        q("Which means ‘something’?",["ничто","что-то","некого","никто"],1,"Что-то means something; ничто means nothing.")
      ]
    },
    {
      id:15, band:"B1 → B2", title:"Verbs of motion II: prefixes, routes & nuance", icon:"↔",
      goals:["Use common prefixed motion verbs","Narrate arrivals, departures, crossings and detours","Distinguish process, completed trip and habitual movement","Give complex route instructions"],
      grammar:[
        "Common motion prefixes: при- arrival (прийти/приехать), у- departure (уйти/уехать), в-/вы- enter/exit, под- approach, от- move away, пере- cross/transfer, про- pass/go through, за- stop by, до- reach as far as.",
        "A prefixed unidirectional motion verb is usually perfective: прийти, уехать, перейти. The corresponding iterative/imperfective is often built from the multidirectional base: приходить, уезжать, переходить.",
        "Aspect still matters: Когда мы приехали… (completed arrival) vs Когда мы приезжали… (on occasions when we came / during a visit, context-dependent).",
        "Transport nouns combine with на + prepositional for being on/in some public transport contexts and с + genitive for getting off: ехать на автобусе, выйти из автобуса; everyday usage varies by vehicle.",
        "Route language relies heavily on до + genitive, через + accusative, мимо + genitive, вдоль + genitive, к + dative."
      ],
      phrases:[["Нам нужно перейти через улицу.","We need to cross the street."],["Мы только что приехали.","We just arrived."],["На следующей остановке нужно выйти.","We need to get off at the next stop."],["Дойдите до перекрёстка и поверните направо.","Walk as far as the intersection and turn right."],["Мы заедем за вами по дороге.","We'll stop by/pick you up on the way."],["Автобус проезжает мимо рынка.","The bus passes by the market."],["Когда вы обычно приезжаете сюда?","When do you usually come here?"],["Мы чуть не проехали нашу остановку.","We almost passed our stop."]],
      vocab:["приходить/прийти|to arrive on foot","приезжать/приехать|to arrive by vehicle","уходить/уйти|to leave on foot","уезжать/уехать|to leave by vehicle","входить/войти|to enter on foot","выходить/выйти|to exit on foot","переходить/перейти|to cross on foot","проходить/пройти|to pass/go through on foot","подходить/подойти|to approach on foot","отходить/отойти|to move away on foot","доходить/дойти|to reach on foot","заходить/зайти|to stop by/go in","заезжать/заехать|to stop by by vehicle","пересадка|transfer","маршрут|route","перекрёсток|intersection","переход|crossing","мимо|past/by","вдоль|along","через|across/through","напротив|opposite","поворот|turn","направление|direction","добраться|to get/reach","заблудиться|to get lost"],
      sessions:["Prefix map: draw the motion prefixes around a box and attach one example to each.","Aspect-pair drill with приходить/прийти, уезжать/уехать, переходить/перейти.","Explain three routes in your town without English.","Narrate a missed-stop story using at least five motion verbs.","Listen to native route instructions and sketch the route.","Sentence Lab: 15 motion-verb builders.","Partner mission: one navigator, one traveler; require clarification twice before arriving.","Quiz + 2-minute route explanation from memory."],
      resource:{label:"Между нами • verbs of motion",url:"https://mezhdunami.ku.edu/unit05/5_8/language.shtml"},
      quiz:[
        q("‘We arrived by train’ is…",["Мы приехали на поезде.","Мы приходили поездом сейчас.","Мы ушли поездом.","Мы входили поезд."],0,"Приехали expresses completed arrival by vehicle; на поезде is a common way to name the transport."),
        q("Which verb means ‘to leave on foot’ as a completed event?",["прийти","уйти","уехать","войти"],1,"Уйти is perfective ‘leave/go away on foot.’"),
        q("‘Cross the street’ is…",["перейти улицу","пройти улицы","уехать улицу","войти улицей"],0,"Перейти + accusative is the common ‘cross’ construction."),
        q("‘Walk as far as the station’ is…",["дойти до вокзала","прийти из вокзала","идти вокзалом","доехать в вокзале"],0,"Дойти до + genitive expresses reaching a point on foot."),
        q("Which pair is aspectual/iterative for ‘arrive on foot’?",["приходить / прийти","ходить / ехать","войти / выйти","приезжать / уходить"],0,"Приходить is imperfective; прийти is perfective."),
        q("‘Past the museum’ is…",["мимо музея","через музею","до музей","вдоль музей"],0,"Мимо governs genitive: мимо музея."),
        q("‘Through the park’ is…",["через парк","мимо парк","к парком","от парка через"],0,"Через takes accusative: через парк."),
        q("A completed one-time ‘I stopped by the pharmacy’ is…",["Я заходил в аптеку каждый день.","Я зашёл в аптеку.","Я хожу аптеку.","Я пройду из аптеки."],1,"Зашёл is a perfective masculine past form of зайти."),
        q("Which prefix commonly signals departure?",["при-","у-","под-","до-"],1,"У- commonly contributes the idea of going away/departure."),
        q("‘Get off at the next stop’ uses which verb?",["войти","выйти","прийти","перейти"],1,"Выйти is the standard verb for exiting/getting off.")
      ]
    },
    {
      id:16, band:"B2 build", title:"Aspect under pressure & infinitive constructions", icon:"✓✓",
      goals:["Choose aspect in nuanced past/future contexts","Use phase verbs and infinitive complements","Express attempts, success, obligation and possibility","Recognize aspect after negation and imperatives"],
      grammar:[
        "Aspect is about how the speaker frames an event, not a simple English tense translation. Imperfective often presents process, repetition, background or the activity itself; perfective often presents a bounded result or single whole event.",
        "Phase verbs such as начать, продолжать, закончить usually combine with an imperfective infinitive because they refer to stages of an activity: начать читать, закончить писать.",
        "Удалось + dative + perfective infinitive expresses successful accomplishment: Мне удалось купить билеты. Не удалось… expresses failure to achieve the result.",
        "Пытаться/стараться generally focus an attempt/effort and commonly take an imperfective infinitive: пытаться понять, стараться говорить.",
        "After negation, aspect depends on meaning: Я не читал эту книгу can deny the activity/experience; Я не прочитал книгу can mean I did not finish it."
      ],
      phrases:[["Мне удалось всё забронировать.","I managed to book everything."],["Я не успел закончить.","I didn't manage to finish in time."],["Мы продолжали разговаривать.","We kept talking."],["Она перестала курить.","She stopped smoking."],["Я пытался объяснить проблему.","I tried to explain the problem."],["Не забудьте проверить адрес.","Don't forget to check the address."],["Я так и не смог найти билет.","I never did manage to find the ticket."],["Давайте сначала решим эту проблему.","Let's solve this problem first."]],
      vocab:["удаваться/удаться|to manage/succeed","успевать/успеть|to manage in time","пытаться|to try/attempt","стараться|to try/make an effort","продолжать/продолжить|to continue","начинать/начать|to begin","заканчивать/закончить|to finish","переставать/перестать|to stop doing","забывать/забыть|to forget","вспоминать/вспомнить|to remember/recall","решать/решить|to solve/decide","объяснять/объяснить|to explain","проверять/проверить|to check","исправлять/исправить|to correct/fix","получаться/получиться|to work out/turn out","суметь|to manage/be able","смочь|to be able (perfective)","обязательно|definitely/must","вовремя|on time","заранее|in advance","случайно|accidentally","наконец|finally","снова|again","до конца|to the end","результат|result"],
      sessions:["Sort 40 contexts into process/repetition/background/result and justify your aspect choice.","Build aspect pairs for 25 high-frequency verbs; mark irregular pairs.","Transform ten sentences between imperfective and perfective and explain the change in meaning.","Practice удалось/не удалось, успел/не успел, смог/не смог with real travel problems.","Listening: identify why a speaker chose each aspect in a short story.","Sentence Lab: 15 aspect builders.","Partner challenge: retell the same event twice—once emphasizing process, once result.","Quiz + write 150 words about a difficult task and how it turned out."],
      resource:{label:"Между нами • aspect summary",url:"https://mezhdunami.ku.edu/unit06/6_3/language.shtml"},
      quiz:[
        q("After начал, which is most natural for ‘He began reading’?",["Он начал прочитать.","Он начал читать.","Он начал прочитал.","Он начинал прочитав."],1,"Phase verbs such as начать normally take an imperfective infinitive: начал читать."),
        q("‘I managed to buy the tickets’ is…",["Мне удалось купить билеты.","Я удалось покупать билеты.","Мне удавался билеты купить.","Я удался билеты."],0,"Удалось is impersonal; the experiencer is dative and a completed result naturally uses perfective купить."),
        q("‘I didn't finish the book’ is best expressed as…",["Я не читал книгу.","Я не прочитал книгу.","Я не читать книгу.","Мне не книга."],1,"Не прочитал focuses the missing completed result: not finishing the book."),
        q("Which emphasizes repeated activity?",["Каждый вечер я читал.","Вчера я прочитал статью.","Я наконец написал письмо.","Она пришла в восемь."],0,"Каждый вечер signals repetition, a classic imperfective context."),
        q("‘She kept working’ is…",["Она продолжала работать.","Она продолжила сработать.","Она работала продолжить.","Она продолжала поработать один раз."],0,"Продолжать takes an imperfective activity infinitive: работать."),
        q("Which means ‘I didn't manage in time to call’?",["Я не успел позвонить.","Я не смог звоню.","Мне не удалось звонящий.","Я не успевал позвонил."],0,"Не успел + perfective infinitive means the action was not completed in time."),
        q("‘I tried to understand’ is naturally…",["Я пытался понимать.","Я пытался понять.","Я пытался понял.","Мне пытаться понимал."],1,"Пытаться can take an infinitive; понять is natural when the intended goal is successful understanding."),
        q("Which pair is an aspect pair?",["решать / решить","говорить / слушать","ехать / ходить","знать / узнаться"],0,"Решать/решить share lexical meaning and contrast imperfective/perfective framing."),
        q("Imperfective future is formed with…",["буду + infinitive","perfective past + был","давай + past","есть + infinitive"],0,"Буду/будешь/etc. + imperfective infinitive forms the compound future."),
        q("Perfective non-past forms normally refer to…",["present habitual action","future completed/bounded action","past background only","timeless identity"],1,"Perfective verbs lack a true present; their non-past conjugated forms normally have future meaning.")
      ]
    },
    {
      id:17, band:"B2 build", title:"Reflexive, impersonal & passive-style Russian", icon:"-ся",
      goals:["Use -ся verbs accurately","Express states and impersonal experiences","Recognize passive constructions","Sound less like a word-for-word English translation"],
      grammar:[
        "-ся/-сь has several functions: true reflexive (мыться), reciprocal (встречаться), middle/intransitive (дверь открывается), and lexical verbs whose meaning must be learned (бояться, надеяться, пользоваться).",
        "Russian often prefers impersonal constructions: Мне холодно. Здесь нельзя курить. Нужно подождать. Меня тошнит. The grammatical structure may differ sharply from English.",
        "Present passive meaning can be expressed with imperfective -ся in appropriate contexts: Дом строится. Context determines whether the reading is passive/middle.",
        "Past/result passive commonly uses short passive participles: Билеты куплены. Дверь закрыта. These agree in gender/number with the subject.",
        "Instrumental can mark the agent in passive constructions, especially formal written style: книга написана автором."
      ],
      phrases:[["Здесь не курят.","People don't smoke here / No smoking here."],["Мне здесь очень нравится.","I really like it here."],["Дверь закрыта.","The door is closed."],["Билеты уже куплены.","The tickets have already been bought."],["Этим приложением легко пользоваться.","This app is easy to use."],["Мне не спится.","I can't sleep / I don't feel sleepy."],["Нам придётся подождать.","We'll have to wait."],["Вопрос решается довольно быстро.","The issue is being resolved fairly quickly."]],
      vocab:["пользоваться|to use (instr.)","бояться|to fear/be afraid","надеяться|to hope","интересоваться|to be interested in","заниматься|to engage in/study","встречаться|to meet/date","договариваться/договориться|to arrange/come to agreement","случаться/случиться|to happen","оказываться/оказаться|to turn out/find oneself","приходиться/прийтись|to have to / fit/suit (context)","нельзя|must not/cannot","можно|may/can","нужно|necessary","следует|one should","принято|it is customary","закрыт|closed (short adj/part.)","открыт|open","куплен|bought","сделан|made/done","написан|written","решён|solved","построен|built","готов|ready","видно|it is visible","слышно|it is audible"],
      sessions:["Classify 30 -ся verbs by reflexive/reciprocal/middle/lexical meaning.","Translate impersonal ideas into natural Russian without preserving English subjects.","Build and decline 15 short passive participles across gender/number.","Read a short news-style paragraph and highlight passive constructions.","Rewrite ten clunky English-shaped sentences into more idiomatic Russian.","Sentence Lab: 15 -ся/impersonal builders.","Partner role-play: describe hotel rules, what is allowed, and what has already been arranged.","Quiz + 150-word description of how a trip is organized."],
      resource:{label:"Cornell Russian grammar • participles",url:"https://russian.cornell.edu/verbs/irg22n24participles.htm"},
      quiz:[
        q("‘I am interested in history’ is…",["Я интересуюсь историей.","Я интересую историю.","Мне интересуюсь история.","Я интересуюсь историю."],0,"Интересоваться is a lexical -ся verb and governs instrumental: историей."),
        q("‘It is cold for me / I am cold’ is…",["Я холодный.","Мне холодно.","Меня холодно есть.","Я имею холод."],1,"Russian commonly uses an impersonal predicative with dative experiencer: мне холодно."),
        q("‘The tickets have been bought’ is…",["Билеты купили.","Билеты куплены.","Билеты покупаются вчера.","Куплены билет."],1,"Куплены is a plural short passive participle agreeing with билеты."),
        q("Which verb requires instrumental?",["пользоваться","ждать","видеть","любить"],0,"Пользоваться governs the instrumental: пользоваться приложением."),
        q("‘Smoking is not allowed here’ is…",["Здесь нельзя курить.","Здесь не можно курить.","Здесь нельзя курю.","Здесь не курить я."],0,"Нельзя + infinitive is a standard impersonal prohibition."),
        q("Short passive participles agree with the subject in…",["gender and number","person only","case only","aspect only"],0,"Short passive participles vary for masculine/feminine/neuter/plural."),
        q("‘The door is closed’ is…",["Дверь закрыта.","Дверь закрытый.","Дверь закрыто.","Двери закрыт."],0,"Дверь is feminine, so the short form is закрыта."),
        q("Which is reciprocal?",["мыться","встречаться","открываться","бояться"],1,"Встречаться can express meeting one another; context can also mean dating."),
        q("‘It can be seen from here’ is naturally…",["Отсюда видно.","Отсюда видит.","Здесь видный.","Отсюда имеет вид."],0,"Видно is an impersonal predicative meaning ‘it is visible/can be seen.’"),
        q("In книга написана автором, автором is…",["instrumental agent","dative recipient","genitive possessor","accusative object"],0,"The instrumental can mark the agent in passive constructions.")
      ]
    },
    {
      id:18, band:"B2 build", title:"Complex sentences: чтобы, хотя, если & который", icon:"↳",
      goals:["Link clauses naturally","Express purpose, concession and conditions","Use который in multiple cases","Avoid repetitive short sentences"],
      grammar:[
        "Чтобы introduces purpose and desired-result clauses: Я позвонил, чтобы уточнить адрес. With different subjects, Russian often uses a past-form verb after чтобы: Я хочу, чтобы вы пришли.",
        "Хотя introduces concession: Хотя было холодно, мы гуляли. Несмотря на + accusative/genitive-like fixed patterns can express ‘despite’ in more nominal style; learn examples rather than literal translation.",
        "Real conditions use если with normal tense/aspect choices: Если будет время, мы зайдём. Unreal/hypothetical conditions commonly use бы + past-form verbs: Если бы было время, мы бы зашли.",
        "Который agrees in gender/number with its antecedent, but its case comes from its role in the relative clause: человек, с которым я говорил; улица, на которой мы живём.",
        "Чем…, тем… expresses correlated comparison: Чем больше я слушаю, тем легче понимаю."
      ],
      phrases:[["Я позвонил, чтобы уточнить адрес.","I called to confirm the address."],["Я хочу, чтобы вы говорили медленнее.","I want you to speak more slowly."],["Хотя было холодно, мы долго гуляли.","Although it was cold, we walked for a long time."],["Если будет время, мы зайдём.","If there is time, we'll stop by."],["Если бы я знал, я бы сказал.","If I knew, I would tell you."],["Это человек, с которым я говорил.","This is the person I spoke with."],["Чем больше я практикуюсь, тем увереннее говорю.","The more I practice, the more confidently I speak."],["Несмотря на погоду, поездка удалась.","Despite the weather, the trip went well."]],
      vocab:["цель|goal/purpose","условие|condition","причина|reason","следствие|consequence","несмотря на|despite","хотя|although","чтобы|so that/in order to","если|if","если бы|if (hypothetical)","пока|while/until","поскольку|since/because (formal)","так как|since/because","зато|but on the positive side","тем не менее|nevertheless","в то время как|whereas/while","чем… тем…|the more… the more…","который|which/who","чей|whose","где|where (relative)","куда|where to (relative)","откуда|where from","уточнять/уточнить|to clarify/confirm","предполагать/предположить|to suppose/assume","зависеть|to depend","несмотря|despite/regardless"],
      sessions:["Combine 30 pairs of simple sentences with appropriate connectors.","Который case drill: 25 relative clauses across all six cases.","Purpose clauses: same-subject infinitive vs different-subject чтобы + past-form verb.","Write ten real and ten hypothetical conditions about Riga.","Listening: identify concession, cause, purpose, and condition in a native clip.","Sentence Lab: 18 complex-sentence builders.","Debate with a partner using хотя, зато, поэтому, тем не менее, если бы.","Quiz + 180-word opinion paragraph with at least eight connectors."],
      resource:{label:"Cornell • real and unreal conditions",url:"https://russian.cornell.edu/grammar/html/gr12_c_a.htm"},
      quiz:[
        q("‘I called to confirm the address’ is…",["Я позвонил, чтобы уточнить адрес.","Я позвонил потому уточнить адрес.","Я позвонил который адрес.","Я позвонил если адрес."],0,"Чтобы + infinitive expresses purpose when the understood subject is the same."),
        q("Choose ‘I want you to come.’",["Я хочу, чтобы вы пришли.","Я хочу, что вы прийти.","Я хочу вы пришли без чтобы.","Мне хочется чтобы вы придёте."],0,"With a different subject, чтобы commonly takes a past-form verb: чтобы вы пришли."),
        q("‘Although it was late’ is…",["Потому что было поздно","Хотя было поздно","Чтобы было поздно","Если бы поздно"],1,"Хотя means although/even though."),
        q("A hypothetical ‘If I had time, I would go’ is…",["Если у меня будет время, я пойду.","Если бы у меня было время, я бы пошёл/пошла.","Когда время было, я иду.","Если время, я ходил бы вчера."],1,"Unreal conditions commonly use бы with past-form verbs in both clauses."),
        q("‘The person I spoke with’ requires который in…",["nominative","accusative","instrumental","genitive"],2,"С кем? The relative pronoun is object of с, so instrumental: с которым."),
        q("‘The street we live on’ is…",["улица, на которой мы живём","улица, которую мы живём","улица, которой мы живём на","улица, где мы живём на ней"],0,"На + prepositional is required inside the relative clause: на которой."),
        q("Which connector is more formal for ‘since/because’?",["поскольку","зато","если бы","чем"],0,"Поскольку is a common more formal/written causal connector."),
        q("‘The more I listen, the more I understand’ begins…",["Хотя… поэтому…","Чем больше… тем больше…","Если бы… зато…","Который… чтобы…"],1,"Correlated comparison uses чем…, тем…."),
        q("‘Despite the rain’ is…",["несмотря на дождь","хотя дождём","из-за дождь несмотря","если дождя"],0,"Несмотря на is followed by the accusative: несмотря на дождь."),
        q("Which connector signals a positive counterbalance, roughly ‘but on the other hand’?",["зато","поскольку","чтобы","если"],0,"Зато highlights a compensating positive contrast.")
      ]
    },
    {
      id:19, band:"B2 build", title:"Reported speech, questions & conversational particles", icon:"« »",
      goals:["Report what people said without confusion","Embed questions","Use common particles for tone","Follow longer conversations"],
      grammar:[
        "Reported statements commonly use что: Он сказал, что будет поздно. Russian tense does not mechanically backshift the way English often does; choose the tense that fits the time relation.",
        "Reported yes/no questions use ли: Она спросила, есть ли у нас билеты. The word directly before ли is often the focused element.",
        "Reported wh-questions keep the question word: Он спросил, где мы живём. Word order becomes statement-like rather than requiring an English-style inversion.",
        "Particles matter greatly in conversation: же can emphasize/remind, ведь appeals to shared knowledge, даже means even, именно means precisely, только can mean only/just, разве can signal surprise/doubt in questions.",
        "Даже если, всё-таки, вообще-то, как раз, по крайней мере help shape stance and cohesion at B2."
      ],
      phrases:[["Он сказал, что опоздает.","He said he would be late."],["Она спросила, есть ли у нас билеты.","She asked whether we had tickets."],["Я не понял, что именно произошло.","I didn't understand what exactly happened."],["Ты же знаешь, как это работает.","You know how this works, after all."],["Вообще-то мы уже договорились.","Actually, we already agreed."],["Это как раз то, что нам нужно.","That's exactly what we need."],["По крайней мере, мы попробовали.","At least we tried."],["Всё-таки я решил поехать.","In the end / nevertheless, I decided to go."]],
      vocab:["сообщать/сообщить|to report/inform","спрашивать/спросить|to ask","отвечать/ответить|to answer","утверждать|to claim/state","объяснять/объяснить|to explain","упоминать/упомянуть|to mention","предупреждать/предупредить|to warn","обещать/пообещать|to promise","ли|whether/if (particle)","же|emphatic particle","ведь|after all/as you know","даже|even","именно|exactly/precisely","только|only/just","разве|really?/isn't it?","вообще-то|actually","как раз|exactly/just","всё-таки|still/after all/in the end","по крайней мере|at least","вряд ли|unlikely","конечно|of course","действительно|indeed/really","якобы|allegedly/supposedly","мол|quotative particle (colloquial)","наверняка|for sure"],
      sessions:["Convert 20 direct statements into reported speech.","Reported-question drill with ли and six wh-words.","Listen for particles in a native conversation and infer their tone/function.","Retell a partner’s story without looking at notes.","Compare English tense backshift with natural Russian examples.","Sentence Lab: 15 reported-speech builders.","Partner game: telephone chain—report exactly what the previous person said.","Quiz + 180-word retelling of a conversation."],
      resource:{label:"Pushkin Institute • threshold/B1+ course",url:"https://pushkininstitute.ru/certified1"},
      quiz:[
        q("‘He said that he would be late’ is…",["Он сказал, что опоздает.","Он сказал ли опоздает.","Он сказал который поздно.","Он сказал чтобы опоздал я."],0,"Reported statements commonly use что."),
        q("‘She asked whether we had tickets’ uses…",["что","ли","чтобы","который"],1,"Embedded yes/no questions use ли."),
        q("Choose the embedded question ‘He asked where we live.’",["Он спросил, где мы живём.","Он спросил, где живём ли мы?","Он спросил, что где мы живём.","Он спросил, где ли жить."],0,"Wh-questions retain the question word and use statement-like syntax."),
        q("Вообще-то most often means…",["actually / as a matter of fact","unless","therefore","even though"],0,"Вообще-то is a conversational correction/qualification roughly ‘actually.’"),
        q("Как раз often adds the meaning…",["exactly / just the one or time","never","approximately","despite"],0,"Как раз focuses an exact match or timing."),
        q("По крайней мере means…",["at least","at once","for example","in advance"],0,"По крайней мере = at least."),
        q("Вряд ли means…",["very likely","unlikely / probably not","certainly","only if"],1,"Вряд ли marks low probability."),
        q("Which particle can add emphatic shared-knowledge flavor, as in Ты же знаешь…?",["же","ли","бы","ни"],0,"Же can remind/emphasize something assumed to be known."),
        q("In a reported yes/no question, ли usually comes…",["near the focused element","always sentence-final","before every noun","only after punctuation"],0,"Ли is an enclitic particle commonly placed after the word/phrase in focus."),
        q("Russian reported speech requires English-style tense backshift in every case.",["True","False"],1,"Russian tense choices follow actual time relations and do not mechanically mirror English backshift rules.")
      ]
    },
    {
      id:20, band:"B2", title:"Participles: reading dense Russian without panic", icon:"-ющий",
      goals:["Recognize active and passive participles","Expand participles into который clauses","Use common participial forms in reading","Produce only high-value forms accurately"],
      grammar:[
        "Participles are verb-derived adjectives: they agree with nouns in gender, number and case while retaining verbal properties. They are common in formal/written Russian and denser prose.",
        "Present active participles are generally formed from imperfective verbs and describe an ongoing/characteristic actor: человек, говорящий по-русски = a person who speaks/is speaking Russian.",
        "Past active participles often describe the doer of a completed/past action: человек, приехавший вчера = the person who arrived yesterday.",
        "Past passive participles are especially useful: письмо, написанное вчера; short forms often express a result/state: письмо написано.",
        "For speaking, a который-clause is often safer and more natural for learners. B2 success requires recognition and selective production, not showing off every possible participial morphology."
      ],
      phrases:[["человек, говорящий по-русски","a person speaking Russian"],["поезд, прибывший утром","the train that arrived in the morning"],["билет, купленный онлайн","a ticket bought online"],["письмо, написанное вчера","a letter written yesterday"],["решение, принятое командой","a decision made by the team"],["люди, живущие здесь","people who live here"],["документы, необходимые для поездки","documents necessary for the trip"],["вопрос, который мы уже обсудили","a question that we already discussed"]],
      vocab:["причастие|participle","действительный|active (grammar)","страдательный|passive (grammar)","настоящий|present/current","прошедший|past/previous","полный|full/long form","краткий|short form","говорящий|speaking","живущий|living","работающий|working","прибывший|having arrived","уехавший|having left","купленный|bought","написанный|written","сделанный|made/done","принятый|accepted/adopted","решённый|resolved","открытый|opened/open","закрытый|closed","необходимый|required/necessary","связанный|connected/related","расположенный|located","известный|known/famous","созданный|created","предназначенный|intended/designed"],
      sessions:["Underline participles in a short article; identify noun, voice, tense, case.","Expand 20 participles into который clauses.","Compress 15 который clauses into participles where natural.","Decline one participial phrase through six cases to see agreement mechanics.","Read a formal notice and paraphrase it into simpler spoken Russian.","Sentence Lab: 15 participle/relative-clause builders.","Partner explanation: describe five objects using either participles or который clauses.","Quiz + 180-word summary containing at least three correctly used participial phrases or equivalent relative clauses."],
      resource:{label:"Cornell • participles",url:"https://russian.cornell.edu/verbs/irg22n24participles.htm"},
      quiz:[
        q("A participle behaves grammatically most like…",["an adjective with verbal properties","an indeclinable adverb only","a preposition","a numeral"],0,"Russian participles agree like adjectives while retaining verbal meaning."),
        q("‘People who live here’ can be…",["люди, живущие здесь","люди, жить здесь","люди, живёт здесь","людям, живущий здесь"],0,"Живущие is a present active participle agreeing with plural люди."),
        q("‘A ticket bought online’ is…",["билет, купленный онлайн","билет, покупающий онлайн","билет, купивший онлайн","билет, купить онлайн"],0,"Купленный is a past passive participle: something that was bought."),
        q("‘The train that arrived yesterday’ can be…",["поезд, прибывший вчера","поезд, прибывающий вчера один раз","поезд, прибытый вчера","поезд, прибыл который"],0,"Прибывший is a past active participle referring to the actor that arrived."),
        q("Short passive participles often express…",["a result/state","only future intention","a question","possession"],0,"Forms such as написано, куплены, закрыта often express a completed result/state."),
        q("Which is a safe spoken alternative to a difficult participle?",["a который relative clause","deleting the verb entirely","English word order","using nominative for everything"],0,"Relative clauses with который are often more conversational and easier to control."),
        q("‘The letter is written’ is…",["Письмо написано.","Письмо написанный.","Письмо написана.","Письмом написано."],0,"Письмо is neuter, so the short passive participle is написано."),
        q("Present active participles are generally formed from…",["imperfective verbs","perfective verbs only","nouns","prepositions"],0,"Ongoing/characteristic present active participles generally come from imperfective verbs."),
        q("Participles agree with their noun in…",["gender, number and case","person and tense only","aspect only","nothing"],0,"Like adjectives, full participles agree in gender, number, and case."),
        q("B2 learners need to…",["recognize participles and use common ones accurately","memorize every rare participial form before speaking","avoid relative clauses","replace all verbs with participles"],0,"Recognition plus selective accurate production is the practical B2 goal.")
      ]
    },
    {
      id:21, band:"B2", title:"Deverbal adverbs: sequencing actions efficiently", icon:"-я/-в",
      goals:["Recognize imperfective and perfective deverbal adverbs","Keep the implied subject consistent","Compress background/sequential actions","Understand formal narrative style"],
      grammar:[
        "Deverbal adverbs (деепричастия) describe a secondary action performed by the same subject as the main verb: Гуляя по Риге, мы фотографировали дома.",
        "Imperfective forms often end in -а/-я and express simultaneous/background action: читая, говоря, работая.",
        "Perfective forms often use -в/-вши/-ши and express an action completed before the main action: прочитав, сделав, приехав.",
        "The subject rule matters: the understood doer of the deverbal adverb should normally be the grammatical subject of the main clause. Avoid dangling constructions.",
        "In casual speech, full clauses can sound more natural. At B2, prioritize recognition and use clear high-frequency forms rather than forcing them everywhere."
      ],
      phrases:[["Гуляя по Риге, мы много фотографировали.","Walking around Riga, we took lots of photos."],["Приехав в гостиницу, мы сразу легли спать.","Having arrived at the hotel, we went straight to bed."],["Читая меню, я заметил ошибку.","While reading the menu, I noticed a mistake."],["Закончив работу, она позвонила мне.","Having finished work, she called me."],["Не зная адреса, мы спросили прохожего.","Not knowing the address, we asked a passerby."],["Улыбаясь, он продолжал говорить.","Smiling, he continued speaking."],["Подумав, я согласился.","After thinking, I agreed."],["Вернувшись домой, мы обсудили поездку.","After returning home, we discussed the trip."]],
      vocab:["деепричастие|deverbal adverb/gerund","одновременно|simultaneously","предварительно|beforehand","гуляя|while walking","читая|while reading","говоря|while speaking","работая|while working","улыбаясь|smiling","думая|thinking","зная|knowing","не зная|not knowing","приехав|having arrived","уехав|having left","сделав|having done","прочитав|having read","закончив|having finished","решив|having decided","подумав|having thought","вернувшись|having returned","договорившись|having agreed/arranged","заметив|having noticed","услышав|having heard","увидев|having seen","получив|having received","проверив|having checked"],
      sessions:["Match 25 deverbal adverbs to their source verbs and aspect.","Subject-check drill: identify and repair dangling constructions.","Expand 20 deverbal-adverb sentences into full clauses.","Compress ten narrative sequences where the shared subject is clear.","Read a short narrative and order the actions on a timeline.","Sentence Lab: 15 sequencing builders.","Partner retelling: use three деепричастия, then retell naturally without them.","Quiz + 180-word travel story emphasizing sequencing."],
      resource:{label:"Cornell • deverbal adverbs",url:"https://russian.cornell.edu/verbs/irg23devAdverbs.htm"},
      quiz:[
        q("The implied subject of a deverbal adverb normally matches…",["the subject of the main clause","the nearest noun automatically","the object only","no one"],0,"A core rule is shared subject between the secondary and main action."),
        q("‘While reading the menu, I noticed…’ is…",["Читая меню, я заметил…","Прочитавший меню, мне заметил…","Читая меню, ошибка заметила меня.","Читал меню, заметив я…"],0,"Читая is an imperfective deverbal adverb with the same subject я as заметил."),
        q("Приехав most naturally means…",["having arrived","while repeatedly arriving","to arrive","arriving person"],0,"A perfective -в form typically presents a prior completed secondary action."),
        q("Which is an imperfective deverbal adverb?",["говоря","сказав","прочитав","решив"],0,"Говоря comes from imperfective говорить and commonly means ‘while speaking.’"),
        q("‘Having finished work, she called’ is…",["Закончив работу, она позвонила.","Заканчивая работу, он позвонила.","Закончив работу, ей позвонила.","Работу закончивший, она звонить."],0,"The completed prior action uses закончив and the shared subject is она."),
        q("A dangling deverbal adverb is problematic because…",["the implied doer does not match the main-clause subject","it has too many vowels","it must always be future","Russian has no such form"],0,"The construction can accidentally assign the secondary action to the wrong grammatical subject."),
        q("‘Not knowing the address’ is…",["не зная адреса","не знав адрес","не знать адреса","незнающий адрес"],0,"Не зная is the common imperfective deverbal-adverb phrase."),
        q("After thinking, I agreed = …",["Подумав, я согласился/согласилась.","Думающий, я согласился.","Подумать, мне согласился.","Я подумав соглашаться."],0,"Подумав is perfective and precedes the main completed decision/agreement."),
        q("In casual conversation, learners can often replace a difficult deverbal adverb with…",["a full clause","a random case ending","no subject","English participle syntax"],0,"A full clause is often clearer and more natural if the compressed form is uncertain."),
        q("Деепричастия are especially common in…",["written/narrative style","only baby talk","numbers","greetings only"],0,"They are common in denser written and narrative Russian, though they also appear in speech.")
      ]
    },
    {
      id:22, band:"B2", title:"Word formation, prefixes & register", icon:"слово",
      goals:["Guess unfamiliar words from roots and affixes","Build noun/adjective families","Choose neutral vs colloquial/formal wording","Recognize false friends"],
      grammar:[
        "Russian derivation is highly productive. Learn families: писать → написать → запись → записка → писатель → письменный. Recognizing roots can unlock unfamiliar texts.",
        "Common noun suffixes include -тель (person/device), -ние/-ение (action/result), -ость (abstract quality), -ка (many functions), -ник (person/object). Meanings are tendencies, not mechanical formulas.",
        "Adjective suffixes such as -ск-, -н-, -ов-/-ев-, -ическ- form many relational adjectives: туристический, городской, зимний.",
        "Register matters: здравствуйте vs привет; ребёнок vs дитя (stylistic); потому что vs поскольку (more formal); ладно (colloquial ‘okay’) vs хорошо.",
        "Beware false friends and near-cognates: магазин = shop, актуальный = current/relevant, аккуратный = neat/careful, фамилия = surname, артист = performing artist/actor (not simply ‘artist’)."
      ],
      phrases:[["Это довольно актуальная проблема.","This is a fairly current/relevant problem."],["Он очень аккуратный человек.","He is a very neat/careful person."],["Как это слово образовано?","How is this word formed?"],["Я понимаю общий смысл по контексту.","I understand the general meaning from context."],["Это выражение звучит слишком официально.","This expression sounds too formal."],["Так обычно говорят в разговорной речи.","That's how people usually say it in colloquial speech."],["Есть более нейтральный вариант?","Is there a more neutral version?"],["Я раньше неправильно понимал это слово.","I used to misunderstand this word."]],
      vocab:["корень|root","приставка|prefix","суффикс|suffix","окончание|ending","образовывать/образовать|to form/create","значение|meaning","оттенок|shade/nuance","выражение|expression","нейтральный|neutral","разговорный|colloquial","официальный|formal/official","книжный|bookish/literary","устаревший|outdated/archaic","современный|modern/contemporary","актуальный|current/relevant","аккуратный|neat/careful","магазин|shop/store","фамилия|surname","артист|performing artist","запись|recording/entry","записка|note","писатель|writer","письменный|written","городской|urban/city","зимний|winter/adjectival"],
      sessions:["Build 20 word families from high-frequency roots.","Affix hunt: underline prefixes/suffixes in a short text and predict meaning.","False-friend quiz from English-looking Russian words.","Rewrite a formal paragraph in neutral conversational Russian.","Rewrite a casual text message in polite neutral Russian.","Sentence Lab: 15 register/word-family builders.","Partner game: explain an unknown word using root, context and paraphrase.","Quiz + create a personal false-friend list of 30 items."],
      resource:{label:"Pushkin Institute • B2 vocabulary work",url:"https://ac.pushkininstitute.ru/course5.php"},
      quiz:[
        q("Магазин means…",["magazine","shop/store","warehouse only","museum"],1,"Russian магазин is a shop/store, not an English magazine."),
        q("Актуальный most often means…",["actual/factual","current/relevant","artistic","accurate"],1,"Актуальный is a common false friend: current, topical, relevant."),
        q("Аккуратный most often means…",["accurate only","neat/careful/tidy","angry","formal"],1,"Аккуратный is generally neat, tidy, careful; точный is often ‘accurate/exact.’"),
        q("Фамилия means…",["family","surname/last name","familiarity","relative"],1,"Фамилия = surname. Семья = family."),
        q("Which suffix often forms abstract nouns like возможность?",["-ость","-ский","-тель","-ать"],0,"-ость is a productive abstract-noun suffix, though word formation is not purely mechanical."),
        q("Поскольку is generally…",["a more formal causal connector","a greeting","a numeral","a motion prefix"],0,"Поскольку = since/because and is common in more formal/written style."),
        q("Ладно is usually…",["colloquial/conversational","highly formal legal language","archaic only","a case ending"],0,"Ладно is a common conversational ‘okay/all right.’"),
        q("The word family писать → писатель shows -тель forming…",["a person associated with an action","a plural case","a past tense","a preposition"],0,"-тель often forms agent/person or device nouns."),
        q("A good B2 reading strategy for an unknown derived word is to…",["identify root/affixes and use context","stop immediately","assume it is an English cognate","ignore all endings"],0,"Morphology plus context often gives enough meaning to keep reading."),
        q("‘Written language’ can be…",["письменная речь","писатель речь","записка говорить","пишет язык"],0,"Письменная речь = written language/speech.")
      ]
    },
    {
      id:23, band:"B2", title:"Argument, hedging & discourse: sounding connected", icon:"≈",
      goals:["State and defend opinions","Hedge claims","Organize long answers","Agree/disagree diplomatically"],
      grammar:[
        "B2 speech is not about using the fanciest grammar; it is about controlling connected discourse. Use frames for stance, evidence, contrast, concession, examples, and conclusions.",
        "Hedges include мне кажется, вероятно, возможно, насколько я понимаю, по-моему, скорее всего, в некоторой степени. These let you avoid sounding more certain than you are.",
        "Diplomatic disagreement can begin with Я понимаю вашу точку зрения, но…; Не совсем с этим согласен/согласна; С одной стороны…, с другой стороны…",
        "Topic organization: во-первых/во-вторых, прежде всего, кроме того, например, однако, тем не менее, в результате, в целом, таким образом.",
        "Use lexical repetition less mechanically by substituting pronouns, synonyms, hypernyms and ellipsis when meaning stays clear."
      ],
      phrases:[["С одной стороны, это удобно, с другой — дорого.","On one hand it's convenient; on the other, expensive."],["Насколько я понимаю, ситуация изменилась.","As far as I understand, the situation has changed."],["Я не совсем с этим согласна / согласен.","I don't completely agree with that."],["Главная причина заключается в том, что…","The main reason is that…"],["Кроме того, стоит учитывать…","In addition, it is worth considering…"],["Приведу простой пример.","I'll give a simple example."],["В целом я бы сказал / сказала, что…","Overall, I would say that…"],["Таким образом, можно сделать вывод, что…","Thus, one can conclude that…"]],
      vocab:["точка зрения|point of view","мнение|opinion","аргумент|argument","довод|reason/argument","доказательство|evidence/proof","пример|example","вывод|conclusion","преимущество|advantage","недостаток|disadvantage","сходство|similarity","различие|difference","вероятно|probably","возможно|possibly","скорее всего|most likely","в некоторой степени|to some extent","насколько|as far as/to what extent","во-первых|firstly","во-вторых|secondly","кроме того|in addition","однако|however","тем не менее|nevertheless","в результате|as a result","в целом|overall","таким образом|thus","учитывать/учесть|to take into account"],
      sessions:["Build a connector ladder from A2 words to B2 alternatives.","Give a 3-minute opinion with intro, two arguments, example, concession, conclusion.","Hedging drill: soften 20 overconfident statements.","Diplomatic disagreement role-play with a partner.","Listen to a commentary and map its argument structure.","Sentence Lab: 18 discourse builders.","Mini-debate: travel planning, budgets, language learning, technology, or city life.","Quiz + write a 220-word balanced opinion text."],
      resource:{label:"Council of Europe • CEFR descriptors",url:"https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors"},
      quiz:[
        q("Which phrase is a hedge?",["Это абсолютно невозможно и точка.","Насколько я понимаю…","Ты точно неправ.","Без сомнения всегда."],1,"Насколько я понимаю limits the claim to your understanding and is a useful B2 hedge."),
        q("Which is a diplomatic disagreement?",["Это глупость.","Не совсем с этим согласен/согласна.","Нет и всё.","Вы ничего не понимаете."],1,"Не совсем с этим согласен/согласна disagrees without unnecessary confrontation."),
        q("Таким образом signals…",["a conclusion/result","a greeting","uncertainty only","a time of day"],0,"Таким образом = thus/in this way and commonly introduces a conclusion."),
        q("Кроме того means…",["in addition","instead","although","at first"],0,"Кроме того adds another point."),
        q("С одной стороны… с другой стороны… organizes…",["two sides of an issue","a past tense","directions only","a quotation"],0,"The frame explicitly balances two perspectives."),
        q("Which phrase introduces an example?",["Например…","Тем не менее…","Вряд ли…","Поскольку…"],0,"Например = for example."),
        q("В целом means…",["overall/on the whole","in detail","never","as soon as"],0,"В целом summarizes at a general level."),
        q("Главная причина заключается в том, что… means…",["The main reason is that…","The main train arrives…","The problem disappeared…","The price depends on…"],0,"This is a structured frame for giving a central reason."),
        q("At B2, a long answer should ideally…",["link ideas and signal relationships","be one memorized sentence","avoid connectors","use rare participles in every clause"],0,"Coherence and flexible organization are central to upper-intermediate communication."),
        q("Which word means ‘advantage’?",["недостаток","преимущество","различие","вывод"],1,"Преимущество = advantage; недостаток = disadvantage/drawback.")
      ]
    },
    {
      id:24, band:"B2 capstone", title:"B2 capstone: authentic input, mediation & real-life fluency", icon:"B2",
      goals:["Understand main ideas of complex standard input","Sustain spontaneous interaction","Write clear detailed connected text","Summarize and relay information for others"],
      grammar:[
        "At B2, grammar becomes an integration problem: choose cases, aspect, word order, connectors, and register under time pressure rather than studying each item in isolation.",
        "Mediation means helping meaning travel between people or texts: summarize an announcement, explain a menu item, relay instructions, or simplify a complicated message without translating word-for-word.",
        "Word order is flexible but not random. Theme/known information often comes earlier; new/focused information often comes later. Intonation and particles can shift focus further.",
        "Self-correction is a strength when it is efficient: вернее…, то есть…, я хотел/хотела сказать…, другими словами…. Do not restart an entire answer over one ending.",
        "B2 performance means maintaining meaning, detail and interaction even with occasional errors. Accuracy still matters, but communicative control is the larger target."
      ],
      phrases:[["Другими словами, проблема не в цене, а во времени.","In other words, the problem isn't the price but the time."],["Если я правильно понял / поняла…","If I understood correctly…"],["Позвольте уточнить один момент.","Let me clarify one point."],["Коротко говоря…","In short…"],["Суть в том, что…","The point is that…"],["Я хотел / хотела сказать немного иначе.","I wanted to put that a little differently."],["Могу я кратко пересказать, что произошло?","May I briefly summarize what happened?"],["Правильно ли я понимаю, что…?","Am I right in understanding that…?"]],
      vocab:["суть|essence/main point","подробность|detail","кратко|briefly","подробно|in detail","пересказывать/пересказать|to retell/summarize","обобщать/обобщить|to generalize/summarize","уточнять/уточнить|to clarify","переформулировать|to rephrase","передавать/передать|to relay/convey","обсуждать/обсудить|to discuss","возражать/возразить|to object","соглашаться/согласиться|to agree","подтверждать/подтвердить|to confirm","опровергать/опровергнуть|to refute","подразумевать|to imply","иметь в виду|to mean/have in mind","другими словами|in other words","коротко говоря|in short","то есть|that is/i.e.","вернее|more precisely/rather","по сути|essentially","в частности|in particular","в основном|mainly","в конечном счёте|ultimately","взаимодействие|interaction"],
      sessions:["Take a 20-minute authentic audio/video segment; capture main idea, five details, and speaker stance.","Read a 700–1000 word article; write a 120-word Russian summary without copying phrases wholesale.","Mediation task: explain a Russian notice/menu/announcement to a partner in simpler Russian.","Five-minute spontaneous conversation with no topic preparation.","Error clinic: review your ten most frequent grammar errors from previous quizzes/builders.","Sentence Lab: complete 25 mixed B1–B2 builders with 90% accuracy.","Mock B2 day: listening, reading, writing, speaking, interaction, and self-correction.","Capstone quiz + record a 6-minute Russian reflection on your progress and Riga plans."],
      resource:{label:"Pushkin Institute • post-threshold/B2",url:"https://pushkininstitute.ru/certified2"},
      quiz:[
        q("A B2 learner should generally be able to…",["sustain interaction and explain viewpoints in some detail","only exchange memorized greetings","understand every dialect and specialist text","speak with zero errors"],0,"B2 is upper-intermediate functional independence, not native-like perfection."),
        q("Mediation in language learning includes…",["relaying/summarizing meaning for someone else","memorizing only word lists","avoiding paraphrase","translating every word literally"],0,"Mediation involves making information accessible through summary, explanation, reformulation, or relay."),
        q("Правильно ли я понимаю, что…? is useful for…",["checking understanding","ordering food only","forming the past tense","saying goodbye"],0,"It is a high-value clarification/checking frame."),
        q("Другими словами means…",["in other words","on the contrary","yesterday","by vehicle"],0,"Другими словами introduces a reformulation."),
        q("Вернее is often used to…",["self-correct/refine what you just said","introduce a number","mark possession","form an imperative"],0,"Вернее = more precisely/rather and can efficiently repair a statement."),
        q("At B2, word order is…",["flexible but influenced by information structure and focus","completely random","identical to English","always verb-final"],0,"Russian word order is flexible, but theme/rheme, focus, style and rhythm influence choices."),
        q("A productive response to one grammar slip in a long answer is to…",["correct briefly if needed and keep going","restart the entire answer","stop speaking","switch languages automatically"],0,"Efficient repair preserves interaction and fluency."),
        q("Which phrase means ‘the main point is that…’?",["Суть в том, что…","Дело идёт пешком…","Счёт в том…","Суть на этом…"],0,"Суть в том, что… is a useful explanatory frame."),
        q("A strong B2 summary should…",["preserve main meaning and key details in your own wording","copy every sentence","include every minor detail","avoid connectors"],0,"Summarization requires selecting and reorganizing information, not copying the source."),
        q("The capstone goal is primarily…",["integrated control under real communicative pressure","memorizing one more case table","eliminating every accent trace","learning rare literary vocabulary first"],0,"Upper-intermediate performance integrates grammar, vocabulary, comprehension, interaction, and repair.")
      ]
    }
  ];
  C.weeks.push(...newWeeks);

  C.b2Cefr = [
    ["Listening", "I can follow the main ideas of extended standard speech and many discussions on familiar or reasonably accessible topics, including viewpoint and supporting detail."],
    ["Reading", "I can understand articles and reports concerned with contemporary problems when the writer takes a particular attitude or viewpoint, and follow straightforward literary prose."],
    ["Spoken interaction", "I can interact with enough fluency and spontaneity to sustain regular interaction, take an active part in discussion, and explain/defend my views."],
    ["Spoken production", "I can give clear, detailed descriptions and presentations, develop an argument, and explain advantages and disadvantages of options."],
    ["Writing", "I can write clear, detailed connected text, develop an argument, and write letters/messages that highlight the personal significance of events and experiences."],
    ["Mediation & repair", "I can summarize, paraphrase and relay key information, check understanding, self-correct efficiently, and work around vocabulary gaps without losing the conversation."]
  ];

  C.grammarReference = [
    {title:"Case system at a glance",level:"A1–B2",summary:"Cases mark the grammatical job of nouns, adjectives and pronouns. Learn endings, but also learn the high-frequency constructions that trigger each case.",rules:["Nominative: subject, naming, dictionary form.","Accusative: direct objects and many destinations after в/на.","Genitive: possession/absence, quantities, from/of, many prepositions.","Dative: recipient, experiencer, toward/to with к, age and necessity constructions.","Instrumental: with/by, means, roles/professions, some predicates and prepositions.","Prepositional: location/topics after в/на/о and a small set of other prepositions."],examples:[["Я вижу друга.","I see a (male) friend.","animate masculine accusative = genitive"],["У меня нет времени.","I have no time.","нет + genitive"],["Мне нравится Рига.","I like Riga.","dative experiencer"],["Мы едем автобусом.","We are going by bus.","instrumental means"],["Мы говорим о поездке.","We are talking about the trip.","о + prepositional"]],traps:["Do not choose case by English preposition alone; choose it by the Russian construction.","Animate masculine accusative and animate plural accusative pattern with genitive."]},
    {title:"Noun endings",level:"A1–B1",summary:"Endings depend on gender, number, case, spelling class, and a handful of irregular patterns.",rules:["Feminine -а/-я nouns have very visible case changes: -у/-ю accusative; -ы/-и genitive; -е dative/prepositional; -ой/-ей instrumental.","Masculine consonant nouns commonly use -а/-я genitive, -у/-ю dative, -ом/-ем instrumental, -е prepositional.","Neuter -о/-е nouns share many masculine oblique endings.","Plural endings require separate attention, especially genitive plural."],examples:[["книга → книги → книге → книгу → книгой → о книге","book across common singular cases",""],["музей → музея → музею → музей → музеем → о музее","museum",""],["окно → окна → окну → окно → окном → об окне","window",""]],traps:["Spelling rules after г к х ж ч ш щ ц affect whether you write ы/и and other endings.","Soft-sign noun gender must often be memorized."]},
    {title:"Adjectives & agreement",level:"A1–B1",summary:"Adjectives agree with the noun they modify in gender, number and case.",rules:["Dictionary forms often end -ый/-ий/-ой (m), -ая/-яя (f), -ое/-ее (n), -ые/-ие (pl).","Case endings track the noun phrase: в новом городе, с хорошей подругой, без дорогих билетов.","Animate masculine/plural accusative adjective endings pattern with genitive."],examples:[["новый отель","new hotel","nominative masculine"],["в новом отеле","in a new hotel","prepositional masculine"],["с новой подругой","with a new female friend","instrumental feminine"]],traps:["Agreement belongs to the Russian noun’s gender, not the English concept."]},
    {title:"Pronouns",level:"A1–B2",summary:"Personal pronouns are irregular and extremely frequent, so learn their case forms as whole sets.",rules:["я: меня, мне, мной, обо мне; ты: тебя, тебе, тобой, о тебе.","он: его, ему, им, о нём; она: её, ей, ею/ей, о ней.","мы: нас, нам, нами, о нас; вы: вас, вам, вами, о вас; они: их, им, ими, о них.","After many prepositions third-person pronouns add н-: у него, к ней, с ними."],examples:[["Я говорю с ним.","I'm speaking with him.","с + instrumental"],["Она дала нам адрес.","She gave us the address.","recipient dative"]],traps:["Его/её/их are also indeclinable possessives: его билет, с его билетом."]},
    {title:"Present tense & conjugation",level:"A1",summary:"Russian has two broad conjugation patterns plus common irregulars. Stress and stem changes are part of the verb, not decoration.",rules:["First-conjugation endings typically include -ешь, -ет, -ем, -ете, -ут/-ют.","Second-conjugation endings typically include -ишь, -ит, -им, -ите, -ат/-ят.","Я endings are -у/-ю and may involve consonant alternations.","High-frequency irregulars such as хотеть, есть, дать, идти require direct memorization."],examples:[["читать → читаю, читаешь, читает…","to read","first conjugation"],["говорить → говорю, говоришь, говорит…","to speak","second conjugation"]],traps:["Do not guess conjugation solely from infinitive spelling; learn principal forms for irregular/stem-changing verbs."]},
    {title:"Past, future & conditional",level:"A1–B2",summary:"Past agrees in gender/number; imperfective and perfective form future differently; hypothetical clauses use бы.",rules:["Past: stem + л/ла/ло/ли in most verbs.","Imperfective future: буду + infinitive.","Perfective non-past conjugation normally has future meaning.","Hypothetical/unreal: past-form verb + бы; бы can move for focus but stays attached to the clause meaning."],examples:[["Я читала.","I was reading/read (female speaker).","past imperfective"],["Я буду читать.","I will read/be reading.","imperfective future"],["Я прочитаю.","I will read/finish it.","perfective future"],["Если бы было время, мы бы пошли.","If there were time, we would go.","hypothetical"]],traps:["Perfective verbs do not have a normal ongoing present meaning."]},
    {title:"Verb aspect",level:"A2–B2",summary:"Aspect tells how the speaker conceptualizes the event: activity/process/repetition vs bounded whole/result, with many context-sensitive uses.",rules:["Imperfective: ongoing process, repetition, background, general activity/experience, ‘what were you doing?’","Perfective: single bounded whole, achieved result, sequence of completed events, reaching a new state.","Negation and questions can shift which aspect is natural depending on whether the issue is activity/experience or expected result.","Learn verbs in pairs when a natural pair exists."],examples:[["Я читал книгу два часа.","I read/was reading the book for two hours.","activity/process"],["Я прочитал книгу.","I finished reading the book.","bounded result"],["Ты когда-нибудь читал Толстого?","Have you ever read Tolstoy?","experience/activity"]],traps:["Do not reduce aspect to ‘imperfective = incomplete’ and ‘perfective = complete.’ That shortcut fails in many real contexts."]},
    {title:"Verbs of motion",level:"A2–B2",summary:"Russian distinguishes motion on foot vs by vehicle and unidirectional/in-progress vs multidirectional/habitual, then adds prefixes for routes and boundaries.",rules:["идти/ходить: on foot; ехать/ездить: by vehicle.","Unidirectional: one direction/in progress. Multidirectional: repeated, habitual, round trips, movement in various directions.","Prefixes add meanings such as arrival, departure, entering, exiting, crossing, approaching and passing."],examples:[["Я иду в магазин.","I'm walking to the store now.","one direction"],["Я часто хожу туда.","I often go there (on foot).","habitual"],["Мы приехали в Ригу.","We arrived in Riga by vehicle.","при- arrival"]],traps:["Prefixed motion verbs create aspect pairs that must be learned: приходить/прийти, уезжать/уехать, etc."]},
    {title:"Numerals & quantities",level:"A2–B2",summary:"Numbers are a case system inside the case system. Start with the common nominative/accusative counting patterns, then expand.",rules:["1 agrees like an adjective: один билет, одна минута.","2–4: genitive singular counted noun in many basic contexts: два билета, три минуты.","5–20 and many larger numerals: genitive plural: пять билетов.","Compound numbers usually follow the final component for basic counting: 21 билет, 22 билета, 25 билетов."],examples:[["два дня","two days","genitive singular"],["пять дней","five days","genitive plural"],["около десяти минут","about ten minutes","около + genitive"]],traps:["Oblique-case numerals become significantly more complex; prioritize the forms you actually encounter and build outward."]},
    {title:"Negation & negative pronouns",level:"A2–B2",summary:"Russian commonly uses multiple negative elements in the same clause.",rules:["Никто ничего не сказал = Nobody said anything.","Никого нет = Nobody is here / There is nobody.","Некого спросить = There is nobody to ask; нечего делать = there is nothing to do.","With prepositions, the preposition sits inside forms such as ни с кем, ни о чём, не у кого."],examples:[["Я ничего не понимаю.","I don't understand anything.","double negation"],["Мне не с кем говорить.","I have nobody to talk with.","не + preposition + pronoun"]],traps:["English ‘double negative’ rules do not apply; Russian negative concord is normal."]},
    {title:"Imperatives & requests",level:"A1–B2",summary:"Imperatives have informal singular and polite/plural forms; aspect changes the nuance of a request.",rules:["Common endings include -й/-йте, -и/-ите, and irregular forms such as будь/будьте, дай/дайте.","Please often appears as пожалуйста but tone also depends on pronoun choice, aspect and context.","Negative imperatives often favor imperfective for general prevention, but aspect is context-sensitive."],examples:[["Подождите, пожалуйста.","Please wait.","polite"],["Не забывайте паспорт.","Don't forget your passport (as a general warning).","imperfective"],["Не забудьте паспорт.","Don't forget the passport (specific occasion).","perfective"]],traps:["Aspect in commands is nuanced; learn frequent chunks rather than a single rigid rule."]},
    {title:"Comparatives & superlatives",level:"B1",summary:"Russian has simple and compound comparison patterns.",rules:["Simple comparative: быстрее, интереснее, лучше, хуже, больше, меньше.","Compound comparative: более + adjective/adverb, common in formal or precise style.","Superlative: самый + adjective; also forms like лучше всего depending on meaning."],examples:[["Этот маршрут быстрее.","This route is faster.","simple comparative"],["Это самый удобный вариант.","This is the most convenient option.","самый + adjective"]],traps:["Do not combine самый with a simple comparative (*самый быстрее)."]},
    {title:"Relative clauses with который",level:"B1–B2",summary:"Gender/number come from the antecedent; case comes from the pronoun’s job inside its own clause.",rules:["Это человек, который работает здесь. (subject → nominative)","Это человек, которого я знаю. (object animate → accusative/genitive form)","Это человек, с которым я говорил. (с + instrumental)","Это улица, на которой мы живём. (на + prepositional)"],examples:[["кафе, которое мы нашли","the café that we found","neuter antecedent, accusative inanimate"],["друг, которому я позвонил","the friend I called","dative after звонить"]],traps:["Do not choose the case from the main clause; analyze the relative clause itself."]},
    {title:"Purpose, cause, contrast & condition",level:"B1–B2",summary:"Connectors turn sentence fragments into coherent explanations and arguments.",rules:["Cause: потому что, так как, поскольку.","Result: поэтому, так что.","Purpose: чтобы.","Contrast/concession: но, однако, зато, хотя, тем не менее, несмотря на.","Condition: если; hypothetical если бы… бы…."],examples:[["Я позвонил, чтобы уточнить адрес.","I called to confirm the address.","purpose"],["Хотя было холодно, мы гуляли.","Although it was cold, we walked.","concession"]],traps:["Choose connectors for logical relation, not because they have similar English translations."]},
    {title:"Reported speech & embedded questions",level:"B1–B2",summary:"Statements usually use что; yes/no questions use ли; wh-questions keep their question word.",rules:["Он сказал, что придёт.","Она спросила, есть ли время.","Он спросил, где мы живём.","Russian tense does not require automatic English-style backshift."],examples:[["Я не знаю, когда он придёт.","I don't know when he will come.","embedded wh-question"],["Скажите, пожалуйста, можно ли войти.","Please tell me whether I may come in.","ли question"]],traps:["Do not add question-mark word order inside every embedded question."]},
    {title:"-ся verbs & impersonal constructions",level:"B1–B2",summary:"-ся is not one meaning. Impersonal Russian often uses dative experiencers or no grammatical subject.",rules:["Reflexive: мыться; reciprocal: встречаться; lexical: бояться, пользоваться; middle/passive-like: дверь открывается.","Dative states: мне холодно, мне интересно, мне нужно.","General/impersonal: здесь не курят; нельзя входить; видно море."],examples:[["Мне не спится.","I can't sleep / don't feel sleepy.","impersonal"],["Этим легко пользоваться.","This is easy to use.","instrumental with пользоваться"]],traps:["Do not assume every -ся means ‘oneself.’"]},
    {title:"Participles",level:"B2",summary:"Participles are dense written-language tools. Recognize broadly; produce common forms carefully.",rules:["Present active: generally imperfective, ongoing/characteristic actor.","Past active: actor of a past/completed action.","Past passive: affected noun; short forms often state a result.","Full forms decline like adjectives."],examples:[["люди, живущие здесь","people living here","present active"],["билет, купленный вчера","ticket bought yesterday","past passive"],["Билеты куплены.","The tickets are bought.","short passive result"]],traps:["A который clause is often the better spoken choice if a participle feels risky."]},
    {title:"Deverbal adverbs (деепричастия)",level:"B2",summary:"They compress a secondary action whose understood subject normally matches the main-clause subject.",rules:["Imperfective -а/-я often marks simultaneous/background action: говоря, читая.","Perfective -в/-вши/-ши often marks a prior completed action: сделав, приехав.","Maintain the same logical subject."],examples:[["Гуляя по городу, мы разговаривали.","Walking around the city, we talked.","simultaneous"],["Приехав домой, я позвонил.","Having arrived home, I called.","prior completed action"]],traps:["Avoid dangling forms where the grammatical subject cannot be the doer of the deverbal adverb."]},
    {title:"Word order, focus & particles",level:"B1–B2",summary:"Russian word order is flexible, but information structure, contrast, rhythm and particles shape what sounds natural.",rules:["Known/theme information often precedes new/focused information, but context can reverse this.","Particles such as же, ведь, именно, только, даже, ли, бы and-то can change focus or tone.","Neutral SVO is common, but not mandatory."],examples:[["Я купил билеты вчера.","I bought the tickets yesterday.","neutral-ish"],["Билеты я купил вчера.","The tickets—I bought them yesterday.","tickets topical/contrasted"],["Именно это нам нужно.","This is exactly what we need.","именно focus"]],traps:["Flexible does not mean random; literal English order can sound odd even when grammatical."]},
    {title:"B2 discourse toolkit",level:"B2",summary:"Upper-intermediate fluency depends on organizing ideas, hedging, clarifying and repairing—not just adding rare grammar.",rules:["Structure: во-первых, кроме того, однако, в результате, таким образом.","Hedge: мне кажется, возможно, вероятно, насколько я понимаю.","Clarify: то есть, другими словами, вернее, я имею в виду.","Check: правильно ли я понимаю, что…?"],examples:[["С одной стороны…, с другой стороны…","On one hand…, on the other…","balanced argument"],["Насколько я понимаю…","As far as I understand…","hedge"]],traps:["Do not overuse formal connectors in casual small talk; register still matters."]}
  ];

  C.vocabDecks = [
    {name:"People & personality",level:"A1–B1",cards:["родственник|relative","знакомый|acquaintance","сосед|neighbor","коллега|colleague","гость|guest","хозяин|host/owner","ребёнок|child","подросток|teenager","взрослый|adult","пожилой|elderly","добрый|kind","вежливый|polite","спокойный|calm","весёлый|cheerful","серьёзный|serious","общительный|sociable","застенчивый|shy","надёжный|reliable","честный|honest","терпеливый|patient"]},
    {name:"Home & everyday objects",level:"A1–A2",cards:["кухня|kitchen","ванная|bathroom","спальня|bedroom","гостиная|living room","коридор|hallway","этаж|floor/story","лифт|elevator","лестница|stairs","дверь|door","окно|window","ключ|key","стол|table","стул|chair","кровать|bed","шкаф|cabinet/wardrobe","полка|shelf","пол|floor","потолок|ceiling","полотенце|towel","одеяло|blanket"]},
    {name:"Food & restaurant",level:"A1–B1",cards:["завтрак|breakfast","обед|lunch","ужин|dinner","закуска|appetizer/snack","блюдо|dish","напиток|drink","десерт|dessert","салат|salad","картофель|potato","рис|rice","сыр|cheese","яйцо|egg","курица|chicken","говядина|beef","свинина|pork","лосось|salmon","гриб|mushroom","соус|sauce","соль|salt","перец|pepper","сладкий|sweet","солёный|salty","острый|spicy/sharp","вкусный|tasty","сытый|full/satiated"]},
    {name:"Riga winter",level:"A1–B1",cards:["зима|winter","снег|snow","лёд|ice","мороз|frost","ветер|wind","температура|temperature","скользко|slippery","холодно|cold","темнеет|it gets dark","пальто|coat","куртка|jacket","шапка|hat","шарф|scarf","перчатки|gloves","сапоги|boots","свитер|sweater","зонт|umbrella","рождественский рынок|Christmas market","ярмарка|fair/market","глинтвейн|mulled wine"]},
    {name:"Airport & baggage",level:"A1–B1",cards:["рейс|flight","билет|ticket","паспорт|passport","посадочный талон|boarding pass","багаж|baggage","чемодан|suitcase","ручная кладь|carry-on baggage","стойка регистрации|check-in desk","выход|gate/exit","задержка|delay","отмена|cancellation","пересадка|connection/transfer","прибытие|arrival","вылет|departure","таможня|customs","пограничный контроль|border control","место|seat/place","ряд|row","окно|window","проход|aisle/passage"]},
    {name:"City & transport",level:"A1–B1",cards:["автобус|bus","трамвай|tram","троллейбус|trolleybus","поезд|train","такси|taxi","остановка|stop","станция|station","вокзал|railway station","расписание|schedule","маршрут|route","проезд|fare/travel","билетный автомат|ticket machine","центр|center","пригород|suburb","площадь|square","мост|bridge","река|river","набережная|embankment","переулок|lane","светофор|traffic light"]},
    {name:"Directions",level:"A1–B1",cards:["налево|to the left","направо|to the right","прямо|straight","рядом|nearby","далеко|far","близко|close","впереди|ahead","сзади|behind","между|between","напротив|opposite","около|near/about","вдоль|along","мимо|past","через|across/through","поворот|turn","угол|corner","перекрёсток|intersection","переход|crossing","вход|entrance","выход|exit"]},
    {name:"Shopping & money",level:"A1–B1",cards:["цена|price","стоимость|cost","скидка|discount","распродажа|sale","касса|checkout/cash desk","кассир|cashier","наличные|cash","карта|card","сдача|change","чек|receipt","размер|size","примерочная|fitting room","покупка|purchase","возврат|return","обмен|exchange","дорогой|expensive","дешёвый|cheap","подходить|to fit/suit","платить/заплатить|to pay","стоить|to cost"]},
    {name:"Health & body",level:"A1–B1",cards:["голова|head","горло|throat","живот|stomach","спина|back","рука|arm/hand","нога|leg/foot","глаз|eye","ухо|ear","зуб|tooth","боль|pain","кашель|cough","насморк|runny nose/cold","температура|fever/temperature","лекарство|medicine","таблетка|pill/tablet","рецепт|prescription","аптека|pharmacy","врач|doctor","болеть|to hurt/be ill","выздоравливать/выздороветь|to recover"]},
    {name:"Time & calendar",level:"A1–B1",cards:["минута|minute","час|hour","день|day","неделя|week","месяц|month","год|year","утро|morning","день|daytime","вечер|evening","ночь|night","вчера|yesterday","сегодня|today","завтра|tomorrow","позавчера|day before yesterday","послезавтра|day after tomorrow","рано|early","поздно|late","вовремя|on time","сначала|at first/first","наконец|finally"]},
    {name:"Work & study",level:"A2–B1",cards:["работа|work/job","должность|position","сотрудник|employee","начальник|boss/manager","зарплата|salary","смена|shift","задача|task","проект|project","встреча|meeting","опыт|experience","навык|skill","курс|course","урок|lesson","задание|assignment","экзамен|exam","ошибка|mistake","правило|rule","пример|example","объяснение|explanation","практика|practice"]},
    {name:"Communication",level:"A2–B2",cards:["разговор|conversation","вопрос|question","ответ|answer","сообщение|message","звонок|call","письмо|letter/email","новость|news item","информация|information","совет|advice","просьба|request","предложение|suggestion/offer","жалоба|complaint","объяснять|to explain","уточнять|to clarify","повторять|to repeat","переспрашивать|to ask again","договариваться|to arrange/agree","сообщать|to inform","предупреждать|to warn","обсуждать|to discuss"]},
    {name:"Feelings & reactions",level:"A2–B2",cards:["радость|joy","грусть|sadness","страх|fear","злость|anger","удивление|surprise","интерес|interest","надежда|hope","сомнение|doubt","уверенность|confidence","стыд|shame","усталость|tiredness","спокойствие|calm","рад|glad","доволен|satisfied","расстроен|upset","удивлён|surprised","волноваться|to worry/be nervous","бояться|to be afraid","надеяться|to hope","сомневаться|to doubt"]},
    {name:"Travel & lodging",level:"A1–B1",cards:["поездка|trip","путешествие|journey/travel","гостиница|hotel","номер|hotel room/number","бронь|reservation","бронирование|booking","стойка|desk/counter","ключ-карта|key card","заселение|check-in","выселение|check-out","гость|guest","завтрак включён|breakfast included","полотенце|towel","уборка|cleaning","отопление|heating","горячая вода|hot water","не работает|doesn't work","шумно|noisy","тихо|quiet","свободный номер|available room"]},
    {name:"Technology & phone",level:"A2–B2",cards:["телефон|phone","зарядка|charger","батарея|battery","интернет|internet","сеть|network","вай-фай|Wi-Fi","пароль|password","приложение|app","сайт|website","ссылка|link","файл|file","фотография|photo","видео|video","экран|screen","настройка|setting","подключаться/подключиться|to connect","скачивать/скачать|to download","загружать/загрузить|to upload/load","отправлять/отправить|to send","сохранять/сохранить|to save"]},
    {name:"Weather & nature",level:"A2–B1",cards:["погода|weather","дождь|rain","снег|snow","облако|cloud","туман|fog","гроза|thunderstorm","ветер|wind","солнце|sun","небо|sky","лес|forest","озеро|lake","море|sea","река|river","берег|shore/bank","остров|island","дерево|tree","трава|grass","тепло|warm","прохладно|cool","пасмурно|overcast"]},
    {name:"Common verbs I",level:"A1–B1",cards:["быть|to be","иметь|to have (formal/literal)","делать|to do/make","говорить|to speak/say","сказать|to say (perfective)","знать|to know","понимать|to understand","думать|to think","видеть|to see","смотреть|to watch/look","слышать|to hear","слушать|to listen","читать|to read","писать|to write","жить|to live","работать|to work","учиться|to study","любить|to love/like","хотеть|to want","мочь|to be able/can"]},
    {name:"Common verbs II",level:"A2–B2",cards:["брать/взять|to take","давать/дать|to give","покупать/купить|to buy","продавать/продать|to sell","находить/найти|to find","терять/потерять|to lose","начинать/начать|to start","заканчивать/закончить|to finish","решать/решить|to decide/solve","менять/поменять|to change/exchange","помогать/помочь|to help","ждать|to wait","искать|to look for","помнить|to remember","забывать/забыть|to forget","встречать/встретить|to meet","выбирать/выбрать|to choose","заказывать/заказать|to order","проверять/проверить|to check","планировать|to plan"]},
    {name:"B1 connectors",level:"B1",cards:["потому что|because","поэтому|therefore/so","но|but","а|and/but/whereas","или|or","если|if","когда|when","пока|while/until","сначала|first","потом|then","после этого|after that","например|for example","обычно|usually","иногда|sometimes","особенно|especially","кроме того|in addition","хотя|although","зато|but on the positive side","так что|so that/therefore","наконец|finally"]},
    {name:"B2 connectors & stance",level:"B2",cards:["однако|however","тем не менее|nevertheless","поскольку|since/because","несмотря на|despite","таким образом|thus","в результате|as a result","в целом|overall","в частности|in particular","с одной стороны|on one hand","с другой стороны|on the other hand","по крайней мере|at least","вероятно|probably","возможно|possibly","скорее всего|most likely","насколько я понимаю|as far as I understand","по-моему|in my opinion","по сути|essentially","иначе говоря|in other words","прежде всего|first and foremost","в конечном счёте|ultimately"]},
    {name:"Abstract B2 nouns",level:"B2",cards:["причина|cause/reason","следствие|consequence","условие|condition","возможность|possibility/opportunity","необходимость|necessity","решение|decision/solution","отношение|attitude/relation","поведение|behavior","развитие|development","изменение|change","влияние|influence","общество|society","окружение|environment/surroundings","уровень|level","качество|quality","количество|quantity","система|system","способ|method/way","ситуация|situation","обстоятельство|circumstance"]}
  ];

  // Generated sentence builders: high-quality phrases already present in the course become
  // scrambled sentence tasks. This creates 100+ builders without inventing new translations.
  C.sentenceBank = [];
  C.weeks.forEach(w => {
    w.phrases.forEach(([ru,en], i) => {
      const clean = ru.replace(/[«»“”]/g,'').trim();
      const words = clean.split(/\s+/);
      if (words.length >= 3 && words.length <= 14 && !clean.includes('/') && !clean.includes('…')) {
        C.sentenceBank.push({id:`w${w.id}-p${i}`,week:w.id,level:w.band,prompt:en,answer:clean,note:`Week ${w.id}: ${w.title}`});
      }
    });
  });
  C.riga.forEach((cat, ci) => cat.phrases.forEach(([ru,en], i) => {
    const clean = ru.replace(/[«»“”]/g,'').trim();
    const words = clean.split(/\s+/);
    if (words.length >= 3 && words.length <= 14 && !clean.includes('/') && !clean.includes('…')) C.sentenceBank.push({id:`r${ci}-${i}`,week:13,level:"Riga",prompt:en,answer:clean,note:`Riga Kit: ${cat.title}`});
  }));

  C.practiceQuizzes = [
    {id:"cases",title:"Case Mastery",level:"A2–B2",questions:[
      q("Я живу ___ Риге.",["в","на","к","из"],0,"Location in a city uses в + prepositional: в Риге."),
      q("У меня нет ___.",["время","времени","времени́ем","время́"],1,"Нет takes genitive: времени."),
      q("Я говорю с ___.",["мой друг","моего друга","моему другу","моим другом"],3,"С meaning ‘with’ takes instrumental: с моим другом."),
      q("Я звоню ___.",["сестру","сестре","сестрой","сестры"],1,"Звонить кому? takes dative: сестре."),
      q("Мы идём в ___.",["ресторан","ресторане","ресторана","рестораном"],0,"Destination after в takes accusative; masculine inanimate = nominative form ресторан."),
      q("Мы говорим о ___.",["поездка","поездку","поездке","поездкой"],2,"О ‘about’ takes prepositional: о поездке."),
      q("Чашка ___.",["чай","чая","чаю","чаем"],1,"Content/quantity relation: чашка чая."),
      q("Я вижу ___.",["новый друг","нового друга","новому другу","новым другом"],1,"Animate masculine accusative patterns with genitive: нового друга."),
      q("Мы едем ___.",["автобус","автобуса","автобусом","автобусу"],2,"Means of transport can be instrumental: автобусом."),
      q("Подойдите к ___.",["стойка","стойку","стойке","стойкой"],2,"К governs dative: к стойке.")
    ]},
    {id:"aspect",title:"Aspect & Tense",level:"A2–B2",questions:[
      q("Every day I ___ the news.",["прочитал","читал","прочитаю once","написал"],1,"Habitual activity favors imperfective читал (in a past-time context)."),
      q("I finally ___ the email and sent it.",["писал","написал","пишу always","буду писал"],1,"A completed result in a sequence favors perfective написал."),
      q("Tomorrow I will be reading for two hours.",["Я прочитаю два часа.","Я буду читать два часа.","Я читал завтра.","Я читаю был."],1,"Imperfective future uses буду + infinitive."),
      q("I will finish reading the article tonight.",["Я буду читать статью сегодня вечером.","Я прочитаю статью сегодня вечером.","Я прочитал завтра.","Я читать статью."],1,"Perfective прочитаю emphasizes completion."),
      q("He began ___ the book.",["прочитать","читать","прочитал","читав"],1,"Начать usually takes an imperfective infinitive for the activity stage."),
      q("I didn't finish the book.",["Я не читал книгу.","Я не прочитал книгу.","Я не читать книгу.","Я книгу нет."],1,"Не прочитал highlights the unrealized completed result."),
      q("Have you ever read Tolstoy?",["Ты когда-нибудь читал Толстого?","Ты когда-нибудь прочитал сейчас Толстого?","Ты читай Толстого?","Тебе Толстой был?"],0,"Experience questions often use imperfective."),
      q("We did the tasks one after another and left.",["Мы делали задания и уходили.","Мы сделали задания и ушли.","Мы делаем задания и ушли.","Мы сделать и идти."],1,"Sequential completed events are naturally perfective."),
      q("While she was cooking, I was working.",["Пока она готовила, я работал.","Пока она приготовила, я поработал один раз.","Она готовить, я работа.","Пока приготовила, работаю завтра."],0,"Simultaneous background processes favor imperfective."),
      q("Perfective verbs have a normal present tense describing an action in progress.",["True","False"],1,"Perfective non-past forms normally refer to future bounded actions, not ongoing present actions.")
    ]},
    {id:"motion",title:"Motion Verbs",level:"A2–B2",questions:[
      q("I am walking to the café right now.",["Я иду в кафе.","Я хожу в кафе сейчас один путь.","Я еду ногами.","Я ездил в кафе сейчас."],0,"Идти = unidirectional motion on foot in progress."),
      q("I regularly go there by car.",["Я еду туда часто.","Я езжу туда на машине.","Я иду туда машиной.","Я ходил туда машина."],1,"Ездить = habitual/multidirectional vehicle travel."),
      q("We arrived in Riga by train.",["Мы приехали в Ригу на поезде.","Мы пришли в Ригу поездом пешком.","Мы уехали в Ригу.","Мы входили Ригу."],0,"Приехали marks completed arrival by vehicle."),
      q("We left the hotel on foot.",["Мы ушли из гостиницы.","Мы уехали ногами.","Мы пришли из гостиницы.","Мы вошли гостиницу."],0,"Уйти is completed departure on foot; из + genitive marks origin."),
      q("Cross the street.",["Перейдите улицу.","Уйдите улицу.","Приезжайте улица.","Ходите через улицы один раз."],0,"Перейти is to cross on foot."),
      q("Get off at the next stop.",["Войдите на следующей остановке.","Выйдите на следующей остановке.","Придите из остановки.","Перейдите остановку автобусом."],1,"Выйти is to exit/get off."),
      q("We stopped by the pharmacy on the way.",["Мы зашли в аптеку по дороге.","Мы ушли аптеку.","Мы ходим аптеку по дороге один раз.","Мы перешли аптекой."],0,"Зайти/зашли can mean stop by/go in on foot."),
      q("The bus passes the market.",["Автобус проезжает мимо рынка.","Автобус приходит рынок.","Автобус ходит через рынку.","Автобус выйдет мимо рынок."],0,"Проезжать + мимо + genitive describes passing by in a vehicle."),
      q("Walk as far as the bridge.",["Дойдите до моста.","Придите мостом.","Уйдите к мосту до.","Доехать мост пешком."],0,"Дойти до + genitive expresses reaching a point on foot."),
      q("Which prefix commonly signals arrival?",["при-","у-","вы-","пере-"],0,"При- commonly marks arrival: прийти, приехать.")
    ]},
    {id:"b2connectors",title:"B2 Connectors & Argument",level:"B2",questions:[
      q("Which means ‘nevertheless’?",["тем не менее","потому что","чтобы","сначала"],0,"Тем не менее = nevertheless/nonetheless."),
      q("Which best introduces a conclusion?",["таким образом","хотя","например","если бы"],0,"Таким образом commonly introduces a result/conclusion."),
      q("Which phrase hedges a claim?",["Насколько я понимаю…","Это факт и точка.","Ты абсолютно неправ.","Без вариантов."],0,"Насколько я понимаю limits the claim to your current understanding."),
      q("Which means ‘in addition’?",["кроме того","вместо этого","несмотря на","вряд ли"],0,"Кроме того adds an additional point."),
      q("Which means ‘despite’?",["несмотря на","благодаря","если","поэтому"],0,"Несмотря на = despite."),
      q("Which means ‘most likely’?",["скорее всего","вряд ли","по крайней мере","как раз"],0,"Скорее всего = most likely/probably."),
      q("Which is a balanced argument frame?",["С одной стороны…, с другой стороны…","Кто? Что? Где?","Я есть мнение.","Никаких причин."],0,"This frame explicitly organizes two sides of an issue."),
      q("Which phrase means ‘at least’?",["по крайней мере","в конечном счёте","в то время как","в частности"],0,"По крайней мере = at least."),
      q("Which means ‘ultimately/in the final analysis’?",["в конечном счёте","сначала","вдоль","заранее"],0,"В конечном счёте = ultimately/in the end."),
      q("A B2 response should prioritize…",["coherent linked ideas and interaction","rare vocabulary at any cost","zero self-correction","literal translation from English"],0,"B2 control is demonstrated through coherent, flexible communication with adequate accuracy.")
    ]},
    {id:"pronouns",title:"Pronouns & Negation",level:"B1–B2",questions:[
      q("with him",["с его","с ним","с нему","его с"],1,"After с use instrumental ним; third-person pronoun has н-."),
      q("to her",["к её","к ней","к она","ей к"],1,"К + dative: к ней."),
      q("I don't know anything.",["Я ничего не знаю.","Я не знаю что-то.","Я никто не знаю.","Я ничто знаю не."],0,"Russian negative concord uses ничего + не знаю."),
      q("There is nobody to ask.",["Некого спросить.","Никто спросить.","Нечего кто.","Не кто спросить."],0,"Некого + infinitive = nobody available to be the object."),
      q("I have nobody to talk with.",["Мне не с кем поговорить.","Мне никто с говорить.","Я не с кто говорю.","У меня не кем разговор."],0,"The preposition sits inside the negative pronoun phrase: не с кем."),
      q("about them",["о их","о них","об ими","к ним"],1,"О + prepositional: о них."),
      q("for us",["для нас","для мы","нам для","насом"],0,"Для governs genitive: нас."),
      q("by/with you (polite/plural)",["вами","вас","вам","вы"],0,"Instrumental of вы is вами."),
      q("No one said anything.",["Никто ничего не сказал.","Никто что-то сказал не.","Ничто никто сказал.","Никого ничего сказал."],0,"Russian uses negative concord: никто + ничего + не сказал."),
      q("Which is the dative of они?",["их","им","ими","них"],1,"Им is dative plural of они.")
    ]}
  ];

  // Add sources appropriate to the expanded course.
  C.resources.push(
    {name:"Cornell Russian Grammar",type:"Advanced grammar",note:"Detailed university grammar reference for participles, deverbal adverbs, conditionals and other upper-level structures.",url:"https://russian.cornell.edu/"},
    {name:"Pushkin Institute • Education in Russian",type:"Free courses + level checks",note:"Free Russian-as-a-foreign-language courses and level-oriented practice, including threshold and post-threshold materials.",url:"https://pushkininstitute.ru/"}
  );
})();
