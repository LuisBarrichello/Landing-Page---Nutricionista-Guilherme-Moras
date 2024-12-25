import Heading from '../common/Heading/HeadingSection';
import ContentSection from '../common/ContentSection/ContentSection';
import { useRef, useEffect } from 'react';

/* images */
import mulher_praticando_musculacao from '../../assets/images/mulher_praticando_musculacao.webp';
import prato_saudavel from '../../assets/images/prato_saudavel.svg';
import spinning from '../../assets/images/spinning.webp';
import legumes_na_mesa from '../../assets/images/legumes_na_mesa.svg';
import cross_training from '../../assets/images/cross_training.webp';
import eat_healthy from '../../assets/images/eat_healthy.webp';

const CallToAction = () => {
    const images = [
        mulher_praticando_musculacao,
        prato_saudavel,
        spinning,
        legumes_na_mesa,
        cross_training,
        eat_healthy,
    ];

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let animationFrameId;

        const startScrolling = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 1;
                if (
                    scrollContainer.scrollLeft >=
                    scrollContainer.scrollWidth - scrollContainer.clientWidth
                ) {
                    scrollContainer.scrollLeft = 0;
                }
                animationFrameId = requestAnimationFrame(startScrolling);
            }
        };
        animationFrameId = requestAnimationFrame(startScrolling);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="p-mobile sm:p-tablet md:p-desktop">
            <div className="flex flex-col items-center gap-3">
                <Heading
                    heading="Qual a sua meta de transformação?"
                    className="text-center"></Heading>
                <ContentSection
                    content="Vamos juntos alcançar seus objetivos com uma nutrição personalizada e eficaz."
                    className="text-center"></ContentSection>
                <div
                    ref={scrollRef}
                    className="relative flex overflow-x-hidden w-full">
                    <div className="flex w-max space-x-0">
                        {[...images, ...images, ...images].map(
                            (image, index) => (
                                <div
                                    key={index}
                                    className="relative h-72 w-auto flex-shrink-0">
                                    {/* Gradiente aplicado ao contêiner */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-main-color-50/20 to-main-color/80"></div>
                                    {/* Imagem */}
                                    <img
                                        src={image}
                                        alt={`imagem-${index}`}
                                        className="h-full w-auto object-cover"
                                    />
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
