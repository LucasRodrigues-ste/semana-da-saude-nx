import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import "./style.css"
import { GameButton } from "@/components/interface";
import NavBar from "@/components/NavBar/NavBar";

export default function GameSelector() {

    return (
        <>
            <NavBar />

            <Hero>

                <h1 className="rounded-4xl bg-white/90 text-center text-black text-3xl font-extrabold drop-shadow-xl p-3">Jogos dos Alimentos Saudáveis</h1>

                <div className="space-y-3">

                    <div className="rounded-2xl bg-white/60 p-3 flex flex-col space-y-2 text-black text-center">
                        <p>
                            Hora de testar seus conhecimentos! Neste quiz, você responderá 10 perguntas sobre dieta, nutrientes e alguns mitos sobre alimentação.
                        </p>

                        <button className="game-btn">
                            <GameButton gamename="Sabores e Saberes" url="/Games/QuizGame"/>
                        </button>
                    </div>

                    <div className="rounded-2xl bg-white/60 p-3 flex flex-col space-y-2 text-black text-center">

                        <p>
                            Um game bom para o corpo e a mente. Combine as cartas corretamente, receba informações sobre os alimentos e descubra como eles ajudam a sua saúde.
                        </p>

                        <button className="game-btn">
                            <GameButton gamename="Jogo da Memoria" url="/Games/MemoryGame"/>
                        </button>
                    </div>

                    <div className="rounded-2xl bg-white/60 p-3 flex flex-col space-y-2 text-black text-center">

                        <p>
                           Neste game, você aprende como montar uma refeição equilibrada, com carboidratos, proteínas, fibras e vitaminas na medida certa. E aí, qual nota seu prato merece?
                        </p>

                        <button className="game-btn">
                            <GameButton gamename="Monte seu Prato" url="/Games/FoodChoiceGame"/>
                        </button>
                    </div>

                </div>

            </Hero>

            <Footer />
        </>

    );
}