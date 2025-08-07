import "./style.css"
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function MemoryGame() {
    return (

        <>
            <NavBar />

            <Hero>

                <h2 className="border-3 border-red-700 text-center ">Jogo da Memória</h2>

                <div className="border-3 border-red-700 justify-center flex p-3 flex-col space-y-4">

                    <div className="border-2 border-red-600 flex justify-evenly">

                        <span>Jogadas - 0</span>

                        <span>Pares - 0</span>

                    </div>

                    <div className="flex grid-cols-4 justify-center border-2 border-fuchsia-700">
                        Cartas
                    </div>

                    <button className="">Voltar ao Menu</button>

                </div>

                <div className="border-2 border-red-500 p-3 text-center">
                    curio
                </div>

            </Hero>

            <Footer />
        </>
    );
}