// Internationalization (i18n) translations
// Content remains in English - only UI labels are translated

export type Language = 'en' | 'fr' | 'ar' | 'es';

export interface Translations {
  // Navigation
  home: string;
  grammarGuide: string;
  reading: string;
  writing: string;
  practiceTools: string;
  progress: string;
  blog: string;
  about: string;
  contact: string;
  
  // Common UI
  search: string;
  searchPlaceholder: string;
  darkMode: string;
  lightMode: string;
  menu: string;
  closeMenu: string;
  
  // Topic page
  markComplete: string;
  completed: string;
  takeQuiz: string;
  nextTopic: string;
  previousTopic: string;
  relatedTopics: string;
  printLesson: string;
  
  // Quiz
  question: string;
  of: string;
  checkAnswer: string;
  nextQuestion: string;
  seeResults: string;
  tryAgain: string;
  yourScore: string;
  correct: string;
  incorrect: string;
  explanation: string;
  
  // Exercise
  hint: string;
  yourAnswer: string;
  correctAnswer: string;
  
  // Progress
  topicsCompleted: string;
  quizzesCompleted: string;
  averageScore: string;
  noProgress: string;
  
  // Footer
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
  
  // Metadata
  learnMore: string;
  readingTime: string;
  minutes: string;
  
  // HomePage
  homeTitle: string;
  homeSubtitle: string;
  homeDescription: string;
  presentSimpleTense: string;
  activePassiveVoice: string;
  ifClausesConditionals: string;
  startLearningNow: string;
  browseAllTopics: string;
  whatIsTypoGrammar: string;
  whatIsTypoGrammarText1: string;
  whatIsTypoGrammarText2: string;
  whatIsTypoGrammarText3: string;
  whatYouCanLearn: string;
  verbTensesTitle: string;
  verbTensesDesc: string;
  sentenceStructureTitle: string;
  sentenceStructureDesc: string;
  partsOfSpeechTitle: string;
  partsOfSpeechDesc: string;
  punctuationTitle: string;
  punctuationDesc: string;
  writingSkillsTitle: string;
  writingSkillsDesc: string;
  commonMistakesTitle: string;
  commonMistakesDesc: string;
  interactivePracticeTitle: string;
  interactivePracticeDesc: string;
  learnWithVideo: string;
  whyTypoGrammarFree: string;
  whyFreeText1: string;
  whyFreeText2: string;
  whyFreeText3: string;
  downloadFreeWorksheets: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    grammarGuide: 'Grammar Guide',
    reading: 'Reading',
    writing: 'Writing',
    practiceTools: 'Practice Tools',
    progress: 'Progress',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    
    // Common UI
    search: 'Search',
    searchPlaceholder: 'Search topics...',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    menu: 'Menu',
    closeMenu: 'Close Menu',
    
    // Topic page
    markComplete: 'Mark as Complete',
    completed: 'Completed',
    takeQuiz: 'Take Quiz',
    nextTopic: 'Next Topic',
    previousTopic: 'Previous Topic',
    relatedTopics: 'Related Topics',
    printLesson: 'Print This Lesson',
    
    // Quiz
    question: 'Question',
    of: 'of',
    checkAnswer: 'Check Answer',
    nextQuestion: 'Next Question',
    seeResults: 'See Results',
    tryAgain: 'Try Again',
    yourScore: 'Your Score',
    correct: 'Correct',
    incorrect: 'Incorrect',
    explanation: 'Explanation',
    
    // Exercise
    hint: 'Hint',
    yourAnswer: 'Your Answer',
    correctAnswer: 'Correct Answer',
    
    // Progress
    topicsCompleted: 'Topics Completed',
    quizzesCompleted: 'Quizzes Completed',
    averageScore: 'Average Score',
    noProgress: 'No progress yet',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    
    // Metadata
    learnMore: 'Learn More',
    readingTime: 'Reading Time',
    minutes: 'min',
    
    // HomePage
    homeTitle: 'Learn English Grammar Online – Free & Easy',
    homeSubtitle: 'Your complete guide to mastering English grammar, understanding verb tenses, improving writing skills, and avoiding common mistakes. Start with essential topics like',
    homeDescription: '',
    presentSimpleTense: 'Present Simple Tense',
    activePassiveVoice: 'Active vs Passive Voice',
    ifClausesConditionals: 'If-Clauses and Conditionals',
    startLearningNow: 'Start Learning Now',
    browseAllTopics: 'Browse All Topics',
    whatIsTypoGrammar: 'What is TypoGrammar? Your Free English Grammar Resource',
    whatIsTypoGrammarText1: 'TypoGrammar is a comprehensive, free English grammar learning platform designed to help ESL/EFL students, native speakers, professionals, and language enthusiasts master the intricacies of English syntax and language rules. Whether you\'re preparing for TOEFL, IELTS, Cambridge exams, improving your business writing, or simply want to communicate more clearly and confidently, TypoGrammar provides step-by-step explanations, real-world examples, and interactive practice quizzes to accelerate your learning.',
    whatIsTypoGrammarText2: 'We believe that understanding grammar doesn\'t have to be tedious or overwhelming. Our platform combines intuitive design with pedagogically sound educational content to create an engaging and effective learning experience. Each grammar topic is carefully structured to break down complex language rules into easy-to-digest lessons that you can immediately apply in speaking, writing, and reading contexts.',
    whatIsTypoGrammarText3: 'TypoGrammar serves English learners at all proficiency levels—from absolute beginners learning basic sentence structure to advanced learners refining their understanding of nuanced grammatical concepts. Our content library covers everything from fundamental verb conjugations, tenses (present, past, future, perfect, continuous), and parts of speech to advanced topics like subjunctive mood, reported speech, modal verbs, phrasal verbs, and academic writing conventions.',
    whatYouCanLearn: 'What You Can Learn: Complete Grammar Curriculum',
    verbTensesTitle: 'Verb Tenses & Conjugations:',
    verbTensesDesc: 'Master all 12 English tenses (simple, continuous, perfect, perfect continuous) in present, past, and future forms. Learn when to use each tense, how to form them correctly, and understand the differences between similar tenses like past simple vs. present perfect.',
    sentenceStructureTitle: 'Sentence Structure & Syntax:',
    sentenceStructureDesc: 'Understand how to construct clear, grammatically correct sentences using proper word order, subject-verb agreement, and syntactic patterns. Learn about simple, compound, complex, and compound-complex sentences.',
    partsOfSpeechTitle: 'Parts of Speech & Word Classes:',
    partsOfSpeechDesc: 'Learn about the eight parts of speech (nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, interjections) and how they function together to create meaningful communication.',
    punctuationTitle: 'Punctuation & Mechanics:',
    punctuationDesc: 'Perfect your use of commas, semicolons, colons, apostrophes, quotation marks, and other punctuation marks. Understand capitalization rules, hyphenation, and formatting conventions.',
    writingSkillsTitle: 'Writing Skills & Composition:',
    writingSkillsDesc: 'Develop your ability to write essays, emails, reports, and creative content. Learn paragraph structure, thesis statements, topic sentences, transitions, and techniques for varying sentence structure to improve readability.',
    commonMistakesTitle: 'Common Grammar Mistakes & Pitfalls:',
    commonMistakesDesc: 'Identify and avoid frequent errors that English learners make, including commonly confused words (affect/effect, their/there/they\'re), incorrect verb forms, misplaced modifiers, and subject-verb disagreement.',
    interactivePracticeTitle: 'Interactive Practice & Quizzes:',
    interactivePracticeDesc: 'Test your knowledge with engaging quizzes and exercises designed to reinforce grammar concepts. Track your progress, identify weak areas, and build confidence through hands-on practice.',
    learnWithVideo: 'Learn English Grammar with Video',
    whyTypoGrammarFree: 'Why TypoGrammar is Free',
    whyFreeText1: 'We believe that quality education should be accessible to everyone, regardless of their financial situation. English is the global language of business, education, and communication, and we want to remove barriers that prevent people from improving their language skills.',
    whyFreeText2: 'TypoGrammar is supported by advertisements, which allow us to keep all our content completely free for users worldwide. We\'re committed to maintaining this model because we\'ve seen how grammar education can transform lives—opening doors to better jobs, educational opportunities, and cross-cultural communication.',
    whyFreeText3: 'Our mission is simple: to provide the best possible grammar education to as many people as possible, without charging a single penny. Whether you\'re a student in a developing country or a professional looking to enhance your skills, TypoGrammar is here to help you succeed.',
    downloadFreeWorksheets: 'Download Free Worksheets',
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    grammarGuide: 'Guide de Grammaire',
    reading: 'Lecture',
    writing: 'Écriture',
    practiceTools: 'Outils de Pratique',
    progress: 'Progrès',
    blog: 'Blog',
    about: 'À Propos',
    contact: 'Contact',
    
    // Common UI
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher des sujets...',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    menu: 'Menu',
    closeMenu: 'Fermer le Menu',
    
    // Topic page
    markComplete: 'Marquer comme Terminé',
    completed: 'Terminé',
    takeQuiz: 'Faire le Quiz',
    nextTopic: 'Sujet Suivant',
    previousTopic: 'Sujet Précédent',
    relatedTopics: 'Sujets Connexes',
    printLesson: 'Imprimer cette Leçon',
    
    // Quiz
    question: 'Question',
    of: 'sur',
    checkAnswer: 'Vérifier la Réponse',
    nextQuestion: 'Question Suivante',
    seeResults: 'Voir les Résultats',
    tryAgain: 'Réessayer',
    yourScore: 'Votre Score',
    correct: 'Correct',
    incorrect: 'Incorrect',
    explanation: 'Explication',
    
    // Exercise
    hint: 'Indice',
    yourAnswer: 'Votre Réponse',
    correctAnswer: 'Réponse Correcte',
    
    // Progress
    topicsCompleted: 'Sujets Terminés',
    quizzesCompleted: 'Quiz Terminés',
    averageScore: 'Score Moyen',
    noProgress: 'Aucun progrès pour le moment',
    
    // Footer
    allRightsReserved: 'Tous droits réservés',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
    
    // Metadata
    learnMore: 'En Savoir Plus',
    readingTime: 'Temps de Lecture',
    minutes: 'min',
    
    // HomePage
    homeTitle: 'Apprendre la Grammaire Anglaise en Ligne – Gratuit et Facile',
    homeSubtitle: 'Votre guide complet pour maîtriser la grammaire anglaise, comprendre les temps verbaux, améliorer vos compétences en écriture et éviter les erreurs courantes. Commencez par des sujets essentiels comme',
    homeDescription: '',
    presentSimpleTense: 'Le Présent Simple',
    activePassiveVoice: 'Voix Active vs Passive',
    ifClausesConditionals: 'Clauses If et Conditionnels',
    startLearningNow: 'Commencer à Apprendre',
    browseAllTopics: 'Parcourir Tous les Sujets',
    whatIsTypoGrammar: 'Qu\'est-ce que TypoGrammar ? Votre Ressource Gratuite de Grammaire Anglaise',
    whatIsTypoGrammarText1: 'TypoGrammar est une plateforme d\'apprentissage de la grammaire anglaise complète et gratuite, conçue pour aider les étudiants ESL/EFL, les locuteurs natifs, les professionnels et les passionnés de langues à maîtriser les subtilités de la syntaxe et des règles linguistiques anglaises. Que vous vous prépariez au TOEFL, IELTS, aux examens de Cambridge, que vous amélioriez votre écriture professionnelle ou que vous souhaitiez simplement communiquer plus clairement et avec plus de confiance, TypoGrammar fournit des explications étape par étape, des exemples concrets et des quiz de pratique interactifs pour accélérer votre apprentissage.',
    whatIsTypoGrammarText2: 'Nous croyons que comprendre la grammaire n\'a pas à être fastidieux ou écrasant. Notre plateforme combine un design intuitif avec un contenu éducatif pédagogiquement solide pour créer une expérience d\'apprentissage engageante et efficace. Chaque sujet de grammaire est soigneusement structuré pour décomposer les règles linguistiques complexes en leçons faciles à digérer que vous pouvez immédiatement appliquer dans des contextes oraux, écrits et de lecture.',
    whatIsTypoGrammarText3: 'TypoGrammar sert les apprenants d\'anglais à tous les niveaux de compétence—des débutants absolus apprenant la structure de phrase de base aux apprenants avancés affinant leur compréhension des concepts grammaticaux nuancés. Notre bibliothèque de contenu couvre tout, des conjugaisons verbales fondamentales, des temps (présent, passé, futur, parfait, continu) et des parties du discours aux sujets avancés comme le mode subjonctif, le discours rapporté, les verbes modaux, les verbes à particule et les conventions d\'écriture académique.',
    whatYouCanLearn: 'Ce Que Vous Pouvez Apprendre : Programme Complet de Grammaire',
    verbTensesTitle: 'Temps Verbaux et Conjugaisons :',
    verbTensesDesc: 'Maîtrisez les 12 temps anglais (simple, continu, parfait, parfait continu) aux formes présent, passé et futur. Apprenez quand utiliser chaque temps, comment les former correctement et comprenez les différences entre des temps similaires comme le passé simple vs. le présent parfait.',
    sentenceStructureTitle: 'Structure de Phrase et Syntaxe :',
    sentenceStructureDesc: 'Comprenez comment construire des phrases claires et grammaticalement correctes en utilisant l\'ordre des mots approprié, l\'accord sujet-verbe et les modèles syntaxiques. Apprenez les phrases simples, composées, complexes et composées-complexes.',
    partsOfSpeechTitle: 'Parties du Discours et Classes de Mots :',
    partsOfSpeechDesc: 'Apprenez les huit parties du discours (noms, pronoms, verbes, adjectifs, adverbes, prépositions, conjonctions, interjections) et comment elles fonctionnent ensemble pour créer une communication significative.',
    punctuationTitle: 'Ponctuation et Mécanique :',
    punctuationDesc: 'Perfectionnez votre utilisation des virgules, points-virgules, deux-points, apostrophes, guillemets et autres signes de ponctuation. Comprenez les règles de capitalisation, la césure et les conventions de formatage.',
    writingSkillsTitle: 'Compétences en Écriture et Composition :',
    writingSkillsDesc: 'Développez votre capacité à écrire des essais, des e-mails, des rapports et du contenu créatif. Apprenez la structure des paragraphes, les énoncés de thèse, les phrases thématiques, les transitions et les techniques pour varier la structure des phrases afin d\'améliorer la lisibilité.',
    commonMistakesTitle: 'Erreurs et Pièges Grammaticaux Courants :',
    commonMistakesDesc: 'Identifiez et évitez les erreurs fréquentes que font les apprenants d\'anglais, y compris les mots couramment confondus (affect/effect, leur/là/ils sont), les formes verbales incorrectes, les modificateurs mal placés et le désaccord sujet-verbe.',
    interactivePracticeTitle: 'Pratique Interactive et Quiz :',
    interactivePracticeDesc: 'Testez vos connaissances avec des quiz et des exercices engageants conçus pour renforcer les concepts grammaticaux. Suivez vos progrès, identifiez les points faibles et renforcez votre confiance grâce à la pratique pratique.',
    learnWithVideo: 'Apprenez la Grammaire Anglaise avec Vidéo',
    whyTypoGrammarFree: 'Pourquoi TypoGrammar est Gratuit',
    whyFreeText1: 'Nous croyons que l\'éducation de qualité devrait être accessible à tous, quelle que soit leur situation financière. L\'anglais est la langue mondiale des affaires, de l\'éducation et de la communication, et nous voulons éliminer les obstacles qui empêchent les gens d\'améliorer leurs compétences linguistiques.',
    whyFreeText2: 'TypoGrammar est soutenu par la publicité, ce qui nous permet de garder tout notre contenu complètement gratuit pour les utilisateurs du monde entier. Nous nous engageons à maintenir ce modèle car nous avons vu comment l\'éducation grammaticale peut transformer des vies—ouvrant des portes à de meilleurs emplois, des opportunités éducatives et la communication interculturelle.',
    whyFreeText3: 'Notre mission est simple : fournir la meilleure éducation grammaticale possible au plus grand nombre de personnes possible, sans facturer un seul centime. Que vous soyez un étudiant dans un pays en développement ou un professionnel cherchant à améliorer vos compétences, TypoGrammar est là pour vous aider à réussir.',
    downloadFreeWorksheets: 'Télécharger des Feuilles de Travail Gratuites',
  },
  
  ar: {
    // Navigation
    home: 'الرئيسية',
    grammarGuide: 'دليل القواعد',
    reading: 'القراءة',
    writing: 'الكتابة',
    practiceTools: 'أدوات التدريب',
    progress: 'التقدم',
    blog: 'المدونة',
    about: 'حول',
    contact: 'اتصل بنا',
    
    // Common UI
    search: 'بحث',
    searchPlaceholder: 'ابحث عن المواضيع...',
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح',
    menu: 'القائمة',
    closeMenu: 'إغلاق القائمة',
    
    // Topic page
    markComplete: 'تحديد كمكتمل',
    completed: 'مكتمل',
    takeQuiz: 'إجراء الاختبار',
    nextTopic: 'الموضوع التالي',
    previousTopic: 'الموضوع السابق',
    relatedTopics: 'مواضيع ذات صلة',
    printLesson: 'طباعة هذا الدرس',
    
    // Quiz
    question: 'سؤال',
    of: 'من',
    checkAnswer: 'تحقق من الإجابة',
    nextQuestion: 'السؤال التالي',
    seeResults: 'عرض النتائج',
    tryAgain: 'حاول مرة أخرى',
    yourScore: 'نتيجتك',
    correct: 'صحيح',
    incorrect: 'غير صحيح',
    explanation: 'التوضيح',
    
    // Exercise
    hint: 'تلميح',
    yourAnswer: 'إجابتك',
    correctAnswer: 'الإجابة الصحيحة',
    
    // Progress
    topicsCompleted: 'المواضيع المكتملة',
    quizzesCompleted: 'الاختبارات المكتملة',
    averageScore: 'المتوسط',
    noProgress: 'لا يوجد تقدم حتى الآن',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    
    // Metadata
    learnMore: 'اعرف المزيد',
    readingTime: 'وقت القراءة',
    minutes: 'دقيقة',
    
    // HomePage
    homeTitle: 'تعلم قواعد اللغة الإنجليزية عبر الإنترنت – مجاناً وسهل',
    homeSubtitle: 'دليلك الشامل لإتقان قواعد اللغة الإنجليزية، وفهم الأزمنة، وتحسين مهارات الكتابة، وتجنب الأخطاء الشائعة. ابدأ بالمواضيع الأساسية مثل',
    homeDescription: '',
    presentSimpleTense: 'زمن المضارع البسيط',
    activePassiveVoice: 'الصوت النشط مقابل المبني للمجهول',
    ifClausesConditionals: 'جمل الشرط والحالات الشرطية',
    startLearningNow: 'ابدأ التعلم الآن',
    browseAllTopics: 'تصفح جميع المواضيع',
    whatIsTypoGrammar: 'ما هو TypoGrammar؟ مصدرك المجاني لقواعد اللغة الإنجليزية',
    whatIsTypoGrammarText1: 'TypoGrammar هي منصة شاملة ومجانية لتعلم قواعد اللغة الإنجليزية مصممة لمساعدة طلاب اللغة الإنجليزية كلغة ثانية/أجنبية، والمتحدثين الأصليين، والمهنيين، وعشاق اللغات على إتقان تعقيدات بناء الجملة الإنجليزية وقواعد اللغة. سواء كنت تستعد لامتحانات TOEFL أو IELTS أو Cambridge، أو تحسن كتابتك المهنية، أو ترغب ببساطة في التواصل بشكل أوضح وأكثر ثقة، يوفر TypoGrammar شروحات خطوة بخطوة، وأمثلة من العالم الحقيقي، واختبارات تدريبية تفاعلية لتسريع تعلمك.',
    whatIsTypoGrammarText2: 'نؤمن بأن فهم القواعد لا يجب أن يكون مملاً أو مرهقاً. تجمع منصتنا بين التصميم البديهي والمحتوى التعليمي السليم تربوياً لخلق تجربة تعلم جذابة وفعالة. يتم تنظيم كل موضوع قواعدي بعناية لتقسيم قواعد اللغة المعقدة إلى دروس سهلة الفهم يمكنك تطبيقها فوراً في سياقات الكلام والكتابة والقراءة.',
    whatIsTypoGrammarText3: 'يخدم TypoGrammar متعلمي اللغة الإنجليزية على جميع مستويات الكفاءة—من المبتدئين المطلقين الذين يتعلمون بناء الجملة الأساسي إلى المتعلمين المتقدمين الذين يصقلون فهمهم للمفاهيم النحوية الدقيقة. تغطي مكتبة المحتوى لدينا كل شيء من تصريفات الأفعال الأساسية والأزمنة (المضارع والماضي والمستقبل والتام والمستمر) وأجزاء الكلام إلى المواضيع المتقدمة مثل صيغة الشرط والكلام المنقول والأفعال المساعدة والأفعال العبارية واصطلاحات الكتابة الأكاديمية.',
    whatYouCanLearn: 'ما يمكنك تعلمه: منهج قواعد شامل',
    verbTensesTitle: 'أزمنة الأفعال والتصريفات:',
    verbTensesDesc: 'أتقن جميع الأزمنة الإنجليزية الـ 12 (البسيط، المستمر، التام، التام المستمر) بصيغ المضارع والماضي والمستقبل. تعلم متى تستخدم كل زمن، وكيفية تكوينها بشكل صحيح، وافهم الفروق بين الأزمنة المتشابهة مثل الماضي البسيط مقابل المضارع التام.',
    sentenceStructureTitle: 'بناء الجملة والتركيب:',
    sentenceStructureDesc: 'افهم كيفية بناء جمل واضحة ونحوية صحيحة باستخدام ترتيب الكلمات المناسب، والتوافق بين الفاعل والفعل، والأنماط النحوية. تعلم الجمل البسيطة والمركبة والمعقدة والمركبة المعقدة.',
    partsOfSpeechTitle: 'أجزاء الكلام وفئات الكلمات:',
    partsOfSpeechDesc: 'تعرف على أجزاء الكلام الثمانية (الأسماء، الضمائر، الأفعال، الصفات، الظروف، حروف الجر، حروف العطف، التعجب) وكيف تعمل معاً لخلق تواصل ذي معنى.',
    punctuationTitle: 'علامات الترقيم والآليات:',
    punctuationDesc: 'أتقن استخدام الفواصل والفواصل المنقوطة والنقطتين والفواصل العليا وعلامات الاقتباس وعلامات الترقيم الأخرى. افهم قواعد الأحرف الكبيرة، والواصلات، واصطلاحات التنسيق.',
    writingSkillsTitle: 'مهارات الكتابة والتأليف:',
    writingSkillsDesc: 'طور قدرتك على كتابة المقالات والبريد الإلكتروني والتقارير والمحتوى الإبداعي. تعلم بناء الفقرات وبيانات الأطروحة والجمل الموضوعية والانتقالات وتقنيات تنويع بنية الجملة لتحسين القابلية للقراءة.',
    commonMistakesTitle: 'الأخطاء والمزالق النحوية الشائعة:',
    commonMistakesDesc: 'حدد وتجنب الأخطاء الشائعة التي يرتكبها متعلمو اللغة الإنجليزية، بما في ذلك الكلمات المربكة (affect/effect، their/there/they\'re)، وأشكال الأفعال غير الصحيحة، والمعدلات في غير موضعها، وعدم التوافق بين الفاعل والفعل.',
    interactivePracticeTitle: 'التدريب التفاعلي والاختبارات:',
    interactivePracticeDesc: 'اختبر معرفتك من خلال اختبارات وتمارين جذابة مصممة لتعزيز مفاهيم القواعد. تتبع تقدمك، وحدد نقاط الضعف، وابنِ الثقة من خلال الممارسة العملية.',
    learnWithVideo: 'تعلم قواعد اللغة الإنجليزية بالفيديو',
    whyTypoGrammarFree: 'لماذا TypoGrammar مجاني',
    whyFreeText1: 'نؤمن بأن التعليم الجيد يجب أن يكون متاحاً للجميع، بغض النظر عن وضعهم المالي. الإنجليزية هي اللغة العالمية للأعمال والتعليم والتواصل، ونريد إزالة الحواجز التي تمنع الناس من تحسين مهاراتهم اللغوية.',
    whyFreeText2: 'يتم دعم TypoGrammar من خلال الإعلانات، مما يسمح لنا بالحفاظ على جميع محتوياتنا مجانية تماماً للمستخدمين في جميع أنحاء العالم. نحن ملتزمون بالحفاظ على هذا النموذج لأننا رأينا كيف يمكن لتعليم القواعد أن يحول الحياة—فتح أبواب لوظائف أفضل وفرص تعليمية وتواصل بين الثقافات.',
    whyFreeText3: 'مهمتنا بسيطة: تقديم أفضل تعليم قواعد ممكن لأكبر عدد ممكن من الناس، دون فرض رسوم. سواء كنت طالباً في بلد نامٍ أو محترفاً يتطلع إلى تعزيز مهاراتك، فإن TypoGrammar موجود لمساعدتك على النجاح.',
    downloadFreeWorksheets: 'تنزيل أوراق عمل مجانية',
  },
  
  es: {
    // Navigation
    home: 'Inicio',
    grammarGuide: 'Guía de Gramática',
    reading: 'Lectura',
    writing: 'Escritura',
    practiceTools: 'Herramientas de Práctica',
    progress: 'Progreso',
    blog: 'Blog',
    about: 'Acerca de',
    contact: 'Contacto',
    
    // Common UI
    search: 'Buscar',
    searchPlaceholder: 'Buscar temas...',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    menu: 'Menú',
    closeMenu: 'Cerrar Menú',
    
    // Topic page
    markComplete: 'Marcar como Completado',
    completed: 'Completado',
    takeQuiz: 'Hacer el Cuestionario',
    nextTopic: 'Siguiente Tema',
    previousTopic: 'Tema Anterior',
    relatedTopics: 'Temas Relacionados',
    printLesson: 'Imprimir esta Lección',
    
    // Quiz
    question: 'Pregunta',
    of: 'de',
    checkAnswer: 'Verificar Respuesta',
    nextQuestion: 'Siguiente Pregunta',
    seeResults: 'Ver Resultados',
    tryAgain: 'Intentar de Nuevo',
    yourScore: 'Tu Puntuación',
    correct: 'Correcto',
    incorrect: 'Incorrecto',
    explanation: 'Explicación',
    
    // Exercise
    hint: 'Pista',
    yourAnswer: 'Tu Respuesta',
    correctAnswer: 'Respuesta Correcta',
    
    // Progress
    topicsCompleted: 'Temas Completados',
    quizzesCompleted: 'Cuestionarios Completados',
    averageScore: 'Puntuación Promedio',
    noProgress: 'Sin progreso aún',
    
    // Footer
    allRightsReserved: 'Todos los derechos reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    
    // Metadata
    learnMore: 'Aprender Más',
    readingTime: 'Tiempo de Lectura',
    minutes: 'min',
    
    // HomePage
    homeTitle: 'Aprende Gramática Inglesa en Línea – Gratis y Fácil',
    homeSubtitle: 'Tu guía completa para dominar la gramática inglesa, entender los tiempos verbales, mejorar las habilidades de escritura y evitar errores comunes. Comienza con temas esenciales como',
    homeDescription: '',
    presentSimpleTense: 'Presente Simple',
    activePassiveVoice: 'Voz Activa vs Pasiva',
    ifClausesConditionals: 'Cláusulas If y Condicionales',
    startLearningNow: 'Comienza a Aprender Ahora',
    browseAllTopics: 'Explorar Todos los Temas',
    whatIsTypoGrammar: '¿Qué es TypoGrammar? Tu Recurso Gratuito de Gramática Inglesa',
    whatIsTypoGrammarText1: 'TypoGrammar es una plataforma integral y gratuita de aprendizaje de gramática inglesa diseñada para ayudar a estudiantes de ESL/EFL, hablantes nativos, profesionales y entusiastas del idioma a dominar las complejidades de la sintaxis y las reglas lingüísticas del inglés. Ya sea que te estés preparando para TOEFL, IELTS, exámenes de Cambridge, mejorando tu escritura empresarial, o simplemente quieras comunicarte de manera más clara y con confianza, TypoGrammar proporciona explicaciones paso a paso, ejemplos del mundo real y cuestionarios de práctica interactivos para acelerar tu aprendizaje.',
    whatIsTypoGrammarText2: 'Creemos que entender la gramática no tiene que ser tedioso o abrumador. Nuestra plataforma combina un diseño intuitivo con contenido educativo pedagógicamente sólido para crear una experiencia de aprendizaje atractiva y efectiva. Cada tema de gramática está cuidadosamente estructurado para desglosar reglas lingüísticas complejas en lecciones fáciles de digerir que puedes aplicar inmediatamente en contextos de habla, escritura y lectura.',
    whatIsTypoGrammarText3: 'TypoGrammar sirve a estudiantes de inglés de todos los niveles de competencia—desde principiantes absolutos que aprenden la estructura básica de oraciones hasta estudiantes avanzados que refinan su comprensión de conceptos gramaticales matizados. Nuestra biblioteca de contenido cubre todo, desde conjugaciones verbales fundamentales, tiempos (presente, pasado, futuro, perfecto, continuo) y partes del discurso hasta temas avanzados como el modo subjuntivo, el discurso indirecto, verbos modales, verbos frasales y convenciones de escritura académica.',
    whatYouCanLearn: 'Lo Que Puedes Aprender: Plan de Estudios Completo de Gramática',
    verbTensesTitle: 'Tiempos Verbales y Conjugaciones:',
    verbTensesDesc: 'Domina los 12 tiempos del inglés (simple, continuo, perfecto, perfecto continuo) en formas presente, pasado y futuro. Aprende cuándo usar cada tiempo, cómo formarlos correctamente y entiende las diferencias entre tiempos similares como el pasado simple vs. el presente perfecto.',
    sentenceStructureTitle: 'Estructura de Oración y Sintaxis:',
    sentenceStructureDesc: 'Comprende cómo construir oraciones claras y gramaticalmente correctas usando el orden apropiado de palabras, concordancia sujeto-verbo y patrones sintácticos. Aprende sobre oraciones simples, compuestas, complejas y compuestas-complejas.',
    partsOfSpeechTitle: 'Partes del Discurso y Clases de Palabras:',
    partsOfSpeechDesc: 'Aprende sobre las ocho partes del discurso (sustantivos, pronombres, verbos, adjetivos, adverbios, preposiciones, conjunciones, interjecciones) y cómo funcionan juntas para crear comunicación significativa.',
    punctuationTitle: 'Puntuación y Mecánica:',
    punctuationDesc: 'Perfecciona tu uso de comas, punto y coma, dos puntos, apóstrofes, comillas y otras marcas de puntuación. Comprende las reglas de capitalización, guionización y convenciones de formato.',
    writingSkillsTitle: 'Habilidades de Escritura y Composición:',
    writingSkillsDesc: 'Desarrolla tu habilidad para escribir ensayos, correos electrónicos, informes y contenido creativo. Aprende estructura de párrafos, declaraciones de tesis, oraciones temáticas, transiciones y técnicas para variar la estructura de oraciones para mejorar la legibilidad.',
    commonMistakesTitle: 'Errores y Trampas Gramaticales Comunes:',
    commonMistakesDesc: 'Identifica y evita errores frecuentes que cometen los estudiantes de inglés, incluyendo palabras comúnmente confundidas (affect/effect, their/there/they\'re), formas verbales incorrectas, modificadores mal colocados y desacuerdo sujeto-verbo.',
    interactivePracticeTitle: 'Práctica Interactiva y Cuestionarios:',
    interactivePracticeDesc: 'Pon a prueba tus conocimientos con cuestionarios y ejercicios atractivos diseñados para reforzar conceptos gramaticales. Rastrea tu progreso, identifica áreas débiles y desarrolla confianza a través de la práctica práctica.',
    learnWithVideo: 'Aprende Gramática Inglesa con Video',
    whyTypoGrammarFree: 'Por Qué TypoGrammar es Gratis',
    whyFreeText1: 'Creemos que la educación de calidad debe ser accesible para todos, independientemente de su situación financiera. El inglés es el idioma global de los negocios, la educación y la comunicación, y queremos eliminar las barreras que impiden que las personas mejoren sus habilidades lingüísticas.',
    whyFreeText2: 'TypoGrammar está respaldado por publicidad, lo que nos permite mantener todo nuestro contenido completamente gratuito para usuarios de todo el mundo. Estamos comprometidos a mantener este modelo porque hemos visto cómo la educación gramatical puede transformar vidas—abriendo puertas a mejores empleos, oportunidades educativas y comunicación intercultural.',
    whyFreeText3: 'Nuestra misión es simple: proporcionar la mejor educación gramatical posible a tantas personas como sea posible, sin cobrar ni un centavo. Ya seas un estudiante en un país en desarrollo o un profesional que busca mejorar sus habilidades, TypoGrammar está aquí para ayudarte a tener éxito.',
    downloadFreeWorksheets: 'Descargar Hojas de Trabajo Gratuitas',
  },
};
