export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#575b68] p-2 text-sm flex flex-row">
            <p className="text-white" >Desenvolvido por Lucas Rodrigues Ramos</p>
        </footer>
    );
}