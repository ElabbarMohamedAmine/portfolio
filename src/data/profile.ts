// Site content. Every value here is real and verifiable — identity, the
// SOMAPORT repository, internship records, and completed courses.
// Add facts only when you can point to where they came from.

export const profile = {
  name: "Mohamed Amine El Abbar",
  shortName: "M.A. El Abbar",
  location: "Casablanca, Morocco",
  email: "mohamed.amine.elabbar01@gmail.com",
  github: {
    label: "@ElabbarMohamedAmine",
    url: "https://github.com/ElabbarMohamedAmine",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mohamed-amine-el-abbar/",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Learning", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Casablanca, Morocco · Second-year DUT student",
  headline: "Data, Software & Decision Intelligence",
  support:
    "Studying Decision-Making Computing and Statistics at EST Fkih Ben Salah. I learn by building — databases, backend services, APIs, analytics and interfaces. Currently working on SOMAPORT, a terminal operating system for port operations.",
  institution: "EST Fkih Ben Salah — Diplôme Universitaire de Technologie",
};

export const about = {
  paragraphs: [
    "I'm a second-year DUT student in Decision-Making Computing and Statistics (Informatique Décisionnelle et Statistiques) at EST Fkih Ben Salah, working where data, software and decision-making meet.",
    "I learn primarily by building — across databases, backend systems, APIs, data analytics and user-facing applications. The projects that teach me most are the ones with a real schema behind them and someone at the other end of the interface.",
    "My main technical project is SOMAPORT, a terminal operating system developed during my internship at SOMAPORT SA. It connects SQL Server, ASP.NET Core, React and Power BI to structure and visualize port-terminal operations.",
    "I'm also developing FIRELINE, a decision intelligence platform exploring how weather, environmental, satellite and historical data can be turned into explainable wildfire risk insights.",
    "I'm still early in my journey. I don't claim expertise I don't have. I focus on building real systems, strengthening my foundations and taking on increasingly complex problems.",
  ],
};

export const education = {
  institution: "Ecole Supérieure de Technologie — Fkih Ben Salah",
  degree: "Diplôme Universitaire de Technologie (DUT)",
  program: "Informatique Décisionnelle et Statistiques",
  period: "September 2025 — Present",
  status: "Second year",
  areas: [
    "Decision Support Systems",
    "Data Analytics",
    "Statistics",
    "Business Intelligence",
    "Databases",
    "Software Development",
    "Big Data",
    "Artificial Intelligence",
  ],
};

export type ExperienceItem = {
  org: string;
  role: string;
  roleAlt: string;
  location: string;
  period: string;
  points: string[];
  /** Rendered with less visual weight — kept below the technical internship. */
  secondary?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    org: "SOMAPORT SA",
    role: "IT Intern",
    roleAlt: "Stagiaire en informatique",
    location: "Casablanca, Morocco",
    period: "July 2026 · 1 month",
    points: [
      "Contributed to the design and development of SOMAPORT, a terminal operating system for port operations, combining SQL Server, ASP.NET Core, React/TypeScript and Power BI.",
      "Worked across data modelling, backend services, REST APIs, frontend interfaces and operational data visualization.",
    ],
  },
  {
    org: "Venture Starters",
    role: "Startup & Venture Capital Intern",
    roleAlt: "Stagiaire",
    location: "Remote",
    period: "Educational internship",
    secondary: true,
    points: [
      "Participated in startup pitch sessions and gained exposure to fundraising, venture capital, angel investing and the startup ecosystem.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  /** Stacked, already-formatted metadata lines. Never join these without a separator. */
  meta: string[];
  summary: string;
  pipeline?: string[];
  sections: { label: string; body: string }[];
  areas?: string[];
  repoUrl?: string;
  /** Renders meta as a small bordered status chip instead of plain stacked lines. */
  badge?: boolean;
  /** The lead project gets the larger editorial treatment. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SOMAPORT",
    subtitle: "Terminal Operating System",
    featured: true,
    meta: ["SOMAPORT SA · Internship", "July 2026 · Casablanca, Morocco"],
    summary:
      "A terminal operating system for container-port operations, designed to structure operational data and provide a unified interface for managing and visualizing ships, voyages, containers and terminal activity.",
    pipeline: ["SQL Server", "ASP.NET Core 8", "REST API", "React 18 + Vite", "Power BI"],
    repoUrl: "https://github.com/ElabbarMohamedAmine/SOMAPORT",
    sections: [
      {
        label: "Context",
        body: "Container-terminal operations involve ships, voyages, containers and continuous yard activity. SOMAPORT was designed during my internship at SOMAPORT SA to structure that operational data and give it a unified interface covering ships, voyages, containers and terminal activity.",
      },
      {
        label: "System",
        body: "A layered ASP.NET Core 8 backend — Domain, Data, Services, API — exposing secured REST controllers consumed by a React 18 frontend, with Power BI reading the prepared SQL views for operational reporting.",
      },
      {
        label: "Engineering",
        body: "C# on ASP.NET Core 8 with layered architecture, the Repository Pattern, an application DbContext configured through the Fluent API, DTOs mapped with AutoMapper, JWT authentication, REST controllers and Swagger.",
      },
      {
        label: "Data",
        body: "Microsoft SQL Server across 8 schemas and 20+ tables, with foreign keys, stored procedures, SQL views, indexes and seed data. 16 C# domain entities map one-to-one onto those tables.",
      },
      {
        label: "Interface",
        body: "React 18 and Vite, with Axios and a JWT interceptor, an AuthContext and protected routing. Four data pages are connected to the API — Dashboard, Ships, Voyages, Containers — behind a Login page.",
      },
      {
        label: "Where it stands",
        body: "A solid implemented foundation, not a finished product. Complete SQL schema, domain entities, DbContext, generic repository, business services, DTOs and AutoMapper profiles, four JWT-secured controllers, and a frontend whose production build passes. Still ahead: remaining entities (RFID, GPS, trucks, truck movements, audit log), additional pages, EF Core migrations, and building the Power BI report in Power BI Desktop from the views already prepared.",
      },
    ],
  },
  {
    title: "FIRELINE",
    subtitle: "An Integrated Wildfire Risk & Decision Intelligence Platform",
    meta: ["In development · Data & decision intelligence"],
    badge: true,
    summary:
      "A data and decision intelligence platform exploring how weather, fuel, satellite and historical fire data can be combined to model wildfire risk and support explainable, simulation-tested decisions.",
    areas: [
      "Data Engineering",
      "Data Analytics",
      "AI / Machine Learning",
      "Risk Modeling",
      "Geospatial Data",
      "Decision Intelligence",
      "Simulation",
    ],
    sections: [
      {
        label: "Why",
        body: "Wildfire decisions are made with uncertainty, and an opaque score is hard to act on. FIRELINE is an attempt to keep a risk signal interpretable — to show the factors behind it rather than return a number nobody can question.",
      },
      {
        label: "Scope",
        body: "Bringing weather, fuel, satellite and historical fire data into one model of wildfire risk, and using it to test decisions rather than just describe conditions.",
      },
      {
        label: "Status",
        body: "In development. Nothing here is finished, deployed or measured yet — this is the direction I'm working towards, not a result. I add no accuracy figures or findings until there are real ones.",
      },
    ],
  },
];

export const stack: { category: string; items: string[]; note?: string }[] = [
  {
    category: "Programming",
    items: ["Python", "C#", "TypeScript", "JavaScript", "C++"],
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "Statistics", "Data Analytics", "Data Visualization"],
  },
  {
    category: "Business Intelligence",
    items: ["Power BI", "DAX", "Dimensional Modeling"],
  },
  {
    category: "Databases",
    items: ["Microsoft SQL Server"],
  },
  {
    category: "Web & Software",
    items: ["React", "ASP.NET Core", "REST APIs", "Vite"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Exploring",
    items: [
      "Machine Learning",
      "AI",
      "Decision Intelligence",
      "Geospatial & Environmental Data",
    ],
    note: "Where my attention is going next — early, and not expertise yet.",
  },
];

export const certifications: {
  category: string;
  items: { title: string; issuer: string; date?: string }[];
}[] = [
  {
    category: "Data & AI",
    items: [
      {
        title: "Data Analytics Essentials",
        issuer: "Cisco Networking Academy",
        date: "September 2026",
      },
      {
        title: "Data Science Essentials with Python",
        issuer: "Cisco Networking Academy",
        date: "September 2026",
      },
      {
        title: "Introduction to Data Science",
        issuer: "Cisco Networking Academy",
        date: "August 2025",
      },
      {
        title: "Python Essentials 1",
        issuer: "Cisco Networking Academy",
        date: "August 2025",
      },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      {
        title: "Ethical Hacker",
        issuer: "Cisco Networking Academy",
        date: "September 2025",
      },
      {
        title: "Cyber Threat Management",
        issuer: "Cisco Networking Academy",
        date: "September 2025",
      },
      {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "August 2025",
      },
    ],
  },
  {
    category: "IT & Web",
    items: [
      {
        title: "HTML Essentials",
        issuer: "Cisco Networking Academy",
        date: "September 2025",
      },
      {
        title: "English for IT 1",
        issuer: "Cisco Networking Academy",
        date: "August 2025",
      },
      {
        title: "Digital Awareness",
        issuer: "Cisco Networking Academy",
        date: "August 2025",
      },
    ],
  },
  {
    category: "Entrepreneurship",
    items: [
      {
        title: "Discovering Entrepreneurship",
        issuer: "Cisco Networking Academy",
        date: "August 2025",
      },
    ],
  },
  {
    category: "IBM SkillsBuild",
    items: [
      {
        title: "Supercharge Your Data Analytics with Generative AI",
        issuer: "IBM SkillsBuild — learning badge",
      },
    ],
  },
];
