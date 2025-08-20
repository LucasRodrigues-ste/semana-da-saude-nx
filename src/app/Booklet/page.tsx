import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function About() {
    return (
        <>
            <NavBar />
            <Hero>

                <h1 className="font-extrabold text-5xl text-black underline">Cartilha</h1>

            </Hero>
            <Footer />
        </>
    );
}