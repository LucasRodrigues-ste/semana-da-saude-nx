import { Cabecalho, Hero, Rodape } from "@/components/interface";

export default function HealthCampaing(){
    return(
        <>
        {Cabecalho()}        
        <Hero>
            Pagina Campanha
        </Hero>
        {Rodape()}
        </>
    );
}