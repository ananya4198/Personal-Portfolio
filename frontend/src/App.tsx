import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import { projects } from "./data/projects";
import "./App.css";

export default function App() {
  return (
    <main>
      <div className="page">
        <Navbar />
        <Hero name="Ananya" />
        <Section id="work" title="My projects" note="more on the way →">
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      </div>

      <Experience />

      <div className="page">
        <About />
        <Contact />
      </div>
    </main>
  );
}