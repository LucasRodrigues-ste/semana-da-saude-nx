export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#43aaa0] p-2 text-sm flex flex-row">
            <p className="text-white" >Desenvolvido por Lucas Rodrigues Ramos - {currentYear}</p>
        </footer>
    );
}