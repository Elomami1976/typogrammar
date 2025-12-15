
import React from 'react';
import { ReadingPassage } from '../types';
import { ArticleParagraph } from '../components/ArticleComponents';

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'dna-structure',
    title: 'The Structure of DNA',
    category: 'Biology',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        'Deoxyribonucleic acid, or DNA, is the molecule that contains the unique genetic code of every living organism. It is often called the "blueprint of life" because it holds the instructions for building and maintaining an organism. The discovery of its structure in 1953 by James Watson and Francis Crick, based on the groundbreaking X-ray diffraction work of Rosalind Franklin, was a monumental achievement in the history of science. This discovery unlocked the secrets of heredity and opened the door for the field of molecular biology.'
      ),
      React.createElement(ArticleParagraph, null,
        'The structure of DNA is a double helix, which resembles a twisted ladder. The two long backbones of the ladder are made of alternating sugar and phosphate groups. The "rungs" of the ladder are made of pairs of four types of nitrogenous bases: adenine (A), guanine (G), cytosine (C), and thymine (T). A crucial aspect of this structure is the specific pairing rule: adenine always pairs with thymine (A-T), and guanine always pairs with cytosine (G-C). These pairs are held together by hydrogen bonds, which are strong enough to keep the structure stable but weak enough to be "unzipped" during processes like DNA replication.'
      ),
      React.createElement(ArticleParagraph, null,
        "The sequence of these bases along the DNA backbone is what constitutes the genetic code. This code is read in groups of three bases, called codons, which specify which amino acid should be added to a protein chain. Proteins are the workhorses of the cell, carrying out a vast array of functions from catalyzing metabolic reactions to providing structural support. The ability of DNA to replicate itself is fundamental to life. During replication, the double helix unwinds, and each strand serves as a template for a new complementary strand, ensuring that genetic information is accurately passed from one generation of cells to the next."
      )
    ),
    vocabulary: [
      { word: 'Monumental', meaning: '(adj.) Of great importance, extent, or size.' },
      { word: 'Heredity', meaning: '(n.) The passing on of physical or mental characteristics genetically from one generation to another.' },
      { word: 'Complementary', meaning: '(adj.) Combining in such a way as to enhance or complete one another.' },
      { word: 'Catalyzing', meaning: '(v.) Causing or accelerating a chemical reaction.' },
      { word: 'Constitutes', meaning: '(v.) To be the parts or components of something; to make up.' },
    ],
    questions: [
      {
        question: "Who is credited with discovering the double helix structure of DNA?",
        options: ["Rosalind Franklin", "James Watson and Francis Crick", "Gregor Mendel", "Charles Darwin"],
        correctAnswer: 1,
        explanation: "Watson and Crick published the model of the double helix structure, based on crucial data from Rosalind Franklin."
      },
      {
        question: "In the DNA ladder analogy, what are the 'rungs' made of?",
        options: ["Sugar and phosphate groups", "Hydrogen bonds", "Pairs of nitrogenous bases", "Amino acids"],
        correctAnswer: 2,
        explanation: "The rungs of the ladder are the paired bases: Adenine with Thymine, and Guanine with Cytosine."
      },
      {
        question: "What is the specific base pairing rule in DNA?",
        options: ["A-G and C-T", "A-C and G-T", "A-T and G-C", "A-A and T-T"],
        correctAnswer: 2,
        explanation: "Adenine (A) always pairs with Thymine (T), and Guanine (G) always pairs with Cytosine (C)."
      },
      {
        question: "What is the primary function of DNA replication?",
        options: ["To create proteins", "To unzip the double helix", "To accurately pass genetic information to new cells", "To catalyze metabolic reactions"],
        correctAnswer: 2,
        explanation: "Replication ensures that each new cell receives a complete and accurate copy of the genetic blueprint."
      },
      {
        question: "The genetic code is read in groups of three bases called what?",
        options: ["Genes", "Chromosomes", "Codons", "Nucleotides"],
        correctAnswer: 2,
        explanation: "A codon is a sequence of three DNA bases that corresponds to a specific amino acid."
      }
    ]
  },
  {
    id: 'silk-road',
    title: 'The Silk Road',
    category: 'History',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        'The Silk Road was not a single road but a vast network of trade routes that connected the East and West for more than 1,500 years. Spanning from ancient China through Central Asia to the Mediterranean, it was the most significant avenue for cultural, commercial, and technological exchange between major civilizations. While silk was the most famous commodity traded along these routes, giving the network its name, many other goods were exchanged, including spices, precious metals, textiles, and exotic animals.'
      ),
      React.createElement(ArticleParagraph, null,
        'The origins of the Silk Road can be traced back to the Han Dynasty in China in the 2nd century BCE. The Chinese were eager to trade their prized silk for the powerful "heavenly horses" of the Ferghana Valley in Central Asia, which were essential for their military. This initial desire for trade sparked the development of a complex web of paths that were traversed by caravans of camels and merchants. These journeys were arduous and fraught with danger, crossing treacherous mountains and vast deserts. As a result, goods often passed through the hands of many middlemen, increasing their value with each transaction.'
      ),
      React.createElement(ArticleParagraph, null,
        "Beyond commerce, the Silk Road was a crucial conduit for the spread of ideas, religions, and technologies. Buddhism, originating in India, traveled east along these routes to become a major religion in China. Similarly, Christianity and Islam spread through Central Asia. Inventions such as paper and gunpowder, both developed in China, made their way to the West, fundamentally altering the course of history. However, the Silk Road also facilitated the spread of diseases, with the Black Death being one of the most devastating examples. The decline of the Silk Road began in the late Middle Ages with the rise of maritime trade, which offered a faster and more economical alternative for long-distance commerce."
      )
    ),
    vocabulary: [
      { word: 'Commodity', meaning: '(n.) A raw material or primary product that can be bought and sold.' },
      { word: 'Arduous', meaning: '(adj.) Involving or requiring strenuous effort; difficult and tiring.' },
      { word: 'Fraught', meaning: '(adj.) Filled with or likely to result in something undesirable.' },
      { word: 'Conduit', meaning: '(n.) A channel for transmitting something, such as information or ideas.' },
      { word: 'Maritime', meaning: '(adj.) Connected with the sea, especially in relation to seafaring commercial or military activity.' },
    ],
    questions: [
      {
        question: "What was the most famous commodity traded on the Silk Road?",
        options: ["Spices", "Gold", "Horses", "Silk"],
        correctAnswer: 3,
        explanation: "The passage explicitly states that silk was the most famous commodity, giving the trade network its name."
      },
      {
        question: "During which dynasty did the Silk Road originate?",
        options: ["Qin Dynasty", "Tang Dynasty", "Han Dynasty", "Ming Dynasty"],
        correctAnswer: 2,
        explanation: "The text traces the origins of the Silk Road back to the Han Dynasty in the 2nd century BCE."
      },
      {
        question: "Besides goods, what else was exchanged along the Silk Road?",
        options: ["Only money", "Ideas, religions, and technologies", "Maps and navigational tools", "Only diplomatic letters"],
        correctAnswer: 1,
        explanation: "The passage highlights that the Silk Road was a crucial conduit for spreading ideas like Buddhism, Christianity, and Islam, as well as technologies like paper and gunpowder."
      },
      {
        question: "What was a major negative consequence of the Silk Road?",
        options: ["The high cost of goods", "The long travel times", "The spread of diseases like the Black Death", "The decline of local crafts"],
        correctAnswer: 2,
        explanation: "The passage mentions that the Silk Road also facilitated the spread of diseases, with the Black Death being a devastating example."
      },
      {
        question: "What was a primary reason for the decline of the Silk Road?",
        options: ["Political instability", "The rise of faster and cheaper sea routes", "A lack of valuable goods to trade", "The closing of borders by the Ming Dynasty"],
        correctAnswer: 1,
        explanation: "The text states that the decline began with the rise of maritime trade, which was a more economical alternative."
      }
    ]
  },
    {
    id: 'artificial-intelligence',
    title: 'The Rise of Artificial Intelligence',
    category: 'Technology',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "Artificial intelligence (AI) is a transformative field of computer science dedicated to creating systems capable of performing tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding. The concept of AI is not new, dating back to the mid-20th century, but recent advancements in computing power and the availability of massive datasets have led to an explosion in its capabilities and applications, pushing it from the realm of science fiction into our daily lives."
      ),
      React.createElement(ArticleParagraph, null,
        "There are two main categories of AI: narrow (or weak) AI and general (or strong) AI. Narrow AI is designed to perform a specific task, such as voice recognition (like Siri or Alexa), facial recognition, or playing chess. All the AI we use today is narrow AI. General AI, on the other hand, refers to a machine with the ability to understand, learn, and apply knowledge across a wide range of tasks at a human level of intelligence. This remains a theoretical concept and a long-term goal for many researchers. A key technology driving modern AI is machine learning, a subset of AI where systems learn and improve from experience without being explicitly programmed. Deep learning, a further subset of machine learning, uses complex neural networks with many layers to analyze vast amounts of data, powering many of the most significant recent breakthroughs."
      ),
      React.createElement(ArticleParagraph, null,
        "The impact of AI is already being felt across numerous industries. In healthcare, it's used to diagnose diseases more accurately and discover new drugs. In finance, it helps detect fraudulent transactions and automate trading. Self-driving cars use AI to perceive their environment and navigate safely. While the potential benefits are immense, the rise of AI also presents significant challenges, including ethical concerns about bias in algorithms, the potential for job displacement, and questions about privacy and security. Navigating this new technological frontier requires careful consideration and responsible development."
      )
    ),
    vocabulary: [
      { word: 'Transformative', meaning: '(adj.) Causing a marked change in someone or something.' },
      { word: 'Perception', meaning: '(n.) The ability to see, hear, or become aware of something through the senses.' },
      { word: 'Explicitly', meaning: '(adv.) In a clear and detailed manner, leaving no room for confusion or doubt.' },
      { word: 'Fraudulent', meaning: '(adj.) Obtained, done by, or involving deception.' },
      { word: 'Displacement', meaning: '(n.) The action of moving something from its place or position, especially jobs.' },
    ],
    questions: [
      {
        question: "What is the main goal of artificial intelligence?",
        options: ["To replace all human jobs", "To create systems that can perform tasks requiring human intelligence", "To build better computers", "To create realistic video games"],
        correctAnswer: 1,
        explanation: "The first sentence defines AI as a field dedicated to creating systems that can perform tasks that typically require human intelligence."
      },
      {
        question: "What is the difference between narrow AI and general AI?",
        options: ["Narrow AI is older than general AI.", "Narrow AI is designed for a specific task, while general AI has human-level intelligence across many tasks.", "Narrow AI is more powerful than general AI.", "Narrow AI is software, while general AI is hardware."],
        correctAnswer: 1,
        explanation: "The passage clearly distinguishes between narrow AI for specific tasks (which we have today) and general AI with broad, human-like intelligence (which is still theoretical)."
      },
      {
        question: "What technology, a subset of AI, allows systems to learn from experience?",
        options: ["Cloud computing", "Data analysis", "Machine learning", "Cybersecurity"],
        correctAnswer: 2,
        explanation: "The text identifies machine learning as a key technology where systems learn from experience without being explicitly programmed."
      },
      {
        question: "Which of the following is NOT mentioned as a challenge presented by AI?",
        options: ["Ethical concerns about bias", "The high cost of electricity", "Potential for job displacement", "Privacy and security questions"],
        correctAnswer: 1,
        explanation: "The last paragraph lists bias, job displacement, and privacy as challenges, but does not mention the cost of electricity."
      },
      {
        question: "All the AI systems we use today, like Siri and Alexa, fall into which category?",
        options: ["General AI", "Strong AI", "Theoretical AI", "Narrow AI"],
        correctAnswer: 3,
        explanation: "The passage states, 'All the AI we use today is narrow AI' because these systems are designed for specific tasks."
      }
    ]
  },
  {
    id: 'coral-reefs',
    title: 'The Importance of Coral Reefs',
    category: 'Environment',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        'Often called "rainforests of the sea," coral reefs are some of the most diverse and valuable ecosystems on Earth. These underwater structures are built by colonies of tiny animals called coral polyps, which secrete calcium carbonate to form a hard skeleton. Despite covering less than 1% of the ocean floor, coral reefs support an astonishing 25% of all marine life, including over 4,000 species of fish. This biodiversity makes them a critical component of the global marine ecosystem.'
      ),
      React.createElement(ArticleParagraph, null,
        'The value of coral reefs extends far beyond their biological richness. They provide numerous benefits to humans, both directly and indirectly. For coastal communities, reefs act as natural barriers, protecting shorelines from erosion and storm surge by absorbing wave energy. This protective function is vital for preventing property damage and loss of life. Economically, coral reefs are powerhouses, supporting multi-billion dollar fishing and tourism industries worldwide. Millions of people depend on reefs for their livelihoods, whether through fishing for food and income or working in tourism-related jobs like diving and snorkeling. Furthermore, compounds found in many reef-dwelling organisms are being used to develop new medicines to treat diseases.'
      ),
      React.createElement(ArticleParagraph, null,
        "Unfortunately, these vital ecosystems are under severe threat from a combination of global and local pressures. The primary global threat is climate change, which leads to rising ocean temperatures. When water becomes too warm, corals expel the symbiotic algae living in their tissues, causing them to turn completely white in a process known as coral bleaching. While corals can survive a bleaching event, they are under increased stress and more susceptible to mortality. Ocean acidification, also caused by increased carbon dioxide in the atmosphere, makes it harder for corals to build their skeletons. Local threats include overfishing, which disrupts the ecological balance of the reef, and pollution from land, which can smother corals and promote the growth of harmful algae."
      )
    ),
    vocabulary: [
      { word: 'Ecosystems', meaning: '(n.) Biological communities of interacting organisms and their physical environment.' },
      { word: 'Biodiversity', meaning: '(n.) The variety of life in the world or in a particular habitat or ecosystem.' },
      { word: 'Symbiotic', meaning: '(adj.) Involving a close and long-term interaction between two different biological species.' },
      { word: 'Susceptible', meaning: '(adj.) Likely or liable to be influenced or harmed by a particular thing.' },
      { word: 'Acidification', meaning: '(n.) The action or process of making or becoming acidic.' },
    ],
    questions: [
      {
        question: "Why are coral reefs often called 'rainforests of the sea'?",
        options: ["Because they are located near rainforests", "Because they are green", "Because of their immense biodiversity", "Because they receive a lot of rain"],
        correctAnswer: 2,
        explanation: "The passage states that they are called this because they are 'some of the most diverse... ecosystems on Earth', supporting 25% of all marine life."
      },
      {
        question: "Which of the following is an economic benefit of coral reefs?",
        options: ["They increase ocean temperatures", "They support fishing and tourism industries", "They cause erosion of coastlines", "They reduce the number of fish species"],
        correctAnswer: 1,
        explanation: "The text mentions that reefs support 'multi-billion dollar fishing and tourism industries'."
      },
      {
        question: "What is coral bleaching?",
        options: ["When corals are cleaned by fish", "When corals expel their symbiotic algae due to warm water", "When corals turn white from pollution", "A natural part of the coral life cycle"],
        correctAnswer: 1,
        explanation: "The passage defines coral bleaching as the process where corals, stressed by warm water, expel the algae living in their tissues, causing them to turn white."
      },
      {
        question: "How do coral reefs protect coastlines?",
        options: ["By making the water warmer", "By creating new land", "By absorbing wave energy", "By attracting marine life"],
        correctAnswer: 2,
        explanation: "The text explains that reefs act as natural barriers by 'absorbing wave energy,' which protects shorelines from erosion and storm surge."
      },
      {
        question: "Which of the following is NOT a threat to coral reefs mentioned in the passage?",
        options: ["Overfishing", "Climate change", "Noise from shipping lanes", "Pollution from land"],
        correctAnswer: 2,
        explanation: "The passage discusses climate change (warming and acidification), overfishing, and pollution as major threats, but does not mention noise from shipping."
      }
    ]
  },
  {
    id: 'marie-curie',
    title: 'The Life of Marie Curie',
    category: 'Biography',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "Marie Curie, born Maria Skłodowska in Warsaw, Poland, in 1867, was a physicist and chemist whose pioneering research on radioactivity fundamentally changed our understanding of the atom. She was a figure of immense determination and intellect, breaking through significant barriers to become one of the most celebrated scientists in history. In an era when women were largely excluded from higher education and scientific pursuits, Curie's accomplishments were nothing short of revolutionary."
      ),
      React.createElement(ArticleParagraph, null,
        "Curie's scientific journey began in Paris, where she moved to pursue her studies at the Sorbonne. There she met Pierre Curie, a fellow scientist, whom she married in 1895. Together, they embarked on an intense investigation of the mysterious rays emitted by uranium, a phenomenon recently discovered by Henri Becquerel. Their work led to the discovery of two new elements, polonium (named after Marie's native Poland) and radium. For their joint research into radioactivity, Marie and Pierre Curie, along with Henri Becquerel, were awarded the Nobel Prize in Physics in 1903. This made Marie the first woman to receive a Nobel Prize."
      ),
      React.createElement(ArticleParagraph, null,
        'Tragedy struck in 1906 when Pierre was killed in a road accident. Despite her profound grief, Marie continued her work with remarkable fortitude, taking over his professorship at the Sorbonne and becoming the first female professor at the university. In 1911, she was awarded the Nobel Prize in Chemistry for her work in isolating pure radium, making her the only person to ever win the Nobel Prize in two different scientific fields. During World War I, she developed mobile radiography units, known as "petites Curies," to provide X-ray services to field hospitals. However, her long-term exposure to radioactive materials took a severe toll on her health, and she died in 1934 from aplastic anemia. Her legacy endures not only in her scientific discoveries but also in her role as an inspiration for women in science.'
      )
    ),
    vocabulary: [
      { word: 'Pioneering', meaning: '(adj.) Involving new ideas or methods; groundbreaking.' },
      { word: 'Radioactivity', meaning: '(n.) The emission of radiation caused by the spontaneous disintegration of atomic nuclei.' },
      { word: 'Fortitude', meaning: '(n.) Courage in pain or adversity.' },
      { word: 'Radiography', meaning: '(n.) The process of taking X-ray images for medical use.' },
      { word: 'Endures', meaning: '(v.) To remain in existence; to last.' },
    ],
    questions: [
      {
        question: "What was Marie Curie's field of research?",
        options: ["Genetics", "Astronomy", "Radioactivity", "Geology"],
        correctAnswer: 2,
        explanation: "The passage states that she conducted 'pioneering research on radioactivity'."
      },
      {
        question: "Marie Curie was the first woman to achieve what?",
        options: ["Attend the Sorbonne", "Work as a scientist", "Discover a new element", "Receive a Nobel Prize"],
        correctAnswer: 3,
        explanation: "The text states that she became 'the first woman to receive a Nobel Prize' in 1903."
      },
      {
        question: "For which two different scientific fields did Marie Curie win Nobel Prizes?",
        options: ["Medicine and Chemistry", "Physics and Chemistry", "Physics and Medicine", "Biology and Physics"],
        correctAnswer: 1,
        explanation: "She won the Nobel Prize in Physics in 1903 and the Nobel Prize in Chemistry in 1911."
      },
      {
        question: "What were the 'petites Curies' used for during World War I?",
        options: ["Scientific experiments", "Teaching tools at the Sorbonne", "Mobile X-ray services for hospitals", "Transporting radioactive materials"],
        correctAnswer: 2,
        explanation: "The passage explains she developed mobile radiography units, or 'petites Curies,' to provide X-ray services to field hospitals."
      },
      {
        question: "What was the cause of Marie Curie's death?",
        options: ["A road accident", "A laboratory explosion", "Illness from long-term exposure to radiation", "Old age"],
        correctAnswer: 2,
        explanation: "The text says she died from aplastic anemia, a result of her 'long-term exposure to radioactive materials'."
      }
    ]
  },
    {
    id: 'supply-and-demand',
    title: 'The Basics of Supply and Demand',
    category: 'Economics',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        'The law of supply and demand is a fundamental concept in economics that explains how prices are determined in a market economy. It describes the relationship between the quantity of a commodity that producers wish to sell at various prices and the quantity that consumers wish to buy. This interaction is the driving force behind the allocation of resources in the market. The two key components are the law of demand and the law of supply.'
      ),
      React.createElement(ArticleParagraph, null,
        'The law of demand states that, all other factors being equal, as the price of a good or service increases, consumer demand for the good or service will decrease, and vice versa. This is because consumers have limited resources, and a higher price means they have to give up more to purchase the same item. The relationship between price and quantity demanded can be illustrated with a downward-sloping demand curve. For example, if the price of a cup of coffee rises, people may choose to buy it less often or switch to a cheaper alternative like tea.'
      ),
      React.createElement(ArticleParagraph, null,
        'Conversely, the law of supply states that, all other factors being equal, as the price of a good or service increases, the quantity of that good or service that producers are willing and able to supply will also increase. This is because higher prices offer a greater profit incentive for businesses to produce more. This relationship is shown by an upward-sloping supply curve. For instance, if the market price for avocados increases, farmers will be motivated to grow and sell more avocados to capitalize on the higher revenue. The point where the supply and demand curves intersect is called the equilibrium price, which is the price at which the quantity supplied equals the quantity demanded.'
      )
    ),
    vocabulary: [
      { word: 'Fundamental', meaning: '(adj.) Forming a necessary base or core; of central importance.' },
      { word: 'Commodity', meaning: '(n.) A product that can be bought and sold, such as a raw material.' },
      { word: 'Conversely', meaning: '(adv.) Introducing a statement or idea that reverses one that has just been made.' },
      { word: 'Incentive', meaning: '(n.) A thing that motivates or encourages one to do something.' },
      { word: 'Equilibrium', meaning: '(n.) A state in which opposing forces or influences are balanced.' },
    ],
    questions: [
      {
        question: "What does the law of demand state?",
        options: ["As price increases, demand increases.", "As price decreases, demand decreases.", "As price increases, demand decreases.", "Price and demand are unrelated."],
        correctAnswer: 2,
        explanation: "The passage says, 'as the price of a good or service increases, consumer demand for the good or service will decrease'."
      },
      {
        question: "Why does the law of supply suggest that producers will supply more at a higher price?",
        options: ["Because they want to be nice to consumers", "Because higher prices offer a greater profit incentive", "Because their costs of production decrease", "Because of government regulations"],
        correctAnswer: 1,
        explanation: "The text states that 'higher prices offer a greater profit incentive for businesses to produce more'."
      },
      {
        question: "What is the name for the point where the supply and demand curves intersect?",
        options: ["The market price", "The profit point", "The equilibrium price", "The break-even point"],
        correctAnswer: 2,
        explanation: "The end of the third paragraph defines the intersection point as the 'equilibrium price'."
      },
      {
        question: "A demand curve typically has what kind of slope?",
        options: ["Upward-sloping", "Downward-sloping", "A flat, horizontal slope", "A vertical slope"],
        correctAnswer: 1,
        explanation: "The second paragraph explains that the relationship between price and quantity demanded is illustrated with a 'downward-sloping demand curve'."
      },
      {
        question: "What is the fundamental concept that supply and demand helps to explain?",
        options: ["How governments regulate markets", "Why consumers have limited resources", "How businesses are structured", "How prices are determined in a market economy"],
        correctAnswer: 3,
        explanation: "The first sentence states that the law of supply and demand 'explains how prices are determined in a market economy'."
      }
    ]
  },
  {
    id: 'impressionism',
    title: 'The Impressionist Movement',
    category: 'Art History',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "Impressionism was a radical art movement that began in the late 19th century in Paris, France. It marked a profound departure from the traditional, academic style of painting that had dominated European art for centuries. The Impressionists sought to capture a fleeting moment and the sensory effect of a scene—the 'impression'—rather than a detailed, realistic depiction. Key figures of this movement include Claude Monet, Edgar Degas, Pierre-Auguste Renoir, and Camille Pissarro. They challenged the established art world, organizing their own independent exhibitions after being rejected by the official Paris Salon."
      ),
      React.createElement(ArticleParagraph, null,
        "Several characteristics define Impressionist painting. One of the most notable is the use of relatively small, thin, yet visible brushstrokes that create a sense of movement and changing light. The artists were fascinated by light and color, and they often painted 'en plein air' (outdoors) to observe and capture the momentary effects of sunlight. They used a bright, vibrant palette and often applied unmixed colors directly to the canvas, allowing the viewer's eye to mix them optically. Their subject matter was also modern, focusing on everyday life—landscapes, cityscapes, and scenes of middle-class leisure—rather than the historical, religious, or mythological themes favored by the academic tradition."
      ),
      React.createElement(ArticleParagraph, null,
        'Initially, the movement was met with harsh criticism. The term "Impressionist" was actually coined by a critic as an insult, derived from the title of Monet\'s painting, "Impression, soleil levant" (Impression, Sunrise). Critics found their work to be sketchy, unfinished, and lacking in skill. However, over time, the public\'s perception began to change. The Impressionists\' innovative approach to light, color, and subject matter paved the way for modern art, influencing subsequent movements like Post-Impressionism and Cubism. Today, Impressionism is one of the most beloved and celebrated movements in art history.'
      )
    ),
    vocabulary: [
      { word: 'Radical', meaning: '(adj.) Relating to or affecting the fundamental nature of something; far-reaching or thorough.' },
      { word: 'Fleeting', meaning: '(adj.) Lasting for a very short time.' },
      { word: 'Vibrant', meaning: '(adj.) Bright and striking.' },
      { word: 'Palette', meaning: '(n.) The range of colors used by a particular artist or in a particular picture.' },
      { word: 'Subsequent', meaning: '(adj.) Coming after something in time; following.' },
    ],
    questions: [
      {
        question: "What was the primary goal of Impressionist painters?",
        options: ["To paint detailed, realistic portraits of royalty", "To capture the fleeting impression of a moment", "To create art based on historical events", "To follow the strict rules of the Paris Salon"],
        correctAnswer: 1,
        explanation: "The passage states that the Impressionists sought to capture 'a fleeting moment and the sensory effect of a scene—the impression'."
      },
      {
        question: "What does the term 'en plein air' mean?",
        options: ["In the studio", "With a vibrant palette", "Outdoors", "With visible brushstrokes"],
        correctAnswer: 2,
        explanation: "The text explains that artists painted 'en plein air' (outdoors) to capture the effects of sunlight."
      },
      {
        question: "How did the Impressionist movement get its name?",
        options: ["From a famous art school", "From the artists' own manifesto", "From a critic's insult based on a Monet painting", "From the name of their first exhibition"],
        correctAnswer: 2,
        explanation: "The passage notes that the term 'Impressionist' was 'coined by a critic as an insult, derived from the title of Monet's painting, Impression, soleil levant'."
      },
      {
        question: "Which of these is a characteristic of Impressionist painting?",
        options: ["A dark, muted color palette", "Smooth, invisible brushstrokes", "Focus on mythological themes", "Visible brushstrokes and a focus on light"],
        correctAnswer: 3,
        explanation: "The second paragraph lists 'visible brushstrokes' and a fascination with 'light and color' as defining characteristics."
      },
      {
        question: "What was the initial reaction to Impressionism?",
        options: ["Immediate and universal praise", "Indifference from the public and critics", "Harsh criticism and rejection by the art establishment", "It was instantly profitable for the artists"],
        correctAnswer: 2,
        explanation: "The final paragraph states that 'the movement was met with harsh criticism' and that critics found the work 'unfinished'."
      }
    ]
  },
  {
    id: 'exoplanets',
    title: 'The Search for Exoplanets',
    category: 'Astronomy',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "An exoplanet is any planet that orbits a star outside our solar system. For centuries, humanity has wondered whether we are alone in the universe, and the search for exoplanets is a crucial step in answering that question. The first confirmed detection of an exoplanet orbiting a sun-like star occurred in 1995, and since then, technology has advanced dramatically. Astronomers have now confirmed the existence of thousands of exoplanets, revealing a stunning diversity of worlds, from massive gas giants larger than Jupiter to small, rocky planets that might be similar to Earth."
      ),
      React.createElement(ArticleParagraph, null,
        "Detecting exoplanets is incredibly challenging because they are extremely faint and far away, and they are typically lost in the bright glare of the stars they orbit. Therefore, astronomers rely on indirect detection methods. The most successful of these is the transit method, used by space telescopes like NASA's Kepler and TESS. This method detects a slight, periodic dimming in a star's brightness, which can indicate that a planet is passing in front of it from our point of view. Another common technique is the radial velocity method, which measures the tiny \"wobble\" in a star's position caused by the gravitational pull of an orbiting planet."
      ),
      React.createElement(ArticleParagraph, null,
        'The ultimate goal for many astronomers is to find an Earth-like planet in the "habitable zone" of its star. The habitable zone, sometimes called the "Goldilocks zone," is the orbital region around a star where conditions are just right—not too hot and not too cold—for liquid water to exist on a planet\'s surface. Liquid water is considered essential for life as we know it. While we have found several rocky planets in the habitable zones of their stars, the next major step is to analyze their atmospheres. Future telescopes, like the James Webb Space Telescope, are powerful enough to study the light passing through an exoplanet\'s atmosphere, searching for biosignatures—gases like oxygen or methane—that could indicate the presence of life.'
      )
    ),
    vocabulary: [
      { word: 'Diversity', meaning: '(n.) A range of different things; variety.' },
      { word: 'Faint', meaning: '(adj.) Barely perceptible; weak.' },
      { word: 'Periodic', meaning: '(adj.) Appearing or occurring at intervals.' },
      { word: 'Habitable', meaning: '(adj.) Suitable or good enough to live in.' },
      { word: 'Biosignatures', meaning: '(n.) Substances or phenomena that provide scientific evidence of past or present life.' },
    ],
    questions: [
      {
        question: "What is an exoplanet?",
        options: ["A planet within our solar system", "A planet that orbits a star outside our solar system", "A moon that orbits a planet", "A dwarf planet like Pluto"],
        correctAnswer: 1,
        explanation: "The first sentence defines an exoplanet as 'any planet that orbits a star outside our solar system'."
      },
      {
        question: "What is the transit method for detecting exoplanets?",
        options: ["Measuring a star's wobble", "Taking a direct photograph of the planet", "Detecting a slight dimming in a star's brightness", "Analyzing a star's gravitational pull"],
        correctAnswer: 2,
        explanation: "The passage explains that the transit method 'detects a slight, periodic dimming in a star's brightness' as a planet passes in front of it."
      },
      {
        question: "What is the 'habitable zone' or 'Goldilocks zone'?",
        options: ["The area where a planet is visible from Earth", "The region around a star where liquid water could exist", "The zone where planets are always rocky", "The closest orbital path to a star"],
        correctAnswer: 1,
        explanation: "The text defines the habitable zone as the region where conditions are right 'for liquid water to exist on a planet's surface'."
      },
      {
        question: "Why is it so difficult to detect exoplanets directly?",
        options: ["Because they are too cold", "Because they are lost in the bright glare of their stars", "Because they move too fast", "Because most stars do not have planets"],
        correctAnswer: 1,
        explanation: "The second paragraph states that detecting them is challenging because they are 'extremely faint' and 'lost in the bright glare of the stars they orbit'."
      },
      {
        question: "What are biosignatures, which future telescopes will search for in exoplanet atmospheres?",
        options: ["Signs of water", "The size and mass of the planet", "Gases like oxygen or methane that could indicate life", "The brightness of the planet"],
        correctAnswer: 2,
        explanation: "The passage defines biosignatures as 'gases like oxygen or methane—that could indicate the presence of life'."
      }
    ]
  },
    {
    id: 'balanced-diet',
    title: 'The Benefits of a Balanced Diet',
    category: 'Health',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        'A balanced diet is one that provides the body with all the essential nutrients, vitamins, and minerals it needs to function correctly and maintain good health. Proper nutrition is a cornerstone of a healthy lifestyle, impacting everything from physical energy levels and disease prevention to mental clarity and emotional well-being. To achieve a balanced diet, one should consume a variety of foods from all major food groups: fruits, vegetables, grains, proteins, and dairy.'
      ),
      React.createElement(ArticleParagraph, null,
        "The core components of a healthy diet are macronutrients—carbohydrates, proteins, and fats—and micronutrients—vitamins and minerals. Carbohydrates, especially complex carbohydrates found in whole grains, are the body's primary source of energy. Proteins, found in meat, fish, beans, and nuts, are essential for building and repairing tissues. Healthy fats, such as those in avocados and olive oil, are crucial for brain health and hormone production. Micronutrients, while needed in smaller amounts, play vital roles. For example, Vitamin C is essential for the immune system, while calcium is critical for strong bones."
      ),
      React.createElement(ArticleParagraph, null,
        'The long-term benefits of consistently eating a balanced diet are numerous. It can significantly reduce the risk of chronic diseases such as heart disease, type 2 diabetes, and certain types of cancer. Maintaining a healthy weight is also easier with a nutritious diet, as nutrient-dense foods are often more filling and lower in calories than processed foods. Beyond physical health, nutrition has a profound effect on mental health. Diets rich in fruits, vegetables, and omega-3 fatty acids have been linked to a lower risk of depression and improved cognitive function. Therefore, viewing food as fuel for both the body and the mind is a key perspective for long-term health.'
      )
    ),
    vocabulary: [
      { word: 'Cornerstone', meaning: '(n.) An important quality or feature on which a particular thing depends or is based.' },
      { word: 'Macronutrients', meaning: '(n.) The main nutrients needed in large amounts: carbohydrates, proteins, and fats.' },
      { word: 'Micronutrients', meaning: '(n.) Essential nutrients needed in smaller amounts: vitamins and minerals.' },
      { word: 'Cognitive', meaning: '(adj.) Relating to the mental processes of thinking, learning, and understanding.' },
      { word: 'Processed foods', meaning: '(n.) Foods that have been altered from their natural state for safety or convenience.' },
    ],
    questions: [
      {
        question: "What is the primary purpose of a balanced diet?",
        options: ["To eat as little as possible", "To provide the body with essential nutrients for good health", "To eat only fruits and vegetables", "To avoid all fats"],
        correctAnswer: 1,
        explanation: "The first sentence states that a balanced diet provides 'all the essential nutrients, vitamins, and minerals it needs to function correctly and maintain good health'."
      },
      {
        question: "Which of the following are considered macronutrients?",
        options: ["Vitamins and minerals", "Carbohydrates, proteins, and fats", "Fruits and vegetables", "Calcium and Vitamin C"],
        correctAnswer: 1,
        explanation: "The second paragraph identifies carbohydrates, proteins, and fats as the core macronutrients."
      },
      {
        question: "What is the body's primary source of energy?",
        options: ["Proteins", "Fats", "Vitamins", "Carbohydrates"],
        correctAnswer: 3,
        explanation: "The text explains that carbohydrates 'are the body's primary source of energy'."
      },
      {
        question: "According to the passage, which of these is a long-term benefit of a balanced diet?",
        options: ["Increased risk of chronic disease", "Reduced risk of heart disease and diabetes", "Weight gain", "Reduced cognitive function"],
        correctAnswer: 1,
        explanation: "The third paragraph lists reducing the risk of chronic diseases like heart disease and diabetes as a major long-term benefit."
      },
      {
        question: "Besides physical health, what other aspect of well-being does a balanced diet impact?",
        options: ["Financial status", "Social life", "Mental health and cognitive function", "Athletic ability only"],
        correctAnswer: 2,
        explanation: "The passage notes that nutrition has a 'profound effect on mental health' and can improve cognitive function."
      }
    ]
  },
  {
    id: 'water-cycle',
    title: 'The Water Cycle',
    category: 'Science',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. This cycle is essential for all life on our planet, as it constantly replenishes the freshwater supply. The amount of water on Earth remains fairly constant over time, but it is always in motion, transitioning between liquid, vapor (gas), and ice (solid) states. The sun is the primary engine that drives the water cycle, providing the energy needed for its key processes."
      ),
      React.createElement(ArticleParagraph, null,
        "There are four main stages in the water cycle: evaporation, condensation, precipitation, and collection. Evaporation is the process where the sun's heat turns liquid water from oceans, lakes, and rivers into water vapor, which rises into the atmosphere. A related process is transpiration, where plants release water vapor from their leaves. Condensation is the opposite of evaporation; it is the process where water vapor in the air cools down and changes back into liquid water, forming clouds."
      ),
      React.createElement(ArticleParagraph, null,
        'When so much water has condensed that the air cannot hold it anymore, the clouds get heavy and water falls back to the Earth in the form of precipitation. This can be rain, hail, sleet, or snow. Finally, collection is what happens when water from precipitation gathers in one place. It may be collected in oceans, lakes, and rivers, or it may soak into the ground and become part of the groundwater that plants and animals use to drink. This collected water will eventually evaporate again, and the cycle continues, ensuring that water is distributed all around the planet.'
      )
    ),
    vocabulary: [
      { word: 'Hydrologic', meaning: '(adj.) Relating to the properties, distribution, and circulation of water.' },
      { word: 'Replenishes', meaning: '(v.) To fill something up again.' },
      { word: 'Vapor', meaning: '(n.) A substance diffused or suspended in the air, which is normally a liquid or solid.' },
      { word: 'Condensation', meaning: '(n.) The conversion of a vapor or gas to a liquid.' },
      { word: 'Precipitation', meaning: '(n.) Rain, snow, sleet, or hail that falls to the ground.' },
    ],
    questions: [
      {
        question: "What is the primary engine that drives the water cycle?",
        options: ["The moon", "The wind", "The sun", "The Earth's rotation"],
        correctAnswer: 2,
        explanation: "The passage states that 'The sun is the primary engine that drives the water cycle'."
      },
      {
        question: "What is condensation?",
        options: ["When liquid water turns into water vapor", "When water falls from the clouds as rain", "When water vapor cools and turns back into liquid", "When plants release water from their leaves"],
        correctAnswer: 2,
        explanation: "The text defines condensation as the process where 'water vapor in the air cools down and changes back into liquid water, forming clouds'."
      },
      {
        question: "Rain, hail, and snow are all forms of which stage of the water cycle?",
        options: ["Evaporation", "Collection", "Condensation", "Precipitation"],
        correctAnswer: 3,
        explanation: "The third paragraph identifies rain, hail, sleet, or snow as forms of precipitation."
      },
      {
        question: "What is transpiration?",
        options: ["The process of clouds forming", "Water collecting in oceans", "When plants release water vapor from their leaves", "When water turns from solid to liquid"],
        correctAnswer: 2,
        explanation: "The passage describes transpiration as a process where 'plants release water vapor from their leaves'."
      },
      {
        question: "What happens during the 'collection' stage?",
        options: ["Water vapor rises into the atmosphere", "Water falls back to the Earth", "Water gathers in places like oceans, lakes, or underground", "Clouds are formed"],
        correctAnswer: 2,
        explanation: "The passage explains that collection is when water from precipitation gathers in oceans, lakes, rivers, or as groundwater."
      }
    ]
  },
  {
    id: 'black-holes',
    title: 'The Enigma of Black Holes',
    category: 'Physics',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        'Black holes are among the most mysterious and extreme objects in the universe. A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The boundary of this region is called the event horizon. Crossing the event horizon is a point of no return. At the center of a black hole is a gravitational singularity, a one-dimensional point which contains a huge mass in an infinitely small space, where the laws of physics as we know them cease to apply.'
      ),
      React.createElement(ArticleParagraph, null,
        'The most common type of black hole, a stellar black hole, is formed when a massive star, many times larger than our sun, runs out of fuel. At the end of its life, the star collapses under its own gravity in a spectacular explosion known as a supernova. If the remaining core is massive enough, it will continue to collapse into a singularity, forming a black hole. Supermassive black holes, which are millions or even billions of times more massive than our sun, are believed to exist at the center of most galaxies, including our own Milky Way. Their formation is still an active area of research.'
      ),
      React.createElement(ArticleParagraph, null,
        "Because black holes do not emit any light, they are invisible to the naked eye. Astronomers detect them indirectly by observing their effects on nearby matter. For instance, if a star passes close to a black hole, it can be torn apart as it's pulled in. The material from the star forms a hot disk of gas and dust around the black hole, called an accretion disk, which emits intense X-rays that can be detected by telescopes. Astronomers can also infer the presence of a black hole by tracking the orbits of stars that appear to be circling an empty point in space."
      )
    ),
    vocabulary: [
        { word: 'Spacetime', meaning: '(n.) The concepts of time and three-dimensional space regarded as fused in a four-dimensional continuum.' },
        { word: 'Event Horizon', meaning: '(n.) The boundary of a black hole beyond which no light or other radiation can escape.' },
        { word: 'Singularity', meaning: '(n.) A point where matter is infinitely dense, as at the center of a black hole.' },
        { word: 'Supernova', meaning: '(n.) A catastrophic explosion of a star that ejects most of its mass.' },
        { word: 'Accretion Disk', meaning: '(n.) A rotating disk of gas and dust formed around a massive object, such as a black hole.' },
    ],
    questions: [
      {
        question: "What is the name of the boundary around a black hole known as the 'point of no return'?",
        options: ["The Singularity", "The Accretion Disk", "The Event Horizon", "The Supernova Remnant"],
        correctAnswer: 2,
        explanation: "The event horizon is the boundary beyond which nothing, not even light, can escape the black hole's gravitational pull."
      },
      {
        question: "How are stellar black holes typically formed?",
        options: ["From the collision of two galaxies", "From the collapse of a massive star", "During the Big Bang", "From dark matter"],
        correctAnswer: 1,
        explanation: "Stellar black holes form when a very massive star collapses at the end of its life in a supernova explosion."
      },
      {
        question: "Why can't astronomers see black holes directly?",
        options: ["They are too far away", "They are too small", "They are hidden by dust clouds", "They do not emit or reflect any light"],
        correctAnswer: 3,
        explanation: "A black hole's gravity is so strong that not even light can escape, making it impossible to observe directly."
      },
      {
        question: "How do scientists detect the presence of a black hole?",
        options: ["By listening for sound waves", "By observing its effect on nearby stars and gas", "By sending probes into them", "By seeing a dark spot in the sky"],
        correctAnswer: 1,
        explanation: "Astronomers detect black holes indirectly by observing the X-rays emitted by accretion disks or by tracking the orbits of nearby stars."
      },
      {
        question: "What is the infinitely dense point at the center of a black hole called?",
        options: ["The Core", "The Event Horizon", "The Accretion Disk", "The Singularity"],
        correctAnswer: 3,
        explanation: "The singularity is the one-dimensional point at the center where mass is compressed into an infinitely small space."
      }
    ]
  },
  {
    id: 'globe-theatre',
    title: "Shakespeare's Globe Theatre",
    category: 'Literature',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "The Globe Theatre is one of the most famous playhouses in history, primarily because of its association with the playwright William Shakespeare. The original Globe was built in 1599 in London by Shakespeare's playing company, the Lord Chamberlain's Men. It was a large, open-air, circular theatre, famously described in Shakespeare's play *Henry V* as a 'wooden O'. This architectural style was typical of Elizabethan playhouses and created an intimate and dynamic performance space where the audience surrounded the stage on three sides."
      ),
      React.createElement(ArticleParagraph, null,
        "Attending a play at the Globe was an experience for all social classes. The cheapest tickets, costing just one penny, were for the 'groundlings', who stood in the open yard around the stage, exposed to the elements. Wealthier patrons could pay more for seats in the three levels of covered galleries. The most expensive seats were the 'Lords' Rooms', located directly beside or even on the stage itself. Performances took place in the afternoon to take advantage of the natural daylight, as there was no stage lighting. The atmosphere was lively and often rowdy, with audiences freely eating, drinking, and interacting with the actors."
      ),
      React.createElement(ArticleParagraph, null,
        "The original Globe Theatre met a dramatic end in 1613. During a performance of *Henry VIII*, a theatrical cannon, used for special effects, misfired and set the thatched roof ablaze. The entire theatre burned to the ground within two hours. It was rebuilt on the same site the following year, but was eventually closed down by the Puritan government in 1642. The modern reconstruction, known as 'Shakespeare's Globe', opened in 1997 near the original site and continues to stage plays in a historically informed manner, offering audiences a glimpse into the theatrical world of Shakespeare's time."
      )
    ),
    vocabulary: [
        { word: 'Playhouse', meaning: '(n.) A theatre.' },
        { word: 'Patrons', meaning: '(n.) People who pay for seats, services, or entertainment; customers.' },
        { word: 'Thatched', meaning: '(adj.) Covered with straw or a similar dried plant material.' },
        { word: 'Ablaze', meaning: '(adj.) Burning fiercely.' },
        { word: 'Reconstruction', meaning: '(n.) The action or process of building something again.' },
    ],
    questions: [
      {
        question: "Who is the famous playwright most closely associated with the Globe Theatre?",
        options: ["Christopher Marlowe", "Ben Jonson", "William Shakespeare", "John Fletcher"],
        correctAnswer: 2,
        explanation: "The Globe Theatre was built by Shakespeare's playing company, and it's where many of his most famous plays were first performed."
      },
      {
        question: "What was the term for the audience members who stood in the open yard?",
        options: ["Commoners", "Peasants", "Yardlings", "Groundlings"],
        correctAnswer: 3,
        explanation: "The 'groundlings' paid one penny to stand in the yard in front of the stage."
      },
      {
        question: "Why were plays at the Globe performed in the afternoon?",
        options: ["It was too cold in the evenings", "The actors had other jobs in the morning", "To make use of natural daylight", "It was the law at the time"],
        correctAnswer: 2,
        explanation: "As an open-air theatre with no artificial lighting, performances relied on the sun for illumination."
      },
      {
        question: "What caused the original Globe Theatre to burn down in 1613?",
        options: ["An electrical fire", "A lightning strike", "A misfired theatrical cannon", "An accident with a candle"],
        correctAnswer: 2,
        explanation: "During a performance of *Henry VIII*, a special-effects cannon set fire to the theatre's thatched roof."
      },
      {
        question: "What shape was the Globe Theatre often described as?",
        options: ["A perfect square", "A 'wooden O'", "A grand rectangle", "A stone triangle"],
        correctAnswer: 1,
        explanation: "The theatre was a circular or polygonal building, famously referred to in Shakespeare's *Henry V* as a 'wooden O'."
      }
    ]
  },
  {
    id: 'cognitive-dissonance',
    title: 'Cognitive Dissonance',
    category: 'Psychology',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "Cognitive dissonance is a theory in social psychology, first proposed by Leon Festinger in 1957. It refers to the mental discomfort experienced by a person who holds two or more contradictory beliefs, ideas, or values, or when their beliefs are inconsistent with their actions. This discomfort creates a psychological tension, and people are motivated to take steps to reduce this tension and restore a sense of internal consistency."
      ),
      React.createElement(ArticleParagraph, null,
        "A classic example of cognitive dissonance is a person who smokes cigarettes while knowing that smoking is harmful to their health. The belief ('Smoking is bad for me') and the action ('I am smoking a cigarette') are in conflict. This conflict creates dissonance. To resolve this discomfort, the individual has a few options. They might change their behavior (quit smoking), which is often the most difficult path. Alternatively, they might try to justify their behavior by changing one of the dissonant cognitions. For instance, they could downplay the health risks ('The risks are not as severe as they say')."
      ),
      React.createElement(ArticleParagraph, null,
        "Another way to reduce dissonance is by adding new cognitions that support the behavior. The smoker might tell themselves, 'Smoking helps me relax, and stress is also bad for my health,' or 'I exercise regularly, so that cancels out the negative effects of smoking.' By adding these new thoughts, they create a mental balance that makes the contradictory behavior feel more acceptable. The theory of cognitive dissonance explains many aspects of human behavior, including how we rationalize our choices, justify our efforts, and change our attitudes after making a decision."
      )
    ),
    vocabulary: [
        { word: 'Contradictory', meaning: '(adj.) Mutually opposed or inconsistent.' },
        { word: 'Cognitions', meaning: '(n.) The mental processes of acquiring knowledge through thought, experience, and the senses.' },
        { word: 'Dissonance', meaning: '(n.) A tension or clash resulting from the combination of two disharmonious elements.' },
        { word: 'Rationalize', meaning: '(v.) To justify one\'s behavior or attitude with logical but false reasons.' },
        { word: 'Downplay', meaning: '(v.) To make something appear less important than it really is.' },
    ],
    questions: [
      {
        question: "What is cognitive dissonance?",
        options: ["A state of happiness", "A mental illness", "The mental discomfort from holding conflicting beliefs or actions", "A type of learning"],
        correctAnswer: 2,
        explanation: "Cognitive dissonance is the psychological tension that arises from a conflict between one's beliefs and actions, or between two conflicting beliefs."
      },
      {
        question: "Who first proposed the theory of cognitive dissonance?",
        options: ["Sigmund Freud", "B.F. Skinner", "Abraham Maslow", "Leon Festinger"],
        correctAnswer: 3,
        explanation: "The passage identifies Leon Festinger as the social psychologist who proposed the theory in 1957."
      },
      {
        question: "According to the passage, what is often the most difficult way for a smoker to resolve their cognitive dissonance?",
        options: ["Justifying their smoking", "Downplaying the health risks", "Changing their behavior (quitting)", "Adding new beliefs"],
        correctAnswer: 2,
        explanation: "The text states that changing one's behavior, such as quitting smoking, 'is often the most difficult path'."
      },
      {
        question: "A person thinking, 'I deserve this expensive dessert because I had a hard week,' is an example of what?",
        options: ["Changing behavior", "Experiencing dissonance", "Adding a new cognition to justify behavior", "Ignoring the conflict"],
        correctAnswer: 2,
        explanation: "This is an example of adding a new thought or justification to make a behavior feel more acceptable and reduce the discomfort of the dissonance."
      },
      {
        question: "What is the primary motivation for people to reduce cognitive dissonance?",
        options: ["To please others", "To restore a sense of internal consistency", "To learn new things", "To save money"],
        correctAnswer: 1,
        explanation: "The passage explains that people are motivated to reduce the psychological tension and 'restore a sense of internal consistency'."
      }
    ]
  },
  {
    id: 'plate-tectonics',
    title: 'The Theory of Plate Tectonics',
    category: 'Geology',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "The theory of plate tectonics is the unifying framework of modern geology, explaining how the Earth's surface features are created and how they move. It posits that the Earth's outermost layer, the lithosphere, is broken into a mosaic of large, rigid pieces called tectonic plates. These plates are not static; they are constantly moving, floating on the semi-fluid asthenosphere beneath them. This movement, driven by convection currents in the Earth's mantle, is incredibly slow, typically only a few centimeters per year—about the same speed that your fingernails grow."
      ),
      React.createElement(ArticleParagraph, null,
        "The interactions between these plates occur at their boundaries, which are the primary locations for most of the world's earthquakes and volcanic activity. There are three main types of plate boundaries. At divergent boundaries, plates move away from each other, allowing magma from the mantle to rise and create new oceanic crust. At convergent boundaries, plates collide. This can result in one plate being forced to slide beneath the other (a process called subduction) or in both plates crumpling and pushing upwards to form massive mountain ranges, like the Himalayas. The third type, transform boundaries, occurs where plates slide horizontally past one another, often causing powerful earthquakes, such as those along the San Andreas Fault in California."
      ),
      React.createElement(ArticleParagraph, null,
        "The concept of plate tectonics also explains the idea of continental drift, first proposed by Alfred Wegener. Evidence suggests that millions of years ago, all the continents were joined together in a single supercontinent known as Pangaea. Over time, the movement of the tectonic plates caused Pangaea to break apart, and the continents have been slowly drifting to their present positions ever since. This ongoing movement continues to shape our planet's geography, creating new oceans and mountains over geological time."
      )
    ),
    vocabulary: [
        { word: 'Unifying', meaning: '(adj.) Bringing together or causing to become one.' },
        { word: 'Posits', meaning: '(v.) To put forward as a fact or basis for argument.' },
        { word: 'Static', meaning: '(adj.) Lacking in movement, action, or change.' },
        { word: 'Subduction', meaning: '(n.) The downward movement of the edge of one tectonic plate into the mantle beneath another plate.' },
        { word: 'Continental Drift', meaning: '(n.) The gradual movement of the continents across the Earth\'s surface over time.' },
    ],
    questions: [
      {
        question: "What is the Earth's rigid outer layer that is broken into tectonic plates called?",
        options: ["The Asthenosphere", "The Mantle", "The Lithosphere", "The Core"],
        correctAnswer: 2,
        explanation: "The passage states that the lithosphere is the Earth's outermost layer, which is broken into tectonic plates."
      },
      {
        question: "What typically happens at a convergent plate boundary?",
        options: ["Plates move away from each other", "Plates slide horizontally past each other", "Plates collide, causing mountains or subduction", "New crust is formed"],
        correctAnswer: 2,
        explanation: "At convergent boundaries, plates collide, which can result in the formation of mountain ranges or one plate sliding under another."
      },
      {
        question: "The San Andreas Fault is a famous example of which type of boundary?",
        options: ["Divergent", "Convergent", "Subduction", "Transform"],
        correctAnswer: 3,
        explanation: "The passage mentions the San Andreas Fault as an example of a transform boundary, where plates slide horizontally past one another."
      },
      {
        question: "What was the name of the supercontinent that existed millions of years ago?",
        options: ["Gondwana", "Laurasia", "Rodinia", "Pangaea"],
        correctAnswer: 3,
        explanation: "The text identifies Pangaea as the single supercontinent that later broke apart due to the movement of tectonic plates."
      },
      {
        question: "What is the primary driving force behind the movement of tectonic plates?",
        options: ["The Earth's rotation", "The pull of the moon's gravity", "Convection currents in the Earth's mantle", "Wind and water erosion"],
        correctAnswer: 2,
        explanation: "The first paragraph states that the movement is 'driven by convection currents in the Earth's mantle'."
      }
    ]
  },
  {
    id: 'printing-press',
    title: 'The Invention of the Printing Press',
    category: 'History',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "The invention of the printing press with movable type in the mid-15th century by Johannes Gutenberg in Germany was a watershed moment in human history. Before this invention, books were rare and expensive commodities, painstakingly copied by hand by scribes. This process was slow, prone to errors, and meant that knowledge was largely confined to the wealthy elite and religious institutions. Gutenberg's innovation was not the press itself, but the combination of a press with mass-produced, reusable metal letters—movable type—that could be arranged to form text, inked, and printed onto paper."
      ),
      React.createElement(ArticleParagraph, null,
        "The impact of the printing press was immediate and profound. It allowed for the mass production of books and other texts at a fraction of the cost of hand-copying. This led to an explosion in the availability of information and a dramatic increase in literacy rates across Europe. For the first time, ideas could be disseminated quickly and widely, transcending geographical boundaries. The printing press played a crucial role in advancing the Renaissance, the Scientific Revolution, and the Age of Enlightenment by making scholarly works and new discoveries accessible to a much broader audience."
      ),
      React.createElement(ArticleParagraph, null,
        "One of the most significant early impacts of the printing press was on the Protestant Reformation. In 1517, Martin Luther's Ninety-five Theses, which criticized the practices of the Catholic Church, was printed and distributed throughout Germany and Europe within months. This rapid spread of his ideas would have been impossible in the age of scribes and allowed the Reformation to gain momentum and challenge the established religious order. In essence, the printing press democratized knowledge, empowering individuals and fueling the social, religious, and political transformations that shaped the modern world."
      )
    ),
    vocabulary: [
        { word: 'Watershed', meaning: '(n.) An event or period marking a turning point in a course of action.' },
        { word: 'Scribes', meaning: '(n.) People who copied out documents before the invention of printing.' },
        { word: 'Disseminated', meaning: '(v.) To spread something, especially information, widely.' },
        { word: 'Literacy', meaning: '(n.) The ability to read and write.' },
        { word: 'Democratized', meaning: '(v.) To make something accessible to everyone.' },
    ],
    questions: [
      {
        question: "Who is credited with inventing the printing press with movable type in Europe?",
        options: ["Leonardo da Vinci", "Johannes Gutenberg", "Martin Luther", "William Caxton"],
        correctAnswer: 1,
        explanation: "The passage clearly identifies Johannes Gutenberg as the inventor of the printing press with movable type in the mid-15th century."
      },
      {
        question: "What was the key innovation that made Gutenberg's printing press so revolutionary?",
        options: ["The use of paper instead of parchment", "The design of the press itself", "The creation of mass-produced, reusable metal movable type", "The invention of a new kind of ink"],
        correctAnswer: 2,
        explanation: "The text specifies that Gutenberg's main innovation was 'the combination of a press with mass-produced, reusable metal letters—movable type'."
      },
      {
        question: "What was a major direct consequence of the printing press?",
        options: ["A decrease in the number of universities", "A dramatic increase in literacy rates", "The standardization of a single European language", "A decline in the importance of art"],
        correctAnswer: 1,
        explanation: "The ability to mass-produce books made them cheaper and more accessible, leading to a significant increase in literacy."
      },
      {
        question: "The printing press played a crucial role in the rapid spread of ideas during which major religious movement?",
        options: ["The Counter-Reformation", "The Great Schism", "The Protestant Reformation", "The First Crusade"],
        correctAnswer: 2,
        explanation: "The passage highlights how the printing press allowed Martin Luther's Ninety-five Theses to be distributed widely, fueling the Protestant Reformation."
      },
      {
        question: "Before the printing press, how were most books created?",
        options: ["Through oral dictation", "They were carved into stone tablets", "They were painstakingly copied by hand", "They were printed using wooden blocks"],
        correctAnswer: 2,
        explanation: "The text states that before Gutenberg's invention, books were 'painstakingly copied by hand by scribes'."
      }
    ]
  },
  {
    id: 'history-of-internet',
    title: 'A Brief History of the Internet',
    category: 'Computer Science',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "The internet, a technology that has fundamentally reshaped modern society, did not emerge overnight. Its origins can be traced back to the 1960s with a United States military project called ARPANET (Advanced Research Projects Agency Network). The primary goal of ARPANET was to create a decentralized communication network that could withstand a potential nuclear attack. Unlike centralized networks with a single point of failure, a decentralized one would allow messages to be rerouted if one part of the network was damaged, ensuring communication could continue."
      ),
      React.createElement(ArticleParagraph, null,
        "A major breakthrough occurred in the 1970s with the development of TCP/IP (Transmission Control Protocol/Internet Protocol). This suite of communication protocols, primarily designed by Vinton Cerf and Robert Kahn, created a standard for how data could be transmitted between different networks. This innovation effectively created a 'network of networks,' which is the essence of the modern internet. During this period, the internet was largely the domain of government agencies, corporations, and academic researchers, who used it for sending emails and transferring files."
      ),
      React.createElement(ArticleParagraph, null,
        "The internet as we know it today, a user-friendly and graphically rich environment, was born with the advent of the World Wide Web in 1989. Invented by British computer scientist Tim Berners-Lee, the Web introduced concepts like websites, web pages, browsers, and hyperlinks, making information easily accessible and navigable for a non-technical audience. This innovation transformed the internet from a complex tool for specialists into a global public resource, sparking an information revolution that continues to evolve."
      )
    ),
    vocabulary: [
      { word: 'Decentralized', meaning: '(adj.) Controlled by several local offices or authorities rather than one single one.' },
      { word: 'Protocol', meaning: '(n.) A set of rules governing the exchange or transmission of data between devices.' },
      { word: 'Hyperlink', meaning: '(n.) A link from a hypertext file or document to another location or file.' },
      { word: 'Browser', meaning: '(n.) A software application for accessing information on the World Wide Web.' },
      { word: 'Advent', meaning: '(n.) The arrival of a notable person, thing, or event.' },
    ],
    questions: [
      {
        question: "What was the original purpose of ARPANET?",
        options: ["To create a commercial sales network", "To build a global library", "To create a decentralized military communication network", "To connect universities for social purposes"],
        correctAnswer: 2,
        explanation: "The passage states that ARPANET's goal was to create a communication network that could withstand a potential nuclear attack."
      },
      {
        question: "What was the crucial protocol that standardized communication and created a 'network of networks'?",
        options: ["HTTP", "HTML", "TCP/IP", "FTP"],
        correctAnswer: 2,
        explanation: "TCP/IP, designed by Vinton Cerf and Robert Kahn, created a standard for how data could be transmitted between different networks."
      },
      {
        question: "Who is credited with inventing the World Wide Web?",
        options: ["Vinton Cerf", "Robert Kahn", "The U.S. Military", "Tim Berners-Lee"],
        correctAnswer: 3,
        explanation: "The text clearly states that the World Wide Web was invented by British computer scientist Tim Berners-Lee in 1989."
      },
      {
        question: "What key feature of the World Wide Web made it more accessible to the general public?",
        options: ["Email and file transfers", "Increased connection speed", "Browsers and hyperlinks", "Military-grade security"],
        correctAnswer: 2,
        explanation: "The invention of browsers and hyperlinks by Tim Berners-Lee made the Web easy to navigate for non-technical users."
      },
      {
        question: "Before the World Wide Web, the internet was primarily used by which groups?",
        options: ["The general public", "Artists and musicians", "Government, corporations, and academic researchers", "High school students"],
        correctAnswer: 2,
        explanation: "The passage mentions that the internet was largely the domain of government agencies, corporations, and academic researchers for tasks like email."
      }
    ]
  },
  {
    id: 'language-acquisition',
    title: 'How Children Acquire Language',
    category: 'Linguistics',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "Language acquisition in children is one of the most remarkable and seemingly effortless feats of human development. Within just a few years, a child goes from being a non-verbal infant to a fluent speaker of their native language. This process has long fascinated linguists, who debate the relative importance of innate ability versus environmental input. While the environment provides the language to be learned, most experts agree that humans have an inborn capacity for language that guides this rapid acquisition."
      ),
      React.createElement(ArticleParagraph, null,
        "Children's language development follows a predictable pattern of stages. It begins with cooing and gurgling sounds, followed by babbling, where infants experiment with the phonetic sounds of language. Around the age of one, children typically enter the one-word, or 'holophrastic,' stage, where a single word like 'juice' can represent a complex idea like 'I want juice.' This is followed by the two-word stage and then 'telegraphic speech,' where children form short, simple sentences that omit functional words, such as 'Mommy go car'."
      ),
      React.createElement(ArticleParagraph, null,
        "Social interaction plays a crucial role in this process. Caregivers instinctively use what is known as 'child-directed speech'—a simplified, high-pitched, and repetitive way of talking that helps children learn words and sentence structures. Furthermore, many linguists support the 'critical period hypothesis,' which suggests there is a specific window of time in early childhood when the brain is uniquely primed for language acquisition. After this period, learning a language becomes significantly more difficult, which helps explain why children seem to learn languages so much more easily than adults."
      )
    ),
    vocabulary: [
      { word: 'Innate', meaning: '(adj.) Inborn; natural.' },
      { word: 'Acquisition', meaning: '(n.) The learning or developing of a skill, habit, or quality.' },
      { word: 'Holophrastic', meaning: '(adj.) Expressing a complex of ideas in a single word or phrase.' },
      { word: 'Telegraphic Speech', meaning: '(n.) A form of communication consisting of simple two-word long sentences.' },
      { word: 'Hypothesis', meaning: '(n.) A supposition or proposed explanation made on the basis of limited evidence.' },
    ],
    questions: [
      {
        question: "What is the 'holophrastic' stage of language development?",
        options: ["Using two-word sentences", "Using a single word to express a complex idea", "Babbling with different sounds", "Cooing and gurgling"],
        correctAnswer: 1,
        explanation: "The holophrastic stage is when a child uses a single word to represent an entire thought or sentence."
      },
      {
        question: "What is 'child-directed speech'?",
        options: ["When a child directs a conversation", "A complex way of talking to children", "The simplified, high-pitched way caregivers talk to children", "The first words a child learns"],
        correctAnswer: 2,
        explanation: "Child-directed speech is the specific, simplified manner of speaking that adults use with young children to facilitate learning."
      },
      {
        question: "What is the correct order of the earliest language development stages?",
        options: ["Babbling, cooing, one-word stage", "One-word stage, babbling, cooing", "Cooing, babbling, one-word stage", "Cooing, two-word stage, babbling"],
        correctAnswer: 2,
        explanation: "The passage outlines the progression from cooing to babbling, and then to the one-word stage."
      },
      {
        question: "What does the 'critical period hypothesis' suggest?",
        options: ["Children must be corrected critically", "There is a specific time frame for easily acquiring language", "Language can be acquired at any age with equal ease", "Children learn language by criticizing others"],
        correctAnswer: 1,
        explanation: "The critical period hypothesis posits that there is an optimal window in early childhood for language learning."
      },
      {
        question: "The passage suggests that language acquisition is primarily a result of what?",
        options: ["Only innate ability", "Only environmental learning", "A combination of innate capacity and environmental interaction", "Direct instruction from parents"],
        correctAnswer: 2,
        explanation: "The text concludes that language acquisition is a product of both our inborn capacity for language and the social environment."
      }
    ]
  },
  {
    id: 'stoicism-philosophy',
    title: 'An Introduction to Stoicism',
    category: 'Philosophy',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "Stoicism is a school of philosophy that originated in ancient Greece and flourished in Rome. Its primary goal is not to eliminate emotions, but to achieve a state of inner peace and tranquility, known as 'apatheia,' by cultivating virtue and living in accordance with nature. The Stoics taught that by focusing our energy on what we can control and accepting what we cannot, we can build resilience against life's inevitable challenges."
      ),
      React.createElement(ArticleParagraph, null,
        "The core principle of Stoicism is the 'dichotomy of control.' This idea, most famously articulated by the Roman Stoic Epictetus, divides all aspects of life into two categories: things that are within our control and things that are not. Within our control are our own thoughts, judgments, and actions. Outside of our control are virtually all external events, such as our health, our reputation, and what other people do. Stoics argue that we should focus our attention exclusively on the former and accept the latter with equanimity."
      ),
      React.createElement(ArticleParagraph, null,
        "This philosophy is not about passive resignation but about active self-improvement. Stoics practice four cardinal virtues: wisdom (understanding the world), justice (treating others fairly), courage (facing challenges), and temperance (practicing moderation). By viewing adversity not as a misfortune but as an opportunity to practice these virtues, a Stoic can maintain their inner calm regardless of external circumstances. This practical approach has made Stoicism a relevant and enduring philosophy for those seeking resilience in the modern world."
      )
    ),
    vocabulary: [
      { word: 'Dichotomy', meaning: '(n.) A division or contrast between two things that are or are represented as being opposed or entirely different.' },
      { word: 'Virtue', meaning: '(n.) Behavior showing high moral standards.' },
      { word: 'Temperance', meaning: '(n.) Moderation or self-restraint.' },
      { word: 'Resilience', meaning: '(n.) The capacity to recover quickly from difficulties; toughness.' },
      { word: 'Equanimity', meaning: '(n.) Mental calmness, composure, and evenness of temper, especially in a difficult situation.' },
    ],
    questions: [
      {
        question: "What is the main goal of Stoicism?",
        options: ["To eliminate all emotions", "To become wealthy", "To achieve inner peace and tranquility", "To gain power over others"],
        correctAnswer: 2,
        explanation: "The passage states that the primary goal is to achieve 'a state of inner peace and tranquility'."
      },
      {
        question: "What is the 'Dichotomy of Control'?",
        options: ["A debate between two philosophers", "A list of Stoic virtues", "The separation of what you can control from what you cannot", "A method for controlling others"],
        correctAnswer: 2,
        explanation: "This core principle divides life into things within our control (our actions, thoughts) and things outside our control (external events)."
      },
      {
        question: "According to Stoicism, which of the following is within our control?",
        options: ["The weather", "Other people's opinions of us", "Our own judgments and actions", "Our health"],
        correctAnswer: 2,
        explanation: "The Stoics argue that we can only control our internal world: our thoughts, judgments, and actions."
      },
      {
        question: "How do Stoics suggest viewing challenges or adversity?",
        options: ["As punishments to be avoided", "As signs of failure", "As opportunities to practice virtue", "As random, meaningless events"],
        correctAnswer: 2,
        explanation: "The passage explains that Stoics view adversity 'as an opportunity to practice these virtues'."
      },
      {
        question: "Which of the following is NOT one of the four cardinal virtues of Stoicism mentioned?",
        options: ["Wisdom", "Courage", "Wealth", "Justice"],
        correctAnswer: 2,
        explanation: "The four virtues listed are wisdom, justice, courage, and temperance. Wealth is an external factor, not a virtue."
      }
    ]
  },
  {
    id: 'social-norms',
    title: 'Understanding Social Norms',
    category: 'Sociology',
    content: React.createElement(React.Fragment, null,
      React.createElement(ArticleParagraph, null,
        "Social norms are the unwritten rules of behavior that are considered acceptable within a particular group or society. They function as a kind of social glue, guiding our interactions and creating a sense of predictability and order. Norms tell us what is 'normal' in a given situation, from how to greet someone to what to wear to a formal event. While laws are formal, written rules, norms are informal and are learned through observation, socialization, and interaction with others."
      ),
      React.createElement(ArticleParagraph, null,
        "Sociologists often categorize norms into different types. 'Folkways' are the customs of everyday life, like saying 'please' and 'thank you' or not talking with your mouth full. Violating a folkway might be seen as rude, but it doesn't typically provoke a strong reaction. 'Mores' (pronounced mor-ays) are norms that are based on moral values and beliefs. Actions like stealing or cheating are violations of mores, and they often result in more serious social disapproval. 'Taboos' are the most powerful type of norm; they are actions that are considered so offensive or repellent that they are almost unthinkable within a society. Norms are enforced through social sanctions, which can be positive (like a smile or a compliment for conforming) or negative (like a frown or social ostracism for violating)."
      ),
      React.createElement(ArticleParagraph, null,
        "It is important to remember that social norms are not universal; they vary significantly from one culture to another. For example, a common greeting in one culture might be a firm handshake, while in another it might be a bow. What is considered polite in one society may be rude in another. These cultural differences highlight the socially constructed nature of norms and their importance in shaping our daily lives and maintaining social order."
      )
    ),
    vocabulary: [
      { word: 'Sanctions', meaning: '(n.) Mechanisms of social control for enforcing a society\'s standards.' },
      { word: 'Folkways', meaning: '(n.) The traditional behavior or way of life of a particular community or group of people.' },
      { word: 'Mores', meaning: '(n.) The essential or characteristic customs and conventions of a community based on morality.' },
      { word: 'Taboo', meaning: '(n.) A social custom prohibiting or forbidding a particular practice.' },
      { word: 'Predictability', meaning: '(n.) The quality of being able to be predicted or known in advance.' },
    ],
    questions: [
      {
        question: "What are social norms?",
        options: ["Formal laws written by the government", "The unwritten rules of acceptable behavior in a society", "Personal opinions about what is right and wrong", "Scientific rules about human behavior"],
        correctAnswer: 1,
        explanation: "The passage defines social norms as 'the unwritten rules of behavior that are considered acceptable within a particular group or society'."
      },
      {
        question: "Which type of norm relates to everyday customs and politeness, like saying 'thank you'?",
        options: ["Mores", "Folkways", "Taboos", "Laws"],
        correctAnswer: 1,
        explanation: "'Folkways' are described as the customs of everyday life, and violating them is considered rude but not a major offense."
      },
      {
        question: "How are social norms typically enforced?",
        options: ["Only through police action and courts", "Through social sanctions like approval or disapproval", "They are not enforced", "By a person's individual choice"],
        correctAnswer: 1,
        explanation: "The passage states that norms are enforced through 'social sanctions,' which can be positive or negative reactions from others."
      },
      {
        question: "What is the main function of social norms in a society?",
        options: ["To make life more difficult", "To eliminate individuality", "To maintain social order and predictability", "To ensure everyone has the same beliefs"],
        correctAnswer: 2,
        explanation: "The text explains that norms guide our interactions and create 'a sense of predictability and order'."
      },
      {
        question: "The fact that a handshake is a common greeting in one culture while a bow is common in another illustrates what about social norms?",
        options: ["That some cultures are better than others", "That norms are universal and do not change", "That norms are not important", "That norms vary significantly across different cultures"],
        correctAnswer: 3,
        explanation: "This example is used to show that norms 'vary significantly from one culture to another' and are not universal."
      }
    ]
  }
];
