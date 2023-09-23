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
import placeList from "../../components/Traveler/PlaceData";

const TrPlaceDetails = () => {
  // useEffect(() => {
  //   // Fetch place details based on placeId from your API or data source
  //   axios
  //     .get(`YOUR_API_ENDPOINT/${placeId}`) // Replace with your API endpoint
  //     .then((result) => setplaceDetails(result.data))
  //     .catch((err) => console.log(err));
  // }, [placeId]);

  const { placeId } = useParams();
  // const [placeDetails, setplaceDetails] = useState(null);

  // Find the place with the matching id
  const placeDetails = placeList.find((place) => place.id === parseInt(placeId));

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <NavbarWithSearch />
          <div className="flex pb-[20px] justify-center">
            <div className="m-[20px] pl-[20px]">
              {placeDetails && (
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
                      {placeDetails.name}
                    </Typography>

                    <Typography color="gray" className="mt-1 font-normal">
                      <img src={placeDetails.img} alt="" />
                    </Typography>
                  </Card>
                  <Card className="shadow-none max-w-[300px] pt-[50px] pl-[20px]">
                    {placeDetails.description}
                  </Card>
                </div>
              )}

              <Button className="mt-6 bg-[#107b10] w-[200px] ml-[350px]" fullWidth>
                Add to Package
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrPlaceDetails;
