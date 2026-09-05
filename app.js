(() => {
  const data = window.SITE_DATA;
  if (!data) {
    console.error("SITE_DATA is missing.");
    return;
  }

  const SITE_URL = "https://ckupwiwat.com";

  const RESEARCH_PATHS = [
    "/research/sustainable-structural-design/",
    "/research/generative-structural-ai/",
    "/research/structural-reasoning-llm/",
    "/research/reinforcement-learning-structural-optimization/"
  ];

  const COURSE_PATHS = {
    "2501684": "/teaching/machine-learning-architectural-research/",
    "2501370": "/teaching/optimization-architecture-structural-design/"
  };

  const FALLBACK_ROUTES = {
    "/": { view: "home" },
    "/research/": { view: "research", arc: 0 },
    [RESEARCH_PATHS[0]]: { view: "research", arc: 0 },
    [RESEARCH_PATHS[1]]: { view: "research", arc: 1 },
    [RESEARCH_PATHS[2]]: { view: "research", arc: 2 },
    [RESEARCH_PATHS[3]]: { view: "research", arc: 3 },
    "/publications/": { view: "publications" },
    "/publications/reinforcement-learning/": { view: "publications", publicationPreset: "reinforcement-learning" },
    "/publications/structural-optimization/": { view: "publications", publicationPreset: "structural-optimization" },
    "/publications/lattice-shells-gridshells/": { view: "publications", publicationPreset: "lattice-shells-gridshells" },
    "/publications/machine-learning-architecture/": { view: "publications", publicationPreset: "machine-learning-architecture" },
    "/graduate-research/": { view: "graduate-research" },
    "/teaching/": { view: "teaching" },
    [COURSE_PATHS["2501684"]]: { view: "teaching", courseCode: "2501684" },
    [COURSE_PATHS["2501370"]]: { view: "teaching", courseCode: "2501370" },
    "/resources/": { view: "resources" },
    "/people/": { view: "people" },
    "/news/": { view: "news" },
    "/about/": { view: "about" }
  };

  const ROUTES = window.SEO_ROUTES || FALLBACK_ROUTES;

  const VIEW_PATHS = {
    home: "/",
    research: "/research/",
    publications: "/publications/",
    teaching: "/teaching/",
    resources: "/resources/",
    people: "/people/",
    news: "/news/",
    about: "/about/",
    "graduate-research": "/graduate-research/"
  };

  const PUBLICATION_PRESETS = {
    "reinforcement-learning": {
      label: "Reinforcement Learning",
      title: "Reinforcement Learning Publications",
      match: (p) => /reinforcement learning/i.test(`${p.title} ${(p.topics || []).join(" ")}`)
    },
    "structural-optimization": {
      label: "Structural Optimization",
      title: "Structural Optimization Research",
      match: (p) => /structural optimization|topology optimization|geometry optimization|multi-objective optimization|bracing optimization/i.test(
        `${p.title} ${(p.topics || []).join(" ")}`
      )
    },
    "lattice-shells-gridshells": {
      label: "Lattice / Grid Shells",
      title: "AI for Lattice Shell & Gridshell Optimization",
      match: (p) => /lattice shell|latticed shell|grid shell|gridshell/i.test(`${p.title} ${(p.topics || []).join(" ")}`)
    },
    "machine-learning-architecture": {
      label: "Machine Learning + Architecture",
      title: "Machine Learning in Architecture Research",
      match: (p) => {
        const text = `${p.title} ${(p.topics || []).join(" ")}`;
        return /machine learning|computer vision|cnn|graph neural network/i.test(text) &&
          /architecture|architectural|structural|building|shell|frame|design/i.test(text);
      }
    }
  };

  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => [...r.querySelectorAll(s)];

  const esc = (v = "") =>
    String(v)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const initials = (name = "") =>
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase() || "")
      .join("");

  const dateLabel = (dateString) => {
    const [y, m, d] = dateString.split("-").map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    }).format(date);
  };

  const normalizePath = (pathname = "/") => {
    let path = pathname.replace(/\/index\.html$/i, "/");
    if (!path.startsWith("/")) path = `/${path}`;
    if (path !== "/" && !path.endsWith("/")) path += "/";
    return path;
  };

  let currentView = "home";
  let currentArc = 0;
  let currentCourse = 0;
  let currentCourseCode = null;
  let currentPublicationPreset = null;

  function fillProfile() {
    const p = data.profile;

    qsa("[data-site-name]").forEach((el) => (el.textContent = p.name));
    qs("[data-profile-kicker]")?.replaceChildren(document.createTextNode(p.kicker));
    qs("[data-profile-name]")?.replaceChildren(document.createTextNode(p.name));
    qsa("[data-profile-position]").forEach((el) => (el.textContent = p.position));
    qsa("[data-profile-department]").forEach((el) => (el.textContent = p.department));
    qsa("[data-profile-institution]").forEach((el) => (el.textContent = p.institution));
    if (qs("[data-profile-summary]")) qs("[data-profile-summary]").textContent = p.summary;
    if (qs("[data-profile-about]")) qs("[data-profile-about]").textContent = p.about;

    const email = qs("[data-profile-email]");
    if (email) {
      email.textContent = p.email;
      email.href = `mailto:${p.email}`;
    }

    qsa("[data-profile-main-link]").forEach((el) => (el.href = p.mainUrl));

    const visibleLinks = p.links.slice(0, 5);
    if (qs("#header-social-links")) {
      qs("#header-social-links").innerHTML = visibleLinks
        .map((link) => `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)}</a>`)
        .join("");
    }

    if (qs("#about-links")) {
      qs("#about-links").innerHTML = p.links
        .map((link) => `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)} ↗</a>`)
        .join("");
    }
  }

  function updateHead(route) {
    if (!route) return;
    const canonicalPath = route.path || normalizePath(location.pathname);
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;

    if (route.title) document.title = route.title;
    if (route.description) {
      const description = qs('meta[name="description"]');
      if (description) description.setAttribute("content", route.description);
      const ogDescription = qs('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute("content", route.description);
      const twitterDescription = qs('meta[name="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute("content", route.description);
    }
    if (route.title) {
      const ogTitle = qs('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", route.title);
      const twitterTitle = qs('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", route.title);
    }
    const canonical = qs('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", canonicalUrl);
    const ogUrl = qs('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);
  }

  function switchView(name, options = {}) {
    if (!qs(`[data-view-panel="${name}"]`)) name = "home";
    currentView = name;

    qsa("[data-view-panel]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.viewPanel === name);
    });

    qsa(".tab-item").forEach((item) => {
      const active = item.dataset.view === name;
      item.classList.toggle("is-active", active);
      if (active && options.scrollTab !== false) {
        item.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });

    if (options.focus !== false) {
      requestAnimationFrame(() => qs("#stage")?.focus({ preventScroll: true }));
    }
  }

  function routeForPath(pathname = location.pathname) {
    const path = normalizePath(pathname);
    return { path, ...(ROUTES[path] || { view: "home" }) };
  }

  function applyRoute(pathname = location.pathname, options = {}) {
    const route = routeForPath(pathname);
    updateHead(route);
    currentPublicationPreset = route.publicationPreset || null;
    currentCourseCode = route.courseCode || null;
    if (Number.isInteger(route.arc)) currentArc = route.arc;

    switchView(route.view, { focus: options.focus, scrollTab: options.scrollTab });

    if (route.view === "research") {
      renderResearchSelectors();
      renderResearchDetail();
    }

    if (route.view === "publications") {
      const topic = qs("#publication-topic-filter");
      const year = qs("#publication-year-filter");
      if (topic) topic.value = "all";
      if (year) year.value = "all";
      renderPublications();
      if (qs("#publications-title")) {
        qs("#publications-title").textContent = currentPublicationPreset
          ? PUBLICATION_PRESETS[currentPublicationPreset].title
          : "Publications";
      }
    }

    if (route.view === "teaching") {
      const year = qs("#course-year-filter");
      if (year) year.value = "all";
      renderCourseSelectors();
      renderCourseDetail();
    }

    if (route.view === "graduate-research") renderGraduateResearch();
  }

  function navigateTo(path) {
    const normalized = normalizePath(path);
    history.pushState(null, "", normalized);
    applyRoute(normalized);
  }

  function setupRouting() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-internal-route]");
      if (!link) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === "_blank") return;
      const url = new URL(link.href, location.origin);
      if (url.origin !== location.origin) return;

      // Courses that are not dedicated SEO landing pages retain the original
      // in-page selector behavior while the two target courses have real URLs.
      if (link.hasAttribute("data-course-index") && normalizePath(url.pathname) === "/teaching/") {
        event.preventDefault();
        currentCourse = Number(link.dataset.courseIndex);
        currentCourseCode = null;
        history.pushState(null, "", "/teaching/");
        updateHead(routeForPath("/teaching/"));
        switchView("teaching");
        renderCourseSelectors();
        renderCourseDetail();
        return;
      }

      event.preventDefault();
      navigateTo(url.pathname);
    });

    qsa("button[data-view]").forEach((button) => {
      button.addEventListener("click", () => navigateTo(VIEW_PATHS[button.dataset.view] || "/"));
    });

    window.addEventListener("popstate", () => applyRoute(location.pathname, { focus: false, scrollTab: false }));

    // Backward-compatible hash URLs from the previous site version.
    if (location.hash) {
      const legacyView = location.hash.replace("#", "");
      if (VIEW_PATHS[legacyView]) {
        history.replaceState(null, "", VIEW_PATHS[legacyView]);
      }
    }
  }

  function renderResearchSelectors() {
    if (qs("[data-research-intro]")) qs("[data-research-intro]").textContent = data.researchIntro;

    const rail = qs("#arc-selector");
    if (!rail) return;

    rail.innerHTML = data.researchArcs
      .map(
        (arc, i) => `
          <a class="selector-item ${i === currentArc ? "is-active" : ""}"
             href="${RESEARCH_PATHS[i] || "/research/"}"
             data-internal-route data-arc-index="${i}">
            <span class="selector-index">${esc(arc.number)}</span>
            <span>
              <span class="selector-title">${esc(arc.icon || "")} ${esc(arc.title)}</span>
              <span class="selector-subtitle">${esc(arc.subtitle)}</span>
            </span>
          </a>
        `
      )
      .join("");
  }

  function renderResearchDetail() {
    const target = qs("#arc-detail");
    if (!target) return;

    const arc = data.researchArcs[currentArc] || data.researchArcs[0];
    const image = arc.image
      ? `<img src="/${esc(arc.image)}" alt="${esc(arc.imageAlt || arc.title)}" loading="eager" />`
      : `
        <div class="detail-placeholder">
          <span class="big-icon">${esc(arc.icon || "◌")}</span>
          <strong>Add your research figure</strong>
          <p>Put an image in <code>assets/images/</code> and set its path in <code>data.js</code>.</p>
        </div>
      `;

    target.innerHTML = `
      <div class="detail-grid">
        <div class="detail-visual">${image}</div>
        <div class="detail-content">
          <div class="course-code">ARC ${esc(arc.number)}</div>
          <h3>${esc(arc.title)}</h3>
          <p class="detail-subtitle">${esc(arc.subtitle)}</p>
          <div class="detail-section">
            <h4>What we explore</h4>
            ${arc.overview.map((p) => `<p>${esc(p)}</p>`).join("")}
          </div>
          <div class="detail-section">
            <h4>Key questions</h4>
            <ul>${arc.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
          </div>
          <div class="detail-section">
            <h4>Recommended skills</h4>
            <ul>${arc.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
          </div>
          <div class="tag-row">
            ${(arc.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
          </div>
          ${arc.url ? `<a class="detail-link" href="${esc(arc.url)}" target="_blank" rel="noopener">Extended research page ↗</a>` : ""}
        </div>
      </div>
    `;

    target.scrollTop = 0;
  }

  function buildPublicationFilters() {
    const topicSelect = qs("#publication-topic-filter");
    const yearSelect = qs("#publication-year-filter");
    if (!topicSelect || !yearSelect) return;

    const topics = [...new Set(data.publications.flatMap((p) => p.topics || []))].sort();
    const years = [...new Set(data.publications.map((p) => p.year))].sort((a, b) => b - a);

    topics.forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      topicSelect.append(option);
    });

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = String(year);
      option.textContent = year;
      yearSelect.append(option);
    });

    const clearPresetAndRender = () => {
      currentPublicationPreset = null;
      if (normalizePath(location.pathname) !== "/publications/") history.replaceState(null, "", "/publications/");
      updateHead(routeForPath("/publications/"));
      if (qs("#publications-title")) qs("#publications-title").textContent = "Publications";
      renderPublications();
    };

    topicSelect.addEventListener("change", clearPresetAndRender);
    yearSelect.addEventListener("change", clearPresetAndRender);
  }

  function renderPublications() {
    const topicSelect = qs("#publication-topic-filter");
    const yearSelect = qs("#publication-year-filter");
    const list = qs("#publication-list");
    if (!topicSelect || !yearSelect || !list) return;

    const topic = topicSelect.value;
    const year = yearSelect.value;
    const preset = currentPublicationPreset ? PUBLICATION_PRESETS[currentPublicationPreset] : null;

    const pubs = [...data.publications]
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
      .filter((p) => {
        const presetMatch = !preset || preset.match(p);
        const topicMatch = topic === "all" || (p.topics || []).includes(topic);
        const yearMatch = year === "all" || String(p.year) === year;
        return presetMatch && topicMatch && yearMatch;
      });

    if (!pubs.length) {
      list.innerHTML = `<div class="card-text">No publications match this filter.</div>`;
      return;
    }

    list.innerHTML = pubs
      .map(
        (p) => `
          <article class="publication-item" itemscope itemtype="https://schema.org/ScholarlyArticle">
            <div class="publication-year">${esc(p.year)}</div>
            <div>
              <div class="publication-title" itemprop="headline">${esc(p.title)}</div>
              <p class="publication-meta" itemprop="author">${esc(p.authors)}</p>
              <p class="publication-meta">${esc(p.venue)}</p>
              <p class="publication-meta">${(p.topics || []).map(esc).join(" · ")}</p>
            </div>
            <div class="publication-actions">
              ${p.doiUrl && p.doiUrl !== "#" ? `<a href="${esc(p.doiUrl)}" target="_blank" rel="noopener" itemprop="url">DOI ↗</a>` : ""}
              ${p.detailUrl ? `<a href="${esc(p.detailUrl)}" target="_blank" rel="noopener">Details ↗</a>` : ""}
            </div>
          </article>
        `
      )
      .join("");

    list.scrollTop = 0;
  }

  function buildCourseFilters() {
    const select = qs("#course-year-filter");
    if (!select) return;

    const years = [...new Set(data.courses.flatMap((c) => (c.offerings || []).map((o) => o.year)))].sort(
      (a, b) => b - a
    );

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = String(year);
      option.textContent = year;
      select.append(option);
    });

    select.addEventListener("change", () => {
      currentCourse = 0;
      currentCourseCode = null;
      if (normalizePath(location.pathname) !== "/teaching/") history.replaceState(null, "", "/teaching/");
      updateHead(routeForPath("/teaching/"));
      renderCourseSelectors();
      renderCourseDetail();
    });
  }

  function getVisibleCourses() {
    const select = qs("#course-year-filter");
    const selected = select ? select.value : "all";

    return data.courses
      .map((course) => {
        const visibleOfferings = (course.offerings || []).filter(
          (o) => selected === "all" || String(o.year) === selected
        );
        return { ...course, visibleOfferings };
      })
      .filter((course) => course.visibleOfferings.length);
  }

  function renderCourseSelectors() {
    const rail = qs("#course-selector");
    if (!rail) return;

    const courses = getVisibleCourses();
    if (currentCourseCode) {
      const index = courses.findIndex((course) => course.code === currentCourseCode);
      currentCourse = index >= 0 ? index : 0;
    }
    if (currentCourse >= courses.length) currentCourse = 0;

    rail.innerHTML = courses
      .map((course, i) => {
        const href = COURSE_PATHS[course.code] || "/teaching/";
        return `
          <a class="selector-item ${i === currentCourse ? "is-active" : ""}"
             href="${href}" data-internal-route data-course-index="${i}">
            <span class="selector-index">${esc(course.code.slice(-2))}</span>
            <span>
              <span class="selector-title">${esc(course.title)}</span>
              <span class="selector-subtitle">${esc(course.code)} · ${course.visibleOfferings.map((o) => o.year).join(", ")}</span>
            </span>
          </a>
        `;
      })
      .join("");
  }

  function renderCourseDetail() {
    const target = qs("#course-detail");
    if (!target) return;

    const courses = getVisibleCourses();
    const course = courses[currentCourse];

    if (!course) {
      target.innerHTML = `<p class="card-text">No course offerings match this year.</p>`;
      return;
    }

    target.innerHTML = `
      <div class="course-code">${esc(course.code)}</div>
      <h3 class="course-detail-title">${esc(course.title)}</h3>
      <p class="course-description">${esc(course.description)}</p>
      <div class="tag-row">
        ${(course.topics || []).map((tag) => `<span class="tag">${esc(tag)}</span>`).join("")}
      </div>
      <div class="detail-section">
        <h4>Yearly offerings</h4>
        <div class="course-offerings">
          ${course.visibleOfferings
            .sort((a, b) => b.year - a.year)
            .map(
              (o) => `
                <a class="course-offering" href="${esc(o.url)}" target="_blank" rel="noopener">
                  <span>
                    <strong>${esc(o.label || o.year)}</strong>
                    <span class="offering-meta">${esc(o.source || "Course page")}</span>
                  </span>
                  <span>Open ↗</span>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    `;

    target.scrollTop = 0;
  }

  function renderResources() {
    const grid = qs("#resource-grid");
    if (!grid) return;
    grid.innerHTML = data.resources
      .map(
        (r) => `
          <article class="resource-card">
            <div class="card-meta">${esc(r.type)}</div>
            <h3>${esc(r.title)}</h3>
            <p class="card-text">${esc(r.description)}</p>
            <a class="card-link" href="${esc(r.url)}" target="_blank" rel="noopener">Open on ${esc(r.source || "web")} ↗</a>
          </article>
        `
      )
      .join("");
  }

  function buildPeopleFilters() {
    const select = qs("#people-year-filter");
    if (!select) return;

    const years = new Set();
    data.people.forEach((person) => {
      if (person.startYear) years.add(person.startYear);
      if (person.endYear) years.add(person.endYear);
    });

    [...years].sort((a, b) => b - a).forEach((year) => {
      const option = document.createElement("option");
      option.value = String(year);
      option.textContent = year;
      select.append(option);
    });

    select.addEventListener("change", renderPeople);
  }

  function renderPeople() {
    const select = qs("#people-year-filter");
    const grid = qs("#people-grid");
    if (!select || !grid) return;

    const filter = select.value;
    const people = data.people.filter((person) => {
      if (filter === "all") return true;
      if (filter === "current") return !person.endYear;
      const year = Number(filter);
      const end = person.endYear ?? 9999;
      return person.startYear <= year && end >= year;
    });

    if (!people.length) {
      grid.innerHTML = `<p class="card-text">No people match this year.</p>`;
      return;
    }

    grid.innerHTML = people
      .map((person) => {
        const years = person.endYear ? `${person.startYear}–${person.endYear}` : `${person.startYear}–`;
        const links = (person.links || [])
          .map((link) => `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)} ↗</a>`)
          .join("");

        return `
          <article class="person-card">
            <div class="person-avatar">${esc(initials(person.name))}</div>
            <div>
              <div class="person-name">${esc(person.name)}</div>
              <p class="person-meta">${esc(person.role)} · ${esc(years)}</p>
              <p class="person-topic">${esc(person.topic)}</p>
              <div class="person-links">${links}</div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderNews() {
    const list = qs("#news-list");
    if (!list) return;
    const items = [...data.news].sort((a, b) => b.date.localeCompare(a.date));

    list.innerHTML = items
      .map(
        (item) => `
          <article class="news-card">
            <div class="news-date">${esc(dateLabel(item.date))}</div>
            <div class="card-meta">${esc(item.type)}</div>
            <h3>${esc(item.title)}</h3>
            <p class="card-text">${esc(item.summary)}</p>
            <div class="news-source">
              <a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.source || "Open")} ↗</a>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderGraduateResearch() {
    const target = qs("#graduate-research-content");
    if (!target) return;

    const focusAreas = data.researchArcs.map((arc, i) => `
      <li><a href="${RESEARCH_PATHS[i]}" data-internal-route><strong>${esc(arc.title)}</strong></a> — ${esc(arc.subtitle)}</li>
    `).join("");

    const relevantCourses = data.courses
      .filter((c) => ["2501684", "2501370", "2501584"].includes(c.code))
      .map((c) => `<li><strong>${esc(c.title)}</strong> — ${esc(c.description)}</li>`)
      .join("");

    const currentPeople = data.people
      .filter((p) => !p.endYear)
      .map((p) => `<li><strong>${esc(p.name)}</strong>, ${esc(p.role)} — ${esc(p.topic)}</li>`)
      .join("");

    target.innerHTML = `
      <div class="detail-content">
        <p class="course-description">
          This page is intended for prospective graduate students, research collaborators and visiting researchers interested in architecture, structural systems, computation and artificial intelligence at Chulalongkorn University. It summarizes the research directions, methods and learning environment represented across this website; it does not imply that a funded position is currently open.
        </p>

        <div class="detail-section">
          <h4>Research directions</h4>
          <ul>${focusAreas}</ul>
        </div>

        <div class="detail-section">
          <h4>Relevant learning pathways</h4>
          <ul>${relevantCourses}</ul>
        </div>

        <div class="detail-section">
          <h4>Current research community</h4>
          <ul>${currentPeople}</ul>
        </div>

        <div class="tag-row">
          <span class="tag">Architectural Structures</span>
          <span class="tag">Computational Design</span>
          <span class="tag">Structural Optimization</span>
          <span class="tag">Machine Learning</span>
          <span class="tag">Reinforcement Learning</span>
          <span class="tag">Graph AI</span>
        </div>

        <a class="detail-link" href="mailto:${esc(data.profile.email)}">Research contact ↗</a>
      </div>
    `;
  }

  function structuredData() {
    const p = data.profile;
    const knowsAbout = [
      ...new Set([
        "Architectural Structures",
        "Computational Design",
        "Structural Optimization",
        "Artificial Intelligence in Architecture",
        "Machine Learning",
        "Reinforcement Learning",
        "Graph Neural Networks",
        "Generative Structural AI",
        "Lattice Shells and Gridshells",
        "Life-Cycle Assessment",
        ...data.researchArcs.flatMap((arc) => arc.tags || [])
      ])
    ];

    const profileScript = qs("#profile-jsonld");
    if (profileScript) {
      profileScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: `${SITE_URL}/`,
        name: `${p.name} — Architecture, Structural Design & Artificial Intelligence`,
        mainEntity: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: p.name,
          url: `${SITE_URL}/`,
          jobTitle: p.position,
          email: p.email,
          description: p.about,
          knowsAbout,
          worksFor: {
            "@type": "CollegeOrUniversity",
            name: p.institution,
            url: "https://www.chula.ac.th/"
          },
          affiliation: {
            "@type": "Organization",
            name: `${p.department}, ${p.institution}`
          },
          sameAs: p.links.map((x) => x.url)
        }
      });
    }

    const courseScript = qs("#course-jsonld");
    if (courseScript) {
      const courses = data.courses.flatMap((course) =>
        (course.offerings || []).map((offering) => ({
          "@type": "Course",
          name: `${course.title} (${offering.year})`,
          courseCode: course.code,
          description: course.description,
          about: course.topics,
          provider: {
            "@type": "CollegeOrUniversity",
            name: p.institution,
            url: "https://www.chula.ac.th/"
          },
          url: offering.url
        }))
      );

      courseScript.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": courses });
    }
  }

  function init() {
    fillProfile();
    if (qs("[data-publication-full-link]")) qs("[data-publication-full-link]").href = data.publicationsFullUrl;

    renderResearchSelectors();
    renderResearchDetail();

    buildPublicationFilters();
    renderPublications();

    buildCourseFilters();
    renderCourseSelectors();
    renderCourseDetail();

    renderResources();
    buildPeopleFilters();
    renderPeople();
    renderNews();
    renderGraduateResearch();

    setupRouting();
    applyRoute(location.pathname, { focus: false, scrollTab: false });
    structuredData();
  }

  init();
})();
