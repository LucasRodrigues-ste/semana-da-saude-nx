import About from "@/app/About/page";
import { link } from "fs";
import { get } from "http";
import Link from "next/link";


export function MenuItem(props: any) {
    return (

        <Link className="p-2" href={props.url}>{props.menuname}</Link>
 
    );
}

export function Menu(props: any) {
    return (
        <div className="bg-fuchsia-600">
        <MenuItem menuname='Tela Inicial' url='../HomePage'></MenuItem>
        <MenuItem menuname='Campanha' url='../HealthCampaing'></MenuItem>
        <MenuItem menuname='Sobre' url='../About'></MenuItem>
        </div>
        
    );
}


export function Cabecalho() {
    return (
        <div className="bg-fuchsia-500">
            <Menu />
        </div>
        
    );
}

export function Rodape() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-fuchsia-500" >&copy;Stellantis {currentYear} - Desenvolvido por Lucas Rodrigues</footer>
    );
}

export function Hero(props: any) {
    return (
        <div className="bg-blue-500">
            {props.children}
        </div>
    );
}

export function GameButon(props: any) {
    return (
        <Link href={props.url}>
            {props.gamename}
        </Link>
    )
}