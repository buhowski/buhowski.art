const textData = [
	{
		// ################## TEXT FOR GENERAL IDEA PAGE
		mainTitleRu: `Коротко о главном:`,
		mainTitleEn: `Briefly about the main:`,
		mainTitleUa: `Коротко про головне:`,

		startupTitleRu: `Стартап`,
		startupTitleEn: `Startup`,
		startupTitleUa: `Стартап`,

		gameTitleRu: `Компьютерная игра`,
		gameTitleEn: `Video Game`,
		gameTitleUa: `Комп'ютерна гра`,

		gameTextRu: `Идея видеоигры украинского производства, смесь реальных исторических событий с добавкой небольшого, но не лишнего, количества магии, добротного остроумия и мистически пугающих моментов. Совокупность лучших, уже имеющихся, историй и работ. С правильным подходом к реализации и продакшену, и без давки ненужного маркетинга игра гарантированно попадает в топ лучших. А после первого тизера сможет посоревноваться за место самой ожидаемой игры.`,
		gameTextEn: `The idea of a Ukrainian-made video game, a mixture of real historical events with the addition of a small, but not superfluous, amount of magic, good wit and mystically frightening moments. A collection of the best, already available, stories and works. With the right approach to implementation and production, and without the crush of unnecessary marketing, the game is guaranteed to hit the top rating in the Game Awards. And after the first teaser will be able fight for the place of the most anticipated game.`,
		gameTextUa: `Ідея відеоігри українського виробництва, суміш реальних історичних подій з добавкою невеликої, але не зайвої, магії, добротної дотепності та містично лякаючих моментів. Сукупність кращих, вже існуючих, історій та робіт. З правильним підходом до реалізації і продакшену, і без тисняви непотрібного маркетингу гра гарантовано потрапляє у топ найкращих. А після першого тизера зможе позмагатися за позицію найочікуванішої гри.`,

		scenarioTitleRu: `Сценарии для экранизаций`,
		scenarioTitleEn: `Scenarios`,
		scenarioTitleUa: `Сценарії для екранізацій`,

		scenarioTextRu: `Разного рода идеи фильмов, сериалов и мультфильмов бурлящие в голове,
    записанные в блокнот, ждущие предложений для реализации!`,
		scenarioTextEn: `All sorts of ideas for films, TV shows, cartoons bubbling in my head, written down in a notes, waiting for proposals for implementation!`,
		scenarioTextUa: `Різного роду ідеї фільмів, серіалів та мультфільмів вируючих в голові, записані в блокнот, чекають на пропозиції для реалізації!`,

		// ################## ACCESS IDEA PAGE TEXT
		basicRu: `Concept: Основа`,
		basicEn: `Concept: Base`,
		basicUa: `Concept: Основа`,

		appSampleRu: `Приложение примера укомплектованного, многофункционального журнала с возможностью создания и развития любой производственной деятельности. Также местом для просмотра всевозможной информации и развлечения.`,
		appSampleEn: `Example application of a complete, feature rich magazine with the ability to create and develop any production activity. Also a place to view all sorts of information and entertainment.`,
		appSampleUa: `Додаток прикладу укомплектованого, багатофункціонального журналу з можливістю створення та розвитку будь-якої підприємницької діяльності. Також місцем для перегляду різноманітної інформації та розваг.`,

		possibilitiesTitleRu: `Тип проекта:`,
		possibilitiesTitleEn: `Project type:`,
		possibilitiesTitleUa: `Тип проекту:`,

		possibilitiesStarRu: [
			`Социальная сеть, ведение микроблогинга (фото, видео, звук, текст)`,
			`Онлайн кинотеатр, видеохостинг и лайв стриминг`,
		],
		possibilitiesRu: `Имиджборд и анонимный веб-форум`,
		possibilitiesStarEn: [
			`Social network, microblogging (photo, video, sound, text)`,
			`Online cinema, video hosting and live streaming`,
		],
		possibilitiesEn: `Imageboard and anonymous web forum`,
		possibilitiesStarUa: [
			`Соціальна мережа, ведення мікроблогінгу (фото, відео, звук, текст)`,
			`Онлайн кінотеатр, відеохостинг та лайв стрімінг`,
		],
		possibilitiesUa: `Іміджборд та анонімний веб-форум`,

		branchDescRu: `раздел имеет свою производственную деятельность: Журналистика. Игры/Кино/Мульт производство`,
		branchDescEn: `the section has its own production activity: Journalism. Games/Movies/Multi production.`,
		branchDescUa: `розділ має свою виробничу діяльність: Журналістика. Ігри/Кіно/Мульт виробництво.`,

		designRu: `Для представления главной страницы входа в приложение служат яркие, провокационные, сильные обложки журналов: Time, The New Yorker, National Geographic, etc. Будут создаваться и меняться в зависимости от текущего инфоповода для массового обсуждения.`,
		designEn: `To represent an example of the main page of the application, use bright, provocative, strong magazine covers like Time, The New Yorker, National Geographic, etc. Will be created and changed depending on the current newsbreak for public discussion.`,
		designUa: `Для представлення головної сторінки входу в додаток являються яскраві, провокаційні, сильні обкладинки журналів: Time, The New Yorker, National Geographic, etc. Створюватимуться і змінюватимуться залежно від поточного інфоприводу для масового обговорення.`,

		conceptTitleRu: `Projects: Сферы деятельности`,
		conceptTitleEn: `Projects: Areas of activity`,
		conceptTitleUa: `Projects: Сфери діяльності`,

		journalistRu: `Журналистика`,
		journalistEn: `Journalism`,
		journalistUa: `Журналістика`,

		journalistInfoRu: [
			`Новое повествование современного дыхания, различные мнения, правда и грязный реализм. Своеобразная подача информации без цензуры, с характером стиля письменности Хантера Томпсона, Буковски, Паланика, etc.`,
			`Гонзо-журналистика. Ведение повествования от первого лица или группы лиц - текст/звук/фото/видео-дневники. Нырять в самое пекло идиотизма проблемы, изучая вопрос изнутри, или создавать определенные условия для его появления (смесь психологических экспериментов поведения, церемония аяуаски, освещение burning man, etc).`,
		],
		journalistInfoEn: [
			`A new narrative of modern breath, different opinions, truth and dirty realism. A peculiar presentation of information without censorship, with the nature of the writing style of Hunter Thompson, Bukowski, Palahniuk, etc.`,
			`Gonzo Journalism. Conducting narration from the first person or groups of people – text/sound/photo/video diaries. Dive deep into the idiocy problems by studying the issue from the inside, or creating certain conditions for its appearance (a mix of psychological behavioral experiments, an ayahuasca ceremony, lighting a burning man, etc).`,
		],
		journalistInfoUa: [
			`Новий погляд сучасного дихання, різноманітні міркування, правда чистої води та брудний реалізм. Своєрідна подача інформації без цензури, з характером стилю писемності Хантера Томпсона, Буковськи, Паланіка, etc.`,
			`Гонзо журналістика. Ведення розповіді від першої особи чи групи лиць – текст/звук/фото/відео-щоденники. Пірнати в саме пекло ідіотизму проблеми, вивчаючи питання зсередини, або створювати певні умови для його появи (суміш психологічних експериментів поведінки, церемонія аяуаски, освітлення burning man, etc).`,
		],

		filmTitleRu: `Игры/Кино/Мульт производство`,
		filmTitleEn: `Games/Movies/Cartoon production`,
		filmTitleUa: `Ігри/Кіно/Мульт виробництво`,

		filmInfoRu: [
			`Собрать воедино лучших, недооцененных, безгранично рассуждающих, критически мыслящих, желающих в развитие специалистов и творить новую историю культуры, искусства и технологического развития в стране.`,
			`Дополнительно: студию правильного перевода и озвучки.`,
		],
		filmInfoEn: [
			`Bring together the best, underestimated, infinitely reasoning, critically thinking, willing to grow specialists and create a new history of culture, art and technological development in the country.`,
			`Additionally: studio of exact translation and voice acting.`,
		],
		filmInfoUa: [
			`Зібрати воєдино кращих, недооцінених, безмежно міркуючих, критично мислячих, бажаючих у розвиток спеціалістів і творити нову історію культури, мистецтва та технологічного розвитку в країні.`,
			`Додатково: студію правильного перекладу та озвучки.`,
		],

		excursusTitleRu: `Pilot: Разработка`,
		excursusTitleEn: `Pilot: Development`,
		excursusTitleUa: `Pilot: Розробка`,

		excursusInfoRu: `Первоначальный запуск задействует рубрику Журналистика и рабочий Имиджборд с идеями, рекламой и продвижением остального, что должно способствовать начальному толчку для набора аудитории и дальнейшему развитию.`,
		excursusInfoEn: `The initial launch will use the Journalism rubric and a working Imageboard with feature ideas and promotion of the rest, which should help for the first push, capture the audience and further development.`,
		excursusInfoUa: `Для початку задіяти рубрику Журналістика і робочий Іміджборд з ідеями, рекламою та просуванням остального, що має сприяти початковому поштовху, набору аудиторії та подальшому розвитку.`,

		whyTitleRu: `Why(?): Мотив`,
		whyTitleEn: `Why(?): Reason`,
		whyTitleUa: `Why(?): Мотив`,

		whyInfoRu: [
			`Все текущие социальные сети превратились или превращаются в “телевизоры былой эпохи”, где вокруг сплошная цензура и поток нескончаемой рекламы. Выбор просматриваемого контента всё реже остается за пользователем. Поэтому и нужна новая свободная площадка, свежий воздух.`,
			`Для Украины это будет первое, своего рода, место для раскрытия творческого потенциала, свободного высказывания, реализации личности и продвижении современного мировоззрения.`,
			`В этом ресурсе и будут собраны лучшие возможности воедино, без лишней мишуры и ненужных функций, с умопомрачительным минималистически-модернистским дизайном, футуристическим ответвлением и максимальной отзывчивостью к потребителю.`,
			`В процессе формирования это место идеально займет свою нишу производства всего вышеперечисленного и популяризации развития в стране.`,
		],
		whyInfoEn: [
			`All current social networks have turned into “bygone era TVs''. Where everywhere there is continuous censorship and a stream of endless advertising. The choice of viewed content is less often to be left for the user. Therefore, we need a new free platform with fresh air.`,
			`For Ukraine it will be the first kind of place for the disclosure of creative potential, free expression, the realization of personality and the promotion of a modern worldview.`,
			`This application will bring the best features together, without unnecessary functions and useless things, with a breathtaking modern minimalist design, a futuristic offshoot and maximum responsiveness to the consumer.`,
			`In the process of further formation, this place will ideally occupy its niche for the production of all above listed and the promotion of development in the country.`,
		],
		whyInfoUa: [
			`Усі поточні соціальні мережі перетворилися чи перетворюються на “телевізори минувшої епохи”, де довкола суцільна цензура і потік нескінченної реклами. Вибір контенту, що переглядається, все рідше залишається за користувачем. Для цього і потрібен новий вільний майданчик, свіже повітря.`,
			`Для України це буде перше, своєрідне місце для розкриття творчого потенціалу, вільного висловлювання, реалізації особистості та просування сучасного світогляду.`,
			`У цьому ресурсі і будуть зібрані найкращі можливості воєдино, без зайвої мішури та непотрібних функцій, з дивовижним мінімалістично-модерністським дизайном, футуристичним відгалуженням та максимальним відгуком до споживача.`,
			'У процесі формування це місце ідеально займатиме свою нішу виробництва всього вищепереліченого та популяризації розвитку в країні.',
		],
	},
];

export default textData;
