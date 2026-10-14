import { useTypewriter } from "../hooks/useTypewriter";

type HeroProps = {
  name: string;
};

export default function Hero({ name }: HeroProps) {
  const greeting = `Hi, I'm ${name}.`;
  const typed = useTypewriter(greeting);

  return (
    <section id="top" className="hero">
      <span className="chip">Computer Science at the University of Maryland</span>
      <h1 aria-label={greeting}>
        <span aria-hidden="true">{typed}</span>
        <span className="caret" aria-hidden="true" />
      </h1>
      <a href="#work" className="btn btn-accent">See my projects →</a>
      <p className="currently">
        <span className="currently-label"><span className="pulse" />Currently</span>
        learning React in the UMD App Dev Club bootcamp and taking Object-Oriented
        Programming, Discrete Structures and Linear Algebra.
      </p>
    </section>
  );
}