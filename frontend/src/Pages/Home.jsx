import Navbar from "../Components/Navbar";
import "../styles/Home.css";
import Homepic from "../assets/homepic.png"
import Footer from "../Components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <div className="first-section">
                <div className="text-section">
                    <h1>Fast And Simple Digital Payment Solution</h1>
                    <p>
                    Get access to secure, one-time virtual cards for safe online transactions. 
                    Protect your financial data with ease and control your spending efficiently.
                    </p>
                    <div className="cta-container">
                        <button className="cta-button">Get Start</button>
                        <p className="cta-text">It will take just a few minutes...</p>
                    </div>
                </div>

                <div className="image-section">
                    <img src={Homepic} alt="Digital Payment" />
                </div>
            </div>
            <Footer/>

            {/* <footer className="footer">
                <div className="footer-item">Easy take control of your money</div>
                <div className="footer-item">Get cashback in every transaction</div>
                <div className="footer-item">Get clarity over your money</div>
            </footer> */}
        </>
    );
}

export default Home;
