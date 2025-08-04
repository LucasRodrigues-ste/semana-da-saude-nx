import { Cabecalho, Hero, Rodape } from "@/components/interface";

export default function About(){
    return(
        <>
        {Cabecalho()}        
        <Hero>
            Pagina Sobre
        </Hero>
        {Rodape()}
        </>
    );
}