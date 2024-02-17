import airbnb from "./photos/airbnb.png";
import amazon from "./photos/amazon.webp";
import fb from "./photos/fb.webp";
import google from "./photos/google.png";
import microsoft from "./photos/microsoft.png";
import netflix from "./photos/netflix.jpg";
import twitter from "./photos/twitter.png";
import apple from "./photos/apple.jpg";
import yt from "./photos/yt.webp";
import linkedin from "./photos/linkedin.webp";

export const jobData = [
  {
    id: 1,
    logo: microsoft,
    position: "Frontend Developer",
    company: "Microsoft",
    city: "Redmond",
    fullyRemote: true,
    friendly: true,
    salary: "Undisclosed Salary",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    id: 2,
    logo: google,
    position: "Backend Developer",
    company: "Google",
    city: "Mountain View",
    fullyRemote: false,
    friendly: true,
    salary: "$90,000 - $110,000",
    technologies: ["Python", "Django", "Java", "Spring"],
  },
  {
    id: 3,
    logo: amazon,
    position: "Data Scientist",
    company: "Amazon",
    city: "Seattle",
    fullyRemote: false,
    friendly: true,
    salary: "$100,000 - $120,000",
    technologies: ["Python", "R", "SQL", "Machine Learning"],
  },
  {
    id: 4,
    logo: apple,
    position: "UI/UX Designer",
    company: "Apple",
    city: "Cupertino",
    fullyRemote: false,
    friendly: true,
    salary: "$85,000 - $105,000",
    technologies: ["Adobe XD", "Sketch", "Figma"],
  },
  {
    id: 5,
    logo: fb,
    position: "Software Engineer",
    company: "Facebook",
    city: "Menlo Park",
    fullyRemote: false,
    friendly: true,
    salary: "Undisclosed Salary",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },

  {
    id: 6,
    logo: yt,
    position: "Mobile App Developer",
    company: "Youtube",
    city: "San Francisco",
    fullyRemote: false,
    friendly: true,
    salary: "$90,000 - $110,000",
    technologies: ["Swift", "Kotlin", "React Native"],
  },
  {
    id: 7,
    logo: netflix,
    position: "DevOps Engineer",
    company: "Netflix",
    city: "Los Gatos",
    fullyRemote: false,
    friendly: true,
    salary: "$100,000 - $120,000",
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform"],
  },
  {
    id: 8,
    logo: linkedin,
    position: "Data Engineer",
    company: "LinkedIn",
    city: "Sunnyvale",
    fullyRemote: false,
    friendly: true,
    salary: "$95,000 - $115,000",
    technologies: ["SQL", "Spark", "Hadoop", "Airflow"],
  },
  {
    id: 9,
    logo: twitter,
    position: "Product Manager",
    company: "Twitter",
    city: "San Francisco",
    fullyRemote: false,
    friendly: true,
    salary: "$110,000 - $130,000",
    technologies: ["Agile", "Scrum", "Product Management"],
  },
  {
    id: 10,
    logo: airbnb,
    position: "Quality Assurance Engineer",
    company: "Airbnb",
    city: "San Francisco",
    fullyRemote: false,
    friendly: true,
    salary: "$80,000 - $100,000",
    technologies: ["Selenium", "JUnit", "TestNG", "CI/CD"],
  },
];
