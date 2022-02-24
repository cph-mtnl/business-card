import About from "../components/About";
import Interests from "../components/Interests";
import Info from "../components/Info";
import Footer from "../components/Footer";

const BusinessCard = () => {
    return (
        <div className="business-card-container">
            <Info />
            <About />
            <Interests />
            <Footer/>
        </div>
    );
}

export default BusinessCard;