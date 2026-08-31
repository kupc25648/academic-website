(() => {
  const data = window.SITE_DATA;
  if (!data) {
    console.error("SITE_DATA is missing.");
    return;
  }

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

  let currentView = "home";
  let currentArc = 0;
  let currentCourse = 0;

  function fillProfile() {
    const p = data.profile;

    qsa("[data-site-name]").forEach((el) => (el.textContent = p.name));
    qs("[data-profile-kicker]").textContent = p.kicker;
    qs("[data-profile-name]").textContent = p.name;
    qsa("[data-profile-position]").forEach((el) => (el.textContent = p.position));
    qsa("[data-profile-department]").forEach((el) => (el.textContent = p.department));
    qsa("[data-profile-institution]").forEach((el) => (el.textContent = p.institution));
    qs("[data-profile-summary]").textContent = p.summary;
    qs("[data-profile-about]").textContent = p.about;

    const email = qs("[data-profile-email]");
    email.textContent = p.email;
    email.href = `mailto:${p.email}`;

    qsa("[data-profile-main-link]").forEach((el) => (el.href = p.mainUrl));

    const visibleLinks = p.links.slice(0, 5);
    qs("#header-social-links").innerHTML = visibleLinks
      .map((link) => `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)}</a>`)
      .join("");

    qs("#about-links").innerHTML = p.links
      .map((link) => `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)} ↗</a>`)
      .join("");
  }

  function switchView(name, options = {}) {
    if (!qs(`[data-view-panel="${name}"]`)) name = "home";
    currentView = name;

    qsa("[data-view-panel]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.viewPanel === name);
    });

    qsa(".tab-item").forEach((button) => {
      const active = button.dataset.view === name;
      button.classList.toggle("is-active", active);

      if (active) {
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    });

    if (!options.skipHash) {
      history.replaceState(null, "", `#${name}`);
    }

    if (options.focus !== false) {
      requestAnimationFrame(() => qs("#stage").focus({ preventScroll: true }));
    }
  }

  function setupRouting() {
    qsa("[data-view]").forEach((button) => {
      button.addEventListener("click", () => switchView(button.dataset.view));
    });

    qsa("[data-route]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        switchView(link.dataset.route);
      });
    });

    const initial = location.hash.replace("#", "") || "home";
    switchView(initial, { skipHash: true, focus: false });

    window.addEventListener("hashchange", () => {
      const name = location.hash.replace("#", "") || "home";
      switchView(name, { skipHash: true, focus: false });
    });
  }

  function renderResearchSelectors() {
    qs("[data-research-intro]").textContent = data.researchIntro;

    const rail = qs("#arc-selector");
    rail.innerHTML = data.researchArcs
      .map(
        (arc, i) => `
          <button class="selector-item ${i === currentArc ? "is-active" : ""}" data-arc-index="${i}" type="button">
            <span class="selector-index">${esc(arc.number)}</span>
            <span>
              <span class="selector-title">${esc(arc.icon || "")} ${esc(arc.title)}</span>
              <span class="selector-subtitle">${esc(arc.subtitle)}</span>
            </span>
          </button>
        `
      )
      .join("");

    qsa("[data-arc-index]", rail).forEach((button) => {
      button.addEventListener("click", () => {
        currentArc = Number(button.dataset.arcIndex);
        renderResearchSelectors();
        renderResearchDetail();
      });
    });
  }

  function renderResearchDetail() {
    const arc = data.researchArcs[currentArc] || data.researchArcs[0];

    const image = arc.image
      ? `<img src="${esc(arc.image)}" alt="${esc(arc.imageAlt || arc.title)}" />`
      : `
        <div class="detail-placeholder">
          <span class="big-icon">${esc(arc.icon || "◌")}</span>
          <strong>Add your research figure</strong>
          <p>Put an image in <code>assets/images/</code> and set its path in <code>data.js</code>.</p>
        </div>
      `;

    qs("#arc-detail").innerHTML = `
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

          ${
            arc.url
              ? `<a class="detail-link" href="${esc(arc.url)}" target="_blank" rel="noopener">Extended research page ↗</a>`
              : ""
          }
        </div>
      </div>
    `;

    qs("#arc-detail").scrollTop = 0;
  }

  function buildPublicationFilters() {
    const topicSelect = qs("#publication-topic-filter");
    const yearSelect = qs("#publication-year-filter");

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

    topicSelect.addEventListener("change", renderPublications);
    yearSelect.addEventListener("change", renderPublications);
  }

  function renderPublications() {
    const topic = qs("#publication-topic-filter").value;
    const year = qs("#publication-year-filter").value;

    const pubs = [...data.publications]
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
      .filter((p) => {
        const topicMatch = topic === "all" || (p.topics || []).includes(topic);
        const yearMatch = year === "all" || String(p.year) === year;
        return topicMatch && yearMatch;
      });

    const list = qs("#publication-list");

    if (!pubs.length) {
      list.innerHTML = `<div class="card-text">No publications match this filter.</div>`;
      return;
    }

    list.innerHTML = pubs
      .map(
        (p) => `
          <article class="publication-item">
            <div class="publication-year">${esc(p.year)}</div>
            <div>
              <div class="publication-title">${esc(p.title)}</div>
              <p class="publication-meta">${esc(p.authors)}</p>
              <p class="publication-meta">${esc(p.venue)}</p>
              <p class="publication-meta">${(p.topics || []).map(esc).join(" · ")}</p>
            </div>
            <div class="publication-actions">
              ${p.doiUrl && p.doiUrl !== "#" ? `<a href="${esc(p.doiUrl)}" target="_blank" rel="noopener">DOI ↗</a>` : ""}
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
    const years = [...new Set(data.courses.flatMap((c) => (c.offerings || []).map((o) => o.year)))]
      .sort((a, b) => b - a);

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = String(year);
      option.textContent = year;
      select.append(option);
    });

    select.addEventListener("change", () => {
      currentCourse = 0;
      renderCourseSelectors();
      renderCourseDetail();
    });
  }

  function getVisibleCourses() {
    const selected = qs("#course-year-filter").value;

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
    const courses = getVisibleCourses();
    if (currentCourse >= courses.length) currentCourse = 0;

    const rail = qs("#course-selector");
    rail.innerHTML = courses
      .map(
        (course, i) => `
          <button class="selector-item ${i === currentCourse ? "is-active" : ""}" data-course-index="${i}" type="button">
            <span class="selector-index">${esc(course.code.slice(-2))}</span>
            <span>
              <span class="selector-title">${esc(course.title)}</span>
              <span class="selector-subtitle">${esc(course.code)} · ${course.visibleOfferings.map((o) => o.year).join(", ")}</span>
            </span>
          </button>
        `
      )
      .join("");

    qsa("[data-course-index]", rail).forEach((button) => {
      button.addEventListener("click", () => {
        currentCourse = Number(button.dataset.courseIndex);
        renderCourseSelectors();
        renderCourseDetail();
      });
    });
  }

  function renderCourseDetail() {
    const courses = getVisibleCourses();
    const course = courses[currentCourse];

    if (!course) {
      qs("#course-detail").innerHTML = `<p class="card-text">No course offerings match this year.</p>`;
      return;
    }

    qs("#course-detail").innerHTML = `
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

    qs("#course-detail").scrollTop = 0;
  }

  function renderResources() {
    qs("#resource-grid").innerHTML = data.resources
      .map(
        (r) => `
          <article class="resource-card">
            <div class="card-meta">${esc(r.type)}</div>
            <h3>${esc(r.title)}</h3>
            <p class="card-text">${esc(r.description)}</p>
            <a class="card-link" href="${esc(r.url)}" target="_blank" rel="noopener">
              Open on ${esc(r.source || "web")} ↗
            </a>
          </article>
        `
      )
      .join("");
  }

  function buildPeopleFilters() {
    const select = qs("#people-year-filter");
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
    const filter = qs("#people-year-filter").value;

    const people = data.people.filter((person) => {
      if (filter === "all") return true;
      if (filter === "current") return !person.endYear;
      const year = Number(filter);
      const end = person.endYear ?? 9999;
      return person.startYear <= year && end >= year;
    });

    const grid = qs("#people-grid");

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
    const items = [...data.news].sort((a, b) => b.date.localeCompare(a.date));

    qs("#news-list").innerHTML = items
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

  function structuredData() {
    const p = data.profile;

    qs("#profile-jsonld").textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: p.name,
        jobTitle: p.position,
        worksFor: { "@type": "Organization", name: p.institution },
        affiliation: { "@type": "Organization", name: p.institution },
        email: p.email,
        sameAs: p.links.map((x) => x.url)
      }
    });

    const courses = data.courses.flatMap((course) =>
      (course.offerings || []).map((offering) => ({
        "@type": "Course",
        name: `${course.title} (${offering.year})`,
        courseCode: course.code,
        description: course.description,
        provider: { "@type": "CollegeOrUniversity", name: p.institution },
        url: offering.url
      }))
    );

    qs("#course-jsonld").textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": courses
    });
  }

  function init() {
    fillProfile();

    qs("[data-publication-full-link]").href = data.publicationsFullUrl;

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

    setupRouting();
    structuredData();
  }

  init();
})();
