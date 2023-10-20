import React from "react";
import TripCard from "../../components/Traveler/TripCard";
import Sidebar from "../../components/Traveler/Sidebar";
import NavbarWithSearch from "../../components/Traveler/TrNavbar";
import Footer from "../../components/LandingPage/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import TripNavbarWithSearch from "../../components/Traveler/TripNavbar";

const TrTripTour = () => {
  const [trips, setTrips] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("") //database fetch link
  //     .then((result) => setTrips(result.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>
            <TripNavbarWithSearch />
            <div className="grid gap-2 lg:grid-cols-3 m-8">
             Tour
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrTripTour;
