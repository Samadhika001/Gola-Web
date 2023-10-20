import React from "react";
import TripCard from "../../components/Traveler/TripCard";
import Sidebar from "../../components/Traveler/Sidebar";
import NavbarWithSearch from "../../components/Traveler/TrNavbar";
import Footer from "../../components/LandingPage/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import TripNavbarWithSearch from "../../components/Traveler/TripNavbar";
import TrNavbar from "../../components/Traveler/TrNavbar";

const TrChat = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>
            <TrNavbar />
            <div className="grid gap-2 lg:grid-cols-3">
              <h1>Chat</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrChat;
