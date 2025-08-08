import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import "./style.css"
import { GameButon } from "@/components/interface";
import NavBar from "@/components/NavBar/NavBar";

export default function HomePage() {

    return (
        <>
            <NavBar />

            <Hero>

                
                    <h1 className="rounded-4xl bg-white/50 text-center text-black text-3xl font-extrabold drop-shadow-xl ">Jogos dos Alimentos Saudáveis</h1>
                

                <div className="rounded-4xl bg-white/50 p-3 justify-evenly flex flex-col space-y-2 text-white">

                    <button className="game-btn">
                        <GameButon gamename="Quiz de Alimentos" url="/Games/QuizGame"></GameButon>
                    </button>

                    <button className="game-btn">
                        <GameButon gamename="Jogo da Memoria" url="/Games/MemoryGame"></GameButon>
                    </button>

                    <button className="game-btn">
                        <GameButon gamename="Monte seu Prato" url="/Games/FoodChoiceGame"></GameButon>
                    </button>

                </div>

            </Hero>

            <Footer />
        </>

    );
}