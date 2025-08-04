import "./style.css"

export default function MemoryGame(){
    return(
        
        <div id="memoryGame" className="game-container">

        <h2>Jogo da Memória</h2>

        <div className="stats">

            <span id="moves">0</span> jogadas |

            <span id="pairs">0</span>/6 pares

        </div>

        <div className="memory-board" id="gameBoard"></div>

        <button className="back-btn" id="backMemoryBtn">Voltar ao Menu</button>

    </div>
    );
}