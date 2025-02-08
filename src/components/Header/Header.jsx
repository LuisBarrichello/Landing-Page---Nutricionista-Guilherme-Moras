import Logo from '../common/Logo/Logo';
import Navigation from '../common/Navigation/Navigation.jsx';
import MenuHamburguer from '../common/MenuHamburguer/MenuHamburguer';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="w-full p-mobile md:p-tablet lg:p-desktop flex justify-between items-center md:shadow md:items gap-1">
                <Logo></Logo>
                <Navigation
                    menuOpen={menuOpen}
                    closeMenu={closeMenu}
                />
                <MenuHamburguer
                    toggleMenu={toggleMenu}
                    menuMobileOpen={menuOpen}
                />
            </header>
        </>
    );
};

export default Header;
