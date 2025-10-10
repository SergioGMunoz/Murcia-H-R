import { Logo } from './logo.jsx';
import { Icons } from './icons.jsx';

export const NavBar = () => {
    return(
        <nav className="navbar">
            <Logo />
            <Icons/>
        </nav>
    )
}