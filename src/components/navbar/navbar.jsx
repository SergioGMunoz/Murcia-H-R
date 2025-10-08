import { Logo } from './logo.jsx';
import { Menu } from './menu.jsx';
import { Icons } from './icons.jsx';

import './navbar.css';

export const NavBar = () => {
    return(
        <nav className="navbar">
            <Logo />
            <Menu />
            <Icons/>
        </nav>
    )
}