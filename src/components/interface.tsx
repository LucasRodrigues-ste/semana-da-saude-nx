import Link from "next/link";

export function GameButon(props: any) {
    return (
        <Link className='p-2' href={props.url}>
            {props.gamename}
        </Link>
    )
}