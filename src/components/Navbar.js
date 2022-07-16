import Links from "./Links";
import Button from "./shared/Button";

function NavBar({isOpen,linkOpen,btnOpen}) {
    return ( 
        <nav className={`navbar ${isOpen}`}>
                <Links classLink={`link-nav ${linkOpen}`} classUl="nav-items"></Links>
            <Button
                text="LOGIN"
                classButton={`btn btn-red ${btnOpen}`}
            />
        </nav>
     );
}

export default NavBar;