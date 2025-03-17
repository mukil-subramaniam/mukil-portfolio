import {
  andriod,
  at,
  backend,
  cb,
  chatapp,
  creator,
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
  nodejs,
  reactjs,
  spectra,
  tp,
  web
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "Achievements",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Achievements",
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
    "title": "Achievements",
    "company_name": "",
    "company_website": "",
    "icon": "",
    "iconBg": "#E6DEDD",
    "date": "",
    "points": [
        "Secured First Prize in Innoventures at SignIn 2K24 for developing an innovative tech solution."
    ]
},
{
  "title": "Achievements",
  "company_name": "",
  "company_website": "",
  "icon": "",
  "iconBg": "#E6DEDD",
  "date": "",
  "points": [
      "Third Prize in our department hackathon for developing a Quiz app.",
      "Developed a Quiz app in Flutter."
  ]
},
{
  "title": "Achievements",
  "company_name": "",
  "company_website": "",
  "icon": "",
  "iconBg": "#E6DEDD",
  "date": "",
  "points": [
      "Third Prize in the 'Dev-o-Crafts' app development event, organized by MADC (Mobile Application Development Club)."
  ]
},
{
  "title": "Achievements",
  "company_name": "",
  "company_website": "",
  "icon": "",
  "iconBg": "#E6DEDD",
  "date": "",
  "points": [
      "Runner-Up in 'KEC Hackathon Software Edition' for developing a guest house booking website."
  ]
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
    hosted_link: "",
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
    hosted_link: "",
  },
  {
    "name": "Smart Attendance App (Freelance Project)",
    "description": "A freelance project: A Flutter-based attendance management system with a Node.js and MongoDB backend. Designed for educational institutions and businesses, it enables real-time attendance tracking and automated reports for students and employees, ensuring a seamless and efficient management process.",
    "tags": [
      {
        "name": "freelance-project",
        "color": "gold-text-gradient"
      },
      {
        "name": "flutter",
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
    image: at,
    hosted_link:
      "",
  },
  {
  "name": "MADC - Spectra Event Website",
  "description": "A responsive website built for the 'Spectra' event organized by the Mobile Application Development Club (MADC) at KEC. Developed using HTML and CSS, the website provides event details, registration, and schedule information with a clean and user-friendly design.",
  "tags": [
    {
      "name": "html",
      "color": "blue-text-gradient"
    },
    {
      "name": "css",
      "color": "green-text-gradient"
    },
    {
      "name": "responsive-design",
      "color": "pink-text-gradient"
    },
    {
      "name": "event-website",
      "color": "purple-text-gradient"
    }
  ],
  image: spectra,
  hosted_link:
    "https://android.kongu.edu/",
}

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

