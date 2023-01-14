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

		appSampleRu: `Сервис примера укомплектованного, многофункционального журнала с возможностью создания и продвижения любой производственной деятельности. Также место для просмотра всевозможной информации и развлечения. В основном сосредоточен под мобильное приложения с расширенным и доступным веб сайтом.`,
		appSampleEn: `Example service of a complete, feature rich magazine with the ability to create and develop any production activity. Also a place to view all sorts of information and entertainment. Mainly focused on the mobile application with an extensive and accessible website.`,
		appSampleUa: `Сервіс прикладу укомплектованого, багатофункціонального журналу з можливістю створення та просування будь-якої підприємницької діяльності. Також місце для перегляду різноманітної інформації та розваг. В основному зосереджене під мобільний додаток з розширеним і доступним веб сайтом.`,

		possibilitiesTitleRu: `Возможности:`,
		possibilitiesTitleEn: `Possibilities:`,
		possibilitiesTitleUa: `Можливості:`,

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

		branchDescRu: `раздел имеет свою сферу деятельности: Журналистика. Игры/Кино/Мульт индустрия.`,
		branchDescEn: `the section has its own field of activity: Journalism. Games/Movies/Cartoons Industry.`,
		branchDescUa: `розділ має свою сферу діяльності: Журналістика. Ігри/Кіно/Мульт індустрія.`,

		designRu: `Для представления главной страницы входа в приложение служат яркие примеры обложек журналов Time, National Geographic, etc. Будут создаваться и меняться в зависимости от текущего инфоповода, вызывающие разные эмоции для массового обсуждения.`,
		designEn: `To represent an example of the main page of the application, there are vivid examples of magazine covers like Time, National Geographic, etc. Will be created and changed depending on the current newsbreak, causing different emotions for public discussion.`,
		designUa: `Для представлення головної сторінки входу в додаток являються яскраві приклади обкладинок журналів Time, National Geographic, etc. Створюватимуться і змінюватимуться залежно від поточного інфоприводу, що викликатимуть різні емоції для масового обговорення.`,

		conceptTitleRu: `Projects: Сферы деятельности`,
		conceptTitleEn: `Projects: Fields of activity`,
		conceptTitleUa: `Projects: Сфери діяльності`,

		journalistRu: `Журналистика`,
		journalistEn: `Journalism`,
		journalistUa: `Журналістика`,

		journalistInfoRu: [
			`Новое повествование современного дыхания, различные мнения, правда и грязный реализм. Своеобразная подача информации без цензуры, с характером стиля письменности Хантера Томпсона, Буковски, Паланика, etc.`,
			`Гонзо-журналистика. Ведение сюжетных дневников от первого лица или группы лиц. Нырять в самое пекло идиотизма проблемы, изучая вопрос изнутри или создавать определенные условия для его появления (смесь психологических экспериментов поведения в разных сферах жизнедеятельности, освещение burning man, церемонию аяуаски, etc.).`,
		],
		journalistInfoEn: [
			`A new narrative of modern breath, different opinions, truth and dirty realism. A peculiar presentation of information without censorship, with the nature of the writing style of Hunter Thompson, Bukowski, Palahniuk, etc.`,
			`Gonzo Journalism. Making story diaries from the first person or groups of people. Dive deep into the idiocy problems by studying the issue from the inside or creating certain conditions for its appearance (a mix of psychological behavioral experiments in different areas of life, lighting an ayahuasca ceremony, burning man, etc).`,
		],
		journalistInfoUa: [
			`Сучасний погляд нового дихання, різноманітні міркування, правда чистої води та брудний реалізм. Своєрідна подача інформації без цензури, з характером стилю писемності Хантера Томпсона, Буковськи, Паланіка, etc.`,
			`Гонзо журналістика. Ведення сюжетних щоденників від першої особи чи групи лиць. Пірнати в саме пекло ідіотизму проблеми, вивчаючи питання зсередини або створювати певні умови для його появи (суміш психологічних експериментів поведінки в різних сферах життєдіяльності, освітлення burning man, церемонію аяуаски, etc.).`,
		],

		filmTitleRu: `Творческое производство`,
		filmTitleEn: `Creative production`,
		filmTitleUa: `Творче виробництво`,

		filmInfoRu: [
			`Собрать из разных сфер деятельности лучших своего жанра и желающих в развитие специалистов, соединить воедино в профессиональный коллектив критически мыслящих идейников и энтузиастов, чтобы творить новую историю культуры, искусства и технологического развития в стране.`,
			`Интересует создание кино, мультфильмов, компьютерных игр. Дополнительно: студия правильного перевода и озвучки.`,
			`Для начала могу представить вашему вниманию идею нелинейной ролевой игры с открытым миром – Казаки РПГ. Простыми словами нужно сделать то, что поляки сотворили с игровой серией Ведьмак и что украинские GSC Game World не сделали со своими казаками(сделать из стратегии полноценное РПГ). 
			Показать казаков для популяризации нового видения, тех казаков что запорожская сечь. Реализовать красочные виды, архитектуру Украины тех времен и образ настоящего казака с боевым танцем гопак и паркуром на лошадях. Совместить реальные факты и события с мистикой и юмором произведений Гоголя и получить довольно интересную серию игр об украинской культуре тогдашней эпохи.`,
		],
		filmInfoEn: [
			`From different fields of activity gather the best of their genre specialists who wish to grow, unite together to a professional team of critical thinkers, enthusiasts and create a new history of culture, art and technological development in the country.`,
			`Interested in making movies, cartoons, computer games. Additionally: studio of exact translation and voice acting.`,
			`To begin with, I can present to your attention the idea of a non-linear role-playing game with an open world - Cossacks RPG. In simple words, we need to do what the Poles did with The Witcher game series and what the Ukrainian GSC Game World did not do with their Cossacks (make a full-fledged RPG from the strategy).
			Show Cossacks to promote a new vision, those Cossacks that Zaporizhzhya Sich. Realize colorful views, the architecture of Ukraine of those times and the image of a real Cossack with a combat hopak dance and parkour on horseback. Combine real facts and events with the mysticism and humor of Gogol's works and get a quite interesting game series about Ukrainian culture of that era.`,
		],
		filmInfoUa: [
			`Зібрати з різних сфер діяльності найкращих свого жанру та бажаючих у розвиток спеціалістів, поєднати воєдино у професійний колектив критично мислячих ідейників та ентузіастів, щоб творити нову історію культури, мистецтва та технологічного розвитку в країні.`,
			`Цікавить створення кіно, мультфільмів, комп'ютерних ігор. Додатково: студія правильного перекладу та озвучки.`,
			`Для початку можу представити вашій увазі ідею нелінійної рольової гри з відкритим світом – Козаки РПГ. Простими словами потрібно зробити те, що поляки зробили з ігровою серією Відьмак і що українські GSC Game World не зробили зі своїми козаками (створити зі стратегії повноцінне РПГ). Показати козаків для популяризації нового бачення, тих козаків, що запорізька січ. Реалізувати барвисті краєвиди, архітектуру України тих часів та образ справжнього козака з бойовим танцем гопак та паркуром на конях. Поєднати реальні факти та події з містикою та гумором творів Гоголя та отримати досить цікаву серію ігор про українську культуру тогочасної епохи.
			`,
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
			`Для Украины это будет первое, своего рода, место для раскрытия творческого потенциала, свободы высказывания, реализации личности и продвижения современного мировоззрения.`,
			`В этом приложении и будут собраны лучшие возможности одновременно, без лишней мишуры и ненужных функций, с минималистически-модернистским дизайном, футуристическим ответвлением и максимальной отзывчивостью к потребителю.`,
			`В процессе формирования и правильным подходом к реализации это место идеально займет свою нишу производства всего вышеперечисленного и озвучит желание популяризировать развитие в стране.`,
		],
		whyInfoEn: [
			`All current social networks have turned into “bygone era TVs''. Where everywhere there is continuous censorship and a stream of endless advertising. The choice of viewed content is less often to be left for the user. Therefore we need a new free platform with fresh air.`,
			`For Ukraine, this will be the first, in its own way, place for the disclosure of creative potential, freedom of expression, the realization of personality and the promotion of a modern worldview.`,
			`This application will bring the best features together, without unnecessary functions and useless things, with a modern minimalist design, a futuristic offshoot and maximum responsiveness to the consumer.`,
			`In the process of further formation and with the right approach to implementation, this place will ideally occupy its niche for the production of all above listed and will voice the desire to promote development in the country.`,
		],
		whyInfoUa: [
			`Усі поточні соціальні мережі перетворилися чи перетворюються на “телевізори минувшої епохи”, де довкола суцільна цензура і потік нескінченної реклами. Вибір контенту, що переглядається, все рідше залишається за користувачем. Для цього і потрібен новий вільний майданчик, свіже повітря.`,
			`Для України це буде перше, свого роду, місце для розкриття творчого потенціалу, свободи висловлювання, реалізації особистості та просування сучасного світогляду. `,
			`У цьому додатку і будуть зібрані найкращі можливості воєдино, без зайвої мішури та непотрібних функцій, з мінімалістично-модерністським дизайном, футуристичним відгалуженням та максимальним відгуком до споживача.`,
			'В процесі формування та правильним підходом до реалізації це місце ідеально займатиме свою нішу виробництва всього вищепереліченого та озвучить бажання популяризувати розвиток У країні.',
		],
	},
];

export default textData;
