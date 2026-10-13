import type { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <a href={project.link} > Check it out! </a>
        </article>
    );
}