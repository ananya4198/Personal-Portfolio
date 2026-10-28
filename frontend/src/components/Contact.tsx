export default function Contact() {
    return (
      <footer id="contact" className="contact-wrap">
        <div className="contact">
          <p className="contact-note">say hi!</p>
          <h2>Let's build something together.</h2>
          <p className="contact-text">
            I'm looking for internships, research and project teams where I can keep
            learning. My inbox is always open.
          </p>
          <div className="contact-buttons">
            <a href="mailto:ananyanarts@gmail.com" className="contact-btn contact-btn-light">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              Email
            </a>
            <a href="https://github.com/ananya4198" className="contact-btn contact-btn-filled">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/YOUR-PROFILE" className="contact-btn contact-btn-filled">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ananya Nakka</p>
      </footer>
    );
  }