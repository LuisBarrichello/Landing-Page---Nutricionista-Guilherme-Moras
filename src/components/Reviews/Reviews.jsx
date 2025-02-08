import Heading from '../common/Heading/HeadingSection';
import ContentSection from '../common/ContentSection/ContentSection';
import CardReview from '../common/CardReview/CardReview';

/* imagens */
import ViniciusPhoto from '../../assets/images/vinicius.jpeg';
import GustavoPhoto from '../../assets/images/gustavo.jpeg';
import GiovanaPhoto from '../../assets/images/giovana-souza.jpg';
import LuisPhoto from '../../assets/images/luis.png';

const Reviews = () => {
    const reviews = [
        {
            name: 'Gustavo Souza',
            image: GustavoPhoto,
            profession: 'Personal',
            review: 'Sensacional! Guilherme é muito preciso nas suas prescrições, dieta de acordo com o objetivo do cliente, simplesmente sensacional! Eu indico de olho fechado.',
        },
        {
            name: 'Vinícius Ramos Amorim',
            image: ViniciusPhoto,
            profession: 'Desenvolvedor',
            review: 'Muito atencioso. Mais que um profissional, um amigo!',
        },
        {
            name: 'Giovana Souza',
            image: GiovanaPhoto,
            profession: '',
            review: 'Nunca me senti tão bem com a minha alimentação! Recomendo.',
        },
        {
            name: 'Luís Gabriel Barrichello',
            image: LuisPhoto,
            profession: 'Desenvolvedor',
            review: 'O plano alimentar personalizado do Guilherme tem me trazido ótimos resultados em pouco mais de um mês, com ganhos significativos de massa muscular. Sua orientação tem sido essencial para o meu progresso!',
        },
    ];

    return (
        <section
            id="statements"
            className="p-mobile sm:p-tablet md:p-desktop bg-white bg-custom-pattern bg-custom-size bg-custom-positon">
            <div className="w-full flex flex-col gap-8 mb-9">
                <div className="w-full mb-5 flex flex-col gap-3">
                    <Heading
                        className={'text-center'}
                        heading={'O que dizem meus pacientes?'}></Heading>
                    <ContentSection
                        content="Vamos juntos alcançar seus objetivos com uma nutrição personalizada e eficaz."
                        className={'text-center'}></ContentSection>
                </div>
                <div className="flex flex-col items-center gap-5 w-full md:items-stretch md:flex-row md:flex-wrap md:justify-evenly">
                    {reviews.map((review, index) => {
                        return (
                            <CardReview
                                key={index}
                                image={review.image}
                                alt={`foto do ${review.name} que fez o comentario `}
                                name={review.name}
                                profession={review.profession}
                                review={review.review}
                                className=""></CardReview>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
