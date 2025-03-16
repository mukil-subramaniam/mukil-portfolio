import {
  andriod,
  backend,
  cb,
  chatapp,
  creator,
  crmnext,
  css,
  gh,
  git,
  github,
  html,
  java,
  javascript,
  library,
  linkedIn,
  mobile,
  mongodb,
  mysql,
  newgen,
  nickelfox,
  nodejs,
  proximus,
  reactjs,
  rollApp,
  skillrisers,
  tp,
  web
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "FLutter Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: andriod,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
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
    name: "Android",
    icon: andriod,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: mobile,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Crmnext",
    company_website: "https://www.businessnext.com/crm",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developed Flow and Layout Designers for HDFC, PNB, IOB, and Utkarsh Bank.",
      "Boosted team efficiency by 50% by implementing monorepo architecture and reusable Design-System.",
      "Integrated GenAI models to automate flow creation from user prompts, eliminating manual configuration efforts.",
      "Integrated unit testing with 80% code coverage, enhancing code reliability and reducing bugs.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nickelfox Technologies",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Nov 2023",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Newgen Software",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Skillrisers",
    company_website: "https://www.skillrisers.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jul 2020",
    points: [
      "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
      "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
      "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "https://proximus.surge.sh/index.html",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    "name": "Real-Time Chat App",
    "description": "Enhancing real-time communication with a Flutter-powered chat application backed by Node.js and Socket.IO. This app ensures seamless, instant messaging with real-time updates, typing indicators, and online/offline status tracking for a smooth user experience.",
    "tags": [
      {
        "name": "flutter",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "green-text-gradient"
      },
      {
        "name": "socket.io",
        "color": "pink-text-gradient"
      }
    ],
    image: chatapp,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    "name": "Library Management System",
    "description": "A modern MERN stack-based Library Management System for seamless book tracking and management. If a book is unavailable or missed, users get a direct purchase link to buy it online—making it easier to access books anytime.",
    "tags": [
      {
        "name": "reactjs",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "green-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "pink-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "purple-text-gradient"
      }
    ],
    image: library,
    hosted_link: "https://library-management-system-pro-frontend.vercel.app/",
  },
  {
    "name": "KEC Guest House Booking",
    "description": "A MERN stack-based web application for seamless booking and management of KEC Guest House reservations. Users can check availability, make reservations, and receive instant confirmations for a hassle-free stay experience. A unique feature includes a 360° virtual tour using Panolens.js for an immersive VR experience of the guest house.",
    "tags": [
      {
        "name": "reactjs",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "green-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "pink-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "purple-text-gradient"
      },
      {
        "name": "panolens.js",
        "color": "orange-text-gradient"
      },
      {
        "name": "virtual-reality",
        "color": "red-text-gradient"
      }
    ],
    image: gh,
    hosted_link: "https://kecguesthouse.vercel.app/",
  },
  {
    "name": "Travel Planner",
    "description": "A MERN stack-based Travel Planner that helps users organize trips efficiently. Features include itinerary management, budget tracking, and personalized destination recommendations for a seamless travel experience.",
    "tags": [
      {
        "name": "reactjs",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "green-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "pink-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "purple-text-gradient"
      }
    ],
    image: tp,
    hosted_link:
      "https://travel-booking-application-bay.vercel.app/",
  },
  {
    "name": "KEC Chatbot",
    "description": "A Flutter-based AI chatbot powered by spaCy for NLP, designed to assist KEC students and staff with instant answers to queries. Provides information on academics, events, and campus facilities in real-time.",
    "tags": [
      {
        "name": "flutter",
        "color": "blue-text-gradient"
      },
      {
        "name": "spacy",
        "color": "green-text-gradient"
      },
      {
        "name": "nlp",
        "color": "pink-text-gradient"
      },
      {
        "name": "dart",
        "color": "purple-text-gradient"
      }
    ],
    image: cb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "MUKIL S",
  fullName: "MUKIL S",
  email: "mukil4058@gmail.com",
  role: "Software Developer",
  about: ` in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, Flutter,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1E25ZeEmXdMpd_8TD94cqID_JLjHwHVC7/view?usp=drivesdk",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/mukil-s-91a38a259/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/mukil-subramaniam/",
      icon: github,
    },
  },
};

export {
  experiences, navigationPaths,
  personalInfo, projects, publicUrls, services,
  technologies
};

