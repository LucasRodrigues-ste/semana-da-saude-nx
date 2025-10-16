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

            </Hero>
            <Footer />
        </>
    );
}