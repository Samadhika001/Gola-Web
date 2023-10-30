import React from "react";
import { useState, useEffect } from "react";
import FoodCard from "../../components/Traveler/FoodCard";
import axios from "axios";
import Sidebar from "../../components/Traveler/Sidebar";
import Footer from "../../components/LandingPage/Footer";
import { Input, Button } from "@material-tailwind/react";

import FoodList from "../../components/Traveler/FoodData";

const TrFoods = () => {
  const [cart, setCart] = useState([]);
  const [foods, setFoods] = useState([]);
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    axios
      .get("") //database fetch link
      .then((result) => setFoods(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setFoods(e.target.value);

    if (searchInput.length > 0) {
      foods.filter((food) => {
        return food.name.match(searchInput);
      });
    }
  };

  const handleClick = (item) => {
    const newCart = [...cart, item];
    // Update the cart state with the new array
    setCart(newCart);
    console.log(newCart);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>
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
              {/* <HotelCard handlClick={handleClick} />
                <HotelCard />
                <HotelCard /> */}

              {/* {Foods.map((hotel)=>{
      <HotelCard name={hotel.name} description={hotel.description img = {hotel.img}} handlClick={handleClick}/>;
    })
    }   */}
              {FoodList.map((food) => (
                <FoodCard item={food} handleClick={handleClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrFoods;
