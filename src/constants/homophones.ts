
import { WordGroup } from '../types';

export const HOMOPHONES: WordGroup[] = [
  {
    group: "Their / They're / There",
    words: [
      { word: 'their', meaning: 'Possessive pronoun.', example: 'The students lost their books.' },
      { word: "they're", meaning: "Contraction of 'they are'.", example: "They're coming to the party." },
      { word: 'there', meaning: 'Indicates a place.', example: 'Please put it over there.' },
    ],
  },
  {
    group: 'To / Too / Two',
    words: [
      { word: 'to', meaning: 'Preposition or part of an infinitive.', example: 'I am going to the store.' },
      { word: 'too', meaning: 'Also, or to an excessive degree.', example: 'It is too cold outside.' },
      { word: 'two', meaning: 'The number 2.', example: 'She has two dogs.' },
    ],
  },
  {
    group: 'Your / You\'re',
    words: [
      { word: 'your', meaning: 'Possessive pronoun.', example: 'Is this your coat?' },
      { word: "you're", meaning: "Contraction of 'you are'.", example: "You're doing a great job." },
    ],
  },
  {
    group: 'By / Buy / Bye',
    words: [
        { word: 'by', meaning: 'Preposition indicating location or means.', example: 'The book was written by him.' },
        { word: 'buy', meaning: 'To purchase something.', example: 'I need to buy some milk.' },
        { word: 'bye', meaning: 'A short way of saying goodbye.', example: 'Bye! See you tomorrow.' },
    ]
  }
];

export const HOMONYMS: WordGroup[] = [
  {
    group: 'Bat',
    words: [
      { word: 'bat', meaning: 'A piece of equipment used for hitting a ball in sports.', example: 'He swung the bat and hit a home run.' },
      { word: 'bat', meaning: 'A nocturnal flying mammal.', example: 'We saw a bat fly out of the cave.' },
    ],
  },
  {
    group: 'Bank',
    words: [
      { word: 'bank', meaning: 'A financial institution.', example: 'I need to go to the bank to deposit a check.' },
      { word: 'bank', meaning: 'The land alongside a river.', example: 'We had a picnic on the river bank.' },
    ],
  },
  {
    group: 'Right',
    words: [
      { word: 'right', meaning: 'Correct or true.', example: 'That is the right answer.' },
      { word: 'right', meaning: 'A direction, opposite of left.', example: 'Turn right at the next corner.' },
    ]
  }
];

export const HOMOGRAPHS: WordGroup[] = [
  {
    group: 'Lead',
    words: [
      { word: 'lead', pronunciation: '/liːd/', meaning: 'To guide or be in charge.', example: 'She will lead the team.' },
      { word: 'lead', pronunciation: '/lɛd/', meaning: 'A heavy metal.', example: 'The pencil is made of graphite, not lead.' },
    ],
  },
  {
    group: 'Wind',
    words: [
      { word: 'wind', pronunciation: '/wɪnd/', meaning: 'Moving air.', example: 'The wind is very strong today.' },
      { word: 'wind', pronunciation: '/waɪnd/', meaning: 'To turn or coil something.', example: 'You need to wind the clock.' },
    ],
  },
  {
    group: 'Bass',
    words: [
        { word: 'bass', pronunciation: '/beɪs/', meaning: 'A type of fish, or a low-frequency sound/instrument.', example: 'He plays the bass guitar.' },
        { word: 'bass', pronunciation: '/bæs/', meaning: 'A type of freshwater fish.', example: 'He caught a large-mouthed bass.' },
    ]
  }
];
