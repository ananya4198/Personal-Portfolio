export type Project = {
    id: string;
    title: string;
    org: string;
    year: string;
    summary: string;
    tags: string[];
    cover: string;
    link: string;
    linkLabel: string;
  };

  export const projects: Project[] = [
    {
      id: "portfolio",
      title: "This Portfolio",
      org: "UMD App Dev Club",
      year: "2026",
      summary: "The site you're on, built from reusable React components during the App Dev Club web dev bootcamp.",
      tags: ["React", "TypeScript", "Vite"],
      cover: "/covers/portfolio.svg",
      link: "https://github.com/ananya4198/Personal-Portfolio",
      linkLabel: "View on GitHub",
    },
    {
      id: "robotics",
      title: "FTC Robotics Code",
      org: "Garnet Valley Robotics",
      year: "2022–2026",
      summary: "Programmed the robot's autonomous and driver-controlled modes as Lead Programmer, led to a 2026 PA State Championship.",
      tags: ["Autonomous", "Teleop", "Robotics"],
      cover: "/covers/robotics.svg",
      link: "https://github.com/gvrobotics/Ananya-Code",
      linkLabel: "View on GitHub",
    },
    {
      id: "marble-madness",
      title: "Marble Madness",
      org: "Drexel Digital Development Camp",
      year: "2025",
      summary: "A Unity game with multiple themed levels, obstacles I designed myself, and VR support.",
      tags: ["Unity", "Game design", "VR"],
      cover: "/covers/marble-madness.svg",
      link: "https://youtu.be/ZAyca08JHe0",
      linkLabel: "Watch a demo",
    },
    {
      id: "cookielexic",
      title: "CookieLexic",
      org: "MIT Beaver Works CRE[AT]E Challenge",
      year: "2024",
      summary: "A browser extension that restyles web pages to make them easier to read for people with dyslexia.",
      tags: ["JavaScript", "HTML/CSS", "Accessibility"],
      cover: "/covers/cookielexic.svg",
      link: "https://github.com/ananya4198/GV-Stars_Cookie-Lexic",
      linkLabel: "View on GitHub",
    },
  ];
