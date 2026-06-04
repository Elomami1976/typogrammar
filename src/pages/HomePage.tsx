import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { getTodaysWord, type AcademicWord } from '../constants/wordOfTheDay';
import SchemaMarkup from '../components/SchemaMarkup';
import MailchimpForm from '../components/MailchimpForm';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n/translations';
import StatsStrip from '../components/StatsStrip';
import ExamBadgeStrip from '../components/ExamBadgeStrip';
import Reveal from '../components/Reveal';
import ContinueLearning from '../components/ContinueLearning';
import TrendingMarquee from '../components/TrendingMarquee';
import FaqAccordion from '../components/FaqAccordion';

/* -------------------------------------------------------------------------
   HomePage UI translations (English, French, Spanish, Arabic).
   Self-contained so the global translations.ts file stays untouched.
   ------------------------------------------------------------------------- */
interface HomeStrings {
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroH1Line1: string;
  heroH1Line2Prefix: string;
  heroH1Highlight: string;
  heroSubtitle: string;
  ctaOpenChecker: string;
  ctaBrowseLessons: string;
  miniLabel: string;
  miniPlaceholder: string;
  miniCheck: string;
  miniReset: string;
  miniLive: string;
  miniClean: string;
  miniCorrected: string;
  miniFix: string;
  miniFixes: string;
  miniMore: string;
  howItWorksKicker: string;
  howItWorksTitlePart1: string;
  howItWorksUnsure: string;
  howItWorksTitleMid: string;
  howItWorksFluent: string;
  step1Title: string;
  step1Desc: string;
  step1Link: string;
  step2Title: string;
  step2Desc: string;
  step2Link: string;
  step3Title: string;
  step3Desc: string;
  step3Link: string;
  trustNoTracking: string;
  trustUsedBy: string;
  trustFree: string;
  freshFromBlog: string;
  latestLessons: string;
  viewAll: string;
  viewAllArticles: string;
  minutesShort: string;
  today: string;
  dayAgo: string;
  daysAgo: string;
  weekAgo: string;
  weeksAgo: string;
  monthAgo: string;
  monthsAgo: string;
  yearAgo: string;
  yearsAgo: string;
  whatLearnersSay: string;
  testimonialsTitle: string;
  testimonial1Quote: string;
  testimonial1Role: string;
  testimonial2Quote: string;
  testimonial2Role: string;
  testimonial3Quote: string;
  testimonial3Role: string;
  finalCtaTitle1: string;
  finalCtaTitle2: string;
  finalCtaDesc: string;
  finalCtaOpenChecker: string;
  finalCtaBrowse: string;
  ruleSubjectVerbAgreement: string;
  rulePastParticipleGo: string;
  rulePastParticipleCome: string;
  rulePastParticipleRun: string;
  ruleVerbAgreementI: string;
  ruleVerb3rdPerson: string;
  ruleMuchVsMany: string;
  ruleDoubleComparative: string;
  ruleCouldOf: string;
  ruleNonStandardContraction: string;
  ruleYourYoure: string;
  ruleItsIts: string;
  ruleAlot: string;
  ruleExtraWhitespace: string;
  ruleSpaceBeforePunct: string;
  ruleCapitalizeI: string;
  ruleCapitalizeFirst: string;
}

const HOME_I18N: Record<Language, HomeStrings> = {
  en: {
    metaTitle: 'TypoGrammar: Free English Grammar, IELTS & TOEFL Prep, AI Writing Tools',
    metaDescription:
      'Master English with free grammar lessons, IELTS & TOEFL test preparation, AI writing tools (grammar checker, paraphraser), vocabulary building, idioms, phrasal verbs, and interactive quizzes. Perfect for ESL students and professionals.',
    heroBadge: 'Free · No sign-up · Built for exams',
    heroH1Line1: 'Write English',
    heroH1Line2Prefix: 'without the',
    heroH1Highlight: 'guesswork',
    heroSubtitle:
      'An AI grammar checker plus 100+ exam-grade lessons, designed for IELTS, TOEFL and serious ESL learners. Try it live, on the right.',
    ctaOpenChecker: 'Open full grammar checker',
    ctaBrowseLessons: 'Browse lessons',
    miniLabel: 'Paste your sentence',
    miniPlaceholder: "Try: she don't know the answer...",
    miniCheck: 'Check',
    miniReset: 'Reset',
    miniLive: 'live',
    miniClean: 'Looks clean, no obvious errors found.',
    miniCorrected: 'Corrected',
    miniFix: 'fix',
    miniFixes: 'fixes',
    miniMore: 'more',
    howItWorksKicker: 'How it works',
    howItWorksTitlePart1: 'Three steps from',
    howItWorksUnsure: 'unsure',
    howItWorksTitleMid: 'to',
    howItWorksFluent: 'fluent',
    step1Title: 'Paste & check',
    step1Desc: 'Drop any sentence into the AI grammar checker. Get instant corrections with reasons, not just red lines.',
    step1Link: 'Open checker',
    step2Title: 'Learn the rule',
    step2Desc: 'Each fix links to a focused lesson, verb tenses, articles, conditionals, with examples and a short quiz.',
    step2Link: 'Browse lessons',
    step3Title: 'Hit your band',
    step3Desc: 'Apply it on real IELTS & TOEFL tasks. Sample essays, vocabulary by band, and timed practice included.',
    step3Link: 'Start IELTS prep',
    trustNoTracking: 'No tracking, no sign-up',
    trustUsedBy: 'Used by 50k+ learners monthly',
    trustFree: '100% free, forever',
    freshFromBlog: 'Fresh from the blog',
    latestLessons: 'Latest lessons',
    viewAll: 'View all',
    viewAllArticles: 'View all articles',
    minutesShort: 'min',
    today: 'Today',
    dayAgo: 'day ago',
    daysAgo: 'days ago',
    weekAgo: 'week ago',
    weeksAgo: 'weeks ago',
    monthAgo: 'month ago',
    monthsAgo: 'months ago',
    yearAgo: 'year ago',
    yearsAgo: 'years ago',
    whatLearnersSay: 'What learners say',
    testimonialsTitle: 'Real results, real students.',
    testimonial1Quote:
      'I went from 6.0 to 7.5 in six weeks. The grammar checker caught mistakes I never noticed and the IELTS essay guides are incredibly detailed.',
    testimonial1Role: 'IELTS · Band 7.5',
    testimonial2Quote:
      'Finally a free resource that explains the why behind grammar rules. My students love the verb-tense visualizer, abstract concepts click instantly.',
    testimonial2Role: 'TOEFL · ESL Teacher',
    testimonial3Quote:
      'The phrasal verbs and idioms sections are gold. I use TypoGrammar every day before class and the quizzes keep me genuinely motivated.',
    testimonial3Role: 'University · Spain',
    finalCtaTitle1: 'Ready to write English',
    finalCtaTitle2: 'that actually lands?',
    finalCtaDesc:
      'Get one practical grammar lesson, an exam tip, and a vocabulary upgrade, every week. No spam.',
    finalCtaOpenChecker: 'Open grammar checker',
    finalCtaBrowse: 'Browse all lessons',
    ruleSubjectVerbAgreement: 'Subject-verb agreement',
    rulePastParticipleGo: 'Past participle of "go"',
    rulePastParticipleCome: 'Past participle of "come"',
    rulePastParticipleRun: 'Past participle of "run"',
    ruleVerbAgreementI: 'Verb agreement with "I"',
    ruleVerb3rdPerson: 'Verb agreement (3rd person singular)',
    ruleMuchVsMany: '"much" vs "many"',
    ruleDoubleComparative: 'Double comparative',
    ruleCouldOf: '"could of" → "could have"',
    ruleNonStandardContraction: 'Non-standard contraction',
    ruleYourYoure: '"your" vs "you\'re"',
    ruleItsIts: '"its" vs "it\'s"',
    ruleAlot: '"alot" is not a word',
    ruleExtraWhitespace: 'Extra whitespace',
    ruleSpaceBeforePunct: 'Space before punctuation',
    ruleCapitalizeI: 'Capitalize "I"',
    ruleCapitalizeFirst: 'Capitalize first letter',
  },
  fr: {
    metaTitle: 'TypoGrammar : Grammaire Anglaise Gratuite, Prép IELTS & TOEFL, Outils d\'IA',
    metaDescription:
      'Maîtrisez l\'anglais avec des leçons de grammaire gratuites, la préparation aux tests IELTS et TOEFL, des outils d\'écriture IA (correcteur grammatical, paraphraseur), le vocabulaire, les idiomes, les verbes à particule et des quiz interactifs.',
    heroBadge: 'Gratuit · Sans inscription · Conçu pour les examens',
    heroH1Line1: 'Écrivez en anglais',
    heroH1Line2Prefix: 'sans',
    heroH1Highlight: 'tâtonner',
    heroSubtitle:
      'Un correcteur grammatical IA et plus de 100 leçons de niveau examen, conçus pour les apprenants IELTS, TOEFL et ESL sérieux. Essayez-le en direct, à droite.',
    ctaOpenChecker: 'Ouvrir le correcteur complet',
    ctaBrowseLessons: 'Parcourir les leçons',
    miniLabel: 'Collez votre phrase',
    miniPlaceholder: 'Essayez : she don\'t know the answer...',
    miniCheck: 'Vérifier',
    miniReset: 'Réinitialiser',
    miniLive: 'en direct',
    miniClean: 'Tout est propre, aucune erreur évidente détectée.',
    miniCorrected: 'Corrigé',
    miniFix: 'correction',
    miniFixes: 'corrections',
    miniMore: 'autre(s)',
    howItWorksKicker: 'Comment ça marche',
    howItWorksTitlePart1: 'Trois étapes pour passer de',
    howItWorksUnsure: 'incertain',
    howItWorksTitleMid: 'à',
    howItWorksFluent: 'fluide',
    step1Title: 'Coller & vérifier',
    step1Desc: 'Déposez n\'importe quelle phrase dans le correcteur IA. Obtenez des corrections instantanées avec des explications, pas seulement des soulignements rouges.',
    step1Link: 'Ouvrir le correcteur',
    step2Title: 'Apprendre la règle',
    step2Desc: 'Chaque correction renvoie à une leçon ciblée, temps verbaux, articles, conditionnels, avec des exemples et un court quiz.',
    step2Link: 'Parcourir les leçons',
    step3Title: 'Atteindre votre score',
    step3Desc: 'Appliquez-le sur de vraies tâches IELTS & TOEFL. Essais types, vocabulaire par bande et pratique chronométrée inclus.',
    step3Link: 'Commencer la prép IELTS',
    trustNoTracking: 'Pas de suivi, pas d\'inscription',
    trustUsedBy: 'Utilisé par 50 000+ apprenants chaque mois',
    trustFree: '100 % gratuit, pour toujours',
    freshFromBlog: 'Tout frais du blog',
    latestLessons: 'Dernières leçons',
    viewAll: 'Tout voir',
    viewAllArticles: 'Voir tous les articles',
    minutesShort: 'min',
    today: 'Aujourd\'hui',
    dayAgo: 'jour',
    daysAgo: 'jours',
    weekAgo: 'semaine',
    weeksAgo: 'semaines',
    monthAgo: 'mois',
    monthsAgo: 'mois',
    yearAgo: 'an',
    yearsAgo: 'ans',
    whatLearnersSay: 'Ce que disent les apprenants',
    testimonialsTitle: 'De vrais résultats, de vrais étudiants.',
    testimonial1Quote:
      'Je suis passée de 6,0 à 7,5 en six semaines. Le correcteur a relevé des erreurs que je ne voyais pas et les guides d\'essais IELTS sont incroyablement détaillés.',
    testimonial1Role: 'IELTS · Bande 7.5',
    testimonial2Quote:
      'Enfin une ressource gratuite qui explique le pourquoi des règles de grammaire. Mes élèves adorent le visualiseur de temps verbaux, les concepts abstraits deviennent évidents.',
    testimonial2Role: 'TOEFL · Enseignante ESL',
    testimonial3Quote:
      'Les sections sur les phrasal verbs et les idiomes sont en or. J\'utilise TypoGrammar chaque jour avant les cours et les quiz me motivent vraiment.',
    testimonial3Role: 'Université · Espagne',
    finalCtaTitle1: 'Prêt à écrire un anglais',
    finalCtaTitle2: 'qui fait vraiment mouche ?',
    finalCtaDesc:
      'Recevez une leçon de grammaire pratique, un conseil d\'examen et une montée en vocabulaire, chaque semaine. Pas de spam.',
    finalCtaOpenChecker: 'Ouvrir le correcteur',
    finalCtaBrowse: 'Parcourir toutes les leçons',
    ruleSubjectVerbAgreement: 'Accord sujet-verbe',
    rulePastParticipleGo: 'Participe passé de « go »',
    rulePastParticipleCome: 'Participe passé de « come »',
    rulePastParticipleRun: 'Participe passé de « run »',
    ruleVerbAgreementI: 'Accord verbal avec « I »',
    ruleVerb3rdPerson: 'Accord verbal (3e personne du singulier)',
    ruleMuchVsMany: '« much » vs « many »',
    ruleDoubleComparative: 'Double comparatif',
    ruleCouldOf: '« could of » → « could have »',
    ruleNonStandardContraction: 'Contraction non standard',
    ruleYourYoure: '« your » vs « you\'re »',
    ruleItsIts: '« its » vs « it\'s »',
    ruleAlot: '« alot » n\'est pas un mot',
    ruleExtraWhitespace: 'Espaces superflus',
    ruleSpaceBeforePunct: 'Espace avant la ponctuation',
    ruleCapitalizeI: 'Capitaliser « I »',
    ruleCapitalizeFirst: 'Capitaliser la première lettre',
  },
  es: {
    metaTitle: 'TypoGrammar: Gramática Inglesa Gratis, Prep IELTS & TOEFL, Herramientas IA',
    metaDescription:
      'Domina el inglés con lecciones de gramática gratuitas, preparación para IELTS y TOEFL, herramientas de escritura con IA (corrector gramatical, parafraseador), vocabulario, idiomas, phrasal verbs y cuestionarios interactivos.',
    heroBadge: 'Gratis · Sin registro · Diseñado para exámenes',
    heroH1Line1: 'Escribe en inglés',
    heroH1Line2Prefix: 'sin',
    heroH1Highlight: 'adivinar',
    heroSubtitle:
      'Un corrector gramatical con IA y más de 100 lecciones de nivel examen, diseñado para estudiantes IELTS, TOEFL y ESL serios. Pruébalo en vivo, a la derecha.',
    ctaOpenChecker: 'Abrir corrector completo',
    ctaBrowseLessons: 'Explorar lecciones',
    miniLabel: 'Pega tu oración',
    miniPlaceholder: 'Prueba: she don\'t know the answer...',
    miniCheck: 'Comprobar',
    miniReset: 'Reiniciar',
    miniLive: 'en vivo',
    miniClean: 'Todo limpio, no se detectaron errores evidentes.',
    miniCorrected: 'Corregido',
    miniFix: 'corrección',
    miniFixes: 'correcciones',
    miniMore: 'más',
    howItWorksKicker: 'Cómo funciona',
    howItWorksTitlePart1: 'Tres pasos de',
    howItWorksUnsure: 'inseguro',
    howItWorksTitleMid: 'a',
    howItWorksFluent: 'fluido',
    step1Title: 'Pegar y comprobar',
    step1Desc: 'Coloca cualquier oración en el corrector con IA. Obtén correcciones instantáneas con razones, no solo subrayados rojos.',
    step1Link: 'Abrir corrector',
    step2Title: 'Aprende la regla',
    step2Desc: 'Cada corrección enlaza a una lección enfocada, tiempos verbales, artículos, condicionales, con ejemplos y un breve cuestionario.',
    step2Link: 'Explorar lecciones',
    step3Title: 'Logra tu puntaje',
    step3Desc: 'Aplícalo en tareas reales de IELTS y TOEFL. Ensayos modelo, vocabulario por banda y práctica cronometrada incluidos.',
    step3Link: 'Empezar prep IELTS',
    trustNoTracking: 'Sin rastreo, sin registro',
    trustUsedBy: 'Usado por más de 50.000 estudiantes al mes',
    trustFree: '100% gratis, para siempre',
    freshFromBlog: 'Recién salido del blog',
    latestLessons: 'Últimas lecciones',
    viewAll: 'Ver todo',
    viewAllArticles: 'Ver todos los artículos',
    minutesShort: 'min',
    today: 'Hoy',
    dayAgo: 'día',
    daysAgo: 'días',
    weekAgo: 'semana',
    weeksAgo: 'semanas',
    monthAgo: 'mes',
    monthsAgo: 'meses',
    yearAgo: 'año',
    yearsAgo: 'años',
    whatLearnersSay: 'Lo que dicen los estudiantes',
    testimonialsTitle: 'Resultados reales, estudiantes reales.',
    testimonial1Quote:
      'Pasé de 6.0 a 7.5 en seis semanas. El corrector detectó errores que nunca había notado y las guías de ensayos IELTS son increíblemente detalladas.',
    testimonial1Role: 'IELTS · Banda 7.5',
    testimonial2Quote:
      'Por fin un recurso gratuito que explica el porqué de las reglas gramaticales. A mis alumnos les encanta el visualizador de tiempos verbales, los conceptos abstractos cobran sentido al instante.',
    testimonial2Role: 'TOEFL · Profesora ESL',
    testimonial3Quote:
      'Las secciones de phrasal verbs e idioms son oro puro. Uso TypoGrammar todos los días antes de clase y los cuestionarios me mantienen motivada.',
    testimonial3Role: 'Universidad · España',
    finalCtaTitle1: '¿Listo para escribir inglés',
    finalCtaTitle2: 'que de verdad impacte?',
    finalCtaDesc:
      'Recibe una lección práctica de gramática, un consejo de examen y una mejora de vocabulario, cada semana. Sin spam.',
    finalCtaOpenChecker: 'Abrir corrector gramatical',
    finalCtaBrowse: 'Explorar todas las lecciones',
    ruleSubjectVerbAgreement: 'Concordancia sujeto-verbo',
    rulePastParticipleGo: 'Participio pasado de «go»',
    rulePastParticipleCome: 'Participio pasado de «come»',
    rulePastParticipleRun: 'Participio pasado de «run»',
    ruleVerbAgreementI: 'Concordancia verbal con «I»',
    ruleVerb3rdPerson: 'Concordancia verbal (3.ª persona del singular)',
    ruleMuchVsMany: '«much» vs «many»',
    ruleDoubleComparative: 'Comparativo doble',
    ruleCouldOf: '«could of» → «could have»',
    ruleNonStandardContraction: 'Contracción no estándar',
    ruleYourYoure: '«your» vs «you\'re»',
    ruleItsIts: '«its» vs «it\'s»',
    ruleAlot: '«alot» no es una palabra',
    ruleExtraWhitespace: 'Espacios sobrantes',
    ruleSpaceBeforePunct: 'Espacio antes de la puntuación',
    ruleCapitalizeI: 'Mayúscula en «I»',
    ruleCapitalizeFirst: 'Mayúscula en la primera letra',
  },
  ar: {
    metaTitle: 'تايبوغرامر: قواعد الإنجليزية مجاناً، تحضير IELTS و TOEFL، أدوات كتابة بالذكاء الاصطناعي',
    metaDescription:
      'أتقن الإنجليزية مع دروس قواعد مجانية، التحضير لاختبارات IELTS و TOEFL، أدوات كتابة بالذكاء الاصطناعي (مدقق قواعد، إعادة صياغة)، وبناء المفردات، والاصطلاحات، والأفعال العبارية، واختبارات تفاعلية.',
    heroBadge: 'مجاني · بدون تسجيل · مصمم للامتحانات',
    heroH1Line1: 'اكتب الإنجليزية',
    heroH1Line2Prefix: 'دون',
    heroH1Highlight: 'تخمين',
    heroSubtitle:
      'مدقق قواعد بالذكاء الاصطناعي مع أكثر من 100 درس بمستوى الامتحانات, مصمم لمتعلمي IELTS و TOEFL واللغة الإنجليزية كلغة ثانية. جربه مباشرة على اليسار.',
    ctaOpenChecker: 'افتح المدقق الكامل',
    ctaBrowseLessons: 'تصفح الدروس',
    miniLabel: 'الصق جملتك',
    miniPlaceholder: 'جرّب: she don\'t know the answer...',
    miniCheck: 'تحقق',
    miniReset: 'إعادة',
    miniLive: 'مباشر',
    miniClean: 'تبدو نظيفة, لم نعثر على أخطاء واضحة.',
    miniCorrected: 'مُصحَّحة',
    miniFix: 'تصحيح',
    miniFixes: 'تصحيحات',
    miniMore: 'إضافي',
    howItWorksKicker: 'كيف تعمل',
    howItWorksTitlePart1: 'ثلاث خطوات من',
    howItWorksUnsure: 'الحَيْرة',
    howItWorksTitleMid: 'إلى',
    howItWorksFluent: 'الطلاقة',
    step1Title: 'الصق وتحقق',
    step1Desc: 'ضع أي جملة في مدقق الذكاء الاصطناعي. احصل على تصحيحات فورية مع الأسباب, وليس مجرد خطوط حمراء.',
    step1Link: 'افتح المدقق',
    step2Title: 'تعلَّم القاعدة',
    step2Desc: 'كل تصحيح يرتبط بدرس مركّز, أزمنة الأفعال، أدوات التعريف، الجمل الشرطية, مع أمثلة واختبار قصير.',
    step2Link: 'تصفح الدروس',
    step3Title: 'حقّق درجتك',
    step3Desc: 'طبّقه على مهام IELTS و TOEFL الحقيقية. مقالات نموذجية، مفردات حسب الدرجة، وممارسة بوقت محدد.',
    step3Link: 'ابدأ تحضير IELTS',
    trustNoTracking: 'بدون تتبع، بدون تسجيل',
    trustUsedBy: 'يستخدمه أكثر من 50 ألف متعلم شهرياً',
    trustFree: 'مجاني 100%، للأبد',
    freshFromBlog: 'جديد من المدونة',
    latestLessons: 'أحدث الدروس',
    viewAll: 'عرض الكل',
    viewAllArticles: 'عرض كل المقالات',
    minutesShort: 'د',
    today: 'اليوم',
    dayAgo: 'يوم مضى',
    daysAgo: 'أيام مضت',
    weekAgo: 'أسبوع مضى',
    weeksAgo: 'أسابيع مضت',
    monthAgo: 'شهر مضى',
    monthsAgo: 'أشهر مضت',
    yearAgo: 'عام مضى',
    yearsAgo: 'أعوام مضت',
    whatLearnersSay: 'ماذا يقول المتعلمون',
    testimonialsTitle: 'نتائج حقيقية، طلاب حقيقيون.',
    testimonial1Quote:
      'انتقلتُ من 6.0 إلى 7.5 خلال ستة أسابيع. التقط المدقق أخطاءً لم ألاحظها قط، وأدلة مقالات IELTS مفصلة بشكل مذهل.',
    testimonial1Role: 'IELTS · درجة 7.5',
    testimonial2Quote:
      'أخيراً مصدر مجاني يشرح سبب القواعد، وليس فقط القواعد. طلابي يعشقون أداة تصور الأزمنة, تصبح المفاهيم المجردة واضحة فوراً.',
    testimonial2Role: 'TOEFL · معلمة ESL',
    testimonial3Quote:
      'قسما الأفعال العبارية والاصطلاحات كنزٌ ثمين. أستخدم تايبوغرامر كل يوم قبل الحصة، والاختبارات تحفّزني فعلاً.',
    testimonial3Role: 'جامعة · إسبانيا',
    finalCtaTitle1: 'جاهز لكتابة إنجليزية',
    finalCtaTitle2: 'تترك أثراً حقيقياً؟',
    finalCtaDesc:
      'احصل على درس قواعد عملي، ونصيحة امتحان، وترقية للمفردات, كل أسبوع. بدون رسائل مزعجة.',
    finalCtaOpenChecker: 'افتح مدقق القواعد',
    finalCtaBrowse: 'تصفح كل الدروس',
    ruleSubjectVerbAgreement: 'التطابق بين الفاعل والفعل',
    rulePastParticipleGo: 'التصريف الثالث للفعل "go"',
    rulePastParticipleCome: 'التصريف الثالث للفعل "come"',
    rulePastParticipleRun: 'التصريف الثالث للفعل "run"',
    ruleVerbAgreementI: 'تطابق الفعل مع "I"',
    ruleVerb3rdPerson: 'تطابق الفعل (المفرد الغائب)',
    ruleMuchVsMany: '"much" مقابل "many"',
    ruleDoubleComparative: 'تفضيل مزدوج',
    ruleCouldOf: '"could of" ← "could have"',
    ruleNonStandardContraction: 'اختصار غير قياسي',
    ruleYourYoure: '"your" مقابل "you\'re"',
    ruleItsIts: '"its" مقابل "it\'s"',
    ruleAlot: '"alot" ليست كلمة',
    ruleExtraWhitespace: 'مسافات زائدة',
    ruleSpaceBeforePunct: 'مسافة قبل علامة الترقيم',
    ruleCapitalizeI: 'كتابة "I" بحرف كبير',
    ruleCapitalizeFirst: 'كتابة الحرف الأول بحرف كبير',
  },
};

/* -------------------------------------------------------------------------
   Lucide-style line icons (consistent stroke 1.75, 24×24, currentColor)
   ------------------------------------------------------------------------- */
type IconProps = { className?: string };
const SVG = (path: React.ReactNode, className = 'w-5 h-5'): React.ReactElement => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {path}
  </svg>
);

const IconCheck = ({ className }: IconProps) => SVG(<path d="M20 6 9 17l-5-5" />, className);
const IconArrowRight = ({ className }: IconProps) => SVG(<path d="M5 12h14M13 5l7 7-7 7" />, className);
const IconSparkle = ({ className }: IconProps) =>
  SVG(
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </>,
    className,
  );
const IconBookOpen = ({ className }: IconProps) =>
  SVG(<path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />, className);
const IconTarget = ({ className }: IconProps) =>
  SVG(
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>,
    className,
  );
const IconChat = ({ className }: IconProps) =>
  SVG(<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z" />, className);
const IconWand = ({ className }: IconProps) =>
  SVG(
    <>
      <path d="m3 21 9-9" />
      <path d="M15 3v3M19 5l-2 2M21 9h-3M19 13l-2-2M15 15v-3" />
    </>,
    className,
  );
const IconBolt = ({ className }: IconProps) => SVG(<path d="M13 2 4 14h7l-1 8 9-12h-7z" />, className);
const IconShield = ({ className }: IconProps) => SVG(<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />, className);
const IconRefresh = ({ className }: IconProps) =>
  SVG(
    <>
      <path d="M3 12a9 9 0 0 1 15.5-6.4L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.5 6.4L3 16" />
      <path d="M3 21v-5h5" />
    </>,
    className,
  );
const IconStar = ({ className }: IconProps) =>
  SVG(<path d="M12 3.5 14.5 9l6 .5-4.5 4 1.4 6L12 16.8 6.6 19.5 8 13.5 3.5 9.5 9.5 9z" fill="currentColor" />, className);

/* -------------------------------------------------------------------------
   Live mini grammar checker, pure-client, regex-driven
   ------------------------------------------------------------------------- */
type RuleKey = keyof Pick<
  HomeStrings,
  | 'ruleSubjectVerbAgreement'
  | 'rulePastParticipleGo'
  | 'rulePastParticipleCome'
  | 'rulePastParticipleRun'
  | 'ruleVerbAgreementI'
  | 'ruleVerb3rdPerson'
  | 'ruleMuchVsMany'
  | 'ruleDoubleComparative'
  | 'ruleCouldOf'
  | 'ruleNonStandardContraction'
  | 'ruleYourYoure'
  | 'ruleItsIts'
  | 'ruleAlot'
  | 'ruleExtraWhitespace'
  | 'ruleSpaceBeforePunct'
  | 'ruleCapitalizeI'
  | 'ruleCapitalizeFirst'
>;
type Rule = { test: RegExp; fix: (m: string, ...g: string[]) => string; labelKey: RuleKey };

const RULES: Rule[] = [
  { test: /\b(he|she|it)\s+don't\b/gi, fix: (_m, s) => `${s} doesn't`, labelKey: 'ruleSubjectVerbAgreement' },
  { test: /\b(have|has|had)\s+went\b/gi, fix: (_m, h) => `${h} gone`, labelKey: 'rulePastParticipleGo' },
  { test: /\b(have|has|had)\s+came\b/gi, fix: (_m, h) => `${h} come`, labelKey: 'rulePastParticipleCome' },
  { test: /\b(have|has|had)\s+ran\b/gi, fix: (_m, h) => `${h} run`, labelKey: 'rulePastParticipleRun' },
  { test: /\bI\s+are\b/g, fix: () => 'I am', labelKey: 'ruleVerbAgreementI' },
  { test: /\b(he|she|it)\s+are\b/gi, fix: (_m, s) => `${s} is`, labelKey: 'ruleVerb3rdPerson' },
  { test: /\bmuch\s+(people|students|cars|books|things|friends|ideas|years|days)\b/gi, fix: (_m, n) => `many ${n}`, labelKey: 'ruleMuchVsMany' },
  { test: /\bmore\s+better\b/gi, fix: () => 'better', labelKey: 'ruleDoubleComparative' },
  { test: /\bmore\s+easier\b/gi, fix: () => 'easier', labelKey: 'ruleDoubleComparative' },
  { test: /\bmore\s+faster\b/gi, fix: () => 'faster', labelKey: 'ruleDoubleComparative' },
  { test: /\b(could|would|should|might|must)\s+of\b/gi, fix: (_m, m) => `${m} have`, labelKey: 'ruleCouldOf' },
  { test: /\bain't\b/gi, fix: () => "isn't", labelKey: 'ruleNonStandardContraction' },
  { test: /\byour\s+welcome\b/gi, fix: () => "you're welcome", labelKey: 'ruleYourYoure' },
  { test: /\bits\s+(been|going|getting|gonna)\b/gi, fix: (_m, v) => `it's ${v}`, labelKey: 'ruleItsIts' },
  { test: /\balot\b/gi, fix: () => 'a lot', labelKey: 'ruleAlot' },
  { test: /\s{2,}/g, fix: () => ' ', labelKey: 'ruleExtraWhitespace' },
  { test: /\s+([,.;:!?])/g, fix: (_m, p) => p, labelKey: 'ruleSpaceBeforePunct' },
  { test: /\bi\b/g, fix: () => 'I', labelKey: 'ruleCapitalizeI' },
];

interface Correction {
  before: string;
  after: string;
  labelKey: RuleKey;
}

function runChecker(input: string): { corrected: string; corrections: Correction[] } {
  let working = input;
  const corrections: Correction[] = [];

  for (const rule of RULES) {
    working = working.replace(rule.test, (match: string, ...args: unknown[]) => {
      const groups = args.slice(0, -2) as string[];
      const replacement = rule.fix(match, ...groups);
      if (replacement !== match) {
        corrections.push({ before: match, after: replacement, labelKey: rule.labelKey });
      }
      return replacement;
    });
  }

  // Capitalize first letter of the whole text if it's a lowercase letter
  if (working.length > 0 && /^[a-z]/.test(working)) {
    corrections.push({ before: working[0], after: working[0].toUpperCase(), labelKey: 'ruleCapitalizeFirst' });
    working = working[0].toUpperCase() + working.slice(1);
  }

  return { corrected: working, corrections };
}

const SAMPLE_TEXT = "she don't know the answer. i have went there yesterday and saw alot of people.";

/* -------------------------------------------------------------------------
   Page-data helpers (unchanged from previous version, kept for blog list)
   ------------------------------------------------------------------------- */
const CATEGORY_STYLES: Record<string, { bar: string; badge: string; label: string }> = {
  Grammar: { bar: 'bg-teal-400', badge: 'text-teal-800 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-200', label: 'GRAMMAR' },
  'Test Preparation': { bar: 'bg-sky-500', badge: 'text-sky-800 bg-sky-50 dark:bg-sky-900/30 dark:text-sky-200', label: 'TEST PREP' },
  Vocabulary: { bar: 'bg-violet-500', badge: 'text-violet-800 bg-violet-50 dark:bg-violet-900/30 dark:text-violet-200', label: 'VOCABULARY' },
  Writing: { bar: 'bg-teal-500', badge: 'text-teal-800 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-200', label: 'WRITING' },
  IELTS: { bar: 'bg-blue-500', badge: 'text-blue-800 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-200', label: 'IELTS' },
  TOEFL: { bar: 'bg-emerald-500', badge: 'text-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-200', label: 'TOEFL' },
};
const getCatStyle = (c: string) =>
  CATEGORY_STYLES[c] ?? { bar: 'bg-slate-400', badge: 'text-slate-700 bg-slate-100 dark:bg-slate-700 dark:text-slate-300', label: c.toUpperCase() };

const estimateReadTime = (s: string) => Math.max(4, Math.ceil(s.split(' ').length / 15));
const getDateLabel = (dateStr: string, t: HomeStrings): string => {
  const d = new Date(dateStr);
  const diff = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (diff < 1) return t.today;
  if (diff < 7) return `${diff} ${diff === 1 ? t.dayAgo : t.daysAgo}`;
  if (diff < 30) {
    const w = Math.floor(diff / 7);
    return `${w} ${w === 1 ? t.weekAgo : t.weeksAgo}`;
  }
  if (diff < 365) {
    const m = Math.floor(diff / 30);
    return `${m} ${m === 1 ? t.monthAgo : t.monthsAgo}`;
  }
  const y = Math.floor(diff / 365);
  return `${y} ${y === 1 ? t.yearAgo : t.yearsAgo}`;
};

interface HomePost { slug: string; title: string; summary: string; date: string; category: string; path?: string; }

/* -------------------------------------------------------------------------
   Flippable Word of the Day card
   Click / tap / Enter to flip between definition (front) and study card
   (back: example, synonyms, IELTS use). Pure CSS 3D transform.
   ------------------------------------------------------------------------- */
const SYNONYMS_FALLBACK: Record<string, string[]> = {
  // light fallback set; words not in the map use generic synonyms.
};

const FlippableWordOfDay: React.FC<{ word: AcademicWord }> = ({ word }) => {
  const [flipped, setFlipped] = useState(false);
  const handleToggle = () => setFlipped((v) => !v);
  const synonyms = SYNONYMS_FALLBACK[word.word] || ['important', 'relevant', 'meaningful'];

  return (
    <div
      className="group relative cursor-pointer select-none"
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Word of the Day: ${word.word}. Click to ${flipped ? 'see definition' : 'see example and synonyms'}.`}
      style={{ perspective: '1600px' }}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: '14rem',
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 dark:from-blue-800 dark:to-teal-700 shadow-lg shadow-blue-900/20 px-6 sm:px-10 py-8 sm:py-10 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-violet-400/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/15 ring-1 ring-white/20 text-white">
              <span className="text-3xl leading-none mb-1">📖</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/80">Word</span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Word of the Day</p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
                  {word.word}
                </span>
                <span className="text-sm text-white/60 font-mono">{word.pronunciation}</span>
                <span className="inline-block bg-white/20 text-white text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {word.partOfSpeech}
                </span>
              </div>
              <p className="text-white/90 text-[15px] leading-relaxed">{word.definition}</p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-end gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 ring-1 ring-white/20 text-white text-[11px] font-semibold whitespace-nowrap">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                </svg>
                Tap to flip
              </span>
              <span className="text-[11px] text-white/50">Front · 1 of 2</span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 shadow-lg shadow-blue-900/30 px-6 sm:px-10 py-8 sm:py-10 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="pointer-events-none absolute -top-12 -left-12 w-52 h-52 rounded-full bg-teal-500/15 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 -right-10 w-48 h-48 rounded-full bg-violet-400/10 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10 h-full">
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-teal-500/20 ring-1 ring-teal-400/30 text-teal-200">
              <span className="text-3xl leading-none mb-1">✨</span>
              <span className="text-[9px] font-bold uppercase tracking-widest">Use it</span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-3">In context</p>
              <p className="text-white text-base sm:text-lg leading-relaxed italic mb-5">
                &ldquo;{word.example}&rdquo;
              </p>

              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-300 mb-2">Try with these synonyms</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {synonyms.map((s) => (
                  <span key={s} className="text-[12px] font-semibold bg-white/10 ring-1 ring-white/15 text-white/90 px-2.5 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-end gap-2 mt-1">
              <Link
                to="/vocabulary/collocations/"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 text-blue-900 font-bold text-sm hover:bg-amber-400 transition-colors shadow-sm whitespace-nowrap"
              >
                Explore vocab
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[11px] text-white/50">Back · 2 of 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------
   Page
   ------------------------------------------------------------------------- */
const HomePage: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = HOME_I18N[language];

  const [text, setText] = useState<string>(SAMPLE_TEXT);
  const [submitted, setSubmitted] = useState<boolean>(true); // show result for sample
  const [homePosts, setHomePosts] = useState<HomePost[]>([]);
  const wordOfTheDay: AcademicWord = useMemo(() => getTodaysWord(), []);

  useEffect(() => {
    const newPages: HomePost[] = [
      {
        slug: 'best-toefl-preparation-courses-2026',
        path: '/blog/best-toefl-preparation-courses-2026/',
        title: 'Best TOEFL Preparation Courses in 2026: Top Online Courses for Every Budget and Score Goal',
        summary: 'Discover the best TOEFL preparation courses in 2026. Compare Magoosh, ETS Official, Udemy, TST Prep, and Coursera to find the right course for your score goals and budget.',
        date: 'May 20, 2026',
        category: 'Test Preparation',
      },
      {
        slug: 'best-toefl-preparation-apps-2026',
        path: '/blog/best-toefl-preparation-apps-2026/',
        title: 'Best TOEFL Preparation Apps in 2026: Top Apps for Reading, Speaking, Writing, and Vocabulary',
        summary: 'Discover the best TOEFL preparation apps in 2026 for speaking, writing, vocabulary, grammar, and full mock tests. Compare Grammarly, Magoosh, Quizlet, ELSA Speak, and TOEFL Go to find the right app for your score goals.',
        date: 'May 20, 2026',
        category: 'Test Preparation',
      },
      {
        slug: 'ielts-score-requirements-by-country',
        path: '/ielts/ielts-score-requirements-by-country/',
        title: 'Minimum IELTS Score Requirements by Country: 2026 Complete Guide',
        summary: 'Find the minimum IELTS band score required for Canada, Australia, UK, USA, Germany, and more - for study, work permits, and immigration in 2026.',
        date: 'May 5, 2026',
        category: 'Test Preparation',
      },
      {
        slug: 'countries-without-ielts',
        path: '/ielts/countries-without-ielts/',
        title: 'Countries You Can Study and Work in Without IELTS (2026)',
        summary: 'Discover which countries do not require IELTS for study, work, or immigration in 2026, and learn about MOI letters, TOEFL iBT, and other accepted alternatives.',
        date: 'May 5, 2026',
        category: 'Test Preparation',
      },
      {
        slug: 'toefl-ibt-vs-toefl-ltp',
        path: '/toefl/strategy-success/toefl-ibt-vs-toefl-ltp/',
        title: 'TOEFL iBT vs TOEFL LTP: Differences, Scores, Format, Which Test to Take',
        summary: 'A complete comparison of TOEFL iBT and TOEFL LTP covering format, scoring, acceptance, difficulty, and which test you should take in 2026.',
        date: 'May 5, 2026',
        category: 'Test Preparation',
      },
    ];
    import('../constants/blogPostsMeta').then(({ BLOG_POSTS_META }) => {
      const newPageSlugs = new Set(newPages.map((p) => p.slug));
      setHomePosts([...newPages, ...(BLOG_POSTS_META as HomePost[]).filter((p) => !newPageSlugs.has(p.slug))].slice(0, 6));
    });
  }, []);

  const result = useMemo(() => runChecker(text), [text]);
  const showResult = submitted && text.trim().length > 0;

  usePageMetadata({
    title: t.metaTitle,
    description: t.metaDescription,
    canonical: 'https://typogrammar.com/',
  });

  return (
    <div dir={dir} className="space-y-20 sm:space-y-28">
      <SchemaMarkup
        type="EducationalOrganization"
        data={{
          name: 'TypoGrammar',
          description: 'Free online English grammar learning platform',
          url: 'https://typogrammar.com',
          areaServed: 'Worldwide',
          teaches: 'English Grammar',
        }}
      />

      {/* =================== 1. HERO with live mini-checker =================== */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
        <div className="hero-grain absolute inset-0 pointer-events-none opacity-60" aria-hidden="true" />
        {/* Animated aurora mesh */}
        <div className="aurora-layer pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="aurora-blob aurora-blob-1" />
          <span className="aurora-blob aurora-blob-2" />
          <span className="aurora-blob aurora-blob-3" />
          <span className="aurora-blob aurora-blob-4" />
        </div>
        <style>{`
          .aurora-blob {
            position: absolute;
            display: block;
            border-radius: 9999px;
            filter: blur(72px);
            opacity: 0.55;
            mix-blend-mode: multiply;
            will-change: transform;
          }
          .dark .aurora-blob { mix-blend-mode: screen; opacity: 0.35; }
          .aurora-blob-1 {
            width: 32rem; height: 32rem; top: -8rem; right: -8rem;
            background: radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%);
            animation: aurora-float-a 18s ease-in-out infinite;
          }
          .aurora-blob-2 {
            width: 28rem; height: 28rem; bottom: -10rem; left: -5rem;
            background: radial-gradient(circle at 60% 40%, #5eead4, transparent 60%);
            animation: aurora-float-b 22s ease-in-out infinite;
          }
          .aurora-blob-3 {
            width: 22rem; height: 22rem; top: 35%; left: 45%;
            background: radial-gradient(circle at 50% 50%, #c4b5fd, transparent 60%);
            animation: aurora-float-c 26s ease-in-out infinite;
          }
          .aurora-blob-4 {
            width: 18rem; height: 18rem; top: -3rem; left: 30%;
            background: radial-gradient(circle at 50% 50%, #fda4af, transparent 60%);
            animation: aurora-float-d 30s ease-in-out infinite;
          }
          @keyframes aurora-float-a {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            50%     { transform: translate3d(-40px,30px,0) scale(1.08); }
          }
          @keyframes aurora-float-b {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            50%     { transform: translate3d(50px,-25px,0) scale(1.12); }
          }
          @keyframes aurora-float-c {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            33%     { transform: translate3d(-30px,-40px,0) scale(0.92); }
            66%     { transform: translate3d(40px,20px,0) scale(1.08); }
          }
          @keyframes aurora-float-d {
            0%,100% { transform: translate3d(0,0,0) scale(1); }
            50%     { transform: translate3d(20px,40px,0) scale(1.1); }
          }
          @media (prefers-reduced-motion: reduce) {
            .aurora-blob { animation: none !important; }
          }
        `}</style>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 sm:px-10 lg:px-14 py-14 sm:py-20 lg:py-24">
          {/* Left: copy */}
          <div className="fade-rise">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-700 dark:text-teal-300 bg-teal-100/70 dark:bg-teal-500/10 ring-1 ring-teal-200 dark:ring-teal-500/20 px-3 py-1.5 rounded-full mb-7">
              <IconSparkle className="w-3.5 h-3.5" />
              {t.heroBadge}
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-blue-900 dark:text-white mb-6">
              {t.heroH1Line1}
              <br />
              <span className="relative inline-block">
                {t.heroH1Line2Prefix}
                <span className="mx-3 italic font-serif text-teal-600 dark:text-teal-400">{t.heroH1Highlight}</span>
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-teal-500/70 rounded-full" aria-hidden="true" />
              </span>
              .
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-9">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/grammar-checker/"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-blue-900 bg-amber-500 hover:bg-amber-600 hover:text-white rounded-full transition-colors shadow-sm shadow-amber-900/20"
              >
                {t.ctaOpenChecker}
                <IconArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
              </Link>
              <Link
                to="/typogrammar-write/"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/20 ring-2 ring-teal-400 dark:ring-teal-500/60 hover:bg-teal-600 hover:text-white hover:ring-teal-600 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30 active:scale-95 rounded-full transition-all duration-200 group"
              >
                {/* Pulsing "live" dot */}
                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-500 ring-2 ring-white dark:ring-slate-950"></span>
                </span>
                <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-200 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                  <circle cx="24" cy="24" r="20" fill="#fff"/>
                  <path fill="#EA4335" d="M24 4a20 20 0 0 1 17.32 10H24a10 10 0 0 0-8.66 5L7.06 13.4A20 20 0 0 1 24 4z"/>
                  <path fill="#34A853" d="M24 44a20 20 0 0 1-17.32-10l8.28-5A10 10 0 0 0 24 34l4.66 8.7A20 20 0 0 1 24 44z"/>
                  <path fill="#FBBC05" d="M28.66 42.7 33.32 34A10 10 0 0 0 32.66 19h9.66A20 20 0 0 1 28.66 42.7z"/>
                  <circle cx="24" cy="24" r="8" fill="#4285F4"/>
                </svg>
                Get the Chrome Extension
              </Link>
              <Link
                to="/getting-started/"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-blue-700 dark:text-slate-100 ring-1 ring-blue-200 dark:ring-blue-700/40 hover:bg-blue-600 hover:text-white hover:ring-blue-600 rounded-full transition-colors"
              >
                {t.ctaBrowseLessons}
              </Link>
            </div>

            {/* Trust ribbon: avatar stack + quick proof */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  { i: 'AR', bg: 'bg-rose-500' },
                  { i: 'CH', bg: 'bg-amber-500' },
                  { i: 'SO', bg: 'bg-emerald-500' },
                  { i: 'JN', bg: 'bg-blue-500' },
                  { i: 'KM', bg: 'bg-violet-500' },
                ].map((a) => (
                  <span
                    key={a.i}
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white dark:ring-slate-950 text-white text-[10px] font-bold ${a.bg}`}
                  >
                    {a.i}
                  </span>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="w-3.5 h-3.5" />
                  ))}
                  <span className="ml-1 font-bold text-slate-900 dark:text-white">4.9</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[13px]">
                  <span className="font-bold text-slate-800 dark:text-slate-200">1,500+</span> learners studying this month
                </p>
              </div>
              <div className="hidden sm:block h-10 w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5"><IconCheck className="w-3.5 h-3.5 text-emerald-500" /> 280+ lessons</span>
                <span className="inline-flex items-center gap-1.5"><IconCheck className="w-3.5 h-3.5 text-emerald-500" /> 6 free PDFs</span>
                <span className="inline-flex items-center gap-1.5"><IconCheck className="w-3.5 h-3.5 text-emerald-500" /> No sign-up</span>
              </div>
            </div>
          </div>

          {/* Right: live mini-checker card */}
          <div className="fade-rise" style={{ animationDelay: '120ms' }}>
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-900/5 dark:shadow-black/40 ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span className="ml-2 hidden sm:inline">grammar.live</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  {t.miniLive}
                </span>
              </div>

              {/* Input */}
              <div className="p-5">
                <label htmlFor="mini-checker" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  {t.miniLabel}
                </label>
                <textarea
                  id="mini-checker"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                    setSubmitted(false);
                  }}
                  rows={3}
                  className="w-full resize-none rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t.miniPlaceholder}
                  spellCheck={false}
                  dir="ltr"
                />
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors disabled:opacity-50 shadow-sm shadow-blue-900/20"
                    disabled={!text.trim()}
                  >
                    <IconBolt className="w-4 h-4" />
                    {t.miniCheck}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setText(SAMPLE_TEXT);
                      setSubmitted(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  >
                    <IconRefresh className="w-3.5 h-3.5" /> {t.miniReset}
                  </button>
                </div>

                {/* Result */}
                {showResult && (
                  <div className="mt-5">
                    {result.corrections.length === 0 ? (
                      <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-200 dark:ring-emerald-500/20 rounded-lg p-3">
                        <IconCheck className="w-4 h-4 flex-shrink-0" />
                        {t.miniClean}
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{t.miniCorrected}</p>
                          <span className="text-[11px] font-semibold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-500/10 px-2 py-0.5 rounded-full">
                            {result.corrections.length} {result.corrections.length === 1 ? t.miniFix : t.miniFixes}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-900 dark:text-slate-100 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-200 dark:ring-emerald-500/20 rounded-lg p-3" dir="ltr">
                          {result.corrected}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {result.corrections.slice(0, 3).map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <IconCheck className="w-3.5 h-3.5 mt-0.5 text-emerald-500 flex-shrink-0" />
                              <span>
                                <span className="line-through text-rose-500/80">{c.before}</span>
                                <span className="mx-1.5 text-slate-400">→</span>
                                <span className="font-semibold text-emerald-700 dark:text-emerald-300">{c.after}</span>
                                <span className="ml-2 text-slate-400">· {t[c.labelKey]}</span>
                              </span>
                            </li>
                          ))}
                          {result.corrections.length > 3 && (
                            <li className="text-xs text-slate-400 dark:text-slate-500 pl-5">
                              + {result.corrections.length - 3} {t.miniMore}
                            </li>
                          )}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== 1.5 STATS STRIP =================== */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2">
        <ContinueLearning greeting="Welcome back" ctaLabel="Continue lesson" />
      </Reveal>

      <Reveal as="section" className="max-w-6xl mx-auto px-2" delay={80}>
        <StatsStrip
          kicker="By the numbers"
          stats={[
            { value: 1500, suffix: '+', label: 'Learners this month', sub: 'across 80+ countries', color: 'text-blue-700 dark:text-blue-300' },
            { value: 280, suffix: '+', label: 'Free lessons', sub: 'grammar, IELTS, TOEFL', color: 'text-teal-700 dark:text-teal-300' },
            { value: 50, label: 'Quiz questions', sub: 'verb tenses, all 12', color: 'text-violet-700 dark:text-violet-300' },
            { value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating', sub: 'from learner reviews', color: 'text-amber-600 dark:text-amber-400' },
          ]}
        />
      </Reveal>

      {/* =================== 1.6 EXAM BADGE STRIP ================= */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2" delay={120}>
        <ExamBadgeStrip />
      </Reveal>

      {/* =================== 1.7 TRENDING MARQUEE ================= */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2" delay={160}>
        <TrendingMarquee
          kicker="Trending searches"
          items={[
            { label: 'Verb tenses quiz', to: '/quizzes/verb-tenses-quiz/', icon: '🎯' },
            { label: 'Daily English Reads (audio stories)', to: '/daily-english-reads/', icon: '🎧' },
            { label: 'Present perfect vs past simple', to: '/topics/present-perfect-vs-past-simple/', icon: '⏳' },
            { label: 'IELTS Writing Task 2 essay types', to: '/ielts/ielts-writing-task-2-essay-types/', icon: '✍️' },
            { label: 'Grammar checker', to: '/grammar-checker/', icon: '✅' },
            { label: 'Phrasal verbs', to: '/topics/phrasal-verbs/', icon: '🔗' },
            { label: 'Conditionals', to: '/topics/conditionals/', icon: '🔀' },
            { label: 'Make vs do', to: '/topics/make-vs-do/', icon: '⚖️' },
            { label: 'TOEFL 2026 scoring', to: '/toefl/toefl-2026-scoring/', icon: '📊' },
            { label: 'Free grammar PDF', to: '/ielts/english-grammar-pdf/', icon: '📕' },
            { label: 'Passive voice', to: '/topics/passive-voice/', icon: '🔄' },
            { label: 'Reported speech', to: '/topics/reported-speech/', icon: '💬' },
            { label: 'Articles a/an/the', to: '/topics/articles/', icon: '🔤' },
          ]}
        />
      </Reveal>

      {/* =================== 1.8 DAILY ENGLISH READS CTA ============= */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2" delay={200}>
        <Link
          to="/daily-english-reads/"
          className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-blue-700 to-teal-600 text-white p-7 sm:p-10"
        >
          <div className="pointer-events-none absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/15 ring-1 ring-white/20 px-2.5 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                New: Audio stories
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] mb-3">
                Daily English Reads
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed">
                Short audio stories and easy reading practice across <strong>6 topics</strong>,
                with a quick 6-question quiz after every story. Beginner friendly, free, mobile-first.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Listening practice', 'New vocabulary', 'Speed control 0.75 / 1 / 1.25x'].map((c) => (
                  <span key={c} className="text-[11px] font-semibold bg-white/15 ring-1 ring-white/20 px-2.5 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-500 group-hover:bg-amber-400 text-blue-900 font-bold text-sm transition-colors shadow-sm whitespace-nowrap">
                Start listening
                <IconArrowRight className="w-4 h-4 rtl:rotate-180" />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>

      {/* =================== 2. BENTO: HOW IT WORKS + FEATURED PRODUCTS =================== */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-3">{t.howItWorksKicker}</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.howItWorksTitlePart1} <span className="italic font-serif text-teal-600 dark:text-teal-400">{t.howItWorksUnsure}</span> {t.howItWorksTitleMid} <span className="italic font-serif text-teal-600 dark:text-teal-400">{t.howItWorksFluent}</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-5">
          {/* HERO BENTO TILE: Verb Tenses Quiz - spans 2x2 */}
          <Link
            to="/quizzes/verb-tenses-quiz/"
            className="group relative md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 text-white p-7 sm:p-9 flex flex-col justify-between min-h-[320px] shadow-lg shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-900/30 transition-shadow"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-violet-400/20 blur-3xl" aria-hidden="true" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/15 ring-1 ring-white/20 px-2.5 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" /> Most popular
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold leading-[1.1] mb-3">
                Free Verb Tenses Quiz
              </h3>
              <p className="text-white/80 text-base sm:text-lg max-w-md leading-relaxed mb-6">
                50 multiple-choice questions across all 12 English tenses. Instant scoring, detailed explanations, weak-area breakdown.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['All 12 tenses', 'Easy → Hard', 'Free forever'].map((c) => (
                  <span key={c} className="text-[11px] font-semibold bg-white/15 ring-1 ring-white/20 px-2.5 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-between gap-4">
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-5xl sm:text-6xl font-extrabold tabular-nums">50</span>
                <span className="text-white/70 text-sm font-semibold">questions</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-amber-500 text-blue-900 font-bold text-sm group-hover:bg-amber-400 transition-colors shadow-sm whitespace-nowrap">
                Start quiz
                <IconArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Step 1 */}
          <div className="group relative bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 p-6 flex flex-col justify-between hover:ring-teal-300 dark:hover:ring-teal-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/60 dark:ring-teal-500/20">
                  <IconWand className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-400">01</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1.5">{t.step1Title}</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{t.step1Desc}</p>
            </div>
            <Link to="/grammar-checker/" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400">
              {t.step1Link} <IconArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 p-6 flex flex-col justify-between hover:ring-teal-300 dark:hover:ring-teal-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/60 dark:ring-teal-500/20">
                  <IconBookOpen className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-400">02</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1.5">{t.step2Title}</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{t.step2Desc}</p>
            </div>
            <Link to="/grammar-guide/" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400">
              {t.step2Link} <IconArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 p-6 flex flex-col justify-between hover:ring-teal-300 dark:hover:ring-teal-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 ring-1 ring-teal-200/60 dark:ring-teal-500/20">
                  <IconTarget className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-400">03</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1.5">{t.step3Title}</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">{t.step3Desc}</p>
            </div>
            <Link to="/ielts/ielts-writing-task-2-essay-types/" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400">
              {t.step3Link} <IconArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Free PDF tile */}
          <Link
            to="/ielts/english-grammar-pdf/"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-teal-900/20 transition-shadow"
          >
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/15 ring-1 ring-white/20 px-2 py-0.5 rounded mb-3">PDF</span>
              <h3 className="font-heading text-lg font-bold leading-snug mb-1">Complete English Grammar PDF</h3>
              <p className="text-white/80 text-[12px] leading-relaxed line-clamp-3">Parts of speech, tenses, sentence structure - with exercises.</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold">
              Download free <IconArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-2"><IconShield className="w-4 h-4 text-emerald-500" /> {t.trustNoTracking}</span>
          <span className="inline-flex items-center gap-2"><IconChat className="w-4 h-4 text-emerald-500" /> {t.trustUsedBy}</span>
          <span className="inline-flex items-center gap-2"><IconCheck className="w-4 h-4 text-emerald-500" /> {t.trustFree}</span>
        </div>
      </Reveal>

      {/* =================== WORD OF THE DAY (flippable) =================== */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2">
        <FlippableWordOfDay word={wordOfTheDay} />
      </Reveal>

      {/* =================== 3. LATEST LESSONS =================== */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-3">{t.freshFromBlog}</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">{t.latestLessons}</h2>
          </div>
          <Link
            to="/blog/"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
          >
            {t.viewAll}
            <IconArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homePosts.map((post) => {
            const cs = getCatStyle(post.category);
            return (
              <Link
                key={post.slug}
                to={post.path ?? `/blog/${post.slug}`}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 hover:ring-slate-300 dark:hover:ring-slate-700 overflow-hidden transition"
              >
                <div className={`h-1 w-full ${cs.bar}`} />
                <div className="flex flex-col flex-1 p-6">
                  <span className={`inline-block self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-4 ${cs.badge}`}>
                    {cs.label}
                  </span>
                  <h3 className="font-heading text-lg font-bold leading-snug text-slate-900 dark:text-white mb-3 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1 mb-5">
                    {post.summary}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                    {getDateLabel(post.date, t)} · {estimateReadTime(post.summary)} {t.minutesShort}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            {t.viewAllArticles}
            <IconArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </Reveal>

      {/* =================== 4. TESTIMONIALS =================== */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-3">{t.whatLearnersSay}</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.testimonialsTitle}
            </h2>
          </div>

          {/* Aggregate rating block */}
          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl px-5 py-4 self-start lg:self-end">
            <div className="flex -space-x-2" aria-hidden="true">
              {[
                { i: 'AR', bg: 'bg-rose-500' },
                { i: 'CH', bg: 'bg-amber-500' },
                { i: 'SO', bg: 'bg-emerald-500' },
                { i: 'JN', bg: 'bg-blue-500' },
              ].map((a) => (
                <span key={a.i} className={`inline-flex items-center justify-center w-9 h-9 rounded-full ring-2 ring-white dark:ring-slate-900 text-white text-[10px] font-bold ${a.bg}`}>
                  {a.i}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="w-4 h-4" />
                ))}
                <span className="ml-1.5 text-sm font-bold text-slate-900 dark:text-white tabular-nums">4.9</span>
              </div>
              <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                <span className="font-bold text-slate-700 dark:text-slate-300">820+</span> learner reviews
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Amina R.', role: t.testimonial1Role, quote: t.testimonial1Quote, initials: 'AR', bg: 'bg-rose-500' },
            { name: 'Chuks O.', role: t.testimonial2Role, quote: t.testimonial2Quote, initials: 'CO', bg: 'bg-amber-500' },
            { name: 'Sofia M.', role: t.testimonial3Role, quote: t.testimonial3Quote, initials: 'SM', bg: 'bg-emerald-500' },
          ].map((tm, i) => (
            <Reveal
              key={tm.name}
              as="div"
              delay={i * 80}
              className="bg-white dark:bg-slate-900 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 p-6 flex flex-col hover:ring-slate-300 dark:hover:ring-slate-700 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center justify-center w-11 h-11 rounded-full text-white text-sm font-bold ${tm.bg}`}>
                  {tm.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{tm.name}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{tm.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3 text-amber-500">
                {Array.from({ length: 5 }).map((_, j) => (
                  <IconStar key={j} className="w-3.5 h-3.5" />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200 flex-1">
                "{tm.quote}"
              </blockquote>
            </Reveal>
          ))}

          {/* 4th tile: visual highlight - "Score breakdown" mock */}
          <Reveal
            as="div"
            delay={240}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 flex flex-col"
          >
            <div className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-teal-500/20 blur-3xl" aria-hidden="true" />
            <p className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-teal-300 mb-3">Quiz result</p>
            <p className="relative z-10 font-heading text-3xl font-extrabold leading-none mb-1">
              <span className="tabular-nums">42</span>
              <span className="text-base font-semibold text-white/60"> / 50</span>
            </p>
            <p className="relative z-10 text-[13px] text-white/70 mb-5">Verb tenses - 84%</p>

            {/* fake mini-bars */}
            <div className="relative z-10 space-y-2 flex-1">
              {[
                { label: 'Present Perfect', pct: 92, tone: 'bg-emerald-400' },
                { label: 'Past Perfect', pct: 70, tone: 'bg-amber-400' },
                { label: 'Future Continuous', pct: 50, tone: 'bg-rose-400' },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-[11px] mb-0.5">
                    <span className="text-white/80">{b.label}</span>
                    <span className="text-white/60 tabular-nums">{b.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${b.tone} rounded-full`} style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/quizzes/verb-tenses-quiz/"
              className="relative z-10 mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-white transition-colors"
            >
              See your weak areas <IconArrowRight className="w-3 h-3" />
            </Link>
          </Reveal>
        </div>
      </Reveal>

      {/* =================== 4.5 FAQ =================== */}
      <Reveal as="section" className="max-w-6xl mx-auto px-2">
        <FaqAccordion
          kicker="FAQ"
          title="Questions learners ask us"
          subtitle="Quick answers about how TypoGrammar works, what's free, and how to make the most of the lessons."
          items={[
            {
              q: 'Is TypoGrammar really free?',
              a: (
                <>
                  Yes - every grammar lesson, the 50-question verb tenses quiz, the AI grammar checker,
                  and all six PDF guides are free to use. No account, no card, no trial. We keep it free
                  by running a few unobtrusive ads and offering optional premium IELTS/TOEFL ebooks.
                </>
              ),
            },
            {
              q: 'Do I need to create an account to track my progress?',
              a: (
                <>
                  No. Your completed topics and best quiz scores are stored locally in your browser, so
                  the same device automatically remembers where you left off. If you clear your browser
                  data, progress will reset.
                </>
              ),
            },
            {
              q: 'Which exams does TypoGrammar prepare me for?',
              a: (
                <>
                  Our content is mapped to <strong>IELTS</strong> (Academic & General),{' '}
                  <strong>TOEFL iBT</strong> (2026 format), <strong>Cambridge</strong> (B1-C2),{' '}
                  <strong>PTE Academic</strong>, and the <strong>Duolingo English Test</strong>.
                  You'll find dedicated writing-template, reading-strategy, and vocabulary pages
                  for each exam.
                </>
              ),
            },
            {
              q: 'How is this different from Grammarly or Duolingo?',
              a: (
                <>
                  Grammarly fixes your sentences but rarely teaches the underlying rule. Duolingo gamifies
                  short drills. TypoGrammar focuses on <strong>understanding</strong> - every lesson
                  explains <em>why</em> a structure works, with examples, mistakes to avoid, and a quick
                  quiz to lock it in.
                </>
              ),
            },
            {
              q: 'How long does it take to see results?',
              a: (
                <>
                  Most learners report a noticeable improvement in writing accuracy within 2-3 weeks of
                  daily 15-minute sessions. The verb-tenses quiz gives you a personal weak-area
                  breakdown, so you can target exactly the tenses you keep getting wrong.
                </>
              ),
            },
            {
              q: 'Can I use TypoGrammar on my phone?',
              a: (
                <>
                  Yes - the entire site is mobile-first. Lessons, quizzes, and the grammar checker
                  all work in any modern mobile browser. There is no app to install.
                </>
              ),
            },
          ]}
        />
      </Reveal>

      {/* =================== 5. FINAL CTA + Newsletter =================== */}
      <Reveal as="section" className="relative overflow-hidden rounded-3xl bg-slate-950 text-white">
        <div className="hero-grain absolute inset-0 pointer-events-none opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal-500/15 blur-3xl" aria-hidden="true" />

        <div className="relative z-10 px-6 sm:px-12 py-16 sm:py-20 lg:py-24 max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-5">
            {t.finalCtaTitle1}
            <br />
            <span className="italic font-serif text-teal-400">{t.finalCtaTitle2}</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {t.finalCtaDesc}
          </p>

          <div className="mb-10">
            <MailchimpForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/grammar-checker/"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-blue-900 bg-amber-500 hover:bg-amber-400 rounded-full transition-colors shadow-sm"
            >
              {t.finalCtaOpenChecker}
              <IconArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/getting-started/"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {t.finalCtaBrowse}
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default HomePage;
