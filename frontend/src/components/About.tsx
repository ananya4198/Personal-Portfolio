const coursework = [
    "Object-Oriented Programming",
    "Discrete Structures",
    "Linear Algebra",
    "Calculus I & II",
    "Statistics",
  ];
  const languages = ["Java", "JavaScript", "TypeScript", "C++", "HTML/CSS"];
  const tools = ["React", "Git & GitHub", "Unity", "Godot", "Android Studio", "VS Code", "Eclipse"];
  
  export default function About() {
    return (
      <section id="about" className="about">
        <div className="info-card">
          <h2>Education</h2>
          <div>
            <h3>University of Maryland, College Park</h3>
            <p className="info-sub">Bachelor of Science in Computer Science · Expected May 2029</p>
          </div>
          <div className="tags">
            {coursework.map((course) => (
              <span key={course} className="tag">{course}</span>
            ))}
          </div>
        </div>
  
        <div className="info-card">
          <h2>Toolkit</h2>
          <div className="skill-group">
            <p className="label">Languages</p>
            <div className="pills">
              {languages.map((lang) => (
                <span key={lang} className="pill pill-filled">{lang}</span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <p className="label">Frameworks & tools</p>
            <div className="pills">
              {tools.map((tool) => (
                <span key={tool} className="pill pill-outline">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }