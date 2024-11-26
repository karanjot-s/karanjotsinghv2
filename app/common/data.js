export const homeProjects = [
  {
    title: "SoMe",
    desc: "Social media platform reminiscent of Instagram, employing NextJs, ExpressJS (Node), MongoDB, and Web Sockets to enable real-time interactions and provide users with an interactive experience",
    image: "/projects/someimg.png",
    links: [
      { name: "Preview", link: "https://some-seven.vercel.app/" },
      { name: "Code", link: "https://github.com/karanjot-s/some" },
    ],
  },
  {
    title: "KS Drive",
    desc: "A comprehensive Google Drive Clone utilizing React JS, Firebase, and Bootstrap technologies, complete with user authentication and a structured file management system.",
    image: "/projects/ksdrive.png",
    links: [
      { name: "Preview", link: "https://ksdrive-prod.web.app" },
      { name: "Code", link: "https://github.com/karanjot-s/KSDrive" },
    ],
  },
  {
    title: "AiFlix",
    desc: "Built using Next.js, TypeScript, MongoDB, and ExpressJS, allowing users to upload AI-generated trailers, which are ranked based on voting, enhancing content discovery and interaction.",
    image: "/projects/aiflix-sqaure.png",
    links: [
      { name: "Preview", link: "https://ai-flix-zeta.vercel.app/" },
      { name: "Code", link: "https://github.com/karanjot-s/AiFlix" },
    ],
  },
];

export const allProjects = [
  {
    title: "SoME",
    desc: "Social media platform reminiscent of Instagram, employing NextJs, ExpressJS (Node), MongoDB, and Web Sockets to enable real-time interactions and provide users with an interactive experience",
    image: "/projects/someimg.png",
    tags: ["MERN Stack", "Socket.io"],
    links: [
      { name: "Preview", link: "https://some-seven.vercel.app/" },
      { name: "Code", link: "https://github.com/karanjot-s/some" },
    ],
  },
  {
    title: "KS Drive",
    desc: "A comprehensive Google Drive Clone utilizing React JS, Firebase, and Bootstrap technologies, complete with user authentication and a structured file management system.",
    image: "/projects/ksdrive.png",
    tags: ["MERN Stack", "Firebase"],
    links: [
      { name: "Preview", link: "https://ksdrive-prod.web.app" },
      { name: "Code", link: "https://github.com/karanjot-s/KSDrive" },
    ],
  },
  {
    title: "AiFlix",
    desc: "Built using Next.js, TypeScript, MongoDB, and ExpressJS, allowing users to upload AI-generated trailers, which are ranked based on voting, enhancing content discovery and interaction.",
    image: "/projects/aiflix-sqaure.png",
    tags: ["MERN Stack", "Typescript"],
    links: [
      { name: "Preview", link: "https://ai-flix-zeta.vercel.app/" },
      { name: "Code", link: "https://github.com/karanjot-s/AiFlix" },
    ],
  },
  {
    title: "Task App",
    desc: "A user-friendly task management solution leveraging the MERN stack and elevated by Bootstrap's sleek design, offering simplicity and efficiency in organizing your daily",
    image: "/projects/taskapp.png",
    tags: ["MERN Stack", "Bootstrap"],
    links: [
      { name: "Preview", link: "#" },
      { name: "Code", link: "https://github.com/karanjot-s/task-app" },
    ],
  },
  {
    title: "URSHO",
    desc: "Simplify your links with this URL shortener application, engineered using the MERN stack and adorned with the modern aesthetics of Bootstrap for an elegant and efficient user interface.",
    image: "/projects/ursho.png",
    tags: ["MERN Stack", "Bootstrap"],
    links: [
      { name: "Preview", link: "https://ursho.onrender.com" },
      { name: "Code", link: "https://github.com/karanjot-s/URLShortner" },
    ],
  },
];

export const socialLinks = [
  {
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/karanjot-s",
    username: "karanjot-s",
  },
  {
    icon: "mdi:email",
    link: "mailto:karanjot2409@gmail.com",
    username: "karanjot2409@gmail.com",
  },
  {
    icon: "mdi:github",
    link: "https://github.com/karanjot-s",
    username: "karanjot-s",
  },
  {
    icon: "mdi:twitter",
    link: "https://twitter.com/_karanjot_s",
    username: "_karanjot_s",
  },
  {
    icon: "mdi:instagram",
    link: "https://www.instagram.com/_karanjot_s/",
    username: "_karanjot_s",
  },
];

export const workEx = [
  {
    title: "SDE Intern",
    company: "Somhako (AdvantF Group KK)",
    duration: "April 2024 - Aug 2024",
    desc: "Worked on Next JS for frontend, Django for backend and PostgreSQL for database. Contributed in creating SAAS ATS application for the company. Also worked on the Azure DevOps and Github Workflows for CI/CD pipeline.",
  },
  {
    title: "Full Stack Developer",
    company: "VyaLinks",
    duration: "Sept 2023 - Oct 2023",
    desc: "Worked on Next JS ot create frontend of the application on both client and admin side. Worked on the Express (Node.js) and MongoDB on the backend of the application.",
  },
  {
    title: "Web Developer",
    company: "Mikado Solutions",
    duration: "May 2023 - June 2023",
    desc: "Worked on a portfolio for a client using wordpress fullfilling all the client's need in desing and functionality. Worked on a LMS application  using MERN Stack and Socket.io.",
  },
  {
    title: "React Developer",
    company: "TuteDude",
    duration: "Nov 2022 - July 2023",
    desc: "Led the development of Assingment application with React.js and Node.js for student and mentor sides. Implemented mentor side features: assingment management, feedback on student responses. Adapted to company standards and worked under deadlines and handled a large-scale application in production environment.",
  },
];

export const education = [
  {
    title: "B.Tech CSE with AI specilization",
    company: "CGPA: 9.0",
    duration: "2021 - 2025",
    desc: "Maharja Agrasen Institute of Technology, Delhi",
  },
  {
    title: "CBSE Class XII",
    company: "90.6%",
    duration: "2020 - 2021",
    desc: "Bal Bharati Public School, Delhi",
  },
  {
    title: "CBSE Class X",
    company: "92.2%",
    duration: "2018 - 2019",
    desc: "Bal Bharati Public School, Delhi",
  },
];

const DATA = { homeProjects, allProjects, socialLinks, workEx, education };

export default DATA;
