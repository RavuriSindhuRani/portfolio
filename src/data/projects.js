import realEstateCrmImg from "../assets/project-realestate-crm.svg";
import crudImg from "../assets/project-crud.svg";
import eventZenImg from "../assets/project-eventzen.jpg";
import paintingImg from "../assets/project-painting.jpg";
import libraryImg from "../assets/project-library.png";
import musingWingsImg from "../assets/project-musingwings.jpg";
import samsImg from "../assets/project-sams.png";
import powerbiImg from "../assets/project-powerbi.jpeg";

export const projects = [
  {
    id: "real-estate-crm",
    title: "Real Estate CRM Platform",
    category: ["Full Stack"],
    image: realEstateCrmImg,
    summary:
      "A comprehensive Real Estate CRM for managing leads, customers, properties, administrative dashboards, and interactive 3D plot layouts.",
    details:
      "Contributed to full-stack development of an enterprise Real Estate CRM using the MERN stack. Built administrative dashboards, property management workflows, and role-based functionalities. Developed responsive interfaces for desktop and mobile application experiences, designed interactive 3D plot layouts and property visualization interfaces, and handled frontend and backend integration through application APIs and database operations.",
    tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "3D Plot Layouts", "RESTful APIs"],
    demoUrl: null,
    certificateUrl: null,
    githubUrl: null,
  },
  {
    id: "eventzen",
    title: "Event Management System — Hackathon Project",
    category: ["Full Stack"],
    image: eventZenImg,
    summary:
      "A full-stack event management platform presented at J.P. Morgan Chase Hackathon, with role-based access and AI attendance.",
    details:
      "Developed a full-stack event management platform using MongoDB, Express.js, Angular, and Node.js (MEAN Stack). Implemented authentication, role-based access, event scheduling, and ticket management workflows. Integrated RESTful APIs and AI-based face recognition for attendance management. Presented the project at J.P. Morgan Chase Hackathon.",
    tech: ["MEAN Stack", "MongoDB", "Express.js", "Angular", "Node.js", "AI Face Recognition", "RESTful APIs"],
    demoUrl: "https://event-management-system-swart-delta.vercel.app/",
    certificateUrl: null,
    githubUrl: null,
  },
  {
    id: "art-gallery",
    title: "E-Commerce Website for Paintings",
    category: ["Full Stack", "Design"],
    image: paintingImg,
    summary:
      "A responsive e-commerce platform for online painting sales with interactive catalogs, shopping cart, and wishlist functionalities.",
    details:
      "Developed a responsive e-commerce platform for online painting sales using Angular. Implemented interactive product catalogs, shopping cart, and wishlist functionalities. Improved navigation and responsive UI for cross-device compatibility.",
    tech: ["Angular", "Node.js", "Bootstrap", "CSS", "Vercel"],
    demoUrl: "https://angular-ecom-painting.vercel.app/",
    certificateUrl: null,
    githubUrl: null,
  },
  {
    id: "crud-spring-boot",
    title: "Consolidated CRUD Operations Project",
    category: ["Full Stack", "Java"],
    image: crudImg,
    summary:
      "A modular application organizing Entity, DAO, Service, and Controller layers for employee and product management using Spring Boot & Hibernate.",
    details:
      "Developed REST APIs and CRUD functionality for employee and product management using Spring Boot, Hibernate, and MySQL. Combined multiple CRUD implementations into a modular application using layered architecture. Organized Entity, DAO, Service, and Controller layers for maintainable backend development.",
    tech: ["Spring Boot", "Hibernate", "MySQL", "REST APIs", "Java", "JPA"],
    demoUrl: null,
    certificateUrl: null,
    githubUrl: null,
  },
  {
    id: "library",
    title: "Library Management System",
    category: ["Full Stack", "Java"],
    image: libraryImg,
    summary:
      "A centralized application to manage books, members, fine calculations, and book issue/return workflows.",
    details:
      "Built a centralized application to manage books, members, and transaction records using Java, Servlets, JSP, and JDBC. Automated fine calculations and streamlined book issue and return workflows. Implemented JDBC-based database connectivity for reliable data operations.",
    tech: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "Bootstrap"],
    demoUrl:
      "https://www.linkedin.com/posts/ravuri-sindhurani-16aa39261_java-fullstack-servlets-ugcPost-7396078435007229952-LW0k",
    certificateUrl: null,
    githubUrl: null,
  },
  {
    id: "musing-wings",
    title: "Musing Wings — Poetry Website",
    category: ["Frontend", "Design"],
    image: musingWingsImg,
    summary:
      "A soft, editorial-style website for a poetry brand — home, gallery, books, and contact, built to feel like an open journal.",
    details:
      "Designed and built the site around a calm, paper-and-ink aesthetic that suits a poetry brand: a hero introduction, a gallery of visual pieces, a books section, and a contact page. Deployed on Firebase Hosting for fast, reliable delivery.",
    tech: ["React", "CSS", "Firebase Hosting"],
    demoUrl: "https://musing--wings.web.app/",
    certificateUrl: null,
    githubUrl: null,
  },
  {
    id: "sams",
    title: "Student Attendance Management System",
    category: ["Frontend"],
    image: samsImg,
    summary:
      "A fully web-based system to manage student attendance — add students, mark presence or absence, and search records.",
    details:
      "Built as an in-browser attendance tool for classrooms without a backend dependency. Handles student records, daily presence marking, and quick search, all with instant UI feedback and no page reloads.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "/SAMS.html",
    certificateUrl: null,
    githubUrl: null,
  },
  {
    id: "powerbi",
    title: "Power BI Dashboard",
    category: ["Analytics"],
    image: powerbiImg,
    summary:
      "An interactive dashboard visualizing sales, profit, and manufacturing data across products and time periods.",
    details:
      "Designed in Microsoft Power BI using Excel and CSV data sources. Combines bar charts, line graphs, donut charts, and area charts into a single interactive view for exploring performance trends at a glance.",
    tech: ["Power BI", "Excel", "CSV"],
    demoUrl: null,
    certificateUrl: null,
    githubUrl: null,
  },
];

export const filterOptions = ["All", "Full Stack", "Frontend", "Java", "Analytics", "Design"];
