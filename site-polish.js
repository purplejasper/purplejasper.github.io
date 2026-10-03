(() => {
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

    document.querySelectorAll('#contact a').forEach((link) => {
      if (link.textContent.toLowerCase().includes('download cv')) link.remove();
    });

    document.querySelectorAll('#contact > div > div').forEach((block) => {
      const text = block.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
      if (text.startsWith('name') && text.includes('email')) block.remove();
    });
  };

  const enhanceHeroBadge = () => {
    const badge = document.querySelector('#top .badge-sway');
    const card = badge?.children?.[2];
    if (!badge || !card || card.dataset.interactiveBadge === 'true') return;

    card.dataset.interactiveBadge = 'true';
    card.classList.add('hero-badge-card');

    badge.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      const rect = card.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      card.style.setProperty('--badge-ry', `${((x - .5) * 10).toFixed(2)}deg`);
      card.style.setProperty('--badge-rx', `${((.5 - y) * 8).toFixed(2)}deg`);
      card.style.setProperty('--badge-y', '-6px');
    });

    badge.addEventListener('pointerleave', () => {
      card.style.removeProperty('--badge-ry');
      card.style.removeProperty('--badge-rx');
      card.style.removeProperty('--badge-y');
    });

    card.addEventListener('pointerdown', () => {
      card.classList.remove('is-tapped');
      void card.offsetWidth;
      card.classList.add('is-tapped');
    });
    card.addEventListener('animationend', () => card.classList.remove('is-tapped'));
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
      link.textContent = 'View Case Study';
      oldButton.replaceWith(link);
    });
    return true;
  };

  const apply = () => {
    removeRequestedSections();
    enhanceHeroBadge();
    enhanceCarousel();
  };

  const start = () => {
    window.setTimeout(() => {
      apply();
      let attempts = 0;
      const retry = window.setInterval(() => {
        apply();
        attempts += 1;
        if (attempts > 12 && document.querySelector('#work .work-carousel-viewport[data-polished="true"]')) window.clearInterval(retry);
      }, 180);
    }, 850);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
