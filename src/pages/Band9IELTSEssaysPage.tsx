import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import { ArticleParagraph, ArticleHeading, CodeBlock } from '../components/ArticleComponents';
import SchemaMarkup from '../components/SchemaMarkup';

interface Essay {
  id: number;
  category: string;
  topic: string;
  modelAnswer: string;
  vocabulary: { term: string; definition: string }[];
  structureBreakdown: string[];
  whyHighScore: string[];
}

const essays: Essay[] = [
  {
    id: 1,
    category: 'Education & Technology',
    topic: 'Some people believe that technology has made teachers less important. To what extent do you agree or disagree?',
    modelAnswer: `Technological innovation has dramatically reshaped modern education. While some argue that digital platforms and artificial intelligence have reduced the necessity of teachers, I strongly disagree. Technology enhances learning, but it cannot replace the essential human role educators play.

Admittedly, online courses, educational applications, and AI-powered tools provide immediate access to information. Students can now learn independently and revisit recorded lessons at their convenience. This flexibility allows learners to progress at their own pace and access global knowledge resources.

However, education extends beyond information delivery. Teachers cultivate critical thinking, provide emotional encouragement, and adapt instruction to individual needs. They identify weaknesses, motivate disengaged learners, and foster collaborative skills. No algorithm can replicate empathy, moral guidance, or classroom dynamics.

In conclusion, although technology is a valuable educational supplement, it does not diminish the importance of teachers. Instead, it reinforces their role as facilitators of meaningful learning.`,
    vocabulary: [
      { term: 'Technological innovation', definition: 'new technological developments' },
      { term: 'Reshaped', definition: 'significantly changed' },
      { term: 'Cultivate', definition: 'develop gradually' },
      { term: 'Replicate', definition: 'copy or imitate' },
      { term: 'Facilitators', definition: 'people who guide learning' },
    ],
    structureBreakdown: [
      'Introduction: Paraphrase + clear position',
      'Body Paragraph 1: Opposing argument acknowledged',
      'Body Paragraph 2: Strong rebuttal with development',
      'Conclusion: Opinion restated clearly',
    ],
    whyHighScore: [
      'Fully addresses the task',
      'Clear position throughout',
      'Logical progression of ideas',
      'Precise academic vocabulary',
      'Complex sentence structures',
    ],
  },
  {
    id: 2,
    category: 'Environment',
    topic: 'Many people believe climate change is the greatest global challenge. Discuss both views and give your opinion.',
    modelAnswer: `Climate change is often regarded as the most pressing issue of the modern era. While some contend that poverty or armed conflict deserve greater attention, I believe climate change presents the most far-reaching threat.

Those who prioritise poverty argue that millions lack access to food, healthcare, and education. Immediate human suffering requires urgent intervention. Likewise, war destabilises nations and leads to displacement and economic collapse.

Nevertheless, climate change intensifies these problems. Rising sea levels threaten coastal communities, extreme weather damages agriculture, and water scarcity fuels political instability. Unlike regional conflicts, environmental degradation is global and irreversible.

In my view, although multiple issues demand action, climate change is the most critical because it amplifies other global crises.`,
    vocabulary: [
      { term: 'Pressing issue', definition: 'urgent problem' },
      { term: 'Far-reaching', definition: 'widespread and long-term' },
      { term: 'Intensifies', definition: 'makes stronger' },
      { term: 'Irreversible', definition: 'cannot be undone' },
    ],
    structureBreakdown: [
      'Introduction: Balanced paraphrase',
      'Body 1: First view',
      'Body 2: Second view + opinion',
      'Conclusion: Clear stance',
    ],
    whyHighScore: [
      'Balanced discussion',
      'Clear opinion',
      'Strong logical connections',
      'Academic tone',
    ],
  },
  {
    id: 3,
    category: 'Government Spending',
    topic: 'Governments should spend more money on public transport than on roads. Discuss both views and give your opinion.',
    modelAnswer: `The allocation of public funds is a contentious issue. Some argue that governments should prioritise public transport over road construction. I agree that greater investment in public transport yields more long-term benefits.

Proponents of road expansion claim that improved highways reduce congestion and facilitate trade. Efficient road networks are essential for economic development and logistics.

However, excessive reliance on private vehicles contributes to pollution and traffic congestion. Investing in reliable public transport reduces carbon emissions, promotes social equality, and alleviates urban overcrowding. Metro systems and bus networks provide sustainable mobility for growing populations.

Therefore, although roads remain necessary, prioritising public transport is a more forward-thinking strategy.`,
    vocabulary: [
      { term: 'Allocation', definition: 'distribution' },
      { term: 'Contentious', definition: 'controversial' },
      { term: 'Alleviates', definition: 'reduces' },
      { term: 'Sustainable mobility', definition: 'environmentally friendly transportation' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Opposing argument',
      'Body 2: Main argument',
      'Conclusion: Reaffirm position',
    ],
    whyHighScore: [
      'Clear argumentation',
      'Strong coherence',
      'Advanced lexical resource',
      'Balanced reasoning',
    ],
  },
  {
    id: 4,
    category: 'Health',
    topic: 'Some people think governments should tax unhealthy food. Do you agree or disagree?',
    modelAnswer: `Rising obesity rates have prompted debate about whether governments should impose taxes on unhealthy food. I agree that taxation can be an effective measure, provided it is implemented responsibly.

Firstly, higher prices discourage excessive consumption of sugary beverages and processed snacks. Evidence from various countries suggests that taxation reduces demand for harmful products.

Secondly, revenue generated from such taxes can fund public health campaigns and subsidise healthier alternatives. This creates a dual benefit: reducing health risks while promoting nutritional awareness.

However, governments must ensure that low-income groups are not disproportionately affected. Policies should be accompanied by education and affordable healthy options.

In conclusion, taxing unhealthy food is a justified public health strategy if designed carefully.`,
    vocabulary: [
      { term: 'Impose taxes', definition: 'officially apply taxes' },
      { term: 'Disproportionately', definition: 'unfairly affecting more' },
      { term: 'Subsidise', definition: 'financially support' },
      { term: 'Public health campaign', definition: 'organised effort to improve health' },
    ],
    structureBreakdown: [
      'Introduction: Opinion',
      'Body 1: Reason 1',
      'Body 2: Reason 2 + condition',
      'Conclusion',
    ],
    whyHighScore: [
      'Direct response to question',
      'Logical idea development',
      'Clear cohesion',
      'Sophisticated yet natural vocabulary',
    ],
  },
  {
    id: 5,
    category: 'Society',
    topic: 'Social media has a negative impact on young people. To what extent do you agree or disagree?',
    modelAnswer: `The rapid growth of social media has transformed communication patterns, particularly among young people. While these platforms offer connectivity and information sharing, I largely agree that their overall impact is negative.

Excessive social media use is linked to anxiety, reduced self-esteem, and unrealistic comparisons. Constant exposure to curated lifestyles creates psychological pressure and dissatisfaction.

Moreover, online platforms can reduce face-to-face interaction, weakening interpersonal skills. Cyberbullying and misinformation further exacerbate social harm.

Nevertheless, when used responsibly, social media can foster creativity and global awareness. The issue lies not in the technology itself but in its overuse.

Overall, despite certain benefits, the drawbacks outweigh the advantages for many young users.`,
    vocabulary: [
      { term: 'Curated lifestyles', definition: 'carefully presented lives' },
      { term: 'Interpersonal skills', definition: 'social communication abilities' },
      { term: 'Exacerbate', definition: 'worsen' },
      { term: 'Drawbacks', definition: 'disadvantages' },
    ],
    structureBreakdown: [
      'Introduction: Balanced but clear position',
      'Body 1: Psychological effects',
      'Body 2: Social consequences',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear argument',
      'Strong lexical range',
      'Complex sentences',
      'Coherent progression',
    ],
  },
  {
    id: 6,
    category: 'Online Education',
    topic: 'Online education is becoming more popular than traditional classroom education. Discuss the advantages and disadvantages.',
    modelAnswer: `Online education has experienced exponential growth in recent years. While it offers considerable flexibility and accessibility, it also presents notable challenges. This essay will examine both the advantages and disadvantages of this trend.

One significant advantage of online learning is flexibility. Students can access lectures at any time and study at their own pace. This is particularly beneficial for working professionals and individuals living in remote areas. Additionally, online courses often cost less than traditional programs, making education more affordable.

However, online education lacks direct human interaction. Face-to-face communication fosters deeper engagement and immediate feedback. Moreover, many students struggle with self-discipline in virtual environments, leading to procrastination and reduced academic performance.

In conclusion, although online education increases accessibility and convenience, it cannot fully replicate the interactive and structured nature of classroom learning.`,
    vocabulary: [
      { term: 'Exponential growth', definition: 'rapid increase' },
      { term: 'Accessibility', definition: 'ease of access' },
      { term: 'Fosters', definition: 'encourages development' },
      { term: 'Procrastination', definition: 'delaying tasks' },
    ],
    structureBreakdown: [
      'Introduction: Paraphrase + essay outline',
      'Body 1: Advantages',
      'Body 2: Disadvantages',
      'Conclusion: Balanced summary',
    ],
    whyHighScore: [
      'Fully answers discuss question',
      'Balanced coverage',
      'Clear paragraph unity',
      'Advanced vocabulary used naturally',
    ],
  },
  {
    id: 7,
    category: 'Free University Education',
    topic: 'Some people believe university education should be free for everyone. To what extent do you agree or disagree?',
    modelAnswer: `The rising cost of higher education has sparked debate about whether university should be free for all citizens. While free education promotes equality, I believe it should be subsidised rather than entirely free.

Free university education ensures equal opportunities regardless of socioeconomic background. Talented students from disadvantaged families would have access to academic advancement, reducing social inequality.

However, completely free education places a significant financial burden on governments. Funding universities requires substantial public expenditure, which may lead to higher taxes or reduced investment in other essential services such as healthcare.

In my view, governments should provide partial funding or scholarships for those in need while maintaining reasonable tuition fees. This balanced approach promotes accessibility without overwhelming public finances.`,
    vocabulary: [
      { term: 'Socioeconomic background', definition: 'social and economic status' },
      { term: 'Disadvantaged', definition: 'underprivileged' },
      { term: 'Substantial expenditure', definition: 'large spending' },
      { term: 'Subsidised', definition: 'partly financially supported' },
    ],
    structureBreakdown: [
      'Introduction: Clear stance',
      'Body 1: Benefits',
      'Body 2: Drawbacks',
      'Conclusion: Balanced solution',
    ],
    whyHighScore: [
      'Clear opinion maintained',
      'Well-developed arguments',
      'Logical flow',
      'Appropriate academic tone',
    ],
  },
  {
    id: 8,
    category: 'Automation and Jobs',
    topic: 'Automation will replace many jobs in the future. Is this a positive or negative development?',
    modelAnswer: `Rapid technological advancement has accelerated automation across various industries. While some fear widespread unemployment, I believe automation represents a largely positive development if managed effectively.

Automation increases efficiency and productivity. Machines can perform repetitive tasks with precision, reducing human error and lowering operational costs. This can lead to economic growth and cheaper products for consumers.

However, automation may displace low-skilled workers. Without adequate retraining programs, unemployment rates could rise, exacerbating social inequality. Governments must invest in reskilling initiatives to prepare workers for emerging industries.

Overall, although automation presents short-term challenges, its long-term economic and technological benefits outweigh the drawbacks.`,
    vocabulary: [
      { term: 'Accelerated', definition: 'increased speed' },
      { term: 'Displace', definition: 'replace' },
      { term: 'Exacerbating', definition: 'worsening' },
      { term: 'Reskilling initiatives', definition: 'training programs' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Positive impacts',
      'Body 2: Negative impacts + solution',
      'Conclusion: Overall evaluation',
    ],
    whyHighScore: [
      'Clear position',
      'Strong examples',
      'Advanced vocabulary',
      'Complex sentence structures',
    ],
  },
  {
    id: 9,
    category: 'Crime and Punishment',
    topic: 'Some people believe that longer prison sentences are the best way to reduce crime. Discuss both views and give your opinion.',
    modelAnswer: `The effectiveness of longer prison sentences in reducing crime remains a contentious issue. While some argue that harsh penalties deter criminal behaviour, others believe rehabilitation is more effective. I support the latter view.

Proponents of extended sentences claim that severe punishment discourages potential offenders. The fear of imprisonment may act as a powerful deterrent.

However, evidence suggests that rehabilitation programs reduce reoffending rates more effectively than extended incarceration. Educational courses and vocational training help offenders reintegrate into society and secure employment upon release.

In my opinion, while punishment is necessary, rehabilitation offers a more sustainable solution to crime reduction.`,
    vocabulary: [
      { term: 'Contentious issue', definition: 'controversial topic' },
      { term: 'Deterrent', definition: 'something that discourages' },
      { term: 'Incarceration', definition: 'imprisonment' },
      { term: 'Reintegrate', definition: 'return to society' },
    ],
    structureBreakdown: [
      'Introduction: Both views + opinion',
      'Body 1: First view',
      'Body 2: Second view + support',
      'Conclusion',
    ],
    whyHighScore: [
      'Balanced discussion',
      'Clear opinion',
      'Logical development',
      'Strong academic vocabulary',
    ],
  },
  {
    id: 10,
    category: 'Urbanisation',
    topic: 'More people are moving to cities than ever before. What are the advantages and disadvantages of this trend?',
    modelAnswer: `Urbanisation has accelerated significantly in recent decades. While cities offer economic and social opportunities, rapid population growth also creates serious challenges.

One major advantage of urban living is employment availability. Cities serve as economic hubs, providing diverse career prospects and higher wages. Furthermore, urban areas typically offer better healthcare, education, and infrastructure.

Conversely, overpopulation strains housing systems and public services. Rising property prices make accommodation unaffordable for many residents. Additionally, traffic congestion and air pollution diminish quality of life.

In conclusion, although urbanisation generates economic growth, it must be managed carefully to mitigate environmental and social consequences.`,
    vocabulary: [
      { term: 'Economic hubs', definition: 'centers of business activity' },
      { term: 'Strains', definition: 'puts pressure on' },
      { term: 'Diminish', definition: 'reduce' },
      { term: 'Mitigate', definition: 'reduce negative impact' },
    ],
    structureBreakdown: [
      'Introduction',
      'Body 1: Advantages',
      'Body 2: Disadvantages',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear organization',
      'Balanced coverage',
      'Precise vocabulary',
      'Cohesive linking devices',
    ],
  },
  {
    id: 11,
    category: 'Plastic Pollution',
    topic: 'Plastic pollution has become a major environmental problem. What are the causes of this issue and what solutions can be implemented?',
    modelAnswer: `Plastic pollution has emerged as one of the most pressing environmental challenges of the 21st century. This problem stems primarily from excessive consumption and inadequate waste management, and it requires coordinated global action.

One major cause is the widespread use of single-use plastics. Products such as plastic bags, bottles, and packaging are designed for convenience but are often discarded after minimal use. Furthermore, many countries lack efficient recycling infrastructure, resulting in vast quantities of plastic waste entering oceans and landfills.

To address this issue, governments should implement stricter regulations on plastic production and promote biodegradable alternatives. Public awareness campaigns can also encourage responsible consumption. Additionally, investing in advanced recycling technologies would significantly reduce environmental contamination.

In conclusion, plastic pollution is largely driven by consumer behaviour and weak waste management systems. Through regulatory reform and public education, this environmental crisis can be mitigated.`,
    vocabulary: [
      { term: 'Emerged', definition: 'become apparent' },
      { term: 'Single-use plastics', definition: 'disposable plastic products' },
      { term: 'Infrastructure', definition: 'basic systems and structures' },
      { term: 'Biodegradable alternatives', definition: 'materials that decompose naturally' },
      { term: 'Mitigated', definition: 'reduced in severity' },
    ],
    structureBreakdown: [
      'Introduction: Problem + outline',
      'Body 1: Causes',
      'Body 2: Solutions',
      'Conclusion: Summary + evaluation',
    ],
    whyHighScore: [
      'Directly answers both parts of the question',
      'Logical progression',
      'Clear topic sentences',
      'Precise environmental vocabulary',
      'Formal academic tone',
    ],
  },
  {
    id: 12,
    category: 'Renewable Energy',
    topic: 'Some people argue that governments should invest heavily in renewable energy instead of fossil fuels. To what extent do you agree or disagree?',
    modelAnswer: `The debate over energy investment has intensified as environmental concerns grow. I strongly agree that governments should prioritise renewable energy over fossil fuels.

Fossil fuels, while historically essential for industrial development, are finite and contribute significantly to climate change. Carbon emissions from coal and oil are major drivers of global warming, leading to extreme weather events and rising sea levels.

In contrast, renewable energy sources such as solar and wind power are sustainable and environmentally friendly. Although initial installation costs may be high, long-term benefits include reduced pollution, energy independence, and economic innovation.

Therefore, shifting investment towards renewable energy is not only environmentally responsible but also economically strategic.`,
    vocabulary: [
      { term: 'Finite', definition: 'limited in supply' },
      { term: 'Carbon emissions', definition: 'greenhouse gases released' },
      { term: 'Sustainable', definition: 'able to continue long-term' },
      { term: 'Energy independence', definition: 'reduced reliance on imports' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Problems with fossil fuels',
      'Body 2: Benefits of renewable energy',
      'Conclusion: Restated position',
    ],
    whyHighScore: [
      'Strong clear stance',
      'Logical comparison',
      'Well-developed argument',
      'Advanced academic vocabulary',
    ],
  },
  {
    id: 13,
    category: 'Urban Green Spaces',
    topic: 'Cities should create more public parks and green spaces. Do the advantages outweigh the disadvantages?',
    modelAnswer: `As urban populations expand, the allocation of land for public parks has become a contentious issue. In my view, the advantages of increasing green spaces far outweigh any potential drawbacks.

Green spaces provide numerous environmental benefits. They improve air quality, reduce urban heat, and support biodiversity. Furthermore, parks promote physical activity and mental well-being among residents.

Critics argue that allocating land for parks may limit commercial development. However, sustainable urban planning can balance economic growth with environmental preservation. In fact, attractive green areas often increase property values and tourism.

Overall, the environmental and social benefits of public parks clearly surpass the disadvantages.`,
    vocabulary: [
      { term: 'Allocation', definition: 'distribution' },
      { term: 'Biodiversity', definition: 'variety of plant and animal life' },
      { term: 'Urban heat', definition: 'higher temperatures in cities' },
      { term: 'Preservation', definition: 'protection' },
    ],
    structureBreakdown: [
      'Introduction: Opinion',
      'Body 1: Advantages',
      'Body 2: Counterargument + rebuttal',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear evaluation',
      'Balanced discussion',
      'Strong coherence',
      'Varied complex sentences',
    ],
  },
  {
    id: 14,
    category: 'Individual vs Government Responsibility',
    topic: 'Some people believe environmental protection is the responsibility of individuals, while others think it is the government\'s duty. Discuss both views and give your opinion.',
    modelAnswer: `Environmental protection is a shared global concern, yet opinions differ regarding responsibility. While individuals play an important role, I believe governments hold greater accountability.

Individuals can reduce waste, conserve energy, and adopt sustainable lifestyles. Personal choices such as recycling and reducing plastic use contribute positively to environmental preservation.

However, large-scale environmental policies require governmental authority. Regulations on industrial emissions, renewable energy subsidies, and international environmental agreements can only be implemented by national authorities.

In conclusion, although individuals must act responsibly, governments possess the legislative power necessary to enact meaningful environmental change.`,
    vocabulary: [
      { term: 'Accountability', definition: 'responsibility' },
      { term: 'Sustainable lifestyles', definition: 'environmentally friendly living' },
      { term: 'Industrial emissions', definition: 'pollution from factories' },
      { term: 'Legislative power', definition: 'authority to make laws' },
    ],
    structureBreakdown: [
      'Introduction: Both views + opinion',
      'Body 1: Individual responsibility',
      'Body 2: Government responsibility + opinion',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear opinion maintained',
      'Balanced discussion',
      'Logical paragraph structure',
      'Accurate grammar',
    ],
  },
  {
    id: 15,
    category: 'Car-Free Cities',
    topic: 'Some cities are banning private cars from city centres. Is this a positive or negative development?',
    modelAnswer: `In response to increasing traffic congestion and pollution, several cities have restricted private vehicles in urban centres. I consider this a largely positive development.

Firstly, reducing private car usage significantly lowers air pollution and carbon emissions. Improved air quality benefits public health and decreases respiratory illnesses.

Secondly, car-free zones encourage the use of public transport, cycling, and walking. This promotes healthier lifestyles and reduces traffic congestion. Moreover, pedestrian-friendly environments often stimulate local businesses.

Admittedly, such policies may inconvenience commuters. However, the long-term environmental and social advantages outweigh temporary disruptions.

In conclusion, banning private cars in city centres is a forward-thinking policy that enhances sustainability and quality of life.`,
    vocabulary: [
      { term: 'Congestion', definition: 'traffic overcrowding' },
      { term: 'Carbon emissions', definition: 'greenhouse gases' },
      { term: 'Pedestrian-friendly', definition: 'designed for walkers' },
      { term: 'Forward-thinking', definition: 'progressive' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Environmental benefits',
      'Body 2: Social benefits + minor drawback',
      'Conclusion',
    ],
    whyHighScore: [
      'Direct response',
      'Clear logical flow',
      'Well-developed ideas',
      'Strong academic vocabulary',
    ],
  },
  {
    id: 16,
    category: 'Remote Work',
    topic: 'Remote working is becoming increasingly common. Is this a positive or negative development?',
    modelAnswer: `The rise of digital technology has enabled remote working to become a widespread practice. While this shift presents certain challenges, I believe it is largely a positive development.

One significant advantage of remote work is flexibility. Employees can structure their schedules more efficiently, leading to improved work-life balance. Furthermore, companies can reduce operational costs by minimising office space and utilities. This financial efficiency can increase profitability and productivity.

However, remote work may reduce face-to-face collaboration. The absence of direct interaction can hinder team cohesion and spontaneous idea exchange. Additionally, some individuals struggle with self-discipline in home environments.

Overall, despite minor drawbacks, remote working enhances flexibility and economic efficiency, making it a beneficial modern trend.`,
    vocabulary: [
      { term: 'Widespread practice', definition: 'commonly adopted system' },
      { term: 'Work-life balance', definition: 'balance between job and personal life' },
      { term: 'Operational costs', definition: 'business expenses' },
      { term: 'Team cohesion', definition: 'unity among colleagues' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Advantages',
      'Body 2: Disadvantages',
      'Conclusion: Overall evaluation',
    ],
    whyHighScore: [
      'Clear position',
      'Balanced discussion',
      'Strong lexical resource',
      'Complex grammatical structures',
    ],
  },
  {
    id: 17,
    category: 'Globalisation',
    topic: 'Globalisation has both positive and negative effects on society. Discuss both views and give your opinion.',
    modelAnswer: `Globalisation has transformed economies and cultures worldwide. While it has facilitated economic growth and cultural exchange, it has also generated social and economic inequalities. In my opinion, its advantages outweigh its disadvantages.

On the positive side, globalisation promotes international trade and investment. Countries can specialise in industries where they hold comparative advantages, increasing efficiency and lowering consumer prices. Cultural exchange also broadens perspectives and fosters mutual understanding.

Conversely, globalisation can widen income inequality and threaten local industries. Small businesses may struggle to compete with multinational corporations, leading to job displacement.

Nevertheless, with appropriate regulation and fair trade policies, the benefits of globalisation can be maximised while minimising its drawbacks.`,
    vocabulary: [
      { term: 'Facilitated', definition: 'made easier' },
      { term: 'Comparative advantages', definition: 'economic strengths' },
      { term: 'Multinational corporations', definition: 'large international companies' },
      { term: 'Maximised', definition: 'increased to the greatest extent' },
    ],
    structureBreakdown: [
      'Introduction: Both views + opinion',
      'Body 1: Benefits',
      'Body 2: Drawbacks',
      'Conclusion: Evaluation',
    ],
    whyHighScore: [
      'Balanced discussion',
      'Clear stance',
      'Strong economic vocabulary',
      'Logical paragraph sequencing',
    ],
  },
  {
    id: 18,
    category: 'Minimum Wage',
    topic: 'Some people believe raising the minimum wage is the best way to reduce poverty. To what extent do you agree or disagree?',
    modelAnswer: `Addressing poverty remains a priority for many governments. While increasing the minimum wage can alleviate financial hardship, I believe it should be combined with broader social policies.

Higher wages improve living standards for low-income workers, enabling them to afford housing, healthcare, and education. This can reduce income inequality and stimulate consumer spending.

However, excessively raising wages may burden small businesses and lead to job losses. Employers facing increased labour costs might reduce hiring or automate tasks.

In conclusion, although raising the minimum wage can contribute to poverty reduction, it must be implemented alongside employment support and economic reforms.`,
    vocabulary: [
      { term: 'Alleviate', definition: 'reduce' },
      { term: 'Income inequality', definition: 'unequal earnings distribution' },
      { term: 'Labour costs', definition: 'employee expenses' },
      { term: 'Economic reforms', definition: 'policy changes' },
    ],
    structureBreakdown: [
      'Introduction: Qualified opinion',
      'Body 1: Benefits',
      'Body 2: Risks',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear evaluation',
      'Well-developed reasoning',
      'Balanced perspective',
      'Advanced vocabulary',
    ],
  },
  {
    id: 19,
    category: 'Job Satisfaction vs Salary',
    topic: 'Some people believe job satisfaction is more important than salary. Do you agree or disagree?',
    modelAnswer: `Choosing a career often involves balancing financial rewards and personal fulfilment. While salary is undeniably important, I agree that job satisfaction plays a more crucial role in long-term well-being.

Individuals who enjoy their work are generally more motivated and productive. Personal fulfilment fosters creativity, commitment, and mental stability. In contrast, high-paying jobs that generate stress or dissatisfaction may lead to burnout.

Nevertheless, adequate income remains essential for financial security. Without sufficient earnings, even satisfying work can become stressful.

Overall, although salary provides stability, job satisfaction has a more profound impact on overall happiness and career longevity.`,
    vocabulary: [
      { term: 'Personal fulfilment', definition: 'sense of satisfaction' },
      { term: 'Burnout', definition: 'extreme exhaustion from work' },
      { term: 'Career longevity', definition: 'long-term career sustainability' },
      { term: 'Financial security', definition: 'stable financial condition' },
    ],
    structureBreakdown: [
      'Introduction: Clear position',
      'Body 1: Importance of satisfaction',
      'Body 2: Importance of salary',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear opinion',
      'Strong coherence',
      'Mature argument development',
      'Natural academic tone',
    ],
  },
  {
    id: 20,
    category: 'Entrepreneurship',
    topic: 'More people are choosing to start their own businesses rather than work for companies. Why is this happening? Is it a positive development?',
    modelAnswer: `Entrepreneurship has become increasingly attractive in modern economies. This shift is largely driven by technological innovation and a desire for independence, and it represents a positive trend overall.

Advancements in digital platforms allow individuals to launch businesses with minimal capital. Online marketplaces and social media marketing have lowered entry barriers. Additionally, many professionals seek autonomy and flexible working conditions.

However, entrepreneurship carries significant risks. New businesses often face financial instability and high failure rates. Despite these challenges, successful enterprises generate employment and stimulate economic growth.

In conclusion, while entrepreneurship involves uncertainty, it fosters innovation and economic dynamism, making it a beneficial development.`,
    vocabulary: [
      { term: 'Autonomy', definition: 'independence' },
      { term: 'Entry barriers', definition: 'obstacles to starting' },
      { term: 'Financial instability', definition: 'unpredictable income' },
      { term: 'Economic dynamism', definition: 'active economic growth' },
    ],
    structureBreakdown: [
      'Introduction: Causes + opinion',
      'Body 1: Reasons',
      'Body 2: Evaluation',
      'Conclusion',
    ],
    whyHighScore: [
      'Answers both parts clearly',
      'Logical development',
      'Advanced vocabulary',
      'Strong coherence',
    ],
  },
  {
    id: 21,
    category: 'Public vs Private Healthcare',
    topic: 'Some people believe healthcare should be provided free of charge by the government, while others think individuals should pay for their own medical treatment. Discuss both views and give your opinion.',
    modelAnswer: `The question of healthcare funding remains a highly debated issue worldwide. While some argue that governments should provide free medical services, others believe individuals must bear the cost of their treatment. In my opinion, basic healthcare should be publicly funded, although private options may coexist.

Supporters of universal healthcare claim that access to medical treatment is a fundamental human right. Free healthcare ensures that low-income citizens receive essential treatment without financial hardship. Moreover, preventive care reduces long-term healthcare costs by addressing illnesses early.

Conversely, critics argue that free systems may become overburdened and inefficient. Long waiting times and limited resources can compromise service quality. Private healthcare, funded by individuals, often offers faster and more specialised treatment.

Overall, while private healthcare has advantages, governments should guarantee free basic medical services to ensure equality and public well-being.`,
    vocabulary: [
      { term: 'Universal healthcare', definition: 'government-funded medical services' },
      { term: 'Financial hardship', definition: 'economic difficulty' },
      { term: 'Overburdened', definition: 'excessively pressured' },
      { term: 'Preventive care', definition: 'treatment to stop illness early' },
    ],
    structureBreakdown: [
      'Introduction: Both views + opinion',
      'Body 1: Free healthcare benefits',
      'Body 2: Private healthcare argument',
      'Conclusion: Clear stance',
    ],
    whyHighScore: [
      'Balanced discussion',
      'Clear opinion maintained',
      'Logical paragraph structure',
      'Strong academic vocabulary',
    ],
  },
  {
    id: 22,
    category: 'Fast Food Regulation',
    topic: 'Governments should regulate the sale of fast food to improve public health. Do you agree or disagree?',
    modelAnswer: `The increasing prevalence of obesity has led to calls for stricter regulation of fast food sales. I agree that government intervention can play a significant role in improving public health.

Fast food is typically high in sugar, salt, and saturated fats, contributing to obesity and cardiovascular diseases. By limiting advertising, particularly to children, governments can reduce unhealthy consumption patterns. Taxation on unhealthy products can also discourage excessive intake.

However, personal responsibility must not be overlooked. Individuals ultimately choose what they consume. Education campaigns promoting balanced diets are equally important.

In conclusion, while individuals should make responsible choices, government regulation is a necessary measure to combat rising health problems.`,
    vocabulary: [
      { term: 'Prevalence', definition: 'widespread occurrence' },
      { term: 'Cardiovascular diseases', definition: 'heart-related illnesses' },
      { term: 'Taxation', definition: 'government-imposed charges' },
      { term: 'Combat', definition: 'fight against' },
    ],
    structureBreakdown: [
      'Introduction: Clear agreement',
      'Body 1: Reasons for regulation',
      'Body 2: Acknowledgement of personal responsibility',
      'Conclusion',
    ],
    whyHighScore: [
      'Direct answer',
      'Balanced reasoning',
      'Clear cohesion',
      'Sophisticated vocabulary',
    ],
  },
  {
    id: 23,
    category: 'Mental Health Awareness',
    topic: 'Mental health is as important as physical health. Discuss the importance of mental health awareness in modern society.',
    modelAnswer: `In recent years, mental health has gained increased recognition as a critical component of overall well-being. Raising awareness about psychological health is essential in modern society.

Firstly, mental health disorders such as depression and anxiety affect millions worldwide. Early detection and intervention significantly improve recovery outcomes. Public awareness reduces stigma, encouraging individuals to seek professional help without fear of judgment.

Secondly, workplace stress and academic pressure have intensified in contemporary life. Promoting mental health education equips individuals with coping strategies and resilience skills.

In conclusion, enhancing mental health awareness not only improves individual quality of life but also strengthens societal productivity and stability.`,
    vocabulary: [
      { term: 'Recognition', definition: 'acknowledgment' },
      { term: 'Stigma', definition: 'social disapproval' },
      { term: 'Intervention', definition: 'action taken to improve a situation' },
      { term: 'Resilience', definition: 'ability to recover from difficulty' },
    ],
    structureBreakdown: [
      'Introduction',
      'Body 1: Importance for individuals',
      'Body 2: Importance for society',
      'Conclusion',
    ],
    whyHighScore: [
      'Fully developed ideas',
      'Clear organisation',
      'Advanced lexical range',
      'Accurate complex grammar',
    ],
  },
  {
    id: 24,
    category: 'Sports in Schools',
    topic: 'Physical education should be a compulsory subject in schools. To what extent do you agree or disagree?',
    modelAnswer: `The role of physical education in academic institutions remains a subject of debate. I strongly agree that it should be compulsory.

Regular physical activity improves cardiovascular health, strengthens muscles, and reduces the risk of obesity. Furthermore, sports encourage teamwork, discipline, and leadership skills. These qualities contribute to holistic development.

Some argue that academic subjects deserve greater priority due to competitive educational environments. However, neglecting physical health may negatively affect academic performance, as exercise enhances concentration and cognitive function.

Therefore, physical education is essential for both physical and intellectual development and should remain mandatory.`,
    vocabulary: [
      { term: 'Compulsory', definition: 'mandatory' },
      { term: 'Holistic development', definition: 'overall growth' },
      { term: 'Cognitive function', definition: 'mental ability' },
      { term: 'Neglecting', definition: 'failing to care for' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Health benefits',
      'Body 2: Academic counterargument + rebuttal',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear stance',
      'Strong supporting arguments',
      'Logical progression',
      'Varied sentence structures',
    ],
  },
  {
    id: 25,
    category: 'Preventive Healthcare',
    topic: 'Prevention is better than cure. Governments should invest more in preventive healthcare rather than treatment. Discuss both views and give your opinion.',
    modelAnswer: `The allocation of healthcare funding often sparks debate between prevention and treatment. While medical treatment is indispensable, I believe governments should prioritise preventive healthcare.

Preventive measures such as vaccination programs, health screenings, and public education campaigns reduce the incidence of serious diseases. Early intervention lowers long-term medical costs and improves life expectancy.

Nevertheless, treatment remains essential for individuals already suffering from illness. Advanced medical technologies save lives and alleviate suffering.

In my view, although treatment cannot be neglected, investing more heavily in prevention offers greater long-term societal benefits.`,
    vocabulary: [
      { term: 'Indispensable', definition: 'absolutely necessary' },
      { term: 'Incidence', definition: 'rate of occurrence' },
      { term: 'Life expectancy', definition: 'average lifespan' },
      { term: 'Alleviate', definition: 'reduce suffering' },
    ],
    structureBreakdown: [
      'Introduction: Both views + opinion',
      'Body 1: Prevention benefits',
      'Body 2: Treatment importance',
      'Conclusion',
    ],
    whyHighScore: [
      'Balanced analysis',
      'Clear opinion',
      'Strong logical structure',
      'Academic vocabulary precision',
    ],
  },
  {
    id: 26,
    category: 'Social Media and Relationships',
    topic: 'Social media has changed the way people communicate and maintain relationships. Is this a positive or negative development?',
    modelAnswer: `The emergence of social media platforms has fundamentally transformed interpersonal communication. While these platforms facilitate instant connectivity, I believe their overall impact on relationships is largely negative.

On the positive side, social media enables individuals to maintain long-distance relationships and reconnect with old acquaintances. Instant messaging and video calls allow families and friends to remain in regular contact despite geographical barriers.

However, excessive reliance on digital communication may weaken face-to-face interactions. Online exchanges often lack emotional depth and non-verbal cues, which are essential for meaningful relationships. Furthermore, curated online identities can create unrealistic comparisons and feelings of inadequacy.

In conclusion, although social media enhances accessibility, its overuse may erode authentic human connection.`,
    vocabulary: [
      { term: 'Interpersonal communication', definition: 'communication between people' },
      { term: 'Geographical barriers', definition: 'physical distance obstacles' },
      { term: 'Non-verbal cues', definition: 'body language signals' },
      { term: 'Erode', definition: 'gradually weaken' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Advantages',
      'Body 2: Disadvantages',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear position',
      'Balanced evaluation',
      'Logical development',
      'Sophisticated vocabulary',
    ],
  },
  {
    id: 27,
    category: 'Advertising Influence',
    topic: 'Advertising influences the way people buy products. To what extent do you agree or disagree?',
    modelAnswer: `Advertising plays a significant role in modern consumer culture. I strongly agree that it heavily influences purchasing decisions.

Firstly, advertisements create brand awareness and shape consumer preferences. Through persuasive techniques and emotional appeals, companies associate products with desirable lifestyles. This psychological influence often drives impulsive purchases.

Moreover, targeted digital advertising uses data analytics to personalise content. Consumers are frequently exposed to products aligned with their interests, increasing the likelihood of purchase.

Although some individuals claim to make independent decisions, advertising subtly shapes perceptions and desires. Therefore, its impact on consumer behaviour is substantial.`,
    vocabulary: [
      { term: 'Consumer culture', definition: 'society focused on buying goods' },
      { term: 'Persuasive techniques', definition: 'convincing methods' },
      { term: 'Impulsive purchases', definition: 'unplanned buying' },
      { term: 'Subtly', definition: 'in a gradual or indirect way' },
    ],
    structureBreakdown: [
      'Introduction: Clear agreement',
      'Body 1: Psychological influence',
      'Body 2: Digital targeting',
      'Conclusion',
    ],
    whyHighScore: [
      'Direct task response',
      'Strong explanation',
      'Clear cohesion',
      'Varied vocabulary',
    ],
  },
  {
    id: 28,
    category: 'Ageing Population',
    topic: 'Many countries are experiencing an ageing population. What problems does this cause and what solutions can be suggested?',
    modelAnswer: `The global demographic shift towards an ageing population presents serious social and economic challenges. These challenges primarily involve healthcare costs and workforce shortages, and they require strategic policy responses.

One major problem is increased pressure on healthcare systems. Elderly individuals typically require more medical care, leading to rising public expenditure. Additionally, a shrinking workforce means fewer taxpayers to support pension systems.

To address these issues, governments could encourage later retirement and promote lifelong learning to keep older adults economically active. Immigration policies may also help replenish the workforce.

In conclusion, while an ageing population poses significant difficulties, proactive planning can mitigate its negative effects.`,
    vocabulary: [
      { term: 'Demographic shift', definition: 'change in population structure' },
      { term: 'Public expenditure', definition: 'government spending' },
      { term: 'Workforce shortages', definition: 'lack of workers' },
      { term: 'Mitigate', definition: 'reduce impact' },
    ],
    structureBreakdown: [
      'Introduction: Problems + outline',
      'Body 1: Problems',
      'Body 2: Solutions',
      'Conclusion',
    ],
    whyHighScore: [
      'Fully answers both parts',
      'Logical sequencing',
      'Clear topic sentences',
      'Advanced economic vocabulary',
    ],
  },
  {
    id: 29,
    category: 'Cultural Traditions',
    topic: 'Globalisation is causing the loss of traditional cultures. Is this a positive or negative development?',
    modelAnswer: `Globalisation has facilitated cultural exchange across borders, yet it has also contributed to the erosion of traditional customs. In my opinion, this trend is largely negative.

Traditional cultures represent historical identity and collective heritage. The disappearance of indigenous languages and customs diminishes cultural diversity. Homogenisation of lifestyles can result in the dominance of a few global cultures.

However, globalisation also promotes cross-cultural understanding and economic cooperation. Exposure to diverse ideas may encourage innovation.

Despite these advantages, preserving cultural heritage is essential for maintaining social identity and historical continuity.`,
    vocabulary: [
      { term: 'Erosion', definition: 'gradual decline' },
      { term: 'Indigenous', definition: 'native' },
      { term: 'Homogenisation', definition: 'making uniform' },
      { term: 'Cultural heritage', definition: 'traditions and history' },
    ],
    structureBreakdown: [
      'Introduction: Clear stance',
      'Body 1: Negative impacts',
      'Body 2: Positive impacts',
      'Conclusion',
    ],
    whyHighScore: [
      'Balanced argument',
      'Clear opinion',
      'Strong cohesion',
      'Advanced lexical range',
    ],
  },
  {
    id: 30,
    category: 'Crime and Youth Behaviour',
    topic: 'Some people believe young people commit crimes because of lack of discipline at home. Do you agree or disagree?',
    modelAnswer: `Juvenile delinquency remains a serious concern in many societies. While family environment plays a crucial role, I believe youth crime is influenced by multiple factors rather than solely parental discipline.

It is true that inadequate supervision and inconsistent parenting may contribute to behavioural problems. Children raised in unstable households may lack moral guidance and emotional support.

However, peer pressure, socioeconomic conditions, and exposure to violence also significantly influence youth behaviour. Poverty and limited educational opportunities can push adolescents toward criminal activities.

Therefore, while family discipline is important, addressing broader social factors is equally necessary to reduce youth crime.`,
    vocabulary: [
      { term: 'Juvenile delinquency', definition: 'youth crime' },
      { term: 'Inadequate supervision', definition: 'insufficient monitoring' },
      { term: 'Socioeconomic conditions', definition: 'economic and social circumstances' },
      { term: 'Adolescents', definition: 'teenagers' },
    ],
    structureBreakdown: [
      'Introduction: Qualified opinion',
      'Body 1: Family influence',
      'Body 2: Broader factors',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear evaluation',
      'Balanced reasoning',
      'Logical progression',
      'Strong academic language',
    ],
  },
  {
    id: 31,
    category: 'Artificial Intelligence and Employment',
    topic: 'Artificial Intelligence is expected to replace many human jobs. Do the advantages outweigh the disadvantages?',
    modelAnswer: `Artificial Intelligence (AI) is rapidly transforming industries worldwide. Although concerns about job displacement are valid, I believe the advantages of AI outweigh its disadvantages in the long term.

One major advantage is increased efficiency and productivity. AI systems can perform repetitive and data-intensive tasks with remarkable accuracy, reducing operational costs and human error. This allows businesses to innovate and expand more rapidly.

However, automation may lead to unemployment in certain sectors, particularly for low-skilled workers. Without effective retraining programs, this technological shift could widen income inequality.

Nevertheless, history demonstrates that technological revolutions create new industries and employment opportunities. With proper workforce adaptation, AI can enhance economic growth and improve living standards.

In conclusion, while AI presents short-term challenges, its long-term benefits surpass its drawbacks.`,
    vocabulary: [
      { term: 'Job displacement', definition: 'replacement of workers' },
      { term: 'Operational costs', definition: 'business expenses' },
      { term: 'Income inequality', definition: 'unequal wealth distribution' },
      { term: 'Workforce adaptation', definition: 'adjusting skills to new demands' },
    ],
    structureBreakdown: [
      'Introduction: Clear evaluation',
      'Body 1: Advantages',
      'Body 2: Disadvantages',
      'Conclusion',
    ],
    whyHighScore: [
      'Balanced evaluation',
      'Clear opinion',
      'Advanced vocabulary',
      'Logical progression',
    ],
  },
  {
    id: 32,
    category: 'Data Privacy',
    topic: 'Many people are concerned about the collection of personal data by companies. Is this a positive or negative development?',
    modelAnswer: `The collection of personal data has become increasingly prevalent in the digital era. While data gathering can improve services, I believe it poses significant risks to privacy and security.

On the positive side, companies use consumer data to personalise experiences and improve product recommendations. This enhances convenience and efficiency for users.

However, the misuse of personal information can result in identity theft, financial fraud, and loss of privacy. Moreover, many users are unaware of how their data is stored or shared.

Overall, although data collection offers certain conveniences, its potential threats to individual privacy make it a largely negative development.`,
    vocabulary: [
      { term: 'Prevalent', definition: 'widespread' },
      { term: 'Personalise', definition: 'tailor to individual needs' },
      { term: 'Identity theft', definition: 'stealing personal information' },
      { term: 'Misuse', definition: 'improper use' },
    ],
    structureBreakdown: [
      'Introduction: Clear position',
      'Body 1: Advantages',
      'Body 2: Disadvantages',
      'Conclusion',
    ],
    whyHighScore: [
      'Direct task response',
      'Logical development',
      'Clear paragraph focus',
      'Strong lexical precision',
    ],
  },
  {
    id: 33,
    category: 'Screen Time for Children',
    topic: 'Children today spend too much time on screens. What problems does this cause and what solutions can parents implement?',
    modelAnswer: `Excessive screen time has become a growing concern among parents and educators. This trend can negatively affect children's development, but practical solutions are available.

One major problem is reduced physical activity, leading to obesity and health issues. Additionally, prolonged screen exposure may impair attention span and social skills, as children engage less in face-to-face interaction.

To address this issue, parents should establish clear time limits and encourage outdoor activities. Educational programs can promote digital literacy while emphasising balanced usage.

In conclusion, although screens are an integral part of modern life, responsible regulation is essential to safeguard children's well-being.`,
    vocabulary: [
      { term: 'Excessive', definition: 'too much' },
      { term: 'Impair', definition: 'weaken' },
      { term: 'Digital literacy', definition: 'understanding technology' },
      { term: 'Safeguard', definition: 'protect' },
    ],
    structureBreakdown: [
      'Introduction',
      'Body 1: Problems',
      'Body 2: Solutions',
      'Conclusion',
    ],
    whyHighScore: [
      'Fully answers both parts',
      'Logical structure',
      'Clear explanation',
      'Appropriate vocabulary',
    ],
  },
  {
    id: 34,
    category: 'Space Exploration',
    topic: 'Governments should spend money on space exploration rather than solving problems on Earth. Discuss both views and give your opinion.',
    modelAnswer: `Public funding priorities often spark debate, particularly regarding space exploration. While some argue resources should focus exclusively on earthly problems, I believe space research remains valuable.

Critics contend that poverty, climate change, and healthcare demand immediate attention. Diverting funds to space programs may seem irresponsible when pressing social issues persist.

However, space exploration drives technological innovation and scientific discovery. Many everyday technologies, such as satellite communication and GPS systems, originated from space research. Furthermore, studying space enhances our understanding of Earth's climate systems.

In my view, governments should balance investment between solving terrestrial challenges and advancing space research.`,
    vocabulary: [
      { term: 'Public funding priorities', definition: 'government spending focus' },
      { term: 'Diverting funds', definition: 'redirecting money' },
      { term: 'Technological innovation', definition: 'new technological advances' },
      { term: 'Terrestrial', definition: 'relating to Earth' },
    ],
    structureBreakdown: [
      'Introduction: Both views + opinion',
      'Body 1: Argument against space spending',
      'Body 2: Argument for space exploration',
      'Conclusion',
    ],
    whyHighScore: [
      'Balanced discussion',
      'Clear personal opinion',
      'Strong coherence',
      'Varied sentence complexity',
    ],
  },
  {
    id: 35,
    category: 'E-books vs Printed Books',
    topic: 'E-books are replacing printed books. Is this a positive or negative development?',
    modelAnswer: `The increasing popularity of digital reading devices has led to a decline in printed book sales. Although this shift offers convenience, its overall impact is mixed.

E-books provide portability and accessibility. Readers can store thousands of titles on a single device, reducing physical storage needs. Digital books are often more affordable and environmentally friendly.

However, printed books offer tactile engagement and reduced screen exposure, which may enhance comprehension. Furthermore, the publishing industry and traditional bookstores may suffer economic losses.

Overall, while digital reading offers practical advantages, preserving printed literature remains culturally important.`,
    vocabulary: [
      { term: 'Portability', definition: 'ease of carrying' },
      { term: 'Tactile engagement', definition: 'physical interaction' },
      { term: 'Comprehension', definition: 'understanding' },
      { term: 'Culturally important', definition: 'valuable to society' },
    ],
    structureBreakdown: [
      'Introduction',
      'Body 1: Advantages of e-books',
      'Body 2: Advantages of printed books',
      'Conclusion',
    ],
    whyHighScore: [
      'Balanced argument',
      'Clear evaluation',
      'Advanced vocabulary',
      'Logical progression',
    ],
  },
  {
    id: 36,
    category: 'Higher Taxes for the Wealthy',
    topic: 'Some people believe that wealthy individuals should pay higher taxes to reduce inequality. To what extent do you agree or disagree?',
    modelAnswer: `Economic inequality has become a growing concern in many countries. While some argue that progressive taxation unfairly penalises success, I agree that higher taxes for the wealthy can help create a more equitable society.

Firstly, progressive tax systems enable governments to fund essential public services such as healthcare, education, and infrastructure. Wealthy individuals, who benefit significantly from stable economies, are better positioned to contribute financially.

However, excessively high taxation may discourage investment and entrepreneurship. If tax rates become unreasonably burdensome, capital flight and reduced economic growth may follow.

Overall, moderate progressive taxation is a fair and effective mechanism for reducing inequality while maintaining economic stability.`,
    vocabulary: [
      { term: 'Progressive taxation', definition: 'higher earners pay higher rates' },
      { term: 'Equitable society', definition: 'fair society' },
      { term: 'Capital flight', definition: 'movement of money to other countries' },
      { term: 'Entrepreneurship', definition: 'business creation' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Benefits of higher taxes',
      'Body 2: Potential drawbacks',
      'Conclusion',
    ],
    whyHighScore: [
      'Balanced evaluation',
      'Clear stance maintained',
      'Logical development',
      'Strong economic vocabulary',
    ],
  },
  {
    id: 37,
    category: 'Stricter Laws to Reduce Crime',
    topic: 'Stricter laws are the best way to reduce crime. Discuss both views and give your opinion.',
    modelAnswer: `The effectiveness of stricter legislation in reducing crime remains widely debated. While tougher laws may deter criminal behaviour, I believe prevention strategies are equally important.

Supporters argue that harsher penalties discourage potential offenders. The fear of severe punishment can act as a deterrent and maintain social order.

However, crime often stems from poverty, unemployment, and lack of education. Addressing these root causes through social programs and rehabilitation initiatives may reduce crime more sustainably.

In my view, although strict laws play a necessary role, long-term crime reduction requires preventive measures alongside legal enforcement.`,
    vocabulary: [
      { term: 'Legislation', definition: 'laws' },
      { term: 'Deterrent', definition: 'something that discourages' },
      { term: 'Root causes', definition: 'fundamental reasons' },
      { term: 'Rehabilitation initiatives', definition: 'programs to reform offenders' },
    ],
    structureBreakdown: [
      'Introduction: Both views + opinion',
      'Body 1: Stricter laws argument',
      'Body 2: Preventive strategies',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear opinion',
      'Balanced discussion',
      'Logical argument flow',
      'Advanced lexical range',
    ],
  },
  {
    id: 38,
    category: 'Public Surveillance',
    topic: 'Governments are increasing public surveillance through cameras and digital monitoring. Is this a positive or negative development?',
    modelAnswer: `The expansion of public surveillance has sparked considerable controversy. While enhanced monitoring can improve security, it also raises serious concerns regarding privacy.

On the positive side, surveillance systems deter criminal activities and assist law enforcement in solving crimes. Public spaces equipped with cameras often experience reduced theft and vandalism.

However, excessive monitoring infringes upon civil liberties. Citizens may feel constantly observed, leading to reduced freedom of expression. Furthermore, data breaches pose risks to personal information security.

In conclusion, although surveillance can strengthen public safety, strict regulations are necessary to protect individual privacy rights.`,
    vocabulary: [
      { term: 'Surveillance', definition: 'monitoring' },
      { term: 'Infringes upon', definition: 'violates' },
      { term: 'Civil liberties', definition: 'basic freedoms' },
      { term: 'Data breaches', definition: 'security violations' },
    ],
    structureBreakdown: [
      'Introduction',
      'Body 1: Security benefits',
      'Body 2: Privacy concerns',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear evaluation',
      'Balanced perspective',
      'Sophisticated vocabulary',
      'Strong cohesion',
    ],
  },
  {
    id: 39,
    category: 'International Aid',
    topic: 'Developed countries should provide financial aid to developing nations. Do you agree or disagree?',
    modelAnswer: `The responsibility of wealthier nations to support developing countries remains a subject of global debate. I strongly agree that financial assistance is both ethical and beneficial.

Firstly, developed nations possess greater economic resources and technological expertise. Providing aid can improve healthcare, education, and infrastructure in less affluent countries. This promotes global stability and reduces poverty.

However, aid must be carefully managed to avoid dependency. Sustainable development programs that empower local communities are more effective than temporary financial relief.

Overall, international aid is justified, provided it fosters long-term development rather than reliance.`,
    vocabulary: [
      { term: 'Affluent', definition: 'wealthy' },
      { term: 'Infrastructure', definition: 'essential systems' },
      { term: 'Dependency', definition: 'reliance' },
      { term: 'Sustainable development', definition: 'long-term growth' },
    ],
    structureBreakdown: [
      'Introduction: Clear agreement',
      'Body 1: Reasons for aid',
      'Body 2: Potential risks',
      'Conclusion',
    ],
    whyHighScore: [
      'Strong stance',
      'Logical reasoning',
      'Clear paragraphing',
      'Academic tone',
    ],
  },
  {
    id: 40,
    category: 'Military Spending',
    topic: 'Governments should reduce military spending and allocate funds to education and healthcare instead. To what extent do you agree or disagree?',
    modelAnswer: `Government budget allocation often involves difficult decisions. While national defence is important, I largely agree that greater emphasis should be placed on education and healthcare.

Investing in education strengthens human capital and economic competitiveness. Similarly, healthcare funding enhances life expectancy and workforce productivity. These sectors directly improve citizens' quality of life.

Nevertheless, national security cannot be ignored. Adequate defence spending ensures protection against external threats. The challenge lies in balancing priorities rather than eliminating military funding entirely.

In conclusion, governments should carefully reallocate resources to prioritise social development while maintaining essential security measures.`,
    vocabulary: [
      { term: 'Budget allocation', definition: 'distribution of funds' },
      { term: 'Human capital', definition: 'skills and knowledge of people' },
      { term: 'Workforce productivity', definition: 'efficiency of workers' },
      { term: 'External threats', definition: 'dangers from outside' },
    ],
    structureBreakdown: [
      'Introduction: Qualified opinion',
      'Body 1: Benefits of social spending',
      'Body 2: Importance of defence',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear evaluation',
      'Balanced argument',
      'Advanced vocabulary',
      'Logical coherence',
    ],
  },
  {
    id: 41,
    category: 'The Influence of Celebrities',
    topic: 'Celebrities have a significant influence on young people. Is this a positive or negative development?',
    modelAnswer: `Celebrities play a prominent role in shaping modern culture, particularly among younger generations. While they can inspire positive aspirations, I believe their overall influence is largely negative.

On the positive side, successful athletes, entrepreneurs, and artists can motivate young people to pursue excellence. Public figures who advocate for social causes also raise awareness about important global issues.

However, many celebrities promote materialism and unrealistic beauty standards. Young people may develop distorted perceptions of success, associating it solely with wealth and fame. Furthermore, scandals involving public figures can normalise irresponsible behaviour.

In conclusion, although celebrities can serve as role models, their influence often fosters superficial values rather than meaningful personal development.`,
    vocabulary: [
      { term: 'Prominent', definition: 'well-known' },
      { term: 'Advocate', definition: 'publicly support' },
      { term: 'Materialism', definition: 'focus on wealth and possessions' },
      { term: 'Distorted perceptions', definition: 'inaccurate understanding' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Positive impact',
      'Body 2: Negative impact',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear stance',
      'Balanced argument',
      'Sophisticated vocabulary',
      'Logical cohesion',
    ],
  },
  {
    id: 42,
    category: 'News Media and Bias',
    topic: 'The news media often presents biased information. What are the causes of this problem and what solutions can be suggested?',
    modelAnswer: `Media bias has become a growing concern in contemporary society. This issue stems primarily from commercial pressures and political influence, and it requires greater accountability and transparency.

One significant cause is profit-driven journalism. Media outlets often sensationalise stories to attract viewers and increase advertising revenue. Additionally, political affiliations may influence how news is framed.

To address this problem, stricter media regulations and independent oversight bodies should be established. Promoting media literacy education can also help citizens critically evaluate information sources.

In conclusion, while media bias poses a serious threat to public trust, regulatory reforms and public awareness can mitigate its impact.`,
    vocabulary: [
      { term: 'Sensationalise', definition: 'exaggerate for attention' },
      { term: 'Political affiliations', definition: 'connections to political groups' },
      { term: 'Oversight bodies', definition: 'monitoring organisations' },
      { term: 'Media literacy', definition: 'ability to evaluate media content' },
    ],
    structureBreakdown: [
      'Introduction: Causes + outline',
      'Body 1: Causes',
      'Body 2: Solutions',
      'Conclusion',
    ],
    whyHighScore: [
      'Fully answers both parts',
      'Logical structure',
      'Advanced vocabulary',
      'Clear development',
    ],
  },
  {
    id: 43,
    category: 'Cultural Exchange Through Tourism',
    topic: 'Tourism promotes cultural understanding. To what extent do you agree or disagree?',
    modelAnswer: `International tourism has expanded significantly in recent decades. I largely agree that tourism fosters cultural understanding, although certain limitations exist.

Firstly, travel enables direct exposure to different customs, traditions, and lifestyles. Tourists gain first-hand experience of cultural diversity, reducing stereotypes and prejudice.

However, mass tourism may commercialise cultural traditions. Local customs are sometimes modified to satisfy tourist expectations, potentially diluting authenticity.

Overall, despite minor drawbacks, tourism remains a powerful tool for promoting cross-cultural awareness and mutual respect.`,
    vocabulary: [
      { term: 'First-hand experience', definition: 'direct personal experience' },
      { term: 'Stereotypes', definition: 'oversimplified beliefs' },
      { term: 'Commercialise', definition: 'turn into business' },
      { term: 'Diluting authenticity', definition: 'reducing originality' },
    ],
    structureBreakdown: [
      'Introduction: Clear agreement',
      'Body 1: Cultural benefits',
      'Body 2: Limitations',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear position',
      'Balanced evaluation',
      'Cohesive paragraphing',
      'Varied sentence structures',
    ],
  },
  {
    id: 44,
    category: 'Global Hunger',
    topic: 'Despite global economic growth, hunger remains a major problem in many parts of the world. Why does this happen and what can be done?',
    modelAnswer: `Global hunger persists despite overall economic expansion. This paradox arises from unequal wealth distribution and political instability, requiring coordinated international efforts.

One primary cause is economic inequality. Wealth is concentrated in certain regions, leaving vulnerable populations without access to sufficient food. Conflict and corruption further disrupt agricultural production and food distribution systems.

To combat hunger, governments and international organisations must improve food security programs and support sustainable agriculture. Investing in infrastructure and fair trade policies can enhance economic resilience.

In conclusion, hunger persists due to structural inequalities and governance failures, but targeted global cooperation can significantly reduce its prevalence.`,
    vocabulary: [
      { term: 'Paradox', definition: 'contradictory situation' },
      { term: 'Wealth distribution', definition: 'allocation of income' },
      { term: 'Food security', definition: 'reliable access to food' },
      { term: 'Economic resilience', definition: 'ability to recover economically' },
    ],
    structureBreakdown: [
      'Introduction',
      'Body 1: Causes',
      'Body 2: Solutions',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear explanation',
      'Strong coherence',
      'Advanced vocabulary',
      'Direct response to task',
    ],
  },
  {
    id: 45,
    category: 'Freedom of Speech',
    topic: 'Freedom of speech should be limited when it causes harm. To what extent do you agree or disagree?',
    modelAnswer: `Freedom of speech is a cornerstone of democratic societies. While it is essential for expressing opinions, I believe it should be limited when it incites harm or violence.

Unrestricted speech may enable hate speech, misinformation, and extremist propaganda. Such expressions can threaten social harmony and public safety.

However, excessive censorship may suppress legitimate criticism and undermine democracy. Striking a balance between freedom and responsibility is therefore crucial.

In conclusion, freedom of speech should be protected, but reasonable limitations are necessary to safeguard societal stability.`,
    vocabulary: [
      { term: 'Cornerstone', definition: 'fundamental principle' },
      { term: 'Incites', definition: 'provokes' },
      { term: 'Extremist propaganda', definition: 'radical political messaging' },
      { term: 'Censorship', definition: 'suppression of speech' },
    ],
    structureBreakdown: [
      'Introduction: Qualified opinion',
      'Body 1: Reasons for limitation',
      'Body 2: Importance of freedom',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear argument',
      'Balanced reasoning',
      'Strong academic vocabulary',
      'Logical progression',
    ],
  },
  {
    id: 46,
    category: 'Climate Responsibility of Corporations',
    topic: 'Large corporations should be held responsible for environmental damage they cause. To what extent do you agree or disagree?',
    modelAnswer: `Environmental degradation caused by industrial activities has intensified global concern. I strongly agree that large corporations must be held accountable for the environmental harm they generate.

Corporations often prioritise profit maximisation over sustainability. Industrial emissions, deforestation, and waste disposal significantly contribute to climate change and biodiversity loss. Without regulatory enforcement, companies may neglect environmental responsibility.

Holding corporations accountable through carbon taxes and environmental regulations encourages sustainable business practices. Additionally, public transparency and corporate social responsibility initiatives can enhance environmental stewardship.

In conclusion, since corporations possess substantial economic power, they must bear responsibility for mitigating environmental damage.`,
    vocabulary: [
      { term: 'Environmental degradation', definition: 'environmental damage' },
      { term: 'Profit maximisation', definition: 'increasing financial gain' },
      { term: 'Regulatory enforcement', definition: 'applying laws strictly' },
      { term: 'Environmental stewardship', definition: 'responsible environmental management' },
    ],
    structureBreakdown: [
      'Introduction: Clear agreement',
      'Body 1: Problem caused by corporations',
      'Body 2: Solutions and accountability',
      'Conclusion',
    ],
    whyHighScore: [
      'Strong clear opinion',
      'Logical development',
      'Advanced environmental vocabulary',
      'Formal academic tone',
    ],
  },
  {
    id: 47,
    category: 'The Role of Art in Society',
    topic: 'Art and culture are less important than science and technology in modern society. Do you agree or disagree?',
    modelAnswer: `In an era dominated by technological advancement, some argue that art and culture have become secondary priorities. However, I strongly disagree with this view.

Science and technology undeniably drive economic growth and improve living standards. Innovations in medicine and communication have transformed human life.

Nevertheless, art and culture enrich emotional well-being and preserve historical identity. Literature, music, and visual arts foster creativity and critical thinking. A society devoid of cultural expression risks losing its sense of identity.

Therefore, while science advances material progress, art remains indispensable for social cohesion and intellectual diversity.`,
    vocabulary: [
      { term: 'Dominated', definition: 'controlled' },
      { term: 'Material progress', definition: 'physical development' },
      { term: 'Social cohesion', definition: 'unity within society' },
      { term: 'Intellectual diversity', definition: 'variety of ideas' },
    ],
    structureBreakdown: [
      'Introduction: Clear disagreement',
      'Body 1: Importance of science',
      'Body 2: Importance of art',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear stance',
      'Balanced argument',
      'Strong vocabulary range',
      'Cohesive paragraphing',
    ],
  },
  {
    id: 48,
    category: 'Migration and Economic Growth',
    topic: 'Immigration contributes positively to economic growth. To what extent do you agree or disagree?',
    modelAnswer: `Immigration has become a defining feature of globalisation. I largely agree that immigration contributes positively to economic development.

Firstly, migrants often fill labour shortages in key industries such as healthcare, construction, and technology. This strengthens productivity and sustains economic expansion.

Moreover, cultural diversity can stimulate innovation and entrepreneurship. Many successful businesses are founded by immigrants who bring unique perspectives.

However, rapid migration may strain public services if not managed effectively. Proper integration policies are therefore essential.

In conclusion, immigration generally enhances economic growth, provided it is accompanied by strategic planning.`,
    vocabulary: [
      { term: 'Labour shortages', definition: 'lack of workers' },
      { term: 'Productivity', definition: 'efficiency of production' },
      { term: 'Entrepreneurship', definition: 'business innovation' },
      { term: 'Integration policies', definition: 'strategies to include migrants' },
    ],
    structureBreakdown: [
      'Introduction: Qualified agreement',
      'Body 1: Economic benefits',
      'Body 2: Challenges',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear evaluation',
      'Balanced reasoning',
      'Logical progression',
      'Sophisticated economic vocabulary',
    ],
  },
  {
    id: 49,
    category: 'Technology and Human Interaction',
    topic: 'Technology is reducing human interaction. Is this a positive or negative development?',
    modelAnswer: `Technological innovation has transformed communication patterns across the globe. Although digital platforms increase connectivity, I believe they have negatively affected direct human interaction.

Online communication often replaces face-to-face conversation. While convenient, it may reduce emotional intimacy and non-verbal communication cues.

On the other hand, technology enables global collaboration and instant communication. Families separated by distance can maintain relationships through video calls.

Despite these advantages, excessive reliance on digital devices may weaken social bonds and interpersonal skills.

In conclusion, while technology enhances convenience, its overuse can diminish meaningful human interaction.`,
    vocabulary: [
      { term: 'Connectivity', definition: 'ability to connect' },
      { term: 'Emotional intimacy', definition: 'emotional closeness' },
      { term: 'Interpersonal skills', definition: 'social abilities' },
      { term: 'Diminish', definition: 'reduce' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Negative impacts',
      'Body 2: Positive aspects',
      'Conclusion',
    ],
    whyHighScore: [
      'Clear stance maintained',
      'Balanced development',
      'Strong lexical resource',
      'Logical cohesion',
    ],
  },
  {
    id: 50,
    category: 'The Future of Work',
    topic: 'In the future, people may work fewer hours due to technological advancement. Do you think this is a positive or negative development?',
    modelAnswer: `Technological progress is reshaping the future workplace. I believe that reduced working hours will be a positive development if managed appropriately.

Automation increases efficiency, allowing tasks to be completed more quickly. Shorter working hours may improve work-life balance, reduce stress, and enhance overall well-being.

However, fewer working hours could reduce income levels in certain sectors. Governments and businesses must ensure fair wage structures to prevent economic instability.

Overall, provided that labour policies adapt effectively, technological advancement leading to shorter workweeks will enhance quality of life.`,
    vocabulary: [
      { term: 'Automation', definition: 'machine-based processes' },
      { term: 'Work-life balance', definition: 'balance between job and personal life' },
      { term: 'Economic instability', definition: 'financial uncertainty' },
      { term: 'Labour policies', definition: 'employment regulations' },
    ],
    structureBreakdown: [
      'Introduction: Clear opinion',
      'Body 1: Benefits',
      'Body 2: Risks',
      'Conclusion',
    ],
    whyHighScore: [
      'Fully answers question',
      'Clear evaluation',
      'Logical structure',
      'Advanced vocabulary',
    ],
  },
];

const faqItems = [
  {
    question: 'Are these real Band 9 IELTS essays?',
    answer: 'These essays are written according to the official IELTS Writing Task 2 Band 9 descriptors, including Task Response, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. They reflect the structure and language required to achieve Band 9.',
  },
  {
    question: 'Can I memorise these essays for the IELTS exam?',
    answer: "Memorising full essays is not recommended. Instead, study the structure, vocabulary, linking phrases, and idea development strategies used in high-scoring model answers.",
  },
  {
    question: 'How can I get Band 9 in IELTS Writing Task 2?',
    answer: 'To achieve Band 9, fully answer the question, maintain a clear opinion, organise ideas logically, use advanced vocabulary naturally, and demonstrate accurate complex grammar.',
  },
  {
    question: 'How long should a Band 9 IELTS essay be?',
    answer: 'A Band 9 IELTS Writing Task 2 essay typically contains between 260 and 320 words, with clear paragraphing and fully developed ideas.',
  },
  {
    question: 'What is the best structure for IELTS Writing Task 2?',
    answer: 'The recommended structure includes an introduction with paraphrase and thesis statement, two well-developed body paragraphs, and a conclusion that restates the main argument.',
  },
  {
    question: 'Are complex words necessary for Band 9?',
    answer: 'Complex vocabulary is not required. Examiners reward natural, precise, and accurate word usage rather than unnecessarily difficult expressions.',
  },
  {
    question: 'How can I improve coherence in my IELTS essay?',
    answer: 'Improve coherence by using clear topic sentences, logical paragraph progression, linking devices, and consistent argument development throughout the essay.',
  },
];

const Band9IELTSEssaysPage: React.FC = () => {
  usePageMetadata({
    title: '50 Band 9 IELTS Writing Task 2 Sample Essays (Full Analysis Included)',
    description: 'Explore 50 fully written Band 9 IELTS Writing Task 2 sample essays. Each includes model answer, vocabulary explanation, structure breakdown, and examiner insights.',
  });

  const [expandedEssay, setExpandedEssay] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(essays.map((e) => e.category)))];

  const filteredEssays = selectedCategory === 'All' ? essays : essays.filter((e) => e.category === selectedCategory);

  const toggleEssay = (id: number) => {
    setExpandedEssay(expandedEssay === id ? null : id);
  };

  const faqSchemaData = {
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const articleSchemaData = {
    headline: '50 Band 9 IELTS Writing Task 2 Sample Essays (Full Analysis Included)',
    description: 'Explore 50 fully written Band 9 IELTS Writing Task 2 sample essays. Each includes model answer, vocabulary explanation, structure breakdown, and examiner insights.',
    author: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      url: 'https://typogrammar.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TypoGrammar',
      logo: {
        '@type': 'ImageObject',
        url: 'https://typogrammar.com/images/logo.png',
      },
    },
    datePublished: '2024-01-15',
    dateModified: '2026-02-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://typogrammar.com/ielts/50-band-9-ielts-writing-task-2-sample-essays',
    },
  };

  const peopleAlsoAsk = [
    {
      question: 'What is the hardest part of IELTS Writing Task 2?',
      answer: 'The most challenging part is fully developing ideas while maintaining clear structure and coherence under time pressure.',
    },
    {
      question: 'How do examiners calculate Band 9?',
      answer: 'Band 9 requires full task response, logical cohesion, advanced vocabulary used naturally, and accurate complex grammar.',
    },
    {
      question: 'Can I get Band 9 without complex vocabulary?',
      answer: 'Yes. Natural, precise, and accurate language scores higher than unnecessarily complicated words.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup type="FAQPage" data={faqSchemaData} />
      <SchemaMarkup type="Article" data={articleSchemaData} />

      {/* Last Updated - GEO Optimization */}
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-4 text-center">
        Last updated: February 2026
      </div>

      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          50 Band 9 Sample Essays for IELTS Writing Task 2
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          With Vocabulary, Structure Breakdown &amp; Examiner Insights
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
        <ArticleParagraph>
          This comprehensive collection features <strong>50 fully written Band 9 IELTS Writing Task 2 essays</strong>. Each essay includes a model answer, vocabulary explanations, structure breakdown, and insights into why it scores highly. Study these samples to understand the language, organisation, and argumentation required for Band 9.
        </ArticleParagraph>
      </section>

      {/* SEO-Optimized Authority Intro Block */}
      <section className="mb-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          What It Takes to Achieve Band 9 in IELTS Writing Task 2
        </h2>
        <ArticleParagraph>
          Achieving Band 9 in IELTS Writing Task 2 requires more than advanced vocabulary. It demands clear structure, fully developed arguments, logical coherence, and grammatical precision. Examiners assess your ability to present ideas clearly, support them with relevant examples, and maintain consistent reasoning throughout your response.
        </ArticleParagraph>
        <ArticleParagraph>
          On this page, you will find <strong>50 fully written Band 9 sample essays</strong> covering all major IELTS topics, including education, environment, technology, government, health, and global issues. Each essay demonstrates the exact techniques top scorers use—from precise vocabulary choices to seamless paragraph transitions.
        </ArticleParagraph>
      </section>

      {/* Category Filter */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Filter by Topic Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Essays List */}
      <section className="space-y-6">
        {filteredEssays.map((essay) => (
          <article
            key={essay.id}
            className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleEssay(essay.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-2">
                  {essay.category}
                </span>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Essay {essay.id}: {essay.topic.length > 80 ? essay.topic.slice(0, 80) + '...' : essay.topic}
                </h2>
              </div>
              <svg
                className={`w-6 h-6 text-slate-500 transform transition-transform ${expandedEssay === essay.id ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedEssay === essay.id && (
              <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
                {/* Topic */}
                <div className="mt-4 mb-6">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Topic
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200 italic">{essay.topic}</p>
                </div>

                {/* Model Answer */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Model Answer (Band 9)
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                    {essay.modelAnswer.split('\n\n').map((para, idx) => (
                      <p key={idx} className="text-slate-700 dark:text-slate-300 mb-4 last:mb-0 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Vocabulary Explanation */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Vocabulary Explanation
                  </h3>
                  <ul className="space-y-2">
                    {essay.vocabulary.map((v, idx) => (
                      <li key={idx} className="flex">
                        <span className="font-medium text-blue-600 dark:text-blue-400 min-w-[200px]">{v.term}</span>
                        <span className="text-slate-600 dark:text-slate-400">– {v.definition}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Structure Breakdown */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Structure Breakdown
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {essay.structureBreakdown.map((item, idx) => (
                      <li key={idx} className="text-slate-700 dark:text-slate-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why This Scores High */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Why This Scores High
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {essay.whyHighScore.map((reason, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
                      >
                        ✓ {reason}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </section>

      {/* People Also Ask Section - Snippet Targeting */}
      <section className="mt-16">
        <ArticleHeading>People Also Ask</ArticleHeading>
        <div className="space-y-4">
          {peopleAlsoAsk.map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                <span className="text-blue-500 mr-2">❓</span>
                {item.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 ml-6">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <ArticleHeading>Frequently Asked Questions (FAQs)</ArticleHeading>
        <div className="space-y-6">
          {faqItems.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 dark:border-slate-700 pb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {idx + 1}. {faq.question}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
        <ArticleHeading>Continue Your IELTS Preparation</ArticleHeading>
        <ArticleParagraph>
          Strengthen your IELTS skills with these related resources on TypoGrammar:
        </ArticleParagraph>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <Link
            to="/ielts-preparation"
            className="block p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">IELTS Preparation Hub</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Complete guide to all IELTS sections with tips and strategies.
            </p>
          </Link>
          <Link
            to="/band-8-ielts-sample-answers"
            className="block p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Band 8 Sample Answers</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              More high-scoring essay samples with detailed analysis.
            </p>
          </Link>
          <Link
            to="/advantages-disadvantages-essay-ielts"
            className="block p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Advantages/Disadvantages Essays</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Master this common IELTS essay type with structure templates.
            </p>
          </Link>
          <Link
            to="/ielts-vocabulary-booster"
            className="block p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">IELTS Vocabulary Booster</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Essential vocabulary lists organized by topic for IELTS success.
            </p>
          </Link>
          <Link
            to="/paraphrasing-tool"
            className="block p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Paraphrasing Practice</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Learn to paraphrase effectively—a crucial skill for Task 2 introductions.
            </p>
          </Link>
          <Link
            to="/grammar-guide"
            className="block p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Grammar Guide</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Perfect your grammar for higher Band scores in Writing.
            </p>
          </Link>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Takeaways for Band 9 Success</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-slate-700 dark:text-slate-300">
              <strong>Clear thesis statement</strong> – State your position in the introduction and maintain it throughout.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-slate-700 dark:text-slate-300">
              <strong>Logical paragraph structure</strong> – Each body paragraph develops one main idea with examples.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-slate-700 dark:text-slate-300">
              <strong>Cohesive devices</strong> – Use linking words naturally: However, Moreover, Nevertheless, Therefore.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-slate-700 dark:text-slate-300">
              <strong>Topic-specific vocabulary</strong> – Learn collocations and academic expressions for common themes.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-slate-700 dark:text-slate-300">
              <strong>Complex grammar</strong> – Use a variety of sentence structures with accurate control.
            </span>
          </li>
        </ul>
      </section>

      {/* Conversion CTA Block */}
      <section className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl p-8 text-center">
        <div className="text-3xl mb-4">🎯</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Want Personal Feedback on Your IELTS Writing?
        </h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Practice using these Band 9 samples and improve your structure, vocabulary, and coherence. Master the techniques that top scorers use to achieve their target bands.
        </p>
        <p className="text-white font-medium mb-6">
          Explore our complete IELTS Writing preparation resources on TypoGrammar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/ielts-preparation"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            IELTS Preparation Hub
          </Link>
          <Link
            to="/band-8-ielts-sample-answers"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border border-blue-400"
          >
            More Sample Essays
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Band9IELTSEssaysPage;
