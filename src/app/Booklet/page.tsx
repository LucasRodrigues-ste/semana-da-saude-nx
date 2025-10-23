'use client';

import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => 
import('@/components/PDFViewer/PDFViewer'), { ssr: false });

export default function About() {
    
    return (
        <>
            <NavBar />
            <Hero>

            <div className='w-screen'>
                <PDFViewer />
            </div>

            <div className=" p-3 rounded-3xl bg-red-600/70 drop-shadow-xs drop-shadow-black/50 text-white space-y-4 text-center indent-2">
                <a href='\cartilha-nutri-stellantis.pdf' download>BAIXE NOSSA CARTILHA</a>
            </div>

            </Hero>
            <Footer />
        </>
    );
}