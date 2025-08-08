import logo from '../../../../public/placeholder.jpg'
import "./style.css"
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function QuizGame() {
    return (
        <>
            <NavBar />
            <Hero>

                <h2 className="rounded-4xl bg-white/50 text-center text-black text-3xl font-extrabold drop-shadow-xl">Quiz de Alimentos</h2>
                
                <div className="rounded-4xl bg-white/50 p-3 justify-evenly flex flex-col space-y-2 text-black">

                    <div className="rounded-4xl bg-white/75 p-3 text-center drop-shadow-lg drop-shadow-black/25">
                        ❓Campo destinado para as perguntas do quiz❓ 
                    </div>
                    
                    <div className="rounded-4xl bg-white/75 p-3 text-center drop-shadow-lg drop-shadow-black/25">
                        💡Esse espaço e destinado para a dica da pergunta💡
                    </div>

                    <div className="rounded-4xl bg-white/75 p-2 flex justify-evenly drop-shadow-lg drop-shadow-black/25"> 

                        <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />
                        <img src={logo.src} alt="Logo Stellantis" className="w-20 sm:w-50 hover:scale-110 transition-all" />

                    </div>
                    
                    <div  className="flex justify-evenly p-0.5 space-x-2 text-white">
                    <button className="w-1/2 rounded-2xl bg-red-500 drop-shadow-lg drop-shadow-black/50 p-3">Voltar ao Menu</button>
                    <button className="w-1/2 rounded-2xl bg-blue-700 drop-shadow-lg drop-shadow-black/50 p-3">Próxima Pergunta</button>
                    </div>

                </div>

                    <div className="rounded-4xl bg-white/75 text-center text-black p-3">
                        Campo destinado para as curiosidades dos alimentos 
                    </div>

            </Hero>
            <Footer />
        </>

    );
}