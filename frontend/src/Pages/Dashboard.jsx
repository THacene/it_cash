import React from "react";
import Sidebar1 from "../Components/Sidebar1";
import Header11 from "../Components/Header11";
import Graph1 from "../Components/Graph1";
import Transactions1 from "../Components/Transactions1";
import Stats1 from "../Components/Stats1";
import "../styles/dashboard.css";
import "../Styles/global1.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar1 />
            <main className="content">
                <Header11 />
                <Stats1 />
                <Graph1 />
                <Transactions1 />
            </main>
        </div>
    );
};

export default Dashboard;