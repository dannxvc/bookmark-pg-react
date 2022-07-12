import Navbarlink from "./NavbarLink";
import "../css/Header.css";
import {ReactComponent as LogoSVG} from '../img/logo-bookmark.svg';
function Header() {
    return ( 
        <header className="header">
            <LogoSVG alt="Logo Bookmark"/> 
            <nav className="navbar">
                <Navbarlink></Navbarlink>
            </nav>
        </header>
     );
}

export default Header;