import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <img src={project.cover} alt="" className="project-cover" />
      <div className="project-body">
        <p className="eyebrow">{project.org} · {project.year}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <a href={project.link} className="project-link">{project.linkLabel} →</a>
      </div>
    </article>
  );
}