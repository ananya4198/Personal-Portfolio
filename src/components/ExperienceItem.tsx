import type { ReactNode } from "react";
import type { ExperienceEntry } from "../data/experience";

const icons: Record<ExperienceEntry["icon"], ReactNode> = {
  code: <><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></>,
  flask: <><path d="M9 3h6" /><path d="M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3" /></>,
  gear: <><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></>,
  megaphone: <><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z" /><path d="M17 9a4 4 0 0 1 0 6" /></>,
};

type ExperienceItemProps = {
  item: ExperienceEntry;
};

export default function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <li className="timeline-item">
      <div className="timeline-node" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icons[item.icon]}
        </svg>
      </div>
      <div className="timeline-content">
        <div className="timeline-meta">
          <span>{item.dates}</span>
          {item.current && <span className="now-pill">now</span>}
        </div>
        <h3>{item.role}</h3>
        <p className="timeline-org">{item.org}</p>
        <p className="timeline-desc">{item.description}</p>
      </div>
    </li>
  );
}