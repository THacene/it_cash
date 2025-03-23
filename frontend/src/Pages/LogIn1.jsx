import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LogIn1.css";

function LogIn1() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password,
            });

            if (response.data.success) {
                navigate("/dashboard"); 
            } else {
                setError("Invalid email or password.");
            }
        } catch (err) {
            setError("Server error. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="Log-in">
                    Log-In
                </button>
                <button type="button" className="password">
                    Forgot Password?
                </button>
            </form>
            <p>
                Don't have an account? <Link to="/">Go back to Home</Link>
            </p>
        </div>
    );
}

export default LogIn1;