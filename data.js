/*
================================================================
ACADEMIC WEBSITE CONTENT — VISIBILITY REVISION
================================================================
This is the main content file for ckupwiwat.com.

Visibility hierarchy used throughout the site:
AI in Architecture
→ Computational Design
→ Structural Intelligence & Optimization
→ Machine Learning / Reinforcement Learning / Graph AI
→ Lattice shells, gridshells, representation and structural reasoning

Content model:
1. profile
2. researchIntro
3. researchArcs
4. publications
5. courses
6. resources
7. people
8. news
================================================================
*/

window.SITE_DATA = {
  profile: {
    name: "Chi-tathon Kupwiwat",
    kicker: "AI in Architecture · Computational Design · Structural Intelligence",
    position: "Assistant Professor",
    department: "Department of Architecture, Faculty of Architecture",
    institution: "Chulalongkorn University",

    summary:
      "I research artificial intelligence and computational methods for architecture, with particular focus on structural design, optimization, machine learning and reinforcement learning. My work connects architectural questions with structural mechanics, data representation and intelligent design methods to support design exploration, sustainability and long-term building performance.",

    about:
      "I am an Assistant Professor of Architecture at Chulalongkorn University working at the intersection of artificial intelligence, computational design and structural systems. My research spans AI in architecture, structural optimization, machine learning, reinforcement learning, graph-based representation, generative structural AI and data-driven building analysis. A recurring question across this work is how architectural and structural knowledge can be represented computationally so that machines can predict, reason, optimize and generate useful design alternatives. Teaching, student supervision and open computational tools extend this research into reusable workflows for architectural education and practice.",

    email: "chi-tathon.k@chula.ac.th",

    // This remains the external Notion / Lab link because the current index.html
    // labels the button "Notion / Lab".
    mainUrl: "https://frequent-beluga-27a.notion.site/Chi-tathon-Kupwiwat-2de96c93b56d44d89056bc42ca90683d",

    links: [
      { label: "Official Faculty Profile", url: "https://www.arch.arch.chula.ac.th/people/chi-tathon-kupwiwat-ph-d/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ckupwiwat/" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=lrAXmRwAAAAJ&hl=th&oi=ao" },
      { label: "ORCID", url: "https://orcid.org/0000-0003-2355-9707" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Chi-Tathon-Kupwiwat" },
      { label: "GitHub", url: "https://github.com/kupc25648" },
      { label: "Instagram", url: "https://www.instagram.com/kupc25648/" }
    ]
  },

  researchIntro:
    "My research examines how artificial intelligence and computational methods can support architectural design, analysis and decision-making. Within this broader field of AI in architecture, I focus particularly on structural systems: how they can be represented, optimized, learned from data and generated computationally. The four research arcs move from architectural and sustainability questions toward increasingly specialized work in graph representation, structural reasoning and reinforcement learning.",

  researchArcs: [
    {
      number: "01",
      icon: "🌳",
      title: "AI in Architecture: Structural Systems & Sustainability Intelligence",
      subtitle: "Architecture × Structure × Computation",
      image: "assets/images/arc1.jpg",
      imageAlt: "Research diagram connecting AI in architecture with structural systems, sustainability and computational design",
      overview: [
        "This research arc places structural design within the broader field of AI in architecture. We study how computation, optimization and data-driven methods can help architects reason about structural systems as integrated design entities rather than as isolated engineering checks.",
        "The work connects force flow, material allocation, fabrication logic, constructability and environmental impact so that performance and sustainability can become active design variables.",
        "Applications include timber lattice shells, life-cycle-aware optimization, material allocation, joint rationalization and computational workflows that connect architectural form with structural performance."
      ],
      questions: [
        "How can AI and computation support architectural decisions about structural form, material and construction?",
        "How can structural systems be optimized for mechanical performance, embodied carbon and architectural intent at the same time?",
        "How do fabrication and joint constraints reshape the design space available to architects?"
      ],
      skills: [
        "Architectural and computational design",
        "Rhino + Grasshopper",
        "FEM tools (Karamba3D, custom Python FEM)",
        "Python (NumPy, SciPy)",
        "Life-Cycle Assessment (LCA) workflows",
        "Multi-objective optimization"
      ],
      tags: [
        "AI in Architecture",
        "Computational Design",
        "Structural Design",
        "Sustainability",
        "FEM",
        "Timber",
        "LCA",
        "Optimization"
      ],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    },

    {
      number: "02",
      icon: "💡",
      title: "Generative Structural AI & Representation Learning",
      subtitle: "Graphs × Geometry × Inverse Design",
      image: "assets/images/arc2.jpg",
      imageAlt: "Research diagram for generative structural AI, graph representation and inverse design",
      overview: [
        "We investigate how architectural and structural systems should be represented so that machine-learning models can understand topology, geometry, relationships and performance.",
        "Buildings, frames, trusses and shells can be encoded as graphs, geometric descriptors, grids or hybrid representations. These representations support prediction, classification, inverse design and generative structural workflows.",
        "The theme includes graph neural networks, representation learning, conditional generative models, diffusion-based design exploration and AI-assisted generation of mechanically meaningful structural alternatives."
      ],
      questions: [
        "What representation allows AI to understand architecture and structure most effectively?",
        "Can AI generate structural topologies and geometries that remain mechanically meaningful?",
        "How should physical constraints, architectural intent and data representation interact in inverse and generative design?"
      ],
      skills: [
        "Python (PyTorch, TensorFlow)",
        "Graph Neural Networks",
        "Representation learning",
        "CVAE and diffusion models",
        "Dataset engineering",
        "Structural and architectural graph encoding"
      ],
      tags: [
        "AI in Architecture",
        "Machine Learning",
        "Representation Learning",
        "GNN",
        "Graphs",
        "Generative AI",
        "Inverse Design"
      ],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    },

    {
      number: "03",
      icon: "⚙️",
      title: "Structural Reasoning & Building Intelligence",
      subtitle: "Representation × Evaluation × Explainable AI",
      image: "assets/images/arc3.jpg",
      imageAlt: "Research diagram for structural reasoning, building intelligence and explainable AI",
      overview: [
        "Beyond prediction and optimization, we investigate how AI can reason about architectural and structural systems and communicate why a design decision is plausible, unsafe or valuable.",
        "This includes graph-based building representation, large-language-model-assisted reasoning, fire-safety and regulatory evaluation, building-value assessment and hybrid symbolic/data-driven systems.",
        "The broader objective is interpretable design intelligence: computational systems that connect building information, structural knowledge and architectural decision-making rather than returning an unexplained numerical answer."
      ],
      questions: [
        "Can AI reason about buildings and structural systems under regulatory, safety and design constraints?",
        "How can graph, geometric and textual representations be combined for building-level reasoning?",
        "How can interpretability improve trust and usefulness in AI-assisted architectural design?"
      ],
      skills: [
        "Python and LLM APIs",
        "Graph representation learning",
        "Explainable AI",
        "BIM / building data processing",
        "Rule-based and hybrid reasoning systems"
      ],
      tags: [
        "AI in Architecture",
        "Building Intelligence",
        "Graph-LLM",
        "Reasoning",
        "Explainable AI",
        "Fire Safety",
        "Building Data"
      ],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    },

    {
      number: "04",
      icon: "☁️",
      title: "Reinforcement Learning for Structural Design & Optimization",
      subtitle: "RL × Graph AI × Multi-objective Design",
      image: "assets/images/arc4.jpg",
      imageAlt: "Research diagram for reinforcement learning, graph AI and structural optimization",
      overview: [
        "We develop reinforcement-learning methods for architectural and structural design problems in which an agent must explore a large design space while responding to structural performance, geometric and multi-objective criteria.",
        "Trusses, steel frames, lattice shells and gridshells serve as experimental platforms for standard reinforcement learning, multi-task learning, multi-agent learning, policy transfer and robust optimization.",
        "This is the most specialized layer of the research programme: using reinforcement learning and graph representations as engines for structural optimization and, more broadly, for intelligent computational design."
      ],
      questions: [
        "How can reinforcement learning solve architectural and structural optimization problems with multiple competing objectives?",
        "When do multi-task and multi-agent reinforcement learning outperform conventional or single-task approaches?",
        "Can learned policies transfer across structural typologies, geometries and design conditions?"
      ],
      skills: [
        "Reinforcement Learning",
        "Graph Neural Networks",
        "Multi-task and multi-agent learning",
        "Python",
        "Structural analysis",
        "Multi-objective and robust optimization"
      ],
      tags: [
        "AI for Structural Design",
        "Structural Optimization",
        "Reinforcement Learning",
        "GNN",
        "MTRL",
        "MARL",
        "Lattice Shells",
        "Gridshells"
      ],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    }
  ],

  publicationsFullUrl: "https://scholar.google.com/citations?user=lrAXmRwAAAAJ&hl=th&oi=ao",

  publications: [
    {
      year: 2026,
      title: "Reframing Architectural Classification as Representation: Perceptual, Structural, and Hybrid Encodings under Small-Data Conditions",
      authors: "Kupwiwat, C.-t., et al.",
      venue: "Frontiers of Architectural Research (accepted for publication)",
      ranking: null,
      topics: ["AI in Architecture", "Machine Learning", "Representation Learning", "Thai Architecture", "Small-Data Learning"],
      doiUrl: null,
      detailUrl: null
    },
    {
      year: 2026,
      title: "Machine Learning-Enabled Real-Time Prediction of Drying Shrinkage in Fly Ash-Modified Cementitious Materials",
      authors: "Kupwiwat, C. T., & Prasittisopin, L.",
      venue: "ACS Omega",
      ranking: "Q1",
      topics: ["Machine Learning", "Cementitious Materials", "Drying Shrinkage", "Materials"],
      doiUrl: "https://doi.org/10.1021/acsomega.6c04596",
      detailUrl: null
    },
    {
      year: 2026,
      title: "Life-cycle-aware structural optimization of timber lattice shells using multi-task graph reinforcement learning",
      authors: "Kupwiwat, C. T., Suriyaporn, P., Hawasly, F., & Prasittisopin, L.",
      venue: "Structures, 89, 112134",
      ranking: "T1",
      topics: ["AI for Structural Design", "Reinforcement Learning", "Multi-task Learning", "Structural Optimization", "Timber", "Lattice Shell", "Life Cycle Assessment"],
      doiUrl: "https://doi.org/10.1016/j.istruc.2026.112134",
      detailUrl: null
    },
    {
      year: 2026,
      title: "A unified evaluation framework for reinforcement learning paradigms in bi-objective truss optimization",
      authors: "Kupwiwat, C. T., & Ohsaki, M.",
      venue: "Advanced Engineering Informatics, 74(Part C), 104750",
      ranking: "T1",
      topics: ["AI for Structural Design", "Reinforcement Learning", "Graph Representation", "Truss", "Structural Optimization", "Multi-objective Optimization"],
      doiUrl: "https://doi.org/10.1016/j.aei.2026.104750",
      detailUrl: null
    },
    {
      year: 2026,
      title: "Multi-task machine learning for structural optimizations of lattice shells",
      authors: "Kupwiwat, C. T., & Prasittisopin, L.",
      venue: "Engineering Structures, 358, 122654",
      ranking: "T1",
      topics: ["AI for Structural Design", "Machine Learning", "Multi-task Learning", "Lattice Shell", "Structural Optimization"],
      doiUrl: "https://doi.org/10.1016/j.engstruct.2026.122654",
      detailUrl: null
    },
    {
      year: 2026,
      title: "Effects of work-from-home (WFH)/hybrid work on well-being, work performance, and work engagement in architectural, engineering, and construction industry",
      authors: "Prasoppokakorn, T., Tetiranont, S., Kupwiwat, C. T., Ullah, F., & Prasittisopin, L.",
      venue: "Construction Innovation, 1–25",
      ranking: "T1",
      topics: ["AEC", "Work From Home", "Well-being", "Work Performance", "Construction Management"],
      doiUrl: "https://doi.org/10.1108/CI-09-2025-0387",
      detailUrl: null
    },
    {
      year: 2026,
      title: "Framework for Developing Resistivity Models to Identify Potential Safety Threats in Embankment Dams and Assessing the use of Bentonite in Repairing Deep Cracks in the Embankments",
      authors: "Zain, M., Kupwiwat, C. T., Prasittisopin, L., Praphaphankul, N., Kaewunruen, S., & Zaidi, M. A. A.",
      venue: "Engineered Science",
      ranking: "T1",
      topics: ["Infrastructure", "Embankment Dams", "Resistivity", "Safety", "Materials"],
      doiUrl: "https://dx.doi.org/10.30919/es2054",
      detailUrl: null
    },
    {
      year: 2025,
      title: "Integrating genetic algorithm and life cycle assessment for low-carbon optimization of timber lattice shell structures",
      authors: "Kupwiwat, C. T., Hawasly, F., & Prasittisopin, L.",
      venue: "Structures, 82, 110836",
      ranking: "T1",
      topics: ["Computational Design", "Genetic Algorithm", "Life Cycle Assessment", "Timber", "Lattice Shell", "Structural Optimization"],
      doiUrl: "https://doi.org/10.1016/j.istruc.2025.110836",
      detailUrl: null
    },
    {
      year: 2025,
      title: "DeepTagPhoto: Expert-Guided Unsupervised Clustering of Thai Architectural Photography Using Pre-Trained CNN Models",
      authors: "Nakapana, W., Kupwiwat, C. T., & Khosakitchalert, C.",
      venue: "Frontiers of Architectural Research (accepted for publication)",
      ranking: "T1",
      topics: ["AI in Architecture", "Computer Vision", "CNN", "Unsupervised Learning", "Thai Architecture", "Architectural Photography"],
      doiUrl: "https://doi.org/10.1016/j.foar.2025.09.012",
      detailUrl: null
    },
    {
      year: 2025,
      title: "Establishing analytical vulnerability information for non-linear low-rise (1-to 3-storey) school building models",
      authors: "Zain, M., Kupwiwat, C. T., Thomas, H. K., & Prasittisopin, L.",
      venue: "Steel and Composite Structures, 56(6), 551–563",
      ranking: "Q1",
      topics: ["Structural Analysis", "Vulnerability", "School Buildings", "Nonlinear Analysis"],
      doiUrl: "https://doi.org/10.12989/scs.2025.56.6.551",
      detailUrl: null
    },
    {
      year: 2025,
      title: "Thermal performance and urban simulation study of climate-responsive bottom ash–cement blocks",
      authors: "Sadakorn, W., Kupwiwat, C. T., Ngamkhanong, C., Jareemit, D., Kaewunruen, S., & Prasittisopin, L.",
      venue: "Construction and Building Materials, 491, 142816",
      ranking: "T1",
      topics: ["Building Materials", "Thermal Performance", "Urban Simulation", "Bottom Ash", "Climate-responsive Design"],
      doiUrl: "https://doi.org/10.1016/j.conbuildmat.2025.142816",
      detailUrl: null
    },
    {
      year: 2025,
      title: "Advancing urban thermal comfort: adaptive ensemble machine learning models for tropical climates",
      authors: "Kupwiwat, C. T., Kaewunruen, S., & Prasittisopin, L.",
      venue: "Energy and Buildings, 115762",
      ranking: "T1",
      topics: ["Machine Learning", "Urban Thermal Comfort", "Tropical Climate", "Building Performance"],
      doiUrl: "https://doi.org/10.1016/j.enbuild.2025.115762",
      detailUrl: null
    },
    {
      year: 2025,
      title: "Pre-trained machine learning for inverse structural design of piecewise developable surface",
      authors: "Kupwiwat, C. T., & Ohsaki, M.",
      venue: "Automation in Construction, 176, 106283",
      ranking: "T1",
      topics: ["AI in Architecture", "AI for Structural Design", "Machine Learning", "Inverse Design", "Structural Design", "Developable Surface"],
      doiUrl: "https://doi.org/10.1016/j.autcon.2025.106283",
      detailUrl: null
    },
    {
      year: 2025,
      title: "Hierarchical graph-based machine learning model for optimization of three-dimensional braced steel frame",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Engineering Applications of Artificial Intelligence, 147, 110356",
      ranking: "Q1",
      topics: ["AI for Structural Design", "Graph Neural Network", "Machine Learning", "Steel Frame", "Structural Optimization"],
      doiUrl: "https://doi.org/10.1016/j.engappai.2025.110356",
      detailUrl: null
    },
    {
      year: 2024,
      title: "Multi-objective optimization of truss structure using multi-agent reinforcement learning and graph representation",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Engineering Applications of Artificial Intelligence, 129, 107594",
      ranking: "Q1",
      topics: ["AI for Structural Design", "Multi-agent Reinforcement Learning", "Graph Representation", "Truss", "Structural Optimization", "Multi-objective Optimization"],
      doiUrl: "https://doi.org/10.1016/j.engappai.2023.107594",
      detailUrl: null
    },
    {
      year: 2023,
      title: "Structural morphogenesis of grid shell by using autonomous decentralized system and reinforcement learning",
      authors: "Yamamoto, K., & Kupwiwat, C.",
      venue: "Journal of Structural and Construction Engineering (AIJ), 88(811), 1360–1368",
      ranking: "Q1",
      topics: ["AI for Structural Design", "Reinforcement Learning", "Grid Shell", "Structural Morphogenesis", "Autonomous Decentralized System"],
      doiUrl: "https://doi.org/10.3130/aijs.88.1360",
      detailUrl: null
    },
    {
      year: 2023,
      title: "Deep deterministic policy gradient and graph attention network for geometry optimization of latticed shells",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Applied Intelligence, 53(17), 19809–19826",
      ranking: "Q1",
      topics: ["AI for Structural Design", "Reinforcement Learning", "Graph Attention Network", "Latticed Shell", "Structural Optimization", "Geometry Optimization"],
      doiUrl: "https://doi.org/10.1007/s10489-023-04565-w",
      detailUrl: null
    },
    {
      year: 2023,
      title: "Deep deterministic policy gradient and graph convolutional network for topology optimization of braced steel frames",
      authors: "Kupwiwat, C., Iwagoe, Y., Hayashi, K., & Ohsaki, M.",
      venue: "Journal of Structural Engineering B, Architectural Institute of Japan, 69, 129–139",
      ranking: null,
      topics: ["AI for Structural Design", "Reinforcement Learning", "Graph Convolutional Network", "Steel Frame", "Structural Optimization", "Topology Optimization"],
      doiUrl: "https://doi.org/10.3130/aijjse.69B.0_129",
      detailUrl: null
    },
    {
      year: 2022,
      title: "Deep deterministic policy gradient and graph convolutional network for bracing direction optimization of grid shells",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Frontiers in Built Environment, 8, 899072",
      ranking: "Q1",
      topics: ["AI for Structural Design", "Reinforcement Learning", "Graph Convolutional Network", "Grid Shell", "Structural Optimization", "Bracing Optimization"],
      doiUrl: "https://doi.org/10.3389/fbuil.2022.899072",
      detailUrl: null
    },
    {
      year: 2021,
      title: "Fundamental study on morphogenesis of shell structure using reinforcement",
      authors: "Kupwiwat, C., & Yamamoto, K.",
      venue: "Journal of Structural Engineering B, Architectural Institute of Japan, 67, 211–218",
      ranking: null,
      topics: ["AI for Structural Design", "Reinforcement Learning", "Shell Structure", "Structural Morphogenesis"],
      doiUrl: null,
      detailUrl: null
    }
  ],

  courses: [
    {
      code: "2501684",
      title: "Computer Technology for Architectural Research",
      description:
        "Python programming, data science and machine learning for architectural research, simulation and computational design, with emphasis on how AI methods can be formulated, evaluated and interpreted in architectural problems.",
      topics: ["AI in Architecture", "Computational Architecture", "Python", "Data Science", "Machine Learning"],
      offerings: [
        {
          year: 2024,
          label: "Y2024",
          source: "Notion",
          url: "https://frequent-beluga-27a.notion.site/Computer-Technology-for-Architectural-Research-2501684-Y2024-200171f044c7809daaa9e6ff580aa020"
        },
        {
          year: 2025,
          label: "Y2025",
          source: "Notion",
          url: "https://frequent-beluga-27a.notion.site/Computer-Technology-for-Architectural-Research-2501684-Y2025-2dd171f044c780cd9c28c8e92c960499"
        }
      ]
    },

    {
      code: "2501584",
      title: "Individual Study in Architecture / Workshop in Structural Artifacts",
      description:
        "A flexible course family connecting architectural structure, mechanics, computation and hands-on prototyping so students can translate structural ideas into physical and digital design workflows.",
      topics: ["Architectural Structures", "FEM", "Making", "Computational Design"],
      offerings: [
        {
          year: 2025,
          label: "Individual Study in Architecture · Y2025",
          source: "Notion",
          url: "https://frequent-beluga-27a.notion.site/Individual-Study-in-Architecture-2501584-Y2025-1-23c171f044c7805b896fe44da85d9a5c"
        },
        {
          year: 2026,
          label: "Workshop in Structural Artifacts · Y2026",
          source: "Notion",
          url: "https://frequent-beluga-27a.notion.site/Workshop-in-Structural-Artifacts-Individual-Study-in-Architecture-2501584-Y2026-1-3b3171f044c7806fbe6ecd18a9caf9d2"
        }
      ]
    },

    {
      code: "2501370",
      title: "Optimization in Architecture and Structural Design",
      description:
        "Optimization for architectural and structural design, covering design variables, objective functions, constraints, evolutionary search, computational workflows and the relationship between optimization and AI-assisted design.",
      topics: ["AI in Architecture", "Computational Design", "Optimization", "Architecture", "Structural Design"],
      offerings: [
        {
          year: 2026,
          label: "Y2026",
          source: "Notion",
          url: "https://frequent-beluga-27a.notion.site/Optimization-in-Architecture-and-Structural-Design-2501370-Y2026-3b1171f044c7807d8d7afb9c5069c1fb"
        }
      ]
    },

    {
      code: "2501113",
      title: "Architectural Design I",
      description:
        "Architectural studio teaching that uses rule-based, parametric and computational systems to explore how design possibilities emerge from relationships, constraints and generative workflows.",
      topics: ["Studio", "Computational Design", "Parametric Design", "Architecture"],
      offerings: [
        {
          year: 2025,
          label: "Chaos–KronosII · Y2025",
          source: "Notion",
          url: "https://frequent-beluga-27a.notion.site/Architectural-Design-I-2501113-Y2025-1-Chaos-KronosII-270171f044c78068b2fbd65f4d865db7"
        },
        {
          year: 2026,
          label: "The Relation · Y2026",
          source: "Notion",
          url: "https://frequent-beluga-27a.notion.site/Architectural-Design-I-2501113-Y2026-The-Relation-3ce171f044c7803a9b1bd847099a53d5"
        }
      ]
    },  
  ],

  resources: [
    {
      type: "FEM Module",
      title: "3D Truss Finite Element Method",
      description:
        "An open Grasshopper + GHPython implementation of a 3D truss finite element solver for architectural structure, teaching and computational design workflows.",
      url: "https://frequent-beluga-27a.notion.site/3D-TRUSS-Finite-Element-Method-Rhino-Grasshopper-290171f044c780c3a365e9377dfbafb9",
      source: "Notion"
    },
    {
      type: "FEM Module",
      title: "3D Frame Finite Element Method",
      description:
        "An open 3D frame finite element method for beam-column systems implemented for Rhino + Grasshopper and computational architectural research.",
      url: "https://frequent-beluga-27a.notion.site/3D-FRAME-Finite-Element-Method-Rhino-Grasshopper-290171f044c780818313e24a8454d713",
      source: "Notion"
    },
    {
      type: "FEM Module",
      title: "Triangular Shell Finite Element Method",
      description:
        "An open triangular shell FEM module combining membrane, bending and rotational stabilization behavior for shell and computational structural design studies.",
      url: "https://frequent-beluga-27a.notion.site/Triangular-Shell-Finite-Element-Method-Rhino-Grasshopper-290171f044c7803a9dacd85032fcd0a6",
      source: "Notion"
    },
    {
      type: "Lecture / Web App",
      title: "Spatial Analysis",
      description:
        "Graph-based data representation approaches for spatial analysis and machine-learning workflows in architectural research.",
      url: "https://frequent-beluga-27a.notion.site/Spatial-Analysis-Y2026-3b6171f044c780ea8929ed50c44bfc0f",
      source: "Notion"
    }
  ],

  people: [
    {
      name: "Dr. Muhammad Zain",
      role: "Postdoctoral Researcher",
      topic: "AI-Driven Structural Optimization, Seismic Vulnerability Assessments, Seismotectonic and Geophysical investigations of infrastructural facilities including buildings and dams",
      startYear: 2025,
      endYear: null,
      links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?user=AP4oE3QAAAAJ&hl=th&oi=ao"}]
    },
    {
      name: "Dr. Ei Cho Pyone",
      role: "Postdoctoral Researcher",
      topic: "Structural optimization with machine learning",
      startYear: 2026,
      endYear: null,
      links: [{ label: "ResearchGate", url: "https://www.researchgate.net/profile/Ei_Pyone5"}]
    },
    {
      name: "Dr. Anuwat Budda",
      role: "Postdoctoral Researcher",
      topic: "Graph representation of buildings for safety analysis and AI-assisted reasoning",
      startYear: 2026,
      endYear: null,
      links: []
    },
    {
      name: "Prapawit Intun",
      role: "PhD Researcher",
      topic: "Artificial Intelligence for Architectural Heritage (tentative)",
      startYear: 2026,
      endYear: null,
      links: [{ label: "Google Scholar", url: "https://scholar.google.com/citations?hl=th&user=8KUjm6YAAAAJ"}]
    },
    {
      name: "Kanyagon Amornvet",
      role: "Graduate Researcher",
      topic: "Context-Aware Material Infill Generation for Adaptive Reuse and Architectural Repair using Machine Learning",
      startYear: 2026,
      endYear: null,
      links: []
    },
    {
      name: "Putthiporn Suriyaporn",
      role: "Undergraduate Researcher",
      topic: "Data-driven design of joint modules for timber lattice shell structure using tessellation technique",
      startYear: 2025,
      endYear: null,
      links: []
    }
  ],

  news: [
    {
      date: "2026-09-14",
      type: "Conference",
      title: "Presenting AI-assisted gridshell dataset research at IASS 2026",
      summary:
        "Presenting research on geometry datasets, structural representation and AI-assisted design of gridshell structures at the IASS Annual Symposium 2026 in Turin, Italy.",
      source: "IASS 2026",
      url: "https://www.iass-structures.org/event-5740941"
    },
    {
      date: "2026-09-01",
      type: "Publication",
      title: "Architectural representation paper accepted by Frontiers of Architectural Research",
      summary:
        "The paper reframes architectural classification as a representation problem, comparing perceptual, structural and hybrid encodings under small-data conditions. The work strengthens a broader research direction in AI in architecture and architectural representation learning.",
      source: "Architectural Intelligence Research Group",
      url: "https://aicuarchlab.github.io/"
    },
    {
      date: "2026-07-30",
      type: "Invited Talk",
      title: "Invited speaker at the ASEAN–China Symposium on Digital Built Heritage",
      summary:
        "Presented research on building-to-graph representations and pre-trained image embeddings for machine learning at the ASEAN–China Symposium on Digital Information Systems and Sustainable Renewal of the Built Heritage in Guizhou, China.",
      source: "ASEAN–China Symposium",
      url: "https://www.facebook.com/share/p/19XSPc82Zg/"
    },
    {
      date: "2026-06-29",
      type: "Research Grant",
      title: "Awarded research funding from the Asahi Glass Foundation",
      summary:
        "Received a 2026 research grant from the Asahi Glass Foundation, Japan, at the 34th Special CU-af Seminar on Cross-Disciplinary Research for Sustainable Impact at Chulalongkorn University.",
      source: "Research Chula",
      url: "https://www.research.chula.ac.th/special-seminar-34-asahi/"
    }
  ]
};
