import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const NavItem = ({ id, content, menuMobileOpen, closeMenu }) => {
    return (
        <li className="font-semibold my-6 md:my-0 text-center">
                <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-50}
                    onClick={closeMenu}
                    className={`cursor-pointer sm:text-base md:text-base text-sm duration-300 hover:text-main-color-500 transition-colors text-main-color ${
                        menuMobileOpen ? 'text-white' : ''
                    }`}>
                    {content}
                </Link>
        </li>
    );
};

export default NavItem;

NavItem.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    menuMobileOpen: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
};
