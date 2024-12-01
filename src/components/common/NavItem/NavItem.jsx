import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = (props) => {
    const { path, content } = props;
    return (
        <li className="my-6 md:my-0 text-center">
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `sm:text-base md:text-base text-sm  duration-300 hover:text-main-color-500 transition-colors ${
                        isActive ? 'font-bold' : ''
                    } ${isActive ? 'text-main-color-600' : 'text-main-color'}`
                }
            >
                {content}
            </NavLink>
        </li>
    );
};

export default NavItem;

NavItem.propTypes = {
    path: PropTypes.string,
    content: PropTypes.string,
};
