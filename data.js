window.COURSE = {
  title: "До Риги!",
  subtitle: "Russian to B1 • Riga by December",
  weeks: [
    {
      id: 1, band: "A0 → A1", title: "Cyrillic, sound & survival Russian", icon: "А",
      goals: ["Read printed Cyrillic without transliteration", "Greet, thank, apologize, introduce yourself", "Ask who/what/where/how", "Recognize Russian word stress and vowel reduction"],
      grammar: [
        "Russian has 33 letters. Learn sounds, not English look-alikes: В=v, Н=n, Р=r, С=s, У=u, Х=kh.",
        "Stress is not fixed. An unstressed о often sounds closer to [a]; е/я can reduce too. Learn stress with the word.",
        "Present-tense ‘to be’ is normally omitted: Я студент. = I am a student. Это кафе. = This is a café.",
        "Ты is informal singular; вы is polite singular or plural. With strangers in Riga, default to вы."
      ],
      phrases: [
        ["Здравствуйте!", "Hello. (polite)"], ["Привет!", "Hi!"], ["Спасибо.", "Thank you."], ["Пожалуйста.", "Please / you're welcome."],
        ["Извините.", "Excuse me / sorry."], ["Меня зовут …", "My name is …"], ["Очень приятно.", "Nice to meet you."], ["Как вас зовут?", "What is your name? (polite)"],
        ["Я немного говорю по-русски.", "I speak a little Russian."], ["Я не понимаю.", "I don't understand."], ["Повторите, пожалуйста.", "Please repeat."], ["Говорите, пожалуйста, медленнее.", "Please speak more slowly."]
      ],
      vocab: ["да|yes", "нет|no", "здесь|here", "там|there", "кто|who", "что|what", "где|where", "как|how", "хорошо|well/good", "плохо|badly/bad", "сейчас|now", "потом|later", "сегодня|today", "завтра|tomorrow", "я|I", "ты|you informal", "вы|you polite/plural", "мы|we"],
      sessions: [
        "Alphabet sprint: learn А–М and read 20 syllables aloud.",
        "Alphabet sprint: learn Н–Я; hunt the false-friend letters В Н Р С У Х.",
        "Pronunciation lab: stress, hard/soft consonants, ы vs и, and unstressed о.",
        "Build a 45-second introduction without transliteration.",
        "Partner drill: greeting → name → language → repair phrase → goodbye, 10 rounds.",
        "Riga mission: read 15 Cyrillic signs/words online or around you and complete Week 1 quiz."
      ],
      resource: { label: "Между нами • Урок 1", url: "https://mezhdunami.ku.edu/" },
      quiz: [
        ["Which Russian letter sounds like English R?", ["Р", "В", "Н", "С"], 0],
        ["Best polite ‘I don't understand’:", ["Я не понимаю.", "Я нет понимаю.", "Мне не понимать.", "Не я понимаю."], 0],
        ["Which is polite singular ‘you’?", ["ты", "вы", "мы", "они"], 1],
        ["In normal present-tense Russian, how do you say ‘I am a tourist’?", ["Я есть турист.", "Я турист.", "Я быть турист.", "Есть я турист."], 1],
        ["A good repair phrase is:", ["Повторите, пожалуйста.", "Кто повторение?", "Я повторить нет.", "Повторите ты."], 0],
        ["Which letter sounds roughly like English N?", ["Р", "Н", "У", "В"], 1]
      ]
    },
    {
      id: 2, band: "A1", title: "People, family & present tense", icon: "Я",
      goals: ["Describe yourself and other people", "Use noun gender and adjective agreement", "Conjugate common present-tense verbs", "Talk about family, work, study, and languages"],
      grammar: [
        "Nouns are masculine, feminine, or neuter. Typical endings: consonant/й → masculine; а/я → feminine; о/е → neuter. Soft-sign nouns must be learned with gender.",
        "Adjectives agree with noun gender/number: новый дом, новая книга, новое кафе, новые друзья.",
        "Two common present endings: -ю/-у, -ешь, -ет, -ем, -ете, -ют/-ут; and -ю/-у, -ишь, -ит, -им, -ите, -ят/-ат. Learn each verb's pattern.",
        "Russian often uses ‘у + genitive + есть’ for possession: У меня есть брат. = I have a brother."
      ],
      phrases: [
        ["Я живу в США.", "I live in the USA."], ["Мы учим русский язык.", "We are learning Russian."], ["Я работаю …", "I work …"], ["Я люблю путешествовать.", "I love to travel."],
        ["У меня есть брат / сестра.", "I have a brother / sister."], ["Это мой друг.", "This is my friend."], ["Он говорит по-английски.", "He speaks English."], ["Она хорошо понимает по-русски.", "She understands Russian well."]
      ],
      vocab: ["семья|family", "мама|mom", "папа|dad", "брат|brother", "сестра|sister", "друг|male friend", "подруга|female friend", "мужчина|man", "женщина|woman", "человек|person", "жить|to live", "работать|to work", "учить|to learn/study", "говорить|to speak", "понимать|to understand", "любить|to love/like", "знать|to know", "хотеть|to want"],
      sessions: ["Gender sort: classify 60 nouns and check the tricky ь endings.", "Adjective agreement drill with people and objects.", "Conjugate говорить, жить, работать, знать, хотеть; say every form aloud.", "Create a 10-sentence self/family profile.", "Partner interview: ask 12 questions and retell your partner's answers in third person.", "Listening + Week 2 quiz; redo any verb pattern below 80%."],
      resource: { label: "Russian for Everyone • basic grammar", url: "https://www.russianforeveryone.com/" },
      quiz: [
        ["Choose ‘new café’:", ["новый кафе", "новая кафе", "новое кафе", "новые кафе"], 2],
        ["‘We speak Russian’:", ["Мы говорим по-русски.", "Мы говорите по-русски.", "Мы говорит русский.", "Мы говорить по-русски."], 0],
        ["‘I have a sister’:", ["Я есть сестра.", "У меня есть сестра.", "Мне сестра есть.", "У я сестра."], 1],
        ["Which noun is typically feminine?", ["дом", "музей", "книга", "окно"], 2],
        ["‘He lives here’:", ["Он живёшь здесь.", "Он живут здесь.", "Он живёт здесь.", "Он жить здесь."], 2],
        ["Correct polite question:", ["Где вы живёте?", "Где вы живёшь?", "Где ты живёте?", "Где жить вы?"], 0]
      ]
    },
    {
      id: 3, band: "A1", title: "Where things are: prepositional case", icon: "Где",
      goals: ["Say where you are and where things happen", "Use в/на + prepositional", "Describe rooms, neighborhoods, and places", "Use basic adjective forms inside the prepositional case"],
      grammar: [
        "For location after в/на, use the prepositional case: в Риге, в Латвии, в музее, на улице.",
        "Common singular noun endings: -а/-я → -е; most consonants → -е; -ий/-ие often → -ии. Some location words have special forms, e.g. в аэропорту.",
        "Prepositional adjective endings are commonly -ом/-ем (masc/neut) and -ой/-ей (fem): в новом кафе, на красивой улице.",
        "Use где? for location. Direction ‘where to?’ will later use куда? and accusative."
      ],
      phrases: [
        ["Мы в Риге.", "We are in Riga."], ["Я живу в Латвии.", "I live in Latvia."], ["Где находится остановка?", "Where is the stop located?"], ["Он в старом городе.", "He is in the old town."],
        ["Мы на рынке.", "We are at the market."], ["Я сейчас в аэропорту.", "I'm at the airport now."], ["Кафе на этой улице.", "The café is on this street."], ["Что есть в номере?", "What is in the room?"]
      ],
      vocab: ["город|city", "улица|street", "дом|house", "квартира|apartment", "комната|room", "кафе|café", "ресторан|restaurant", "магазин|shop", "рынок|market", "музей|museum", "вокзал|station", "аэропорт|airport", "остановка|stop", "центр|center", "старый|old", "новый|new", "большой|big", "маленький|small"],
      sessions: ["Case map: turn 40 nominative place nouns into prepositional forms.", "Learn the fixed travel locations: в аэропорту, на вокзале, на остановке, в центре.", "Describe your home/room using 12 location sentences.", "Map talk: one person picks a Riga landmark, the other asks where it is.", "Grammar repair: adjective + noun agreement inside prepositional phrases.", "Riga neighborhood mini-reading + Week 3 quiz."],
      resource: { label: "Между нами • tables & location", url: "https://mezhdunami.org/" },
      quiz: [
        ["‘in Riga’:", ["в Рига", "в Ригу", "в Риге", "на Риге"], 2],
        ["‘in a new café’:", ["в новое кафе", "в новом кафе", "в новой кафе", "на нового кафе"], 1],
        ["Question for location:", ["куда?", "откуда?", "где?", "почему?"], 2],
        ["Natural fixed phrase ‘at the airport’:", ["в аэропорте", "в аэропорту", "на аэропорту", "к аэропорту"], 1],
        ["‘on the street’:", ["на улице", "в улицу", "на улицу", "у улицы"], 0],
        ["‘at the market’:", ["на рынке", "в рынок", "на рынок", "рынком"], 0]
      ]
    },
    {
      id: 4, band: "A1 → A2", title: "Food, ordering & accusative case", icon: "Еда",
      goals: ["Order politely in cafés/restaurants", "Use accusative direct objects", "Distinguish animate vs inanimate masculine accusative", "Ask for menus, bills, quantities, and preferences"],
      grammar: [
        "The accusative marks many direct objects: Я читаю меню. Я люблю кофе.",
        "Feminine -а → -у and -я → -ю: Я беру воду. Я люблю пиццу.",
        "Masculine inanimate usually looks nominative; masculine animate usually looks genitive: Я вижу стол, but Я вижу друга.",
        "For destinations after в/на, use accusative: Мы идём в ресторан. Compare location: Мы в ресторане."
      ],
      phrases: [
        ["Можно меню, пожалуйста?", "May I have a menu, please?"], ["Мне, пожалуйста, кофе.", "Coffee for me, please."], ["Я возьму суп.", "I'll have the soup."], ["Без сахара, пожалуйста.", "Without sugar, please."],
        ["Что вы рекомендуете?", "What do you recommend?"], ["У меня аллергия на …", "I am allergic to …"], ["Счёт, пожалуйста.", "The bill, please."], ["Можно заплатить картой?", "Can I pay by card?"]
      ],
      vocab: ["еда|food", "вода|water", "кофе|coffee", "чай|tea", "хлеб|bread", "суп|soup", "рыба|fish", "мясо|meat", "овощи|vegetables", "завтрак|breakfast", "обед|lunch", "ужин|dinner", "меню|menu", "счёт|bill/check", "карта|card", "наличные|cash", "брать/взять|to take", "заказывать/заказать|to order"],
      sessions: ["Accusative endings drill: 50 food/object phrases.", "Menu role-play: server/guest, switch roles every 3 minutes.", "Allergy and preference drill: без…, с…, я не ем…, я люблю…", "Destination contrast: в ресторане vs в ресторан; на рынке vs на рынок.", "Build a full restaurant dialogue from arrival to payment.", "Riga café mission + Week 4 quiz."],
      resource: { label: "Forvo • Russian travel pronunciation", url: "https://forvo.com/languages/ru/" },
      quiz: [
        ["‘I drink water’:", ["Я пью вода.", "Я пью воду.", "Я пью водой.", "Я пью воде."], 1],
        ["Location vs destination: ‘We are going to the restaurant’:", ["Мы идём в ресторане.", "Мы идём в ресторан.", "Мы идём рестораном.", "Мы идём у ресторана."], 1],
        ["Best polite bill request:", ["Дай счёт.", "Счёт, пожалуйста.", "Я счёт.", "Где платит?"], 1],
        ["Masculine animate accusative: ‘I see my friend’:", ["Я вижу мой друг.", "Я вижу моего друга.", "Я вижу моему другу.", "Я вижу моим другом."], 1],
        ["‘without sugar’:", ["без сахар", "без сахара", "без сахару", "не сахар"], 1],
        ["‘Can I pay by card?’:", ["Можно заплатить картой?", "Можно карта платить?", "Я могу карта?", "Платить карту?"], 0]
      ]
    },
    {
      id: 5, band: "A2", title: "Possession, absence, amounts: genitive", icon: "Нет",
      goals: ["Say what you have/don't have", "Use genitive after нет and common prepositions", "Handle prices, quantities, dates, and numbers", "Ask where something comes from"],
      grammar: [
        "Genitive appears after нет: У меня нет времени. Здесь нет метро.",
        "Possession often uses у + genitive: У Анны есть машина. У нас есть билеты.",
        "Common genitive prepositions: из (from/out of), от (from a person/place), до (until/to), около (near/about), после (after), без (without).",
        "After 2–4 many counted nouns use genitive singular; after 5+ they usually use genitive plural. Number grammar has exceptions, so memorize high-frequency chunks with prices/time."
      ],
      phrases: [
        ["У нас есть бронь.", "We have a reservation."], ["У меня нет наличных.", "I don't have cash."], ["Сколько это стоит?", "How much does this cost?"], ["Два билета, пожалуйста.", "Two tickets, please."],
        ["Мы из США.", "We are from the USA."], ["До центра далеко?", "Is it far to the center?"], ["Около вокзала.", "Near the station."], ["После ужина.", "After dinner."]
      ],
      vocab: ["деньги|money", "евро|euro", "цена|price", "билет|ticket", "бронь|reservation", "время|time", "минута|minute", "час|hour", "день|day", "неделя|week", "месяц|month", "сколько|how much/many", "дорого|expensive", "дёшево|cheap", "рядом|nearby", "далеко|far", "от|from", "до|until/to"],
      sessions: ["Genitive forms: nouns after нет, без, из, до.", "Numbers 0–100; practice phone numbers, prices, times, addresses.", "Hotel drill: reservation, number of nights, lack of towels/keys/etc.", "Shopping drill: prices, sizes, quantities, cash/card.", "Timed partner challenge: 25 genitive prompts in 8 minutes.", "Week 5 quiz + review every missed declension pattern."],
      resource: { label: "OpenRussian • dictionary & forms", url: "https://en.openrussian.org/" },
      quiz: [
        ["‘I have no time’:", ["У меня нет время.", "У меня нет времени.", "Я нет времени.", "Мне нет время."], 1],
        ["‘from Riga’:", ["из Риги", "от Рига", "в Риге", "к Риге"], 0],
        ["‘without sugar’ requires:", ["accusative", "genitive", "instrumental", "dative"], 1],
        ["‘We have tickets’:", ["У нас есть билеты.", "Мы есть билеты.", "Нам билеты.", "У мы билеты."], 0],
        ["‘near the station’:", ["около вокзала", "около вокзал", "у вокзал", "к вокзалу"], 0],
        ["‘How much does it cost?’:", ["Сколько это стоит?", "Как цена это?", "Что стоит сколько?", "Сколько есть цена?"], 0]
      ]
    },
    {
      id: 6, band: "A2", title: "Needs, feelings & dative case", icon: "Мне",
      goals: ["Say what you need, like, feel, and are allowed to do", "Use dative pronouns and nouns", "Ask for help naturally", "Handle pharmacy/basic health interactions"],
      grammar: [
        "Dative often marks the recipient/experiencer: Мне холодно. Ему нравится музыка. Дайте мне воду, пожалуйста.",
        "Dative pronouns: мне, тебе, ему, ей, нам, вам, им.",
        "Мне нужно + infinitive = I need to…; мне нужен/нужна/нужно/нужны + noun agrees with the thing needed.",
        "Нравиться works ‘backwards’ from English: Мне нравится этот ресторан. Мне нравятся эти кафе."
      ],
      phrases: [
        ["Мне нужна помощь.", "I need help."], ["Мне нужно в аптеку.", "I need to go to a pharmacy."], ["Мне холодно.", "I'm cold."], ["Мне плохо.", "I feel unwell."],
        ["У меня болит голова.", "My head hurts / I have a headache."], ["Можно мне воды?", "May I have some water?"], ["Мне нравится Рига.", "I like Riga."], ["Помогите мне, пожалуйста.", "Please help me."]
      ],
      vocab: ["помощь|help", "аптека|pharmacy", "врач|doctor", "лекарство|medicine", "голова|head", "живот|stomach", "горло|throat", "болеть|to hurt/be ill", "нужно|necessary/need", "можно|may/can", "нельзя|not allowed", "нравиться|to be pleasing/like", "холодно|cold", "жарко|hot", "удобно|convenient", "трудно|difficult", "легко|easy", "помогать/помочь|to help"],
      sessions: ["Dative pronoun lightning drill.", "Need patterns: мне нужно + infinitive vs мне нужен/нужна/нужно/нужны + noun.", "Likes/dislikes: interview each other about 20 things using нравится/нравятся.", "Pharmacy role-play: symptom → duration → allergy → request → instructions.", "Permission drill: можно / нельзя + infinitive.", "Week 6 quiz + 2-minute health/help speaking test."],
      resource: { label: "Russian for Everyone • dative lesson", url: "https://www.russianforeveryone.com/Rufe/Lessons/Course1/Grammar/GramUnit11/GramUnit11_1.htm" },
      quiz: [
        ["‘I need help’:", ["Я нужен помощь.", "Мне нужна помощь.", "Меня нужна помощь.", "Мне нужно помощь."], 1],
        ["‘I like this restaurant’:", ["Я нравлюсь этот ресторан.", "Мне нравится этот ресторан.", "Меня нравится ресторан.", "Я нравится ресторан."], 1],
        ["Dative of вы:", ["вас", "вам", "вами", "вы"], 1],
        ["‘I'm cold’:", ["Я холодный.", "Мне холодно.", "Меня холодно.", "У меня холодный."], 1],
        ["‘Please help me’:", ["Помогите мне, пожалуйста.", "Помочь я, пожалуйста.", "Помогаете меня.", "Мне помогать вы."], 0],
        ["‘May I have some water?’:", ["Можно мне воды?", "Можно я вода?", "Мне можно воду есть?", "Вода можно мне быть?"], 0]
      ]
    },
    {
      id: 7, band: "A2", title: "With whom? With what? Instrumental", icon: "С",
      goals: ["Use с + instrumental for ‘with’", "Talk about transport, companions, roles, and locations", "Use key instrumental forms of adjectives/pronouns", "Understand past/future identity phrases"],
      grammar: [
        "Instrumental answers кем? чем? and follows с = with: с другом, с подругой, с нами.",
        "Common singular endings: masc/neut often -ом/-ем; feminine -ой/-ей (also -ою/-ею in some styles).",
        "After past/future быть, professions/roles are commonly instrumental: Он был врачом. Она будет менеджером.",
        "Several location prepositions take instrumental: перед (in front of), за (behind), между (between), над (above), под (under). Рядом с also uses instrumental after с."
      ],
      phrases: [
        ["Я путешествую с друзьями.", "I travel with friends."], ["Мы едем с вами.", "We are going with you."], ["Кафе рядом с отелем.", "The café is next to the hotel."], ["Остановка перед музеем.", "The stop is in front of the museum."],
        ["Он был студентом.", "He was a student."], ["Она работает переводчиком.", "She works as a translator."], ["Можно с собакой?", "Are dogs allowed? / Can I come with a dog?"], ["С чем это?", "What is this with?"]
      ],
      vocab: ["с|with", "между|between", "перед|in front of", "за|behind", "под|under", "над|above", "рядом с|next to", "друг|friend", "семья|family", "машина|car", "автобус|bus", "поезд|train", "такси|taxi", "велосипед|bicycle", "пешком|on foot", "работать|to work", "быть|to be", "путешествовать|to travel"],
      sessions: ["Instrumental noun endings + pronoun forms.", "City placement drill using перед/за/между/рядом с.", "Companion/transport stories: who went with whom and how.", "Past-role drill: кем вы были? кем он работал?", "Describe a Riga route using at least 8 instrumental phrases.", "Week 7 quiz + case-mix review (all six case names now introduced)."],
      resource: { label: "Между нами • declension tables", url: "https://mezhdunami.org/" },
      quiz: [
        ["‘with my friend’:", ["с мой друг", "с моего друга", "с моим другом", "к моему другу"], 2],
        ["‘next to the hotel’:", ["рядом с отелем", "рядом отеля", "рядом к отелю", "с рядом отель"], 0],
        ["‘He was a doctor’:", ["Он был врач.", "Он был врачом.", "Он был врачу.", "Он врач былом."], 1],
        ["Instrumental of мы:", ["нас", "нам", "нами", "мы"], 2],
        ["‘between the museum and café’ begins:", ["между музеем и кафе", "между музей и кафе", "из музея и кафе", "к музею и кафе"], 0],
        ["Which preposition means ‘with’?", ["без", "с", "из", "к"], 1]
      ]
    },
    {
      id: 8, band: "A2", title: "Past, future & verb aspect", icon: "✓",
      goals: ["Tell what happened yesterday", "Talk about plans and future events", "Understand imperfective vs perfective at a practical level", "Choose aspect for process/repetition vs completed result"],
      grammar: [
        "Past tense is based on the infinitive stem + л and agrees with gender/number: он читал, она читала, они читали. Some verbs are irregular.",
        "Imperfective future uses буду/будешь… + infinitive: Я буду читать. Perfective verbs have a simple future: Я прочитаю.",
        "Imperfective focuses on process, repetition, duration, or whether an activity happened at all. Perfective usually presents one completed result/bounded event.",
        "Aspect is lexical: learn verbs in pairs/chunks, e.g. делать/сделать, покупать/купить, заказывать/заказать, читать/прочитать. Not every pair is perfectly interchangeable."
      ],
      phrases: [
        ["Вчера мы гуляли по Риге.", "Yesterday we walked around Riga."], ["Мы купили билеты.", "We bought the tickets."], ["Завтра я буду работать.", "Tomorrow I will be working."], ["Я закажу такси.", "I'll order a taxi."],
        ["Вы уже поели?", "Have you eaten already?"], ["Я ещё не закончил / закончила.", "I haven't finished yet."], ["Что вы делали вчера?", "What did you do yesterday?"], ["Что вы сделаете завтра?", "What will you get done tomorrow?"]
      ],
      vocab: ["вчера|yesterday", "сегодня|today", "завтра|tomorrow", "уже|already", "ещё|still/yet/more", "сначала|first", "потом|then", "делать/сделать|do", "покупать/купить|buy", "заказывать/заказать|order", "читать/прочитать|read", "писать/написать|write", "есть/съесть|eat", "пить/выпить|drink", "начинать/начать|begin", "заканчивать/закончить|finish", "открывать/открыть|open", "закрывать/закрыть|close"],
      sessions: ["Past-tense gender/number drill with 25 verbs.", "Future drill: imperfective буду + infinitive vs perfective simple future.", "Aspect sorting: process/repeated/completed-result scenarios.", "Tell yesterday's story in 12 sentences; partner asks follow-ups.", "Plan a full Riga day using future forms and at least 8 aspect pairs.", "Week 8 quiz + record a 2-minute past/future monologue."],
      resource: { label: "Между нами • verb system", url: "https://mezhdunami.ku.edu/" },
      quiz: [
        ["‘She read/was reading yesterday’ (imperfective):", ["Она читал.", "Она читала.", "Она читать.", "Она читали."], 1],
        ["Imperfective future:", ["Я буду читать.", "Я буду прочитаю.", "Я читаю буду.", "Я был читать."], 0],
        ["Best for one completed purchase:", ["Я покупал билет.", "Я купил билет.", "Я буду покупать билет вчера.", "Я покупать билет."], 1],
        ["Perfective simple future of сделать, first person:", ["я делаю", "я сделал", "я сделаю", "я буду сделал"], 2],
        ["Imperfective typically highlights:", ["only a completed result", "process/repetition/duration", "noun gender", "formal address"], 1],
        ["‘They finished’:", ["Они закончили.", "Они закончил.", "Они закончила.", "Они заканчивать."], 0]
      ]
    },
    {
      id: 9, band: "A2 → B1", title: "Getting around: verbs of motion", icon: "→",
      goals: ["Use идти/ходить and ехать/ездить", "Ask for and give directions", "Talk about repeated vs one-way movement", "Navigate transit and taxi situations"],
      grammar: [
        "идти = be going on foot in one direction now/for a specific trip; ходить = go on foot habitually/multidirectionally or make a round trip in the past.",
        "ехать/ездить make the same basic contrast for vehicle travel.",
        "пойти/поехать often mean to set off/start going on a specific trip. Motion prefixes later add meanings such as arrival/departure, but travel fluency starts with the core four.",
        "Direction: куда? + в/на + accusative. Origin: откуда? + из/с + genitive. Location: где? + в/на + prepositional."
      ],
      phrases: [
        ["Как пройти к центру?", "How do I walk to the center?"], ["Как доехать до вокзала?", "How do I get to the station by transport?"], ["Идите прямо.", "Go straight."], ["Поверните направо / налево.", "Turn right / left."],
        ["Мы едем на автобусе.", "We're going by bus."], ["Я часто хожу сюда пешком.", "I often walk here."], ["Где нам выходить?", "Where should we get off?"], ["Остановите здесь, пожалуйста.", "Please stop here."]
      ],
      vocab: ["идти|go on foot one-way", "ходить|go on foot habitual/multi", "ехать|go by vehicle one-way", "ездить|go by vehicle habitual/multi", "пойти|set off on foot", "поехать|set off by vehicle", "прямо|straight", "направо|to the right", "налево|to the left", "рядом|near", "перекрёсток|intersection", "светофор|traffic light", "вход|entrance", "выход|exit", "садиться|to get on/sit down", "выходить|to get off/go out", "остановить|to stop something", "опоздать|to be late"],
      sessions: ["Core-four motion verb sorting: идти/ходить/ехать/ездить.", "Three-question map: где? куда? откуда? with cases.", "Directions role-play with a real Riga map.", "Transit drill: ticket → stop → boarding → asking where to exit.", "Taxi drill: destination, route preference, stop, payment, lost-item scenario.", "Week 9 quiz + no-English navigation challenge."],
      resource: { label: "OpenRussian • motion verbs lookup", url: "https://en.openrussian.org/" },
      quiz: [
        ["Right now I am walking to the café:", ["Я хожу в кафе сейчас.", "Я иду в кафе.", "Я езжу в кафе.", "Я еду пешком."], 1],
        ["I often go there by bus:", ["Я часто еду туда на автобусе.", "Я часто езжу туда на автобусе.", "Я часто иду туда автобусом.", "Я часто ходить туда."], 1],
        ["‘Where to?’ is:", ["где?", "откуда?", "куда?", "когда?"], 2],
        ["‘How do I get to the station by transport?’:", ["Как доехать до вокзала?", "Как идти вокзал?", "Где ехать вокзал?", "Откуда вокзал ездить?"], 0],
        ["‘Turn left’ polite/plural:", ["Поверни налево.", "Поверните налево.", "Поворачивать налево.", "Поворот налево вы."], 1],
        ["‘Please stop here’:", ["Остановите здесь, пожалуйста.", "Стоп вы здесь.", "Останавливать тут меня.", "Здесь остановка вы."], 0]
      ]
    },
    {
      id: 10, band: "B1 build", title: "Requests, commands & aspect in real life", icon: "!",
      goals: ["Use high-frequency imperatives politely", "Make requests softer with пожалуйста/можно/не могли бы", "Use aspect in requests and instructions", "Handle service problems without switching immediately to English"],
      grammar: [
        "High-frequency polite/plural imperatives to memorize: скажите, покажите, помогите, подождите, повторите, напишите, позвоните, принесите.",
        "Не могли бы вы + infinitive…? is a polite ‘Could you…?’ construction. Можно + infinitive? is a very useful neutral request/permission form.",
        "Aspect in imperatives is nuanced. Perfective often requests one specific completed action; imperfective can invite/encourage an activity, repeat it, or focus on process. Learn common phrases as chunks.",
        "Russian politeness relies heavily on tone, вы, пожалуйста, and appropriate request formulas—not only on literal ‘please’."
      ],
      phrases: [
        ["Скажите, пожалуйста, где …?", "Please tell me where … is."], ["Покажите, пожалуйста.", "Please show me."], ["Не могли бы вы помочь?", "Could you help?"], ["Подождите минуту, пожалуйста.", "Please wait a minute."],
        ["Напишите адрес, пожалуйста.", "Please write the address."], ["Позвоните мне, пожалуйста.", "Please call me."], ["Принесите ещё воды, пожалуйста.", "Please bring more water."], ["Можно поменять номер?", "Can we change rooms?"]
      ],
      vocab: ["сказать|say/tell", "показать|show", "помочь|help", "подождать|wait", "повторить|repeat", "написать|write", "позвонить|call", "принести|bring", "поменять|change/exchange", "исправить|fix/correct", "проблема|problem", "ошибка|mistake", "ключ|key", "номер|room/number", "заказ|order", "неправильно|incorrectly", "сломаться|break down", "работать|work/function"],
      sessions: ["Memorize 12 polite imperatives as whole chunks.", "Soften 20 blunt requests three different ways.", "Problem desk role-play: wrong room/order/ticket/address.", "Aspect in requests: specific completion vs ongoing/repeated action.", "Three-minute Russian-only service recovery challenge.", "Week 10 quiz + redo any phrase you cannot produce in under 3 seconds."],
      resource: { label: "Между нами • communicative practice", url: "https://mezhdunami.ku.edu/" },
      quiz: [
        ["Polite ‘Tell me, please’:", ["Скажи, пожалуйста.", "Скажите, пожалуйста.", "Говорить, пожалуйста.", "Вы сказать."], 1],
        ["Very polite ‘Could you help?’:", ["Не могли бы вы помочь?", "Вы не помощь?", "Можете ли помощь я?", "Помощь мне вы."], 0],
        ["‘Please write the address’:", ["Напишите адрес, пожалуйста.", "Пишите адресом.", "Адрес написать вы.", "Вы писали адрес."], 0],
        ["Perfective imperative often suits:", ["one specific completed action", "only repeated habits", "noun possession", "past identity"], 0],
        ["‘Can we change rooms?’:", ["Можно поменять номер?", "Можно номер меняет?", "Мы поменять можно номером?", "Поменяли номер можно?"], 0],
        ["Which makes a request more polite?", ["ты + command only", "пожалуйста and вы", "dropping the verb", "using nominative everywhere"], 1]
      ]
    },
    {
      id: 11, band: "B1 build", title: "Description, comparison & relative clauses", icon: "Кто?",
      goals: ["Compare places, prices, food, and options", "Use который to connect ideas", "Describe things precisely enough to solve problems", "Use demonstratives and case forms more flexibly"],
      grammar: [
        "Comparatives often use -ее/-ей or irregular forms: быстрее, дешевле, лучше, хуже, больше, меньше. ‘Than’ can be чем: Этот вариант дешевле, чем тот.",
        "который = which/who/that and agrees in gender/number with its antecedent, but its CASE is determined by its role inside the relative clause.",
        "Example: Это кафе, которое мы любим. (которое is accusative inanimate = nominative-looking.) Это человек, с которым я говорил. (instrumental after с.)",
        "For B1, aim to understand and produce high-frequency relative-clause patterns rather than memorize every form in isolation."
      ],
      phrases: [
        ["Этот вариант дешевле.", "This option is cheaper."], ["Какой лучше?", "Which one is better?"], ["Мне нужен номер, который потише.", "I need a room that's a bit quieter."], ["Это кафе, которое мы искали.", "This is the café we were looking for."],
        ["Это человек, с которым я говорил.", "This is the person I spoke with."], ["Есть что-нибудь поближе?", "Is there anything closer?"], ["Мне нужен другой размер.", "I need a different size."], ["Этот слишком дорогой.", "This one is too expensive."]
      ],
      vocab: ["лучше|better", "хуже|worse", "больше|more/bigger", "меньше|less/smaller", "быстрее|faster", "медленнее|slower", "дешевле|cheaper", "дороже|more expensive", "ближе|closer", "дальше|farther", "тише|quieter", "громче|louder", "другой|another/different", "такой|such/like this", "который|which/who/that", "слишком|too", "достаточно|enough", "примерно|approximately"],
      sessions: ["Comparative forms: regular patterns + irregular core set.", "Shopping/hotel comparison drill: choose between three options and justify.", "Relative clause builder with который in nominative/accusative/prepositional/instrumental chunks.", "Lost-object description: color, size, material, location, relative clause.", "Riga recommendation debate: compare three cafés/areas/activities in Russian.", "Week 11 quiz + 2-minute descriptive speaking test."],
      resource: { label: "Russian for Everyone • intermediate review", url: "https://www.russianforeveryone.com/" },
      quiz: [
        ["Irregular comparative of хороший:", ["хорошее", "хорошеее", "лучше", "больше"], 2],
        ["‘cheaper than that one’:", ["дешевле, чем тот", "дешёвый от тот", "дешевле того чем", "дёшево как тот"], 0],
        ["‘the person I spoke with’:", ["человек, который я говорил", "человек, с которым я говорил", "человек, которого я говорил с", "человек, кому я говорил с"], 1],
        ["Case of который is determined mainly by:", ["the antecedent's case only", "its role inside the relative clause", "word length", "speaker gender"], 1],
        ["‘Is there anything closer?’:", ["Есть что-нибудь поближе?", "Есть ближе что?", "Что есть близкий?", "Есть что-нибудь близкоем?"], 0],
        ["‘This one is too expensive’:", ["Этот слишком дорогой.", "Это слишком дорогое он.", "Этот много цена.", "Он дорогой больше слишком."], 0]
      ]
    },
    {
      id: 12, band: "B1", title: "Opinions, reasons & connected speech", icon: "Потому",
      goals: ["Link sentences into B1-length speech", "Give opinions and reasons", "Use because/therefore/although/if/when/that", "Handle hypothetical and uncertain situations"],
      grammar: [
        "Core connectors: потому что = because; поэтому = therefore/so; хотя = although; если = if; когда = when; чтобы = so that/in order that; что = that.",
        "Opinion frames: по-моему…, мне кажется, что…, я думаю, что…, я согласен/согласна…, я не уверен/уверена…",
        "Hypothetical conditionals commonly use бы with past-tense forms in both clauses: Если бы у меня было время, я бы пошёл/пошла… The past morphology does not mean past time here.",
        "B1 fluency means keeping the conversation moving even with mistakes: paraphrase, ask for a word, confirm, and self-correct."
      ],
      phrases: [
        ["По-моему, это хорошая идея.", "In my opinion, that's a good idea."], ["Мне кажется, что …", "It seems to me that …"], ["Я думаю, что …", "I think that …"], ["Я согласен / согласна.", "I agree. (m/f)"],
        ["Я не уверен / уверена.", "I'm not sure. (m/f)"], ["Потому что …", "Because …"], ["Хотя …", "Although …"], ["Если бы было время, я бы …", "If there were time, I would …"]
      ],
      vocab: ["по-моему|in my opinion", "кажется|it seems", "думать|think", "считать|consider/think", "согласен/согласна|agree", "уверен/уверена|sure", "потому что|because", "поэтому|therefore", "хотя|although", "если|if", "когда|when", "чтобы|so that", "наверное|probably", "возможно|possibly", "конечно|of course", "например|for example", "вообще|in general/at all", "кстати|by the way"],
      sessions: ["Connector chaining: turn 20 pairs of short sentences into connected speech.", "Opinion carousel: food, travel, work, cities, language learning—45 seconds each.", "Agree/disagree politely and give two reasons.", "Hypothetical drill with если бы… я бы…", "Five-minute Russian-only conversation; use repair strategies instead of English.", "Week 12 quiz + B1 self-assessment check."],
      resource: { label: "CEFR • B1 can-do descriptors", url: "https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors" },
      quiz: [
        ["‘because’:", ["поэтому", "потому что", "хотя", "чтобы"], 1],
        ["‘therefore / so’:", ["поэтому", "если", "когда", "например"], 0],
        ["Natural opinion frame:", ["Мне кажется, что…", "Я кажется что…", "Меня кажется…", "Мне казаться что…"], 0],
        ["Hypothetical ‘If I had time, I would go…’ begins:", ["Если у меня было время, я пойду…", "Если бы у меня было время, я бы пошёл/пошла…", "Когда время, я бы иду…", "Потому что время, я пошёл…"], 1],
        ["‘although’:", ["хотя", "поэтому", "потому что", "чтобы"], 0],
        ["At B1, a strong repair strategy is:", ["stop speaking after any error", "paraphrase and ask for clarification", "translate every sentence first", "avoid connectors"], 1]
      ]
    },
    {
      id: 13, band: "B1 Riga", title: "Riga mission week & final readiness", icon: "Rīga",
      goals: ["Complete everyday travel tasks primarily in Russian when appropriate", "Switch gracefully among Latvian/English/Russian based on the other person's preference", "Sustain 5–8 minute conversations on familiar topics", "Pass the final travel and B1-style readiness checks"],
      grammar: [
        "This week is integration, not a new declension chart. Your goal is automatic retrieval under mild pressure.",
        "Latvian is Latvia's official language. Russian is widely understood in Riga, but do not assume a stranger prefers it. A courteous opening in Latvian or English, or asking language preference, is the safer default.",
        "Useful Russian check: Вы говорите по-русски? = Do you speak Russian? Useful Latvian check: Vai jūs runājat krieviski? = Do you speak Russian?",
        "B1 is functional independence, not perfection: understand the main point of clear standard speech on familiar matters, manage most travel situations, produce connected text/speech, and give simple reasons for opinions/plans."
      ],
      phrases: [
        ["Labdien!", "Good day / hello. (Latvian)"], ["Paldies!", "Thank you! (Latvian)"], ["Lūdzu.", "Please / you're welcome. (Latvian)"], ["Vai jūs runājat krieviski?", "Do you speak Russian? (Latvian)"],
        ["Вы говорите по-русски?", "Do you speak Russian?"], ["Вам удобнее по-латышски, по-русски или по-английски?", "Is Latvian, Russian, or English more comfortable for you?"], ["Я постараюсь объяснить.", "I'll try to explain."], ["Правильно ли я понял / поняла?", "Did I understand correctly? (m/f)"]
      ],
      vocab: ["латышский|Latvian (language)", "русский|Russian", "английский|English", "понимать|understand", "объяснить|explain", "уточнить|clarify", "правильно|correctly", "неправильно|incorrectly", "потерять|lose", "найти|find", "забронировать|reserve/book", "отменить|cancel", "задержка|delay", "срочно|urgently", "опасно|dangerous", "безопасно|safe", "полиция|police", "посольство|embassy"],
      sessions: ["Airport + arrival simulation from plane door to accommodation.", "Food + market + shopping simulation with one intentional problem to solve.", "Transit + directions + taxi simulation without English.", "Health + emergency + lost-item simulation; practice exact information and clarification.", "8-minute social conversation: past trip, plans, opinions, comparisons, reasons, follow-up questions.", "FINAL: full 60–90 minute Riga mission, final quiz, CEFR checklist, and personal weak-point plan."],
      resource: { label: "Latvian Language Agency • official-language context", url: "https://valoda.lv/en/state-language/state-language-policy/" },
      quiz: [
        ["Latvia's official language is:", ["Russian", "Latvian", "English", "Latgalian only"], 1],
        ["Best assumption with a stranger in Riga:", ["they definitely prefer Russian", "ask/observe language preference and be flexible", "they definitely prefer English", "Russian is the official language"], 1],
        ["Russian ‘Do you speak Russian?’:", ["Вы говорите по-русски?", "Вы русский говорить?", "Говоришь русский вы?", "Есть русский язык?"], 0],
        ["‘Did I understand correctly?’ (female speaker):", ["Правильно ли я поняла?", "Правильно я понял ли?", "Я правильная поняла?", "Поняла правильно вы?"], 0],
        ["A B1 traveler should aim to:", ["speak with zero grammar mistakes", "manage most familiar travel situations and connected conversation", "know every Russian verb", "sound native"], 1],
        ["Latvian ‘thank you’:", ["Lūdzu", "Paldies", "Labdien", "Jā"], 1]
      ]
    }
  ],

  riga: [
    {
      title: "Arrival & airport", icon: "✈️", phrases: [
        ["Где получить багаж?", "Where do I collect baggage?"], ["Мой багаж не приехал.", "My baggage didn't arrive."], ["Где выход?", "Where is the exit?"], ["Где можно заказать такси?", "Where can I order a taxi?"],
        ["Нам нужно в центр Риги.", "We need to go to central Riga."], ["Сколько времени это займёт?", "How long will it take?"], ["У нас есть бронь.", "We have a reservation."], ["Вот адрес.", "Here is the address."]
      ]
    },
    {
      title: "Public transport & directions", icon: "🚌", phrases: [
        ["Где ближайшая остановка?", "Where is the nearest stop?"], ["Этот автобус идёт в центр?", "Does this bus go to the center?"], ["Где купить билет?", "Where can I buy a ticket?"], ["На какой остановке нам выходить?", "At which stop should we get off?"],
        ["Как пройти туда пешком?", "How do we walk there?"], ["Это далеко отсюда?", "Is it far from here?"], ["Идите прямо, потом налево.", "Go straight, then left."], ["Мы заблудились.", "We're lost."]
      ]
    },
    {
      title: "Restaurant, café & market", icon: "🍲", phrases: [
        ["Столик на троих, пожалуйста.", "A table for three, please."], ["Что вы рекомендуете?", "What do you recommend?"], ["Что входит в это блюдо?", "What is in this dish?"], ["Без лука, пожалуйста.", "Without onion, please."],
        ["У меня аллергия на …", "I am allergic to …"], ["Можно ещё воды?", "Can we have more water?"], ["Всё было очень вкусно.", "Everything was very tasty."], ["Счёт, пожалуйста.", "The bill, please."]
      ]
    },
    {
      title: "Accommodation & family/home", icon: "🏠", phrases: [
        ["Мы приехали!", "We arrived!"], ["Спасибо, что нас встретили.", "Thank you for meeting us."], ["Где можно оставить вещи?", "Where can we leave our things?"], ["Есть Wi‑Fi?", "Is there Wi-Fi?"],
        ["Можно включить отопление?", "Can we turn on the heating?"], ["Здесь немного холодно.", "It's a little cold here."], ["Во сколько будем ужинать?", "What time will we have dinner?"], ["Чем вам помочь?", "How can I help you?"]
      ]
    },
    {
      title: "Shopping & money", icon: "🛍️", phrases: [
        ["Сколько это стоит?", "How much is this?"], ["Можно посмотреть?", "May I look at it?"], ["Есть другой размер?", "Is there another size?"], ["Можно примерить?", "May I try it on?"],
        ["Я возьму это.", "I'll take this."], ["Можно заплатить картой?", "Can I pay by card?"], ["У вас есть сдача?", "Do you have change?"], ["Можно чек?", "Can I have the receipt?"]
      ]
    },
    {
      title: "Health & pharmacy", icon: "💊", phrases: [
        ["Где ближайшая аптека?", "Where is the nearest pharmacy?"], ["Мне плохо.", "I feel unwell."], ["У меня болит горло.", "My throat hurts."], ["У меня температура.", "I have a fever."],
        ["Это началось вчера.", "This started yesterday."], ["У меня аллергия на …", "I am allergic to …"], ["Как это принимать?", "How should I take this?"], ["Нам нужен врач.", "We need a doctor."]
      ]
    },
    {
      title: "Problems & emergencies", icon: "🆘", phrases: [
        ["Помогите, пожалуйста.", "Please help."], ["Я потерял / потеряла телефон.", "I lost my phone. (m/f)"], ["У меня украли кошелёк.", "My wallet was stolen."], ["Позвоните в полицию, пожалуйста.", "Please call the police."],
        ["Где полицейский участок?", "Where is the police station?"], ["Мне нужен переводчик.", "I need an interpreter."], ["Я не понимаю, что произошло.", "I don't understand what happened."], ["Это срочно.", "This is urgent."]
      ]
    },
    {
      title: "Social conversation", icon: "💬", phrases: [
        ["Как вам Рига?", "How do you like Riga?"], ["Мы давно хотели сюда приехать.", "We've wanted to come here for a long time."], ["Что вы посоветуете посмотреть?", "What would you recommend seeing?"], ["Чем вы обычно занимаетесь?", "What do you usually do?"],
        ["Мы учим русский уже несколько месяцев.", "We've been studying Russian for several months."], ["Мне кажется, я всё понимаю лучше, чем говорю.", "I think I understand much better than I speak."], ["Расскажите об этом подробнее.", "Tell me more about that."], ["Было очень приятно с вами познакомиться.", "It was very nice to meet you."]
      ]
    }
  ],

  cefr: [
    ["Listening", "I can understand the main points of clear standard speech on familiar matters and catch the main point of many travel-related announcements/conversations."],
    ["Reading", "I can understand texts made mainly of high-frequency everyday language and personal descriptions/events."],
    ["Spoken interaction", "I can deal with most situations likely to arise while travelling and enter unprepared conversations on familiar topics."],
    ["Spoken production", "I can connect phrases to describe experiences, events, hopes, plans, and briefly explain opinions."],
    ["Writing", "I can write straightforward connected text on familiar topics and personal messages describing experiences/impressions."],
    ["Repair", "When I lack a word, I can paraphrase, ask for clarification, confirm understanding, and keep the interaction going."]
  ],

  speakingPrompts: [
    "Introduce yourself for 90 seconds: where you're from, what you do, who you're travelling with, and why you're learning Russian.",
    "Tell the story of yesterday using at least six past-tense verbs and three time connectors.",
    "Plan tomorrow in Riga. Use future forms, times, transport, and at least two reasons for your choices.",
    "You received the wrong restaurant order. Explain the problem politely and ask for a specific fix.",
    "Compare two places you have visited: cost, food, weather, people, transport, and which you prefer.",
    "You are lost. Ask a stranger how to get to the station, confirm two directions, and thank them.",
    "Explain a minor health problem at a pharmacy and ask how to use the medicine.",
    "Describe your ideal day in Riga and what you would do if the weather were terrible.",
    "Tell someone about your family/friends, then ask them five follow-up questions about theirs.",
    "Explain why you are learning Russian, what is difficult, what has improved, and what you plan to practice next."
  ],

  resources: [
    { name: "Между нами", type: "Primary OER textbook", note: "Free web-based university Russian curriculum with audio, grammar, vocabulary, story-based input, and downloadable activities.", url: "https://mezhdunami.ku.edu/" },
    { name: "Между нами supplementary activities (MSU)", type: "Extra practice", note: "Open supplementary exercises and interactive activities tied to the OER textbook.", url: "https://openbooks.lib.msu.edu/mezhdunami/" },
    { name: "Russian for Everyone", type: "Grammar reference", note: "Free structured grammar lessons with examples and audio; useful for a second explanation of case/verb topics.", url: "https://www.russianforeveryone.com/" },
    { name: "OpenRussian", type: "Dictionary + forms", note: "Fast lookup for words, stress, meanings, grammar information, and practice.", url: "https://en.openrussian.org/" },
    { name: "Forvo Russian", type: "Pronunciation", note: "Native-speaker pronunciation recordings for checking individual words and phrases.", url: "https://forvo.com/languages/ru/" },
    { name: "Council of Europe CEFR", type: "Level target", note: "Official CEFR descriptor framework used to define the B1 skill target and self-assessment language.", url: "https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors" },
    { name: "Latvian Language Agency", type: "Riga language context", note: "Official source confirming Latvian as Latvia's official language; use Russian flexibly rather than assuming preference.", url: "https://valoda.lv/en/state-language/state-language-policy/" },
    { name: "LiveRiga", type: "Local context", note: "Official Riga tourism information for current transport, attractions, and visitor information.", url: "https://www.liveriga.com/en" },
    { name: "Latvia Travel", type: "Local context", note: "Official Latvian tourism portal; includes winter-travel guidance and useful local information.", url: "https://www.latvia.travel/en" }
  ]
};
