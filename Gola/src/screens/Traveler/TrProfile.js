import React from "react";
import TransportCard from "../../components/Traveler/TransportCard";
import Sidebar from "../../components/Traveler/Sidebar";

import Footer from "../../components/LandingPage/Footer";


const TrProfile = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>

            <div className="grid gap-2 lg:grid-cols-3">
              <h1>Profile</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrProfile;
