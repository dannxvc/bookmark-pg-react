import {ReactComponent as LogoSVG} from '../img/logo-bookmark.svg';
import {ReactComponent as FacebookSVG} from '../img/icon-facebook.svg';
import {ReactComponent as TwitterSVG} from '../img/icon-twitter.svg';
function Footer() {
    const linkItems = [
        <a href="/">FEATURES</a>,
        <a href="/">PRICING</a>,
        <a href="/">CONTACT</a>,
        <a href="/">LOGIN</a>
    ];
    return ( 
        <footer>
            <LogoSVG alt="Logo Bookmark"/> 
            {linkItems.map((link, i) => (
                <div>{link}</div>
            ))}
            <FacebookSVG alt="Logo Facebook"/> 
            <TwitterSVG alt="Logo Facebook"/> 
        </footer>
     );
}

export default Footer;