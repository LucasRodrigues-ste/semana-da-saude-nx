import logo from '../../../public/images/placeholder.jpg'
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";

export default function About() {
    return (
        <>
            <NavBar />
            <Hero>

                <h1 className="font-extrabold text-5xl text-black underline">Sobre</h1>

                <div className='text-black space-y-4 p-3'>

                    <h5 className='text-2xl'>1. Sobre o projeto</h5>
                    <div className=" p-3 rounded-3xl bg-white/50">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda sed soluta, est at neque dolorum, molestiae a deleniti numquam dicta aliquam nesciunt repellat! Dolor illum ipsa odio ab. Omnis.
                        </p>
                    </div>

                    <h5 className='text-2xl'>2. Objetivos do Evento</h5>
                    <div className=" p-3 rounded-3xl bg-white/50">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus natus, commodi voluptatum deleniti tempore fugiat consectetur corporis rerum quibusdam dolorum cupiditate voluptas atque, vitae fugit molestias cum laborum. Eaque!
                        </p>
                    </div>

                    <h5 className='text-2xl'>3. História ou Motivação</h5>
                    <div className=" p-3 rounded-3xl bg-white/50">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum voluptatum, dolore magni maiores quasi vitae corrupti vel. Odit laudantium laborum similique reiciendis tempora rerum ad, nostrum totam quam quod?
                        </p>
                    </div>

                    <h5 className='text-2xl'>4. Sobre o Equipe</h5>
                    <div className='space-y-4 p-3 rounded-3xl bg-white/50'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore hic dicta. Perferendis neque unde officiis! Commodi, nobis, dolore inventore, quas repudiandae explicabo quo necessitatibus itaque voluptas voluptatem distinctio veniam?
                        </p>

                        <div className="flex justify-evenly space-x-1">

                            <div className="border border-black rounded-full w-25 h-25 overflow-hidden">
                                <img src={logo.src} alt="Foto participante" className="w-full h-full object-cover" />
                            </div>

                            <div className="border border-black rounded-full w-25 h-25 overflow-hidden">
                                <img src={logo.src} alt="Foto participante" className="w-full h-full object-cover" />
                            </div>

                            <div className="border border-black rounded-full w-25 h-25 overflow-hidden">
                                <img src={logo.src} alt="Foto participante" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>

                    <h5 className='text-2xl'>5. Valores e Impacto Esperado</h5>
                    <div className=" p-3 rounded-3xl bg-white/50">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur quis enim natus rem est perspiciatis? Iure maxime rem accusamus nam unde inventore! Eius dignissimos numquam distinctio atque recusandae quod.
                        </p>
                    </div>
                </div>

            </Hero>
            <Footer />
        </>
    );
}