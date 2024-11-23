import IconWhatsapp from "../../../assets/images/whatsapp_white.svg";

const Button = () => {
    return (
        <button className="bg-main-color-500 hover:bg-main-color-600 text-white py-2 px-4 rounded flex items-center gap-1">
            <img src={IconWhatsapp} alt="" className="" />
            <span className="uppercase">Agendar Consulta</span>
        </button>
    );
}

export default Button;