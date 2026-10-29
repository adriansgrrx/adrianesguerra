export const profileData = {
  brandName: "ai-drian",
  fullName: "Adrian Esguerra",
  firstName: "Adrian",
  lastName: "Esguerra",
  roleTitle: "Computer Engineer",
  shortBio:
    "Computer Engineer from PUP Manila with specialization in Big Data",
  hero: {
    greeting: "Hi, I'm",
    tagline:
      "MDA @Vertiv | Ex-General Motors PH | AI Enthusiast | Computer Engineer | LSSYB Trained",
    callToActionHighlight: "Let's solve real-world problems together.",
    avatar: "/avatar.jpg",
    logo: "/brand-icon.png",
    badges: [
      {
        id: "cpe",
        label: "CpE Graduate (PUP Manila)",
        icon: "Cpu",
        variant: "default",
      },
      {
        id: "gwa",
        label: "GWA: 1.42",
        icon: "Award",
        variant: "default",
      },
      {
        id: "status",
        label: "Open to opportunities",
        icon: "Briefcase",
        variant: "status",
      },
    ],
    stats: [
      {
        id: "award",
        value: "AppCon '24",
        label: "Most Creative Award",
        detail: "National Tech Winner",
        icon: "Award",
        targetSection: "achievements",
        accent: "#a8c7fa",
      },
      {
        id: "vertiv-award",
        value: "2 Spotlight Awards",
        label: "Ivy: MDM GenAI Chat Agent",
        detail: "CI & Innovation Award",
        icon: "Award",
        targetSection: "projects",
        accent: "#a8c7fa",
      },
      {
        id: "projects",
        value: "5 Projects",
        label: "Featured Works",
        detail: "AI, Web & Mobile",
        icon: "Code2",
        targetSection: "projects",
        accent: "#d0bcff",
      },
    ],
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Request CV",
      href: "#contact",
      contactMode: "cv",
    },
  },
  about: {
    heading: "About",
    headingHighlight: "Me",
    subtitle: "Computer Engineer • PUP Manila",
    paragraphs: [
      "Computer Engineering graduate with specialization in Big Data from the Polytechnic University of the Philippines (PUP Manila)",
      "Professional experience spanning master data administration and GenAI chat agent development at Vertiv, server analytics and Python/KNIME automation at General Motors, and production mobile app development in Flutter at 8Box Solutions.",
      "One of the developers of SnapTrash (Most Creative Award at AppCon 2024), a YOLOv8-based computer vision defect detection thesis achieving 83% mAP, and data-driven disaster risk analytics for urban flooding in Mandaue City.",
    ],
    highlights: [
      "BS Computer Engineering (Specialization in Big Data)",
      "Polytechnic University of the Philippines (PUP Manila)",
      "GWA: 1.42",
    ],
    pillars: [
      {
        id: "ai-cv",
        title: "Computer Vision & AI",
        description:
          "Developing YOLOv8 models, defect detection systems (83% mAP), and GenAI chat agents using prompt engineering and cloud AI services.",
        icon: "Brain",
      },
      {
        id: "big-data",
        title: "Big Data & Analytics",
        description:
          "Building automated workflows and statistical analysis using PySpark, KNIME, Python, Pandas, Tableau, and Power BI.",
        icon: "Database",
      },
      {
        id: "app-web",
        title: "Mobile & Web Development",
        description:
          "Building production mobile apps with Flutter and native Android (Kotlin), along with full-stack web applications using React, TailwindCSS, and Node.js.",
        icon: "Code",
      },
    ],
  },
  contact: {
    heading: "Drop me a message",
    subheading:
      "Excited to bring my skills to a forward-thinking team and open to opportunities in AI, data analytics, and software engineering.",
    email: "adrianr.esguerra@gmail.com",
    phone: "(+63) 938 557 9510",
    phoneHref: "tel:+639385579510",
    availabilityHours: "Available Mon-Fri, 8AM-6PM",
    location: "Maya St., Taguig City, 1208",
    workPreference: "Open to on-site, hybrid, and remote opportunities",
    availabilityStatus: "Available for opportunities",
    cvPath: "/cv/Esguerra_CV.pdf",
  },
  socials: [
    {
      id: "github",
      name: "GitHub",
      label: "adriansgrrx",
      href: "https://github.com/adriansgrrx",
      icon: "Github",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      label: "Adrian Esguerra",
      href: "https://www.linkedin.com/in/adrian-esguerra-44a899189/",
      icon: "Linkedin",
    },
    {
      id: "website",
      name: "Portfolio",
      label: "ai-drian.vercel.app",
      href: "https://ai-drian.vercel.app",
      icon: "Globe",
    },
    {
      id: "email",
      name: "Email",
      label: "adrianr.esguerra@gmail.com",
      href: "mailto:adrianr.esguerra@gmail.com",
      icon: "Mail",
    },
  ],
  techFocus: [
    "Computer Vision & AI",
    "Big Data Analytics",
    "Mobile Development (Flutter)",
    "Web Development (React / Node.js)",
  ],
  seo: {
    title: "Adrian R. Esguerra",
    description:
      "Computer engineering graduate from PUP Manila specializing in Big Data Analytics, Edge AI, and software systems.",
    url: "https://ai-drian.vercel.app/",
    ogImage: "https://ai-drian.vercel.app/brand-icon.png",
    twitterImage: "https://ai-drian.vercel.app/brand-icon.png",
  },
};

export const projectsData = [
  {
    id: 1,
    slug: "snaptrash",
    title: "SnapTrash",
    subtitle: "Empowering citizens for cleaner cities",
    awardBadge: "AppCon '24 Most Creative Award",
    role: "AI Developer / UI/UX Designer / Frontend Developer",
    description:
      "AI-powered waste detection mobile app featuring real-time YOLOv8 classification and geolocation mapping, awarded Most Creative at AppCon 2024.",
    image: "/Featured/SnapTrash/snaptrash-main.png",
    tags: ["Flutter", "Dart", "YOLOv8", "Roboflow", "Mapbox API", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    isGithubPrivate: true,
    type: "Mobile App",
    date: "Nov 2024 – Apr 2025",
    featured: true,
    expandedDescription:
      "Developed a mobile application for AI-powered waste detection with real-time classification and geolocation. Built a custom object detection model using YOLOv8 with a cross-functional team, winning Most Creative Award at AppCon 2024 by OTis Philippines, Inc.",
    details: [
      "Developed a mobile application for AI-powered waste detection with real-time classification and geolocation",
      "Built a custom object detection model using YOLOv8 with a cross-functional team, showcasing teamwork",
      "Won Most Creative Award at AppCon 2024, a national tech innovation competition by OTis Philippines, Inc.",
      "Integrated Mapbox API for geolocation mapping and environmental tracking with a Flutter frontend",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "YOLOv8",
      "Roboflow",
      "Firebase",
      "Mapbox API",
    ],
    stats: [
      { label: "Recognition", value: "AppCon '24 Winner" },
      { label: "Model", value: "YOLOv8 Vision" },
      { label: "Mapping", value: "Mapbox Telemetry" },
    ],
    images: [
      "/Featured/SnapTrash/snaptrash-main.png",
      "/Featured/SnapTrash/snaptrash-feat-1.png",
      "/Featured/SnapTrash/snaptrash-feat-2.png",
      "/Featured/SnapTrash/snaptrash-feat-3.png",
      "/Featured/SnapTrash/snaptrash-feat-4.png",
      "/Featured/SnapTrash/snaptrash-cert.png",
      "/Featured/SnapTrash/snaptrash-award.png",
      "/Featured/SnapTrash/snaptrash-grp.png",
    ],
  },
  {
    id: 12,
    slug: "langnote",
    title: "LangNote",
    subtitle: "Personal Notebook Web App",
    awardBadge: "",
    role: "Fullstack Developer",
    description:
      "A clean, minimalist personal notebook web application designed for creating, organizing, and managing personal notes with secure user authentication.",
    image: "/Featured/LangNote/langnote-main.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
    demoUrl: "https://www.mylangnote.me/",
    githubUrl: "https://github.com/adriansgrrx/LangNote",
    isGithubPrivate: false,
    type: "Web App",
    date: "Jan 2025 – Present",
    featured: true,
    expandedDescription:
      "Architected and built LangNote, a responsive fullstack personal notebook application. Implemented core note-taking capabilities including note creation, editing, and deletion, along with user account registration and authentication to manage and store personal notes securely.",
    details: [
      "Developed a responsive personal notebook web application for capturing and organizing notes",
      "Implemented user authentication allowing users to create accounts, log in, and securely manage notes",
      "Engineered complete CRUD functionality for creating, viewing, updating, and deleting note entries",
      "Designed an intuitive, minimalist user interface with responsive layouts using TailwindCSS",
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "TailwindCSS", "JavaScript"
    ],
    stats: [
      { label: "Category", value: "Productivity" },
      { label: "Architecture", value: "MERN Stack" },
      { label: "Platform", value: "Web Application" },
    ],
  },
  {
    id: 2,
    slug: "as3ds-sorting-defect-detection",
    title: "Undergraduate Thesis: AS3Ds Automation",
    subtitle: "Automated Sorting & Defect Detection of Electronic Components",
    awardBadge: "Undergraduate Thesis • 83% mAP",
    role: "AI Developer / Python Programmer / Circuit & Wiring Lead",
    description:
      "YOLOv8-based computer vision system achieving 83% mAP in sorting electronic components and detecting defects with Arduino and edge accelerators.",
    image: "/Featured/AS3D/AS3D-2.png",
    tags: ["Python", "YOLOv8", "OpenCV", "Roboflow", "Arduino Boards", "Raspberry Pi", "Google USB Coral"],
    demoUrl: "#",
    githubUrl: "https://github.com/adriansgrrx/EcompDetection",
    isGithubPrivate: false,
    type: "AI System",
    date: "A.Y. 2024 - 2025",
    featured: true,
    expandedDescription:
      "Designed and tested a YOLOv8-based computer vision system achieving 83% mean Average Precision (mAP) in detecting resistors, LEDs, BJTs, capacitors, and visual defects for PUP CPE Laboratory with Arduino hardware sorting and edge deployment.",
    details: [
      "Designed and tested a YOLOv8-based computer vision system achieving 83% mean Average Precision (mAP) in detecting resistors, LEDs, BJTs, capacitors, and visual defects",
      "Curated and preprocessed datasets of over 17,000 images to enhance data quality, ensuring accurate model training and validation",
      "Integrated Arduino-controlled hardware with servo motors and conveyor mechanics for automated sorting",
      "Deployed on Raspberry Pi and Google USB Coral for efficient edge computing performance",
      "Coordinated with a team, applying project management practices to ensure effective collaboration",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Roboflow",
      "Arduino Boards",
      "Raspberry Pi",
      "Google USB Coral",
      "ESP32",
    ],
    stats: [
      { label: "Precision", value: "83% mAP" },
      { label: "Dataset Size", value: "17,000+ Images" },
      { label: "Hardware", value: "Arduino + Pi" },
    ],
    images: [],
  },
  {
    id: 3,
    slug: "pup-moa-monitoring-system",
    title: "PUP MOA Monitoring System",
    subtitle: "Enterprise Document Governance",
    awardBadge: "Institutional Project",
    role: "UI/UX Designer",
    description:
      "Designed the UI for a full-stack MOA management web app focused on usability and administrative workflow efficiency at PUP Manila.",
    image: "/Featured/PUP-MOA/MOA-4.png",
    tags: ["Figma", "UI/UX", "React", "TailwindCSS", "Node.js", "Azure Blob Storage", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
    isGithubPrivate: true,
    type: "Web App",
    date: "Mar 2025",
    featured: true,
    expandedDescription:
      "Designed the UI for a full-stack MOA management web app focused on usability and workflow efficiency. Worked with a team of 8 using ReactJS, TailwindCSS, NodeJS, MySQL (Azure), and Azure Blob Storage for document handling.",
    details: [
      "Designed the UI for a full-stack MOA management web app focused on usability and workflow efficiency",
      "Worked with a team of 8 using ReactJS, TailwindCSS, NodeJS, MySQL (Azure), and Azure Blob Storage for document handling",
      "Established comprehensive Figma prototypes and user journey testing for institutional administrators",
      "Streamlined institutional agreement tracking, status monitoring, and secure document governance",
    ],
    technologies: ["Figma", "React", "TailwindCSS", "Node.js", "MySQL (Azure)", "Azure Blob Storage"],
    stats: [
      { label: "Team Size", value: "8 Contributors" },
      { label: "Platform", value: "Azure + Web" },
      { label: "Role", value: "UI/UX Designer" },
    ],
    images: [
      "/Featured/PUP-MOA/MOA-1.png",
      "/Featured/PUP-MOA/MOA-2.png",
      "/Featured/PUP-MOA/MOA-3.png",
    ],
  },
  {
    id: 4,
    slug: "urban-flooding-eda-mandaue",
    title: "Exploratory Data Analysis of Urban Flooding in Mandaue City",
    subtitle: "Contributing Factors and Risks",
    awardBadge: "Big Data Research",
    role: "Data Analyst / Data Visualizer",
    description:
      "Big data study analyzing multi-year rainfall telemetry and K-Means Clustering on Kaggle datasets to uncover urban flood risk factors in Mandaue City.",
    image: "/Featured/EDA/EDA-main.png",
    tags: [
      "Python",
      "Apache Spark",
      "Pandas",
      "Tableau",
      "K-Means Clustering",
      "NumPy",
      "Matplotlib",
    ],
    demoUrl: "#",
    githubUrl: "#",
    isGithubPrivate: true,
    type: "Data Analysis",
    date: "Sep 2024",
    featured: true,
    expandedDescription:
      "Conducted data wrangling, statistical analysis, and visualization using Kaggle (Project CCHAIN) datasets to uncover contributing factors to urban flooding. Applied machine learning techniques, specifically K-Means Clustering, to identify and group barangay areas based on population risk and vulnerability.",
    details: [
      "Conducted data wrangling, statistical analysis, and visualization using Kaggle (Project CCHAIN) datasets to uncover contributing factors to urban flooding",
      "Applied machine learning techniques, specifically K-Means Clustering, to identify and group barangay areas based on population risk and vulnerability",
      "Produced evidence-based insights and interactive Tableau visualizations to support disaster risk reduction initiatives",
      "Processed distributed datasets using Apache Spark and Pandas pipelines",
    ],
    technologies: [
      "Python",
      "Apache Spark",
      "Pandas",
      "Tableau",
      "K-Means Clustering",
      "SQL",
      "NumPy",
      "Matplotlib",
    ],
    stats: [
      { label: "Framework", value: "Apache Spark" },
      { label: "Visuals", value: "Tableau Dashboards" },
      { label: "Technique", value: "K-Means Clustering" },
    ],
    images: [
      "/Featured/EDA/EDA-1.png",
      "/Featured/EDA/EDA-2.png",
      "/Featured/EDA/EDA-3.png",
      "/Featured/EDA/EDA-4.png",
      "/Featured/EDA/EDA-6.png",
      "/Featured/EDA/EDA-7.png",
    ],
  },
  {
    id: 5,
    slug: "gomommy-pregnancy-companion",
    title: "GoMommy",
    subtitle: "Pregnancy Companion Mobile App",
    awardBadge: "Native Android App",
    role: "UI/UX Designer / Frontend Developer",
    description:
      "Native Android companion app built in Kotlin to support mothers and expectant women with intuitive navigation and maternal health tracking.",
    image: "/Featured/GoMommy/gomommy-1.png",
    tags: ["Android Studio", "Kotlin", "XML", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/applife2023/GoMommy",
    isGithubPrivate: false,
    type: "Mobile App",
    date: "Jul 2023",
    featured: true,
    expandedDescription:
      "Developed the frontend of a mobile app in Android Studio using Kotlin, creating clean UI components and intuitive navigation to support mothers and expectant women.",
    details: [
      "Developed the frontend of a mobile app in Android Studio using Kotlin, creating clean UI components and intuitive navigation",
      "Designed and implemented interactive user interfaces tailored for mothers and expectant women",
      "Implemented pregnancy timeline tracking, milestones, and ovulation calendar logic",
      "Integrated Firebase for reliable user data handling and modern UI/UX principles",
    ],
    technologies: ["Android Studio", "Kotlin", "XML", "Firebase"],
    stats: [
      { label: "Platform", value: "Android Native" },
      { label: "Language", value: "Kotlin" },
      { label: "Backend", value: "Firebase Realtime" },
    ],
    images: [
      "/Featured/GoMommy/gomommy-2.png",
      "/Featured/GoMommy/gomommy-3.png",
    ],
  },
];

export const projectTypes = [
  "All",
  "Mobile App",
  "AI System",
  "Web App",
  "Data Analysis",
];

export const sectionsConfig = [
  {
    id: "overview",
    name: "Overview",
    href: "#overview",
    icon: "Sparkles",
    enabled: true,
    showInNavbar: true,
    showInFooter: false,
  },
  {
    id: "about",
    name: "About",
    href: "#about",
    icon: "User",
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
  },
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
    icon: "FolderGit2",
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
  },
  {
    id: "skills",
    name: "Skills",
    href: "#skills",
    icon: "Cpu",
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
  },
  {
    id: "experience",
    name: "Experience",
    href: "#experience",
    icon: "Briefcase",
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
  },
  {
    id: "achievements",
    name: "Credentials",
    href: "#achievements",
    icon: "Award",
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
    icon: "Mail",
    enabled: true,
    showInNavbar: true,
    showInFooter: true,
  },
];

export const skillCategories = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", proficiency: "Advanced" },
      { name: "JavaScript", proficiency: "Advanced" },
      { name: "Dart", proficiency: "Advanced" },
      { name: "Java", proficiency: "Intermediate" },
      { name: "C++", proficiency: "Intermediate" },
      { name: "Kotlin", proficiency: "Intermediate" },
      { name: "R", proficiency: "Beginner" },
    ],
  },
  {
    id: "computer-vision-ai",
    name: "Computer Vision & GenAI",
    icon: "Brain",
    skills: [
      { name: "YOLOv8", proficiency: "Intermediate" },
      { name: "OpenCV", proficiency: "Intermediate" },
      { name: "Prompt Engineering", proficiency: "Intermediate" },
      { name: "Chat Agents", proficiency: "Intermediate" },
      { name: "OpenAI API", proficiency: "Beginner" },
      { name: "OCI AI Services", proficiency: "Beginner" },
      { name: "LangChain.js", proficiency: "Beginner" },
      { name: "TensorFlow", proficiency: "Beginner" },
      { name: "PyTorch", proficiency: "Beginner" },
      { name: "Model Evaluation", proficiency: "Intermediate" },
    ],
  },
  {
    id: "big-data-analytics",
    name: "Big Data & Analytics",
    icon: "Database",
    skills: [
      { name: "PySpark", proficiency: "Intermediate" },
      { name: "Pandas", proficiency: "Intermediate" },
      { name: "KNIME", proficiency: "Intermediate" },
      { name: "Tableau", proficiency: "Intermediate" },
      { name: "Power BI", proficiency: "Intermediate" },
      { name: "PostgreSQL", proficiency: "Intermediate" },
      { name: "MySQL", proficiency: "Intermediate" },
      { name: "Matplotlib", proficiency: "Intermediate" },
      { name: "Excel", proficiency: "Intermediate" },
    ],
  },
  {
    id: "web-mobile-dev",
    name: "Web & Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", proficiency: "Advanced" },
      { name: "React.js", proficiency: "Intermediate" },
      { name: "HTML/CSS", proficiency: "Advanced" },
      { name: "TailwindCSS", proficiency: "Intermediate" },
      { name: "Node.js", proficiency: "Intermediate" },
      { name: "RESTful APIs", proficiency: "Intermediate" },
      { name: "Android Studio", proficiency: "Intermediate" },
      { name: "Express", proficiency: "Beginner" },
      { name: "MERN Stack", proficiency: "Intermediate" },
      { name: "PERN Stack", proficiency: "Intermediate" },
      { name: "shadcn", proficiency: "Intermediate" },
      { name: "MaterializeCSS", proficiency: "Intermediate" },
    ],
  },
  {
    id: "hardware-edge-ai",
    name: "Hardware & Edge AI",
    icon: "Cpu",
    skills: [
      { name: "Arduino Boards", proficiency: "Intermediate" },
      { name: "Raspberry Pi", proficiency: "Intermediate" },
      { name: "ESP32", proficiency: "Beginner" },
      { name: "Google USB Coral", proficiency: "Beginner" },
    ],
  },
  {
    id: "cloud-tools",
    name: "Cloud, Tools & Methodologies",
    icon: "FolderGit2",
    skills: [
      { name: "Git / GitHub", proficiency: "Advanced" },
      { name: "Figma (UI/UX)", proficiency: "Advanced" },
      { name: "Agile (Scrum)", proficiency: "Intermediate" },
      { name: "Azure (Blob & Web Services)", proficiency: "Intermediate" },
      { name: "OCI", proficiency: "Beginner" },
      { name: "Oracle EBS", proficiency: "Beginner" },
      { name: "CI/CD", proficiency: "Beginner" },
    ],
  },
];

export const proficiencyLevels = ["All", "Advanced", "Intermediate", "Beginner"];

export const experiencesData = [
  {
    id: "vertiv",
    company: "Vertiv",
    role: "Service Support Coordinator II (Master Data Administrator)",
    period: "Feb 2026 – Present",
    location: "Mandaluyong City",
    type: "Full-Time",
    description:
      "Handle creation, update, and maintenance of master data records within Vertiv’s “source of truth”, coordinating service timelines and developing GenAI process automations.",
    highlights: [
      "Coordinate with Field Service Engineers, Technicians, Order Entry, Contracts Team, etc. to ensure accurate service timelines and data alignment.",
      "Initiated “Ivy”, an AI-powered MDM Chat Agent, using Vertiv's GenAI platform as a team process improvement to streamline data management workflows, which later adopted by other teams to have their own.",
    ],
    tags: ["Master Data", "Vertiv GenAI", "Chat Agents", "Oracle EBS", "Data Alignment"],
  },
  {
    id: "general-motors",
    company: "General Motors Philippines, Inc.",
    role: "Server Analytics Intern",
    period: "Sep 2024 – Nov 2024",
    location: "BGC, Taguig",
    type: "Internship",
    description:
      "Built automated analytics and data extraction workflows in KNIME and Python while managing Power BI dashboards for server infrastructure operations.",
    highlights: [
      "Assisted the team to process internal analytics requests, supporting back-office tasks.",
      "Gained hands-on experience with Power BI dashboards (server and cloud platforms).",
      "Extended internship beyond 300 hours due to consistent performance and adaptability to new tools.",
    ],
    tags: ["KNIME", "Python", "Power BI", "Data Extraction", "Automation"],
  },
  {
    id: "8box-parttime",
    company: "8Box Solutions, Inc.",
    role: "Part-Time Flutter Developer",
    period: "Dec 2023 – Jul 2024",
    location: "Ortigas-Center, Pasig City",
    type: "Part-Time",
    description:
      "Contributed to the development of production mobile apps in Flutter, implementing API integrations and fixing bugs to improve reliability.",
    highlights: [
      "Worked closely with backend and design teams, ensuring features were delivered according to client requirements and project timelines.",
    ],
    tags: ["Flutter", "Dart", "RESTful APIs", "Mobile Development", "Agile"],
  },
  {
    id: "8box-intern",
    company: "8Box Solutions, Inc.",
    role: "Flutter Developer Intern",
    period: "Aug 2023 – Oct 2023",
    location: "Ortigas-Center, Pasig City",
    type: "Internship",
    description:
      "Designed and tested reusable frontend components in Flutter that supported faster development in later projects.",
    highlights: [
      "Participated in Agile sprints, regularly contributing to the completion of client deliverables.",
    ],
    tags: ["Flutter", "Dart", "Component Design", "UI/UX", "Agile (Scrum)"],
  },
  {
    id: "kumon",
    company: "Kumon Learning Center",
    role: "Part-Time Math Tutor & Checker",
    period: "Apr 2023 – Jul 2023",
    location: "Doña Aurora, Quezon City",
    type: "Part-Time",
    description:
      "Guided students in mastering fundamental math concepts through individualized support and encouragement.",
    highlights: [
      "Reviewed and corrected worksheets, helping students identify areas for improvement and build confidence in problem-solving.",
    ],
    tags: ["Mathematics", "Tutoring", "Mentorship", "Problem Solving"],
  },
];

export const achievementsData = [
  {
    id: "associate-data-engineer-sql",
    title: "Associate Data Engineer in SQL",
    description:
      "Professional certification validating SQL data manipulation, transformation, and relational pipeline fundamentals.",
    date: "Jul 2025",
    type: "Certification",
    issuer: "Datacamp",
    expandedDescription:
      "Certified by Datacamp in SQL for Data Engineering, demonstrating proficiency in relational database operations, table structuring, advanced joins, indexing, and data pipeline transformations.",
    details: [
      "Validated skills in SQL data querying, filtering, and aggregation.",
      "Applied relational schema design, primary and foreign key constraints.",
      "Performed multi-table joins, subqueries, and window functions for analytical workloads.",
      "Issued by Datacamp.",
    ],
    technologies: ["SQL", "PostgreSQL", "Data Engineering", "Datacamp"],
  },
  {
    id: "oci-ai-foundations-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    description:
      "Demonstrates foundational expertise in AI, ML, and Generative AI services on Oracle Cloud Infrastructure.",
    date: "Aug 2025 – Aug 2027",
    type: "Certification",
    issuer: "Oracle",
    expandedDescription:
      "Validates expertise in AI and ML fundamentals on Oracle Cloud Infrastructure, covering Generative AI architectures, LLMs, OCI AI services (vision, speech, language), and Vector Database integration.",
    details: [
      "Described the fundamentals of Generative AI, Large Language Models (LLMs), and their applications in modern computing.",
      "Differentiated between machine learning and deep learning architectures, including CNNs, RNNs, and LSTMs.",
      "Explored the Oracle AI stack covering infrastructure, data, machine learning, and AI services.",
      "Learned to leverage OCI AI Services, including OCI ML Services, OCI Generative AI, Oracle 23ai, and Oracle Select AI.",
      "Issued by Oracle (Valid: August 2025 – August 2027).",
    ],
    technologies: [
      "Oracle Cloud Infrastructure (OCI)",
      "OCI Generative AI",
      "Oracle 23ai Vector Database",
      "Machine Learning",
    ],
  },
  {
    id: "intro-ai-engineering",
    title: "Introduction to AI Engineering",
    description:
      "Comprehensive training on OpenAI APIs, prompt engineering, few-shot techniques, and AI safety practices.",
    date: "Aug 2025",
    type: "Certification",
    issuer: "Scrimba",
    expandedDescription:
      "Hands-on training covering OpenAI APIs, prompt engineering strategies, token optimization, DALL·E 3 integration, and responsible AI safety guidelines.",
    details: [
      "Learned AI engineering fundamentals and how to interact with OpenAI APIs.",
      "Practiced making API calls, managing tokens, and configuring temperature and penalties.",
      "Explored prompt engineering methods including few-shot prompting and system instructions.",
      "Issued by Scrimba.",
    ],
    technologies: ["OpenAI API", "Prompt Engineering", "JavaScript", "Scrimba"],
  },
  {
    id: "intro-langchain-js",
    title: "Learn LangChain.js",
    description:
      "Course on building AI applications using LangChain.js, Supabase vector storage, embeddings, and custom chains.",
    date: "Aug 2025",
    type: "Certification",
    issuer: "Scrimba",
    expandedDescription:
      "Hands-on course applying LangChain.js to develop retrieval-augmented workflows, Supabase vector embeddings, prompt templates, and modular RunnableSequences.",
    details: [
      "Explored app flow architecture for AI-powered applications.",
      "Implemented embeddings and vector search using Supabase.",
      "Structured modular prompt pipelines using RunnableSequence and RunnablePassthrough.",
      "Issued by Scrimba.",
    ],
    technologies: ["LangChain.js", "Supabase", "Embeddings", "JavaScript", "Scrimba"],
  },
  {
    id: "appcon-2024-most-creative",
    title: "AppCon 2024 – Most Creative Award",
    description:
      "Won Most Creative Award for SnapTrash, an AI-powered waste detection mobile app, in a national tech competition.",
    date: "Nov 2024 – Apr 2025",
    type: "Competition",
    issuer: "OTis Philippines, Inc.",
    expandedDescription:
      "Recognized with the Most Creative Award at AppCon 2024, a national tech innovation competition organized by OTis Philippines, Inc., for SnapTrash—an AI-powered waste detection mobile application with real-time YOLOv8 classification and geolocation.",
    details: [
      "Developed a mobile application for AI-powered waste detection with real-time classification and geolocation.",
      "Built a custom object detection model using YOLOv8 with a cross-functional team, showcasing teamwork.",
      "Won Most Creative Award at AppCon 2024, a national tech innovation competition by OTis Philippines, Inc.",
    ],
    technologies: ["Flutter", "Dart", "YOLOv8", "Roboflow", "Mapbox API", "Firebase"],
  },
  {
    id: "ccna-srwe",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    description:
      "Cisco-certified training covering network switching, IP routing, VLANs, and wireless LAN configuration.",
    date: "Jul 2024",
    type: "Certification",
    issuer: "Cisco",
    expandedDescription:
      "Deepened knowledge in network switching, IP routing protocols, VLANs, and wireless network setup. Gained practical experience configuring and troubleshooting small-to-medium networks with Cisco Packet Tracer.",
    details: [
      "Configured and troubleshot VLANs, inter-VLAN routing, and STP in switched networks.",
      "Implemented static routing and dynamic routing protocols.",
      "Configured secure wireless LAN controllers and access points.",
      "Issued by Cisco.",
    ],
    technologies: ["Cisco Packet Tracer", "Routing & Switching", "VLANs", "WLAN", "Cisco"],
  },
  {
    id: "analyzing-data-tableau",
    title: "Analyzing Data in Tableau",
    description:
      "Data visualization training in Tableau for executive reporting, calculations, and exploratory analysis.",
    date: "Jul 2024",
    type: "Certification",
    issuer: "Datacamp",
    expandedDescription:
      "Comprehensive training covering Tableau dashboard creation, calculated fields, statistical mapping, and interactive visual analytics for business intelligence.",
    details: [
      "Created interactive charts, dual-axis graphs, and geographic risk heatmaps.",
      "Built calculated fields, parameters, and table calculations.",
      "Structured executive dashboards communicating key operational metrics.",
      "Issued by Datacamp.",
    ],
    technologies: ["Tableau", "Data Visualization", "Business Intelligence", "Datacamp"],
  },
  {
    id: "tesda-ncii-cwd",
    title: "National Competency NCII | Creative Web Design",
    description:
      "National certificate validating technical competency in website design, HTML/CSS layouting, and responsiveness.",
    date: "May 2024",
    type: "Certification",
    issuer: "TESDA",
    expandedDescription:
      "A TESDA-accredited national certification validating competence in creative web design, semantic HTML/CSS, responsive UI layouting, and visual assets creation.",
    details: [
      "Demonstrated competency in HTML5/CSS3 layouting, responsiveness, and web standards.",
      "Built compliant web interfaces adhering to visual hierarchy principles.",
      "Passed official TESDA national competency assessment.",
      "Issued by TESDA.",
    ],
    technologies: ["HTML", "CSS", "MaterializeCSS", "JavaScript", "TESDA"],
  },
  {
    id: "data-manipulation-pandas",
    title: "Data Manipulation with Pandas",
    description:
      "Hands-on training in Python and Pandas for data wrangling, aggregation, and transformation.",
    date: "May 2024",
    type: "Certification",
    issuer: "Datacamp",
    expandedDescription:
      "Focused on practical Python data analysis with Pandas, covering data extraction, cleaning, indexing, group-by operations, and exploratory analysis.",
    details: [
      "Performed data cleansing, missing value imputation, and reshaping on complex datasets.",
      "Executed group-by aggregations, slicing, and statistical summaries.",
      "Applied techniques directly to real-world analytical research.",
      "Issued by Datacamp.",
    ],
    technologies: ["Python", "Pandas", "Data Wrangling", "Datacamp"],
  },
  {
    id: "big-data-pyspark",
    title: "Big Data Fundamentals with PySpark",
    description:
      "Technical training on distributed data processing and large-scale transformations with Apache Spark and Python.",
    date: "Apr 2024",
    type: "Certification",
    issuer: "Datacamp",
    expandedDescription:
      "Focused on big data architecture, distributed computation, and hands-on PySpark DataFrame operations on large datasets via Datacamp.",
    details: [
      "Learned RDDs and DataFrames for scalable distributed data processing in Apache Spark.",
      "Executed transformations, filtering, and actions on large data pipelines using PySpark.",
      "Combined Spark SQL with Python analytical scripts.",
      "Issued by Datacamp.",
    ],
    technologies: ["PySpark", "Apache Spark", "Python", "Big Data", "Datacamp"],
  },
  {
    id: "ccna-itn",
    title: "CCNA: Introduction to Networks",
    description:
      "Foundational networking certification covering IPv4/IPv6 architectures, Ethernet operations, and protocol stacks.",
    date: "Feb 2024",
    type: "Certification",
    issuer: "Cisco",
    expandedDescription:
      "Covered networking fundamentals, protocols, and devices under Cisco Networking Academy, including IP addressing schemes, subnetting, and switch/router initial configurations.",
    details: [
      "Configured switches and end devices to provide local and remote network access.",
      "Created IPv4 and IPv6 addressing schemes and verified connectivity.",
      "Analyzed OSI model layers and transport/network protocol behavior.",
      "Issued by Cisco.",
    ],
    technologies: ["Networking", "IPv4", "IPv6", "Cisco Packet Tracer", "Cisco"],
  },
  {
    id: "cyberph-vp-creatives",
    title: "CyberPH | VP for Creatives",
    description:
      "Oversees the organization’s creative direction and branding initiatives across digital platforms.",
    date: "Apr 2025 – Nov 2025",
    type: "Leadership",
    issuer: "CyberPH",
    expandedDescription:
      "Served as Vice President for Creatives at CyberPH, directing the visual branding strategy and ensuring visually cohesive, engaging promotional materials across digital platforms.",
    details: [
      "Oversees the organization’s creative direction and branding initiatives.",
      "Ensured visually cohesive and engaging materials across digital platforms.",
      "Coordinated with student leadership on promotional campaigns and tech initiatives.",
    ],
    technologies: ["Creative Direction", "Branding", "Figma", "Digital Media"],
  },
  {
    id: "pup-icpep-graphic-lead",
    title: "ICpEP.SE PUP Manila | Graphic Design Lead",
    description:
      "Led the creation of visual materials for student events and campaigns, ensuring consistent branding.",
    date: "Sep 2024 – Sep 2025",
    type: "Leadership",
    issuer: "ICpEP.SE PUP Manila",
    expandedDescription:
      "Led the visual design team for the Institute of Computer Engineers of the Philippines Student Edition (ICpEP.SE) – PUP Manila, producing materials for student campaigns and events.",
    details: [
      "Led the creation of visual materials for student events and campaigns, ensuring consistent branding and effective communication.",
      "Supervised graphic design team members on design consistency and deadlines.",
      "Designed event banners, social media announcements, and promotional collateral.",
    ],
    technologies: ["Graphic Design", "Branding", "Canva", "Adobe Photoshop"],
  },
  {
    id: "pup-cehs-creative-director",
    title: "PUP CEHS | Creative Director for Publication",
    description:
      "Served as one of the leads in creating publication materials for social media, ensuring visual consistency.",
    date: "Sep 2024 – Sep 2025",
    type: "Leadership",
    issuer: "PUP CEHS",
    expandedDescription:
      "Led publication design for the PUP College of Engineering Honor's Society (PUP CEHS), maintaining brand identity and timely distribution of official academic announcements.",
    details: [
      "Served as one of the leads in creating publication materials for social media.",
      "Ensured visual consistency and timely release of official announcements and event promotions.",
    ],
    technologies: ["Creative Direction", "Publication Design", "Branding"],
  },
  {
    id: "pup-cehs-assistant-cd",
    title: "PUP CEHS | Assistant Creative Director",
    description:
      "Supported publication design, layout, and promotional materials for academic events.",
    date: "Sep 2022 – Sep 2023",
    type: "Leadership",
    issuer: "PUP CEHS",
    expandedDescription:
      "Assisted in creative layouts and graphic production for honor society initiatives and university events at PUP Manila.",
    details: [
      "Supported publication design, layout, and promotional materials for academic events.",
      "Assisted senior creative directors in preparing academic publicity collateral.",
    ],
    technologies: ["Publication Design", "Canva", "Photoshop"],
  },
];

export const achievementTypes = [
  "All",
  "Certification",
  "Leadership",
  "Competition",
];
