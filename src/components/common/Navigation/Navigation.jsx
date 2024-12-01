import NavItem from '../NavItem/NavItem';
import PropTypes from 'prop-types';

const Navigation = ({ menuOpen }) => {
    const navItems = [
        { content: 'Home', path: '/' },
        { content: 'Sobre', path: '/sobre' },
        { content: 'Serviços', path: '/servicos' },
        { content: 'Atendimento', path: '/atendimento' },
        { content: 'Depoimentos', path: '/depoimentos' },
        { content: 'Instagram', path: '/instagram' },
        { content: 'Localização', path: '/localizacao' },
    ];

    return (
        <nav aria-label="Main Navigation">
            <ul
                className={`gap-3 md:flex md:items-center z-[-1] md:z-auto md:static absolute h-full w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 
                    ${
                        menuOpen
                            ? 'opacity-100 top-[60px]'
                            : 'opacity-0 top-[-400px]'
                    }`}
            >
                {navItems.map((navItem) => (
                    <NavItem
                        key={navItem.content}
                        path={navItem.path}
                        content={navItem.content}
                    ></NavItem>
                ))}
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
};

export default Navigation;
