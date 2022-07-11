import Navbarlink from "./NavbarLink";
import {ReactComponent as LogoSVG} from '../img/logo-bookmark.svg';
function Header() {
    return ( 
        <header>
            <LogoSVG alt="Logo Bookmark"/> 
            <nav>
                <Navbarlink></Navbarlink>
            </nav>
        </header>
     );
}

export default Header;