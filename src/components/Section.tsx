import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  id?: string;
  note?: string;
  children: ReactNode;
};

export default function Section({ title, id, note, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <h2>{title}</h2>
        {note && <p className="note">{note}</p>}
      </div>
      {children}
    </section>
  );
}