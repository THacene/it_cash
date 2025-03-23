import { Link } from "react-router-dom";
import "../styles/Header1.css"; 

function Header1() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Logo" /> 
            </div>
            <div className="signUp">
                <nav>
                    <ul>
                        <li><Link to="/login">Log In</Link></li>
                        <li><button className="first"><Link Link to="/CreateCard">Create a Card</Link></button></li>
                        <li><Link to="/AddUser" className="menu-button">Menu</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header1;
