import "./style.css"

export default function QuizGame(){
    return(
            <div id="quizGame" className="game-container">

        <h2>Quiz de Alimentos</h2>

        <div className="quiz-options" id="options"></div>

        <div className="quiz-feedback" id="feedback"></div>

        <button className="game-btn" id="nextBtn">Próximo Alimento</button>

        <button className="back-btn" id="backQuizBtn">Voltar ao Menu</button>


    </div>

    );
}