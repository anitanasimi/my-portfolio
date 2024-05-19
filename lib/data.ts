export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Cocoon",
    description:
      "An AI app that scans your resume to create a career transition roadmap using job data, Udemy courses, and college programs.",
    more: "Cocoon is an AI-driven app designed to help you switch careers seamlessly. Built using TypeScript, Next.js, PostgreSQL, AWS Lambda, Amazon Textract, Redux, LangChain, OpenAI API, Google Docs API, and the Udemy Affiliate API. It scans your resume to identify your skills and then uses open job data, Udemy courses, and college programs to create a tailored roadmap for your new career. By finding transferable skills and suggesting relevant courses, Cocoon makes it easier to fill skill gaps and prepare for a successful transition.",

    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Drizzle ORM",
      "daisyUi",
      "Redux",
      "AWS Lambda",
      "Amazon Textract",
      "mammoth",
      "Neon",
      "PostgreSQL",
    ],
    imageUrl: "/cocoon.JPG",
    imgModal1: "/cocoon1.png",
    imgModal2: "/cocoon2.png",
  },
  {
    title: "coming soon",
    more: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    tags: ["React", "Next.js", "Tailwind", "more"],

    imageUrl: "/coming-soon.jpg",
    imgModal1: "/cocoon1.png",
    imgModal2: "/cocoon1.png",
  },
  {
    title: "Coming soon",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    more: "",
    tags: ["React", "Next.js", "Tailwind", "more"],
    imageUrl: "/coming-soon.jpg",
    imgModal1: "",
    imgModal2: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
