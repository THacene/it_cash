import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar1.css";

const Sidebar1 = () => {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/add-user">Add User</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar1;