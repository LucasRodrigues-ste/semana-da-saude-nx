import Link from "next/link";

export function GameButon(props: {gamename: string, url: string}) {
    return (
        <Link className='p-2' href={props.url}>
            {props.gamename}
        </Link>
    )
}