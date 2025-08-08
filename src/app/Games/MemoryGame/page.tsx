import "./style.css"
import logo from '../../../../public/placeholder.jpg'
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function MemoryGame() {
    return (

        <>
            <NavBar />

            <Hero>

                <h2 className="rounded-4xl bg-white/50 text-center text-black text-3xl font-extrabold drop-shadow-xl">Jogo da Memória</h2>

                <div className="rounded-4xl bg-white/50 p-3 justify-evenly flex flex-col space-y-2 text-black">

                    <div className="rounded-4xl bg-white/75 p-3 text-center drop-shadow-lg drop-shadow-black/25 flex justify-evenly space-x-2 text-white">

                        <span className="w-1/2 rounded-2xl bg-blue-900 drop-shadow-lg drop-shadow-black/50 p-3">Jogadas - 0</span>

                        <span className="w-1/2 rounded-2xl bg-blue-900 drop-shadow-lg drop-shadow-black/50 p-3">Pares - 0</span>

                    </div>

                    <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white/75 p-2 justify-evenly drop-shadow-lg drop-shadow-black/25">

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                        <div className="rounded-2xl bg-blue-900 p-3 text-center text-white">
                            <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        </div>

                    </div>

                    <button className="rounded-2xl bg-red-500 drop-shadow-lg drop-shadow-black/50 p-3 text-white">Voltar ao Menu</button>

                </div>

                <div className="rounded-4xl bg-white/75 text-center text-black p-3">
                    Campo destinado para as curiosidades dos alimentos
                </div>

            </Hero>

            <Footer />
        </>
    );
}