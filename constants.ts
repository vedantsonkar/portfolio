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
