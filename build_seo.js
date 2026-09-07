#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const SITE_URL = 'https://ckupwiwat.com';
const LASTMOD = new Date().toISOString().slice(0, 10);

function loadData() {
  const source = fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: 'data.js' });
  return sandbox.window.SITE_DATA;
}

const data = loadData();
const template = fs.readFileSync(path.join(ROOT, 'index.template.html'), 'utf8');

const researchPaths = [
  '/research/sustainable-structural-design/',
  '/research/generative-structural-ai/',
  '/research/structural-reasoning-llm/',
  '/research/reinforcement-learning-structural-optimization/'
];

const coursePaths = {
  '2501684': '/teaching/machine-learning-architectural-research/',
  '2501370': '/teaching/optimization-architecture-structural-design/'
};

const publicationPresets = {
  'ai-in-architecture': {
    path: '/publications/ai-in-architecture/',
    title: 'AI in Architecture Research | Chi-tathon Kupwiwat',
    heading: 'AI in Architecture Research',
    description: 'Research by Chi-tathon Kupwiwat on artificial intelligence in architecture, computational architecture, architectural representation, machine learning and data-driven design.',
    about: ['AI in Architecture', 'Computational Architecture', 'Architectural Representation', 'Machine Learning', 'Data-driven Design'],
    match: (p) => {
      const text = `${p.title} ${(p.topics || []).join(' ')}`;
      return /AI in Architecture|Computational Architecture|architectural representation|computer vision|machine learning/i.test(text) && /architecture|architectural|design|building|structural/i.test(text);
    }
  },
  'reinforcement-learning': {
    path: '/publications/reinforcement-learning/',
    title: 'Reinforcement Learning Publications | Chi-tathon Kupwiwat',
    heading: 'Reinforcement Learning Publications',
    description: 'Research publications by Chi-tathon Kupwiwat on reinforcement learning, multi-agent learning, graph representation and structural optimization.',
    about: ['Reinforcement Learning', 'Multi-Agent Reinforcement Learning', 'Structural Optimization', 'Graph Representation'],
    match: (p) => /reinforcement learning/i.test(`${p.title} ${(p.topics || []).join(' ')}`)
  },
  'structural-optimization': {
    path: '/publications/structural-optimization/',
    title: 'Structural Optimization Research | Chi-tathon Kupwiwat',
    heading: 'Structural Optimization Research',
    description: 'Publications on structural optimization, topology and geometry optimization, multi-objective design and AI-assisted structural systems by Chi-tathon Kupwiwat.',
    about: ['Structural Optimization', 'Topology Optimization', 'Geometry Optimization', 'Multi-objective Optimization'],
    match: (p) => /structural optimization|topology optimization|geometry optimization|multi-objective optimization|bracing optimization/i.test(`${p.title} ${(p.topics || []).join(' ')}`)
  },
  'lattice-shells-gridshells': {
    path: '/publications/lattice-shells-gridshells/',
    title: 'AI for Lattice Shell & Gridshell Optimization | Chi-tathon Kupwiwat',
    heading: 'AI for Lattice Shell & Gridshell Optimization',
    description: 'Research on lattice shells and gridshells using machine learning, reinforcement learning, structural optimization, life-cycle assessment and graph-based methods.',
    about: ['Lattice Shells', 'Gridshells', 'Machine Learning', 'Reinforcement Learning', 'Structural Optimization'],
    match: (p) => /lattice shell|latticed shell|grid shell|gridshell/i.test(`${p.title} ${(p.topics || []).join(' ')}`)
  },
  'machine-learning-architecture': {
    path: '/publications/machine-learning-architecture/',
    title: 'Machine Learning in Architecture Research | Chi-tathon Kupwiwat',
    heading: 'Machine Learning in Architecture Research',
    description: 'Research by Chi-tathon Kupwiwat applying machine learning, computer vision and graph learning to architectural, structural and building-design problems.',
    about: ['Machine Learning in Architecture', 'Computer Vision', 'Graph Neural Networks', 'Computational Design'],
    match: (p) => {
      const text = `${p.title} ${(p.topics || []).join(' ')}`;
      return /machine learning|computer vision|cnn|graph neural network/i.test(text) && /architecture|architectural|structural|building|shell|frame|design/i.test(text);
    }
  }
};

const routes = [
  {
    path: '/', view: 'home',
    title: 'Chi-tathon Kupwiwat | AI in Architecture at Chulalongkorn',
    description: 'Chi-tathon Kupwiwat is an Assistant Professor of Architecture at Chulalongkorn University researching AI in architecture, computational design, structural intelligence, optimization, machine learning and reinforcement learning.',
    about: ['AI in Architecture', 'Architecture', 'Computational Architecture', 'Computational Design', 'Structural Intelligence', 'Structural Optimization', 'Chulalongkorn University']
  },
  {
    path: '/research/', view: 'research', arc: 0,
    title: 'AI in Architecture & Computational Design Research | Chi-tathon Kupwiwat',
    description: 'Research in AI for architecture, computational design and structural intelligence, spanning representation learning, structural optimization, machine learning, graph AI and reinforcement learning at Chulalongkorn University.',
    about: ['AI in Architecture', 'Computational Architecture', 'Computational Design', 'Structural Intelligence', 'Structural Optimization', 'Machine Learning', 'Reinforcement Learning']
  },
  {
    path: researchPaths[0], view: 'research', arc: 0,
    title: 'AI in Architecture: Structural Systems & Sustainability | Chi-tathon Kupwiwat',
    description: 'Research connecting AI in architecture with structural systems, sustainability, material allocation, constructability, timber lattice shells, life-cycle assessment and structural optimization.',
    about: ['AI in Architecture', 'Architectural Structures', 'Structural Intelligence', 'Sustainable Structural Design', 'Structural Optimization', 'Life-Cycle Assessment', 'Lattice Shells']
  },
  {
    path: researchPaths[1], view: 'research', arc: 1,
    title: 'Generative Structural AI & Representation Learning | Chi-tathon Kupwiwat',
    description: 'Research on graph representation, machine learning, inverse design, generative models and structural representation for AI-assisted prediction and generation in architectural and structural design.',
    about: ['Generative Structural AI', 'Representation Learning', 'Graph Neural Networks', 'Inverse Design', 'Structural Representation', 'AI for Structural Design']
  },
  {
    path: researchPaths[2], view: 'research', arc: 2,
    title: 'Structural Reasoning & Building Intelligence | Chi-tathon Kupwiwat',
    description: 'Research on structural reasoning, graph-based building representation, explainable AI, language models, regulatory evaluation and data-driven decision support for architecture and buildings.',
    about: ['Structural Reasoning', 'Building Intelligence', 'Explainable AI', 'Large Language Models', 'Graph Representation', 'AI in Architecture']
  },
  {
    path: researchPaths[3], view: 'research', arc: 3,
    title: 'Reinforcement Learning for Structural Design & Optimization | Chi-tathon Kupwiwat',
    description: 'Research on reinforcement learning for architectural structural design and optimization, including multi-task RL, multi-agent RL, graph representation, robust optimization and policy transfer.',
    about: ['Reinforcement Learning', 'AI for Structural Design', 'Structural Optimization', 'Multi-task Reinforcement Learning', 'Multi-agent Reinforcement Learning', 'Graph AI']
  },
  {
    path: '/publications/', view: 'publications',
    title: 'Publications in AI, Structures & Computational Design | Chi-tathon Kupwiwat',
    description: 'Publications by Chi-tathon Kupwiwat in artificial intelligence, structural optimization, reinforcement learning, machine learning, computational design, building performance and architecture.',
    about: ['Academic Publications', 'Artificial Intelligence', 'Structural Optimization', 'Architecture', 'Machine Learning']
  },
  ...Object.entries(publicationPresets).map(([key, p]) => ({ path: p.path, view: 'publications', publicationPreset: key, title: p.title, description: p.description, about: p.about })),
  {
    path: '/graduate-research/', view: 'graduate-research',
    title: 'Graduate Supervision in AI & Computational Architecture | Chi-tathon Kupwiwat',
    description: 'Graduate research supervision with Chi-tathon Kupwiwat in AI for architecture, computational design, structural intelligence, structural optimization, machine learning and reinforcement learning at Chulalongkorn University.',
    about: ['Graduate Supervision', 'AI in Architecture', 'Computational Architecture', 'Structural Intelligence', 'Structural Optimization', 'Machine Learning', 'Reinforcement Learning', 'Chulalongkorn University']
  },
  {
    path: '/teaching/', view: 'teaching',
    title: 'Teaching AI, Computation & Structures in Architecture | Chi-tathon Kupwiwat',
    description: 'Courses by Chi-tathon Kupwiwat in AI for architecture, Python, machine learning, computational design, optimization, structural design, parametric methods and structural artifacts.',
    about: ['Teaching', 'AI in Architecture', 'Computational Architecture', 'Machine Learning', 'Optimization', 'Structural Design']
  },
  {
    path: coursePaths['2501684'], view: 'teaching', courseCode: '2501684',
    title: 'Machine Learning for Architectural Research | Chi-tathon Kupwiwat',
    description: 'Computer Technology for Architectural Research at Chulalongkorn University: Python programming, data science and machine learning for architectural research, simulation and computational design.',
    about: ['Machine Learning for Architecture', 'Python', 'Data Science', 'Architectural Research', 'Computational Design']
  },
  {
    path: coursePaths['2501370'], view: 'teaching', courseCode: '2501370',
    title: 'Optimization in Architecture & Structural Design | Chi-tathon Kupwiwat',
    description: 'Optimization in Architecture and Structural Design: objective functions, constraints, computational workflows, evolutionary methods and design applications at Chulalongkorn University.',
    about: ['Optimization in Architecture', 'Structural Design', 'Evolutionary Optimization', 'Computational Design']
  },
  {
    path: '/resources/', view: 'resources',
    title: 'Open Computational Tools for Architecture & Structures | Chi-tathon Kupwiwat',
    description: 'Open tools, FEM modules and computational notes for architectural structures, Rhino, Grasshopper, spatial analysis and architectural research.',
    about: ['Finite Element Method', 'Grasshopper', 'Rhino', 'Computational Design', 'Open Educational Resources']
  },
  {
    path: '/people/', view: 'people',
    title: 'Research Group | AI, Structures & Architecture | Chi-tathon Kupwiwat',
    description: 'Researchers and mentees working with Chi-tathon Kupwiwat on structural optimization, machine learning, building graphs, architectural heritage and data-driven structural design.',
    about: ['Research Group', 'Structural Optimization', 'Machine Learning', 'Architecture', 'Chulalongkorn University']
  },
  {
    path: '/news/', view: 'news',
    title: 'Research News & Updates | Chi-tathon Kupwiwat',
    description: 'Research news, conference presentations, invited talks, grants and academic updates from Chi-tathon Kupwiwat and collaborators.',
    about: ['Research News', 'Academic Conferences', 'Architecture', 'Artificial Intelligence']
  },
  {
    path: '/about/', view: 'about',
    title: 'About Chi-tathon Kupwiwat | Chulalongkorn University',
    description: 'Profile of Chi-tathon Kupwiwat, Assistant Professor in the Department of Architecture, Faculty of Architecture, Chulalongkorn University.',
    about: ['Chi-tathon Kupwiwat', 'Chulalongkorn University', 'Architecture', 'Structural Design', 'Artificial Intelligence']
  }
];

function esc(s = '') {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function canonical(routePath) {
  return routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
}

function publicationList(pubs) {
  return `<ol>${pubs.map(p => `<li><strong>${esc(p.title)}</strong><br>${esc(p.authors)}<br><em>${esc(p.venue)}</em>${p.doiUrl ? ` — <a href="${esc(p.doiUrl)}">DOI</a>` : ''}</li>`).join('')}</ol>`;
}

function navFallback() {
  return `<p><a href="/">Home</a> · <a href="/research/">Research</a> · <a href="/publications/">Publications</a> · <a href="/graduate-research/">Graduate Research</a> · <a href="/teaching/">Teaching</a> · <a href="/people/">People</a> · <a href="/resources/">Resources</a></p>`;
}

function fallbackFor(route) {
  const p = data.profile;
  let body = '';

  if (route.view === 'home') {
    body = `<h1>${esc(p.name)}</h1><p><strong>${esc(p.position)}</strong><br>${esc(p.department)}<br>${esc(p.institution)}</p><p>${esc(p.summary)}</p><h2>Research expertise</h2><ul>${route.about.map(x => `<li>${esc(x)}</li>`).join('')}</ul><h2>Research areas</h2><ul>${data.researchArcs.map((arc, i) => `<li><a href="${researchPaths[i]}">${esc(arc.title)}</a> — ${esc(arc.subtitle)}</li>`).join('')}</ul>`;
  } else if (route.view === 'research' && Number.isInteger(route.arc) && route.path !== '/research/') {
    const arc = data.researchArcs[route.arc];
    const related = data.publications.filter(pub => {
      const text = `${pub.title} ${(pub.topics || []).join(' ')}`.toLowerCase();
      if (route.arc === 0) return /lattice shell|life cycle|structural optimization|timber/.test(text);
      if (route.arc === 1) return /graph|inverse design|machine learning|cnn/.test(text);
      if (route.arc === 2) return /building|safety|graph/.test(text);
      return /reinforcement learning|multi-agent/.test(text);
    }).slice(0, 6);
    body = `<h1>${esc(arc.title)}</h1><p><strong>${esc(arc.subtitle)}</strong></p>${arc.overview.map(x => `<p>${esc(x)}</p>`).join('')}<h2>Key questions</h2><ul>${arc.questions.map(x => `<li>${esc(x)}</li>`).join('')}</ul><h2>Methods and skills</h2><ul>${arc.skills.map(x => `<li>${esc(x)}</li>`).join('')}</ul><h2>Selected related publications</h2>${publicationList(related)}`;
  } else if (route.view === 'research') {
    body = `<h1>AI in Architecture & Computational Design Research</h1><p>${esc(data.researchIntro)}</p><p><strong>Research hierarchy:</strong> AI in Architecture → Computational Design → Structural Intelligence → Optimization, Machine Learning and Reinforcement Learning.</p><h2>Research themes</h2><ul>${data.researchArcs.map((arc, i) => `<li><a href="${researchPaths[i]}"><strong>${esc(arc.title)}</strong></a><br>${esc(arc.overview[0])}</li>`).join('')}</ul><p><a href="/graduate-research/">Graduate supervision and research pathways</a></p>`;
  } else if (route.view === 'publications') {
    let pubs = data.publications;
    let heading = 'Publications in AI, Structures & Computational Design';
    if (route.publicationPreset) {
      const preset = publicationPresets[route.publicationPreset];
      pubs = pubs.filter(preset.match);
      heading = preset.heading;
    }
    body = `<h1>${esc(heading)}</h1><p>${esc(route.description)}</p>${publicationList(pubs)}`;
  } else if (route.view === 'graduate-research') {
    body = `<h1>Graduate Supervision in AI & Computational Architecture</h1><p>I supervise graduate research in artificial intelligence and computational methods for architecture, particularly projects involving structural design, optimization, machine learning, reinforcement learning and data-driven design at Chulalongkorn University. This page is for prospective graduate students, research collaborators and visiting researchers; it does not imply that a funded position is currently open.</p><h2>Who this research may fit</h2><ul><li>Architecture students interested in AI beyond image generation, including prediction, reasoning, optimization and decision support.</li><li>Students connecting architectural design with structural systems, computation, data and performance.</li><li>Researchers interested in Python, Grasshopper, machine learning, graph neural networks, reinforcement learning and optimization.</li></ul><h2>Research directions</h2><ul>${data.researchArcs.map((arc, i) => `<li><a href="${researchPaths[i]}"><strong>${esc(arc.title)}</strong></a> — ${esc(arc.subtitle)}</li>`).join('')}</ul><h2>Example research questions</h2><ul>${data.researchArcs.map((arc, i) => `<li><a href="${researchPaths[i]}">${esc((arc.questions || [])[0] || arc.title)}</a></li>`).join('')}</ul><h2>Relevant courses</h2><ul>${data.courses.filter(c => ['2501684','2501370','2501584'].includes(c.code)).map(c => `<li><strong>${esc(c.title)}</strong> — ${esc(c.description)}</li>`).join('')}</ul><h2>Current research community</h2><ul>${data.people.filter(x => !x.endYear).map(x => `<li><strong>${esc(x.name)}</strong>, ${esc(x.role)} — ${esc(x.topic)}</li>`).join('')}</ul><p>Research contact: <a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>`;
  } else if (route.view === 'teaching') {
    const courses = route.courseCode ? data.courses.filter(c => c.code === route.courseCode) : data.courses;
    if (route.courseCode && courses[0]) {
      const c = courses[0];
      body = `<h1>${esc(c.title)}</h1><p><strong>Course ${esc(c.code)} · ${esc(p.institution)}</strong></p><p>${esc(c.description)}</p><h2>Topics</h2><ul>${(c.topics || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul><h2>Course offerings</h2><ul>${(c.offerings || []).map(o => `<li>${esc(o.year)} — <a href="${esc(o.url)}">${esc(o.label || o.year)}</a></li>`).join('')}</ul>`;
    } else {
      body = `<h1>Teaching in Computational Architecture & Structures</h1><ul>${courses.map(c => `<li><strong>${esc(c.title)}</strong> (${esc(c.code)}) — ${esc(c.description)}</li>`).join('')}</ul>`;
    }
  } else if (route.view === 'resources') {
    body = `<h1>Open Computational Tools for Architecture & Structures</h1><ul>${data.resources.map(r => `<li><a href="${esc(r.url)}"><strong>${esc(r.title)}</strong></a> — ${esc(r.description)}</li>`).join('')}</ul>`;
  } else if (route.view === 'people') {
    body = `<h1>Research Group</h1><ul>${data.people.map(x => `<li><strong>${esc(x.name)}</strong>, ${esc(x.role)} — ${esc(x.topic)}</li>`).join('')}</ul>`;
  } else if (route.view === 'news') {
    body = `<h1>Research News & Updates</h1><ul>${[...data.news].sort((a,b) => b.date.localeCompare(a.date)).map(n => `<li><strong>${esc(n.date)} — ${esc(n.title)}</strong><br>${esc(n.summary)} <a href="${esc(n.url)}">${esc(n.source || 'Source')}</a></li>`).join('')}</ul>`;
  } else if (route.view === 'about') {
    body = `<h1>About ${esc(p.name)}</h1><p><strong>${esc(p.position)}</strong><br>${esc(p.department)}<br>${esc(p.institution)}</p><p>${esc(p.about)}</p><p>Email: <a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p><h2>External profiles</h2><ul>${p.links.map(l => `<li><a href="${esc(l.url)}">${esc(l.label)}</a></li>`).join('')}</ul>`;
  }

  return `<main class="seo-fallback">${navFallback()}${body}</main>`;
}

function staticJsonLd(route) {
  const p = data.profile;
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${canonical(route.path)}#webpage`;
  const knowsAbout = [...new Set([
    'AI in Architecture', 'Artificial Intelligence in Architecture', 'Computational Architecture', 'Architectural Design',
    'Architectural Structures', 'Computational Design', 'Structural Intelligence', 'Structural Optimization', 'Machine Learning', 'Reinforcement Learning', 'Graph Neural Networks', 'Generative Structural AI', 'Lattice Shells and Gridshells',
    ...data.researchArcs.flatMap(a => a.tags || [])
  ])];

  const graph = [
    {
      '@type': 'WebSite', '@id': websiteId, url: `${SITE_URL}/`, name: 'Chi-tathon Kupwiwat',
      description: 'Academic website on architecture, structural design, computational design and artificial intelligence.'
    },
    {
      '@type': 'Person', '@id': personId, name: p.name, alternateName: 'ชิตาทร คุปต์วิวัฒน์', url: `${SITE_URL}/`, jobTitle: p.position,
      description: p.about, email: p.email, knowsAbout,
      worksFor: { '@type': 'CollegeOrUniversity', name: p.institution, url: 'https://www.chula.ac.th/' },
      affiliation: { '@type': 'Organization', name: `${p.department}, ${p.institution}` },
      sameAs: p.links.map(x => x.url)
    }
  ];

  const page = {
    '@type': route.view === 'publications' ? 'CollectionPage' : (route.view === 'home' ? 'ProfilePage' : 'WebPage'),
    '@id': pageId,
    url: canonical(route.path),
    name: route.title,
    description: route.description,
    isPartOf: { '@id': websiteId },
    about: (route.about || []).map(name => ({ '@type': 'Thing', name })),
    author: { '@id': personId }
  };

  if (route.view === 'home') page.mainEntity = { '@id': personId };

  if (route.view === 'publications') {
    let pubs = data.publications;
    if (route.publicationPreset) pubs = pubs.filter(publicationPresets[route.publicationPreset].match);
    page.mainEntity = {
      '@type': 'ItemList',
      itemListElement: pubs.map((pub, i) => ({
        '@type': 'ListItem', position: i + 1,
        item: {
          '@type': 'ScholarlyArticle', headline: pub.title, author: pub.authors, datePublished: String(pub.year),
          isPartOf: pub.venue ? { '@type': 'Periodical', name: pub.venue } : undefined,
          url: pub.doiUrl || undefined,
          keywords: (pub.topics || []).join(', ')
        }
      }))
    };
  }

  if (route.view === 'teaching' && route.courseCode) {
    const c = data.courses.find(x => x.code === route.courseCode);
    if (c) page.mainEntity = {
      '@type': 'Course', name: c.title, courseCode: c.code, description: c.description, about: c.topics,
      provider: { '@type': 'CollegeOrUniversity', name: p.institution, url: 'https://www.chula.ac.th/' }
    };
  }

  if (route.view === 'graduate-research') {
    page.audience = { '@type': 'EducationalAudience', educationalRole: 'graduate student, researcher, collaborator' };
    page.about = [
      { '@type': 'Thing', name: 'Graduate Supervision' },
      { '@type': 'Thing', name: 'AI in Architecture' },
      { '@type': 'Thing', name: 'Computational Architecture' },
      { '@type': 'Thing', name: 'Structural Intelligence' },
      { '@type': 'Thing', name: 'Structural Optimization' },
      { '@type': 'Thing', name: 'Machine Learning' },
      { '@type': 'Thing', name: 'Reinforcement Learning' }
    ];
  }

  graph.push(page);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

function renderTemplate(route) {
  const activeView = route.view;
  const tabView = activeView === 'graduate-research' ? 'research' : activeView;
  const replacements = {
    '{{TITLE}}': esc(route.title),
    '{{DESCRIPTION}}': esc(route.description),
    '{{CANONICAL}}': canonical(route.path),
    '{{PAGE_JSONLD}}': staticJsonLd(route),
    '{{NOSCRIPT_CONTENT}}': fallbackFor(route),
    '{{HOME_TAB}}': tabView === 'home' ? 'is-active' : '',
    '{{RESEARCH_TAB}}': tabView === 'research' ? 'is-active' : '',
    '{{PUBLICATIONS_TAB}}': tabView === 'publications' ? 'is-active' : '',
    '{{TEACHING_TAB}}': tabView === 'teaching' ? 'is-active' : '',
    '{{RESOURCES_TAB}}': tabView === 'resources' ? 'is-active' : '',
    '{{PEOPLE_TAB}}': tabView === 'people' ? 'is-active' : '',
    '{{NEWS_TAB}}': tabView === 'news' ? 'is-active' : '',
    '{{ABOUT_TAB}}': tabView === 'about' ? 'is-active' : '',
    '{{HOME_ACTIVE}}': activeView === 'home' ? 'is-active' : '',
    '{{RESEARCH_ACTIVE}}': activeView === 'research' ? 'is-active' : '',
    '{{PUBLICATIONS_ACTIVE}}': activeView === 'publications' ? 'is-active' : '',
    '{{TEACHING_ACTIVE}}': activeView === 'teaching' ? 'is-active' : '',
    '{{RESOURCES_ACTIVE}}': activeView === 'resources' ? 'is-active' : '',
    '{{PEOPLE_ACTIVE}}': activeView === 'people' ? 'is-active' : '',
    '{{NEWS_ACTIVE}}': activeView === 'news' ? 'is-active' : '',
    '{{ABOUT_ACTIVE}}': activeView === 'about' ? 'is-active' : '',
    '{{GRADUATE_ACTIVE}}': activeView === 'graduate-research' ? 'is-active' : ''
  };

  let html = template;
  for (const [needle, value] of Object.entries(replacements)) html = html.split(needle).join(value);
  return html;
}

function outputPath(routePath) {
  if (routePath === '/') return path.join(ROOT, 'index.html');
  return path.join(ROOT, routePath.replace(/^\//, ''), 'index.html');
}

for (const route of routes) {
  const out = outputPath(route.path);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, renderTemplate(route));
}

const seoRouteMap = Object.fromEntries(routes.map(r => [r.path, {
  path: r.path,
  view: r.view,
  ...(Number.isInteger(r.arc) ? { arc: r.arc } : {}),
  ...(r.publicationPreset ? { publicationPreset: r.publicationPreset } : {}),
  ...(r.courseCode ? { courseCode: r.courseCode } : {}),
  title: r.title,
  description: r.description
}]));
fs.writeFileSync(path.join(ROOT, 'seo-routes.js'), `window.SEO_ROUTES = ${JSON.stringify(seoRouteMap, null, 2)};\n`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url>\n    <loc>${canonical(r.path)}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);

const robots = `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots);

const llms = `# Chi-tathon Kupwiwat

> Chi-tathon Kupwiwat is an Assistant Professor of Architecture at Chulalongkorn University. His research is positioned broadly in AI in Architecture and Computational Architecture, with particular expertise in structural intelligence, structural optimization, machine learning, reinforcement learning, graph-based representation and AI-assisted structural design.

## Research hierarchy
AI in Architecture → Computational Design → Structural Intelligence → Structural Optimization / Machine Learning / Reinforcement Learning

## Primary research pages
${researchPaths.map((p, i) => `- [${data.researchArcs[i].title}](${SITE_URL}${p}): ${data.researchArcs[i].overview[0]}`).join('\n')}

## Publications
- [AI in Architecture](${SITE_URL}/publications/ai-in-architecture/)
- [All publications](${SITE_URL}/publications/)
- [Reinforcement learning](${SITE_URL}/publications/reinforcement-learning/)
- [Structural optimization](${SITE_URL}/publications/structural-optimization/)
- [Lattice shells and gridshells](${SITE_URL}/publications/lattice-shells-gridshells/)
- [Machine learning in architecture](${SITE_URL}/publications/machine-learning-architecture/)

## Graduate supervision and teaching
Chi-tathon Kupwiwat supervises graduate research in artificial intelligence and computational methods for architecture, particularly structural design, optimization, machine learning, reinforcement learning and data-driven design.
- [Graduate supervision in AI & computational architecture](${SITE_URL}/graduate-research/)
- [Teaching](${SITE_URL}/teaching/)
- [Machine learning for architectural research](${SITE_URL}${coursePaths['2501684']})
- [Optimization in architecture & structural design](${SITE_URL}${coursePaths['2501370']})

## Other
- [People](${SITE_URL}/people/)
- [Open computational resources](${SITE_URL}/resources/)
- [News](${SITE_URL}/news/)
- [About](${SITE_URL}/about/)
- [Google Scholar](${data.publicationsFullUrl})

The authoritative source for current biographical, research, publication, teaching, supervision, people and news data is this website and its linked primary sources.
`;
fs.writeFileSync(path.join(ROOT, 'llms.txt'), llms);

const llmsFull = `# Chi-tathon Kupwiwat — Research and Academic Profile

## Profile
${data.profile.name}
${data.profile.position}
${data.profile.department}
${data.profile.institution}

${data.profile.about}

## Positioning
Broad field: AI in Architecture and Computational Architecture.
Specialization: Structural Intelligence, AI for Structural Design, Structural Optimization, Machine Learning and Reinforcement Learning.

## Graduate supervision
Chi-tathon Kupwiwat supervises graduate research in artificial intelligence and computational methods for architecture, particularly projects involving structural design, optimization, machine learning, reinforcement learning and data-driven design at Chulalongkorn University. The graduate-research page describes current themes and pathways and does not imply that a funded position is currently open.
URL: ${SITE_URL}/graduate-research/

## Research themes
${data.researchArcs.map((a, i) => `### ${a.title}
URL: ${SITE_URL}${researchPaths[i]}
${a.overview.join('\n\n')}

Key questions:
${a.questions.map(q => `- ${q}`).join('\n')}

Methods and skills:
${a.skills.map(s => `- ${s}`).join('\n')}`).join('\n\n')}

## Publications
${data.publications.map(p => `- ${p.year}. ${p.title}. ${p.authors}. ${p.venue}.${p.doiUrl ? ` ${p.doiUrl}` : ''}`).join('\n')}

## Courses
${data.courses.map(c => `- ${c.code}: ${c.title}. ${c.description}`).join('\n')}

## Research community
${data.people.map(x => `- ${x.name}, ${x.role}: ${x.topic}`).join('\n')}
`;
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), llmsFull);

const readme = [
  '# CK Academic Website — SEO / AI Search Revision',
  '',
  'This revision preserves the existing visual language and the single `data.js` content source while adding semantic URLs, page-specific metadata, structured data, crawlable links, sitemap coverage, OpenAI search crawler access, and AI-readable summaries.',
  '',
  '## Normal content updates',
  'Continue editing `data.js` as before. The live JavaScript interface reads that file directly.',
  '',
  '## When to rerun the SEO builder',
  'Run:',
  '',
  '```bash',
  'node build_seo.js',
  '```',
  '',
  'Run the builder when you change a research arc title/description, add a major new SEO landing topic, substantially change course identity, or want the no-JavaScript fallback / sitemap / llms files regenerated. Ordinary news, people, publication and wording updates still appear in the live site from `data.js`.',
  '',
  '## Deployment',
  'Copy this revision over the code files in the existing site repository. Keep the existing `assets/` folder; it was not included in the uploaded files used for this revision.',
  '',
  '## Main SEO routes',
  ...routes.map(r => `- ${r.path} — ${r.title}`),
  ''
].join('\n');
fs.writeFileSync(path.join(ROOT, 'README_SEO.md'), readme);

console.log(`Generated ${routes.length} indexable pages, sitemap.xml, robots.txt, llms.txt and llms-full.txt.`);
