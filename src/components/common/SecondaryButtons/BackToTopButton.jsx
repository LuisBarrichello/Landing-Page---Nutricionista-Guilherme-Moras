import { useState, useEffect } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`w-10 h-10 bg-black hover:bg-slate-900 text-white flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}>
            <span>↑</span>
        </button>
    );
};

export default BackToTopButton;
