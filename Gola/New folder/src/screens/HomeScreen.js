import React from "react";
import Corousel from "../components/LandingPage/Corousel";
import Destination from "../components/LandingPage/Destination";
import Footer from "../components/LandingPage/Footer";
import Home from "../components/LandingPage/Home";
import Navbar from "../components/LandingPage/Navbar";
import Search from "../components/LandingPage/Search";
import Selects from "../components/LandingPage/Selects";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Destination />
      <Search />
      <Selects />
      <Corousel />
      <Footer />
    </div>
  );
};



export default HomeScreen;