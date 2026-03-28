import renewableEnergyApp from "../assets/jpeg/Renewable_energy_app.png";
import fakeNewsPrediction from "../assets/jpeg/Fake_news_prediction.png";
import nhlLeaderboardStats from "../assets/jpeg/NHL_Leaderboard_Stats.png";
import eventSearchApp from "../assets/jpeg/Event_Search_App.jpg";
import slotBooking from "../assets/jpeg/Slot-booking.png";

export const profile = {
  name: "Sai Kumar Reddy Kasarla",
  title: "AI Software Engineer",
  location: "New York, NY",
  email: "saikumarreddy1767@gmail.com",
  phone: "+1 (213) 373-0662",
  resumeHref: "/Sai-Kumar-Reddy-Kasarla-Resume.pdf",
  intro:
    "I am a full stack engineer building AI-enabled workflows, low-latency APIs, and data-intensive products across finance, SaaS, and enterprise software.",
  summary:
    "My background spans Java, React, Python, SQL, distributed systems, observability, and LLM-integrated product work, with a focus on turning complex requirements into reliable software that teams can ship and trust.",
  availability:
    "Currently based in New York City and targeting applied AI, AI product engineering, and AI-platform-oriented software roles across United States (Open to relocation).",
  stats: [
    { value: "4+", label: "Years shipping production software" },
    { value: "40%", label: "Manual triage reduced in risk workflows" },
    { value: "35%", label: "Faster reporting turnaround via automation" },
    { value: "100ms", label: "Latency target for critical APIs" },
  ],
  spotlight: [
    "Applied AI and LLM-enabled workflows",
    "Distributed systems and REST APIs",
    "Observability, validation, and CI/CD",
    "Prototype-to-production full-stack delivery",
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saikumarkasarla",
    },
    {
      label: "GitHub",
      href: "https://github.com/saikumar1767",
    },
    {
      label: "Email",
      href: "mailto:saikumarreddy1767@gmail.com",
    },
  ],
};

export const skills = [
  "Java",
  "Python",
  "React",
  "TypeScript",
  "SQL",
  "Spring Boot",
  "REST APIs",
  "Distributed Systems",
  "Microservices",
  "Apache Spark",
  "Kafka",
  "Snowflake",
  "AWS",
  "Docker",
  "Kubernetes",
  "LLM Integrations",
  "Applied NLP",
  "Datadog",
  "Grafana",
  "Splunk",
  "Azure DevOps",
  "Jenkins",
];

export const aiPositioning = {
  eyebrow: "Applied AI fit",
  title: "What I bring to modern AI teams",
  description:
    "Current AI engineering roles increasingly reward engineers who can prototype quickly, productionize responsibly, work across the stack, and keep systems observable. My experience maps best where AI products meet real software engineering.",
  targetRoles: [
    "Applied AI Engineer",
    "AI Product Engineer",
    "Software Engineer, AI",
    "AI Infrastructure / Platform Engineer",
  ],
  pillars: [
    {
      title: "AI-Enabled Workflow Delivery",
      text: "I have worked on automation-heavy systems where ambiguous signals need to become clear actions, and I have built LLM-integrated product experiences in project work.",
      points: [
        "Automation and internal risk workflows at ExodusPoint",
        "LLM-integrated summaries in Renewable Energy Analytics",
        "Applied NLP background through coursework and ML projects",
      ],
    },
    {
      title: "Production Systems Thinking",
      text: "AI teams still need engineers who can make the surrounding systems fast, dependable, and scalable once the model is in the loop.",
      points: [
        "Sub-100ms REST APIs for critical internal services",
        "50% faster analytics processing on large SQL workloads",
        "Spark, distributed systems, and backend performance tuning",
      ],
    },
    {
      title: "Full-Stack Product Execution",
      text: "I can contribute beyond backend infrastructure by shipping interfaces, integrations, and workflows that make AI features usable for real users.",
      points: [
        "React and TypeScript product surfaces",
        "Web, mobile, and backend delivery at TurboHire",
        "Python, Flask, and SwiftUI project experience",
      ],
    },
    {
      title: "Reliability, Tooling, and Iteration",
      text: "Strong AI products depend on validation, observability, and repeatable engineering workflows, not just model quality.",
      points: [
        "Python automation with validation checks",
        "Observability using Datadog, Grafana, and Splunk",
        "CI/CD and release discipline across product teams",
      ],
    },
  ],
};

export const experienceData = [
  {
    company: "ExodusPoint Capital Management",
    role: "Full Stack Engineer",
    duration: "Aug 2024 - Present",
    status: "current",
    label: "Now",
    description:
      "Designing and shipping AI-enabled risk workflows, automation, and internal services that help convert noisy signals into clear, actionable alerts.",
    highlights: [
      "Reduced manual triage by 40% and improved response time by 25% through automation and clearer routing logic.",
      "Optimized SQL queries and stored procedures over multi-million-row datasets, cutting processing time by 50%.",
      "Built Python automation for analytics and reporting, improving turnaround by 35% with repeatable validation checks.",
      "Delivered low-latency REST APIs for internal risk services and achieved sub-100ms performance on critical endpoints.",
    ],
    technologies: [
      "Java",
      "Python",
      "React",
      "AWS",
      "SQL",
      "CI/CD",
      "Distributed Systems",
      "Observability",
      "REST APIs",
    ],
    focus:
      "Applied AI-adjacent internal platforms for risk workflows, with a focus on latency, run stability, validation, and operational clarity.",
  },
  {
    company: "TurboHire",
    role: "Founding Full Stack Developer",
    duration: "Apr 2021 - Jun 2022",
    status: "past",
    label: "Scale",
    description:
      "Owned end-to-end delivery across web, mobile, and backend services for a recruiting SaaS product, partnering closely with product and engineering teams to ship quickly and reliably.",
    highlights: [
      "Shipped core workflows such as candidate cards and the offer-letter flow across product surfaces.",
      "Improved UI code efficiency by 40% and reduced recurring defects through refactoring and stronger contracts.",
      "Improved release quality using structured code reviews, CI pipelines, and disciplined delivery through Azure DevOps.",
      "Mentored and coordinated 4 engineers through task breakdown, code reviews, and cleaner handoffs.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Java",
      "React Native",
      "Oracle SQL",
      "Docker",
      "Azure DevOps",
      "CI/CD",
    ],
    focus:
      "Fast-moving SaaS delivery across frontend, backend, mobile, release process, and team coordination.",
  },
  {
    company: "OpenText Technologies",
    role: "Software Engineer",
    duration: "Oct 2019 - Apr 2021",
    status: "past",
    label: "Foundation",
    description:
      "Built backend microservices for an enterprise BI reporting platform using Java, Scala, Spark, and SQL-backed analytics processing.",
    highlights: [
      "Optimized Spark jobs and query patterns to reduce average API response time by 65%.",
      "Improved throughput and user experience for reporting endpoints used in analytics-heavy workflows.",
      "Built experience in scalable services, distributed processing, and enterprise reporting systems.",
    ],
    technologies: [
      "Java",
      "Scala",
      "Spark",
      "Microservices",
      "SQL",
      "Angular",
      "OT Cloud",
    ],
    focus:
      "Strong backend and data-processing fundamentals shaped by large-scale enterprise analytics systems.",
  },
];

export const educationData = [
  {
    institution: "University of Southern California",
    degree: "Master of Science in Computer Science",
    gradYear: "May 2024",
    description:
      "CGPA 3.9/4.0. Coursework included operating systems, DBMS, machine learning, applied NLP, and web/mobile app development.",
  },
  {
    institution: "Jawaharlal Nehru Technological University, Hyderabad",
    degree: "Bachelor of Technology in Computer Science",
    gradYear: "Aug 2020",
    description:
      "Built a strong foundation in algorithms, software engineering, databases, and systems design.",
  },
];

export const projects = [
  {
    title: "Renewable Energy Analytics",
    category: "React + Python",
    year: "Oct 2025",
    description:
      "Built a React web app to visualize energy consumption and generation trends, with OAuth 2.0 authentication, ingestion workflows, and LLM-powered summaries for better interpretability.",
    image: renewableEnergyApp,
    href: "https://github.com/saikumar1767/RenewableEnergyAnalytics",
    tags: ["React", "Python", "OAuth 2.0", "Data Pipelines", "LLM Integrations"],
  },
  {
    title: "Fake News Detection System",
    category: "Applied NLP",
    year: "ML + Evaluation",
    description:
      "Built and evaluated an NLP classification pipeline across logistic regression, SVM, Naive Bayes, and Perceptron models, reaching 90% accuracy with logistic regression.",
    image: fakeNewsPrediction,
    href: "https://github.com/saikumar1767",
    tags: ["Applied NLP", "Classification", "Model Evaluation"],
  },
  {
    title: "Event Search Web and iOS App",
    category: "Python + SwiftUI",
    year: "Apr 2025",
    description:
      "Built REST APIs in Python and Flask, connected web and iOS clients, rendered search results into card and list views, and deployed the system on GCP with pagination, caching, and stronger error handling.",
    image: eventSearchApp,
    href: "https://github.com/saikumar1767",
    tags: ["Python", "Flask", "SwiftUI", "REST APIs", "GCP"],
  },
  {
    title: "NHL Leaderboard Stats",
    category: "Interactive Dashboard",
    year: "Highcharts + Data UI",
    description:
      "Built an interactive stats dashboard for NHL team data with sortable tables, filtering, pagination, and richer chart-based exploration for team-level performance.",
    image: nhlLeaderboardStats,
    href: "https://github.com/saikumar1767/NHL-Leaderboard-Stats",
    tags: ["Highcharts", "Data Visualization", "Tables", "Frontend"],
  },
  {
    title: "Slot Booking Application",
    category: "Scheduling Product",
    year: "Full Stack",
    description:
      "Built a scheduling workflow that makes appointment booking easier by reducing the usual back-and-forth email coordination needed to find a suitable time.",
    image: slotBooking,
    href: "https://github.com/saikumar1767/Slot-Booking",
    tags: ["Scheduling", "Product Workflow", "Full Stack"],
  },
];
