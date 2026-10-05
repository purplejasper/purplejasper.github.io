/*
 * EDITABLE PORTFOLIO CONTENT
 * Change the values in PORTFOLIO_CONTENT to update the homepage copy.
 * Keep the property names unchanged: only edit the text between quotes.
 */
(() => {
  const PORTFOLIO_CONTENT = {
    seo: {
      title: 'Marica Mariniello — UX/UI Designer & Visual Design Specialist',
      author: 'Marica Mariniello',
      description: 'UX/UI Designer with a strong Visual Design background: responsive interfaces, visual systems, reusable UI patterns and design delivery.'
    },

    links: {
      email: 'mailto:mariniello.marica@gmail.com',
      linkedin: 'https://www.linkedin.com/in/maricamariniello/',
      behance: 'https://www.behance.net/maricamarinie'
    },

    navigation: {
      logo: 'Marica Mariniello - Designer',
      work: 'Work',
      about: 'About',
      contact: "Let's talk"
    },

    hero: {
      words: ['UX / UI', 'VISUAL', 'SYSTEMS', 'DESIGN']
    },

    badge: {
      microLeft: ['UX/UI', 'VISUAL', 'DESIGNER'],
      microRight: ['DIGITAL', 'PROFILE'],
      firstName: 'MARICA',
      fullName: 'MARICA MARINIELLO',
      role: 'UX/UI Designer',
      roleSecondary: '+ Visual Design Specialist',
      status: 'OPEN TO WORK',
      monogram: 'MM✦',
      id: 'ID 0001',
      frontLabel: 'Fronte del badge',
      backLabel: 'Retro del badge',
      professionalId: 'PROFESSIONAL ID',
      contactDetails: 'CONTACT / DETAILS',
      showBack: 'Mostra il retro del badge di Marica Mariniello',
      showFront: 'Mostra il fronte del badge di Marica Mariniello',
      linkedinLabel: 'LinkedIn ↗'
    },

    introduction: {
      eyebrow: 'Marica Mariniello — UX/UI Designer & Visual Design Specialist',
      visualKicker: 'UI × Visual Systems',
      displayTitleLead: 'Design with',
      displayTitleAccent: 'clarity.',
      displayTitleClose: 'Built with character.',
      title: 'I design clear, consistent digital experiences by combining UI design, visual systems and a strong graphic design background.',
      description: 'With 6+ years of experience in visual and digital design and 2+ years focused on UI/Web Design, I work across responsive interfaces, content hierarchy, reusable patterns and design delivery.',
      skills: ['UI Design', 'Responsive Design', 'Visual Systems'],
      primaryCta: 'View Selected Work',
      secondaryCta: 'About Me',
      cvCta: 'Download CV',
      experienceTag: '6+ yrs · Visual & Digital',
      visualCore: 'MM✦',
      visualOrbitTop: 'UI DESIGN',
      visualOrbitRight: 'RESPONSIVE',
      visualOrbitBottom: 'VISUAL SYSTEMS',
      experienceValue: '06+',
      experienceLabel: 'years visual & digital',
      interfaceValue: '02+',
      interfaceLabel: 'years focused on UI/Web'
    },

    work: {
      title: 'Selected\nwork',
      description: 'Four projects across UI design, implementation, visual systems and editorial illustration.',
      mockupLabel: 'Mockup coming soon',
      viewCaseStudy: 'View Case Study',
      projects: [
        {
          number: '01',
          name: 'Arkipiù',
          title: 'Corporate Website Redesign',
          description: 'End-to-end redesign of a corporate real estate website across 12 pages, focused on clarifying brand positioning, improving content hierarchy and creating a more coherent responsive experience.',
          skills: ['UI Design', 'Information Architecture', 'Responsive Design', 'Design QA'],
          stats: [
            { value: '12', label: 'pages redesigned' },
            { value: '+89%', label: 'unique visitors' },
            { value: '+111%', label: 'organic Google sessions YoY' }
          ],
          note: 'Website performance measured during the 12 months following the redesign.'
        },
        {
          number: '02',
          name: 'Groupline Shop',
          title: 'Conversion-focused Landing Pages',
          description: 'Designed and implemented approximately 10 mobile-first landing pages across 6 products, supporting TikTok and social advertising campaigns.',
          skills: ['UI Design', 'Mobile-first', 'A/B Testing', 'Front-end Implementation']
        },
        {
          number: '03',
          name: 'Naili & Gatto Perry',
          title: 'Editorial Illustration & Information Design',
          description: 'End-to-end visual development of two editions of the institutional publication ‘Naili & Gatto Perry’ for INAIL.',
          skills: ['Illustration', 'Character Design', 'Visual Storytelling', 'Information Design']
        },
        {
          number: '04',
          name: 'Brand & Digital Design',
          title: 'Visual Systems across Digital and Offline Touchpoints',
          description: 'During my experience with ItAres and NWM Network, I worked on brand identities, digital campaigns, social assets and marketing materials for different clients and e-commerce brands.',
          skills: ['Brand Identity', 'Digital Design', 'Social', 'Advertising', 'Print', 'Corporate Communication']
        }
      ]
    },

    about: {
      eyebrow: 'About',
      title: 'Designing at the intersection of visual language and digital experience',
      paragraphs: [
        "I'm a UX/UI Designer with a strong background in Visual and Graphic Design.",
        'My experience spans corporate websites, conversion-focused landing pages, visual identities, editorial projects and digital communication.',
        'Over the last few years, I have progressively focused my work on interface design, responsive experiences, information architecture and reusable UI systems.',
        'I collaborate with Marketing, Development and internal stakeholders from early content and design decisions through implementation, handoff and Design QA.'
      ]
    },

    capabilities: {
      eyebrow: 'Capabilities',
      groups: [
        { title: 'UX', items: ['Information Architecture', 'User Flows', 'Wireframing', 'Prototyping', 'Competitor Analysis', 'User Feedback', 'Design Thinking'] },
        { title: 'UI', items: ['Responsive UI', 'Mobile-first Design', 'Visual Hierarchy', 'UI Patterns', 'Reusable Components', 'Design System Fundamentals'] },
        { title: 'Delivery', items: ['Figma', 'Developer Handoff', 'Design QA', 'HTML / CSS', 'Wix Studio', 'Cross-device QA'] },
        { title: 'Visual', items: ['Typography', 'Visual Systems', 'Brand Consistency', 'Editorial Design', 'Adobe Creative Suite'] }
      ]
    },

    approach: {
      eyebrow: 'Design approach',
      title: 'From visual systems to digital experiences',
      description: 'My approach combines the precision of visual design with the logic of interface design.',
      principles: [
        { number: '01', title: 'Clarity', description: 'Creating clear hierarchies and reducing visual noise.' },
        { number: '02', title: 'Consistency', description: 'Building reusable patterns and coherent interface systems.' },
        { number: '03', title: 'Responsiveness', description: 'Designing experiences that adapt effectively across devices.' },
        { number: '04', title: 'Delivery', description: 'Considering implementation, handoff and QA as part of the design process.' }
      ]
    },

    experience: {
      eyebrow: 'Experience',
      roles: [
        { title: 'UI & Visual Designer', company: 'Arkipiù', period: '2025 – Present' },
        { title: 'UI & Web Designer', company: 'Groupline Shop', period: '2023 – 2025' },
        { title: 'Brand & Graphic Designer', company: 'ItAres', period: '2020 – 2023' },
        { title: 'Visual & Digital Designer', company: 'NWM Network', period: '2021 – 2023' },
        { title: 'Digital Illustrator / Visual & Information Design', company: 'INAIL / NWM Network', period: '2022 – 2024' }
      ]
    },

    education: {
      eyebrow: 'Education & continuous learning',
      description: 'My background combines formal education in graphic design with continuous specialization in UX/UI and digital product design.',
      courses: [
        { title: 'Google UX Design Professional Certificate', detail: 'Google, 2026' },
        { title: 'Interaction Design: Interface', detail: 'LinkedIn Learning, 2026' },
        { title: 'Figma Essentials', detail: 'LinkedIn Learning, 2026' },
        { title: 'UI Design', detail: 'Learnn, 2025' }
      ],
      studies: [
        { title: 'BA in Graphic Arts', detail: 'Accademia di Belle Arti', period: '2019–2022' },
        { title: 'Master in Concept Art, Design & 2D Color', detail: 'Rainbow Academy', period: '2022–2023' }
      ]
    },

    tools: {
      eyebrow: 'Tools',
      groups: [
        { title: 'UX/UI & Prototyping', items: ['Figma', 'FigJam'] },
        { title: 'Design', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'PowerPoint'] },
        { title: 'Web', items: ['Wix Studio', 'WordPress', 'HTML5', 'CSS3', 'Visual Studio Code'] },
        { title: 'Workflow', items: ['Monday', 'Google Workspace', 'Jira', 'Trello'] },
        { title: 'AI', items: ['ChatGPT', 'Claude', 'Midjourney', 'Lovable'] }
      ],
      ticker: ['Figma', 'Wix Studio', 'HTML5', 'CSS3', 'Photoshop', 'Illustrator', 'InDesign', 'FigJam']
    },

    contact: {
      title: "Let's create clear digital experiences.",
      highlightedWord: 'experiences.',
      description: "I'm currently interested in opportunities across UI/UX Design, Visual UI Design and Product Design, where I can combine my visual background with interface and experience design.",
      cta: 'Get in touch'
    },

    footer: {
      copyright: '© 2026 Marica Mariniello',
      backToTop: 'Back to top ↑',
      linkedinTitle: 'LinkedIn',
      linkedinAriaLabel: 'Marica Mariniello on LinkedIn',
      behanceTitle: 'Behance',
      behanceAriaLabel: 'Marica Mariniello on Behance'
    },

    carousel: {
      previous: 'Previous',
      next: 'Next',
      previousAriaLabel: 'Show previous project',
      nextAriaLabel: 'Show next project',
      chooseProjectAriaLabel: 'Choose project',
      selectedWorkAriaLabel: 'Selected work',
      showProjectAriaLabel: 'Show project'
    }
  };

  window.PORTFOLIO_CONTENT = PORTFOLIO_CONTENT;

  const text = (element, value) => {
    if (element && value !== undefined) element.textContent = value;
  };

  const texts = (elements, values = []) => {
    Array.from(elements || []).forEach((element, index) => text(element, values[index]));
  };

  const markSection = (key, originalLabel) => {
    const marked = document.querySelector(`[data-content-section="${key}"]`);
    if (marked) return marked;
    const section = Array.from(document.querySelectorAll('section')).find((item) =>
      Array.from(item.querySelectorAll('p')).some((paragraph) => paragraph.textContent.trim() === originalLabel)
    );
    if (section) section.dataset.contentSection = key;
    return section;
  };

  const applyProject = (article, project) => {
    if (!article || !project) return;
    const title = article.querySelector('h3');
    const copy = title?.parentElement;
    const visual = article.firstElementChild;
    const visualText = visual?.querySelectorAll('p');
    if (visualText?.length) text(visualText[visualText.length - 1], project.name);
    const label = title?.previousElementSibling;
    if (label) text(label, `${project.number} — ${project.name}`);
    text(title, project.title);
    text(title?.nextElementSibling, project.description);
    texts(copy?.querySelectorAll('ul li'), project.skills);

    const stats = copy?.querySelectorAll('.grid-cols-3 > div');
    Array.from(stats || []).forEach((stat, index) => {
      text(stat.querySelector('p:first-child'), project.stats?.[index]?.value);
      text(stat.querySelector('p:last-child'), project.stats?.[index]?.label);
    });
    if (project.note) text(copy?.querySelector('.col-span-3'), project.note);
    const caseStudy = Array.from(copy?.querySelectorAll('a, button') || []).find((item) =>
      item.textContent.includes('Case Study')
    );
    text(caseStudy, PORTFOLIO_CONTENT.work.viewCaseStudy);
  };

  const applyContent = () => {
    const content = PORTFOLIO_CONTENT;

    document.title = content.seo.title;
    document.querySelectorAll('meta[name="author"]').forEach((meta) => meta.content = content.seo.author);
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => meta.content = content.seo.description);
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((meta) => meta.content = content.seo.title);

    const navigation = document.querySelectorAll('header nav a');
    texts(navigation, [content.navigation.logo, content.navigation.work, content.navigation.about, content.navigation.contact]);

    texts(document.querySelectorAll('#top > span'), content.hero.words);

    const introduction = document.querySelector('#top + section');
    if (introduction?.dataset.introEnhanced === 'true') {
      text(introduction.querySelector('[data-intro="eyebrow"]'), content.introduction.eyebrow);
      text(introduction.querySelector('[data-intro="visual-kicker"]'), content.introduction.visualKicker);
      text(introduction.querySelector('[data-intro="title-lead"]'), content.introduction.displayTitleLead);
      text(introduction.querySelector('[data-intro="title-accent"]'), content.introduction.displayTitleAccent);
      text(introduction.querySelector('[data-intro="title-close"]'), content.introduction.displayTitleClose);
      text(introduction.querySelector('[data-intro="description"]'), content.introduction.description);
      text(introduction.querySelector('[data-intro="primary-cta"]'), content.introduction.primaryCta);
      text(introduction.querySelector('[data-intro="secondary-cta"]'), content.introduction.secondaryCta);
      text(introduction.querySelector('[data-intro="visual-core"]'), content.introduction.visualCore);
      text(introduction.querySelector('[data-intro="visual-orbit-top"]'), content.introduction.visualOrbitTop);
      text(introduction.querySelector('[data-intro="visual-orbit-right"]'), content.introduction.visualOrbitRight);
      text(introduction.querySelector('[data-intro="visual-orbit-bottom"]'), content.introduction.visualOrbitBottom);
      text(introduction.querySelector('[data-intro="experience-value"]'), content.introduction.experienceValue);
      text(introduction.querySelector('[data-intro="experience-label"]'), content.introduction.experienceLabel);
      text(introduction.querySelector('[data-intro="interface-value"]'), content.introduction.interfaceValue);
      text(introduction.querySelector('[data-intro="interface-label"]'), content.introduction.interfaceLabel);
      texts(introduction.querySelectorAll('[data-intro-skill]'), content.introduction.skills);
    } else if (introduction) {
      const paragraphs = introduction.querySelectorAll('p');
      text(paragraphs[0], content.introduction.eyebrow);
      text(introduction.querySelector('h1'), content.introduction.title);
      text(paragraphs[1], content.introduction.description);
      texts(introduction.querySelectorAll('ul:first-of-type li'), content.introduction.skills);
      texts(introduction.querySelectorAll('a'), [content.introduction.primaryCta, content.introduction.secondaryCta, content.introduction.cvCta]);
      const tag = introduction.querySelector('img + span');
      text(tag, content.introduction.experienceTag);
    }

    const work = document.querySelector('#work');
    if (work) {
      const heading = work.querySelector('h2');
      if (heading) heading.innerHTML = content.work.title.replace('\n', '<br>');
      const headerParagraph = heading?.parentElement?.querySelector('p');
      text(headerParagraph, content.work.description);
      work.querySelectorAll('.work-carousel-visual span, article > div:first-child span').forEach((label) => text(label, content.work.mockupLabel));
      Array.from(work.querySelectorAll('article')).forEach((article, index) => applyProject(article, content.work.projects[index]));
    }

    const about = document.querySelector('#about');
    if (about) {
      text(about.querySelector('p'), content.about.eyebrow);
      text(about.querySelector('h2'), content.about.title);
      texts(about.querySelectorAll('div:last-child > p'), content.about.paragraphs);
    }

    const capabilities = markSection('capabilities', 'Capabilities');
    if (capabilities) {
      text(capabilities.querySelector('p'), content.capabilities.eyebrow);
      Array.from(capabilities.querySelectorAll('h3')).forEach((heading, index) => {
        text(heading, content.capabilities.groups[index]?.title);
        texts(heading.parentElement?.querySelectorAll('li'), content.capabilities.groups[index]?.items);
      });
    }

    const approach = markSection('approach', 'Design approach');
    if (approach) {
      const topParagraphs = approach.querySelectorAll(':scope > div > p');
      text(topParagraphs[0], content.approach.eyebrow);
      text(approach.querySelector('h2'), content.approach.title);
      text(topParagraphs[1], content.approach.description);
      Array.from(approach.querySelectorAll('h3')).forEach((heading, index) => {
        const principle = content.approach.principles[index];
        const row = heading.parentElement;
        text(row?.querySelector('span'), principle?.number);
        text(heading, principle?.title);
        text(row?.querySelector('p'), principle?.description);
      });
    }

    const experience = markSection('experience', 'Experience');
    if (experience) {
      const columns = experience.querySelectorAll(':scope > div > div');
      const experienceColumn = columns[0];
      const educationColumn = columns[1];
      text(experienceColumn?.querySelector(':scope > p'), content.experience.eyebrow);
      Array.from(experienceColumn?.querySelectorAll('li') || []).forEach((item, index) => {
        const role = content.experience.roles[index];
        const paragraphs = item.querySelectorAll('p');
        texts(paragraphs, [role?.title, role?.company, role?.period]);
      });

      const educationParagraphs = educationColumn?.querySelectorAll(':scope > p');
      text(educationParagraphs?.[0], content.education.eyebrow);
      text(educationParagraphs?.[1], content.education.description);
      const educationLists = educationColumn?.querySelectorAll(':scope > ul');
      Array.from(educationLists?.[0]?.querySelectorAll('li') || []).forEach((item, index) => {
        texts(item.querySelectorAll('p'), [content.education.courses[index]?.title, content.education.courses[index]?.detail]);
      });
      Array.from(educationLists?.[1]?.querySelectorAll('li') || []).forEach((item, index) => {
        texts(item.querySelectorAll('p'), [content.education.studies[index]?.title, content.education.studies[index]?.detail, content.education.studies[index]?.period]);
      });
    }

    const tools = markSection('tools', 'Tools');
    if (tools) {
      text(tools.querySelector('p'), content.tools.eyebrow);
      const groups = tools.querySelectorAll(':scope > div:first-child > div > div');
      Array.from(groups).forEach((group, index) => {
        text(group.querySelector('p'), content.tools.groups[index]?.title);
        texts(group.querySelectorAll('li'), content.tools.groups[index]?.items);
      });
      const tickerItems = tools.querySelectorAll('.ticker-track > div:first-child > span');
      texts(tickerItems, content.tools.ticker.map((item) => `${item}✦`));
      const duplicateTickerItems = tools.querySelectorAll('.ticker-track > div:last-child > span');
      texts(duplicateTickerItems, content.tools.ticker.map((item) => `${item}✦`));
    }

    const contact = document.querySelector('#contact');
    if (contact) {
      const contactTitle = contact.querySelector('h2');
      if (contactTitle) {
        const prefix = content.contact.title.replace(content.contact.highlightedWord, '').trimEnd();
        contactTitle.innerHTML = `${prefix} <span class="italic">${content.contact.highlightedWord}</span>`;
      }
      text(contact.querySelector('h2 + p'), content.contact.description);
      const email = contact.querySelector('a[href^="mailto:"]');
      if (email) {
        email.href = content.links.email;
        text(email, content.contact.cta);
      }
    }

    const footer = document.querySelector('footer');
    if (footer) {
      text(footer.querySelector('p'), content.footer.copyright);
      text(footer.querySelector('a[href="#top"]'), content.footer.backToTop);
      const linkedIn = footer.querySelector('[data-linkedin-footer]');
      if (linkedIn) {
        linkedIn.href = content.links.linkedin;
        linkedIn.title = content.footer.linkedinTitle;
        linkedIn.setAttribute('aria-label', content.footer.linkedinAriaLabel);
      }
      const behance = footer.querySelector('[data-behance-footer]');
      if (behance) {
        behance.href = content.links.behance;
        behance.title = content.footer.behanceTitle;
        behance.setAttribute('aria-label', content.footer.behanceAriaLabel);
      }
    }
  };

  const start = () => {
    applyContent();
    [220, 780, 1400].forEach((delay) => window.setTimeout(applyContent, delay));
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
