(() => {
  const styleVersion = '17';
  const currentStyles = document.createElement('link');
  currentStyles.rel = 'stylesheet';
  currentStyles.href = `/site-polish.css?v=${styleVersion}`;
  currentStyles.dataset.sitePolishVersion = styleVersion;
  document.head.appendChild(currentStyles);

  const caseStudies = [
    '/case-studies/arkipiu/',
    '/case-studies/groupline-shop/',
    '/case-studies/naili-gatto-perry/',
    '/case-studies/brand-digital-design/'
  ];

  const removeRequestedSections = () => {
    document.querySelectorAll('section').forEach((section) => {
      const heading = section.querySelector('h2, p');
      const label = heading?.textContent.trim().toLowerCase();
      if (label === 'capabilities' || label === 'tools') section.remove();
    });

    document.querySelectorAll('a').forEach((link) => {
      if (link.textContent.toLowerCase().includes('download cv')) link.remove();
    });

    document.querySelector('#contact h2 + p')?.remove();

    const workHeading = document.querySelector('#work h2');
    workHeading?.parentElement?.querySelector('p')?.remove();

    document.querySelectorAll('#contact > div > div').forEach((block) => {
      const text = block.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
      if (text.startsWith('name') && text.includes('email')) block.remove();
    });
  };

  const enhanceHeroBadge = () => {
    const content = window.PORTFOLIO_CONTENT || {};
    const badgeCopy = content.badge || {};
    const badge = document.querySelector('#top .badge-sway');
    const currentCard = badge?.children?.[2];
    if (!badge || !currentCard || badge.dataset.interactiveBadge === 'true') return;

    const portrait = currentCard.querySelector('img');
    const portraitSrc = portrait?.getAttribute('src');
    const portraitAlt = portrait?.getAttribute('alt') || 'Marica Mariniello';
    if (!portraitSrc) return;

    badge.dataset.interactiveBadge = 'true';
    badge.classList.add('badge-assembly');
    badge.innerHTML = `
      <div class="badge-lanyard" aria-hidden="true"></div>
      <div class="badge-hardware" aria-hidden="true">
        <span class="badge-clip-ring"></span>
        <span class="badge-clip-pin"></span>
      </div>
      <div class="badge-scene" role="button" tabindex="0" aria-pressed="false" aria-label="${badgeCopy.showBack || 'Mostra il retro del badge di Marica Mariniello'}">
        <div class="badge-flipper">
          <article class="badge-shell badge-face badge-face--front" aria-label="${badgeCopy.frontLabel || 'Fronte del badge'}">
            <span class="badge-shell-slot" aria-hidden="true"></span>
            <div class="badge-card badge-card--front">
              <div class="badge-photo">
                <img alt="" draggable="false">
                <div class="badge-micro badge-micro--left" aria-hidden="true">${(badgeCopy.microLeft || ['UX/UI', 'VISUAL', 'DESIGNER']).join('<br>')}</div>
                <div class="badge-micro badge-micro--right" aria-hidden="true"><span class="badge-globe">◎</span>${(badgeCopy.microRight || ['DIGITAL', 'PROFILE']).join('<br>')}</div>
              </div>
              <div class="badge-identity">
                <div class="badge-identity-main">
                  <p class="badge-first-name">${badgeCopy.firstName || 'MARICA'}</p>
                  <p class="badge-role">${badgeCopy.role || 'UX/UI Designer'}<br><span>${badgeCopy.roleSecondary || '+ Visual Design Specialist'}</span></p>
                  <span class="badge-status"><i aria-hidden="true"></i> ${badgeCopy.status || 'OPEN TO WORK'}</span>
                </div>
                <div class="badge-id-column" aria-hidden="true">
                  <span class="badge-monogram">${badgeCopy.monogram || 'MM✦'}</span>
                  <span class="badge-barcode"></span>
                  <span class="badge-id-number">${badgeCopy.id || 'ID 0001'}</span>
                </div>
              </div>
            </div>
          </article>
          <article class="badge-shell badge-face badge-face--back" aria-label="${badgeCopy.backLabel || 'Retro del badge'}">
            <span class="badge-shell-slot" aria-hidden="true"></span>
            <div class="badge-card badge-card--back">
              <div class="badge-back-top">
                <span>${badgeCopy.professionalId || 'PROFESSIONAL ID'}</span>
                <span>${badgeCopy.monogram || 'MM✦'}</span>
              </div>
              <div class="badge-back-title">
                <p>${(badgeCopy.fullName || 'MARICA MARINIELLO').replace(' ', '<br>')}</p>
                <span>${badgeCopy.role || 'UX/UI Designer'}<br>${badgeCopy.roleSecondary || '+ Visual Design Specialist'}</span>
              </div>
              <div class="badge-back-details">
                <p class="badge-back-label">${badgeCopy.contactDetails || 'CONTACT / DETAILS'}</p>
                <div class="badge-back-links"></div>
              </div>
              <div class="badge-back-footer" aria-hidden="true">
                <span class="badge-barcode badge-barcode--wide"></span>
                <span>${badgeCopy.monogram || 'MM✦'} &nbsp; ${badgeCopy.id || 'ID 0001'}</span>
              </div>
            </div>
          </article>
        </div>
      </div>`;

    const scene = badge.querySelector('.badge-scene');
    const image = badge.querySelector('.badge-photo img');
    const links = badge.querySelector('.badge-back-links');
    image.src = portraitSrc;
    image.alt = portraitAlt;

    const contactLink = document.querySelector('#contact a[href^="mailto:"]');
    const linkedInLink = document.querySelector('footer a[href*="linkedin.com"]');
    [contactLink, linkedInLink].forEach((source) => {
      if (!source) return;
      const link = document.createElement('a');
      link.href = source.href;
      link.textContent = source.href.includes('linkedin.com') ? (badgeCopy.linkedinLabel || 'LinkedIn ↗') : source.href.replace(/^mailto:/, '');
      if (source.target) link.target = source.target;
      if (source.rel) link.rel = source.rel;
      link.tabIndex = -1;
      links.append(link);
    });

    const setBadgeSide = (flipped) => {
      scene.classList.toggle('is-flipped', flipped);
      badge.querySelector('.badge-face--front').setAttribute('aria-hidden', String(flipped));
      badge.querySelector('.badge-face--back').setAttribute('aria-hidden', String(!flipped));
      links.querySelectorAll('a').forEach((link) => { link.tabIndex = flipped ? 0 : -1; });
      scene.setAttribute('aria-pressed', String(flipped));
      scene.setAttribute('aria-label', flipped
        ? (badgeCopy.showFront || 'Mostra il fronte del badge di Marica Mariniello')
        : (badgeCopy.showBack || 'Mostra il retro del badge di Marica Mariniello'));
    };

    const toggleBadge = () => setBadgeSide(!scene.classList.contains('is-flipped'));
    const usesHover = () => window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches;

    badge.querySelector('.badge-face--front').setAttribute('aria-hidden', 'false');
    badge.querySelector('.badge-face--back').setAttribute('aria-hidden', 'true');

    scene.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'touch' || !usesHover()) return;
      setBadgeSide(true);
    });
    scene.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'touch' || !usesHover()) return;
      setBadgeSide(false);
    });
    scene.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      if (usesHover()) return;
      toggleBadge();
    });
    scene.addEventListener('keydown', (event) => {
      if (event.target.closest('a')) return;
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggleBadge();
    });
    badge.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch' || !window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches) return;
      const rect = badge.getBoundingClientRect();
      const ratio = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)));
      badge.style.setProperty('--assembly-sway', `${(ratio * 1.2).toFixed(2)}deg`);
    });
    badge.addEventListener('pointerleave', () => badge.style.setProperty('--assembly-sway', '0deg'));
  };

  const enhanceCarousel = () => {
    const viewport = document.querySelector('#work .work-carousel-viewport');
    const controls = document.querySelector('#work .work-carousel-controls');
    const previous = document.querySelector('#work [data-carousel-previous]');
    const next = document.querySelector('#work [data-carousel-next]');
    const dots = document.querySelector('#work .work-carousel-dots');
    if (!viewport || !controls || !previous || !next || !dots || viewport.dataset.polished === 'true') return false;

    viewport.dataset.polished = 'true';
    const stage = document.createElement('div');
    stage.className = 'work-carousel-stage';
    viewport.before(stage);
    stage.append(viewport, previous, next);
    stage.after(dots);
    controls.remove();

    previous.className = 'work-carousel-arrow work-carousel-arrow--previous';
    next.className = 'work-carousel-arrow work-carousel-arrow--next';
    previous.innerHTML = '<span aria-hidden="true">←</span>';
    next.innerHTML = '<span aria-hidden="true">→</span>';

    document.querySelectorAll('#work .work-carousel-slide').forEach((slide, index) => {
      const oldButton = Array.from(slide.querySelectorAll('button')).find((button) => button.textContent.includes('View Case Study'));
      if (!oldButton || !caseStudies[index]) return;
      const link = document.createElement('a');
      link.href = caseStudies[index];
      link.className = oldButton.className;
      link.dataset.caseStudyLink = 'true';
      link.textContent = window.PORTFOLIO_CONTENT?.work?.viewCaseStudy || 'View Case Study';
      oldButton.replaceWith(link);
    });
    return true;
  };

  const enhanceApproachIcons = () => {
    const approachHeading = Array.from(document.querySelectorAll('section h2')).find((heading) =>
      heading.textContent.trim() === 'From visual systems to digital experiences'
    );
    const section = approachHeading?.closest('section');
    if (!section) return false;

    const icons = [
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4.5 16s4.2-7 11.5-7 11.5 7 11.5 7-4.2 7-11.5 7S4.5 16 4.5 16Z"/><circle cx="16" cy="16" r="3.5"/></svg>',
      '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="5" width="8" height="8" rx="2"/><rect x="19" y="5" width="8" height="8" rx="2"/><rect x="5" y="19" width="8" height="8" rx="2"/><rect x="19" y="19" width="8" height="8" rx="2"/></svg>',
      '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="7" width="15" height="18" rx="2.5"/><rect x="22" y="11" width="5" height="14" rx="1.5"/><path d="M10 12h5M10 16h5M10 20h3"/></svg>',
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 16.5 12.5 23 26 9.5"/><path d="M26 17v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11"/></svg>'
    ];

    Array.from(section.querySelectorAll('h3')).slice(0, 4).forEach((heading, index) => {
      const row = heading.parentElement;
      const marker = row?.querySelector(':scope > span');
      if (!marker || marker.dataset.approachIcon === 'true') return;
      marker.dataset.approachIcon = 'true';
      marker.className = 'approach-icon';
      marker.innerHTML = icons[index];
      marker.setAttribute('aria-hidden', 'true');
    });
    return true;
  };

  const apply = () => {
    removeRequestedSections();
    enhanceHeroBadge();
    enhanceCarousel();
    enhanceApproachIcons();
  };

  const start = () => {
    apply();
    let attempts = 0;
    const retry = window.setInterval(() => {
      apply();
      attempts += 1;
      if (attempts > 12 && document.querySelector('#work .work-carousel-viewport[data-polished="true"]')) window.clearInterval(retry);
    }, 180);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
