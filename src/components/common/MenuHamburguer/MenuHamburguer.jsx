import PropTypes from "prop-types";
import "./MenuHamburguer.css";

const MenuHamburguer = ({ toggleMenu, menuMobileOpen }) => {
    return (
        <div
            className={`w-10 h-10 block md:hidden ${
                menuMobileOpen ? 'z-50' : ''
            }`}>
            <input
                hidden
                className="check-icon"
                id="check-icon"
                name="check-icon"
                type="checkbox"
                checked={menuMobileOpen}
                onChange={toggleMenu}
            />
            <label className="icon-menu" htmlFor="check-icon">
                <div className={`bar bar--1 ${menuMobileOpen ? 'open' : ''}`} />
                <div className="bar bar--2" />
                <div className={`bar bar--3 ${menuMobileOpen ? 'open' : ''}`} />
            </label>
        </div>
    );
};

MenuHamburguer.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuMobileOpen: PropTypes.bool.isRequired,
}

export default MenuHamburguer;