import React,{useState , useEffect} from "react";
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
import list from '../../components/Traveler/HotelData'



const TrHotelDetails = () => {
  // useEffect(() => {
  //   // Fetch hotel details based on hotelId from your API or data source
  //   axios
  //     .get(`YOUR_API_ENDPOINT/${hotelId}`) // Replace with your API endpoint
  //     .then((result) => setHotelDetails(result.data))
  //     .catch((err) => console.log(err));
  // }, [hotelId]);

  const { hotelId } = useParams();
  // const [hotelDetails, setHotelDetails] = useState(null);
  
  // Find the hotel with the matching id
  const hotelDetails = list.find(
    (hotel) => hotel.id === parseInt(hotelId)
  );

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <NavbarWithSearch />
          <div className="flex pb-[20px]">
            <div className="relative flex gap-2 md:w-max pl-[50px] mb-[20px]">
              <Card color="transparent" className="shadow-xl mt-[20px]">
                <div className="p-7 m-[10px]">
                  <Typography variant="h4" color="blue-gray">
                    Add a hotel to your package
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    Enter the details to add a hotel to your package.
                  </Typography>
                  <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                    <div className="flex flex-col gap-6 mb-4">
                      <Input size="lg" label="Check-in-date" type="date" />
                      <Input size="lg" label="Check-out-date" type="date" />
                      <Input type="text" size="lg" label="No of rooms" />
                      <Input type="text" size="lg" label="No of person" />
                    </div>

                    <Button className="mt-6 bg-[#107b10]" fullWidth>
                      Add to Package
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            <div className="m-[20px] pl-[20px]">
              {hotelDetails && (
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
                      {hotelDetails.name}
                    </Typography>

                    <Typography color="gray" className="mt-1 font-normal">
                      <img src={hotelDetails.img} alt="" />
                    </Typography>
                    <Typography
                      color="gray"
                      className="mt-2 font-normal p-[20px]"
                    >
                      {hotelDetails.description}
                    </Typography>
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

export default TrHotelDetails;
