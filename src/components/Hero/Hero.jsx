import HeroContent from "../common/HeroContent/HeroContent";

const Hero = () => {
    return (
        <section
            id="home"
            className="p-mobile sm:p-tablet md:p-desktop md:bg-hero-pattern md:bg-cover md:bg-center md:bg-no-repeat w-full min-h-[calc(100vh-96px)] relative"
        >
            {/* Sobreposição de cor */}
            <div className="md:absolute md:inset-0 md:bg-main-color md:opacity-75"></div>
            <div className="md:ml-40 flex items-center h-full container-hero relative z-10 md:text-white">
                <HeroContent />
            </div>
        </section>
    );
};

export default Hero;
