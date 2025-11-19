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

                <h1 className="rounded-4xl bg-white text-center text-blue-900 text-3xl font-extrabold drop-shadow-xl p-3">Jogos da Saúde</h1>

                <div className="space-y-3">

                    <div className="rounded-2xl bg-white/60 p-3 flex flex-col space-y-2 text-black text-center">
                        <GameButton class="uppercase rounded-2xl bg-blue-900 p-3 text-white text-center text-5 font-bold  drop-shadow-xs drop-shadow-black/50" gamename="Sabores e Saberes" url="/Games/QuizGame" />
                        <p>
                            Hora de testar seus conhecimentos! Neste quiz, você responderá 10 perguntas sobre dieta, nutrientes e alguns <strong>mitos sobre alimentação</strong>.
                        </p>

                    </div>

                    <div className="rounded-2xl bg-white/60 p-3 flex flex-col space-y-2 text-black text-center">

                        <GameButton class="uppercase rounded-2xl bg-blue-900 p-3 text-white text-center text-5 font-bold  drop-shadow-xs drop-shadow-black/50" gamename="Jogo da Memoria" url="/Games/MemoryGame" />
                        <p>
                            Combine as cartas corretamente, receba informações sobre os alimentos e <strong>descubra como eles ajudam a sua saúde</strong>.
                        </p>

                    </div>

                    <div className="rounded-2xl bg-white/60 p-3 flex flex-col space-y-2 text-black text-center">

                        <GameButton class="uppercase rounded-2xl bg-blue-900 p-3 text-white text-center text-5 font-bold  drop-shadow-xs drop-shadow-black/50" gamename="Monte seu Prato" url="/Games/FoodChoiceGame" />
                        <p>
                            Neste game, você aprende como montar uma refeição equilibrada, com carboidratos, proteínas, fibras e vitaminas na medida certa. <br/> <strong>E aí, qual nota seu prato merece?</strong>
                        </p>

                    </div>

                </div>

                <GameButton class="uppercase rounded-2xl bg-[#e42313] p-3 text-white text-center text-5 font-bold  drop-shadow-xs drop-shadow-black/50" gamename="Voltar" url="/" />

            </Hero>

            <Footer />
        </>

    );
}