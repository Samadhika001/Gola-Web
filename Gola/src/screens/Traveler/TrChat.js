import React from "react";
import Sidebar from "../../components/Traveler/Sidebar";

import Footer from "../../components/LandingPage/Footer";


const TrChat = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>
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
