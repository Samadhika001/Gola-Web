import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Traveler/Sidebar";
import NavbarWithSearch from "../../components/Traveler/TrNavbar";
import Navbar from "../../components/LandingPage/Navbar";
import Footer from "../../components/LandingPage/Footer";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";

//demo data
import foodList from "../../components/Traveler/FoodData";

const TrFoodDetails = () => {
  // useEffect(() => {
  //   // Fetch food details based on foodId from your API or data source
  //   axios
  //     .get(`YOUR_API_ENDPOINT/${foodId}`) // Refood with your API endpoint
  //     .then((result) => setFoodDetails(result.data))
  //     .catch((err) => console.log(err));
  // }, [foodId]);

  const { foodId } = useParams();
  // const [foodDetails, setFoodDetails] = useState(null);

  // Find the food with the matching id
  const foodDetails = foodList.find(
    (food) => food.id === parseInt(foodId)
  );

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <NavbarWithSearch />
          <div className="flex pb-[20px] justify-center">
            <div className="m-[20px] pl-[20px]">
              {foodDetails && (
                <div className="relative flex gap-2 md:w-max pl-[50px] mt-6 ">
                  <Card
                    color="transparent"
                    className="w-full max-w-[22rem] shadow-xl ml-8 rounded-[10px]"
                  >
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="p-[10px]"
                    >
                      {foodDetails.name}
                    </Typography>

                    <Typography color="gray" className="mt-1 font-normal">
                      <img src={foodDetails.img} alt="" />
                    </Typography>
                  </Card>
                  <Card className="shadow-none max-w-[300px] pt-[50px] pl-[20px]">
                    {foodDetails.description}
                  </Card>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrFoodDetails;
