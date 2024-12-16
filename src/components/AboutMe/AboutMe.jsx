import GuilhermeImg from '../../assets/images/guilherme_moras_with_equipament.svg';
import HeadingSection from '../common/Heading/HeadingSection';
import ContentSection from '../common/ContentSection/ContentSection';
import ImageSection from '../common/ImageSection/ImageSection';
import PropTypes from 'prop-types';

const AboutMe = () => {
    const contentTexts = [
        'Meu objetivo é desenvolver planos alimentares personalizados que atendam às demandas específicas do seu esporte e objetivos. Vamos juntos transformar a nutrição em uma aliada poderosa na sua jornada!',
        'Trabalho para criar planos alimentares personalizados, alinhados às suas preferências, estilo de vida e metas individuais, sejam elas melhorar sua performance esportiva, alcançar o equilíbrio nutricional ou promover bem-estar geral.',
        'Trabalho para criar planos alimentares personalizados, alinhados às suas preferências, estilo de vida e metas individuais, sejam elas melhorar sua performance esportiva, alcançar o equilíbrio nutricional ou promover bem-estar geral.',
    ];
    return (
        <section className="p-mobile sm:p-tablet md:p-desktop">
            <div className="flex flex-col md:flex-row w-full gap-16 items-center justify-center">
                <ImageSection
                    image={GuilhermeImg}
                    alt={'imagem de Guilherme Morás com equipamentos'}
                ></ImageSection>
                <ContentSectionWrapper contentTexts={contentTexts} />
            </div>
        </section>
    );
};

const ContentSectionWrapper = ({ contentTexts }) => (
    <div className="flex items-center flex-col gap-6 md:w-1/2">
        <div className="flex flex-col items-center md:items-start gap-3 w-full">
            <HeadingSection
                heading="Olá, eu sou o"
                className="text-center md:text-start"
            ></HeadingSection>
            <HeadingSection
                heading="Guilherme Morás"
                className="text-main-color-500 text-3xl sm:text-4xl text-center md:text-start"
            ></HeadingSection>
        </div>
        <div className="flex flex-col gap-4 items-center">
            {contentTexts.map((text, index) => (
                <ContentSection
                    key={index}
                    className="text-center md:text-start"
                    content={text}
                ></ContentSection>
            ))}
            <ContentSection
                className="font-bold text-center md:text-start"
                content="Vamos juntos transformar a nutrição no seu maior diferencial?"
            ></ContentSection>
        </div>
    </div>
);

export default AboutMe;

ContentSectionWrapper.propTypes = {
    contentTexts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

