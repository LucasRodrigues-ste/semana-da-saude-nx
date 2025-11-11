'use client';

import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import dynamic from 'next/dynamic';
import { GameButton } from "@/components/interface";
import { ScrollToTopButton } from "@/components/scroll";

const PDFViewer = dynamic(() =>
    import('@/components/PDFViewer/PDFViewer'), { ssr: false });

export default function About() {

    return (
        <>
            <NavBar/>
            <Hero>
                <div>
                    <PDFViewer />

                    <div className="flex justify-evenly p-0.5 space-x-2">

                        <GameButton class="w-1/2 rounded-2xl bg-[#e42313] p-3 drop-shadow-xs drop-shadow-black/50 font-semibold text-center " gamename="VOLTAR" url="/" />

                        <div className="w-1/2 rounded-2xl bg-blue-900 p-3 drop-shadow-xs drop-shadow-black/50 font-semibold text-center">
                            <a className="inline-flex items-center space-x-0.5" href='\cartilha-nutri-stellantis.pdf' download><i className='p-0.5 bx bx-arrow-to-bottom text-2xl text-center text-white'></i>BAIXAR</a>
                        </div>

                    </div>

                </div>

                <ScrollToTopButton />

            </Hero>
            <Footer />
        </>
    );
}

// <i className='p-0.5 bx bx-arrow-to-bottom text-2xl text-center text-white'></i>