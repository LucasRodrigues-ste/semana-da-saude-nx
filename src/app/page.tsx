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

        <div className=" p-3  text-black transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl space-y-2 text-center indent-2 font-bold">
          <p>
            Alimentar bem, educar também
            Esta é a nossa área interativa! Aqui você poderá saber mais sobre o que é uma alimentação equilibrada e como integrar hábitos saudáveis na sua vida – tudo de forma leve e divertida – com muita informação e ações especiais como nosso concurso de receitas e jogos.
          </p>
          <p>
            O objetivo desta campanha é te mostrar como escolhas conscientes em cada refeição garantem nutrientes para sua saúde todos os dias. São pequenas atitudes fazem grande diferença para uma vida mais ativa e melhor.
          </p>
        </div>

        <h4 className='font-semibold text-5xl text-black text-center'>Interaja com nosso evento</h4>

        <div className="grid grid-cols-2xs justify-evenly gap-2 text-black drop">
          <Link href="/Games/GameSelector">
            <div className="rounded-2xl bg-white/60 drop-shadow-xs drop-shadow-black/50 flex flex-col p-3 space-y-3 transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl text-center indent-2">
              <h4 className='text-3xl p-1 font-semibold text-center'>Jogos</h4>
              <p>
                Participe de nossos jogos e veja como voce pode transformar seus habitos.
              </p>
            </div>
          </Link>

          <Link href="/Booklet">
            <div className="rounded-2xl bg-white/60 drop-shadow-xs drop-shadow-black/50 flex flex-col p-3 space-y-3 transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl text-center indent-2">
              <h4 className='text-3xl p-1 font-semibold text-center'>Cartilha</h4>
              <p>
                Acesse nossa cartilha e aprenda como tomar decisões concientes para ter uma vida mais saudavel.
              </p>
            </div>
          </Link>


          <Link href="https://forms.office.com/e/U2eGiMFjYz">
            <div className=" p-3 rounded-3xl bg-white/60 drop-shadow-xs drop-shadow-black/50 text-black transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl space-y-4 text-center indent-2">
              <h4 className='text-3xl p-1 font-semibold text-center'>Sabores da Nossa História</h4>
              <p>
                Desperte o chef que há em você! Compartilhe com a gente aquele prato especial da sua família. Ao final da campanha, ele poderá a estrela dos restaurantes em todas as nossas plantas, além de compor um e-book com várias receitas de colegas em todo o Brasil.
              </p>
            </div>
          </Link>

        </div >

      </Hero >
      <Footer />
    </>
  );
}
