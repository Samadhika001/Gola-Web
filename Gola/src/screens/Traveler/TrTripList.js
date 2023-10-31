import React from "react";
import TransportCard from "../../components/Traveler/TransportCard";
import Sidebar from "../../components/Traveler/Sidebar";

import Footer from "../../components/Traveler/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

import {Button, Card, Typography} from "@material-tailwind/react";
import Navbar from "../../components/Traveler/Navbar";

const TrTripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("") //database fetch link
      .then((result) => setTrips(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
        <div className="m-4">
            <Typography variant="h4" color="blue-gray"className=" my-5" >
            My Trips
        </Typography>
        <Typography variant="h5" color="blue-gray" >
            My Trips
        </Typography>
        </div>
      <Footer />
    </div>
  );
};

export default TrTripList;
