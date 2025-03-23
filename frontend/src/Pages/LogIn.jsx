import "../styles/Login.css"; // Add your own styling
import { Link } from "react-router-dom";


function Login() {
    return (
        
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? <Link to="/">Go back to Home</Link></p>
        </div>
    );
}

export default Login;
