import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "./Pages/Home1";
import LogIn1 from "./Pages/LogIn1";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import AddUser from "./Pages/AddUser";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/login" element={<LogIn1 />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
            </Routes>
        </Router>
    );
}

export default App;