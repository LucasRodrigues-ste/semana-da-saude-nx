import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";

export default function HealthCampaing() {
  return (
    <>
      <NavBar />
      <Hero>

        <h1 className="font-extrabold text-5xl text-black underline">Campanha</h1>

        <div className=" p-3 rounded-3xl bg-white/50 text-black transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
          <h5 className='text-2x1 p-1 font-semibold'>Alimente-se Bem, Viva Melhor</h5>
          <p >
            Bem-vindo(a) à nossa campanha de educação nutricional! 
            Aqui, o foco é você e a sua saúde. Queremos inspirar cada refeição como uma oportunidade de cuidar do corpo e da mente, incentivando escolhas equilibradas dentro e fora dos restaurantes da Stellantis.
          </p>
        </div>

        <div className="xl:w-2/4">
          <iframe className='aspect-video rounded-2xl' src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
        </div>

        <div className="grid grid-cols-2 justify-evenly gap-2 text-black">
          <div className="rounded-2xl bg-white/50 flex flex-col p-3 space-y-3 transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque amet recusandae sunt placeat, esse obcaecati deserunt. Animi repellat dolorem sint dignissimos vero eos molestiae facilis ullam iste! Molestias, nostrum aperiam.
            </p>
          </div>

          <div className="rounded-2xl bg-white/50 flex flex-col p-3 space-y-3 transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, doloribus. Harum dolore quas, aspernatur a debitis, dicta velit natus ipsum itaque, accusamus iste maxime alias. Saepe rerum molestias cum ipsam.
            </p>
          </div>
        </div>

        <div className="text-black rounded-2xl bg-white/50 flex flex-col p-3 space-y-3 transition-transform duration-300 hover:rotate-1 hover:scale-105 hover:shadow-2xl">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae perspiciatis inventore quibusdam quo debitis natus? Et iure eius officia aliquam, quisquam autem rerum veritatis consequuntur amet animi quos accusamus!
          </p>
        </div>

      </Hero>
      <Footer />
    </>
  );
}
