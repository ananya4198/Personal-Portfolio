export type Project = {
    id: string;
    title: string;
    summary: string;
    link: string;
};

export const projects: Project[] = [
    {
        id: "portfolio",
        title: "This Portfolio",
        summary: "My personal site, built with React and Vite in the App Dev Club web dev bootcamp.",
        link: "https://github.com/ananya4198/Personal-Portfolio",
    },
];