export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            &copy;Stellantis {currentYear} - Desenvolvido por Lucas Rodrigues
        </footer>
    );
}