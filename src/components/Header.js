import "../css/Header.css";
import {ReactComponent as LogoSVG} from '../img/logo-bookmark.svg';
import Links from "./Links";
import Button from "./shared/Button";
function Header() {
    return ( 
        <header className="header">
            <LogoSVG alt="Logo Bookmark"/> 
            <nav className="navbar">
                <Links></Links>
                <Button
                text="LOGIN"
                classButton="btn btn-red"
            />
            </nav>
        </header>
     );
}

export default Header;