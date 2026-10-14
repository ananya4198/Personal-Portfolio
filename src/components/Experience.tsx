import { experiences } from "../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="page experience-inner">
        <div className="experience-intro">
          <h2>Experience</h2>
          <p>Teaching, leading, and building with other people.</p>
        </div>
        <ol className="timeline">
          {experiences.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}