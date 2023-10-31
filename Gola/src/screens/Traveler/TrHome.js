import React from "react";
import Navbar from "../../components/Traveler/Navbar";
import Home from "../../components/Traveler/Home";
import HomeContent from "../../components/Traveler/HomeContent";
import Footer from "../../components/Traveler/Footer";
import homeimg from "../../assets/6.jpg";
import Destination from "../../components/LandingPage/Destination";
import accommodationsDetails from "../../components/Traveler/HotelData";
const TrHome = () => {
    const imgStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1, // Place the image behind the content
    };


    return (

        <div>
            <img
                className="w-full h-full object-cover"
                src={homeimg}
                alt="Background Image"
                style={imgStyle}
            />
            <div
                className="absolute top-0 left-0 w-full h-full
       bg-gray-700/30"></div>
            <Navbar />
            <Home />
          <HomeContent />
        <Footer />
        </div>
    );
};

export default TrHome;
