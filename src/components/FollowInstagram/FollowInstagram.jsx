import InstagramImg from '../../assets/images/instagram.svg';
import Heading from '../common/Heading/HeadingSection';

const FollowInstagram = () => {
    return (
        <section
            id="instagram"
            className="p-mobile sm:p-tablet md:p-desktop bg-instagram-pattern bg-center bg-no-repeat w-full relative">
            {/* Sobreposição de cor */}
            <div className="absolute inset-0 bg-main-color opacity-75 "></div>
            <div className="z-10 relative w-full flex flex-col items-center justify-center gap-10">
                <Heading
                    className="text-center text-white"
                    heading="Me acompanhe no Instagram"></Heading>
                <figure className="hover:scale-110 ease-in duration-300">
                    <a
                        href="https://www.instagram.com/guilhermemorasnutricionista/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer">
                        <img src={InstagramImg} alt="logo instagram" />
                    </a>
                </figure>
            </div>
        </section>
    );
};

export default FollowInstagram;
