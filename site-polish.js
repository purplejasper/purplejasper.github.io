(() => {
  const styleVersion = '23';
  const currentStyles = document.querySelector('link[href^="/site-polish.css"]') || document.createElement('link');
  currentStyles.rel = 'stylesheet';
  currentStyles.href = `/site-polish.css?v=${styleVersion}`;
  currentStyles.dataset.sitePolishVersion = styleVersion;
  if (!currentStyles.isConnected) document.head.appendChild(currentStyles);

  const caseStudies = [
    '/case-studies/arkipiu/',
    '/case-studies/groupline-shop/',
    '/case-studies/naili-gatto-perry/',
    '/case-studies/brand-digital-design/'
  ];

  const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);

  const enhanceIntroduction = () => {
    const section = document.querySelector('#top + section');
    if (!section || section.dataset.introEnhanced === 'true') return false;

    const intro = window.PORTFOLIO_CONTENT?.introduction || {};
    const skills = intro.skills || ['UI Design', 'Responsive Design', 'Visual Systems', 'UX Foundations'];
    section.dataset.introEnhanced = 'true';
    section.className = 'intro-showcase';
    section.innerHTML = `
      <div class="intro-showcase__shell">
        <div class="intro-showcase__ambient" aria-hidden="true"><span></span><span></span><span></span></div>
        <header class="intro-showcase__header">
          <p data-intro="eyebrow">${escapeHTML(intro.eyebrow || 'Marica Mariniello — UX/UI Designer & Visual Design Specialist')}</p>
          <span data-intro="visual-kicker">${escapeHTML(intro.visualKicker || 'UI × Visual Systems')}</span>
        </header>
        <div class="intro-showcase__composition">
          <div class="intro-showcase__copy">
            <h1><span data-intro="title-lead">${escapeHTML(intro.displayTitleLead || 'Design with')}</span><em data-intro="title-accent">${escapeHTML(intro.displayTitleAccent || 'clarity.')}</em><span data-intro="title-close">${escapeHTML(intro.displayTitleClose || 'Built with character.')}</span></h1>
            <p data-intro="description">${escapeHTML(intro.description || '')}</p>
            <div class="intro-showcase__actions">
              <a href="#work" data-intro="primary-cta">${escapeHTML(intro.primaryCta || 'View Selected Work')}</a>
              <a href="#about" data-intro="secondary-cta">${escapeHTML(intro.secondaryCta || 'About Me')}</a>
            </div>
          </div>
          <div class="intro-showcase__visual" aria-label="UI and visual design disciplines">
            <div class="intro-orbit intro-orbit--outer" aria-hidden="true"></div>
            <div class="intro-orbit intro-orbit--inner" aria-hidden="true"></div>
            <div class="intro-showcase__core" data-intro="visual-core">${escapeHTML(intro.visualCore || 'MM✦')}</div>
            <span class="intro-showcase__satellite intro-showcase__satellite--top" data-intro="visual-orbit-top">${escapeHTML(intro.visualOrbitTop || 'UI DESIGN')}</span>
            <span class="intro-showcase__satellite intro-showcase__satellite--right" data-intro="visual-orbit-right">${escapeHTML(intro.visualOrbitRight || 'RESPONSIVE')}</span>
            <span class="intro-showcase__satellite intro-showcase__satellite--bottom" data-intro="visual-orbit-bottom">${escapeHTML(intro.visualOrbitBottom || 'VISUAL SYSTEMS')}</span>
          </div>
        </div>
        <div class="intro-showcase__footer">
          <article><strong data-intro="experience-value">${escapeHTML(intro.experienceValue || '06+')}</strong><span data-intro="experience-label">${escapeHTML(intro.experienceLabel || 'years visual & digital')}</span></article>
          <article><strong data-intro="interface-value">${escapeHTML(intro.interfaceValue || '02+')}</strong><span data-intro="interface-label">${escapeHTML(intro.interfaceLabel || 'years focused on UI/Web')}</span></article>
          <ul>${skills.map((skill) => `<li data-intro-skill>${escapeHTML(skill)}</li>`).join('')}</ul>
        </div>
      </div>`;
    return true;
  };

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

    document.querySelectorAll('#work .work-carousel-visual p, #work article > div:first-child p').forEach((title) => title.remove());

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
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const usesHover = () => hoverQuery.matches;

    badge.querySelector('.badge-face--front').setAttribute('aria-hidden', 'false');
    badge.querySelector('.badge-face--back').setAttribute('aria-hidden', 'true');

    scene.addEventListener('mouseenter', () => {
      if (!usesHover()) return;
      setBadgeSide(true);
    });
    scene.addEventListener('mouseleave', () => {
      if (!usesHover()) return;
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
    badge.addEventListener('mousemove', (event) => {
      if (!usesHover()) return;
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
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4.5 16s4.2-7 11.5-7 11.5 7 11.5 7-4.2 7-11.5 7S4.5 16 4.5 16Z"/><circle cx="16" cy="16" r="3.5"/><path d="M16 4V2.5M7.4 7.4 6.3 6.3M24.6 7.4l1.1-1.1"/></svg>',
      '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="6" cy="8" r="2.7"/><rect x="13" y="5.3" width="6" height="5.4" rx="1"/><circle cx="26" cy="8" r="2.7"/><rect x="5" y="21" width="6" height="6" rx="1"/><rect x="21" y="21" width="6" height="6" rx="1"/><path d="M8.7 8h4.2M19.1 8h4.2M16 10.8v4.7M8 20.8c.5-4 3.5-6.4 8-6.4s7.5 2.4 8 6.4"/></svg>',
      '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="6" width="19" height="17" rx="2.5"/><path d="M4 11h19M8 8.5h.1M11 8.5h.1M14 8.5h.1"/><rect x="20" y="14" width="8" height="13" rx="2"/><path d="M23 24h2"/></svg>',
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 4 7 7-3 12H12L9 11l7-7Z"/><circle cx="16" cy="14" r="2.5"/><path d="M16 4v7.5M12 23v4h8v-4"/></svg>'
    ];

    Array.from(section.querySelectorAll('h3')).slice(0, 4).forEach((heading, index) => {
      const row = heading.parentElement;
      const marker = row?.querySelector(':scope > span');
      if (!marker) return;
      marker.dataset.approachIcon = 'true';
      marker.className = 'approach-icon';
      if (!marker.querySelector('svg')) marker.innerHTML = icons[index];
      marker.setAttribute('aria-hidden', 'true');
    });
    return true;
  };

  const setupCustomCursor = () => {
    const root = document.documentElement;
    if (root.dataset.customCursorSetup === 'true') return;
    root.dataset.customCursorSetup = 'true';

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let cleanup = null;

    const mount = () => {
      if (cleanup || !finePointer.matches) return;

      const controller = new AbortController();
      const { signal } = controller;
      const cursor = document.createElement('div');
      cursor.className = 'portfolio-cursor';
      cursor.dataset.state = 'default';
      cursor.dataset.tone = 'dark';
      cursor.setAttribute('aria-hidden', 'true');
      cursor.innerHTML = '<div class="portfolio-cursor__disc"><span class="portfolio-cursor__label"></span></div>';
      document.body.append(cursor);

      const label = cursor.querySelector('.portfolio-cursor__label');
      const stateLabels = { view: 'VIEW', flip: 'FLIP', back: 'BACK', drag: 'DRAG' };
      let state = 'default';
      let activeTarget = null;
      let targetX = window.innerWidth / 2;
      let targetY = window.innerHeight / 2;
      let currentX = targetX;
      let currentY = targetY;
      let visible = false;
      let frame = 0;

      const resolveState = (target) => {
        const element = target instanceof Element ? target : null;
        if (!element) return 'default';
        const badge = element.closest('#top .badge-scene');
        if (badge) return badge.classList.contains('is-flipped') ? 'back' : 'flip';
        if (element.closest('#work .work-carousel-visual')) return 'view';
        if (element.closest('a, button, input, textarea, select, summary, [role="button"], [tabindex]:not([tabindex="-1"])')) return 'link';
        if (element.closest('#work .work-carousel-viewport')) return 'drag';
        return 'default';
      };

      const resolveTone = (target) => {
        const element = target instanceof Element ? target : document.body;
        const color = window.getComputedStyle(element).color.match(/[\d.]+/g)?.slice(0, 3).map(Number);
        if (!color || color.length < 3) return 'dark';
        const luminance = (color[0] * .2126 + color[1] * .7152 + color[2] * .0722) / 255;
        return luminance >= .58 ? 'dark' : 'light';
      };

      const setState = (nextState) => {
        if (state === nextState) return;
        state = nextState;
        cursor.dataset.state = state;
        label.textContent = stateLabels[state] || '';
      };

      const render = () => {
        if (activeTarget?.isConnected) setState(resolveState(activeTarget));
        const easing = reducedMotion.matches ? 1 : .22;
        currentX += (targetX - currentX) * easing;
        currentY += (targetY - currentY) * easing;
        cursor.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
        frame = window.requestAnimationFrame(render);
      };

      const moveEvent = 'PointerEvent' in window ? 'pointermove' : 'mousemove';
      const outEvent = 'PointerEvent' in window ? 'pointerout' : 'mouseout';

      document.addEventListener(moveEvent, (event) => {
        if ('pointerType' in event && event.pointerType === 'touch') return;
        targetX = event.clientX;
        targetY = event.clientY;
        if (activeTarget !== event.target) {
          activeTarget = event.target;
          cursor.dataset.tone = resolveTone(activeTarget);
        }
        if (!visible) {
          visible = true;
          currentX = targetX;
          currentY = targetY;
          root.classList.add('has-custom-cursor');
          cursor.classList.add('is-visible');
        }
        setState(resolveState(activeTarget));
      }, { signal, passive: true });

      document.addEventListener(outEvent, (event) => {
        if (event.relatedTarget) return;
        visible = false;
        root.classList.remove('has-custom-cursor');
        cursor.classList.remove('is-visible');
      }, { signal, passive: true });

      window.addEventListener('blur', () => {
        visible = false;
        root.classList.remove('has-custom-cursor');
        cursor.classList.remove('is-visible');
      }, { signal });
      frame = window.requestAnimationFrame(render);

      cleanup = () => {
        controller.abort();
        window.cancelAnimationFrame(frame);
        cursor.remove();
        root.classList.remove('has-custom-cursor');
        cleanup = null;
      };
    };

    const sync = () => {
      if (finePointer.matches) mount();
      else cleanup?.();
    };

    if (finePointer.addEventListener) finePointer.addEventListener('change', sync);
    else finePointer.addListener?.(sync);
    sync();
  };

  const apply = () => {
    removeRequestedSections();
    enhanceIntroduction();
    enhanceHeroBadge();
    enhanceCarousel();
    enhanceApproachIcons();
    setupCustomCursor();
  };

  const start = () => {
    let hydrationChecks = 0;

    const applyAfterHydration = () => {
      if (window.$_TSR && hydrationChecks < 100) {
        hydrationChecks += 1;
        window.setTimeout(applyAfterHydration, 50);
        return;
      }

      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        apply();

        let queuedApply = 0;
        const observer = new MutationObserver(() => {
          window.clearTimeout(queuedApply);
          queuedApply = window.setTimeout(apply, 80);
        });
        observer.observe(document.body, { childList: true, subtree: true });

        let attempts = 0;
        const retry = window.setInterval(() => {
          apply();
          attempts += 1;
          if (attempts >= 24) {
            window.clearInterval(retry);
            observer.disconnect();
          }
        }, 250);
      }));
    };

    applyAfterHydration();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
