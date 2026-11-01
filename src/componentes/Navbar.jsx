

import { NavLink } from "react-router-dom";
import '../estilos/navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                DanielDev
            </div>

            <div className="navbar-links">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/Productos">Productos</NavLink>
                <NavLink to="/Contacto">Contacto</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;