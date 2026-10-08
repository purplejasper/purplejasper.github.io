(() => {
  const styleVersion = '52';
  const polishStyles = [...document.querySelectorAll('link[href^="/site-polish.css"]')];
  const currentStyles = polishStyles.shift() || document.createElement('link');
  polishStyles.forEach((stylesheet) => stylesheet.remove());
  currentStyles.rel = 'stylesheet';
  currentStyles.href = `/site-polish.css?v=${styleVersion}`;
  currentStyles.dataset.sitePolishVersion = styleVersion;
  if (!currentStyles.isConnected) document.head.appendChild(currentStyles);

  const caseStudies = [
    '/case-studies/rallye-monte-carlo/',
    '/case-studies/arkipiu/',
    '/case-studies/groupline-shop/',
    '/case-studies/naili-gatto-perry/',
    '/case-studies/brand-digital-design/'
  ];

  const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);

  const enhanceIntroduction = () => {
    const hero = document.querySelector('#top');
    if (!hero) return false;
    const intro = window.PORTFOLIO_CONTENT?.introduction || {};
    const closingTitle = String(intro.displayTitleClose || 'Built with character.').trim();
    const closingWords = closingTitle.split(/\s+/);
    const closingAccent = closingWords.pop() || 'character.';
    const closingLead = closingWords.join(' ');
    hero.classList.add('hero-merged');

    if (!hero.querySelector('.hero-intro-copy')) {
      const copy = document.createElement('div');
      copy.className = 'hero-intro-copy';
      copy.innerHTML = `
        <p class="hero-intro-copy__eyebrow" data-intro="eyebrow">${escapeHTML(intro.eyebrow || 'Marica Mariniello — UX/UI Designer & Visual Design Specialist')}</p>
        <h1 aria-label="${escapeHTML(`${intro.displayTitleLead || 'Design with'} ${intro.displayTitleAccent || 'clarity.'} ${closingTitle}`)}">
          <span data-intro="title-lead">${escapeHTML(intro.displayTitleLead || 'Design with')}</span>
          <em data-intro="title-accent">${escapeHTML(intro.displayTitleAccent || 'clarity.')}</em>
          <span data-intro="title-close">${escapeHTML(closingLead)} <strong>${escapeHTML(closingAccent)}</strong></span>
        </h1>
        <p class="hero-intro-copy__description" data-intro="description">${escapeHTML(intro.description || '')}</p>`;
      hero.append(copy);
    }

    const originalIntroduction = hero.nextElementSibling;
    if (originalIntroduction?.tagName === 'SECTION' && !['work', 'about'].includes(originalIntroduction.id)) {
      originalIntroduction.remove();
    }
    return true;
  };

  const reorderAboutBeforeWork = () => {
    const about = document.querySelector('#about');
    const work = document.querySelector('#work');
    if (!about || !work || about.nextElementSibling === work) return;
    work.before(about);
  };

  const removeRequestedSections = () => {
    document.querySelectorAll('section').forEach((section) => {
      const heading = section.querySelector('h2, p');
      const label = heading?.textContent.trim().toLowerCase();
      const sectionKey = section.dataset.contentSection;
      const completeText = section.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
      const isExperience = sectionKey === 'experience'
        || (completeText.startsWith('experience') && completeText.includes('education & continuous learning'));
      if (label === 'capabilities' || label === 'tools' || isExperience) section.remove();
    });

    document.querySelectorAll('a').forEach((link) => {
      if (link.textContent.toLowerCase().includes('download cv')) link.remove();
    });

    document.querySelector('#contact h2 + p')?.remove();

    const workHeading = document.querySelector('#work h2');
    workHeading?.parentElement?.querySelector('p')?.remove();

    document.querySelectorAll('#work .work-carousel-visual p, #work article > div:first-child p').forEach((title) => title.remove());

    const performanceNote = Array.from(document.querySelectorAll('#work p')).find((paragraph) =>
      paragraph.textContent.includes('Website performance measured')
    );
    performanceNote?.parentElement?.remove();

    document.querySelectorAll('#contact > div > div').forEach((block) => {
      const text = block.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
      if (text.startsWith('name') && text.includes('email')) block.remove();
    });
  };

  const ensureRallyProject = () => {
    const section = document.querySelector('#work');
    const container = section?.firstElementChild;
    if (!container || section.querySelector('[data-rally-project]')) return false;

    const source = Array.from(container.children).find((node) => node.tagName === 'ARTICLE');
    if (!source || container.dataset.carouselReady === 'true') return false;

    const project = window.PORTFOLIO_CONTENT?.work?.projects?.[0] || {};
    const slide = source.cloneNode(true);
    slide.dataset.rallyProject = 'true';
    slide.removeAttribute('aria-hidden');
    slide.removeAttribute('aria-label');
    slide.removeAttribute('role');
    slide.style.cssText = '';

    const visual = slide.children[0];
    const copy = slide.children[1];
    if (visual) {
      visual.classList.add('rally-project-cover');
      visual.innerHTML = `
        <img src="/assets/rallye-monte-carlo/rallye-night.webp" alt="Arkipiù branded rally car racing at night during the Rallye Monte-Carlo" loading="eager" decoding="async">
        <strong class="rally-project-cover__label">Rallye Monte-Carlo 2026</strong>`;
    }

    copy?.querySelector('.grid-cols-3')?.remove();
    if (copy) {
      const label = copy.querySelector('p:first-child');
      const title = copy.querySelector('h3');
      const description = title?.nextElementSibling;
      if (label) label.textContent = `${project.number || '01'} — ${project.name || 'Arkipiù × Rallye Monte-Carlo 2026'}`;
      if (title) title.textContent = project.title || 'Event Visual System';
      if (description) description.textContent = project.description || '';
      Array.from(copy.querySelectorAll('ul li')).forEach((item, index) => {
        item.textContent = project.skills?.[index] || '';
      });
    }

    source.before(slide);
    return true;
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
      <div class="badge-turntable">
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
      badge.classList.toggle('is-flipped', flipped);
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

    badge.addEventListener('mouseenter', () => {
      if (!usesHover()) return;
      setBadgeSide(true);
    });
    badge.addEventListener('mouseleave', () => {
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
    previous.innerHTML = '<span aria-hidden="true">‹</span>';
    next.innerHTML = '<span aria-hidden="true">›</span>';

    document.querySelectorAll('#work .work-carousel-slide').forEach((slide, index) => {
      const oldButton = Array.from(slide.querySelectorAll('button')).find((button) => button.textContent.includes('View Case Study'));
      if (oldButton && caseStudies[index]) {
        const link = document.createElement('a');
        link.href = caseStudies[index];
        link.className = `${oldButton.className} work-case-cta`;
        link.dataset.caseStudyLink = 'true';
        link.innerHTML = `<span class="work-case-cta__label">${escapeHTML(window.PORTFOLIO_CONTENT?.work?.viewCaseStudy || 'View Case Study')}</span><span class="work-case-cta__arrow" aria-hidden="true">›</span>`;
        oldButton.replaceWith(link);
      }

      const link = slide.querySelector('a[data-case-study-link]');
      const visual = slide.querySelector('.work-carousel-visual');
      if (visual && link) {
        visual.removeAttribute('role');
        visual.removeAttribute('aria-label');
        visual.removeAttribute('tabindex');
        let visualLink = visual.querySelector('.work-carousel-visual-hit');
        if (!visualLink) {
          visualLink = document.createElement('a');
          visualLink.className = 'work-carousel-visual-hit';
          visual.append(visualLink);
        }
        visualLink.href = link.href;
        visualLink.setAttribute('aria-label', `Open ${slide.querySelector('h3')?.textContent.trim() || 'case study'}`);
        visualLink.tabIndex = slide.getAttribute('aria-hidden') === 'false' ? 0 : -1;
      }

      slide.addEventListener('click', (event) => {
        if (event.target.closest('a, button')) return;
        if (visual && link && visual.contains(event.target)) {
          window.location.assign(link.href);
          return;
        }
        const left = slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
        viewport.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      });
    });
    return true;
  };

  const enhanceCaseStudyLinks = () => {
    const slides = Array.from(document.querySelectorAll('#work .work-carousel-slide:not([data-carousel-clone])'));
    slides.forEach((slide, index) => {
      const href = caseStudies[index];
      if (!href) return;

      let link = slide.querySelector('a[data-case-study-link]');
      if (!link) {
        const button = Array.from(slide.querySelectorAll('button')).find((item) => item.textContent.includes('View Case Study'));
        if (button) {
          link = document.createElement('a');
          link.className = `${button.className} work-case-cta`;
          link.dataset.caseStudyLink = 'true';
          button.replaceWith(link);
        }
      }
      if (!link) return;

      link.href = href;
      link.classList.add('work-case-cta');
      if (!link.querySelector('.work-case-cta__label')) {
        link.innerHTML = `<span class="work-case-cta__label">${escapeHTML(window.PORTFOLIO_CONTENT?.work?.viewCaseStudy || 'View Case Study')}</span><span class="work-case-cta__arrow" aria-hidden="true">›</span>`;
      }

      const visual = slide.querySelector('.work-carousel-visual');
      if (!visual) return;
      let visualLink = visual.querySelector('.work-carousel-visual-hit');
      if (!visualLink) {
        visualLink = document.createElement('a');
        visualLink.className = 'work-carousel-visual-hit';
        visual.append(visualLink);
      }
      visualLink.href = href;
      visualLink.setAttribute('aria-label', `Open ${slide.querySelector('h3')?.textContent.trim() || 'case study'}`);
      visualLink.tabIndex = slide.getAttribute('aria-hidden') === 'false' ? 0 : -1;
    });
  };

  const enhanceInfiniteCarousel = () => {
    const viewport = document.querySelector('#work .work-carousel-viewport');
    const track = viewport?.querySelector('.work-carousel-track');
    const previous = document.querySelector('#work [data-carousel-previous]');
    const next = document.querySelector('#work [data-carousel-next]');
    const dots = Array.from(document.querySelectorAll('#work .work-carousel-dot'));
    if (!viewport || !track || !previous || !next || viewport.dataset.infiniteReady === 'true') return false;

    const originals = Array.from(track.querySelectorAll('.work-carousel-slide:not([data-carousel-clone])'));
    if (originals.length < 2) return false;
    viewport.dataset.infiniteReady = 'true';

    const centerSlide = (slide, behavior = 'smooth') => {
      const left = slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
      viewport.scrollTo({ left, behavior });
    };

    let activeIndex = 0;
    let scrollFrame = 0;

    const syncActive = () => {
      scrollFrame = 0;
      const center = viewport.scrollLeft + viewport.clientWidth / 2;
      const closest = originals.reduce((best, slide) => {
        const distance = Math.abs((slide.offsetLeft + slide.offsetWidth / 2) - center);
        return !best || distance < best.distance ? { slide, distance } : best;
      }, null)?.slide;
      if (!closest) return;
      activeIndex = Math.max(0, originals.indexOf(closest));
      originals.forEach((slide, index) => slide.setAttribute('aria-hidden', String(index !== activeIndex)));
      originals.forEach((slide, index) => {
        slide.classList.toggle('is-carousel-active', index === activeIndex);
        const visualLink = slide.querySelector('.work-carousel-visual-hit');
        if (visualLink) visualLink.tabIndex = index === activeIndex ? 0 : -1;
      });
      dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === activeIndex)));
    };

    viewport.addEventListener('scroll', () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(syncActive);
    }, { passive: true });

    const keepArrowsEnabled = () => {
      [previous, next].forEach((button) => {
        if (button.hasAttribute('disabled')) button.removeAttribute('disabled');
        if (button.getAttribute('aria-disabled') !== 'false') button.setAttribute('aria-disabled', 'false');
      });
    };
    keepArrowsEnabled();
    const controlObserver = new MutationObserver(keepArrowsEnabled);
    [previous, next].forEach((button) => controlObserver.observe(button, { attributes: true, attributeFilter: ['disabled', 'aria-disabled'] }));

    const navigate = (nextIndex) => {
      const wrapped = Math.abs(nextIndex - activeIndex) > 1;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!wrapped || reducedMotion) {
        centerSlide(originals[nextIndex], reducedMotion ? 'auto' : 'smooth');
        return;
      }
      viewport.classList.add('is-wrapping');
      window.setTimeout(() => {
        centerSlide(originals[nextIndex], 'auto');
        syncActive();
        window.requestAnimationFrame(() => viewport.classList.remove('is-wrapping'));
      }, 180);
    };

    previous.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      navigate((activeIndex - 1 + originals.length) % originals.length);
    }, true);
    next.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      navigate((activeIndex + 1) % originals.length);
    }, true);
    dots.forEach((dot, index) => dot.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      navigate(index);
    }, true));

    window.requestAnimationFrame(() => {
      centerSlide(originals[0], 'auto');
      syncActive();
    });
    return true;
  };

  const enhanceMouseDragCarousel = () => {
    const viewport = document.querySelector('#work .work-carousel-viewport');
    const track = viewport?.querySelector('.work-carousel-track');
    if (!viewport || !track || viewport.dataset.mouseDragReady === 'true') return false;

    viewport.dataset.mouseDragReady = 'true';
    let pointerId = null;
    let startX = 0;
    let startScrollLeft = 0;
    let dragged = false;
    let suppressClick = false;

    const finish = (event) => {
      if (pointerId === null || event.pointerId !== pointerId) return;
      if (viewport.hasPointerCapture(pointerId)) viewport.releasePointerCapture(pointerId);
      pointerId = null;
      viewport.classList.remove('is-mouse-dragging');

      if (!dragged) return;
      suppressClick = true;
      window.setTimeout(() => { suppressClick = false; }, 0);
      const slides = Array.from(track.querySelectorAll('.work-carousel-slide:not([data-carousel-clone])'));
      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
      const closest = slides.reduce((best, slide) => {
        const distance = Math.abs((slide.offsetLeft + slide.offsetWidth / 2) - viewportCenter);
        return !best || distance < best.distance ? { slide, distance } : best;
      }, null)?.slide;
      if (closest) {
        const left = closest.offsetLeft - (viewport.clientWidth - closest.offsetWidth) / 2;
        viewport.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    };

    viewport.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'touch' || event.button !== 0) return;
      if (!event.target.closest('.work-carousel-visual-hit')) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScrollLeft = viewport.scrollLeft;
      dragged = false;
    }, true);

    viewport.addEventListener('pointermove', (event) => {
      if (pointerId === null || event.pointerId !== pointerId) return;
      const movement = event.clientX - startX;
      if (Math.abs(movement) > 5 && !dragged) {
        dragged = true;
        viewport.classList.add('is-mouse-dragging');
        viewport.setPointerCapture(pointerId);
      }
      if (!dragged) return;
      event.preventDefault();
      viewport.scrollLeft = startScrollLeft - movement;
    }, true);

    viewport.addEventListener('pointerup', finish, true);
    viewport.addEventListener('pointercancel', finish, true);
    viewport.addEventListener('click', (event) => {
      if (!suppressClick || !event.target.closest('.work-carousel-visual-hit')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressClick = false;
    }, true);
    return true;
  };

  const enhanceEditorialMotion = () => {
    const hero = document.querySelector('#top');
    const badge = hero?.querySelector('.badge-assembly');
    if (hero && hero.dataset.ambientReady !== 'true') {
      hero.dataset.ambientReady = 'true';
      hero.classList.add('hero-editorial');

      if (!hero.querySelector('.hero-art')) {
        hero.insertAdjacentHTML('afterbegin', `
          <div class="hero-art" aria-hidden="true">
            <span class="hero-art__flare"></span>
            <span class="hero-art__portal"></span>
            <span class="hero-art__beam"></span>
          </div>
        `);
      }

      const updateHeroPointer = (event) => {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--hero-x', `${((event.clientX - rect.left) / rect.width * 100).toFixed(2)}%`);
        hero.style.setProperty('--hero-y', `${((event.clientY - rect.top) / rect.height * 100).toFixed(2)}%`);
      };
      hero.addEventListener('pointermove', updateHeroPointer, { passive: true });
      hero.addEventListener('pointerleave', () => {
        hero.style.setProperty('--hero-x', '50%');
        hero.style.setProperty('--hero-y', '48%');
      }, { passive: true });
    }

    const workTitle = document.querySelector('#work h2');
    const desiredWorkTitle = window.PORTFOLIO_CONTENT?.work?.title || 'Portfolio';
    if (workTitle && (workTitle.dataset.typeReveal !== 'true' || workTitle.textContent.trim() !== desiredWorkTitle)) {
      workTitle.dataset.typeReveal = 'true';
      workTitle.setAttribute('aria-label', desiredWorkTitle);
      const words = desiredWorkTitle.trim().split(/\s+/);
      workTitle.innerHTML = words.map((word, index) => `<span style="--word-index:${index}">${escapeHTML(word)}</span>`).join(' ');
    }

    const about = document.querySelector('#about');
    if (about && about.dataset.editorialReady !== 'true') {
      about.dataset.editorialReady = 'true';
      about.classList.add('about-editorial', 'about-reveal-ready');
      const stage = about.querySelector(':scope > div');
      stage?.classList.add('about-stage');
      const title = about.querySelector('h2');
      const copy = stage?.querySelector(':scope > div:last-child');

      if (title && title.dataset.revealWords !== 'true') {
        const accessibleTitle = title.textContent.trim();
        title.dataset.revealWords = 'true';
        title.setAttribute('aria-label', accessibleTitle);
        title.innerHTML = accessibleTitle
          .split(/\s+/)
          .map((word, index) => `<span class="about-reveal-word" aria-hidden="true" style="--about-word:${index}">${escapeHTML(word)}</span>`)
          .join(' ');
      }

      [...(copy?.querySelectorAll(':scope > p') || [])].forEach((paragraph, index) => {
        paragraph.style.setProperty('--about-index', index);
        paragraph.dataset.revealCopy = 'true';
      });
    }

    const contact = document.querySelector('#contact');
    if (contact) contact.dataset.revealContact = 'true';

    if (document.documentElement.dataset.editorialObserver !== 'true') {
      document.documentElement.dataset.editorialObserver = 'true';
      const observed = document.querySelectorAll('#work h2[data-type-reveal], #about.about-reveal-ready, #contact[data-reveal-contact]');
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const revealElement = (element) => {
        if (element.matches('#about.about-reveal-ready')) {
          if (element.dataset.revealStarted === 'true') return;
          element.dataset.revealStarted = 'true';
          element.classList.add('is-visible', 'is-title-visible');
          const wordCount = element.querySelectorAll('.about-reveal-word').length;
          const copyDelay = reducedMotion.matches ? 0 : Math.min(760, 390 + wordCount * 30);
          window.setTimeout(() => element.classList.add('is-copy-visible'), copyDelay);
          return;
        }
        element.classList.add('is-visible');
      };
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealElement(entry.target);
            observer.unobserve(entry.target);
          });
        }, { threshold: .14, rootMargin: '0px 0px -7% 0px' });
        observed.forEach((element) => observer.observe(element));

        window.setTimeout(() => {
          const aboutSection = document.querySelector('#about.about-reveal-ready');
          if (!aboutSection || aboutSection.dataset.revealStarted === 'true') return;
          const rect = aboutSection.getBoundingClientRect();
          if (rect.top < window.innerHeight * .94 && rect.bottom > 0) revealElement(aboutSection);
        }, 1200);
      } else {
        observed.forEach(revealElement);
      }
    }

    if (hero && badge && document.documentElement.dataset.heroScrollMotion !== 'true') {
      document.documentElement.dataset.heroScrollMotion = 'true';
      let ticking = false;
      const syncHeroScroll = () => {
        const progress = Math.max(0, Math.min(1, window.scrollY / Math.max(hero.offsetHeight, 1)));
        hero.style.setProperty('--hero-scroll', progress.toFixed(3));
        ticking = false;
      };
      window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(syncHeroScroll);
      }, { passive: true });
      syncHeroScroll();
    }
  };

  const enhanceApproachIcons = () => {
    const approachHeading = document.querySelector('[data-approach-heading="true"]')
      || document.querySelector('.approach-heading__second-line')?.closest('h2')
      || Array.from(document.querySelectorAll('section h2')).find((heading) =>
        heading.textContent.replace(/\s+/g, ' ').trim() === 'From visual systems to digital experiences'
      );
    const section = approachHeading?.closest('section');
    if (!section) return false;

    approachHeading.dataset.approachHeading = 'true';
    approachHeading.setAttribute('aria-label', 'From visual systems to digital experiences');
    if (!approachHeading.querySelector('.approach-heading__second-line')) {
      approachHeading.innerHTML = 'From visual systems<br><span class="approach-heading__second-line">to digital experiences</span>';
    }

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
        const badge = element.closest('#top .badge-assembly');
        if (badge) return badge.classList.contains('is-flipped') ? 'back' : 'flip';
        if (element.closest('#work .work-carousel-visual')) return 'view';
        if (element.closest('a, button, input, textarea, select, summary, [role="button"], [tabindex]:not([tabindex="-1"])')) return 'link';
        if (element.closest('#work .work-carousel-viewport')) return 'drag';
        return 'default';
      };

      const setState = (nextState) => {
        if (state === nextState) return;
        state = nextState;
        cursor.dataset.state = state;
        label.textContent = stateLabels[state] || '';
      };

      const render = () => {
        if (activeTarget?.isConnected) setState(resolveState(activeTarget));
        const easing = reducedMotion.matches ? 1 : .42;
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

  const enhanceContactTitleKinetics = () => {
    const title = document.querySelector('#contact h2');
    if (!title) return;
    if (title.dataset.kineticReady === 'true') return;

    const lines = [...title.querySelectorAll('.contact-line, .contact-gradient')];
    if (!lines.length) return;

    title.dataset.kineticReady = 'true';
    title.classList.add('contact-kinetic');
    title.setAttribute('aria-label', lines.map((line) => line.textContent.trim()).join(' '));

    const gradientColor = (progress) => {
      const hue = 264 + progress * 30;
      const lightness = 78 - Math.sin(Math.PI * progress) * 17;
      return `hsl(${hue.toFixed(1)} 88% ${lightness.toFixed(1)}%)`;
    };

    let characterIndex = 0;
    lines.forEach((line) => {
      const words = line.textContent.trim().split(/\s+/);
      const isGradientLine = line.classList.contains('contact-gradient');
      const lineCharacterCount = [...words.join('')].length;
      let lineCharacterIndex = 0;
      line.setAttribute('aria-hidden', 'true');
      line.textContent = '';

      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'contact-word';

        [...word].forEach((character) => {
          const span = document.createElement('span');
          span.className = 'contact-char';
          span.dataset.charIndex = String(characterIndex);
          span.textContent = character;
          if (isGradientLine) {
            const progress = lineCharacterCount > 1 ? lineCharacterIndex / (lineCharacterCount - 1) : 0;
            span.style.setProperty('--contact-char-color', gradientColor(progress));
          }
          wordSpan.append(span);
          characterIndex += 1;
          lineCharacterIndex += 1;
        });

        line.append(wordSpan);
        if (wordIndex < words.length - 1) {
          const space = document.createElement('span');
          space.className = 'contact-space';
          space.setAttribute('aria-hidden', 'true');
          line.append(space);
        }
      });
    });

    const characters = [...title.querySelectorAll('.contact-char')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let active = false;
    let pointerX = 0;
    let pointerY = 0;
    let centers = [];
    let frame = 0;

    const measure = () => {
      centers = characters.map((character) => {
        const rect = character.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      });
    };

    const reset = () => {
      characters.forEach((character) => {
        character.style.setProperty('--contact-x', '0px');
        character.style.setProperty('--contact-y', '0px');
        character.style.setProperty('--contact-r', '0deg');
        character.style.setProperty('--contact-s', '1');
      });
    };

    const animate = (time) => {
      if (!active) {
        frame = 0;
        return;
      }

      characters.forEach((character, index) => {
        const center = centers[index];
        if (!center) return;

        const deltaX = center.x - pointerX;
        const deltaY = center.y - pointerY;
        const distance = Math.max(1, Math.hypot(deltaX, deltaY));
        const influence = Math.pow(Math.max(0, 1 - distance / 205), 1.7);
        const jitterX = Math.sin(time * .024 + index * 1.37) * 1.1 * influence;
        const jitterY = Math.cos(time * .03 + index * 1.81) * 4.8 * influence;
        const pushX = deltaX / distance * 2.4 * influence;
        const pushY = deltaY / distance * 6.5 * influence;
        const rotation = Math.sin(time * .019 + index * .82) * 2.2 * influence;

        character.style.setProperty('--contact-x', `${(pushX + jitterX).toFixed(2)}px`);
        character.style.setProperty('--contact-y', `${(pushY + jitterY).toFixed(2)}px`);
        character.style.setProperty('--contact-r', `${rotation.toFixed(2)}deg`);
        character.style.setProperty('--contact-s', (1 + influence * .018).toFixed(3));
      });

      frame = window.requestAnimationFrame(animate);
    };

    title.addEventListener('pointerenter', (event) => {
      if (reduceMotion.matches || !finePointer.matches) return;
      active = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
      measure();
      title.classList.add('is-kinetic');
      if (!frame) frame = window.requestAnimationFrame(animate);
    }, { passive: true });

    title.addEventListener('pointermove', (event) => {
      if (!active) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
    }, { passive: true });

    title.addEventListener('pointerleave', () => {
      active = false;
      title.classList.remove('is-kinetic');
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      reset();
    }, { passive: true });

    window.addEventListener('resize', () => {
      if (active) measure();
    }, { passive: true });
  };

  const enhanceContactBackground = () => {
    const contact = document.querySelector('#contact');
    if (!contact || contact.dataset.graphicReady === 'true') return;
    contact.dataset.graphicReady = 'true';
    contact.insertAdjacentHTML('afterbegin', `
      <div class="contact-graphic" aria-hidden="true">
        <span class="contact-graphic__wash"></span>
        <span class="contact-graphic__blob contact-graphic__blob--one"></span>
        <span class="contact-graphic__blob contact-graphic__blob--two"></span>
        <span class="contact-graphic__blob contact-graphic__blob--three"></span>
        <span class="contact-graphic__veil"></span>
      </div>`);

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    contact.addEventListener('pointermove', (event) => {
      if (!finePointer.matches) return;
      const rect = contact.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
      const horizontal = (x / Math.max(rect.width, 1) - .5) * 34;
      const vertical = (y / Math.max(rect.height, 1) - .5) * 26;
      contact.style.setProperty('--contact-pointer-x', `${x.toFixed(1)}px`);
      contact.style.setProperty('--contact-pointer-y', `${y.toFixed(1)}px`);
      contact.style.setProperty('--contact-parallax-x', `${horizontal.toFixed(1)}px`);
      contact.style.setProperty('--contact-parallax-y', `${vertical.toFixed(1)}px`);
    }, { passive: true });
    contact.addEventListener('pointerleave', () => {
      contact.style.setProperty('--contact-pointer-x', '50%');
      contact.style.setProperty('--contact-pointer-y', '50%');
      contact.style.setProperty('--contact-parallax-x', '0px');
      contact.style.setProperty('--contact-parallax-y', '0px');
    }, { passive: true });
  };

  const removeRepeatedBrandArtwork = () => {
    const brandSlide = Array.from(document.querySelectorAll('#work .work-carousel-slide, #work article')).find((slide) =>
      /Brand & Digital Design|Visual Systems across Digital/i.test(slide.textContent)
    );
    const visual = brandSlide?.querySelector('.work-carousel-visual, :scope > div:first-child');
    if (!visual) return;

    const repeatedArtwork = visual.querySelector('img');
    if (!repeatedArtwork && !visual.classList.contains('naili-project-cover')) return;
    visual.classList.remove('naili-project-cover', 'rally-project-cover');
    visual.removeAttribute('data-real-artwork');
    visual.classList.add('brand-project-cover');
    visual.innerHTML = '<strong class="brand-project-cover__label">Brand &amp; Digital Design</strong>';
  };

  const apply = () => {
    removeRequestedSections();
    enhanceIntroduction();
    reorderAboutBeforeWork();
    enhanceHeroBadge();
    ensureRallyProject();
    const nailiSlide = Array.from(document.querySelectorAll('#work .work-carousel-slide, #work article')).find((slide) =>
      /Naili|INAIL Campania/i.test(slide.textContent)
    );
    const nailiVisual = nailiSlide?.querySelector('.work-carousel-visual, :scope > div:first-child');
    if (nailiVisual && nailiVisual.dataset.realArtwork !== 'true') {
      nailiVisual.dataset.realArtwork = 'true';
      nailiVisual.classList.add('naili-project-cover');
      nailiVisual.innerHTML = `
        <img src="/assets/naili-gatto-perry/naili-cover-hd.png" alt="Cover illustration for Naili &amp; Gatto Perry, created for the Sicuri e Connessi project" loading="lazy" decoding="async">
        <strong class="naili-project-cover__label">Naili &amp; Gatto Perry</strong>`;
    }
    removeRepeatedBrandArtwork();
    enhanceCarousel();
    enhanceCaseStudyLinks();
    enhanceInfiniteCarousel();
    enhanceMouseDragCarousel();
    enhanceApproachIcons();
    enhanceEditorialMotion();

    const contactTitle = document.querySelector('#contact h2');
    const contactMarkupIsComplete = contactTitle?.querySelector('.contact-line')
      && contactTitle.querySelector('.contact-gradient');
    if (contactTitle && !contactMarkupIsComplete) {
      delete contactTitle.dataset.kineticReady;
      contactTitle.dataset.gradientReady = 'true';
      contactTitle.innerHTML = `<span class="contact-line">Let's create clear</span><span class="contact-gradient">digital experiences.</span>`;
    }
    enhanceContactTitleKinetics();
    enhanceContactBackground();

    const behance = document.querySelector('footer [data-behance-footer]');
    if (behance && !behance.querySelector('.behance-mark')) {
      behance.innerHTML = '<span class="behance-mark" aria-hidden="true"><b>B</b><i>ē</i></span>';
    }

    const backToTop = document.querySelector('footer a[href="#top"]');
    if (backToTop && backToTop.textContent.trim() !== '↑') {
      backToTop.textContent = '↑';
      backToTop.setAttribute('aria-label', 'Back to top');
      backToTop.title = 'Back to top';
      backToTop.classList.add('footer-back-to-top');
    }
    setupCustomCursor();
    document.documentElement.classList.remove('portfolio-booting');
  };

  ensureRallyProject();

  const start = () => {
    const applyAfterHydration = () => {
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
