import PropTypes from "prop-types";
import "./MenuHamburguer.css";

const MenuHamburguer = ({ toggleMenu, menuOpen }) => {
    return (
        <div className="w-10 h-10 block md:hidden">
            <input
                hidden
                className="check-icon"
                id="check-icon"
                name="check-icon"
                type="checkbox"
                checked={menuOpen}
                onChange={toggleMenu}
            />
            <label className="icon-menu" htmlFor="check-icon">
                <div className="bar bar--1" />
                <div className="bar bar--2" />
                <div className="bar bar--3" />
            </label>
        </div>
    );
};

MenuHamburguer.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired,
}

export default MenuHamburguer;