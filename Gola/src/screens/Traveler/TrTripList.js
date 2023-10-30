import React from "react";
import TransportCard from "../../components/Traveler/TransportCard";
import Sidebar from "../../components/Traveler/Sidebar";

import Footer from "../../components/LandingPage/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

import { Button, Card } from "@material-tailwind/react";

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
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>


            <div className="flex">
              <div className="pt-12 pl-12 pr-[100px]">
                <Card
                  className="p-[10px] w-[200px] text-[#f8f8ff] shadow-xl flex-row"
                  style={{
                    background:
                      "linear-gradient(to right, #1bab1b,#1bab1b, #00ff7f",
                  }}
                >
                  <div>Completed</div>
                  <div className="ml-14">
                    {/* Completed count from database */}06
                  </div>
                </Card>
              </div>
              <div className="pt-12 pl-[100px]">
                <Card
                  className="p-[10px] w-[200px]  text-[#f8f8ff] shadow-xl flex-row"
                  style={{
                    background:
                      "linear-gradient(to right, #1bab1b,#1bab1b, #00ff7f",
                  }}
                >
                  <div>Pending</div>
                  <div className="ml-[80px]">
                    {/* Pending count from database */}02
                  </div>
                </Card>
              </div>
            </div>
            <div className="grid gap-2 lg:grid-cols-3">
              <TransportCard />
              <TransportCard />
              <TransportCard />

              {/* {trips.map((trip)=>{
      <TransportCard name={trip.name} description={trip.description} />;
    })
    }   */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrTripList;
