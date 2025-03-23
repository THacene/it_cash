import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">ITCash</Link>
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><Link to="#">Service</Link></li>
                    <li><Link to="#">How It Works</Link></li>
                    <li><Link to="#">Benefits</Link></li>
                    <li><Link to="#">Pricing</Link></li>
                </ul>
            </div>
            <div className="navbar-buttons">
                {/* Link the Log In button to /login */}
                <Link to="/login"><button className="login-btn">Log In</button></Link>
                <button className="signup-btn">Sign Up</button>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </nav>
    );
}

export default Navbar;
