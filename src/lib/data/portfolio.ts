import { PersonalInfo, Skill, Project, SocialLink, Certificate, Achievement } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Yoonho Kim",
  title: "Computer Science Student",
  university: "University of the South Pacific",
  major: "Computer Science and Information System",
  year: "2nd year",
  email: "S11231606@student.usp.ac.fj",
  bio: "Passionate computer science student with a focus on software development and artificial intelligence. Currently pursuing my degree at the University of the South Pacific, with hands-on experience in multiple programming languages and a strong foundation in object-oriented programming."
};

export const skills: Skill[] = [
  { name: "C++", level: 75, category: "primary" },
  { name: "ASP.NET", level: 70, category: "primary" },
  { name: "Java", level: 60, category: "primary" },
  { name: "TypeScript", level: 30, category: "secondary" },
  { name: "JavaScript", level: 30, category: "secondary" },
  { name: "Python", level: 50, category: "secondary" },
];

export const projects: Project[] = [
  {
    id: "study-flow",
    title: "Study-Flow",
    description: "A comprehensive web application designed to help students track and improve their study habits. Built with modern web technologies, this project demonstrates full-stack development skills and user-centered design principles.",
    technologies: ["React", "Node.js", "JavaScript", "CSS", "HTML", "Git"],
    features: [
      "Intuitive study session tracking",
      "Progress visualization and analytics",
      "Goal setting and achievement tracking",
      "Responsive design for all devices",
      "Clean and modern user interface",
      "Data persistence and management",
      "Performance optimization"
    ],
    githubUrl: "https://github.com/gamjamaster/Study-Habit-Tracker"
  },
  {
    id: "pptx-to-pdf",
    title: "Ppt to Pdf",
    description: "A simple manual python application to convert a ppt/pptx file to a pdf.",
    technologies: ["Python", "Git"],
    features: [
      "File conversion",
      "Error handling"
    ],
    githubUrl: "https://github.com/gamjamaster/Ppt-to-Pdf"
  },
  {
    id: "jushintech",
    title: "JushinTech Company Website",
    description: "This project involved redesigning and developing the official corporate website for Jushintech. The information architecture was restructured to help users quickly understand the company’s core technologies and product offerings. The UI was designed to emphasize reliability and professionalism, while a responsive layout and intuitive navigation were implemented to ensure an optimal experience across all devices",
    technologies: ["Typescript"],
    features: ["Responsive Design", "Fast Loading", "Clear Navigation", "Call-to-Action (CTA)", "Contact Form"],
    liveUrl: "https://jushintech.com"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:S11231606@student.usp.ac.fj",
    icon: "mail"
  },
  {
    name: "GitHub",
    url: "https://github.com/gamjamaster",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yoonho-kim-6b9aba322/",
    icon: "linkedin"
  }
];

export const certificates: Certificate[] = [
  {
    id: "Java-Basic-Certificate",
    title: "Java (Basic) Certificate",
    issuer: "HackerRank",
    issueDate: "2025-09-02",
    description: "It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc.",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/785b75728812",
    skills: ["OOP", "Algorithmic Thinking", "API & Library Usage", "Foundation for Frameworks"]
  },
  {
    id: "Python-Basic-Certificate",
    title: "Python (Basic) Certificate",
    issuer: "HackerRank",
    issueDate: "2025-09-02",
    description: "It covers topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/2e8d840911cc",
    skills: ["Python", "Algorithms", "Data Structures", "Problem Solving"]
  },
  {
    id: "Introduction-to-Cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issueDate: "2025-08-07",
    description: "This introductory course explores cybersecurity basics to protect personal digital life while providing insights into major security challenges faced by organizations worldwide.",
    credentialUrl: "https://www.credly.com/badges/229f34c6-44f8-47be-a2b8-243a5dd1173c/public_url",
    skills: ["Cybersecurity Fundamentals", "Digital Safety Practices", "Network Defense Basics"]
  },
  {
    id: "SWE-Intern",
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    issueDate: "2025-09-04",
    description: "It covers topics like Problem solving and SQL.",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/433d5b5e51eb",
    skills: ["SQL", "Database", "Coding", "Problem Solving"]
  }
];

export const achievements: Achievement[] = [
  {
    id: "Most-Outstanding-CS-2025",
    title: "Most Outstanding First-Year Student in the Discipline of Computer Science",
    description: "Awarded Most Outstanding First-Year Student in Computer Science (2025) for academic excellence",
    date: "2025-07-31",
    category: "academic",
    level: "local",
    details: [
      "Maintained GPA above 4.0/4.5",
      "Demonstrated leadership in group projects"
    ]
  },
];
