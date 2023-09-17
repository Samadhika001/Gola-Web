import React from "react";
import { useState, useEffect } from "react";
import PlaceCard from "../../components/Traveler/PlaceCards";
import axios from "axios";
import Sidebar from "../../components/Traveler/Sidebar";
import TrNavbar from "../../components/Traveler/TrNavbar";
import Footer from "../../components/LandingPage/Footer";
import { Input, Button } from "@material-tailwind/react";

const TrPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    axios
      .get("") //database fetch link
      .then((result) => setPlaces(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setPlaces(e.target.value);

    if (searchInput.length > 0) {
      places.filter((hotel) => {
        return hotel.name.match(searchInput);
      });
    }}

    return (
      <div className="flex flex-col h-screen">
        <div className="flex">
          <Sidebar />
          <div className="flex-grow">
            <div>
              <TrNavbar />
              <form
                onSubmit={handleChange}
                className="relative flex w-full gap-2 md:w-max pl-[50px] mt-6"
              >
                <Input
                  type="search"
                  label="Type here..."
                  className="pr-20"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                />
                <Button
                  size="sm"
                  className="!absolute right-1 top-1 rounded bg-[#09B600]"
                >
                  Search
                </Button>
              </form>
              <div className="grid gap-2 lg:grid-cols-3">
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />

                {/* {places.map((place)=>{
      return(<PlaceCard name={place.name} description={place.description} />);
    })
    }   */}

                {/* {places.map((place , )=>{
      return (<PlaceCard name={place.name} description={place.description} />);
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


export default TrPlaces;
