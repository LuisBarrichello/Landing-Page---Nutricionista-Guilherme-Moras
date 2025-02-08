import NavItem from '../NavItem/NavItem';
import PropTypes from 'prop-types';

const Navigation = ({ menuOpen, closeMenu }) => {
    const navItems = [
        { content: 'Home', id: 'home' },
        { content: 'Sobre', id: 'about' },
        { content: 'Serviços', id: 'services' },
        { content: 'Atendimento', id: 'assistance' },
        { content: 'Depoimentos', id: 'statements' },
        { content: 'Instagram', id: 'instagram' },
        { content: 'Localização', id: 'location' },
    ];

    return (
        <>
            {/* Fundo opaco quando o menu estiver aberto */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-40 transition-opacity"></div>
            )}

            <nav aria-label="Main Navigation">
                {/* PENSAR COMO DEIXAR BONITO QND ABRIR MOBILE */}
                <ul
                    className={`gap-3 md:flex md:items-center md:z-auto md:static absolute h-full w-full left-0 md:w-auto md:py-0 md:pl-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 
                    ${
                        menuOpen
                            ? 'opacity-100 top-[60px] z-50 content-center'
                            : 'opacity-0 top-[-400px]'
                    }`}>
                    {navItems.map((navItem) => (
                        <NavItem
                            key={navItem.content}
                            id={navItem.id}
                            content={navItem.content}
                            menuMobileOpen={menuOpen}
                            closeMenu={closeMenu}></NavItem>
                    ))}
                </ul>
            </nav>
        </>
    );
};

Navigation.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
};

export default Navigation;
