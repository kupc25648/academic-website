# CK Academic Website — SEO / AI Search Revision

This revision preserves the existing visual language and the single `data.js` content source while adding semantic URLs, page-specific metadata, structured data, crawlable links, sitemap coverage, OpenAI search crawler access, and AI-readable summaries.

## Normal content updates
Continue editing `data.js` as before. The live JavaScript interface reads that file directly.

## When to rerun the SEO builder
Run:

```bash
node build_seo.js
```

Run the builder when you change a research arc title/description, add a major new SEO landing topic, substantially change course identity, or want the no-JavaScript fallback / sitemap / llms files regenerated. Ordinary news, people, publication and wording updates still appear in the live site from `data.js`.

## Deployment
Copy this revision over the code files in the existing site repository. Keep the existing `assets/` folder; it was not included in the uploaded files used for this revision.

## Main SEO routes
- / — Chi-tathon Kupwiwat | AI in Architecture at Chulalongkorn
- /research/ — AI in Architecture & Computational Design Research | Chi-tathon Kupwiwat
- /research/sustainable-structural-design/ — AI in Architecture: Structural Systems & Sustainability | Chi-tathon Kupwiwat
- /research/generative-structural-ai/ — Generative Structural AI & Representation Learning | Chi-tathon Kupwiwat
- /research/structural-reasoning-llm/ — Structural Reasoning & Building Intelligence | Chi-tathon Kupwiwat
- /research/reinforcement-learning-structural-optimization/ — Reinforcement Learning for Structural Design & Optimization | Chi-tathon Kupwiwat
- /publications/ — Publications in AI, Structures & Computational Design | Chi-tathon Kupwiwat
- /publications/ai-in-architecture/ — AI in Architecture Research | Chi-tathon Kupwiwat
- /publications/reinforcement-learning/ — Reinforcement Learning Publications | Chi-tathon Kupwiwat
- /publications/structural-optimization/ — Structural Optimization Research | Chi-tathon Kupwiwat
- /publications/lattice-shells-gridshells/ — AI for Lattice Shell & Gridshell Optimization | Chi-tathon Kupwiwat
- /publications/machine-learning-architecture/ — Machine Learning in Architecture Research | Chi-tathon Kupwiwat
- /graduate-research/ — Graduate Supervision in AI & Computational Architecture | Chi-tathon Kupwiwat
- /teaching/ — Teaching AI, Computation & Structures in Architecture | Chi-tathon Kupwiwat
- /teaching/machine-learning-architectural-research/ — Machine Learning for Architectural Research | Chi-tathon Kupwiwat
- /teaching/optimization-architecture-structural-design/ — Optimization in Architecture & Structural Design | Chi-tathon Kupwiwat
- /resources/ — Open Computational Tools for Architecture & Structures | Chi-tathon Kupwiwat
- /people/ — Research Group | AI, Structures & Architecture | Chi-tathon Kupwiwat
- /news/ — Research News & Updates | Chi-tathon Kupwiwat
- /about/ — About Chi-tathon Kupwiwat | Chulalongkorn University
