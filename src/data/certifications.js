import mernCert from "../assets/certifications/mern-cert.svg";
import javaFullStack from "../assets/certifications/java-fullstack-cert.jpeg";
import javaBasic from "../assets/certifications/java-basic-cert.jpg";
import dataAnalytics from "../assets/certifications/data-analytics-cert.jpeg";
import internship from "../assets/certifications/internship-cert.jpeg";

export const certifications = [
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    issuer: "Dr. Reddy’s Foundation",
    date: "Certified",
    credentialId: "DRF-MERN-2025",
    image: mernCert,
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Development",
    issuer: "Palle Technologies",
    date: "Jun – Dec 2025 · 6 months",
    credentialId: "2964/25",
    image: javaFullStack,
  },
  {
    id: "sql-cert",
    title: "SQL Certification & Gold Badge",
    issuer: "HackerRank",
    date: "Verified",
    credentialId: "18D08CD922B3",
    image: javaBasic,
  },
  {
    id: "data-analytics",
    title: "Data Analytics Program",
    issuer: "Besant Technologies",
    date: "Oct 2025",
    credentialId: "25BFT442257",
    image: dataAnalytics,
  },
  {
    id: "internship",
    title: "Virtual Internship — SQL & Power BI",
    issuer: "Besant Technologies",
    date: "1 month",
    credentialId: null,
    image: internship,
  },
];
