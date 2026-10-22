(() => {
  const root = document.documentElement;
  if (root.dataset.customCursorSetup === 'true') return;
  root.dataset.customCursorSetup = 'true';

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  let cleanup = null;

  const mount = () => {
    if (cleanup || !finePointer.matches) return;

    const controller = new AbortController();
    const { signal } = controller;
    const cursor = document.createElement('div');
    cursor.className = 'portfolio-cursor';
    cursor.dataset.state = 'default';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span class="portfolio-cursor__disc"><span class="portfolio-cursor__label"></span></span>';
    document.body.append(cursor);

    const label = cursor.querySelector('.portfolio-cursor__label');
    let frame = 0;
    let activeTarget = null;
    let pointerX = 0;
    let pointerY = 0;
    let visible = false;

    const labels = () => {
      const pageCopy = window.PORTFOLIO_CONTENT?.cursor;
      if (pageCopy) return pageCopy;
      return document.documentElement.lang === 'it'
        ? { view: 'APRI', flip: 'GIRA', back: 'FRONTE', drag: 'TRASCINA' }
        : { view: 'VIEW', flip: 'FLIP', back: 'BACK', drag: 'DRAG' };
    };

    const resolveState = (target) => {
      const element = target instanceof Element ? target : null;
      if (!element) return 'default';

      const badge = element.closest('#top .badge-assembly');
      if (badge) return badge.classList.contains('is-flipped') ? 'back' : 'flip';
      if (element.closest('#work .work-carousel-visual')) return 'view';
      if (element.closest('.case-media figure, .case-hero, .isa-home-feature__visual, .isa-screen-frame')) return 'view';
      if (element.closest('a, button, input, textarea, select, summary, [role="button"], [tabindex]:not([tabindex="-1"])')) return 'link';
      if (element.closest('#work .work-carousel-viewport')) return 'drag';
      return 'default';
    };

    const setState = (state) => {
      if (cursor.dataset.state === state) return;
      cursor.dataset.state = state;
      label.textContent = labels()[state] || '';
    };

    const paint = () => {
      frame = 0;
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      setState(resolveState(activeTarget));
    };

    const show = () => {
      if (visible) return;
      visible = true;
      root.classList.add('has-custom-cursor');
      cursor.classList.add('is-visible');
    };

    const hide = () => {
      visible = false;
      root.classList.remove('has-custom-cursor');
      cursor.classList.remove('is-visible');
    };

    document.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      activeTarget = event.target;
      show();
      if (!frame) frame = window.requestAnimationFrame(paint);
    }, { signal, passive: true });

    document.addEventListener('pointerover', (event) => {
      if (event.pointerType === 'touch') return;
      activeTarget = event.target;
      setState(resolveState(activeTarget));
    }, { signal, passive: true });

    document.addEventListener('pointerout', (event) => {
      if (!event.relatedTarget) hide();
    }, { signal, passive: true });

    window.addEventListener('blur', hide, { signal });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) hide();
    }, { signal });

    cleanup = () => {
      controller.abort();
      if (frame) window.cancelAnimationFrame(frame);
      cursor.remove();
      root.classList.remove('has-custom-cursor');
      cleanup = null;
    };
  };

  const sync = () => finePointer.matches ? mount() : cleanup?.();
  if (finePointer.addEventListener) finePointer.addEventListener('change', sync);
  else finePointer.addListener?.(sync);
  sync();
})();
