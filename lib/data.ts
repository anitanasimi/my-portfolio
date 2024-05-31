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
    githubUrl: "https://github.com/anitanasimi/cocoon",
    website: "https://cocoon.quest",
  },
  {
    title: "LingoLink",
    more: "LingoLink is a SaaS application designed to break down language barriers and facilitate seamless communication across languages. With LingoLink, users can sign in, create new chats, and add people to the chat with real-time message translation into multiple languages. Whether for business, travel, or personal use, LingoLink aims to connect people from different linguistic backgrounds and enable meaningful conversations. The tech stack includes Firebase for Realtime Database, Cloud Functions, Firestore Database, and Authentication; Stripe for checkout sessions; Shadcn and Tailwind CSS for UI/UX design; Zod for form validation; Zustand for global state management; NextAuth for authentication flow; TypeScript for reducing bugs and errors; and Vercel for deployment.",
    description:
      "LingoLink is a SaaS application designed to break down language barriers and facilitate seamless communication across languages.",
    tags: [
      "Firebase",
      "Next.js",
      "shadcn",
      "zustand",
      "zod",
      "stripe",
      "vercel",
    ],

    imageUrl: "/lingolinkMain.JPG",
    imgModal1: "/lingolink1.JPG",
    imgModal2: "/lingolink2.JPG",
    githubUrl: "https://github.com/anitanasimi/lingoLink",
    website: "https://lingolink-chat.vercel.app",
  },
  {
    title: "Stock Market App",

    description:
      "The Bitcoin Trading App allows users to buy and sell Bitcoin in real-time with instant updates using SignalR.",
    more: "The Bitcoin Trading App is a robust platform that enables users to buy and sell Bitcoin in real-time. Leveraging ASP.NET for backend development, it incorporates SignalR for instant updates, ensuring that any changes made by one user are immediately reflected for all users. The frontend is built with React, providing a dynamic and responsive user interface. Data storage is managed with NeonDb, offering reliable and persistent storage for user data and transaction records. This combination of technologies ensures a seamless and efficient trading experience for users.",
    tags: ["ASp.net", "React", "SignalR", "NeonDB", "CSS"],
    imageUrl: "/stockmarketMain2.jpg",
    imgModal1: "/stockmarket2.JPG",
    imgModal2: "/stockmarket1.JPG",
    githubUrl: " https://github.com/anitanasimi/stockMarketApp",
    website: "https://client-stockmarket.liara.run/",
  },
  {
    title: "Currency Converter",

    description:
      "simple currency converter web application that allows users to convert between different currencies. The app fetches the latest exchange rates from an API and calculates the conversion based on user input.",
    more: "The Currency Converter App is a user-friendly web application that enables users to convert between various currencies effortlessly. By leveraging HTML and CSS for the structural and styling aspects, the app ensures a clean and responsive design suitable for both mobile and desktop users. JavaScript powers the core functionality, using the Fetch API to retrieve the latest exchange rates from an external API. This real-time data allows users to input amounts and instantly see the converted value in their desired currency, with the flexibility to swap between base and target currencies",
    tags: ["HTML", "CSS", "JavaScript", "Fetch API"],
    imageUrl: "/currencyConverter.png",
    imgModal1: "/currencyconverter1.JPG",
    imgModal2: "",
    githubUrl: "https://github.com/anitanasimi/currency-converter",
    website: "anitanasimi.github.io/currency-converter/",
  },
  {
    title: "Guss my number game",

    description:
      "This is a simple game where the player tries to guess a randomly generated number within a specified range.",
    more: "The game generates a random number within a specified range, and the player must guess the number. After each guess, the game provides feedback indicating whether the guess is too high or too low, encouraging the player to adjust their subsequent guesses accordingly. This process continues until the player successfully guesses the correct number. Upon guessing correctly, the game displays the total number of attempts taken and the final score. The user interface, built with HTML and styled with CSS, offers a seamless and engaging experience, while JavaScript handles the game logic and dynamic interactions through the DOM.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/gussgame.png",
    imgModal1: "/gussgame.png",
    imgModal2: "",
    githubUrl: "https://github.com/anitanasimi/guss-my-number-game",
    website: "https://anitanasimi.github.io/guss-my-number-game/",
  },
  {
    title: "Music Player App",

    description:
      "music player app that allows users to sign in, create new playlists, and manage their music collections.",
    more: " Music player app that provides users with the ability to sign in, create and manage playlists, and enjoy a personalized music experience. Utilizing Next.js for a robust and responsive frontend, the app ensures smooth and dynamic user interactions. Authentication is securely handled through NextAuth, allowing users to sign in with ease. The backend is powered by PostgreSQL and NeonDB, ensuring reliable and efficient data management. Tailwind CSS is employed to create a visually appealing and responsive design. The entire application is seamlessly deployed on Vercel.",
    tags: [
      "nextjs",
      "nextauth",
      "postgresql",
      "NeonDB",
      "tailwind",
      "AWS",
      "vercel",
    ],
    imageUrl: "/musicplayer.JPG",
    imgModal1: "/musicplayer.JPG",
    imgModal2: "",
    githubUrl: "https://github.com/anitanasimi/music-player",
    website:
      "https://music-player-anitanasimi-anitanasimis-projects.vercel.app/?_vercel_share=bBt9ldI5pptvhLEXWkMepmeHJr6r3Pge",
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
