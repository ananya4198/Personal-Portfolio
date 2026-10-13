type HeroProps = {
    name: string;
    intro: string;
}

export default function Hero({ name, intro }: HeroProps) {
    return (
        <header className="hero">
            <p className="note">class of 2030!</p>
            <h1>Hi, I'm {name}.</h1>
            <p className="intro">{intro}</p>
        </header>
    );
}