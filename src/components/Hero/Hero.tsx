import { ReactNode } from "react";

interface HeroProps {
    children: ReactNode
}

export default function Hero(props: HeroProps) {
    return (
        <div className="hero bg-[url('/images/Backgrounds/15929-BG-Jogos-Camp-Educacao-Nutri-Stellantis-02-1080x1920px.png')] bg-no-repeat bg-cover">
            
            {props.children}
        </div>
    );
}



