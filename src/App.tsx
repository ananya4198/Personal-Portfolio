import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import "./App.css"
import { projects } from "./data/projects";

export default function App() {
    return (
      <main className="page">
        <Navbar />
        <Hero 
          name="Ananya Nakka"
          intro="I'm a first year Computer Science student at the University of Maryland, College Park."
        />

        <Section title="Right now I'm...">
          <ul>
            <li>Learning web dev through the UMD App Dev Club bootcamp</li>
            <li>Taking Object Oriented Programming, Discrete Structures and Linear Algebra</li>
          </ul>
        </Section>

        <Section title="Things I've made">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Section>

        <Section title="Let's connect" id="contact">
          <a href="mailto:ananyanarts@gmail.com">Email me</a>
        </Section>
      </main>
    );
  }