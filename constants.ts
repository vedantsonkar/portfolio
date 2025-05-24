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
