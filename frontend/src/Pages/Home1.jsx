import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../Components/Header1";
import Footer1 from "../Components/Footer1";
import "../styles/Home1.css";

function Home1() {
    return (
        <>
            <Header1 />
            <div className="first-section">
                <div className="text-section">
                    <h1>Fast And Simple Digital Payment Solution</h1>
                    <p>
                        Many credit cards are lost by users, stolen, or expired, but these cards can
                        still be used by others. This website can provide you with card necessary
                        information, and they also offer burner credit cards (single-use virtual
                        cards).
                    </p>
                    <div className="cta-container">
                        <Link to="/register">
                            <button className="cta-button">Create An Account</button>
                        </Link>
                        <p className="cta-text">It will take a few minutes...</p>
                    </div>
                    <div className="gotodash-container">
                        <Link to="/dashboard">
                            <button className="gotodash">Go to Dashboard</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}

export default Home1;