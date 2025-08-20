export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-900 p-2 text-sm flex flex-row">
            &copy;Stellantis {currentYear} <p className="text-blue-900" >-Desenvolvido por Lucas Rodrigues Ramos</p>
        </footer>
    );
}