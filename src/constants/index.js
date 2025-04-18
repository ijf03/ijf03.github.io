import BubbleTeaStore from "../assets/projects/BubbleTeaShop.png";
import WG from "../assets/projects/WG.png";
import ToDoList from "../assets/projects/ToDoList.png";

export const HERO_CONTENT = `Driven by Passion, Defined by Code.`;

export const ABOUT_TEXT = `I am a dedicated web developer currently pursuing a Bachelor of Computer Science at Monash University, specializing in advanced computer science, web development, and 3D animation. My academic rigor is matched by practical experience, having built full-stack web applications using the MERN stack. My approach combines deep technical skills with a creative problem-solving mindset, aiming to deliver innovative and efficient solutions in the digital space.`;

export const EDUCATION = [
  {
    year: "February 2024 - December 2026 (Expected)",
    course: "Bachelor of Computer Science - Specialization in Advanced Computer Science; Minor in Web Development; Minor in 3D and Animation",
    school: "Monash University",
    description: `Developed a strong foundation in computer science principles and advanced programming concepts. Specialized in web development and 3D animation. Completed projects in machine learning, artificial intelligence, and game development.`,
    technologies: ["Python", "HTML", "JavaScript", "MARIE (Assembly Code)"],
  },
  {
    year: "August 2023 - October 2026",
    course: "Full-stack Web Development (MERN STACK) ",
    school: "Zuitt Web Developer Program",
    description: `Developed full-stack web applications using the MERN stack. Built RESTful APIs and integrated with MongoDB databases. Implemented user authentication and authorization using JWT tokens.`,
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
  },
  {
    year: "July 2022",
    course: "Introduction to Python for Machine Learning ",
    school: "University of British Columbia FGL (Online)",
    description: `Used python to create machine learning models and algorithms. Applied machine learning techniques to real-world problems and datasets. Developed a strong foundation in Python programming and machine learning concepts.`,
    technologies: ["Python"],
  },
  {
    year: "January - October 2020",
    course: "International Business program; International Business Team Coach Certification",
    school: "X-Culture Academy",
    description: `Participated in a global business simulation competition with teams from around the world. Developed business strategies, conducted market research for real problems of real businesses and presented findings to a panel of judges. Achieved top individual rankings in the course.`,
    technologies: ["International Business", "Team Management", "Project Management", "Cross-Cultural Communication"],
  },
  {
    year: "June - October 2019",
    course: "Web Development Level 1; Web Development Level 2",
    school: "San Francisco College of Technology and Design",
    description: `Learned the fundamentals of web development, including HTML, CSS, and JavaScript. Developed responsive web applications and websites using modern frameworks and libraries. `,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    year: "Before 2019",
    course: "Introduction to Arduino Basics; Lego Mindstorm; Scratch; others ",
    school: "Compass Education",
    description: `Participated in various workshops and courses to learn the basics of electronics, robotics, and programming. Developed projects using Arduino, Lego Mindstorm, and Scratch. Gained hands-on experience in building and programming robots and electronic devices.`,
    technologies: ["Arduino", "Lego Mindstorm", "Scratch"],
  },
];

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Coding Coach",
    company: "Skills Samurai Elsternwick",
    description: `Coached students in coding, programming concepts, and mathematics. Also taught holiday camps for 3D modelling, Programming, Science camps and etc. Assisted students in building projects and solving coding challenges. Fostered a positive and engaging learning environment.`,
    technologies: ["Python", "Scratch", "Java", "Lua", "Tinkercad", "Flashprint", "Soft Skills"],
  },{
    year: "2024 - Present",
    role: "Head of the Marketing Department; operations member",
    company: "Monash Nexus of Emerging Technologies (Student Team)",
    description: `Created the rebranding colorscheme, logo and assets for the team. Developed marketing strategies to promote the team and its projects. Managed social media accounts and created engaging content to attract new members and sponsors. Collaborated with other teams and organizations to organize events and workshops.`,
    technologies: ["Soft Skills"],
  },
  {
    year: "2021 - Present",
    role: "Esports Commentator & Events Host",
    company: "Freelance; Tier One Entertainment",
    description: `Hosted and commentated esports events for various games, including Call of Duty Mobile, Valorant, and others. Conducted interviews with professional players and industry experts. Had the previlage to work with Tier One Entertainment, Garena, ESL, MagicCraft (NFT), Dubai Police, Four04 Esports and several others.`,
    technologies: ["Soft Skills"],
  },
  {
    year: "2022 - 2023",
    role: "Head of Clan",
    company: "Dovahkiin Esports",
    description: `Managed multiple admins, content creators, teams and players in the organization (200+ members). Organized and hosted tournaments, events, and community activities. Developed strategies to grow the community and improve player engagement. Collaborated with sponsors and partners to secure sponsorships and funding for the organization.`,
    technologies: ["Soft Skills"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: BubbleTeaStore,
    code_link:"https://github.com/ijf03/Bubble_Tea_Store",
    live_link:"https://capstone-3-fe7qz7dyr-isabelle-fernans-projects.vercel.app/products",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. Login with Admin123",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Esports Portfolio Website",
    image: WG,
    code_link:"https://github.com/ijf03/WG",
    live_link:"https://wasabigaming03.com/",
    description:
      "A personal esports portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript", ],
  },
  {
    title: "To-do List",
    image: ToDoList,
    code_link:"https://github.com/ijf03/Todo_List",
    live_link:"https://ijf03.github.io/Todo_List/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Typescript", "Vite"],
  },
];

export const COMMUNITY = [
  {
    title: "Homes of Hope",
    role: "Founder",
    social_link:"https://www.facebook.com/HomesofHopeCebu/",
    description:
      "My personal charity organization that aims to help those affected by Super Typhoon Rai (Also called Odette in the Philippines) in Cebu, Philippines. We provide materials to help rebuild homes for over 100 families in Cebu.",
    category: ["outreach"],
  },
  {
    title: "Drop Your Share (DYS) Donation Drive",
    social_link:"https://www.facebook.com/DropYourShare",
    description:
      "DYS is a service-learning project led by a team of Grade 11 students with an aim to help our local communities whom the Cebu International School (CIS) has supported over the years. Our goal is to continue supporting and strengthening these partnerships, highlighting the principles of service-learning that CIS hones among its students despite the barriers presented by the pandemic. ",
    category: ["outreach", "school-based" ],
  },
  {
    title: "Cebu International School School Assembly Team ",
    role: "Host & Editor",
    description:
      "Hosted school wide events and assemblies. Edited videos for the school assembly team. Collaborated with other students to create engaging content for the school community.",
    category: ["school-based"],
  },
  {
    title: "Cebu International School Debate Team",
    role: "Lead",
    description:
      "Organized practice sessions and workshops for team members. Taught debate techniques and strategies to new members.",
    category: ["school-based"],
  },
  {
    title: "Play4Play Esports",
    role: "Head",
    description:
      "Organized livestreamed scrimmages and tournaments for the organization. Managed social media accounts and created engaging content to attract new members. Collaborated with other teams and organizations to organize events and workshops.",
    category: ["school-based"],
  },
  {
    title: "Dovahkiin Esports",
    role: "Head of Clan",
    social_link:"https://www.facebook.com/DovahkiinEsports",
    description:
      "Lead an organization with 200+ members. Organized and hosted tournaments, events, and community activities. Developed strategies to grow the community and improve player engagement. Collaborated with sponsors and partners to secure sponsorships and funding for the organization.",
    category: ["school-based"],
  },
  {
    title: "HeART Reach Outreach Program",
    role: "Founder",
    description:
      "Lead a team of students who volunteered to teach art to children in the local community. Organized art workshops and activities for children. The team also raised funds to support the program and provide art supplies, food and basic necessities for the children.",
    category: ["school-based"],
  },
  
];


export const CONTACT = {
  address: "Melbourne, Australia || Cebu, Philippines",
  phoneNo: "+12 4555 666 00 ",
  email: "sabi.j.fernan@gmail.com",
};


