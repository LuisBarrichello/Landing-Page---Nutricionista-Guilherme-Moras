import ImageSection from '../common/ImageSection/ImageSection';
import ImageGuilhermeMoras from '../../assets/images/guilherme_moras.svg';
import HeadingSection from '../common/Heading/HeadingSection';
import ContentSection from '../common/ContentSection/ContentSection';
import Button from '../common/Button/Button';
import ServiceList from '../common/ServiceList/ServiceList';

const Services = () => {
    const contentTexts = [
        'Ofereço planos alimentares personalizados e acompanhamento nutricional completo, focados em performance esportiva, estética e bem-estar geral. Com uma pós-graduação em Nutrição Esportiva e Performance, aliada a uma forte prática clínica, meu objetivo é criar estratégias simples e eficazes para você alcançar seus resultados de forma saudável e duradoura.',
        ' Sou dedicado a transformar a vida dos meus pacientes através de uma nutrição equilibrada e ajustada às necessidades individuais.',
    ];
    const listServices = [
        'Plano alimentar individualizado',
        'Acompanhamento contínuo',
        'Nutrição esportiva e estética',
        'Consultoria em saúde geral',
    ];
    return (
        <section id="servicos" className="p-mobile sm:p-tablet md:p-desktop">
            <div className="flex md:flex-row flex-col-reverse md:flex-row w-full gap-16 items-center justify-center">
                <div className="flex items-center md:items-start flex-col gap-6 md:w-2/3">
                    <div className="flex flex-col items-center md:items-start gap-3 w-full">
                        <HeadingSection
                            heading="Transforme sua Saúde e Performance com um Atendimento Personalizado"
                            className="text-center md:text-start"></HeadingSection>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        {contentTexts.map((text, index) => (
                            <ContentSection
                                key={index}
                                className="w-full text-center md:text-start"
                                content={text}></ContentSection>
                        ))}
                        <ServiceList services={listServices}></ServiceList>
                        <ContentSection
                            className="w-full text-center md:text-start"
                            content="CRN : 84717/P"></ContentSection>
                        <ContentSection
                            className="w-full font-bold text-center md:text-start"
                            content="Vamos juntos transformar sua alimentação em uma ferramenta poderosa para alcançar seus objetivos!"></ContentSection>
                        <div className="w-full">
                            <Button></Button>
                        </div>
                    </div>
                </div>
                <ImageSection
                    image={ImageGuilhermeMoras}
                    alt={'Imagem  de Guilherme Morás'}></ImageSection>
            </div>
        </section>
    );
};

export default Services;