'use client'

import { useState } from "react";
import logo from "../../../public/images/ODF.png"
import { NavItem } from "../NavItem/NavItem";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <header className="bg-[#575b68] drop-shadow-sm drop-shadow-black/30 relative flex justify-between items-center p-3 z-20">

            <a href="/">
                <img src={logo.src} alt="Logo Stellantis" className="w-10 sm:w-12 hover:scale-110 transition-all" />
            </a>

            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                <li className="p-3 hover:bg-sky-300 rounded-2xl"><NavItem menuname='Campanha' url='/'></NavItem></li>
                <li className="p-3 hover:bg-sky-300 rounded-2xl" ><NavItem menuname='Games' url='/Games/GameSelector'></NavItem></li>
                <li className="p-3 hover:bg-sky-300 rounded-2xl" ><NavItem menuname='Cartilha' url='/Booklet'></NavItem></li>
                <li className="p-3 hover:bg-sky-300 rounded-2xl" ><NavItem menuname='Sobre' url='../About'></NavItem></li>
            </ul>

            <div className="xl:hidden">
                Bem vindo
            </div>

            <i className="bx bx-menu xl:invisible block text-3xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

            <div
                className={`absolute xl:invisible top-12 right-0 w-3xs rounded-2xl bg-white/90 backdrop:blur-sm text-black font-semibold flex flex-col items-center transition-all duration-300
                ${isMenuOpen ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none - translate-y-4 scale-95"}`}
            >

                <ul>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                        <NavItem menuname='Campanha' url='/'></NavItem>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                        <NavItem menuname='Games' url='/Games/GameSelector'></NavItem>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                        <NavItem menuname='Cartilha' url='/Booklet'></NavItem>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                        <NavItem menuname='Sobre' url='../About'></NavItem>
                    </li>
                </ul>

            </div>

        </header>

    );

}
