export type ExperienceEntry = {
    id: string;
    dates: string;
    current: boolean;
    role: string;
    org: string;
    description: string;
    icon: "code" | "flask" | "gear" | "megaphone";
  };
  
  export const experiences: ExperienceEntry[] = [
    {
      id: "app-dev-club",
      dates: "2026 – present",
      current: true,
      role: "Web Dev Bootcamp Member",
      org: "UMD App Dev Club · College Park, MD",
      description: "Learning React, TypeScript and Git through weekly workshops, and building this portfolio as my first full React project.",
      icon: "code",
    },
    {
      id: "s2stem",
      dates: "2022 – present",
      current: true,
      role: "Counselor, Teacher & Admin Intern",
      org: "S2STEM · Glen Mills, PA",
      description: "Lead STEM activities for 1st–5th graders in after-school and summer programs, adapting lessons to keep everyone engaged.",
      icon: "flask",
    },
    {
      id: "robotics",
      dates: "2022 – 2026",
      current: false,
      role: "Vice President & Lead Programmer",
      org: "Robotics Club · Garnet Valley HS",
      description: "Led the programming team and ran meetings, outreach and social media. Finalist Alliance Captain in 2025 and 2026.",
      icon: "gear",
    },
    {
      id: "chemquest",
      dates: "2024 – 2026",
      current: false,
      role: "Advertising Chair",
      org: "ChemQuest Youth Organization",
      description: "Ran social media and promo content for a youth-led group hosting hands-on STEAM events, and taught kids the science behind each experiment.",
      icon: "megaphone",
    },
  ];