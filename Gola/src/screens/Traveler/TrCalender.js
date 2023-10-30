import React from "react";
import Sidebar from "../../components/Traveler/Sidebar";
import Footer from "../../components/LandingPage/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import TripNavbarWithSearch from "../../components/Traveler/TripNavbar";
import Calender from "../../components/Traveler/Calender";

const TrCalendar = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>

            <div className="">
              <Calender/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrCalendar;
