import Logo from '../../assets/images/logo_without_bg.svg';
import Instagram from '../../assets/images/instagram_main_color.svg';

const Footer = () => {
    return (
        <>
            <section>
                <div className="bg-main-color-100 w-full flex flex-col justify-center items-center gap-8">
                    <figure className="flex flex-col justify-center items-center">
                        <img
                            src={Logo}
                            alt="logo com nome de Guilherme moras - Nutricionista"
                        />
                        <a
                            href="https://www.instagram.com/guilhermemorasnutricionista/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer hover:scale-110 ease-in duration-300">
                            <img src={Instagram} alt="logo do instagram" />
                        </a>
                    </figure>
                    <div className="m-2 flex flex-col items-center justify-center md:items-start md:flex-row md:gap-2">
                        <p>Guilherme Morás</p>
                        <p>Nutrição Esportiva</p>
                        <p>&copy; 2025</p>
                    </div>
                    <div className="m-2 flex flex-col items-center justify-center md:items-start md:flex-row md:gap-2">
                        <p>
                            Desenvolvido por{' '}
                            <a
                                href="https://www.linkedin.com/in/luisgabrielbarrichello/"
                                target="_blank"
                                className="text-main-color-700">
                                Luis Barrichello
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
