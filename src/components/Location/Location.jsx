import HeadingSection from '../common/Heading/HeadingSection';
import ContentSection from '../common/ContentSection/ContentSection';
import Button from "../common/Button/Button"

const Location = () => {
    return (
        <section id="location" className="p-mobile sm:p-tablet md:p-desktop">
            <div className="mt-3 flex flex-col w-full h-screen gap-8 items-center justify-center">
                <div className="text-center flex flex-col gap-2">
                    <HeadingSection heading="Localização"></HeadingSection>
                    <ContentSection
                        content="Atendo na Alcateia Fitness. Venha conhecer nosso espaço e agendar sua consulta!"
                        className={'text-center text-xl'}></ContentSection>
                </div>
                <div className="w-full h-3/5 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.045647669552!2d-47.835407!3d-23.058788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c66bdb8cc99fa3%3A0x275ee2c6cebaf4b6!2sAlcateia%20Fitness!5e0!3m2!1spt-BR!2sbr!4v1737809227046!5m2!1spt-BR!2sbr"
                        className="absolute top-0 left-0 w-full h-full"
                        /* width="600"
                        height="450" */
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
        </section>
    );
};

export default Location;
