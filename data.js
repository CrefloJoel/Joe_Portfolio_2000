// Single source of truth for portfolio content.
// Zero external API calls: only projects you explicitly add to `customProjects` are shown.

export const portfolioData = {
  profile: {
    name: "Creflo Asir Joel",
    firstName: "Creflo",
    shortName: "Creflo Joel",
    location: "Bengaluru, India",
    badge: "Bengaluru · Backend, GenAI & Full Stack",
    headline: "Full Stack & AI Engineer crafting calm, fast, and reliable software.",
    bio: "I've spent 4+ years building Python backends, agentic GenAI workflows, test automation frameworks, and React interfaces. Right now I engineer backend & AI systems at LTM while pursuing my M.Tech in Data Science & AI at PES University.",
    email: "crefloasirjoel@gmail.com",
    githubUsername: "CrefloJoel",
    github: "https://github.com/CrefloJoel",
    linkedin: "https://www.linkedin.com/in/creflo-joel-9430311b2/",
    // Drop your PDF into the repo root with this filename to enable direct PDF download.
    // Until then, clicking Resume opens a clean print-to-PDF Resume view.
    resumeUrl: "./Creflo_Asir_Joel_Resume.pdf"
  },

  // Only projects you explicitly add here will be displayed in the Projects section.
  // Example entry:
  // {
  //   id: "smart-log-analyzer",
  //   title: "Smart Log Analyzer",
  //   description: "Short 1-2 line overview of what it does and why you built it.",
  //   language: "Python",
  //   topics: ["FastAPI", "RAG", "React"],
  //   codeUrl: "https://github.com/CrefloJoel/your-repo",
  //   demoUrl: "https://your-demo.com" // optional
  // }
  customProjects: [],

  companyProgression: [
    { company: "LTM", period: "Feb 2026 – Present" },
    { company: "LTIMindtree Ltd", period: "Sep 2022 – Jan 2026" },
    { company: "Mindtree", period: "May 2022 – Sep 2022" }
  ],

  experience: [
    {
      role: "Software Engineer — Backend & AI Systems",
      company: "LTM / LTIMindtree Ltd",
      period: "Oct 2024 – Present",
      summary:
        "Designing internal GenAI automation layers, RAG error-analysis pipelines, and async Python + React telemetry platforms deployed on AWS and Kubernetes.",
      impacts: ["30% lower API latency", "Fine-tuned LLMs on SageMaker", "Kubernetes & CI/CD"],
      highlights: [
        "Built internal agentic automation layers with LangGraph and CrewAI for LLM orchestration, automated troubleshooting, and configuration profile updates.",
        "Created RAG pipelines using Pinecone and FAISS to match live production application errors against historical log patterns.",
        "Developed async microservices and WebSocket streaming APIs with FastAPI and Django REST Framework, cutting backend processing latency by 30%.",
        "Deployed fine-tuned domain-specific LLMs on AWS SageMaker with tool-calling guardrails and containerized services on Kubernetes via AWS & Azure DevOps.",
        "Built real-time asset lifecycle and telemetry backend modules powering responsive React.js analytics dashboards."
      ],
      tags: ["Python", "FastAPI", "Django REST Framework", "LangGraph", "CrewAI", "Pinecone", "FAISS", "AWS SageMaker", "Kubernetes", "React.js"]
    },
    {
      role: "QA Automation Engineer / SDET (Python)",
      company: "Mindtree / LTIMindtree Ltd",
      period: "May 2022 – Sep 2024",
      summary:
        "Architected Python automation frameworks, API/SQL verification suites, and CI quality gates for a real-time operational logistics platform.",
      impacts: ["90%+ code coverage", "50% faster bug detection", "Shipped 1 week early"],
      highlights: [
        "Built modular regression and integration test suites from scratch using Python, pytest, and unittest, scaling microservices coverage past 90%.",
        "Verified Django and Flask REST APIs for payload integrity, status codes, and secure JWT/OAuth2 authentication flows.",
        "Wrote optimized MySQL and PostgreSQL queries for backend data validation, pipeline verification, and schema integrity.",
        "Used Python logging and telemetry benchmarks to isolate bottlenecks, cutting production bug detection time by 50%.",
        "Wired automated suites and SonarQube quality gates into Azure DevOps release pipelines, helping ship the logistics platform 1 week ahead of schedule."
      ],
      tags: ["Python", "Pytest", "Unittest", "Django", "Flask", "PostgreSQL", "MySQL", "Azure DevOps", "SonarQube"]
    }
  ],

  skillGroups: [
    {
      group: "GenAI & Agents",
      accent: "sakura",
      skills: ["LangGraph", "CrewAI", "RAG", "Prompt Engineering", "Pinecone", "FAISS", "AWS SageMaker"]
    },
    {
      group: "Backend & APIs",
      accent: "violet",
      skills: ["Python", "FastAPI", "Django", "Django REST Framework", "Flask", "WebSockets"]
    },
    {
      group: "Frontend",
      accent: "sunset",
      skills: ["React.js", "JavaScript", "HTML5 / CSS3"]
    },
    {
      group: "Cloud, DevOps & QA",
      accent: "mint",
      skills: ["AWS", "Docker", "Kubernetes", "Azure DevOps", "Jenkins", "SonarQube", "Pytest", "Unittest", "Git"]
    },
    {
      group: "Databases",
      accent: "sky",
      skills: ["PostgreSQL", "MySQL"]
    }
  ],

  education: [
    {
      degree: "M.Tech in Data Science & Artificial Intelligence",
      institution: "PES University, Bengaluru",
      period: "Apr 2025 – Present"
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "Dayananda Sagar University",
      period: "Jun 2018 – May 2022"
    }
  ],

  certifications: [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
    { name: "GitHub Fundamentals", issuer: "GitHub" },
    { name: "AI for Networking", issuer: "Cisco" },
    { name: "Claude Associate", issuer: "Anthropic" }
  ]
};
