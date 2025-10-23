import Link from "next/link";

export function NavItem(props: {menuname: string, url: string}) {
    return (

        <Link href={props.url}>{props.menuname}</Link>
 
    );
}