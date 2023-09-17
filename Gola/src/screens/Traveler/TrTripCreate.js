import React from "react";
import TripCard from "../../components/Traveler/TripCard";
import Sidebar from "../../components/Traveler/Sidebar";
import Footer from "../../components/LandingPage/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import TripNavbarWithSearch from "../../components/Traveler/TripNavbar";
import TripCreateForm from "../../components/Traveler/TripcCreateForm";

const TrTripCreate = () => {
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
            <div>
              <TripNavbarWithSearch />
            </div>
            <div className="mt-4 mb-4 ml-4">
              <TripCreateForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrTripCreate;
