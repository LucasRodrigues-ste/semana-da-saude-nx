import Link from "next/link";

export function GameButton(props: {gamename: string, url: string, class: string}) {
    return (
        <Link className={props.class} href={props.url}>
            {props.gamename}
        </Link>
    )
}