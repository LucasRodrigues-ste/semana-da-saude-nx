import "./style.css"
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function QuizGame() {
    return (
        <>
            <NavBar />
            <Hero>

                <h2 className="border-2 border-red-500 p-3 text-center ">Quiz de Alimentos</h2>
                
                <div className="border-2 border-red-500 p-3 justify-evenly flex flex-col space-y-2">

                    <div className="border-2 border-red-500 p-3 text-center">
                        Pergunta
                    </div>
                    
                    <div className="border-2 border-red-500 p-3 text-center">
                        dica
                    </div>

                    <div className="quiz-feedback text-black border-2 border-red-500 p-2 flex justify-evenly"> 
                        <div className="border-2 border-red-500 p-3">a</div>
                        <div className="border-2 border-red-500 p-3">a</div>
                        <div className="border-2 border-red-500 p-3">a</div>
                    </div>
                    
                    <div  className="border-2 border-red-500 p-1 flex justify-evenly">
                    <button className="border-2 border-red-500 p-3">Voltar ao Menu</button>
                    <button className="border-2 border-red-500 p-3">Próximo Alimento</button>
                    </div>

                </div>

                    <div className="border-2 border-red-500 p-3 text-center">
                        curio
                    </div>

            </Hero>
            <Footer />
        </>

    );
}