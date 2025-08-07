import Link from "next/link";

export function NavItem(props: any) {
    return (

        <Link href={props.url}>{props.menuname}</Link>
 
    );
}