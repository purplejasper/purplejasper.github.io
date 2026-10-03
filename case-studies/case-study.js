const studies = {
  'arkipiu': {
    index: '01', client: 'Arkipiù', title: 'Corporate Website Redesign',
    intro: 'An end-to-end redesign across 12 pages to clarify the brand, strengthen content hierarchy and create a more coherent responsive experience.',
    tags: ['UI Design', 'Information Architecture', 'Responsive Design', 'Design QA'],
    challenge: 'A clearer corporate experience across content, interface and devices.',
    challengeText: 'The project reorganised an existing real estate website around clearer page priorities, more visible calls to action and a visual system that could remain consistent as the site expanded.',
    steps: [
      ['01', 'Structure', 'Reviewed page architecture and content hierarchy across the existing website.'],
      ['02', 'Interface system', 'Defined repeatable patterns for typography, sections, calls to action and responsive behaviour.'],
      ['03', 'Delivery', 'Supported implementation through cross-device checks, asset optimisation and Design QA.']
    ],
    visual: 'Clearer.\nStronger.\nResponsive.',
    results: [['12', 'pages redesigned'], ['+89%', 'unique visitors'], ['+111%', 'organic Google sessions YoY']],
    note: 'Website performance measured during the 12 months following the redesign.',
    next: 'groupline-shop', nextTitle: 'Groupline Shop'
  },
  'groupline-shop': {
    index: '02', client: 'Groupline Shop', title: 'Conversion-focused Landing Pages',
    intro: 'A reusable mobile-first landing page system designed for TikTok and social advertising campaigns across six products.',
    tags: ['UI Design', 'Mobile-first', 'A/B Testing', 'Front-end Implementation'],
    challenge: 'Turn campaign traffic into focused product journeys.',
    challengeText: 'The work balanced fast production with a consistent visual hierarchy, keeping product benefits, proof points and calls to action clear on smaller screens.',
    steps: [
      ['01', 'Reusable patterns', 'Built a repeatable page structure that could adapt to different products and campaign angles.'],
      ['02', 'Mobile priority', 'Designed the information flow around short attention spans and thumb-friendly interaction.'],
      ['03', 'Iteration', 'Compared CTA and layout solutions and refined the implementation across browsers.']
    ],
    visual: 'Campaigns\nthat move.',
    results: [['≈10', 'landing pages'], ['6', 'products'], ['Mobile', 'first delivery']],
    note: 'Created for paid social and TikTok campaign traffic.',
    next: 'naili-gatto-perry', nextTitle: 'Naili & Gatto Perry'
  },
  'naili-gatto-perry': {
    index: '03', client: 'Naili & Gatto Perry', title: 'Editorial Illustration & Information Design',
    intro: 'Character design, illustration and visual storytelling developed across two editions of an institutional publication for INAIL.',
    tags: ['Illustration', 'Character Design', 'Visual Storytelling', 'Information Design'],
    challenge: 'Make institutional information approachable through character-led storytelling.',
    challengeText: 'The project translated complex themes into an accessible visual language, keeping characters, scenes and information consistent across the complete publication.',
    steps: [
      ['01', 'Characters', 'Developed the main characters and a recognisable illustration language.'],
      ['02', 'Narrative system', 'Defined recurring compositions, expressions and visual cues for continuity.'],
      ['03', 'Complete delivery', 'Produced the full comic and supporting information design across two editions.']
    ],
    visual: 'Stories\nwith clarity.',
    results: [['2', 'editions'], ['End-to-end', 'visual development'], ['Complete', 'illustrated publication']],
    note: 'Developed with NWM Network for INAIL.',
    next: 'brand-digital-design', nextTitle: 'Brand & Digital Design'
  },
  'brand-digital-design': {
    index: '04', client: 'Selected work', title: 'Brand & Digital Design',
    intro: 'Visual systems and campaign assets designed across digital and offline touchpoints for different brands and e-commerce environments.',
    tags: ['Brand Identity', 'Digital Design', 'Social', 'Advertising', 'Print'],
    challenge: 'Create recognisable visual systems that remain coherent across formats.',
    challengeText: 'The work ranged from identity and campaign direction to social assets, marketing materials and e-commerce visuals, always adapting the system to the needs of each channel.',
    steps: [
      ['01', 'Visual direction', 'Translated positioning into typography, colour, layout and image choices.'],
      ['02', 'Channel adaptation', 'Extended the system across social, advertising, print and digital content.'],
      ['03', 'Consistency', 'Built reusable rules and formats to support faster, coherent production.']
    ],
    visual: 'One system.\nMany formats.',
    results: [['Digital', 'campaign assets'], ['Social', 'content systems'], ['Print', 'brand applications']],
    note: 'Selected work developed during experiences with ItAres and NWM Network.',
    next: 'arkipiu', nextTitle: 'Arkipiù'
  }
};

const slug = location.pathname.split('/').filter(Boolean).pop();
const study = studies[slug] || studies.arkipiu;
document.title = `${study.title} — Marica Mariniello`;
document.querySelector('#case-study').innerHTML = `
  <nav class="case-nav" aria-label="Case study navigation">
    <a class="case-nav__mark" href="/">MM✦</a>
    <a class="case-nav__back" href="/#work">Back to work</a>
  </nav>
  <header class="case-hero">
    <div>
      <p class="case-hero__eyebrow">${study.index} — ${study.client}</p>
      <h1>${study.title}</h1>
      <p class="case-hero__intro">${study.intro}</p>
      <div class="case-meta">${study.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
    </div>
  </header>
  <section class="case-section case-section--paper">
    <p class="case-section__eyebrow">Project focus</p>
    <h2>${study.challenge}</h2>
    <p class="case-section__lead">${study.challengeText}</p>
    <div class="case-grid">${study.steps.map(([number, title, body]) => `
      <article class="case-card"><span class="case-card__number">${number}</span><h3>${title}</h3><p>${body}</p></article>
    `).join('')}</div>
  </section>
  <section class="case-section case-section--ink">
    <p class="case-section__eyebrow">Visual direction</p>
    <h2>A flexible system with a clear point of view.</h2>
    <div class="case-visual" data-label="${study.visual.replaceAll('"', '&quot;')}"></div>
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
