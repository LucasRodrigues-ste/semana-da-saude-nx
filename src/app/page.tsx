import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import Image from "next/image";

export default function HealthCampaing() {
  return (
    <>
      <NavBar />
      <Hero>

        <Image src={'/images/15929 Chamada Nutriente Consciente.png'}
          width={800}
          height={800}
          quality={100}
          alt="Nutriente & Consciente, Alimentar bem, educar também"
        >
        </Image>

        <div className=" p-3  text-white space-y-2 text-justify indent-2">
          <p>
            Esta é a nossa área interativa! Aqui você poderá saber mais sobre o que é uma alimentação equilibrada e <strong>como integrar hábitos saudáveis na sua vida</strong>, de um jeito leve e divertido.
          </p>
          <p>
            O nosso objetivo é te mostrar como escolhas conscientes em cada refeição garantem nutrientes para sua saúde todos os dias. <strong>São pequenas atitudes, mas que fazem grande diferença para uma vida melhor.</strong>
          </p>
        </div>

        <div className="bg-[#43aaa0] w-screen -mx-4">
          <h4 className="font-semibold text-2xl uppercase text-white text-center p-5">
            Interaja com o evento
          </h4>
        </div>
   
        <div className="grid grid-cols-2xs justify-evenly gap-2 text-black drop">
          <Link href="/Games/GameSelector">
            <div className="rounded-2xl bg-white drop-shadow-xs drop-shadow-black/50 flex flex-col p-5 space-y-3 text-center ">
              <h4 className='text-2xl p-1 font-semibold text-center text-blue-900'>Jogos</h4>
              <span className="text-justify">
                Participe de nossos jogos e veja como você pode <strong>transformar seus hábitos.</strong>
              </span>
            </div>
          </Link>

          <Link href="/Booklet">
            <div className="rounded-2xl bg-white bg-whitedrop-shadow-xs drop-shadow-black/50 flex flex-col p-5 space-y-3 text-center ">
              <h4 className='text-2xl p-1 font-semibold text-center text-blue-900'>Cartilha</h4>
              <span className="text-justify">
                Acesse nossa cartilha e <strong>aprenda como tomar decisões concientes para ter uma vida mais saudável.</strong>
              </span>
            </div>
          </Link>


          <Link href="https://forms.office.com/e/U2eGiMFjYz">
            <div className=" p-5 rounded-3xl bg-white drop-shadow-xs drop-shadow-black/50 text-black space-y-4  text-justify">
              <h4 className='text-2xl p-1 font-semibold text-center text-blue-900'>A receita da sua família em nossos restaurantes</h4>
              <span className="text-justify">
                Compartilhe com a gente aquele prato especial e saudável da sua família para participar do <strong>&quot;Sabores da Nossa Historia&quot;</strong>. Ao final da campanha, <strong>ele poderá ser a estrela dos restaurantes em todas as nossas plantas no Brasil</strong>, além de compor um e-book com várias receitas de colegas em todo o pais.
              </span>
            </div>
          </Link>

        </div >

      </Hero >
      <Footer />
    </>
  );
}
