import { CaseStudy, ArchiveItem, FAQItem, BeliefItem } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'systembolaget-app',
    slug: 'redesigning-systembolagets-app-for-960-usage-growth',
    client: 'Systembolaget',
    title: "A 960% usage lift on Systembolaget's app",
    subtitle: "Sweden's state-owned alcohol retail monopoly. By 2021, its app had outgrown its scope, misaligned with the website, cluttered with unused features, and frustrating at every key journey.",
    heroImage: '/_astro/1.CVz39yy4_ZwWGEc.webp',
    role: 'Lead Product Designer & Design Strategist',
    timeline: '18 months (Embedded)',
    metrics: [
      { label: 'Weekly Active Users', value: '+960%' },
      { label: 'Store Journey Speed', value: '-65% time' },
      { label: 'App Store Rating', value: '4.8 / 5' }
    ],
    overview: 'Systembolaget holds a state monopoly in Sweden, serving over 10 million residents. In 2021, the mobile app had accumulated years of technical and design debt. Key customer flows like finding store availability, organizing lists, and finding shelf locations were disconnected from store reality.',
    goals: [
      {
        title: 'Align platforms',
        description: 'Reconcile the web and mobile experiences so customers moved between digital touchpoints seamlessly.'
      },
      {
        title: 'Fix core journeys',
        description: 'Strip out bloated secondary features and streamline inventory lookups, shopping lists, and store map navigation.'
      },
      {
        title: 'Drive adoption',
        description: 'Transform an auxiliary tool into an indispensable companion for in-store visits and home planning.'
      }
    ],
    process: [
      {
        title: 'Data before opinions',
        description: 'Analyzed quantitative analytics across 2M+ sessions alongside qualitative store shadowing to expose where customers abandoned tasks.'
      },
      {
        title: 'A multi-method research programme',
        description: 'Conducted in-store observations across 14 retail locations and remote usability labs with diverse user demographics.'
      },
      {
        title: 'Interaction logic locked before visual design',
        description: 'Engineered information architecture and tactile tap targets for quick one-handed usage in physical supermarket aisles.'
      },
      {
        title: 'Prioritisation as a design responsibility',
        description: 'Worked directly with the product owner and engineering leads to prune 40% of low-utility feature bloat.'
      }
    ],
    userNeeds: [
      {
        title: 'Check nearby store assortment',
        description: 'Immediate confidence whether a specific vintage or bottle is on the shelf in their nearest branch.'
      },
      {
        title: 'Locate products in store',
        description: 'Precise shelf and aisle indicators so customers do not wander through vast warehouse-style branches.'
      },
      {
        title: 'Create and manage shopping lists',
        description: 'Real-time synchronization with web baskets and effortless item ticking off in store.'
      }
    ],
    researchFindings: [
      {
        title: 'Lists not synced',
        description: 'Users built lists on desktop only to find an empty app screen upon entering the store.'
      },
      {
        title: 'Too many steps to save a product',
        description: 'Saving a favourite required three modal levels, causing 78% drop-off.'
      },
      {
        title: 'Store selection was broken',
        description: 'Location services frequently defaulted to distant warehouses rather than closest walkable outlets.'
      }
    ],
    shipped: [
      {
        title: 'Synced shopping lists',
        description: 'Real-time bidirectional cloud sync across web accounts and mobile devices with offline-first caching.'
      },
      {
        title: 'Simplified add-to-list flow',
        description: 'One-tap shelf saves directly from search queries, catalogue cards, and barcode scans.'
      },
      {
        title: 'Unified visual language',
        description: 'Introduced the new Systembolaget Design System tokens, ensuring accessible contrast and dark-mode compliance.'
      },
      {
        title: 'Decluttered navigation',
        description: 'Streamlined bottom navigation to 4 primary pillars: Search, In-Store, Lists, and Account.'
      }
    ],
    results: [
      {
        title: '960% sustained usage lift',
        description: 'Active users multiplied nearly ten-fold within 12 months following launch.'
      },
      {
        title: 'Industry acclaim',
        description: 'Rated best retail mobile app in the Nordics, with over 100,000 positive App Store reviews.'
      }
    ]
  },
  {
    id: 'fundler',
    slug: 'how-design-strategy-took-fundler-from-nps-4-to-19',
    client: 'Fundler',
    title: 'How design strategy took Fundler from NPS -4 to +19',
    subtitle: 'Robo-advisory fintech competing in automated wealth management. When trust is everything, ambiguous interface states and jargon cost millions in lost deposits.',
    heroImage: '/_astro/fundler-thumb.BM6t6htQ_Z1t95qi.webp',
    role: 'Fractional Head of Design & Product Strategy',
    timeline: '12 months',
    metrics: [
      { label: 'NPS Lift', value: '-4 to +19' },
      { label: 'Deposit Conversion', value: '+42%' },
      { label: 'Time to First Investment', value: '<3 mins' }
    ],
    overview: 'Fundler offered algorithmic fund management with minimal fees. Yet user onboarding suffered from extreme anxiety around risk assessments, Swedish BankID handoffs, and unclear projections. Simon stepped in to restructure the entire product language and design system.',
    goals: [
      {
        title: 'Humanize wealth management',
        description: 'Eliminate cold regulatory jargon and replace it with transparent, reassuring visual financial forecasts.'
      },
      {
        title: 'Re-engineer onboarding',
        description: 'Turn a tedious 18-step legal compliance questionnaire into a fluid, educational dialog.'
      },
      {
        title: 'Establish a living design system',
        description: 'Enable the engineering team to deploy new fund products in days instead of quarters.'
      }
    ],
    process: [
      {
        title: 'Full customer empathy audit',
        description: 'Interviewed churned signups and active savers to uncover emotional barriers to transferring capital.'
      },
      {
        title: 'Transparent projection graphs',
        description: 'Designed interactive compound growth simulators showing bull and bear scenarios in plain terms.'
      },
      {
        title: 'Design-ops and component library',
        description: 'Built a shared React/Figma token architecture that accelerated feature turnaround by 3x.'
      }
    ],
    shipped: [
      {
        title: 'Conversational risk profiling',
        description: 'Interactive scenario slider that visually clarifies risk vs reward without intimidating formulas.'
      },
      {
        title: 'Instant portfolio breakdowns',
        description: 'Clear pie and sector visualizers demonstrating diversification across global equities and bonds.'
      },
      {
        title: 'Automated monthly saving rules',
        description: 'Frictionless BankID direct-debit integration increasing recurring deposit adoption.'
      }
    ],
    results: [
      {
        title: 'NPS surged from -4 to +19',
        description: 'Turned customer sentiment around, establishing Fundler as one of Sweden’s top-rated wealth apps.'
      },
      {
        title: '42% higher conversion to funded accounts',
        description: 'Direct bottom-line impact that helped fuel subsequent institutional acquisition.'
      }
    ]
  },
  {
    id: 'electrolux-flashbuild',
    slug: 'flashbuild-creating-an-app-in-5-days-with-lean-ux',
    client: 'Electrolux',
    title: 'Driving executive buy-in in a 5-day Lean UX sprint',
    subtitle: 'Global appliance giant needed to validate an IoT smart kitchen concept before committing millions in firmware and native engineering budgets.',
    videoSrc: '/_astro/flashbuild.BSCcZCU_.mp4',
    role: 'Lead UX Sprint Master & Prototyper',
    timeline: '5-Day Rapid Sprint',
    metrics: [
      { label: 'Validation Time', value: '5 Days' },
      { label: 'Executive Greenlight', value: '100% Unanimous' },
      { label: 'Engineering Savings', value: '€1.2M+' }
    ],
    overview: 'Electrolux leadership faced conflicting visions for connected kitchen appliances. Rather than spending 6 months in speculative committee meetings, Simon orchestrated a 5-day Lean UX sprint to build a high-fidelity interactive prototype connected to simulated IoT hardware, tested with real cooks on Day 5.',
    goals: [
      {
        title: 'Kill endless speculation',
        description: 'Move from PowerPoint debates to tangible, interactive proof of concept.'
      },
      {
        title: 'Validate with real consumers',
        description: 'Observe actual home cooks interacting with assisted cooking prompts under pressure.'
      },
      {
        title: 'De-risk hardware investment',
        description: 'Identify flaws in the companion app mental model before firmware was frozen.'
      }
    ],
    process: [
      {
        title: 'Day 1: Map and align',
        description: 'Interviewed VP stakeholders, unified the business problem, and selected the single riskiest assumption.'
      },
      {
        title: 'Day 2: Sketch competing solutions',
        description: 'Lightning demos and Crazy 8s exercises generating divergent UX hypotheses.'
      },
      {
        title: 'Day 3: Storyboard & decide',
        description: 'Locked the critical user journey and drafted detailed wireframes.'
      },
      {
        title: 'Day 4: High-fidelity prototype',
        description: 'Built a lifelike prototype with authentic micro-interactions, responsive states, and connected video simulation.'
      },
      {
        title: 'Day 5: 5 User tests & executive showcase',
        description: 'Streamed live user testing sessions directly into the boardroom, providing indisputable behavioural data.'
      }
    ],
    shipped: [
      {
        title: 'Interactive high-fidelity kitchen companion app',
        description: 'Full multi-step guided recipes with real-time temperature probe triggers.'
      },
      {
        title: 'Executive decision framework',
        description: 'Clear evidence dossier documenting what features users loved and what to discard.'
      }
    ],
    results: [
      {
        title: 'Unanimous executive sign-off',
        description: 'Secured full budget approval in a single afternoon with zero debate.'
      },
      {
        title: 'Saved €1.2M in misguided dev costs',
        description: 'Prevented building 4 complex secondary hardware features that users found confusing.'
      }
    ]
  },
  {
    id: 'benify',
    slug: '230-percent-conversion-lift-on-benifydeals',
    client: 'Benify',
    title: '230% conversion lift on BenifyDeals in three weeks',
    subtitle: 'Global employee benefits platform used by millions. BenifyDeals offered corporate perks and discounts, but navigation friction choked transaction volume.',
    heroImage: '/_astro/ben-thumb.CnwXfd_e_Z1FXYPG.webp',
    role: 'Staff Product Designer & Growth Consultant',
    timeline: '3 Weeks (Sprint intervention)',
    metrics: [
      { label: 'Conversion Lift', value: '+230%' },
      { label: 'Time to Purchase', value: '-48%' },
      { label: 'Basket Value', value: '+35%' }
    ],
    overview: 'Benify serves over 2 million enterprise employees worldwide. Its deals portal generated significant traffic, but employees rarely completed redemptions due to multi-step coupon codes, cluttered filtering, and confusing merchant partner redirects.',
    goals: [
      {
        title: 'Remove checkout friction',
        description: 'Simplify how users discover, unlock, and redeem perks on desktop and mobile.'
      },
      {
        title: 'Revamp visual merchandising',
        description: 'Present offers with high-impact editorial layouts rather than endless uncurated discount tiles.'
      },
      {
        title: 'Accelerate conversion velocity',
        description: 'Deliver an immediate, measurable revenue lift within the quarterly commercial window.'
      }
    ],
    process: [
      {
        title: 'Funnel drop-off telemetry',
        description: 'Pinpointed exact checkout steps where 65% of potential buyers dropped off due to coupon confusion.'
      },
      {
        title: 'Friction-free redemption redesign',
        description: 'Streamlined redemption into a single-click copy-and-go experience with instant code application.'
      },
      {
        title: 'Live A/B testing sprint',
        description: 'Shipped iterative experiments to 100,000 active users, calibrating card layout and urgency cues.'
      }
    ],
    shipped: [
      {
        title: 'Curated category collections',
        description: 'Seasonal editorial hubs (Tech, Travel, Wellness) boosting exploration depth.'
      },
      {
        title: 'One-click promo activation',
        description: 'Direct deep-linking that auto-applied corporate discounts in merchant carts.'
      },
      {
        title: 'Responsive card system',
        description: 'High-contrast typography and clear savings badges highlighting actual money saved.'
      }
    ],
    results: [
      {
        title: '230% conversion lift in 21 days',
        description: 'Validated through statistically significant A/B test results across enterprise cohorts.'
      },
      {
        title: 'Permanent adoption into core portal',
        description: 'Patterns rolled out globally across all Benify European enterprise installations.'
      }
    ]
  },
  {
    id: 'systembolaget-ecommerce',
    slug: 'redesigning-systembolagets-e-commerce-experience',
    client: 'Systembolaget',
    title: 'Redesigning e-commerce for 74.9M annual visits under regulatory constraint',
    subtitle: 'Systembolaget.se is one of Sweden’s largest web destinations. By law, the monopoly cannot promote consumption or discount products. Design had to educate, inform, and serve without commercial sales gimmicks.',
    heroImage: '/_astro/5.BeqOEFVg_Z2qMytD.webp',
    role: 'Lead UX Architect & Design System Lead',
    timeline: '24 months',
    metrics: [
      { label: 'Annual Visits', value: '74.9M' },
      { label: 'Task Completion Rate', value: '94%' },
      { label: 'Accessibility Score', value: 'WCAG AAA' }
    ],
    overview: 'Operating an e-commerce platform with 75 million annual visits under strict legal public-health mandates requires a unique design approach. Standard commercial dark patterns, flash sales, and upselling algorithms are strictly forbidden. The design mandate was pure service excellence, uncompromising accessibility, and effortless product information.',
    goals: [
      {
        title: 'World-class accessibility',
        description: 'Ensure every Swedish citizen, regardless of disability or device, can browse and order without barriers.'
      },
      {
        title: 'Flawless product discoverability',
        description: 'Make a catalogue of 20,000+ items searchable by flavor profile, origin, pairing, and eco-certification.'
      },
      {
        title: 'Scalable multi-brand design system',
        description: 'Establish resilient tokens and UI patterns that withstand years of iterative development.'
      }
    ],
    process: [
      {
        title: 'Flavor-clock and sensory architecture',
        description: 'Translated complex sommelier taste indicators (sweetness, body, tannin, acidity) into universally intuitive dial charts.'
      },
      {
        title: 'Rigorous accessibility testing',
        description: 'Co-designed with blind, visually impaired, and motor-impaired tester panels to surpass WCAG 2.1 AAA.'
      },
      {
        title: 'High-density search and filtering',
        description: 'Engineered faceted filtering handling millions of instantaneous catalogue queries.'
      }
    ],
    shipped: [
      {
        title: 'Accessible sensory flavor profiles',
        description: 'Interactive SVG flavor clocks with full screen-reader semantic equivalents.'
      },
      {
        title: 'Multi-store inventory locator',
        description: 'Real-time shelf inventory mapping across 440+ physical stores statewide.'
      },
      {
        title: 'The Systembolaget Design System (SDS)',
        description: 'Robust React component library serving multiple development squads across web and native.'
      }
    ],
    results: [
      {
        title: '94% self-service task completion',
        description: 'Drastically reduced customer service helpline load during peak festive periods.'
      },
      {
        title: 'Sweden’s highest rated public sector digital service',
        description: 'Awarded national digital design excellence honors for usability and inclusive design.'
      }
    ]
  }
];

export const BRANDS = [
  { name: 'Electrolux', logo: '/_astro/electrolux-logo.B3VXWHtR.png' },
  { name: 'Klarna', logo: '/_astro/klarna-logo.CDEAB1Wy.png' },
  { name: 'Benify', logo: '/_astro/benify-logo.D5X6C7dK.png' },
  { name: 'Unibet', logo: '/_astro/unibet-logo.DXV7ki4w.png' },
  { name: 'Webhallen', logo: '/_astro/webhallen-logo.DvMne1Wx.png' },
  { name: 'Brittfurn', logo: '/_astro/brittfurn-logo.UohI-26i.png' },
  { name: 'Systembolaget', logo: '/_astro/systembolaget-logo.Ci78CUBA.png' },
  { name: 'Clarion Hotels', logo: '/_astro/clarionhotels-logo.Cw4D1GrF.png' },
  { name: 'Renault', logo: '/_astro/renault-logo.CGbkgD8I.png' },
  { name: 'Studentapan', logo: '/_astro/studentapan-logo.BJcJlleU.png' },
  { name: 'Nacka Byggnadsvård', logo: '/_astro/nackabyggnadsvard-logo.hGWCFdTd.png' },
  { name: 'Fundler', logo: '/_astro/fundler-logo.Dly60pj5.png' }
];

export const GROWTH_STATS = [
  { value: '15+', num: 15, suffix: '+', label: { en: 'Scale ups', sv: 'Scale-ups' } },
  { value: '100+', num: 100, suffix: '+', label: { en: 'Products launched', sv: 'Lanserade produkter' } },
  { value: '70+', num: 70, suffix: '+', label: { en: 'E-commerce stores', sv: 'E-handelsbutiker' } },
  { value: '10+', num: 10, suffix: '+', label: { en: 'Design systems', sv: 'Designsystem' } }
];

export const HOW_PHASES = [
  {
    num: '01',
    title: { en: 'Read', sv: 'Läs' },
    body: {
      en: 'I embed with your team and find where the product is leaking: conversion, velocity, quality. I trace each leak to its cause. Nothing gets reorganised in phase one.',
      sv: 'Jag går in i ditt team och identifierar var produkten läcker: konvertering, hastighet, kvalitet. Jag spårar varje läcka till dess orsak. Inget omorganiseras i fas ett.'
    }
  },
  {
    num: '02',
    title: { en: 'Direct', sv: 'Rikta' },
    body: {
      en: "With your product leadership, we settle what's worth building and map every initiative to its effect on the business. Bets with expected returns, not a feature list.",
      sv: 'Tillsammans med din produktledning bestämmer vi vad som är värt att bygga och kopplar varje initiativ till dess effekt på affären. Satsningar med förväntad avkastning, inte en kravlista.'
    }
  },
  {
    num: '03',
    title: { en: 'Build', sv: 'Bygg' },
    body: {
      en: 'I ship alongside your team and build the patterns they ship with. Every release gets measured against the outcome we set. Coaching happens in the work itself.',
      sv: 'Jag levererar sida vid sida med ditt team och bygger mönstren de skeppar med. Varje release mäts mot utfallet vi satt upp. Coachning sker i det faktiska arbetet.'
    }
  },
  {
    num: '04',
    title: { en: 'Hand over', sv: 'Lämna över' },
    body: {
      en: "Direction, system and standards get documented and owned by your team. The bar holds whether I'm in the room or not.",
      sv: 'Riktning, system och standarder dokumenteras och ägs av ditt team. Standarden hålls oavsett om jag är i rummet eller inte.'
    }
  }
];

export const FAQS: { en: FAQItem[]; sv: FAQItem[] } = {
  en: [
    {
      question: 'What do you actually offer?',
      answer:
        'Fractional staff-level design leadership. I join your product team a set number of days per week and work on two levels at the same time: the strategic, where we set the direction and decide what is worth building, and the practical, where I build the design systems and processes your team ships with. You get the impact of a staff-level designer without the recruitment, the onboarding time or the full-time cost. And we own the outcome together, as one team.'
    },
    {
      question: "What's the return on investment?",
      answer:
        'Speed, first of all. Not by working harder, but by removing what slows teams down: systems that make it fast and easy to build and change things, processes that reduce friction between design, product and engineering, and a clear direction so every change moves toward the same goal. That speed leads to more relevance and more innovation, because a team that ships and learns faster stays ahead of its market. And everyone wins: customers get a better product, teams get sharper and more confident, managers get momentum, partners get results. Nineteen years across e-commerce, fintech and consumer products, and the pattern is always the same.'
    },
    {
      question: 'When is this the right fit?',
      answer:
        'When you are scaling a product and design has become the bottleneck: decisions take too long, quality varies between teams, and shipping is slower than it should be. If you want staff-level direction without hiring more people, and a team that ships more with the people you already have, this is exactly what I do.'
    },
    {
      question: 'When is it not the right fit?',
      answer:
        'When the direction is already set and you only need someone to execute. That is a hiring problem, and a good senior designer costs less than I do. I work upstream, where what to build is still an open question. If that room does not exist, I will tell you on the first call and save us both the time.'
    },
    {
      question: 'How does an engagement work?',
      answer:
        'It starts with a thirty-minute call. If we are a good fit, we agree on scope, days per week and the outcome we are aiming for. Usually that means two to three days a week inside your team. Most engagements run six months or longer, because that is when systems and results really start to pay off. I take on one or two teams at a time, so the work always has my full attention.'
    }
  ],
  sv: [
    {
      question: 'Vad erbjuder du egentligen?',
      answer:
        'Fractional design leadership på staff-nivå. Jag ansluter till ditt produktteam ett visst antal dagar i veckan och arbetar på två nivåer samtidigt: den strategiska, där vi sätter riktningen och avgör vad som är värt att bygga, och den praktiska, där jag bygger designsystemen och processerna ditt team skeppar med. Du får effekten av en staff-designer utan rekrytering, onboarding eller heltidskostnad. Och vi äger utfallet tillsammans.'
    },
    {
      question: 'Vad är avkastningen på investeringen?',
      answer:
        'Snabbhet, framför allt. Inte genom att jobba hårdare, utan genom att ta bort det som saktar ner team: system som gör det snabbt att bygga och ändra, processer som minskar friktion mellan design, produkt och utveckling, och en tydlig riktning. Den hastigheten leder till mer innovation och relevans.'
    },
    {
      question: 'När är detta rätt matchning?',
      answer:
        'När du skalar en produkt och design har blivit flaskhalsen: beslut tar för lång tid, kvaliteten varierar mellan team och leveranstakten är för låg. Om du vill ha staff-nivå på riktningen utan att anställa fler, och få mer gjort med teamet du redan har.'
    },
    {
      question: 'När är det inte rätt matchning?',
      answer:
        'När riktningen redan är spikad och du bara behöver någon som genomför. Det är ett rekryteringsbehov, och en bra senior designer kostar mindre än jag gör. Jag arbetar uppströms, där frågan om vad som ska byggas fortfarande är öppen.'
    },
    {
      question: 'Hur fungerar ett samarbete?',
      answer:
        'Det börjar med ett trettio minuters samtal. Om vi passar ihop kommer vi överens om omfattning, dagar per vecka och vilket utfall vi siktar på. Oftast innebär det två till tre dagar i veckan i ditt team. De flesta uppdrag löper sex månader eller längre.'
    }
  ]
};

export const BELIEFS: BeliefItem[] = [
  {
    title: 'The fastest team wins.',
    body: 'The only lasting advantage is a team with the infrastructure to listen, learn and ship faster than anyone else. Systems handle the repetitive work. People do the inventing.'
  },
  {
    title: 'Growth matters. People matter more.',
    body: "A product is only as good as the team behind it, and a team is only as good as how it's treated. Customers, teams, partners, owners: the work should be a win for all of them, or it won't hold."
  },
  {
    title: 'Start where the effect is biggest.',
    body: "Most roadmaps are full of things that feel urgent and change nothing. I'd rather fix the one thing that moves the number, then sweat the details once the foundation holds. Details matter deeply to me. That's exactly why they come last."
  },
  {
    title: "The work people remember wasn't consensus.",
    body: 'Best practice gets you to average. Getting further means experimenting, questioning how things are done, and sometimes standing alone in a decision for a while.'
  },
  {
    title: 'Protect what produces the results.',
    body: 'Chase results while neglecting what creates them, your health, a team, a codebase, and the source eventually runs dry. A sustainable pace outlasts heroic sprints.'
  },
  {
    title: 'Optimism first. Realism second.',
    body: "Almost anything is possible if you decide it is and break it into small enough steps. I've watched belief move more roadmaps than resources ever did."
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { company: 'Fundler', role: 'Strategy, Design-ops, Design direction, Infrastructure', year: '(2022)' },
  { company: 'Systembolaget', role: 'Staff Product Designer, Mobile App & E-commerce', year: '(2021)' },
  { company: 'Electrolux', role: 'Lead UX Sprint Master, Connected Kitchen IoT', year: '(2020)' },
  { company: 'Benify', role: 'Growth UX, Global Deals Platform', year: '(2020)' },
  { company: 'Renault', role: 'Digital Experience & Nordic E-Commerce', year: '(2019)' },
  { company: 'Clarion Hotels', role: 'Booking Funnel & Hospitality UX', year: '(2018)' },
  { company: 'Klarna', role: 'Merchant Experience & Checkout Onboarding', year: '(2017)' },
  { company: 'Unibet', role: 'Sportsbook Mobile Architecture', year: '(2016)' },
  { company: 'Webhallen', role: 'E-commerce Checkout & Inventory Search', year: '(2015)' },
  { company: 'Studentapan', role: 'Peer-to-peer Textbook Marketplace', year: '(2014)' },
  { company: 'Brittfurn', role: 'Luxury Interiors E-Commerce & Brand Identity', year: '(2013)' },
  { company: 'Nacka Byggnadsvård', role: 'Catalogue & Architectural Heritage Archive', year: '(2012)' }
];
