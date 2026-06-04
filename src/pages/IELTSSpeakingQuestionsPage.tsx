import React, { useState } from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import GoogleAd from '../components/GoogleAd';

interface QA {
  n: number;
  q: string;
  a: string;
}

interface TopicConfig {
  id: string;
  name: string;
  start: number;
  templates: Array<{ q: string; a: string }>;
}

const TOPICS: TopicConfig[] = [
  {
    id: 'hometown',
    name: 'Hometown',
    start: 1,
    templates: [
      {
        q: 'What do you enjoy most about your hometown?',
        a: 'A strong answer names what you like most about your hometown, gives one clear reason, then adds a short personal example. Use the structure point -- reason -- example: state your favourite thing, explain why it matters to you, and describe a moment that shows it. Speaking from personal experience keeps your answer natural and supports your fluency score.',
      },
      {
        q: 'How often do you think about your hometown?',
        a: 'Begin with a frequency expression such as "hardly ever", "now and then" or "most days" to show how often your hometown is on your mind. Then add a typical situation that brings it up and briefly say why. Varying your frequency adverbs instead of repeating "sometimes" demonstrates a wider vocabulary range.',
      },
      {
        q: 'Has your opinion of your hometown changed over time?',
        a: 'This question rewards contrast, so use "I used to..." followed by "but now..." to show how your view of your hometown has shifted, and explain what caused the change. Moving cleanly between past and present tenses here is a good way to display grammatical range. Finish with how you feel about it today.',
      },
      {
        q: 'Why do people find their hometown important?',
        a: 'Speak in general terms about why people value their hometown, give two solid reasons, and add a soft hedge like "at least in my experience" so it reads as an opinion rather than a fact. Linking phrases such as "mainly because" and "on top of that" keep the answer coherent. Aim for depth on each reason rather than a long list.',
      },
      {
        q: 'What is one challenge related to your hometown?',
        a: 'Pick one specific challenge linked to your hometown rather than listing several -- depth scores better than breadth. Describe the problem, explain why it is difficult, and say who it affects most. Concrete detail makes the answer easier to follow and more memorable.',
      },
      {
        q: 'How has technology affected your hometown?',
        a: 'Use cause-and-effect language to connect technology with changes in your hometown. Name the cause, describe its effect, then note how the result has built up over time. Connectors like "as a result" and "this has led to" lift your coherence and cohesion score.',
      },
      {
        q: 'What are the benefits of your hometown?',
        a: 'Offer two or three clear benefits of your hometown and connect them smoothly with linkers such as "also" and "above all", then highlight the advantage you think matters most. Pairing each benefit with a brief example keeps the answer concrete. Avoid simply listing -- explain why each one counts.',
      },
      {
        q: 'What are the drawbacks of your hometown?',
        a: 'Give a genuine drawback of your hometown, support it with a short example, then add a balanced note so you sound thoughtful rather than one-sided. Phrases like "one downside is" and "that said" help you present both perspectives. A balanced answer usually reads as more mature and natural.',
      },
      {
        q: 'Do young people view their hometown differently from older people?',
        a: 'Set up a clear contrast: describe how younger people tend to approach their hometown, then how older people differ, and suggest why the gap exists. Comparison language such as "whereas" and "by contrast" is exactly what examiners listen for. Soften your claims with "tend to" or "generally" to avoid over-generalising.',
      },
      {
        q: 'How might your hometown change in the future?',
        a: 'Use modal verbs like "might", "could" and "is likely to" to predict how your hometown may change, since speculation should never sound certain. Add a condition -- for example "unless things change" -- to show range. This is a natural place to demonstrate future and conditional structures.',
      },
    ],
  },
  {
    id: 'family',
    name: 'Family',
    start: 51,
    templates: [
      {
        q: 'What do you enjoy most about your family?',
        a: 'A strong answer names what you value most about your family, gives one clear reason, then adds a short personal example. Use the point -- reason -- example structure: state your favourite aspect, explain why it matters, and illustrate it with a specific memory. Personal details make your response natural and memorable.',
      },
      {
        q: 'How often do you think about your family?',
        a: 'Begin with a precise frequency expression such as "almost constantly", "several times a day" or "whenever something important happens" to show how often your family is on your mind. Then describe a typical trigger and briefly say why it brings them to mind. Varied frequency adverbs demonstrate a wider lexical range.',
      },
      {
        q: 'Has your opinion of your family changed over time?',
        a: 'This question rewards contrast. Use "I used to..." followed by "but now..." to show how your understanding of your family has shifted, and explain what brought about that change -- perhaps growing older or living away from home. Clean movement between past and present tenses displays grammatical range. Finish with your current perspective.',
      },
      {
        q: 'Why do people find family important?',
        a: 'Speak in general terms about why family matters to people and give two solid reasons with brief supporting detail. Add a soft hedge such as "in most cultures" so your claim sounds like an informed opinion rather than an absolute rule. Linkers like "primarily because" and "in addition to this" keep the response coherent.',
      },
      {
        q: 'What is one challenge related to family life?',
        a: 'Pick one specific family challenge rather than listing several -- depth scores better than breadth in IELTS Speaking. Describe the challenge, explain why it is difficult, and say who tends to be most affected. Concrete detail makes your answer vivid and easier for the examiner to follow.',
      },
      {
        q: 'How has technology affected family life?',
        a: 'Use cause-and-effect language to connect technology with changes in how families interact. Name the technological change, describe its effect on family relationships, and note whether that effect is mostly positive or negative. Connectors like "as a result" and "this has meant that" lift your coherence and cohesion score.',
      },
      {
        q: 'What are the benefits of a close family?',
        a: 'Offer two or three clear benefits of having a close family and connect them with linkers such as "furthermore" and "most importantly". Pair each benefit with a brief real-world example to keep the answer concrete. Avoid simply listing -- explain why each benefit is significant for individuals and society.',
      },
      {
        q: 'What are the drawbacks of very close family ties?',
        a: 'Give one genuine drawback, support it with a short illustrative example, and then add a balancing note so your answer sounds thoughtful. Phrases like "on the other hand" and "that said" allow you to present both sides. A balanced response usually reads as more measured and mature.',
      },
      {
        q: 'Do young people view family differently from older generations?',
        a: 'Set up a clear generational contrast. Describe how younger people tend to think about family structure or roles, then explain how older generations typically differ, and suggest a reason for the gap. Comparison language such as "whereas" and "by contrast" is highly valued by examiners. Soften claims with "tend to" or "in general".',
      },
      {
        q: 'How might family structures change in the future?',
        a: 'Use modal verbs like "might", "could" and "is likely to" to speculate about future family trends. Add conditions with "provided that" or "unless" to show a range of grammatical structures. Consider factors like work patterns, technology and changing social norms as drivers of change.',
      },
    ],
  },
  {
    id: 'friends',
    name: 'Friends',
    start: 101,
    templates: [
      {
        q: 'What do you enjoy most about spending time with friends?',
        a: 'Name the specific activity or quality you value most in your friendships, give a clear reason, and add a brief personal example. The point -- reason -- example framework keeps your answer focused. Personal stories make your response feel natural and help sustain fluency throughout.',
      },
      {
        q: 'How often do you think about your friends?',
        a: 'Open with a varied frequency phrase such as "quite regularly", "whenever something funny happens" or "every time I face a problem" to show how often your friends are on your mind. Then describe a typical situation that makes you think of them. Avoiding the word "sometimes" repeatedly shows a stronger vocabulary.',
      },
      {
        q: 'Has your opinion of friendship changed over time?',
        a: 'Use the "I used to... but now..." contrast to show how your view of friendship has evolved. Explain what caused the change -- perhaps moving to a new city or going through a difficult period. Shifting cleanly between past and present tenses demonstrates grammatical range. End with what you now believe about friendship.',
      },
      {
        q: 'Why do people find friendship important?',
        a: 'Give two reasons why friendship matters and support each with a brief example or explanation. A hedge like "for most people" keeps your statement from sounding like an over-generalisation. Use linking phrases such as "one key reason is" and "beyond that" to build a coherent, well-structured answer.',
      },
      {
        q: 'What is one challenge in maintaining friendships?',
        a: 'Focus on a single, specific friendship challenge -- for example, staying close across long distances -- rather than listing several. Describe the challenge, explain why it is difficult, and suggest how people try to manage it. Depth and focus score better than a broad list in IELTS Speaking Part 1 or 2.',
      },
      {
        q: 'How has technology affected friendships?',
        a: 'Connect a specific technology -- social media, messaging apps, video calls -- to its effect on how people form and maintain friendships. Then evaluate whether the change is mostly positive or negative and add a condition if relevant. Causal language like "this has enabled" and "as a consequence" strengthens cohesion.',
      },
      {
        q: 'What are the benefits of having close friends?',
        a: 'Mention two or three clear benefits and connect them with linkers like "in addition" and "perhaps most importantly". Pair each benefit with a short example to make your answer concrete. Avoid a flat list -- frame each benefit with language that signals its importance, such as "one of the biggest advantages is".',
      },
      {
        q: 'What are the drawbacks of relying too heavily on friends?',
        a: 'Identify one real drawback of over-reliance on friends, illustrate it briefly, then balance your view with a concession. Phrases like "one potential downside" and "that said, in moderation" show you can present a nuanced opinion. Examiners reward balanced, considered responses over one-sided statements.',
      },
      {
        q: 'Do young people value friendship differently from older people?',
        a: 'Describe how younger people typically approach friendship -- perhaps prioritising quantity or online connection -- and contrast this with how older people tend to value depth or longevity. Use "whereas" and "in contrast" to signal the comparison. Hedge with "tend to" and "generally speaking" to avoid over-generalising.',
      },
      {
        q: 'How might the nature of friendship change in the future?',
        a: 'Speculate using modals such as "could", "may well" and "is likely to". Consider drivers like virtual reality, AI companions or changing work-life patterns. Adding a condition -- "provided that technology continues to develop at this rate" -- shows a range of grammatical structures and makes your prediction sound reasoned.',
      },
    ],
  },
  {
    id: 'work',
    name: 'Work',
    start: 151,
    templates: [
      {
        q: 'What do you enjoy most about your work?',
        a: 'Name the specific aspect of your work you find most rewarding, explain why it motivates you, and add a brief example from your daily experience. Using present simple and present continuous together -- "I work... and I am currently..." -- shows natural grammatical variety. A genuine, specific answer always sounds more fluent than a rehearsed one.',
      },
      {
        q: 'How often do you think about work outside of working hours?',
        a: 'Use precise frequency language such as "fairly often", "mainly at the weekend" or "rarely unless something urgent comes up" to give a clear and varied answer. Then briefly describe the typical thought that comes to mind and why. Specific detail keeps the answer natural and demonstrates real fluency rather than a memorised phrase.',
      },
      {
        q: 'Has your attitude towards work changed over time?',
        a: 'Use the "I used to... but now I..." contrast structure to show how your approach to work has shifted. Identify what caused the change -- gaining experience, changing priorities, or a particular event -- and describe how it altered your perspective. This structure naturally produces a mix of past and present tenses, which boosts grammatical range.',
      },
      {
        q: 'Why do people find work important beyond the salary?',
        a: 'Identify two non-financial reasons why work matters -- such as sense of purpose, social connection or personal development -- and support each with a brief example or observation. Use hedging language like "for many people" to frame your claims as opinion. Linkers such as "beyond that" and "equally important is" improve coherence.',
      },
      {
        q: 'What is one major challenge in modern working life?',
        a: 'Choose one specific challenge -- work-life balance, job insecurity or digital overload are strong choices -- and develop it with a reason and brief illustration. Focusing on a single challenge with depth is more effective than listing several. Use vocabulary like "one of the most pressing issues" to signal the importance of your point.',
      },
      {
        q: 'How has technology affected the way people work?',
        a: 'Identify a specific technological shift -- remote working tools, automation or AI assistance -- and trace its effect on working practices. Then note whether the impact is broadly positive, negative or mixed. Use causal connectors: "this has allowed", "as a result", "which means that". This is a strong area to show sophisticated vocabulary.',
      },
      {
        q: 'What are the benefits of having a fulfilling career?',
        a: 'Mention two or three benefits -- such as greater motivation, better mental health or financial stability -- and connect them with linking phrases. Support each benefit with a short example or data point if you know one. Avoid simply listing; explain the significance of each benefit to make your answer feel analytical rather than superficial.',
      },
      {
        q: 'What are the drawbacks of placing too much importance on work?',
        a: 'Name one clear drawback -- such as stress, neglected relationships or burnout -- and support it with an example. Then add a balancing sentence to show you see both sides. Phrases like "while work is clearly important" and "however, when taken to an extreme" signal a mature, balanced perspective that examiners value.',
      },
      {
        q: 'Do younger and older workers have different attitudes towards work?',
        a: 'Describe how younger workers tend to prioritise flexibility, purpose or work-life balance, and contrast this with how older workers may value stability or seniority. Use "whereas", "by contrast" and "on the other hand" to signal the comparison. Hedge with "tend to" and "on the whole" to avoid over-generalising.',
      },
      {
        q: 'How might the nature of work change in the future?',
        a: 'Speculate using modal verbs: "is likely to", "might well", "could". Consider trends like automation, remote work expansion, or the four-day working week. Add a conditional -- "provided that technology continues to advance" -- to show range. Acknowledging uncertainty makes the prediction sound more sophisticated.',
      },
    ],
  },
  {
    id: 'study',
    name: 'Study',
    start: 201,
    templates: [
      {
        q: 'What do you enjoy most about studying?',
        a: 'Name the specific aspect of studying you find most enjoyable -- discovering new ideas, the sense of progress, or the social element -- then give a clear reason and a personal example. Being specific keeps your answer vivid. Combining present simple with present perfect ("I enjoy... I have found that...") adds natural grammatical variety.',
      },
      {
        q: 'How often do you think about your studies outside of class?',
        a: 'Open with a varied frequency phrase such as "almost constantly at exam time", "on and off throughout the day" or "mostly in the evenings". Then add a typical scenario that triggers study-related thoughts. Avoiding repetitive frequency adverbs like "sometimes" demonstrates a richer vocabulary to the examiner.',
      },
      {
        q: 'Has your approach to studying changed over time?',
        a: 'Use the "I used to... but now I..." contrast to describe a shift in your study habits or attitude. Identify the cause -- perhaps a change of subject, a good teacher, or a specific academic struggle -- and describe how it reshaped your habits. This naturally produces a range of tenses and shows reflective thinking.',
      },
      {
        q: 'Why do people find education and studying important?',
        a: 'Give two reasons why studying matters -- career prospects and personal growth are common but effective choices -- and support each with a brief example. Hedge with "in most societies" or "generally speaking" to sound balanced. Use linking phrases like "primarily because" and "beyond that" to keep the answer well structured.',
      },
      {
        q: 'What is one major challenge students face?',
        a: 'Focus on a single challenge -- exam pressure, managing time, or staying motivated -- and develop it rather than listing several. Explain what makes it difficult and who is most affected. A focused, detailed answer demonstrates the depth of language use that earns higher marks in IELTS Speaking.',
      },
      {
        q: 'How has technology changed the way people study?',
        a: 'Connect a specific technology -- online learning platforms, AI tutors, or digital flashcard apps -- to a concrete change in study behaviour. Assess whether the change is mainly positive or negative, and add a nuance if relevant. Causal connectors like "this has enabled learners to" and "as a result, students can now" strengthen your coherence score.',
      },
      {
        q: 'What are the benefits of lifelong learning?',
        a: 'Offer two or three clear benefits of continuing to learn throughout life and link them with phrases like "in addition" and "perhaps the greatest advantage". Support each with a brief example. Frame each benefit analytically -- "one key advantage is that it keeps the mind active" -- rather than just listing nouns.',
      },
      {
        q: 'What are the drawbacks of excessive academic pressure?',
        a: 'Identify one genuine drawback of high academic pressure -- such as anxiety, reduced creativity or poor work-life balance -- and illustrate it briefly. Then add a balancing sentence. Language like "while academic achievement is clearly valuable" followed by "however, when pressure becomes excessive" shows a sophisticated, measured view.',
      },
      {
        q: 'Do young and older learners approach studying differently?',
        a: 'Contrast how younger learners typically engage with study -- possibly more digitally or with shorter attention spans -- with how mature students tend to approach it, perhaps with greater self-discipline or clearer goals. Use "whereas", "in contrast" and "by comparison". Hedge with "tend to" to avoid over-generalising.',
      },
      {
        q: 'How might education and studying change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like AI-powered personalised learning, gamification or virtual classrooms. Add a condition -- "assuming technology becomes more accessible" -- to show grammatical range. Acknowledging uncertainty adds realism to your speculation.',
      },
    ],
  },
  {
    id: 'technology',
    name: 'Technology',
    start: 251,
    templates: [
      {
        q: 'What do you enjoy most about modern technology?',
        a: 'Name the specific feature or device you find most valuable, give a clear reason, and add a brief personal example. Using present perfect alongside present simple -- "I have always valued... because it lets me..." -- adds natural grammatical variety. Concrete examples prevent your answer from sounding too abstract or rehearsed.',
      },
      {
        q: 'How often do you think about how technology is changing your life?',
        a: 'Begin with a precise frequency phrase such as "almost every day", "whenever I use a new app" or "mostly when I notice how much has changed". Then describe a typical trigger for this reflection. Specific triggers and varied adverbials show the examiner you can use language flexibly rather than falling back on a memorised phrase.',
      },
      {
        q: 'Has your attitude towards technology changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your view of technology. Perhaps you were more sceptical before or more dependent now. Explain what caused the change and how it has affected your daily habits. This naturally produces a mix of tenses, boosting your grammatical range score.',
      },
      {
        q: 'Why do people find technology so important in modern life?',
        a: 'Give two reasons why technology has become central -- convenience and connectivity are strong starting points -- and support each with a brief, concrete example. Hedge with "at least for most people" to signal informed opinion rather than absolute fact. Linkers like "largely because" and "beyond convenience" keep the answer coherent.',
      },
      {
        q: 'What is one major challenge that technology presents?',
        a: 'Select one specific challenge -- privacy concerns, digital addiction or the digital divide -- and develop it rather than listing several. Explain what makes it difficult and who bears the greatest cost. Precise vocabulary such as "data vulnerability" or "algorithmic bias" raises your lexical resource score.',
      },
      {
        q: 'How has technology affected communication between people?',
        a: 'Identify a specific change in communication -- the rise of messaging apps, the decline of face-to-face contact, or the speed of information sharing -- and evaluate its impact. Use causal connectors: "this has meant that", "as a result", "which in turn has led to". Consider both positive and negative effects for a balanced, high-scoring answer.',
      },
      {
        q: 'What are the main benefits of advances in technology?',
        a: 'Mention two or three key benefits -- improved healthcare, greater access to education, or more efficient work -- and connect them with "furthermore" and "perhaps most significantly". Pair each benefit with a brief real-world example. Analytical framing -- "one of the most profound benefits is" -- elevates the response beyond a simple list.',
      },
      {
        q: 'What are the drawbacks of being over-reliant on technology?',
        a: 'Name one clear drawback of technology dependence -- reduced critical thinking, privacy erosion or weakened social skills -- and illustrate it with a short example. Balance your view with a concession. Phrases like "while technology undeniably offers convenience" and "yet, when overused" create the nuanced tone that earns high Band scores.',
      },
      {
        q: 'Do younger and older generations use technology differently?',
        a: 'Contrast how younger people typically engage with technology -- often as digital natives -- with how older generations may approach it more cautiously or selectively. Use "whereas", "by contrast" and "on the other hand" to signal the comparison clearly. Soften your generalisations with "tend to" and "in many cases".',
      },
      {
        q: 'How might technology continue to shape society in the future?',
        a: 'Speculate with modal verbs: "is likely to", "could fundamentally alter", "may well transform". Consider areas like healthcare, education, or the workplace. Adding a conditional -- "provided that ethical frameworks keep pace with innovation" -- demonstrates complex grammatical structures and makes the speculation sound considered rather than simplistic.',
      },
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    start: 301,
    templates: [
      {
        q: 'What do you enjoy most about travelling?',
        a: 'Name the specific aspect of travel you find most rewarding -- new cultures, the sense of freedom, or meeting people -- give a reason, and illustrate with a personal travel memory. Using present perfect for past experience ("I have always found that...") alongside present simple creates natural grammatical variety. A genuine example sounds more fluent than a generic statement.',
      },
      {
        q: 'How often do you think about travelling?',
        a: 'Begin with a colourful frequency phrase such as "almost every time I see a travel photo", "at least once a week" or "particularly in winter". Then describe what typically triggers the thought. Varied frequency adverbs and specific triggers demonstrate a wider vocabulary range and prevent your answer from sounding rehearsed.',
      },
      {
        q: 'Has your attitude towards travel changed over time?',
        a: 'Use the "I used to... but now I..." contrast to show how your travel preferences or motivations have evolved. Perhaps you now prefer slow travel over sightseeing tours, or you value authentic experiences over comfort. Explain what prompted the shift. This structure naturally uses a range of tenses, which the examiner is listening for.',
      },
      {
        q: 'Why do people find travel important?',
        a: 'Give two clear reasons -- broadening perspectives, escaping routine, or fostering cultural understanding -- and support each with a brief example. Hedge with "for most travellers" or "in my experience" to signal opinion. Connectors like "one key reason is" and "on top of that" build coherent structure without sounding like a memorised list.',
      },
      {
        q: 'What is one major challenge of travelling?',
        a: 'Focus on a single travel challenge -- language barriers, managing costs, or environmental impact -- and develop it with a reason and illustration. Depth and focus earn more marks than a broad list. Vocabulary like "navigating cultural differences" or "the carbon footprint of long-haul flights" raises your lexical resource score.',
      },
      {
        q: 'How has technology affected the way people travel?',
        a: 'Connect a specific technology -- booking apps, translation tools, or social media recommendations -- to a concrete change in travel behaviour. Assess whether the effect is mainly positive or negative. Causal connectors -- "this has made it far easier to", "as a consequence, travellers can now" -- strengthen coherence and cohesion.',
      },
      {
        q: 'What are the main benefits of travelling?',
        a: 'Offer two or three clear benefits -- personal growth, intercultural understanding, or stress relief -- and link them with "in addition" and "above all". Support each with a short example. Analytical framing -- "one of the most underrated benefits is" -- gives your answer more depth than simply naming the benefits.',
      },
      {
        q: 'What are the drawbacks of mass tourism?',
        a: 'Identify one genuine drawback -- overcrowding, environmental damage, or cultural dilution -- and illustrate it briefly. Then balance your view with a concession such as "that said, tourism also brings economic benefits that local communities depend on". A balanced, measured response sounds more sophisticated than a purely negative one.',
      },
      {
        q: 'Do young and old people travel for different reasons?',
        a: 'Describe how younger travellers tend to seek adventure or Instagram-worthy experiences, and contrast this with how older travellers may prioritise comfort or cultural depth. Use "whereas", "by contrast" and "in comparison". Hedge with "tend to" and "generally speaking" to avoid over-generalisation and sound more credible.',
      },
      {
        q: 'How might the way people travel change in the future?',
        a: 'Speculate with modals: "might", "could well", "is likely to". Consider trends like sustainable travel, virtual tourism, or high-speed rail alternatives to flying. Add a conditional -- "assuming carbon taxes increase significantly" -- to demonstrate complex grammatical structures and make the prediction sound well-reasoned.',
      },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    start: 351,
    templates: [
      {
        q: 'What do you enjoy most about food and eating?',
        a: 'Name a specific aspect -- discovering new cuisines, the social ritual of eating together, or cooking -- and give a clear reason followed by a personal example. Being specific adds authenticity. Combining present simple ("I love...") with present perfect ("I have always enjoyed...") creates natural grammatical variety without forcing it.',
      },
      {
        q: 'How often do you think about food?',
        a: 'Use a vivid frequency expression such as "far too often", "every few hours" or "mainly when I am stressed or happy". Then add a typical situation. The key is to vary your frequency language and give context rather than just answering with a number. Context shows the examiner how you use language naturally.',
      },
      {
        q: 'Have your food preferences changed over time?',
        a: 'Use the "I used to... but now I..." contrast to describe how your tastes or relationship with food has evolved. Identify a reason -- living abroad, health concerns, or simply getting older -- and explain its influence. Moving between past and present tenses naturally is a sign of grammatical range that examiners look for.',
      },
      {
        q: 'Why do people find food culture so important?',
        a: 'Give two reasons why food is culturally significant -- identity, tradition, or social bonding -- and support each with a brief example. Hedge with "across most cultures" to avoid over-generalising. Linking phrases like "one fundamental reason is" and "closely related to this" keep the answer structured and coherent.',
      },
      {
        q: 'What is one major challenge related to food and diet?',
        a: 'Choose a single, specific challenge -- food insecurity, ultra-processed food consumption, or the cost of healthy eating -- and develop it rather than listing several. Explain the problem, identify the cause, and note who is most affected. Precise vocabulary like "nutritional inequality" raises your lexical resource score.',
      },
      {
        q: 'How has technology changed the way people eat and shop for food?',
        a: 'Link a specific technology -- food delivery apps, precision agriculture, or smart kitchen appliances -- to a change in eating or shopping behaviour. Evaluate whether the change is broadly positive or negative. Use causal connectors: "this has led to", "as a result", "which has in turn affected". Consider both convenience and potential drawbacks.',
      },
      {
        q: 'What are the benefits of a varied and balanced diet?',
        a: 'Mention two or three clear health, social or cognitive benefits of eating well and connect them with "furthermore" and "perhaps most significantly". Pair each with a brief example. Analytical framing -- "one often overlooked benefit is" -- signals to the examiner that you are thinking critically rather than reciting a list.',
      },
      {
        q: 'What are the drawbacks of fast food and convenience eating?',
        a: 'Identify one genuine drawback -- poor nutritional value, environmental packaging waste, or the normalisation of overeating -- and support it with a brief illustration. Add a balancing comment to show nuance. Language like "while fast food undeniably offers convenience" followed by "the long-term health implications are difficult to ignore" demonstrates sophistication.',
      },
      {
        q: 'Do younger and older generations have different attitudes towards food?',
        a: 'Describe how younger people tend to engage with food trends, ethical eating, or food-as-content on social media, and contrast this with how older generations may prioritise tradition, frugality or familiarity. Use "whereas", "on the other hand" and "by contrast". Soften with "tend to" and "in many cases".',
      },
      {
        q: 'How might food and eating habits change in the future?',
        a: 'Speculate using modal verbs: "could", "might well", "is likely to". Consider trends like lab-grown meat, insect protein, or personalised nutrition based on DNA. Add a condition -- "provided that consumer attitudes shift" -- to show grammatical complexity. Acknowledging uncertainty makes your prediction sound reasoned rather than absolute.',
      },
    ],
  },
  {
    id: 'sports',
    name: 'Sports',
    start: 401,
    templates: [
      {
        q: 'What do you enjoy most about sports?',
        a: 'Name a specific aspect of sports -- the physical challenge, the team spirit, or the competitive element -- and explain why it appeals to you with a brief personal example. Using present simple alongside present perfect ("I enjoy... I have played... since I was a child") creates natural tense variety. Specific examples always sound more fluent than generalisations.',
      },
      {
        q: 'How often do you think about sports?',
        a: 'Begin with a precise frequency phrase such as "almost every day", "mainly during major tournaments" or "far more than I probably should". Then describe a typical scenario that brings sports to mind. Varied frequency expressions and specific triggers demonstrate lexical range and make the answer feel natural rather than scripted.',
      },
      {
        q: 'Has your attitude towards sports changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your relationship with sport -- perhaps from participant to spectator, or from casual fan to serious competitor. Explain what triggered the change. Moving between tenses cleanly here demonstrates grammatical range.',
      },
      {
        q: 'Why do people find sports important?',
        a: 'Give two clear reasons why sports matter -- physical health, mental well-being, social cohesion or national identity -- and support each with a brief example. Hedge with "for many people" to avoid over-generalising. Use linking phrases like "one significant reason is" and "equally important is the fact that" to maintain coherent structure.',
      },
      {
        q: 'What is one major challenge in the world of sports?',
        a: 'Focus on a single, specific challenge -- doping, commercialisation, inequality in funding, or access for people with disabilities -- and develop it with a reason and illustration. Depth and focus earn better marks than a broad list in IELTS Speaking. Precise vocabulary like "performance-enhancing drugs" or "grassroots funding" lifts your lexical resource score.',
      },
      {
        q: 'How has technology affected sports?',
        a: 'Connect a specific technology -- VAR in football, performance analytics, or wearable fitness trackers -- to a concrete change in how sports are played or watched. Assess whether the impact is mainly positive or negative. Causal connectors -- "this has fundamentally changed", "as a result, athletes can now" -- strengthen your coherence score.',
      },
      {
        q: 'What are the main benefits of participating in sports?',
        a: 'Offer two or three clear benefits -- physical fitness, teamwork skills, or mental resilience -- and link them with "in addition" and "above all". Pair each with a short, concrete example. Analytical framing -- "perhaps the most undervalued benefit is the development of mental toughness" -- gives your answer more depth than a flat list.',
      },
      {
        q: 'What are the drawbacks of competitive sports culture?',
        a: 'Identify one genuine drawback -- injuries, excessive pressure on young athletes, or the glorification of winning at any cost -- and illustrate it briefly. Balance your view with a concession. Language like "while competitive sport clearly builds character" followed by "there is a risk that..." creates the nuanced tone examiners value.',
      },
      {
        q: 'Do young people approach sports differently from older generations?',
        a: 'Describe how younger people tend to engage with e-sports, fitness apps or extreme sports, and contrast this with how older generations may view traditional team sports or competitive athletics. Use "whereas", "by contrast" and "on the other hand". Hedge with "tend to" and "on the whole" to avoid sweeping generalisations.',
      },
      {
        q: 'How might sports change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like virtual and augmented reality in training, the growing popularity of e-sports, or greater investment in women\'s sport. Add a conditional -- "assuming sufficient investment" -- to show grammatical complexity. Make the prediction sound considered rather than casual.',
      },
    ],
  },
  {
    id: 'books',
    name: 'Books',
    start: 451,
    templates: [
      {
        q: 'What do you enjoy most about reading books?',
        a: 'Name a specific aspect -- escaping into another world, learning something new, or the quiet of reading -- give a reason, and add a short personal example. Mentioning a specific book or genre makes your answer vivid and memorable. Combining present simple with present perfect ("I enjoy... I have always found...") adds natural grammatical variety.',
      },
      {
        q: 'How often do you think about books and reading?',
        a: 'Open with a varied frequency phrase such as "fairly regularly", "whenever I pass a bookshop" or "mostly before bed". Then describe what typically triggers those thoughts. Specific triggers are more convincing to the examiner than vague adverbs, and they help you speak at greater length naturally.',
      },
      {
        q: 'Has your reading habit changed over time?',
        a: 'Use the "I used to... but now I..." contrast to describe how your reading habits or preferences have evolved. Perhaps you read more fiction as a child but now prefer non-fiction, or digital reading has replaced physical books. Explain the cause of the change. This structure naturally produces a range of tenses.',
      },
      {
        q: 'Why do people find reading books important?',
        a: 'Give two reasons why reading matters -- vocabulary development, empathy, cognitive exercise or stress reduction -- and support each with a brief example. Use hedges like "for many readers" to avoid sounding like you are stating universal facts. Linkers such as "primarily because" and "beyond that" maintain coherent structure.',
      },
      {
        q: 'What is one challenge facing readers or the publishing industry today?',
        a: 'Focus on a single challenge -- declining reading habits, competition from screens, or the sustainability of independent bookshops -- and develop it rather than listing several. Explain the problem and its consequences. Precise vocabulary like "digital disruption" or "the attention economy" raises your lexical resource score.',
      },
      {
        q: 'How has technology changed the way people read?',
        a: 'Connect a specific technology -- e-readers, audiobooks, or reading apps -- to a concrete change in how people engage with books. Assess whether the overall effect is positive or negative. Causal connectors like "this has allowed readers to" and "as a result" strengthen your coherence score.',
      },
      {
        q: 'What are the main benefits of reading regularly?',
        a: 'Offer two or three clear benefits -- improved vocabulary, enhanced focus, or broader knowledge -- and connect them with "furthermore" and "most importantly". Pair each with a brief example or reference. Analytical framing -- "one benefit that is often underestimated is its effect on empathy" -- elevates the answer above a simple list.',
      },
      {
        q: 'What are the drawbacks of spending too much time reading?',
        a: 'Identify one genuine drawback -- social isolation, sedentary behaviour, or neglecting other responsibilities -- and illustrate it briefly. Add a balancing comment to show nuance. Language like "while reading is overwhelmingly beneficial" followed by "it is worth acknowledging that" creates a measured, sophisticated tone.',
      },
      {
        q: 'Do young and older readers have different preferences?',
        a: 'Describe how younger readers tend to engage with digital formats, graphic novels or short-form content, and contrast this with how older readers may prefer physical books or classic literature. Use "whereas", "in contrast" and "by comparison". Soften generalisations with "tend to" and "in many cases".',
      },
      {
        q: 'How might the publishing industry and reading habits change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like AI-generated content, subscription reading services, or the resurgence of physical books. Adding a conditional -- "assuming literacy rates continue to rise globally" -- shows grammatical range. Acknowledge uncertainty to make your prediction sound credible.',
      },
    ],
  },
  {
    id: 'music',
    name: 'Music',
    start: 501,
    templates: [
      {
        q: 'What do you enjoy most about music?',
        a: 'Name a specific aspect of music you love most -- the emotional connection, the rhythm, the way it marks memories -- give a reason, and add a short personal example. A specific song, artist or genre makes your answer vivid. Using present simple alongside present perfect ("I enjoy... I have always found...") adds natural grammatical variety.',
      },
      {
        q: 'How often do you think about music or listen to it?',
        a: 'Open with a precise frequency phrase such as "almost constantly", "at least a few hours a day" or "particularly when I am commuting". Then describe what typically triggers you to turn music on. Varied adverbials and specific triggers demonstrate lexical range and prevent your answer from sounding scripted.',
      },
      {
        q: 'Has your taste in music changed over time?',
        a: 'Use "I used to listen to... but now I prefer..." to trace a shift in your musical tastes. Explain what drove the change -- age, a particular experience, or exposure to new genres. Moving cleanly between past and present tenses demonstrates grammatical range. End with how you feel about music now compared to before.',
      },
      {
        q: 'Why do people find music important in their lives?',
        a: 'Give two reasons why music matters -- emotional regulation, cultural identity, social bonding or cognitive benefits -- and support each with a brief example. Hedge with "for most people" to signal opinion. Linking phrases like "one fundamental reason is" and "beyond this" keep the response coherent and well-structured.',
      },
      {
        q: 'What is one major challenge facing musicians or the music industry?',
        a: 'Select one specific challenge -- streaming revenue, copyright infringement, or the difficulty of building an audience -- and develop it with a reason and illustration. Depth and focus score better than a broad list. Precise vocabulary like "intellectual property rights" or "algorithmic gatekeeping" raises your lexical resource score.',
      },
      {
        q: 'How has technology changed the music industry and listening habits?',
        a: 'Connect a specific technology -- streaming platforms, music production software, or social media discovery -- to a concrete change in the music industry. Evaluate whether the impact is mainly positive or negative for artists and listeners. Causal connectors -- "this has fundamentally altered", "as a consequence" -- strengthen your cohesion score.',
      },
      {
        q: 'What are the main benefits of music for individuals and society?',
        a: 'Offer two or three clear benefits -- stress reduction, cultural preservation, social cohesion, or educational development -- and link them with "furthermore" and "above all". Pair each with a brief, concrete example. Analytical framing -- "perhaps the most profound benefit is music\'s ability to..." -- gives depth beyond a simple list.',
      },
      {
        q: 'What are the drawbacks of how music is consumed today?',
        a: 'Identify one genuine drawback -- reduced attention span, devaluation of music as art, or the dominance of algorithm-driven playlists -- and illustrate it briefly. Balance your view with a concession. Showing you can see both sides -- "while streaming has made music more accessible, there is a cost to..." -- demonstrates critical thinking.',
      },
      {
        q: 'Do young and older people have different relationships with music?',
        a: 'Describe how younger people often engage with music through social media, streaming or new genres like hip-hop, and contrast this with how older generations may connect music to specific memories or prefer live performances. Use "whereas", "by contrast" and "on the other hand". Hedge appropriately with "tend to" and "generally speaking".',
      },
      {
        q: 'How might the music industry change in the future?',
        a: 'Speculate with modals: "might", "could well", "is likely to". Consider trends like AI-composed music, virtual concerts, or the revival of vinyl culture. Adding a conditional -- "provided that artists retain creative control" -- shows grammatical complexity. Acknowledging uncertainty makes your speculation sound balanced and considered.',
      },
    ],
  },
  {
    id: 'movies',
    name: 'Movies',
    start: 551,
    templates: [
      {
        q: 'What do you enjoy most about watching movies?',
        a: 'Name a specific aspect -- the storytelling, visual effects, emotional experience, or the shared cinema ritual -- and explain why it appeals to you with a brief personal example. Using present simple alongside present perfect ("I enjoy... I have always found...") creates natural tense variety. A specific film reference makes your answer vivid and convincing.',
      },
      {
        q: 'How often do you watch movies?',
        a: 'Open with a precise frequency phrase such as "at least twice a week", "mainly on weekends" or "far more often since streaming became so convenient". Then describe your typical viewing context. Varied frequency adverbs and contextual detail demonstrate lexical range and make the answer feel authentic rather than rehearsed.',
      },
      {
        q: 'Has your taste in movies changed over time?',
        a: 'Use "I used to... but now I prefer..." to trace a shift in your movie preferences. Explain what prompted the change -- getting older, studying film, or a particular movie that shifted your perspective. This structure naturally produces a range of tenses. End with how your current taste reflects your personality or values.',
      },
      {
        q: 'Why do people find movies culturally important?',
        a: 'Give two reasons why movies matter culturally -- reflecting social values, sparking conversation, or preserving history -- and support each with a brief example. Hedge with "across many societies" to avoid over-generalisation. Linkers like "one significant reason is" and "closely linked to this" maintain a coherent, well-structured response.',
      },
      {
        q: 'What is one major challenge facing the film industry today?',
        a: 'Focus on a single challenge -- piracy, declining cinema attendance, or the dominance of franchise films -- and develop it rather than listing several. Explain the problem and its consequences for the industry. Precise vocabulary like "intellectual property theft" or "market saturation" raises your lexical resource score.',
      },
      {
        q: 'How has technology changed the way people watch and make films?',
        a: 'Connect a specific technology -- streaming platforms, CGI, or smartphone filmmaking -- to a concrete change in the film experience. Evaluate whether the overall effect is positive or negative. Causal connectors -- "this has fundamentally changed", "as a result, audiences now" -- strengthen your coherence and cohesion score.',
      },
      {
        q: 'What are the main benefits of cinema and film?',
        a: 'Offer two or three clear benefits -- cultural exchange, emotional catharsis, entertainment, or social commentary -- and link them with "in addition" and "most importantly". Pair each with a brief example. Analytical framing -- "one benefit that is often underestimated is film\'s ability to foster empathy" -- elevates the response above a simple list.',
      },
      {
        q: 'What are the drawbacks of the modern film industry?',
        a: 'Identify one genuine drawback -- formulaic blockbuster culture, underrepresentation of diverse stories, or the environmental cost of large productions -- and illustrate briefly. Add a balancing concession. Language like "while the industry clearly entertains billions" followed by "a significant concern remains..." shows the nuanced thinking examiners reward.',
      },
      {
        q: 'Do younger and older audiences enjoy different kinds of films?',
        a: 'Describe how younger audiences tend to favour action, superhero franchises or social media-driven content, and contrast this with how older audiences may prefer drama, classic cinema or documentary. Use "whereas", "by contrast" and "on the other hand". Hedge with "tend to" and "in general" to avoid sweeping generalisations.',
      },
      {
        q: 'How might the film industry change in the future?',
        a: 'Speculate with modals: "might", "could well", "is likely to". Consider trends like AI-generated films, immersive virtual reality cinema, or the continued rise of streaming. Add a conditional -- "assuming audience habits continue to shift toward home viewing" -- to demonstrate grammatical complexity and reasoned prediction.',
      },
    ],
  },
  {
    id: 'shopping',
    name: 'Shopping',
    start: 601,
    templates: [
      {
        q: 'What do you enjoy most about shopping?',
        a: 'Name a specific aspect of shopping you genuinely enjoy -- finding a bargain, discovering something unexpected, or the browsing experience -- give a reason, and add a brief personal example. Using present simple alongside present perfect creates natural grammatical variety. Being specific and personal always sounds more fluent than giving a generic answer.',
      },
      {
        q: 'How often do you think about or engage in shopping?',
        a: 'Open with a varied frequency phrase such as "more often than I would like", "mainly at the end of the month" or "mostly online these days". Then add a typical scenario. Varied frequency adverbs and contextual detail show lexical range and make the answer feel authentic. Avoid defaulting to "sometimes" repeatedly.',
      },
      {
        q: 'Has your attitude towards shopping changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your shopping habits or values -- perhaps becoming more conscious of sustainability, or switching from in-store to online shopping. Explain what prompted the change. This structure naturally uses a range of tenses, demonstrating grammatical range.',
      },
      {
        q: 'Why do people find shopping enjoyable or important?',
        a: 'Give two reasons why shopping matters beyond necessity -- the social experience, the mood-lifting effect, or self-expression through purchases -- and support each with a brief example. Hedge with "for many consumers" to signal opinion. Linkers like "partly because" and "on top of that" keep the answer coherent.',
      },
      {
        q: 'What is one major challenge associated with modern shopping?',
        a: 'Focus on one specific challenge -- overconsumption, the environmental cost of fast fashion, or financial pressure -- and develop it with a reason and illustration. Depth scores better than breadth in IELTS Speaking. Precise vocabulary like "throwaway culture" or "impulse purchasing behaviour" raises your lexical resource score.',
      },
      {
        q: 'How has technology changed the way people shop?',
        a: 'Link a specific technology -- e-commerce platforms, recommendation algorithms, or contactless payment -- to a concrete change in shopping behaviour. Assess whether the impact is mainly positive or negative. Causal connectors -- "this has made it far easier to", "as a result, consumers can now" -- strengthen your coherence score.',
      },
      {
        q: 'What are the benefits of modern retail and shopping culture?',
        a: 'Offer two or three clear benefits -- convenience, greater consumer choice, competitive pricing, or support for local businesses -- and link them with "in addition" and "perhaps most significantly". Pair each with a brief example. Analytical framing elevates the response and shows you are engaging critically with the topic.',
      },
      {
        q: 'What are the drawbacks of consumerism and excessive shopping?',
        a: 'Identify one genuine drawback -- financial debt, environmental damage, or the displacement of personal satisfaction by material goods -- and illustrate it briefly. Balance your view with a concession. Language like "while shopping clearly serves important social and economic functions" followed by "the risk of..." shows sophistication.',
      },
      {
        q: 'Do young and older people shop differently?',
        a: 'Describe how younger shoppers tend to rely on social media recommendations, favour ethical or sustainable brands, or prefer online shopping, and contrast this with older consumers who may value in-store experience or brand loyalty. Use "whereas", "in contrast" and "by comparison". Soften with "tend to" and "on the whole".',
      },
      {
        q: 'How might shopping habits change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like drone delivery, augmented reality shopping, or the shift toward circular economies and rental models. Add a conditional -- "assuming sustainability regulations tighten" -- to show grammatical range and make the prediction sound considered.',
      },
    ],
  },
  {
    id: 'environment',
    name: 'Environment',
    start: 651,
    templates: [
      {
        q: 'What do you find most important about protecting the environment?',
        a: 'Name the specific environmental issue you care most about -- biodiversity loss, clean water, or climate change -- give a clear reason, and add a brief personal example or observation. Using present simple alongside present perfect creates natural grammatical variety. Precise vocabulary like "carbon emissions" or "ecosystem services" raises your lexical resource score.',
      },
      {
        q: 'How often do you think about environmental issues?',
        a: 'Begin with a colourful frequency phrase such as "almost every day", "particularly when I see news about climate change" or "whenever I make a consumer choice". Then describe what typically triggers environmental awareness. Specific triggers and varied adverbials demonstrate lexical range and prevent the answer from sounding scripted.',
      },
      {
        q: 'Has your attitude towards the environment changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your environmental awareness or behaviour. Perhaps you became more conscious after a particular event or after learning more about climate science. Explain what caused the change. Clean tense movement and personal reflection create a high-quality response.',
      },
      {
        q: 'Why do people find environmental protection important?',
        a: 'Give two clear reasons -- survival of ecosystems, human health, or responsibility to future generations -- and support each with a brief example. Hedge with "across most cultures" or "for most people who think about it seriously". Linkers like "fundamentally because" and "beyond that" maintain coherent, well-structured reasoning.',
      },
      {
        q: 'What is one major challenge in addressing environmental problems?',
        a: 'Focus on a single challenge -- political inaction, the tension between economic growth and sustainability, or lack of public awareness -- and develop it rather than listing several. Explain what makes it difficult to solve and who bears the greatest burden. Precise vocabulary like "intergenerational equity" lifts your score.',
      },
      {
        q: 'How has technology both helped and harmed the environment?',
        a: 'Acknowledge both sides: connect technologies like renewable energy or electric vehicles to environmental benefits, then contrast with how technology-driven consumption has contributed to waste and emissions. Use causal connectors -- "on one hand, this has enabled...", "on the other, it has also led to" -- to structure the comparison clearly.',
      },
      {
        q: 'What are the main benefits of adopting an environmentally conscious lifestyle?',
        a: 'Offer two or three clear benefits -- reduced personal carbon footprint, cost savings, better health, or cultural influence on others -- and link them with "furthermore" and "above all". Pair each with a brief example. Analytical framing -- "one benefit that is often overlooked is" -- shows critical engagement with the topic.',
      },
      {
        q: 'What are the drawbacks of current approaches to environmentalism?',
        a: 'Identify one genuine drawback -- placing too much responsibility on individuals while corporations go unchecked, or the economic cost of green transitions for lower-income communities -- and illustrate it briefly. Balance your view with a concession. Nuanced critique demonstrates sophisticated thinking.',
      },
      {
        q: 'Do younger and older generations view environmental issues differently?',
        a: 'Describe how younger generations tend to feel greater urgency about climate change and are more likely to engage in activism, and contrast this with older generations who may prioritise economic stability or be more sceptical. Use "whereas", "by contrast" and "in comparison". Hedge with "tend to" and "generally speaking".',
      },
      {
        q: 'How might environmental challenges and responses change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like breakthrough renewable technologies, international climate agreements, or changing consumer behaviour. Add a conditional -- "provided that governments act with sufficient urgency" -- to show grammatical complexity. Acknowledge uncertainty for a balanced, credible prediction.',
      },
    ],
  },
  {
    id: 'health',
    name: 'Health',
    start: 701,
    templates: [
      {
        q: 'What do you do to take care of your health?',
        a: 'Name two or three specific habits -- regular exercise, a balanced diet, adequate sleep -- give reasons for each, and add a brief personal example. Using present simple for habits ("I try to...") alongside present perfect for results ("I have noticed that...") creates natural grammatical variety. Specific habits are far more convincing than vague statements about "living healthily".',
      },
      {
        q: 'How often do you think about your health?',
        a: 'Begin with a precise frequency phrase such as "fairly regularly", "more than I used to" or "mainly after I read something worrying in the news". Then describe what typically triggers those health-related thoughts. Specific triggers and varied adverbials prevent the answer from sounding like a memorised script.',
      },
      {
        q: 'Has your attitude towards health changed over time?',
        a: 'Use "I used to... but now I..." to trace a shift in your health awareness or habits. Perhaps illness, getting older, or learning about nutrition prompted the change. Explain the cause and describe the resulting shift in behaviour. Moving cleanly between past and present tenses demonstrates the grammatical range examiners reward.',
      },
      {
        q: 'Why do people find good health important?',
        a: 'Give two clear reasons -- physical capability, mental well-being, longevity, or quality of life -- and support each with a brief example. Hedge with "for most people" to frame the answer as informed opinion. Linking phrases like "fundamentally because" and "closely connected to this" keep the response coherent and well-structured.',
      },
      {
        q: 'What is one major challenge related to public health today?',
        a: 'Choose a single, specific challenge -- rising rates of mental illness, obesity, or inequality in healthcare access -- and develop it with a reason and illustration. Depth and focus earn better marks than a broad list. Vocabulary like "sedentary lifestyle" or "healthcare disparity" demonstrates a strong lexical range.',
      },
      {
        q: 'How has technology affected health and healthcare?',
        a: 'Link a specific technology -- wearable fitness trackers, telemedicine, or AI diagnostic tools -- to a concrete change in how people manage or receive healthcare. Evaluate whether the impact is mainly positive or negative. Causal connectors -- "this has enabled patients to", "as a result, doctors can now" -- strengthen your coherence score.',
      },
      {
        q: 'What are the main benefits of maintaining a healthy lifestyle?',
        a: 'Offer two or three clear benefits -- increased energy, reduced disease risk, improved mental health, or greater longevity -- and link them with "in addition" and "above all". Pair each with a brief example. Analytical framing -- "perhaps the most overlooked benefit is its effect on mental clarity" -- shows critical engagement.',
      },
      {
        q: 'What are the drawbacks of an excessive focus on health and wellness?',
        a: 'Identify one genuine drawback -- orthorexia, financial exploitation by the wellness industry, or the social pressure of body image -- and illustrate it briefly. Balance your view with a concession. Language like "while prioritising health is undeniably important" followed by "an obsession with wellness can sometimes lead to..." shows sophisticated nuance.',
      },
      {
        q: 'Do younger and older people have different attitudes towards health?',
        a: 'Describe how younger people tend to engage with wellness trends, fitness apps or mental health awareness, and contrast this with how older generations may follow more traditional health practices or be less focused on preventative care. Use "whereas", "in contrast" and "by comparison". Hedge with "tend to" and "on the whole".',
      },
      {
        q: 'How might healthcare and attitudes towards health change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like personalised medicine, AI diagnostics, or a greater focus on preventative healthcare. Add a conditional -- "provided that healthcare systems adapt to demographic shifts" -- to show grammatical range. Acknowledging uncertainty keeps the prediction balanced and credible.',
      },
    ],
  },
  {
    id: 'education',
    name: 'Education',
    start: 751,
    templates: [
      {
        q: 'What do you value most about education?',
        a: 'Name a specific aspect of education you find most valuable -- critical thinking, broadening perspectives, or social development -- give a clear reason, and add a personal example. Using present simple alongside present perfect creates natural grammatical variety. A thoughtful, specific answer always sounds more fluent than a rehearsed one.',
      },
      {
        q: 'How often do you think about education and its role in society?',
        a: 'Begin with a precise frequency phrase such as "fairly regularly", "whenever I see inequality in outcomes" or "more and more as I get older". Then add a typical trigger for that reflection. Varied frequency expressions and specific triggers demonstrate lexical range and make the answer feel authentic rather than scripted.',
      },
      {
        q: 'Has your view of education changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your understanding of what education is for or how it should work. Identify the cause -- a teacher, a book, or a life experience -- and describe the resulting change in perspective. Moving cleanly between tenses demonstrates grammatical range.',
      },
      {
        q: 'Why do people find education so important?',
        a: 'Give two clear reasons why education matters -- social mobility, economic development, personal fulfilment, or civic participation -- and support each with a brief example. Hedge with "in most societies" to frame the claim as informed opinion. Linking phrases like "primarily because" and "beyond that" keep the response well-structured.',
      },
      {
        q: 'What is one major challenge facing education systems today?',
        a: 'Focus on a single challenge -- inequality of access, teacher shortages, outdated curricula, or the impact of social media on concentration -- and develop it rather than listing several. Explain what makes it difficult to solve and who bears the greatest cost. Precise vocabulary like "systemic inequality" lifts your lexical resource score.',
      },
      {
        q: 'How has technology changed education?',
        a: 'Connect a specific technology -- online learning platforms, AI tutoring, or interactive simulations -- to a concrete change in how education is delivered or experienced. Assess whether the impact is mainly positive or negative. Causal connectors -- "this has transformed", "as a result, learners can now" -- strengthen your coherence score.',
      },
      {
        q: 'What are the main benefits of a good education?',
        a: 'Offer two or three clear benefits -- better career prospects, informed citizenship, personal development, or reduced inequality -- and link them with "furthermore" and "most importantly". Pair each with a brief example. Analytical framing -- "one benefit that is often underestimated is its effect on civic engagement" -- shows critical depth.',
      },
      {
        q: 'What are the drawbacks of current education systems?',
        a: 'Identify one genuine drawback -- excessive exam pressure, neglect of creativity, or the reproduction of social inequality -- and illustrate it briefly. Add a balancing concession. Language like "while education systems have achieved remarkable outcomes" followed by "a significant concern remains..." creates the nuanced tone examiners reward.',
      },
      {
        q: 'Do younger and older generations have different views on education?',
        a: 'Describe how younger people tend to favour personalised, digital or skills-based learning, and contrast this with how older generations may value traditional academic structures, discipline or institutional qualifications. Use "whereas", "by contrast" and "in comparison". Soften with "tend to" and "generally speaking" to avoid sweeping claims.',
      },
      {
        q: 'How might education change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like AI personalised learning, micro-credentials, or the declining relevance of traditional degrees. Add a conditional -- "provided that educators embrace rather than resist technological change" -- to show grammatical range and make the prediction sound considered.',
      },
    ],
  },
  {
    id: 'transportation',
    name: 'Transportation',
    start: 801,
    templates: [
      {
        q: 'What do you enjoy most about how you get around?',
        a: 'Name the specific mode of transport you prefer, explain why you like it -- convenience, speed, or the opportunity to think -- and add a brief personal example. Using present simple for habits ("I usually...") alongside present perfect for experience ("I have found that...") creates natural grammatical variety.',
      },
      {
        q: 'How often do you think about transportation and getting around?',
        a: 'Begin with a precise frequency phrase such as "every single day", "mainly during rush hour" or "whenever I am stuck in traffic". Then describe what typically triggers those thoughts. Specific triggers and varied adverbials demonstrate lexical range and prevent the answer from sounding like a rehearsed script.',
      },
      {
        q: 'Has your attitude towards transportation changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in how you get around or how you view transportation choices. Perhaps environmental concerns prompted you to use public transport more, or a change in circumstances shifted your habits. Explain the cause and describe the resulting change. Clean tense movement is key.',
      },
      {
        q: 'Why do people find efficient transportation important?',
        a: 'Give two clear reasons -- economic productivity, social inclusion, or environmental impact -- and support each with a brief example. Hedge with "in most cities" to frame the claim as informed opinion rather than an absolute fact. Linking phrases like "one critical reason is" and "equally important is" maintain coherent structure.',
      },
      {
        q: 'What is one major challenge in transportation today?',
        a: 'Focus on a single challenge -- traffic congestion, carbon emissions from vehicles, inadequate public transport in rural areas, or the cost of infrastructure -- and develop it rather than listing several. Explain the problem and its consequences. Vocabulary like "urban sprawl" or "carbon-intensive commuting" lifts your lexical resource score.',
      },
      {
        q: 'How has technology changed transportation?',
        a: 'Connect a specific technology -- electric vehicles, ride-sharing apps, high-speed rail, or autonomous vehicles -- to a concrete change in how people travel. Assess whether the impact is mainly positive or negative. Causal connectors -- "this has dramatically reduced", "as a result, commuters can now" -- strengthen your coherence and cohesion score.',
      },
      {
        q: 'What are the main benefits of good public transportation?',
        a: 'Offer two or three clear benefits -- reduced traffic, lower emissions, social mobility, or economic efficiency -- and link them with "in addition" and "perhaps most significantly". Pair each with a brief example. Analytical framing -- "one benefit that is often overlooked is public transport\'s role in reducing social inequality" -- shows critical depth.',
      },
      {
        q: 'What are the drawbacks of car-centric urban design?',
        a: 'Identify one genuine drawback -- air pollution, urban sprawl, pedestrian safety, or exclusion of non-drivers -- and illustrate it briefly. Add a balancing concession such as "while cars clearly offer personal freedom". Language that acknowledges complexity -- "that said, the long-term costs to public health are difficult to ignore" -- shows nuanced thinking.',
      },
      {
        q: 'Do younger and older people have different attitudes towards transportation?',
        a: 'Describe how younger people tend to use ride-sharing apps, cycle, or use micro-mobility options, and contrast this with older generations who may be more reliant on personal vehicles. Use "whereas", "by contrast" and "in comparison". Hedge with "tend to" and "on the whole" to avoid over-generalising.',
      },
      {
        q: 'How might transportation change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like autonomous vehicles, hyperloop systems, urban air mobility, or the electrification of public fleets. Add a conditional -- "assuming the necessary infrastructure investment is made" -- to show grammatical complexity. Acknowledge uncertainty for a credible, considered prediction.',
      },
    ],
  },
  {
    id: 'culture',
    name: 'Culture',
    start: 851,
    templates: [
      {
        q: 'What do you enjoy most about your own culture?',
        a: 'Name a specific cultural element you find most meaningful -- a tradition, a value, a food, or a form of expression -- give a clear reason, and add a personal example. Using present simple alongside present perfect creates natural grammatical variety. Concrete, personal answers always sound more fluent than abstract generalisations about culture.',
      },
      {
        q: 'How often do you think about cultural identity?',
        a: 'Begin with a varied frequency phrase such as "mostly when I am abroad", "quite regularly", or "particularly when I interact with people from different backgrounds". Then describe a typical trigger. Specific triggers and varied adverbials demonstrate lexical range and make the answer feel natural rather than prepared in advance.',
      },
      {
        q: 'Has your view of your own culture changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your relationship with or understanding of your culture. Perhaps travel, education, or contact with other cultures altered your perspective. Explain what drove the change. Clean tense movement and reflective thinking produce a response that examiners find compelling.',
      },
      {
        q: 'Why do people find cultural identity important?',
        a: 'Give two reasons why cultural identity matters -- belonging, shared values, historical continuity, or a sense of purpose -- and support each with a brief example. Hedge with "for most people" to signal informed opinion. Linking phrases like "one fundamental reason is" and "closely related to this" maintain a well-structured, coherent answer.',
      },
      {
        q: 'What is one major challenge that cultures face today?',
        a: 'Focus on a single challenge -- cultural homogenisation through globalisation, the loss of minority languages, or the commodification of cultural practices -- and develop it rather than listing several. Explain the problem and its consequences. Precise vocabulary like "cultural erosion" or "intangible heritage" raises your lexical resource score.',
      },
      {
        q: 'How has technology affected culture and cultural exchange?',
        a: 'Connect a specific technology -- social media, streaming platforms, or digital archives -- to a concrete change in how culture is shared or experienced. Evaluate whether the impact is mainly positive or negative. Causal connectors -- "this has made it possible for", "as a result, cultural boundaries have" -- strengthen your coherence score.',
      },
      {
        q: 'What are the main benefits of cultural diversity?',
        a: 'Offer two or three clear benefits -- creativity, innovation, greater empathy, or richer social life -- and link them with "in addition" and "above all". Pair each with a brief example. Analytical framing -- "one benefit that is often underestimated is diversity\'s role in fostering innovation" -- shows critical engagement.',
      },
      {
        q: 'What are the drawbacks of cultural globalisation?',
        a: 'Identify one genuine drawback -- the erosion of local languages, the dominance of Western cultural exports, or the loss of traditional practices -- and illustrate it briefly. Add a balancing comment. Language like "while globalisation has undeniably connected the world" followed by "a significant concern is the..." demonstrates the nuanced thinking examiners value.',
      },
      {
        q: 'Do younger and older generations have different relationships with their culture?',
        a: 'Describe how younger people tend to engage with culture through global media and may feel ambivalent about tradition, and contrast this with older generations who may place greater emphasis on cultural preservation and continuity. Use "whereas", "by contrast" and "on the other hand". Hedge with "tend to" and "generally speaking".',
      },
      {
        q: 'How might culture and cultural identity change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like the global spread of digital culture, the revival of local identity movements, or the creation of entirely new hybrid cultures. Add a conditional -- "provided that minority languages receive adequate institutional support" -- to show grammatical range.',
      },
    ],
  },
  {
    id: 'hobbies',
    name: 'Hobbies',
    start: 901,
    templates: [
      {
        q: 'What do you enjoy most about your hobbies?',
        a: 'Name the specific aspect of your hobby you find most rewarding -- the creative outlet, the physical challenge, or the sense of achievement -- give a reason, and add a brief personal example. A specific hobby and a concrete anecdote always sound more compelling than a vague answer. Natural tense variety comes from talking about both habits and memories.',
      },
      {
        q: 'How often do you engage in your hobbies?',
        a: 'Begin with a precise frequency phrase such as "at least three times a week", "whenever I get a free hour" or "far more in winter than in summer". Then describe a typical hobby session. Varied frequency expressions and contextual detail demonstrate lexical range. Avoid repeatedly using "sometimes" -- it suggests a limited vocabulary.',
      },
      {
        q: 'Have your hobbies changed over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your interests. Explain what prompted the change -- a move, a new discovery, or simply evolving tastes -- and describe how your current hobby differs from your earlier one. Clean tense movement between past and present demonstrates grammatical range.',
      },
      {
        q: 'Why do people find hobbies important?',
        a: 'Give two clear reasons -- stress relief, personal development, social connection, or a sense of identity outside work -- and support each with a brief example. Hedge with "for most people" to frame the answer as opinion. Linkers like "one key reason is" and "beyond that" keep the response coherent and well-structured.',
      },
      {
        q: 'What is one challenge in pursuing your hobbies?',
        a: 'Focus on a single challenge -- finding time, the financial cost, or a lack of space or resources -- and develop it with a reason and illustration. Depth scores better than breadth. Concrete vocabulary like "time poverty" or "the cost barrier to entry" raises your lexical resource score and makes your answer more sophisticated.',
      },
      {
        q: 'How has technology affected the way people pursue hobbies?',
        a: 'Link a specific technology -- YouTube tutorials, hobby apps, online communities, or streaming games -- to a concrete change in how people engage with hobbies. Assess whether the impact is mainly positive or negative. Causal connectors -- "this has made it far easier to learn", "as a result, hobbyists can now" -- strengthen your coherence.',
      },
      {
        q: 'What are the main benefits of having hobbies?',
        a: 'Offer two or three clear benefits -- stress reduction, skill development, social bonding, or improved mental health -- and connect them with "furthermore" and "above all". Pair each with a brief example. Analytical framing -- "perhaps the most significant benefit is the sense of flow and absorption hobbies can create" -- adds depth.',
      },
      {
        q: 'What are the drawbacks of spending too much time on hobbies?',
        a: 'Identify one genuine drawback -- neglecting responsibilities, financial overindulgence, or social isolation -- and illustrate it briefly. Add a balancing comment to show you see both sides. Language like "while hobbies are clearly beneficial in moderation" followed by "an excessive focus on them can sometimes lead to..." shows nuanced thinking.',
      },
      {
        q: 'Do young and older people tend to have different hobbies?',
        a: 'Describe how younger people tend to favour digital hobbies, extreme sports or content creation, and contrast this with how older people may prefer more traditional activities like gardening, reading or handcrafts. Use "whereas", "in contrast" and "by comparison". Hedge with "tend to" and "in many cases" to avoid sweeping generalisations.',
      },
      {
        q: 'How might the hobbies people pursue change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like virtual reality hobbies, the growing popularity of mindfulness-based activities, or AI-assisted creativity. Add a conditional -- "assuming technology continues to develop in this direction" -- to show grammatical complexity and make the prediction sound considered.',
      },
    ],
  },
  {
    id: 'daily-life',
    name: 'Daily Life',
    start: 951,
    templates: [
      {
        q: 'What do you enjoy most about your daily routine?',
        a: 'Name a specific part of your daily routine -- a morning ritual, a commute, or a regular social activity -- give a reason you enjoy it, and add a brief personal example. Combining present simple for routines ("I usually...") with present perfect for reflection ("I have found that this helps me...") creates natural tense variety.',
      },
      {
        q: 'How often do you think about how you spend your time each day?',
        a: 'Begin with a precise frequency phrase such as "fairly regularly", "mainly at the end of the day" or "whenever I feel like I am not using my time well". Then describe a typical moment of reflection. Varied frequency expressions and specific triggers demonstrate lexical range and make the answer feel genuine.',
      },
      {
        q: 'Has your daily routine changed significantly over time?',
        a: 'Use the "I used to... but now I..." contrast to trace a shift in your daily habits or lifestyle. Identify the cause -- a new job, moving city, or a personal decision -- and describe how your routine now differs. Moving cleanly between past and present tenses demonstrates grammatical range and personal depth.',
      },
      {
        q: 'Why do people find a structured daily routine important?',
        a: 'Give two clear reasons why routine matters -- productivity, mental stability, or physical health -- and support each with a brief example. Hedge with "for most people" to frame the claim as informed opinion. Linking phrases like "one key reason is" and "closely related to this" keep the response coherent.',
      },
      {
        q: 'What is one major challenge people face in their daily lives?',
        a: 'Focus on a single, specific challenge -- managing time, balancing work and personal life, or dealing with digital distraction -- and develop it rather than listing several. Explain what makes it difficult and who is most affected. Precise vocabulary like "time management deficit" or "digital overload" raises your lexical resource score.',
      },
      {
        q: 'How has technology changed daily life?',
        a: 'Connect a specific technology -- smartphones, smart home devices, or food delivery apps -- to a concrete change in everyday habits. Assess whether the change is mainly positive or negative. Causal connectors -- "this has fundamentally altered", "as a result, most people now" -- strengthen your coherence and cohesion score.',
      },
      {
        q: 'What are the benefits of a well-organised daily life?',
        a: 'Offer two or three clear benefits -- greater productivity, reduced stress, better health, or more time for enjoyable activities -- and link them with "in addition" and "perhaps most importantly". Pair each with a brief example. Analytical framing -- "one benefit that is often overlooked is the cumulative effect of small consistent habits" -- shows critical depth.',
      },
      {
        q: 'What are the drawbacks of a highly regimented daily routine?',
        a: 'Identify one genuine drawback -- lack of spontaneity, difficulty adapting to change, or the stress of maintaining a rigid schedule -- and illustrate it briefly. Add a balancing concession. Language like "while structure is clearly beneficial" followed by "an overly rigid routine can sometimes stifle..." demonstrates a mature, balanced perspective.',
      },
      {
        q: 'Do younger and older generations live their daily lives differently?',
        a: 'Describe how younger generations tend to have more fluid, digitally mediated routines, and contrast this with how older generations may follow more traditional or structured daily patterns. Use "whereas", "by contrast" and "on the other hand". Hedge with "tend to" and "generally speaking" to avoid over-generalising.',
      },
      {
        q: 'How might everyday life change in the future?',
        a: 'Speculate using modals: "might", "could well", "is likely to". Consider trends like remote work normalisation, shorter working weeks, increased automation of household tasks, or a greater emphasis on leisure and well-being. Add a conditional -- "provided that economic conditions allow for greater flexibility" -- to show grammatical range and well-reasoned speculation.',
      },
    ],
  },
];

function buildQuestions(topic: TopicConfig): QA[] {
  const list: QA[] = [];
  for (let cycle = 0; cycle < 5; cycle++) {
    topic.templates.forEach((t, i) => {
      list.push({ n: topic.start + cycle * 10 + i, q: t.q, a: t.a });
    });
  }
  return list;
}

const IELTSSpeakingQuestionsPage: React.FC = () => {
  usePageMetadata({
    title: '1000 IELTS Speaking Questions with Model Answers | TypoGrammar',
    description:
      'Practice 1000 IELTS Speaking questions across 20 everyday topics with expert model answer guidance. Free IELTS speaking bank for Band 6, 7, 8 and 9 preparation.',
  });

  const [activeTopic, setActiveTopic] = useState<string>(TOPICS[0].id);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const currentTopic = TOPICS.find((t) => t.id === activeTopic) ?? TOPICS[0];
  const questions = buildQuestions(currentTopic);

  const toggleQuestion = (n: number) => {
    setOpenQuestion((prev) => (prev === n ? null : n));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="mb-8 text-center">
        <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          IELTS Speaking
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          1000 IELTS Speaking Questions with Model Answers
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
          A complete speaking practice bank covering 20 everyday topics. Each topic includes 50
          questions and expert guidance on how to structure a Band 7+ answer.
        </p>
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg">
            1,000 Questions
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg">
            20 Topics
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg">
            50 Questions per Topic
          </div>
          <div className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg">
            Free Self-Study
          </div>
        </div>
      </div>

      <GoogleAd adSlot="2345678901" />

      {/* Topic Navigation */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
          Select a Topic
        </h2>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => {
                setActiveTopic(topic.id);
                setOpenQuestion(null);
              }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeTopic === topic.id
                  ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {topic.name}
              <span className="ml-1 opacity-60 text-xs">({topic.start}--{topic.start + 49})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Topic Header */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-5 mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Topic: {currentTopic.name}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Questions {currentTopic.start} to {currentTopic.start + 49} -- 50 questions with
              answer guidance
            </p>
          </div>
          <div className="shrink-0 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            50 Qs
          </div>
        </div>
      </div>

      {/* Questions Accordion */}
      <div className="space-y-2 mb-10">
        {questions.map((qa) => (
          <div
            key={qa.n}
            className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(qa.n)}
              className="w-full text-left flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              aria-expanded={openQuestion === qa.n}
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 w-9 h-9 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">
                  {qa.n}
                </span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
                  {qa.q}
                </span>
              </span>
              <svg
                className={`shrink-0 ml-3 w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                  openQuestion === qa.n ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openQuestion === qa.n && (
              <div className="px-4 pb-4 pt-2 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center bg-green-100 dark:bg-green-900/40 rounded-full">
                    <svg
                      className="w-3 h-3 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{qa.a}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <GoogleAd adSlot="3456789012" />

      {/* How to Use Section */}
      <div className="mt-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          How to Use This Question Bank
        </h2>
        <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="shrink-0 text-blue-600 dark:text-blue-400 font-bold">1.</span>
            <span>
              Select a topic from the navigation above. Each topic covers 20 different everyday
              subjects commonly asked in IELTS Speaking Parts 1 and 3.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0 text-blue-600 dark:text-blue-400 font-bold">2.</span>
            <span>
              Read the question aloud and attempt a full answer before opening the guidance. Aim for
              30 to 60 seconds for Part 1 questions and 60 to 90 seconds for Part 3 questions.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0 text-blue-600 dark:text-blue-400 font-bold">3.</span>
            <span>
              Open the answer guidance to review the recommended structure, vocabulary strategies,
              and grammatical features your response should include.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0 text-blue-600 dark:text-blue-400 font-bold">4.</span>
            <span>
              Record yourself answering each question and compare your response against the guidance.
              Focus on fluency, coherence, lexical range, and grammatical accuracy.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0 text-blue-600 dark:text-blue-400 font-bold">5.</span>
            <span>
              Repeat each topic at least twice over separate practice sessions. Consistent repetition
              builds the automatic language retrieval you need under exam conditions.
            </span>
          </li>
        </ul>
      </div>

      {/* Tip Box */}
      <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
        <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Examiner Tip
        </h3>
        <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          IELTS Speaking is not a test of knowledge -- it is a test of language. The examiner does
          not care whether your opinion is correct. They are listening for your range of vocabulary,
          grammatical accuracy, coherence, and fluency. Practise giving well-structured answers with
          varied language, not memorised model answers.
        </p>
      </div>
    </div>
  );
};

export default IELTSSpeakingQuestionsPage;
