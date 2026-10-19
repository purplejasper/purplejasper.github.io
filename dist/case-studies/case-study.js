const studies = {
  'rallye-monte-carlo': {
    index: '01', client: 'Arkipiù × Rallye Monte-Carlo 2026', title: 'Event Visual System',
    intro: 'A sponsorship identity carried from the rally car to racewear and event communication, translating the Arkipiù brand into a coherent system for an international motorsport setting.',
    tags: ['Visual Direction', 'Livery Design', 'Brand Applications'],
    challenge: 'Turn a corporate identity into a recognisable event system.',
    challengeText: 'The project required one visual language to work across very different surfaces and scales: a moving vehicle, technical apparel and communication assets. The core challenge was to preserve brand recognition while meeting the practical constraints of each application.',
    steps: [
      ['01', 'Concept & direction', 'Defined the visual direction around the existing Arkipiù identity, balancing visibility, motion and event context.'],
      ['02', 'Vehicle & racewear', 'Extended the system across the car livery and driver suits, adapting graphic proportions to each technical template.'],
      ['03', 'Event communication', 'Applied the same visual language to invitation and digital materials, then prepared production-ready artwork with suppliers.']
    ],
    visual: 'Built for\nmotion.',
    visualHeading: 'One identity, scaled across the complete event experience.',
    heroImage: '/assets/rallye-monte-carlo/rallye-night.webp',
    heroAlt: 'Arkipiù branded rally car racing at night during the Rallye Monte-Carlo',
    media: [
      { src: '/assets/rallye-monte-carlo/rallye-night.webp', alt: 'Arkipiù vehicle livery in motion during a night stage', caption: 'Vehicle livery in motion during the Rallye Monte-Carlo', layout: 'wide' },
      { src: '/assets/rallye-monte-carlo/rallye-detail.webp', alt: 'Close-up of the Arkipiù rally car bonnet and sponsor graphics', caption: 'Livery detail and sponsor visibility', layout: 'standard' },
      { src: '/assets/rallye-monte-carlo/rallye-racewear.webp', alt: 'Driver team in branded racewear beside the Arkipiù rally car', caption: 'Racewear and vehicle system with the driver team', layout: 'portrait' },
      { src: '/assets/rallye-monte-carlo/rallye-invitation.webp', alt: 'Rallye Monte-Carlo event invitation designed in the Arkipiù visual system', caption: 'Event invitation and communication application', layout: 'contain' },
      { src: '/assets/rallye-monte-carlo/rallye-award-ceremony.webp', alt: 'Arkipiù rally car and driver team during the award ceremony at the Rallye Monte-Carlo 2026', caption: 'Award ceremony at the Rallye Monte-Carlo 2026', layout: 'wide' }
    ],
    results: [['1', 'vehicle livery system'], ['2', 'racewear applications'], ['Multi-format', 'event communication']],
    note: 'Selected public-facing outputs are shown. Commercial terms, internal approvals and production details are intentionally omitted.',
    next: 'investment-screening-assistant', nextTitle: 'Investment Screening Assistant'
  },
  'investment-screening-assistant': {
    index: '02', client: 'Independent Product Concept · PropTech', title: 'Investment Screening Assistant',
    intro: 'A high-fidelity mobile concept that helps Italian real estate professionals turn fragmented market, territorial and urban-planning data into a clearer first investment screening.',
    tags: ['Product Design', 'UX Research', 'Data Visualization', 'AI UX'],
    challenge: 'Can this opportunity justify a deeper feasibility analysis?',
    challengeText: 'Preliminary real estate screening often means comparing market values, comparable properties, area conditions, permitted uses, planning rules and constraints across different sources. The design challenge was to organise that complexity into a progressive, scannable mobile experience without presenting an early indicator as a substitute for professional analysis.',
    steps: [
      ['01', 'Research & direction', 'Studied asset-screening workflows, PropTech products and territorial platforms, then tested the prototype with two real estate professionals to refine the information priorities.'],
      ['02', 'Structured screening flow', 'Designed a clear journey from Dashboard and New Analysis to Overview, Market & Area, Urban Planning and the contextual AI Assistant.'],
      ['03', 'Decision-ready overview', 'Brought the preliminary indicator, market benchmark, opportunities, checks and suggested use scenario into one immediately scannable summary.'],
      ['04', 'AI as a supporting layer', 'Kept AI inside the structured product as contextual support for constraints, benchmarks and follow-up questions, with sources and data reliability kept visible.'],
      ['05', 'Iteration & accessibility', 'Shifted the concept from scores alone toward planning compatibility, constraints and explainability, while refining hierarchy, contrast, touch targets and semantic states.']
    ],
    visual: 'Market.\nArea.\nPlanning.\nAI.',
    visualHeading: 'One structured workflow, with professional judgement kept in control.',
    heroImage: '/assets/investment-screening/investment-screening-overview.webp',
    heroAlt: 'Investment Screening Assistant concept shown across three mobile interface mockups',
    results: [['1', 'structured screening workflow'], ['3', 'decision layers: market, area and planning'], ['Contextual AI', 'supporting professional judgement']],
    note: 'The outcome is a high-fidelity mobile prototype shaped through qualitative feedback from two real estate professionals. It explores how data visualisation, urban-planning information and conversational AI can coexist without removing professional control.',
    next: 'arkipiu', nextTitle: 'Arkipiù Website'
  },
  'arkipiu': {
    index: '03', client: 'Arkipiù', title: 'Corporate Website Redesign',
    intro: 'An end-to-end redesign across 12 pages to clarify the brand, strengthen content hierarchy and create a more coherent responsive experience.',
    tags: ['UI Design', 'Information Architecture', 'Responsive Design', 'Design QA'],
    challenge: 'From perception gap to experience.',
    challengeText: 'Client feedback revealed an ambiguous brand perception: Arkipiù was sometimes perceived as a construction company rather than a real estate developer. The website also showed inconsistencies in navigation, content hierarchy and responsive behaviour.',
    steps: [
      ['01', 'Discover', 'Website audit, client feedback, target research and competitor analysis.'],
      ['02', 'Define', 'Three target personas — Investor, Architect and Business Partner — shaped the priorities and key findings.'],
      ['03', 'Ideate & structure', 'Positioning became clearer messaging, hierarchy became a new structure, and low-visibility CTAs became stronger paths.'],
      ['04', 'Design & prototype', 'Translated the new structure into responsive components, refined calls to action and introduced missing content such as the ESG page.'],
      ['05', 'Test & iterate', 'Completed three major website iterations through internal feedback, cross-device QA and content and UI refinement.']
    ],
    visual: 'Clearer.\nStronger.\nResponsive.',
    visualHeading: 'A responsive interface system built for clearer paths and stronger brand perception.',
    heroImage: '/assets/arkipiu/contact-page-full.webp',
    heroAlt: 'Arkipiù contact page redesign with lead form and orange visual system',
    media: [
      { src: '/assets/arkipiu/contact-page-full.webp', alt: 'Full Arkipiù contact page with lead form and contact information', caption: 'Contact page and lead form system', layout: 'wide' },
      { src: '/assets/arkipiu/areas-of-intervention.webp', alt: 'Arkipiù areas of intervention presented as a responsive card system', caption: 'Areas of intervention content system', layout: 'contain' },
      { src: '/assets/arkipiu/esg-responsive-page.png', alt: 'Arkipiù ESG page displayed on laptop and mobile', caption: 'New ESG page across desktop and mobile', layout: 'contain' }
    ],
    results: [['12', 'pages redesigned'], ['+89%', 'unique visitors'], ['+111%', 'organic Google sessions YoY']],
    note: 'Source: Wix Analytics 2024–2025. Website performance measured year over year following the redesign.',
    next: 'naili-gatto-perry', nextTitle: 'Naili & Gatto Perry'
  },
  'naili-gatto-perry': {
    index: '04', client: 'INAIL Campania × NWM Network', title: 'Naili & Gatto Perry — Illustrated Safety Stories',
    intro: 'Illustration and character art for the first and second editions of an educational comic, created within INAIL Campania’s Sicuri e Connessi project in collaboration with NWM Network.',
    tags: ['Illustration', 'Character Art', 'Comics', 'Concept Art'],
    challenge: 'Turn workplace health and safety into stories people want to follow.',
    challengeText: 'The project needed to explain important prevention themes without feeling technical or distant. A clear character-led world made the information easier to understand, remember and share.',
    steps: [
      ['01', 'Character world', 'Designed Naili, Perry and the supporting cast, defining their expressions, personalities and a consistent illustration style.'],
      ['02', 'Stories & pages', 'Developed panels end to end, balancing composition, pacing and narrative continuity across both editions.'],
      ['03', 'Accessible communication', 'Built an educational visual language that presents workplace health and safety in a simple, clear and engaging way.']
    ],
    visual: 'Stories\nwith clarity.',
    visualHeading: 'A character-led visual language for education, clarity and engagement.',
    heroImage: '/assets/naili-gatto-perry/naili-aircraft-scene.webp',
    heroAlt: 'Naili and Gatto Perry in front of an aircraft during a safety training scene',
    media: [
      { src: '/assets/naili-gatto-perry/naili-page.webp', alt: 'Illustrated internal comic page from Naili and Gatto Perry', caption: 'Illustrated page from the publication', layout: 'portrait' },
      { src: '/assets/naili-gatto-perry/naili-cover-2x.webp', alt: 'Cover illustration for Naili and Gatto Perry', caption: 'Cover artwork for the publication', layout: 'portrait' },
      { src: '/assets/naili-gatto-perry/naili-aircraft-scene.webp', alt: 'Naili and Gatto Perry in front of an aircraft during a safety training scene', caption: 'Character-led safety illustration', layout: 'wide' },
      { src: '/assets/naili-gatto-perry/naili-comic-page-02.webp', alt: 'Comic page showing Naili travelling to Naples by plane', caption: 'Narrative page and panel composition', layout: 'portrait' },
      { src: '/assets/naili-gatto-perry/naili-comic-page-03.webp', alt: 'Comic page showing digital communication and workplace safety scenes', caption: 'Digital communication and workplace safety', layout: 'portrait' }
    ],
    results: [['2', 'illustrated editions'], ['End-to-end', 'character and page design'], ['Educational', 'visual storytelling']],
    note: 'Developed for INAIL Campania with NWM Network as part of the Sicuri e Connessi prevention project.',
    officialUrl: 'https://www.inail.it/portale/it/inail-comunica/pubblicazioni/catalogo-generale/catalogo-generale-dettaglio.2024.04.naili-gatto-perry-seconda-edizione-.html',
    officialLabel: 'View the official INAIL publication ↗',
    next: 'brand-digital-design', nextTitle: 'BUILDIT Visual Identity'
  },
  'brand-digital-design': {
    index: '05', client: 'BUILDIT', title: 'Brand & Visual Identity',
    intro: 'A complete identity system for a modern, sustainable construction company, developed from logo strategy and colour through physical and digital applications.',
    tags: ['Logo Design', 'Visual Identity', 'Brand Applications'],
    challenge: 'Make sustainability and construction feel solid, modern and recognisable.',
    challengeText: 'BUILDIT combines construction expertise, innovation and environmental responsibility. The identity needed to communicate authority and durability without losing the progressive, sustainable character of the brand.',
    steps: [
      ['01', 'Brand direction', 'Defined five core ideas — sustainability, construction, innovation, authority and green — to guide every visual decision.'],
      ['02', 'Symbol & logotype', 'Combined a strong architectural B with a condensed wordmark, creating a compact logo system that remains clear across sizes and surfaces.'],
      ['03', 'System & applications', 'Built the identity around deep blue, white, charcoal and vivid green, then extended it across stationery, workwear, equipment and digital touchpoints.']
    ],
    visual: 'Built for\nthe future.',
    visualHeading: 'A clear visual system connecting construction, innovation and sustainability.',
    heroImage: '/assets/buildit/buildit-helmet.webp',
    heroAlt: 'BUILDIT identity applied to a construction helmet',
    media: [
      { src: '/assets/buildit/buildit-identity-system.webp', alt: 'BUILDIT identity concept combining a structural B with an architectural form', caption: 'Identity concept and symbol construction', layout: 'wide' },
      { src: '/assets/buildit/buildit-colours.webp', alt: 'BUILDIT colour palette with deep blue, white, charcoal and vivid green', caption: 'Core colour system', layout: 'standard' },
      { src: '/assets/buildit/buildit-logotype.webp', alt: 'BUILDIT logotype combining the symbol with a condensed wordmark', caption: 'Primary logotype', layout: 'standard' },
      { src: '/assets/buildit/buildit-paper-logo.webp', alt: 'BUILDIT embossed logo applied to textured paper', caption: 'Logo detail and material application', layout: 'wide' },
      { src: '/assets/buildit/buildit-card.webp', alt: 'BUILDIT stationery system with branded business cards, letterhead and writing tools', caption: 'Stationery and corporate applications', layout: 'wide' },
      { src: '/assets/buildit/buildit-backpack.webp', alt: 'BUILDIT logo applied to a professional backpack', caption: 'Workwear and branded equipment', layout: 'standard' },
      { src: '/assets/buildit/buildit-app.webp', alt: 'BUILDIT app icon displayed beside a smartphone', caption: 'Digital application and app icon', layout: 'standard' }
    ],
    results: [['1', 'coherent identity system'], ['4', 'core brand colours'], ['Physical + digital', 'brand applications']],
    note: 'The selected outputs show how the same visual language moves consistently from the core mark to real-world and digital touchpoints.',
    next: 'rallye-monte-carlo', nextTitle: 'Rallye Monte-Carlo 2026'
  }
};

const slug = location.pathname.split('/').filter(Boolean).pop();
const study = studies[slug] || studies.arkipiu;
document.body.classList.toggle('case-study--media', Boolean(study.media));
document.body.classList.toggle('case-study--rally', slug === 'rallye-monte-carlo');
document.body.classList.toggle('case-study--investment', slug === 'investment-screening-assistant');
document.body.classList.toggle('case-study--naili', slug === 'naili-gatto-perry');
document.body.classList.toggle('case-study--arkipiu', slug === 'arkipiu');
document.body.classList.toggle('case-study--buildit', slug === 'brand-digital-design');
document.title = `${study.title} — Marica Mariniello`;
document.querySelector('#case-study').innerHTML = `
  <nav class="case-nav" aria-label="Primary navigation">
    <a class="case-nav__brand" href="/">Marica Mariniello</a>
    <div class="case-nav__links">
      <a href="/#work">Work</a>
      <a href="/#about">About</a>
      <a class="case-nav__contact" href="/#contact">Let's talk</a>
    </div>
  </nav>
  <header class="case-hero">
    ${study.heroImage ? `<img class="case-hero__image" src="${study.heroImage}" alt="${study.heroAlt}" loading="eager" fetchpriority="high" decoding="async">` : ''}
    <div class="case-hero__content">
      <p class="case-hero__eyebrow">${study.index} — ${study.client}</p>
      <h1>${study.title}</h1>
      <p class="case-hero__intro">${study.intro}</p>
      <div class="case-meta">${study.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      ${study.officialUrl ? `<a class="case-source" href="${study.officialUrl}" target="_blank" rel="noopener noreferrer">${study.officialLabel}</a>` : ''}
    </div>
  </header>
  <section class="case-section case-section--paper">
    <p class="case-section__eyebrow">Project focus</p>
    <h2>${study.challenge}</h2>
    <p class="case-section__lead">${study.challengeText}</p>
    <div class="case-grid">${study.steps.map(([number, title, body]) => `
      <article class="case-card"><span class="case-card__number">${String(number).padStart(2, '0')}</span><h3>${title}</h3><p>${body}</p></article>
    `).join('')}</div>
  </section>
  <section class="case-section case-section--ink">
    <p class="case-section__eyebrow">Visual direction</p>
    <h2>${study.visualHeading || 'A flexible system with a clear point of view.'}</h2>
    ${study.media ? `<div class="case-gallery">${study.media.map((item, index) => `
      <figure class="case-gallery__item case-gallery__item--${index + 1}${item.layout ? ` case-gallery__item--${item.layout}` : ''}">
        <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async">
        <figcaption>${item.caption}</figcaption>
      </figure>`).join('')}</div>` : `<div class="case-visual" data-label="${study.visual.replaceAll('"', '&quot;')}"></div>`}
  </section>
  <section class="case-section case-section--ink">
    <p class="case-section__eyebrow">Output</p>
    <h2>What the work delivered.</h2>
    <div class="case-results">${study.results.map(([value, label]) => `<div class="case-result"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>
    <p class="case-section__lead">${study.note}</p>
  </section>
  <a class="case-next" href="/case-studies/${study.next}/">
    <span><small>Next case study</small><strong>${study.nextTitle}</strong></span><span class="case-next__arrow" aria-hidden="true">→</span>
  </a>
  <footer class="case-footer"><span>© 2026 Marica Mariniello</span><a href="mailto:mariniello.marica@gmail.com">Get in touch</a></footer>
`;

if (slug === 'investment-screening-assistant') {
  const investmentVisual = '/assets/investment-screening/investment-screening-overview.webp';
  document.querySelector('#case-study').innerHTML = `
    <nav class="case-nav" aria-label="Primary navigation">
      <a class="case-nav__brand" href="/">Marica Mariniello</a>
      <div class="case-nav__links">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a class="case-nav__contact" href="/#contact">Let's talk</a>
      </div>
    </nav>

    <article class="isa-case">
      <header class="case-hero isa-cover">
        <img class="case-hero__image" src="${investmentVisual}" alt="Investment Screening Assistant shown across the Home, New Analysis and Overview mobile screens" loading="eager" fetchpriority="high" decoding="async">
        <div class="case-hero__content">
          <p class="case-hero__eyebrow">02 — Independent Product Concept · PropTech</p>
          <h1>Investment Screening Assistant</h1>
          <p class="case-hero__intro">A mobile decision-support tool designed to make preliminary Real Estate screening clearer, faster and more structured.</p>
          <div class="case-meta" aria-label="Project metadata"><span>Personal Project</span><span>Product Design</span><span>UX/UI</span><span>Mobile</span></div>
        </div>
      </header>

      <section class="isa-section isa-section--challenge">
        <div class="isa-shell isa-challenge">
          <div>
            <p class="isa-kicker">The challenge</p>
            <h2>From fragmented data<br>to a clearer decision.</h2>
            <p class="isa-lead">Early-stage screening requires professionals to compare market data, property information and urban-planning constraints across multiple sources.</p>
          </div>
          <div class="isa-question">
            <span>Core question</span>
            <blockquote>“Does this opportunity deserve a deeper feasibility analysis?”</blockquote>
            <div class="isa-source-list" aria-label="Information considered in the screening"><span>Market data</span><span>Comparables</span><span>Area</span><span>Planning</span><span>Constraints</span></div>
          </div>
        </div>
      </section>

      <section class="isa-section isa-section--direction">
        <div class="isa-shell">
          <p class="isa-kicker">Research → product direction</p>
          <div class="isa-heading-row">
            <h2>Three insights shaped the product.</h2>
            <p>Domain Research · Competitor Analysis · Professional Feedback</p>
          </div>
          <div class="isa-decision-grid">
            <article><span>01</span><p>Information lives across different sources.</p><strong>A centralised Overview</strong></article>
            <article><span>02</span><p>Market data alone is not enough.</p><strong>Signals, risks and planning checks</strong></article>
            <article><span>03</span><p>AI is most useful for deeper questions.</p><strong>A support layer, not the product</strong></article>
          </div>
          <aside class="isa-feedback">
            <span>Professional feedback</span>
            <p>Conversations with two Real Estate professionals shifted the concept from a score-led experience toward permitted uses, constraints, sources and information to verify.</p>
          </aside>
        </div>
      </section>

      <section class="isa-section isa-section--experience">
        <div class="isa-shell">
          <p class="isa-kicker">Core experience</p>
          <div class="isa-heading-row">
            <h2>A short path from opportunity to first assessment.</h2>
            <p>Overview acts as the decision hub, while Market and AI provide progressive detail.</p>
          </div>
          <div class="isa-mini-flow" aria-label="Home to New Analysis to Overview, then Market or AI Assistant">
            <span>Home</span><i aria-hidden="true">→</i><span>New Analysis</span><i aria-hidden="true">→</i><strong>Overview</strong><i aria-hidden="true">→</i><span>Market / AI</span>
          </div>
          <div class="isa-screen-grid" aria-label="Completed interface screens">
            <figure>
              <div class="isa-screen isa-screen--home" role="img" aria-label="Home screen showing saved analyses and a new analysis action"></div>
              <figcaption><span>01</span><strong>Home</strong><p>Start a screening or resume a previous opportunity.</p></figcaption>
            </figure>
            <figure>
              <div class="isa-screen isa-screen--new" role="img" aria-label="New Analysis screen collecting the essential property data"></div>
              <figcaption><span>02</span><strong>New Analysis</strong><p>Guided input, automatic calculations and early warnings.</p></figcaption>
            </figure>
            <figure>
              <div class="isa-screen isa-screen--overview" role="img" aria-label="Overview screen presenting the preliminary investment assessment"></div>
              <figcaption><span>03</span><strong>Overview</strong><p>Potential, benchmark, opportunities and checks in one hierarchy.</p></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="isa-section isa-section--next">
        <div class="isa-shell">
          <p class="isa-kicker">Screens in progress</p>
          <div class="isa-heading-row">
            <h2>Two screens will complete the experience.</h2>
            <p>The placeholders are intentionally explicit, so they can be replaced without changing the case-study structure.</p>
          </div>
          <div class="isa-placeholder-grid">
            <article class="isa-screen-placeholder">
              <div><span>Screen placeholder</span><strong>Add final Market screen</strong><small>Benchmark · trend · comparables</small></div>
              <h3>Market</h3>
              <p>Detailed evidence behind the preliminary assessment.</p>
            </article>
            <article class="isa-screen-placeholder">
              <div><span>Screen placeholder</span><strong>Add final AI Assistant screen</strong><small>Contextual questions · sources · reliability</small></div>
              <h3>AI Assistant</h3>
              <p>A contextual support layer for deeper investigation.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="isa-section isa-section--closing">
        <div class="isa-shell">
          <p class="isa-closing">A mobile decision-support concept that turns fragmented Real Estate information into a more structured and actionable first screening.</p>
        </div>
      </section>
    </article>

    <a class="case-next" href="/case-studies/arkipiu/">
      <span><small>Next case study</small><strong>Arkipiù Website</strong></span><span class="case-next__arrow" aria-hidden="true">→</span>
    </a>
    <footer class="case-footer"><span>© 2026 Marica Mariniello</span><a href="mailto:mariniello.marica@gmail.com">Get in touch</a></footer>
  `;
}
