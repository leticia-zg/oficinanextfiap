import { useRef } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
 
const Navbar = () => {
 
    const menuIconRef = useRef<HTMLImageElement | null>(null);
    const navRef = useRef<HTMLUListElement | null>(null);
 
    const handleMenuClick = () => {
        if (menuIconRef.current && navRef.current) {
            const isActive = navRef.current.classList.toggle("active");
            if (isActive) {
                menuIconRef.current.src = "/imgs/menuaberto.png";
                navRef.current.classList.remove("fechado");
            } else {
                menuIconRef.current.src = "/imgs/hamburger (1).png";
                navRef.current.classList.add("fechado");
            }
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente até o topo
    };

    const handleCloseMenu = () => {
        if (navRef.current) {
            navRef.current.classList.remove("active");
            navRef.current.classList.add("fechado");
            if (menuIconRef.current) {
                menuIconRef.current.src = "/imgs/hamburger (1).png";
            }
        }
    };

    return (
        <nav role="navigation" className="nav">
            <Link to="/">
                <img src="/imgs/logodesktop.png" alt="logo Porto" className="logo" role="img" />
            </Link>
            <img
                src="/imgs/hamburger (1).png"
                alt="menu-fechado"
                className="menu-fechado"
                role="menu"
                aria-expanded="false"
                ref={menuIconRef}
                onClick={handleMenuClick}
            />
            <ul className="fechado" ref={navRef}>
                <li>
                    <Link to="/" onClick={() => { handleScrollToTop(); handleCloseMenu(); }}>Início</Link>
                </li>
                <li>
                    <a href="/#segurado" role="link" onClick={handleCloseMenu}>Segurado Porto</a>
                </li>
                <li>
                    <a href="/#servicos" role="link" onClick={handleCloseMenu}>Serviços</a>
                </li>
                <li>
                    <Link to="/duvidasfrequentes" onClick={handleCloseMenu}>Dúvidas frequentes</Link>
                </li>
                <li>
                    <Link to="/login" className="btn-nav" onClick={handleCloseMenu}>Área do cliente</Link>
                </li>
            </ul>
        </nav>
    );
};
 
export default Navbar;
