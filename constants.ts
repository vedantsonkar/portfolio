export const NAVBAR_LINKS = [
  { href: "/", icon: "/icons/Home.svg", title: "Home" },
  { href: "/resume", icon: "/icons/Resume.svg", title: "Resume" },
  { href: "/projects", icon: "/icons/Projects.svg", title: "Projects" },
  { href: "/experience", icon: "/icons/Experience.svg", title: "Experience" },
  { href: "/stack", icon: "/icons/Stack.svg", title: "Stack" },
];

export const WORK_START_DATE = new Date("2021-10-01");

export const YEARS_OF_EXPERIENCE = (() => {
  const now = new Date();
  const years = now.getFullYear() - WORK_START_DATE.getFullYear();
  const months = now.getMonth() - WORK_START_DATE.getMonth();
  const days = now.getDate() - WORK_START_DATE.getDate();
  return months < 0 || (months === 0 && days < 0) ? years - 1 : years;
})();

export const SEO_KEYWORDS = [
  "vedant",
  "vedant sonkar",
  "vedant sonkar portfolio",
  "frontend developer",
  "software engineer",
  "fullstack developer",
  "best UI",
  "developer portfolio",
  "web developer",
  "mobile developer",
  "react developer",
  "typescript developer",
  "javascript developer",
  "UI/UX designer",
  "backend developer",
  "node.js developer",
  "express.js developer",
  "next.js developer",
  "full stack engineer",
  "frontend engineer",
  "software development",
  "web development",
  "mobile development",
  "programming",
  "coding",
  "tech portfolio",
  "developer showcase",
  "professional portfolio",
  "software projects",
  "app development",
  "responsive design",
  "modern web design",
  "clean code",
  "vedant sonkar resume",
  "vedant sonkar projects",
  "vedant sonkar experience",
  "vedant sonkar stack",
  "vedant sonkar website",
  "vedant sonkar blog",
  "vedant sonkar contact",
  "vedant sonkar about",
  "vedant sonkar skills",
  "vedant sonkar work",
  "vedant sonkar tech",
  "vedant sonkar developer",
  "vedant sonkar software",
  "vedant sonkar engineer",
  "vedant sonkar frontend",
  "vedant sonkar backend",
  "vedant sonkar fullstack",
  "vedant sonkar UI",
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/vedantsonkar",
  github: "https://www.github.com/vedantsonkar",
  instagram: "https://www.instagram.com/vedantsonkarr/",
  x: "https://x.com/vedant_sonkar",
};

export const RESUME_DOC_ID = "1VSqmAFGXkyNyTMVz8I9TDWVPVSPdK0PdgWHLzfZ43jo";

export const RESUME_PREVIEW_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/preview`;
export const RESUME_DOWNLOAD_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/export?format=pdf`;

export type Experience = {
  id: number;
  role: string;
  company: {
    name: string;
    url: string;
  };
  location: string;
  startDate: Date;
  endDate?: Date | null;
  bulletPoints: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: {
      name: "Cornerstone OnDemand",
      url: "https://www.cornerstoneondemand.com/",
    },
    location: "Mumbai",
    startDate: new Date(2024, 4), // May 2024
    // ongoing so no endDate
    bulletPoints: [
      "Enabled cross-app integrations and enhanced scalability by implementing a Micro-Frontend architecture with Nx across multiple products.",
      "Ensured code quality and reliability by writing unit tests in JEST, achieving over 95% coverage for files and components.",
      "Improved application performance and speed by 12%, as measured by Pagespeed Insights, by optimizing key functions to maintain a 90+ score.",
      "Resolved nearly 500 reported accessibility issues by utilizing axeDevTools, ensuring a more inclusive user experience.",
      "Delivered a shared UI component library as a private NPM package used across multiple platforms (MS Teams, Salesforce, GSuite), backed by Storybook and Jest, to enable modular development and code reuse.",
      "Streamlined the development workflow and reduced development time by 50% by implementing a method to locally test UI library components in various widgets.",
      "Demonstrated strong problem-solving and support skills by triaging and resolving product and system issues for a wide range of clients (e.g., Canon, Samsung), maintaining a turnaround time (TAT) of under 24 hours as measured by JIRA.",
    ],
  },
  {
    id: 2,
    role: "Senior Associate Software Engineer",
    company: {
      name: "Honestly Italian",
      url: "https://www.foodstories.shop/",
    },
    location: "Mumbai",
    startDate: new Date(2023, 4), // May 2023
    endDate: new Date(2024, 4), // May 2024
    bulletPoints: [
      "Demonstrated leadership qualities by managing a team of two external developers and leading knowledge transfer (KT) sessions, ensuring efficient task management and a collaborative work environment.",
      "Used Next.js and Tailwind to create pixel-perfect, server-rendered, reusable components and layouts to reduce loading speeds by up to 30% and set the page speed score to 98 (Measured with Vercel Speed Insights).",
      "Reviewed PRs and pointed out inconsistencies, keeping bugs and issues at a minimum.",
      "Implemented semantic coding techniques to enhance SEO support and improve website visibility in search engine rankings.",
      "Drove business and customer interaction by almost 70%, as calculated by CleverTap events, by implementing an AI-powered Recipe Generator that analyzed user cart items.",
      "Implemented location-based services using Google Location APIs to dynamically display store catalogs based on users' locations, enhancing the personalized shopping experience for an e-commerce platform.",
      "Thoroughly documented new features and their implementation methods during the design stage, utilizing a collaborative peer review system to ensure clarity, accuracy, and knowledge sharing within the development team.",
    ],
  },
  {
    id: 3,
    role: "Software Engineer",
    company: {
      name: "The English Quest",
      url: "https://www.theenglishquest.com/",
    },
    location: "Mumbai",
    startDate: new Date(2022, 3), // April 2022
    endDate: new Date(2023, 4), // May 2023
    bulletPoints: [
      "Improved the mobile app's user experience, increasing the Play Store rating from 3.9 to 4.8+ stars, by gathering customer feedback and implementing key enhancements.",
      "Developed role-based access control and audit trails, ensuring sensitive user data security and meeting compliance standards.",
      "Built and maintained a secure payment portal using Razorpay/CashFree APIs and webhooks, handling thousands of monthly transactions with compliance, reconciliation, and fraud prevention safeguards.",
      "Streamlined backend APIs and services, reducing execution times by 10–35%, improving system scalability and responsiveness (calculated by New Relic for several APIs and services).",
      "Utilized Recharts and AntD to improve data visualization for users and analysts and display highly modular visual data on the portal.",
      "Engaged with customers and teammates to understand their needs, gather feedback, and enhance the mobile app and portal for a better user experience.",
    ],
  },
];

export interface Project {
  title: string;
  url: string;
  description: string;
  bg?: string; // Desktop screenshot path
  bgMobile?: string; // Mobile screenshot path
}

export const projects: Project[] = [
  {
    title: "Food Stories",
    url: "https://www.foodstories.shop",
    description: `Food Stories is an e-commerce platform designed for food enthusiasts who want to explore, discover, and purchase gourmet and artisanal products. The project focuses on providing a smooth and highly visual user experience where curated products are showcased with rich storytelling. Built with performance in mind, the platform ensures fast browsing and seamless checkout on both desktop and mobile devices. Key features include product categorization, advanced search, and responsive design that adapts beautifully across screen sizes. The goal of Food Stories is not just to enable transactions but to create a narrative-driven marketplace where users can connect emotionally with the food they purchase.`,
  },
  {
    title: "Zoomin Productions",
    url: "https://www.zoomin.productions",
    description: `Zoomin Productions is a portfolio and showcase website for a creative production house specializing in film, advertising, and digital content creation. The project emphasizes strong visuals, smooth navigation, and an immersive storytelling experience to highlight the studio's work. It includes video integrations, high-quality image galleries, and responsive layouts optimized for modern devices. Built with a focus on branding, the site reflects the artistic identity of the production company while ensuring performance and accessibility. Clients can easily explore past projects, services, and collaborations, making it a powerful online presence for attracting new business opportunities in the media space.`,
  },
  {
    title: "LXP Edcast",
    url: "https://www.cornerstoneondemand.com/platform/learning-experience-lxp/",
    description: `Edcast (by Cornerstone) is a Learning Experience Platform (LXP) widely used as an internal enterprise tool by multiple Fortune 500 companies. The platform enables organizations to deliver personalized learning experiences, skill development, and content curation to employees at scale. It integrates with various enterprise systems and provides analytics to track learning progress, making it a powerful solution for workforce development. Since this is an internal enterprise product, there is no publicly accessible URL or demo environment available. The project involved building and enhancing features within Edcast's ecosystem, improving usability and accessibility for end users across industries.`,
    bg: "/projects/LXP_Desktop.jpg",
    bgMobile: "/projects/LXP_Mobile.jpg",
  },
  {
    title: "The English Quest - Mobile App",
    url: "https://play.google.com/store/apps/details?id=tqel.queensenglish.android.app&pli=1",
    description: `The English Quest is a gamified mobile application aimed at helping users improve their English language skills through interactive challenges and storytelling. The app combines engaging quests, vocabulary exercises, and grammar puzzles in a format that feels more like an adventure game than traditional learning. With carefully designed UI/UX, it appeals to both children and adults looking to practice English in a fun and interactive way. The app supports progress tracking, rewards, and adaptive difficulty levels to keep learners motivated. Available on the Google Play Store, The English Quest has been well received for blending education with entertainment in a mobile-first experience.`,
    bg: "/projects/EnglishQuest_Desktop.jpg",
    bgMobile: "/projects/EnglishQuest_Mobile.jpg",
  },
  {
    title: "AssetDrain",
    url: "https://www.npmjs.com/package/assetdrain",
    description:
      "A blazing-fast CLI tool that scans your repo for assets (like .svg, .png, .mp4, etc.), checks where they're actually used in code, and tells you what you can delete — or deletes it for you (with your permission of course).",
    bg: "/projects/Assetdrain_Desktop.jpg",
    bgMobile: "/projects/Assetdrain_Mobile.jpg",
  },
];

export interface Achievement {
  text: string;
  highlight: string;
  direction: "left" | "right";
  icon: string; // Lucide icon name
}

export const achievements: Achievement[] = [
  {
    text: "Optimized pages using Next.js SSR, ISR, and SSG, improving performance by 30–60% as measured by PageSpeed Insights",
    highlight: "30–60%",
    direction: "left",
    icon: "Gauge",
  },
  {
    text: "Resolved 500+ accessibility issues by applying WCAG and ARIA standards. Because the web is for everyone, right?",
    highlight: "500+",
    direction: "right",
    icon: "Accessibility",
  },
  {
    text: "Achieved a PageSpeed score of 98 by reducing FCP and TTFB to under 1s for most pages",
    highlight: "98",
    direction: "left",
    icon: "Zap",
  },
  {
    text: "Designed a micro-frontend architecture with Nx powering applications used by 100k+ users globally",
    highlight: "100k+",
    direction: "right",
    icon: "Users",
  },
  {
    text: "Wrote unit tests with Jest achieving over 95% code coverage, making regressions hard to sneak into production",
    highlight: "95%",
    direction: "left",
    icon: "TestTube",
  },
  {
    text: "Increased customer engagement by 70% by shipping an AI-powered feature users actually loved",
    highlight: "70%",
    direction: "right",
    icon: "Bot",
  },
  {
    text: "Boosted product cross-sales by 50% through smarter UX and personalization",
    highlight: "50%",
    direction: "left",
    icon: "TrendingUp",
  },
  {
    text: "Improved app UX and performance, raising the Play Store rating from 3.9 to 4.8+ stars",
    highlight: "4.8+",
    direction: "right",
    icon: "Star",
  },
  {
    text: "Reduced backend API response times by 30–40% through service and query optimizations",
    highlight: "30–40%",
    direction: "left",
    icon: "Database",
  },
];

export interface TechStack {
  name: string;
  icon: string; // Simple Icons slug or custom
  url: string; // Official website
  color: string; // Brand color
  category: "frontend" | "backend" | "language" | "mobile" | "devops" | "testing";
}

export const techStack: TechStack[] = [
  // Frontend
  {
    name: "React",
    icon: "react",
    url: "https://react.dev",
    color: "#61DAFB",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "nextdotjs",
    url: "https://nextjs.org",
    color: "#000000",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    url: "https://tailwindcss.com",
    color: "#06B6D4",
    category: "frontend",
  },
  {
    name: "Framer Motion",
    icon: "framer",
    url: "https://motion.dev",
    color: "#FF0055",
    category: "frontend",
  },
  // Languages
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://typescriptlang.org",
    color: "#3178C6",
    category: "language",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#F7DF1E",
    category: "language",
  },
  {
    name: "Python",
    icon: "python",
    url: "https://python.org",
    color: "#3776AB",
    category: "language",
  },
  // Backend
  {
    name: "Node.js",
    icon: "nodedotjs",
    url: "https://nodejs.org",
    color: "#339933",
    category: "backend",
  },
  {
    name: "Express",
    icon: "express",
    url: "https://expressjs.com",
    color: "#000000",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    url: "https://mongodb.com",
    color: "#47A248",
    category: "backend",
  },
  // Mobile
  {
    name: "React Native",
    icon: "react",
    url: "https://reactnative.dev",
    color: "#61DAFB",
    category: "mobile",
  },
  // DevOps & Cloud
  {
    name: "AWS",
    icon: "/icons/aws.svg",
    url: "https://aws.amazon.com",
    color: "#FF9900",
    category: "devops",
  },
  {
    name: "GCP",
    icon: "googlecloud",
    url: "https://cloud.google.com",
    color: "#4285F4",
    category: "devops",
  },
  {
    name: "Git",
    icon: "git",
    url: "https://git-scm.com",
    color: "#F05032",
    category: "devops",
  },
  // Testing
  {
    name: "Jest",
    icon: "jest",
    url: "https://jestjs.io",
    color: "#C21325",
    category: "testing",
  },
];