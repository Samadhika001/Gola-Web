import React from "react";
import { useState, useEffect } from "react";
import HotelCard from "../../components/Traveler/HotelCards";
import axios from "axios";
import Sidebar from "../../components/Traveler/Sidebar";
import NavbarWithSearch from "../../components/Traveler/TrNavbar";
import Footer from "../../components/LandingPage/Footer";
import { Input,Button } from "@material-tailwind/react";

const TrHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    axios
      .get("") //database fetch link
      .then((result) => setHotels(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setHotels(e.target.value);

    if (searchInput.length > 0) {
      hotels.filter((hotel) => {
        return hotel.name.match(searchInput);
      });
    }
  }
  

    return (
      <div className="flex flex-col h-screen">
        <div className="flex">
          <Sidebar />
          <div className="flex-grow">
            <div>
              <NavbarWithSearch />
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
                <HotelCard />
                <HotelCard />
                <HotelCard />

                {/* {hotels.map((hotel)=>{
      <HotelCard name={hotel.name} description={hotel.description} />;
    })
    }   */}

                {/* {hotels.map((hotel , )=>{
      <HotelCard name={hotel.name} description={hotel.description} />;
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


export default TrHotels;
