import "./style.css"

export default function FoodChoiceGame(){
    return(
        <>
            <div id="tutorialScreen" className="tutorial-screen">
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


    <div id="choiceGame" className="game-container">
        <h2>Monte seu Prato</h2>

        <div className="score-container">
            <span>Adequação:</span>
            <div id="scoreValue">0%</div>
        </div>

        <div id="choiceFeedback" className="feedback-message"></div>
        <div id="additionalFeedback" className="additional-message"></div>

        <div id="foodList" className="food-list"></div>

        <div className="buttons-container">
            <button id="evaluateBtn" className="game-btn">Avaliar Alimentação</button>
            <button className="back-btn" id="backChoiceBtn">Voltar ao Menu</button>
        </div>
    </div>
    </>
    );
}