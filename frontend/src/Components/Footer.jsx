import { FiDollarSign, FiCreditCard, FiBarChart2 } from "react-icons/fi";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-item">
                <FiCreditCard size={24} /> <span>Easy control of your money</span>
            </div>
            <div className="footer-item">
                <FiDollarSign size={24} /> <span>Get cashback in every transaction</span>
            </div>
            <div className="footer-item">
                <FiBarChart2 size={24} /> <span>Get clarity over your money</span>
            </div>
        </footer>
    );
}

export default Footer;
