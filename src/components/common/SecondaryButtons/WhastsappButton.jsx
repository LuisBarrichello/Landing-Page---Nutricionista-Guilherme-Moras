import IconWhatsapp from '../../../assets/images/whatsapp_white.svg';

const WhastsappButton = () => {
    const phoneNumber = '5515998045248'; // Substitua pelo número do nutricionista (código do país incluso)
    const message = encodeURIComponent(
        'Olá, Guilherme! Gostaria de agendar uma consulta.',
    );

    return (
        <button className="w-12 h-12 md:w-14 md:h-14 bg-[#00A884] hover:bg-[#0abf94] text-white flex items-center justify-center rounded-full shadow-lg transition-all duration-300 animate-bounce">
            <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1">
                <img
                    src={IconWhatsapp}
                    alt="icone do whatsapp"
                    className="w-7"
                />
            </a>
        </button>
    );
};

export default WhastsappButton;
