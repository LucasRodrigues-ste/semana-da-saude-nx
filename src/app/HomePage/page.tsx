import "./style.css"
import { Cabecalho, GameButon, Hero, Rodape } from "@/components/interface";

export default function HomePage() {

    return (
        <>
        {Cabecalho()}
        <hr/>

        <Hero>

        <div id="menuScreen">

        <h1>Jogos dos Alimentos Saudáveis</h1>

        <div className="menu">

            <button className="game-btn">
            <GameButon gamename="Quiz de Alimentos" url="/QuizGame"></GameButon>
            </button>

            <button className="game-btn">
            <GameButon gamename="Jogo da Memoria" url="/MemoryGame"></GameButon>
            </button>

            <button className="game-btn">
            <GameButon gamename="Monte seu Prato" url="/FoodChoiceGame"></GameButon>
            </button>


        </div>

    </div>
        </Hero>

    {Rodape()}
        </>

    );
}