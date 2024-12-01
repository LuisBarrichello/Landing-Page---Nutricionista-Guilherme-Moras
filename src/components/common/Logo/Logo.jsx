import logoDesktop from '../../../assets/images/logo_without_bg.svg';

const Logo = () => {
    return (
        <div className="w-auto max-h-16 flex items-center">
            <img
                src={logoDesktop}
                alt="logo com nome Guilherme Morás"
                className="h-40 inline object-contain"
            />
        </div>
    );
};

export default Logo;
