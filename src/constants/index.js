import {
  react,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  joolz,
  marliesdekkers,
  paulaschoice,
  ted,
  ngvideogamedb,
  userinfo,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Angular Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Joolz (Emakina.Nl & EPAM)",
    icon: joolz,
    iconBg: "#383E56",
    date: "July 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Marlies Dekkers (Emakina.Nl)",
    icon: marliesdekkers,
    iconBg: "#E6DEDD",
    date: "May 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Paula's Choice (Emakina.Nl)",
    icon: paulaschoice,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TEDxJMI",
    description:
      "The project is a mobile-friendly web application created using HTML and CSS. It provides users with information about TED events, including speaker details, talk summaries, and event schedules. The design is optimized for small screens, allowing users to easily navigate and access the information they need on their mobile devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ted,
    source_code_link: "https://github.com/Tadeoz24/tedx-jmi-spa",
  },
  {
    name: "Video Game Database",
    description:
      "The project is a web application created using the Angular framework with Typescript. Including game details, ratings, reviews, and recommendations. The application leverages the power of Angular's components, services, and data binding features to deliver user experience. Allowing users to easily access the information they need from any device..",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ngvideogamedb,
    source_code_link: "https://github.com/Tadeoz24/ng-video-game-db",
  },
  {
    name: "User Information",
    description:
      "Project Which use json placeholder Public API to create this interesting user list. Project set up using Angular CLI and which include Components, HTTP Calls, HTTP Interceptors implementation, Services, Routes, Pass data with Routes in between the Components. Using Pipes for data formatting and various Angular Directives like ngFor and ngIf and so much more.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: userinfo,
    source_code_link: "https://github.com/Tadeoz24/Crocobet.com-",
  },
];

export { services, technologies, experiences, testimonials, projects };