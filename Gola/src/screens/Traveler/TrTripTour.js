import React from "react";
import TransportCard from "../../components/Traveler/TransportCard";
import Sidebar from "../../components/Traveler/Sidebar";
import Footer from "../../components/LandingPage/Footer";
import axios from "axios";
import { useState, useEffect } from "react";


const TrTripTour = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("") //database fetch link
      .then((result) => setTrips(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>

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
