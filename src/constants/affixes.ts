
import { AffixCategory } from '../types';

export const PREFIX_CATEGORIES: AffixCategory[] = [
  {
    category: 'Negative & Opposite Prefixes',
    description: 'These prefixes reverse the meaning of the root word.',
    affixes: [
      { affix: 'un-', meaning: 'not, opposite of', example: 'happy → <span class="font-bold">un</span>happy' },
      { affix: 'dis-', meaning: 'not, away from', example: 'agree → <span class="font-bold">dis</span>agree' },
      { affix: 'in-, im-, il-, ir-', meaning: 'not, without', example: 'correct → <span class="font-bold">in</span>correct, possible → <span class="font-bold">im</span>possible, legal → <span class="font-bold">il</span>legal, regular → <span class="font-bold">ir</span>regular' },
      { affix: 'mis-', meaning: 'wrongly, badly', example: 'understand → <span class="font-bold">mis</span>understand' },
      { affix: 'non-', meaning: 'not', example: 'sense → <span class="font-bold">non</span>sense' },
      { affix: 'de-', meaning: 'opposite, from, away', example: 'frost → <span class="font-bold">de</span>frost' },
      { affix: 'anti-', meaning: 'against, opposing', example: 'social → <span class="font-bold">anti</span>social' },
    ],
  },
  {
    category: 'Time & Order Prefixes',
    description: 'These prefixes relate to when or in what order something happens.',
    affixes: [
      { affix: 'pre-', meaning: 'before', example: 'view → <span class="font-bold">pre</span>view' },
      { affix: 'post-', meaning: 'after', example: 'war → <span class="font-bold">post</span>war' },
      { affix: 're-', meaning: 'again, back', example: 'do → <span class="font-bold">re</span>do' },
      { affix: 'fore-', meaning: 'before', example: 'see → <span class="font-bold">fore</span>see' },
    ],
  },
  {
    category: 'Number & Quantity Prefixes',
    description: 'These prefixes specify a number or amount.',
    affixes: [
      { affix: 'uni-, mono-', meaning: 'one', example: 'cycle → <span class="font-bold">uni</span>cycle, rail → <span class="font-bold">mono</span>rail' },
      { affix: 'bi-, di-', meaning: 'two', example: 'cycle → <span class="font-bold">bi</span>cycle, oxide → <span class="font-bold">di</span>oxide' },
      { affix: 'tri-', meaning: 'three', example: 'angle → <span class="font-bold">tri</span>angle' },
      { affix: 'multi-', meaning: 'many', example: 'tasking → <span class="font-bold">multi</span>tasking' },
      { affix: 'poly-', meaning: 'many', example: 'gon → <span class="font-bold">poly</span>gon' },
      { affix: 'semi-', meaning: 'half', example: 'circle → <span class="font-bold">semi</span>circle' },
    ],
  },
  {
    category: 'Position & Relation Prefixes',
    description: 'These prefixes describe position, location, or relationship.',
    affixes: [
      { affix: 'inter-', meaning: 'between, among', example: 'national → <span class="font-bold">inter</span>national' },
      { affix: 'trans-', meaning: 'across, beyond', example: 'atlantic → <span class="font-bold">trans</span>atlantic' },
      { affix: 'sub-', meaning: 'under, below', example: 'marine → <span class="font-bold">sub</span>marine' },
      { affix: 'super-', meaning: 'above, over', example: 'star → <span class="font-bold">super</span>star' },
      { affix: 'co-, com-', meaning: 'with, together', example: 'worker → <span class="font-bold">co</span>worker, plete → <span class="font-bold">com</span>plete' },
      { affix: 'pro-', meaning: 'for, forward', example: 'active → <span class="font-bold">pro</span>active' },
      { affix: 'auto-', meaning: 'self', example: 'biography → <span class="font-bold">auto</span>biography' },
    ],
  },
];

export const SUFFIX_CATEGORIES: AffixCategory[] = [
  {
    category: 'Noun Suffixes',
    description: 'These suffixes are added to words to form nouns, which can represent an action, state, or person.',
    affixes: [
      { affix: '-tion, -sion', meaning: 'act or state of', example: 'create → crea<span class="font-bold">tion</span>, decide → deci<span class="font-bold">sion</span>' },
      { affix: '-ment', meaning: 'action or result', example: 'govern → govern<span class="font-bold">ment</span>' },
      { affix: '-ness', meaning: 'state or quality of', example: 'happy → happi<span class="font-bold">ness</span>' },
      { affix: '-er, -or, -ist', meaning: 'one who does', example: 'teach → teach<span class="font-bold">er</span>, act → act<span class="font-bold">or</span>, art → art<span class="font-bold">ist</span>' },
      { affix: '-ity', meaning: 'state or quality of', example: 'equal → equal<span class="font-bold">ity</span>' },
      { affix: '-ship', meaning: 'position held, state of being', example: 'friend → friend<span class="font-bold">ship</span>' },
      { affix: '-ance, -ence', meaning: 'state or quality of', example: 'import → import<span class="font-bold">ance</span>, differ → differ<span class="font-bold">ence</span>' },
      { affix: '-hood', meaning: 'state or condition', example: 'child → child<span class="font-bold">hood</span>' },
      { affix: '-ology', meaning: 'study of', example: 'bio → bi<span class="font-bold">ology</span>' },
    ],
  },
  {
    category: 'Adjective Suffixes',
    description: 'These suffixes turn other words into adjectives, which describe nouns.',
    affixes: [
      { affix: '-able, -ible', meaning: 'can be done', example: 'comfort → comfort<span class="font-bold">able</span>, edible → ed<span class="font-bold">ible</span>' },
      { affix: '-al', meaning: 'having the quality of', example: 'nation → nation<span class="font-bold">al</span>' },
      { affix: '-ful', meaning: 'full of', example: 'care → care<span class="font-bold">ful</span>' },
      { affix: '-less', meaning: 'without', example: 'care → care<span class="font-bold">less</span>' },
      { affix: '-ous', meaning: 'characterized by', example: 'danger → danger<span class="font-bold">ous</span>' },
      { affix: '-ic', meaning: 'having the quality of', example: 'hero → hero<span class="font-bold">ic</span>' },
      { affix: '-y', meaning: 'characterized by', example: 'rain → rain<span class="font-bold">y</span>' },
      { affix: '-ish', meaning: 'having the quality of a', example: 'child → child<span class="font-bold">ish</span>' },
      { affix: '-ive', meaning: 'having the nature of', example: 'create → creat<span class="font-bold">ive</span>' },
    ],
  },
  {
    category: 'Verb Suffixes',
    description: 'These suffixes are used to create verbs, which are action words.',
    affixes: [
      { affix: '-ate', meaning: 'become', example: 'active → activ<span class="font-bold">ate</span>' },
      { affix: '-en', meaning: 'become', example: 'light → light<span class="font-bold">en</span>' },
      { affix: '-ify', meaning: 'make or become', example: 'simple → simpl<span class="font-bold">ify</span>' },
      { affix: '-ize, -ise', meaning: 'become', example: 'modern → modern<span class="font-bold">ize</span>' },
    ],
  },
  {
    category: 'Adverb Suffixes',
    description: 'These suffixes typically turn adjectives into adverbs, describing how an action is performed.',
    affixes: [
      { affix: '-ly', meaning: 'in the manner of', example: 'quick → quick<span class="font-bold">ly</span>' },
      { affix: '-ward(s)', meaning: 'in a direction', example: 'for → for<span class="font-bold">ward</span>' },
      { affix: '-wise', meaning: 'in relation to', example: 'clock → clock<span class="font-bold">wise</span>' },
    ],
  },
];
