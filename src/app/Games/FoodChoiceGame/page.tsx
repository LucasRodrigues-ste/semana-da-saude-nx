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


                <div className="border-2 border-amber-600 flex justify-center flex-col space-y-2 p-2">

                    <h2 className="flex justify-center border-red-500 border">Monte seu Prato</h2>

                    <div className="flex justify-evenly border-2 border-fuchsia-700">
                        <span>Adequação:</span>
                        <div id="scoreValue">0%</div>
                    </div>

                    <div className="border-2 border-teal-950 flex justify-center"> Feedback</div>
                    <div className="additional-message"></div>

                    <div className="border-2 border-green-500 grid grid-cols-3 gap-4 p-4 "> 

                        <div className="border-2 border-red-500 p-3">A</div>
                        <div className="border-2 border-red-500 p-3">B</div>
                        <div className="border-2 border-red-500 p-3">C</div>
                        <div className="border-2 border-red-500 p-3">D</div>
                        <div className="border-2 border-red-500 p-3">E</div> 
                        <div className="border-2 border-red-500 p-3">F</div>
                        <div className="border-2 border-red-500 p-3">G</div>
                        <div className="border-2 border-red-500 p-3">H</div>
                        <div className="border-2 border-red-500 p-3">I</div>
                        <div className="border-2 border-red-500 p-3">J</div>
                        <div className="border-2 border-red-500 p-3">a</div>
                        <div className="border-2 border-red-500 p-3">K</div>
                        <div className="border-2 border-red-500 p-3">K</div>
                        <div className="border-2 border-red-500 p-3">K</div>
                        <div className="border-2 border-red-500 p-3">a</div>
                        <div className="border-2 border-red-500 p-3">a</div>
                        <div className="border-2 border-red-500 p-3">K</div>
                        <div className="border-2 border-red-500 p-3">K</div>
                        <div className="border-2 border-red-500 p-3">K</div>
                        <div className="border-2 border-red-500 p-3">m</div>
                        <div className="border-2 border-red-500 p-3">ç</div>
                        <div className="border-2 border-red-500 p-3">ç</div>
                        <div className="border-2 border-red-500 p-3">ç</div>
                        <div className="border-2 border-red-500 p-3">ç</div>

                    </div>

                    <div className="flex justify-evenly border-2 border-red-500">
                        <button className="">Avaliar Alimentação</button>
                        <button className="back-btn" id="backChoiceBtn">Voltar ao Menu</button>
                    </div>
                </div>

            </Hero>
            <Footer />
        </>
    );
}