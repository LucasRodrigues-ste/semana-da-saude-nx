'use client'

import { useState } from "react";
import logo from "../../../public/placeholder.jpg"
import { NavItem } from "../NavItem/NavItem";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <header className="navbar">

            <a href="../HomePage">
                <img src={logo.src} alt="Logo Stellantis" className="w-10 sm:w-12 hover:scale-110 transition-all" />
            </a>

            <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">

                <li className="p-3 hover:bg-sky-300 rounded-2xl"><NavItem menuname='Campanha' url='../HealthCampaing'></NavItem></li>
                <li className="p-3 hover:bg-sky-300 rounded-2xl" ><NavItem menuname='Games' url='/HomePage'></NavItem></li>
                <li className="p-3 hover:bg-sky-300 rounded-2xl" ><NavItem menuname='Cartilha' url=''></NavItem></li>
                <li className="p-3 hover:bg-sky-300 rounded-2xl" ><NavItem menuname='Sobre' url='../About'></NavItem></li>

            </ul>

            <div className="xl:hidden">
                Bem vindo, Nome
            </div>

            <i className="bx bx-menu xl:invisible block text-4xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

            <div className={`absolute xl:hidden top-24 left-0 w-full bg-white text-black flex flex-col items-center gap-6
                    ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
            >

                <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                    <NavItem menuname='Campanha' url='../HealthCampaing'></NavItem>
                </li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                    <NavItem menuname='Games' url='/HomePage'></NavItem>
                </li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                    <NavItem menuname='Cartilha' url=''></NavItem>
                </li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-300">
                    <NavItem menuname='Sobre' url='../About'></NavItem>
                </li>

            </div>




        </header>

    );

}
