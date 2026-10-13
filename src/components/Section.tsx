import type { ReactNode } from "react";

type SectionProps = {
    title: string;
    id?: string;
    children: ReactNode;
}

export default function Section({ title, id, children }: SectionProps) {
    return (
        <section id={id} className="section">
            <h2>{title}</h2>
            {children}
        </section>
    );
}