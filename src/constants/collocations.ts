
import { CollocationCategory } from '../types';

export const COLLOCATION_CATEGORIES: CollocationCategory[] = [
  {
    category: 'Verb + Noun',
    description: 'These collocations involve a common verb paired with a noun.',
    collocations: [
      { collocation: 'make a decision', example: 'I need to make a decision about my future.' },
      { collocation: 'take a risk', example: 'Starting a business always involves taking a risk.' },
      { collocation: 'do your homework', example: 'Please do your homework before you watch TV.' },
      { collocation: 'give advice', example: 'Could you give me some advice?' },
      { collocation: 'break a promise', example: 'It\'s important not to break a promise.' },
      { collocation: 'catch a cold', example: 'Wear a jacket, or you might catch a cold.' },
      { collocation: 'save time', example: 'Taking the highway will save us time.' },
    ],
  },
  {
    category: 'Adjective + Noun',
    description: 'These collocations consist of an adjective that is typically used to describe a particular noun.',
    collocations: [
      { collocation: 'heavy rain', example: 'We cancelled the picnic because of the heavy rain.' },
      { collocation: 'strong coffee', example: 'I need a strong coffee to wake up this morning.' },
      { collocation: 'deep sleep', example: 'He was in a deep sleep and didn\'t hear the alarm.' },
      { collocation: 'high-paying job', example: 'She is looking for a high-paying job in finance.' },
      { collocation: 'rich vocabulary', example: 'Reading books is a great way to build a rich vocabulary.' },
      { collocation: 'common knowledge', example: 'It is common knowledge that the Earth is round.' },
    ],
  },
  {
    category: 'Adverb + Adjective',
    description: 'In these collocations, an adverb is used to intensify or modify an adjective.',
    collocations: [
      { collocation: 'deeply concerned', example: 'She was deeply concerned about her exam results.' },
      { collocation: 'bitterly disappointed', example: 'He was bitterly disappointed when he didn\'t get the job.' },
      { collocation: 'highly successful', example: 'Her new book was highly successful.' },
      { collocation: 'painfully shy', example: 'As a child, I was painfully shy.' },
      { collocation: 'fully aware', example: 'I am fully aware of the consequences.' },
      { collocation: 'utterly ridiculous', example: 'His excuse for being late was utterly ridiculous.' },
    ],
  },
];
