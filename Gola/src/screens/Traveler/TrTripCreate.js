import React from "react";
import TransportCard from "../../components/Traveler/TransportCard";
import Sidebar from "../../components/Traveler/Sidebar";
import Footer from "../../components/Traveler/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

import TripCreateForm from "../../components/Traveler/TripcCreateForm";
import homeimg from "../../assets/6.jpg";
import Navbar from "../../components/Traveler/Navbar";
import Home from "../../components/Traveler/Home";
import HomeContent from "../../components/Traveler/HomeContent";
import {useParams} from "react-router-dom";
import accommodationsDetails from "../../components/Traveler/HotelData";

const TrTripCreate = () => {
  const [trips, setTrips] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("") //database fetch link
  //     .then((result) => setTrips(result.data))
  //     .catch((err) => console.log(err));
  // }, []);

    const { accommodation_id } = useParams();
    const selectedItem = accommodationsDetails.find(accommodation => accommodation.accommodation_id === parseInt(accommodation_id));

    return (
      <div>
        <Navbar />
          <div>
              {selectedItem.accommodation_name}
          </div>


        <Footer />
      </div>
  );
};

export default TrTripCreate;
