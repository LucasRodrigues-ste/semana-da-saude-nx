interface HeroProps {
    children: any
}

export default function Hero(props: HeroProps) {
    return (
        <div className="hero">
            {props.children}
        </div>
    );
}



