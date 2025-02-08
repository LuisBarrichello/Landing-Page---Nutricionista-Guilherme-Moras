import Heading from '../common/Heading/HeadingSection';
import ContentSection from '../common/ContentSection/ContentSection';
import Button from '../common/Button/Button';
/* images */
import suplemento from '../../assets/images/suplemento.webp';
import whey_protein from '../../assets/images/whey_protein.webp';

/* PENSAR NUMA LISTA, MUITOS TEXTO CLIENTE NAO GOSTA DE LER */

const ServiceDetails = () => {
    const serviceDetails = [
        'Totalmente personalizado e pode ser realizado tanto presencialmente quanto online. Com uma abordagem dinâmica e comunicativa, dedico o tempo necessário para entender profundamente os objetivos de cada pessoa. Durante a consulta, realizo uma avaliação completa utilizando adipômetro para analisar a composição corporal, incluindo massa magra e gordura.',
        'Com base nessa análise, estruturo um protocolo alimentar detalhado, que é elaborado e entregue em pouco tempo, garantindo que a dieta seja ajustada às preferências alimentares do paciente. Se necessário, exames complementares podem ser solicitados para um diagnóstico mais preciso.',
    ];
    return (
        <section
            id="assistance"
            className="p-mobile sm:p-tablet md:p-desktop my-2">
            <div className="h-full flex flex-col md:flex-row gap-16">
                <div className="flex gap-4 justify-center items-center h-full md:w-1/2 xl:w-1/3">
                    <figure className="relative md:bottom-3 rounded-lg overflow-hidden">
                        {/* Gradiente aplicado ao contêiner */}
                        <div className="absolute inset-0 bg-gradient-to-b from-main-color-50/20 to-main-color/80"></div>
                        <img src={suplemento} alt="mulher tomando suplemento" />
                    </figure>
                    <figure className="relative md:top-3 rounded-lg overflow-hidden">
                        {/* Gradiente aplicado ao contêiner */}
                        <div className="absolute inset-0 bg-gradient-to-b from-main-color-50/20 to-main-color/80"></div>
                        <img
                            src={whey_protein}
                            alt="homem segurando uma garrafa com suplemento"
                        />
                    </figure>
                </div>
                <div className="h-full flex flex-col gap-4 items-center md:items-start justify-center md:w-2/3">
                    <Heading
                        className={'text-center md:text-start'}
                        heading={'Como é o atendimento!'}></Heading>
                    {serviceDetails.map((service, index) => (
                        <ContentSection
                            key={index}
                            content={service}
                            className={
                                'text-center md:text-start'
                            }></ContentSection>
                    ))}
                    <div className="w-full flex justify-center md:justify-start">
                        <Button></Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
