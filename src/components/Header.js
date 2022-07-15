import { useEffect, useState } from "react";
import "../css/Header.css";
import {ReactComponent as LogoSVG} from '../img/logo-bookmark.svg';
import NavBar from "./Navbar";
function Header() {
    const [open,setOpen]= useState("close");
    const hamburguer = {
        close: {
            navopen: "",
            ulopen: "",
            hamopen:""
        },
        open: {
            navopen: "open",
            ulopen: "link-nav-open",
            hamopen:"open"
        }
    };

    useEffect(() => {
        if (open === "open") {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    });

    return ( 
        <header className="header">
            <a href="#intro">
                <LogoSVG alt="Logo Bookmark" className="nav-logo"/> 
            </a>
            <button className={`hamburguer ${hamburguer[open]["hamopen"]}`} onClick={()=> open === "close"?setOpen("open"): setOpen("close")}>
            </button>
            <NavBar 
                isOpen={hamburguer[open]["navopen"]}
                linkOpen={hamburguer[open]["ulopen"]}
            />
        </header>
     );
}

export default Header;