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

                <div className="border-2 border-red-500 p-3 text-center">
                    <h1>Jogos dos Alimentos Saudáveis</h1>
                </div >

                <div className="border-2 border-red-700 flex justify-center flex-col space-y-4 p-2">

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