import Links from "./Links";
import Button from "./shared/Button";

function NavBar({isOpen,linkOpen,btnOpen,onClickLink}) {
    return ( 
        <nav className={`navbar ${isOpen}` }>
                <Links classLink={`link-nav ${linkOpen}`} classUl="nav-items" onClickLink={onClickLink}></Links>
            <Button
                text="LOGIN"
                classButton={`btn btn-red ${btnOpen}`}
            />
        </nav>
     );
}

export default NavBar;