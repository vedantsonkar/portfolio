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
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date | null;
  bulletPoints: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Cornerstone OnDemand",
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
    company: "Honestly Italian",
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
    company: "The English Quest",
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
