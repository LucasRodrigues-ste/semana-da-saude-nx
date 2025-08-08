import logo from '../../../../public/placeholder.jpg'
import Footer from "@/components/Footer/Footer";
import "./style.css"
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";

export default function FoodChoiceGame() {
    return (
        <>
            <NavBar/>
            <Hero>

                <div className="hidden">
                    <div className="tutorial-content">
                        <h3>Como Montar seu Prato Saudável</h3>
                        <div className="tutorial-instructions">
                            <p>➡️ Selecione até 10 alimentos para montar seu prato ideal</p>
                            <p>➡️ Tente incluir alimentos de diferentes grupos:</p>
                            <ul>
                                <li>🍅 Vegetais</li>
                                <li>🍗 Proteínas</li>
                                <li>🍚 Carboidratos</li>
                                <li>🥦 Legumes</li>
                                <li>🍎 Frutas</li>
                            </ul>
                            <p>➡️ Após selecionar, clique em "Avaliar" para ver seu resultado</p>
                        </div>
                        <button id="startGameBtn" className="start-game-btn">Entendi, vamos começar!</button>
                    </div>
                </div>

                <h2 className="rounded-4xl bg-white/50 text-center text-black text-3xl font-extrabold drop-shadow-xl">Monte seu Prato</h2>

                <div className="rounded-4xl bg-white/50 p-3 justify-evenly flex flex-col space-y-2 text-black">


                    <div className="rounded-2xl bg-white/75 p-2 drop-shadow-lg drop-shadow-black/25 flex justify-evenly">
                        <span>Adequação:</span>
                        <div id="scoreValue">0%</div>
                    </div>

                    <div className="rounded-2xl bg-white/75 p-2 justify-evenly drop-shadow-lg drop-shadow-black/25 text-center"> Feedback</div>

                    <div className="rounded-2xl bg-white/85 p-2 justify-evenly drop-shadow-lg drop-shadow-black/25 sticky top-0 z-30 text-center">Contador</div>
                    
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

                    <div  className="flex justify-evenly p-0.5 space-x-2 text-white">
                    <button className="w-1/2 rounded-2xl bg-red-500 drop-shadow-lg drop-shadow-black/50 p-3">Voltar ao Menu</button>
                    <button className="w-1/2 rounded-2xl bg-blue-700 drop-shadow-lg drop-shadow-black/50 p-3">Avaliar alimentação</button>
                    </div>
                </div>

            </Hero>
            <Footer />
        </>
    );
}