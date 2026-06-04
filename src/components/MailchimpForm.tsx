import React, { useState } from 'react';

// All countries sorted alphabetically
const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina',
  'Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados',
  'Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana',
  'Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon',
  'Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros',
  'Congo (Brazzaville)','Congo (Kinshasa)','Costa Rica','Croatia','Cuba','Cyprus',
  'Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt',
  'El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji',
  'Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada',
  'Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland',
  'India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan',
  'Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho',
  'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia',
  'Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia',
  'Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia',
  'Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea',
  'North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama',
  'Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania',
  'Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines',
  'Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia',
  'Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia',
  'South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname',
  'Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste',
  'Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda',
  'Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan',
  'Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe',
];

interface FormState {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  country: string;
}

const MailchimpForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    country: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first_name.trim() || !form.email.trim() || !form.country) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setForm({ first_name: '', last_name: '', phone: '', email: '', country: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  const inputClass =
    'w-full pl-11 pr-4 py-3 text-base rounded-xl border-2 border-slate-200 dark:border-slate-600 ' +
    'bg-white dark:bg-slate-700/80 text-slate-900 dark:text-slate-100 ' +
    'placeholder-slate-400 dark:placeholder-slate-500 ' +
    'focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 ' +
    'focus:ring-4 focus:ring-blue-500/15 dark:focus:ring-blue-400/20 ' +
    'transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-500';

  const labelClass = 'block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5';

  // Reusable icon wrapper for inputs (absolutely positioned)
  const iconWrap = 'pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500';

  // Social links sourced from ContactPage.tsx
  const SOCIAL_LINKS = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61583183701358',
      hoverClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://whatsapp.com/channel/0029Vb6i9yXFi8xcJydowe0F',
      hoverClass: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/typo-grammar-2a1872396/',
      hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@TypoGrammar',
      hoverClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/Typo_Grammar',
      hoverClass: 'hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/TypoGrammar',
      hoverClass: 'hover:bg-[#26A5E4] hover:text-white hover:border-[#26A5E4]',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
  ];

  // Left panel: branded TypoGrammar illustration with logo, decorative shapes, and tagline
  const LeftPanel = () => (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-8 lg:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-full text-white">
      {/* Floating decorative shapes */}
      <div className="pointer-events-none absolute top-6 right-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm rotate-12 animate-pulse" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-20 right-6 w-10 h-10 rounded-full bg-amber-300/30 blur-sm" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 left-6 w-8 h-8 rounded-lg bg-white/15 -rotate-12" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-300/20 blur-3xl" aria-hidden="true" />

      {/* Logo + brand */}
      <div className="relative flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg ring-1 ring-white/40">
          <img src="/FAVICON.svg" alt="TypoGrammar logo" className="w-9 h-9" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">TypoGrammar</p>
          <p className="text-xs text-white/70">Learn English. Build confidence.</p>
        </div>
      </div>

      {/* Headline + illustration */}
      <div className="relative mt-6 lg:mt-0">
        <h2 className="font-poppins text-2xl sm:text-3xl lg:text-[2rem] font-extrabold leading-tight mb-3">
          Master English<br />
          <span className="text-amber-300">one lesson</span> at a time.
        </h2>
        <p className="text-sm text-white/85 max-w-[260px] leading-relaxed">
          Join <span className="font-semibold text-white">1,000+ learners</span> getting clear, practical grammar tips weekly.
        </p>

        {/* Decorative learner illustration (inline SVG) */}
        <div className="relative mt-6 hidden lg:block">
          <svg viewBox="0 0 220 130" className="w-full max-w-[240px] drop-shadow-xl" aria-hidden="true">
            {/* Desk */}
            <rect x="20" y="100" width="180" height="8" rx="2" fill="#fbbf24" />
            <rect x="30" y="108" width="6" height="18" fill="#fbbf24" />
            <rect x="184" y="108" width="6" height="18" fill="#fbbf24" />
            {/* Monitor */}
            <rect x="45" y="55" width="60" height="42" rx="3" fill="#1e293b" stroke="#fff" strokeWidth="2" />
            <rect x="49" y="59" width="52" height="30" fill="#60a5fa" />
            <text x="75" y="78" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">ABC</text>
            <rect x="70" y="97" width="10" height="3" fill="#1e293b" />
            {/* Books stack */}
            <rect x="120" y="88" width="34" height="6" rx="1" fill="#f472b6" />
            <rect x="123" y="82" width="28" height="6" rx="1" fill="#34d399" />
            <rect x="126" y="76" width="22" height="6" rx="1" fill="#fbbf24" />
            {/* Pencil */}
            <rect x="160" y="92" width="30" height="4" rx="1" fill="#fde68a" transform="rotate(-15 175 94)" />
            {/* Person head */}
            <circle cx="75" cy="40" r="12" fill="#fde68a" />
            <path d="M65 38 Q75 28 85 38" stroke="#1e293b" strokeWidth="3" fill="none" />
            {/* Person body */}
            <path d="M60 95 Q60 70 75 65 Q90 70 90 95 Z" fill="#a78bfa" />
            {/* Arm raised */}
            <path d="M88 70 Q105 55 110 40" stroke="#fde68a" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Floating letter */}
            <text x="125" y="38" fontSize="18" fontWeight="900" fill="#fde68a">A+</text>
          </svg>
        </div>
      </div>

      {/* Bottom rating */}
      <div className="relative mt-6 flex items-center gap-2">
        <span className="flex" aria-hidden="true">
          {[0, 1, 2, 3, 4].map(i => (
            <svg key={i} className="w-4 h-4 text-amber-300 fill-amber-300" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          ))}
        </span>
        <span className="text-xs font-medium text-white/90">Loved by learners worldwide</span>
      </div>
    </div>
  );

  if (status === 'success') {
    return (
      <div className="w-full max-w-5xl mx-auto my-6 sm:my-8 md:my-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-[2px] shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20">
          <div className="relative overflow-hidden rounded-[1.4rem] bg-white dark:bg-slate-800 p-4 sm:p-5">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4 lg:gap-6">
              <LeftPanel />
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-emerald-950/40 dark:via-slate-800 dark:to-blue-950/40 p-8 sm:p-10 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 text-center flex flex-col items-center justify-center">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/30 ring-8 ring-emerald-100 dark:ring-emerald-900/40">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-poppins text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    You're in!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base max-w-md mx-auto">{message}</p>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    Check your inbox — your first lesson lands soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-6 sm:my-8 md:my-12">
      {/* Gradient border wrapper */}
      <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-[2px] shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-white dark:bg-slate-800 p-4 sm:p-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-4 lg:gap-6">
            <LeftPanel />

            {/* Right side: form */}
            <div className="relative p-2 sm:p-4 lg:p-6 flex flex-col">
              {/* Decorative background glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" aria-hidden="true" />

              {/* Header */}
              <div className="relative mb-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-poppins text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                    Subscribe
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[10px] font-semibold uppercase tracking-wider border border-blue-100 dark:border-blue-800/60">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Free
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Get weekly grammar tips, IELTS &amp; TOEFL strategies, and real examples in your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="relative flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="first_name" className={labelClass}>
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className={iconWrap} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="John"
                    value={form.first_name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className={labelClass}>
                  Last Name <span className="text-slate-400 font-normal text-xs">(optional)</span>
                </label>
                <div className="relative">
                  <span className={iconWrap} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Doe"
                    value={form.last_name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className={iconWrap} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="text-slate-400 font-normal text-xs">(optional)</span>
                </label>
                <div className="relative">
                  <span className={iconWrap} aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414L9.414 8.414a11.042 11.042 0 005.171 5.171l1.293-1.293a1 1 0 011.414 0l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2H17C9.82 21 3 14.18 3 7V5z" />
                    </svg>
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 555 123 4567"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="country" className={labelClass}>
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className={iconWrap} aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <select
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className={inputClass + ' appearance-none pr-10 cursor-pointer'}
                >
                  <option value="">— Select your country —</option>
                  {COUNTRIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>

            {status === 'error' && (
              <div
                role="alert"
                aria-live="polite"
                className="mb-4 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative w-full py-4 px-6 text-base font-bold tracking-wide text-white
                bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700
                rounded-xl transition-all duration-300 hover:-translate-y-0.5
                shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40
                active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:translate-y-0
                focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Subscribing…
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Subscribe
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>

            {/* Trust line */}
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              No spam, ever. Unsubscribe in one click.
            </p>

              {/* Social media footer */}
              <div className="mt-auto pt-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Follow us</span>
                  <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                </div>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {SOCIAL_LINKS.map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className={`w-9 h-9 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-700/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${s.hoverClass}`}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailchimpForm;
