/*
================================================================
ACADEMIC WEBSITE CONTENT
================================================================
This is the main file you edit.

Content model:
1. profile
2. researchIntro
3. researchArcs
4. publications
5. courses (each course can have multiple yearly offerings)
6. resources
7. people (no Notion required)
8. news (can link to ANY website / SNS / journal / Notion / YouTube)
================================================================
*/

window.SITE_DATA = {
  profile: {
    name: "Chi-tathon Kupwiwat",
    kicker: "Architecture · Structure · Computation · Artificial Intelligence",
    position: "Assistant Professor",
    department: "Department of Architecture, Faculty of Architecture",
    institution: "Chulalongkorn University",

    summary:
      "I work at the intersection of architecture, structure and computation. My research asks how structural logic can be represented, explored and learned computationally, and how this understanding can support architectural design, sustainability and long-term building performance.",

    about:
      "My work integrates architecture, structural mechanics and artificial intelligence across multiple scales — from material allocation and structural optimization to graph representation, generative structural AI and building-level reasoning. Teaching and open computational tools are used as an extension of the research, allowing methods developed in the lab to become reusable architectural workflows.",

    email: "chi-tathon.k@chula.ac.th",

    mainUrl: "https://frequent-beluga-27a.notion.site/Chi-tathon-Kupwiwat-2de96c93b56d44d89056bc42ca90683d",

    links: [
      { label: "Instagram", url: "https://www.instagram.com/kupc25648/" },
      { label: "GitHub", url: "https://github.com/kupc25648" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ckupwiwat/" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=lrAXmRwAAAAJ&hl=th&oi=ao" }
    ]
  },

  researchIntro:
    "We investigate structural systems as intelligent, adaptive and generative entities. The research integrates architecture, structural mechanics and artificial intelligence to develop machine-driven design intelligence across multiple scales — from material allocation to building-level reasoning. Each theme corresponds to a long-term research arc.",

  researchArcs: [
    {
      number: "01",
      icon: "🌳",
      title: "Architectural Structural Systems & Sustainability Intelligence",
      subtitle: "Structure × Material × Construction",
      image: "assets/images/arc1.jpg",
      imageAlt: "Research diagram for structural systems and sustainability intelligence",
      overview: [
        "We study structural systems as integrated architectural entities — where force flow, material allocation, fabrication logic and sustainability are co-optimized.",
        "Rather than treating structure as isolated mechanics, we embed environmental impact, constructability and joint rationalization directly into the design process.",
        "Applications include timber lattice shells, species-aware material allocation, joint optimization and life-cycle-aware structural design."
      ],
      questions: [
        "How can structural systems be optimized for both mechanical performance and embodied carbon?",
        "How do fabrication and joint constraints influence global force flow?",
        "Can sustainability become an explicit design variable rather than a post-evaluation metric?"
      ],
      skills: [
        "FEM tools (Karamba3D, custom Python FEM)",
        "Rhino + Grasshopper",
        "Python (NumPy, SciPy)",
        "Life-Cycle Assessment (LCA) workflows",
        "Multi-objective optimization"
      ],
      tags: ["FDM", "FEM", "Timber", "LCA", "Optimization"],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    },

    {
      number: "02",
      icon: "💡",
      title: "Generative Structural AI & Graph Foundation Models",
      subtitle: "Structural Representation & Inverse Intelligence",
      image: "assets/images/arc2.jpg",
      imageAlt: "Research diagram for generative structural AI",
      overview: [
        "We develop AI systems that understand and generate structures as graph-based mechanical systems.",
        "Buildings and structural systems are encoded as relational networks, enabling generative models to learn topology, predict structural behavior and solve inverse design problems.",
        "This theme includes graph neural networks, conditional variational autoencoders, diffusion models for truss and shell generation, and structural foundation AI models."
      ],
      questions: [
        "How can structural systems be represented as learnable graph entities?",
        "Can AI generate mechanically feasible topologies?",
        "How do generative models embed physical constraints?"
      ],
      skills: [
        "Python (PyTorch, TensorFlow)",
        "Graph Neural Networks",
        "CVAE and diffusion models",
        "Dataset engineering",
        "Structural graph encoding"
      ],
      tags: ["GNN", "CVAE", "Diffusion", "Graphs", "Inverse Design"],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    },

    {
      number: "03",
      icon: "⚙️",
      title: "Structural Reasoning & LLM Systems",
      subtitle: "Evaluation & Decision Intelligence",
      image: "assets/images/arc3.jpg",
      imageAlt: "Research diagram for graph and LLM structural reasoning",
      overview: [
        "We investigate how structural systems can be evaluated and reasoned about using AI-driven reasoning frameworks.",
        "This includes graph-based large language models, fire-safety reasoning, regulatory evaluation and building-value assessment.",
        "The focus is not only prediction or optimization, but explainable structural decision-making."
      ],
      questions: [
        "Can AI reason about structural systems under regulatory constraints?",
        "How do we combine symbolic reasoning with structural graph representations?",
        "How can interpretability improve trust in AI-assisted design?"
      ],
      skills: [
        "Python and LLM APIs",
        "Graph representation learning",
        "Explainable AI",
        "BIM / building data processing",
        "Rule-based and hybrid reasoning systems"
      ],
      tags: ["Graph-LLM", "Reasoning", "Fire Safety", "XAI", "Building Data"],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    },

    {
      number: "04",
      icon: "☁️",
      title: "Advanced Reinforcement Learning for Structural Systems",
      subtitle: "Robust RL · MTRL · MARL",
      image: "assets/images/arc4.jpg",
      imageAlt: "Research diagram for reinforcement learning in structural systems",
      overview: [
        "We develop advanced reinforcement-learning methodologies tailored for structural systems.",
        "Steel lattice structures serve as controlled experimental platforms for studying robust reinforcement learning, multi-task reinforcement learning, multi-agent reinforcement learning, policy transfer and retraining.",
        "While steel provides methodological clarity, the developed frameworks are designed to scale to timber, shell and concrete systems."
      ],
      questions: [
        "How can RL handle multi-objective structural tasks under uncertainty?",
        "What happens when multiple agents coordinate in structural optimization?",
        "Can reinforcement learning become a scalable engine for structural intelligence?"
      ],
      skills: [
        "Reinforcement Learning",
        "Multi-agent systems",
        "Python",
        "Uncertainty modeling",
        "Robust optimization"
      ],
      tags: ["RL", "MTRL", "MARL", "Robustness", "Optimization"],
      url: "https://frequent-beluga-27a.notion.site/Research-Themes-312171f044c780838131ded9673af4ab"
    }
  ],

  publicationsFullUrl: "https://scholar.google.com/citations?user=lrAXmRwAAAAJ&hl=th&oi=ao",

  publications: [
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
      topics: ["Reinforcement Learning", "Multi-task Learning", "Timber", "Lattice Shell", "Life Cycle Assessment"],
      doiUrl: "https://doi.org/10.1016/j.istruc.2026.112134",
      detailUrl: null
    },
    {
      year: 2026,
      title: "A unified evaluation framework for reinforcement learning paradigms in bi-objective truss optimization",
      authors: "Kupwiwat, C. T., & Ohsaki, M.",
      venue: "Advanced Engineering Informatics, 74(Part C), 104750",
      ranking: "T1",
      topics: ["Reinforcement Learning", "Truss", "Structural Optimization", "Multi-objective Optimization"],
      doiUrl: "https://doi.org/10.1016/j.aei.2026.104750",
      detailUrl: null
    },
    {
      year: 2026,
      title: "Multi-task machine learning for structural optimizations of lattice shells",
      authors: "Kupwiwat, C. T., & Prasittisopin, L.",
      venue: "Engineering Structures, 358, 122654",
      ranking: "T1",
      topics: ["Machine Learning", "Multi-task Learning", "Lattice Shell", "Structural Optimization"],
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
      topics: ["Genetic Algorithm", "Life Cycle Assessment", "Timber", "Lattice Shell", "Structural Optimization"],
      doiUrl: "https://doi.org/10.1016/j.istruc.2025.110836",
      detailUrl: null
    },
    {
      year: 2025,
      title: "DeepTagPhoto: Expert-Guided Unsupervised Clustering of Thai Architectural Photography Using Pre-Trained CNN Models",
      authors: "Nakapana, W., Kupwiwat, C. T., & Khosakitchalert, C.",
      venue: "Frontiers of Architectural Research (accepted for publication)",
      ranking: "T1",
      topics: ["Computer Vision", "CNN", "Unsupervised Learning", "Thai Architecture", "Architectural Photography"],
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
      topics: ["Machine Learning", "Inverse Design", "Structural Design", "Developable Surface"],
      doiUrl: "https://doi.org/10.1016/j.autcon.2025.106283",
      detailUrl: null
    },
    {
      year: 2025,
      title: "Hierarchical graph-based machine learning model for optimization of three-dimensional braced steel frame",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Engineering Applications of Artificial Intelligence, 147, 110356",
      ranking: "Q1",
      topics: ["Graph Neural Network", "Machine Learning", "Steel Frame", "Structural Optimization"],
      doiUrl: "https://doi.org/10.1016/j.engappai.2025.110356",
      detailUrl: null
    },
    {
      year: 2024,
      title: "Multi-objective optimization of truss structure using multi-agent reinforcement learning and graph representation",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Engineering Applications of Artificial Intelligence, 129, 107594",
      ranking: "Q1",
      topics: ["Multi-agent Reinforcement Learning", "Graph Representation", "Truss", "Multi-objective Optimization"],
      doiUrl: "https://doi.org/10.1016/j.engappai.2023.107594",
      detailUrl: null
    },
    {
      year: 2023,
      title: "Structural morphogenesis of grid shell by using autonomous decentralized system and reinforcement learning",
      authors: "Yamamoto, K., & Kupwiwat, C.",
      venue: "Journal of Structural and Construction Engineering (AIJ), 88(811), 1360–1368",
      ranking: "Q1",
      topics: ["Reinforcement Learning", "Grid Shell", "Structural Morphogenesis", "Autonomous Decentralized System"],
      doiUrl: "https://doi.org/10.3130/aijs.88.1360",
      detailUrl: null
    },
    {
      year: 2023,
      title: "Deep deterministic policy gradient and graph attention network for geometry optimization of latticed shells",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Applied Intelligence, 53(17), 19809–19826",
      ranking: "Q1",
      topics: ["Reinforcement Learning", "Graph Attention Network", "Latticed Shell", "Geometry Optimization"],
      doiUrl: "https://doi.org/10.1007/s10489-023-04565-w",
      detailUrl: null
    },
    {
      year: 2023,
      title: "Deep deterministic policy gradient and graph convolutional network for topology optimization of braced steel frames",
      authors: "Kupwiwat, C., Iwagoe, Y., Hayashi, K., & Ohsaki, M.",
      venue: "Journal of Structural Engineering B, Architectural Institute of Japan, 69, 129–139",
      ranking: null,
      topics: ["Reinforcement Learning", "Graph Convolutional Network", "Steel Frame", "Topology Optimization"],
      doiUrl: "https://doi.org/10.3130/aijjse.69B.0_129",
      detailUrl: null
    },
    {
      year: 2022,
      title: "Deep deterministic policy gradient and graph convolutional network for bracing direction optimization of grid shells",
      authors: "Kupwiwat, C. T., Hayashi, K., & Ohsaki, M.",
      venue: "Frontiers in Built Environment, 8, 899072",
      ranking: "Q1",
      topics: ["Reinforcement Learning", "Graph Convolutional Network", "Grid Shell", "Bracing Optimization"],
      doiUrl: "https://doi.org/10.3389/fbuil.2022.899072",
      detailUrl: null
    },
    {
      year: 2021,
      title: "Fundamental study on morphogenesis of shell structure using reinforcement",
      authors: "Kupwiwat, C., & Yamamoto, K.",
      venue: "Journal of Structural Engineering B, Architectural Institute of Japan, 67, 211–218",
      ranking: null,
      topics: ["Reinforcement Learning", "Shell Structure", "Structural Morphogenesis"],
      doiUrl: null,
      detailUrl: null
    }
  ],

  courses: [
    {
      code: "2501684",
      title: "Computer Technology for Architectural Research",
      description:
        "Python programming, data science and machine learning for architectural research, simulation and computational design.",
      topics: ["Python", "Data Science", "Machine Learning", "Architecture"],
      offerings: [
        {
          year: 2024,
          label: "Y2024",
          source: "Notion",
          url: "https://www.notion.so/"
        },
        {
          year: 2025,
          label: "Y2025",
          source: "Notion",
          url: "https://www.notion.so/"
        }
      ]
    },

    {
      code: "2501584",
      title: "Individual Study in Architecture / Workshop in Structural Artifacts",
      description:
        "A flexible course family used for structural learning, mechanics, computational methods and hands-on structural artifact workshops.",
      topics: ["Structures", "FEM", "Making", "Computational Design"],
      offerings: [
        {
          year: 2025,
          label: "Individual Study in Architecture · Y2025",
          source: "Notion",
          url: "https://www.notion.so/"
        },
        {
          year: 2026,
          label: "Workshop in Structural Artifacts · Y2026",
          source: "Notion",
          url: "https://www.notion.so/"
        }
      ]
    },

    {
      code: "2501370",
      title: "Optimization in Architecture and Structural Design",
      description:
        "Fundamentals of optimization, objective functions, constraints, computational workflows, evolutionary methods and design applications.",
      topics: ["Optimization", "Architecture", "Structural Design"],
      offerings: [
        {
          year: 2026,
          label: "Y2026",
          source: "Notion",
          url: "https://www.notion.so/"
        }
      ]
    },

    {
      code: "2501113",
      title: "Architectural Design I",
      description:
        "Architectural studio teaching, including computational and rule-based design explorations such as Chaos–KronosII.",
      topics: ["Studio", "Parametric Design", "Architecture"],
      offerings: [
        {
          year: 2025,
          label: "Chaos–KronosII · Y2025",
          source: "Notion",
          url: "https://www.notion.so/"
        }
      ]
    }
  ],

  resources: [
    {
      type: "FEM Module",
      title: "3D Truss Finite Element Method",
      description:
        "A Grasshopper + GHPython implementation of a 3D truss finite element solver.",
      url: "https://frequent-beluga-27a.notion.site/3D-TRUSS-Finite-Element-Method-Rhino-Grasshopper-290171f044c780c3a365e9377dfbafb9",
      source: "Notion"
    },
    {
      type: "FEM Module",
      title: "3D Frame Finite Element Method",
      description:
        "A 3D frame finite element method for beam-column systems implemented for Rhino + Grasshopper.",
      url: "https://frequent-beluga-27a.notion.site/3D-FRAME-Finite-Element-Method-Rhino-Grasshopper-290171f044c780818313e24a8454d713",
      source: "Notion"
    },
    {
      type: "FEM Module",
      title: "Triangular Shell Finite Element Method",
      description:
        "A triangular shell FEM module combining membrane, bending and rotational stabilization behavior.",
      url: "https://frequent-beluga-27a.notion.site/Triangular-Shell-Finite-Element-Method-Rhino-Grasshopper-290171f044c7803a9dacd85032fcd0a6",
      source: "Notion"
    },
    {
      type: "Lecture / Web App",
      title: "Spatial Analysis",
      description:
        "Graph-data representation approaches for spatial analysis in architectural research.",
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
      // No Notion link is required.
      // Add any links you want, or use an empty array [].
      // links: [
      //   { label: "Website", url: "https://example.com/" }
      // ]
    },
    {
      name: "Dr. Ei Cho Pyone",
      role: "Postdoctoral Researcher",
      topic: "Structural optimization with Machine Learning",
      startYear: 2026,
      endYear: null,
      links: []
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
      title: "Presenting gridshell dataset research at IASS 2026",
      summary:
        "Research on geometry datasets and AI-assisted gridshell design will be presented at the IASS Symposium in Turin.",
      source: "IASS",
      url: "https://example.com/"
    },
    {
      date: "2026-08-01",
      type: "Publication",
      title: "New reinforcement-learning work in structural design",
      summary:
        "A recent publication examines reinforcement-learning paradigms for multi-objective structural optimization.",
      source: "Journal",
      url: "https://example.com/"
    },
    {
      date: "2026-07-01",
      type: "Lab Update",
      title: "New computational design courses and research activities",
      summary:
        "Teaching activities continue to connect optimization, structures, programming and architectural research.",
      source: "LinkedIn",
      url: "https://www.linkedin.com/in/ckupwiwat/"
    }
  ]
};
