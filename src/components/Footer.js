import {ReactComponent as LogoSVG} from '../img/logo-bookmark.svg';
import {ReactComponent as FacebookSVG} from '../img/icon-facebook.svg';
import {ReactComponent as TwitterSVG} from '../img/icon-twitter.svg';
import Links from './Links';
function Footer() {
    return ( 
        <footer>
            <LogoSVG alt="Logo Bookmark"/> 
            <Links></Links>
            <FacebookSVG alt="Logo Facebook"/> 
            <TwitterSVG alt="Logo Facebook"/> 
        </footer>
     );
}

export default Footer;