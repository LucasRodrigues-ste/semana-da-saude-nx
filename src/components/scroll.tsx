const isBrowser = () => typeof window !== 'undefined';
function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function ScrollToTopButton() {
    return (
        <button 
            className="fixed bottom-7 right-0 p-1 z-10" onClick={scrollToTop}>
            
            <i className="bx bx-up-arrow-circle text-4xl text-white"></i>
        </button>
    );
}

