import Button from '../../common/Button/Button';

const HeroContent = () => {
    return (
        <div className="container-content-hero flex flex-col items-center md:items-start gap-5 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-start ">
                Guilherme Morás
            </h1>
            <div>
                <h2 className="text-5xl sm:text-7xl font-bold">
                    Nutricionista Esportivo
                </h2>
            </div>
            <span className="md:w-3/5 text-sm sm:text-base md:text-lg md:text-white text-center md:text-start">
                Transforme seu corpo e sua saúde com a nutrição esportiva
                personalizada que potencializa seu desempenho e bem-estar.
            </span>
            <Button></Button>
        </div>
    );
};

export default HeroContent;
