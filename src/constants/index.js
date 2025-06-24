export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects =[
  // ...existing projects
  {
    title: 'StudyBangaloreInternational - Admission Booking Platform',
    desc: 'StudyBangaloreInternational is an educational platform that helps students explore and book admissions into top colleges across Karnataka. It features detailed college info, course listings, and contact forms.',
    subdesc:
      'Developed using HTML, CSS, Bootstrap, and JavaScript, it includes pages for course categories, student support, and a responsive design. Deployed at studybangaloreinternational.in.',
    href: 'https://studybangaloreinternational.in',
    texture: '/textures/project/studybangalore.mp4',
    logo: '/assets/accu.png',
    logoStyle: {
      backgroundColor: '#005792',
      border: '0.2px solid #0074B7',
      boxShadow: '0px 0px 60px 0px #2196F34D',
    },
    texture: '/textures/project/project1.mp4',
    logo: '/assets/accu.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/email.jpeg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/css.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/html.png',
      },
    ],
  },
  {
    title: 'VoltCraft - Electronics Gadget E-Commerce Site',
    desc: 'VoltCraft is an advanced electronics e-commerce platform offering a smooth shopping experience for tech gadgets. It includes dynamic product filtering, cart management, order tracking, and real-time offers.',
    subdesc:
      'Developed using the MERN stack (MongoDB, Express, React, Node.js) with integrated payment gateway, session management, and real-time AI chatbot. Ensures user-friendly UI and secure transactions.',
    href: "https://voltcraft.onrender.com",
    texture: '/textures/project/voltcraft.mp4',
    logo: '/assets/voltcraft.webp',
    logoStyle: {
      backgroundColor: '#212121',
      border: '0.2px solid #3A3A3A',
      boxShadow: '0px 0px 60px 0px #FFC1074D',
    },
    texture: '/textures/project/project2.mp4',
    logo: '/assets/voltcraft.webp',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight-voltcraft.png',
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/mongo.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/tail.png',
      },
    ],
  }
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'React.js',
    pos: 'Frontend Developer',
    duration: '2023 - Present',
    title: "React is my go-to library for building dynamic and responsive user interfaces. I use it to create reusable components, manage state efficiently, and deliver fast, interactive web apps.",
    icon: '/assets/react.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Node.js',
    pos: 'Backend Developer',
    duration: '2022 - Present',
    title: "Node.js helps me build scalable backend services and REST APIs. I’ve used it to handle server-side logic, manage authentication, and connect to MongoDB in full-stack projects.",
    icon: '/assets/nodejs.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'MongoDB',
    pos: 'Database Architect',
    duration: '2022 - Present',
    title: "MongoDB is my choice for handling flexible, NoSQL data storage. I use it to store user data, product details, and application state with high performance and reliability.",
    icon: '/assets/mongo.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Figma',
    pos: 'UI/UX Collaborator',
    duration: '2021 - Present',
    title: "Figma is my design companion. I use it to collaborate on UI design, wireframes, and prototypes — ensuring smooth handoff between design and development.",
    icon: '/assets/figma.svg',
    animation: 'jump',
  },
  {
    id: 5,
    name: 'Git & GitHub',
    pos: 'Version Control Pro',
    duration: '2021 - Present',
    title: "I use Git and GitHub daily for tracking code changes, managing branches, and collaborating with others on software projects in a clean and efficient way.",
    icon: '/assets/github.svg',
    animation: 'thumbs-up',
  },
];
