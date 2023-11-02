import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography, IconButton,
} from "@material-tailwind/react";
import {
    PlusIcon,
    HomeIcon,
    TruckIcon,
    MapIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../components/Traveler/Navbar";
import { ShopContext } from "../../context/shop_context";
import accommodationsDetails from "../../components/Traveler/HotelData";
import transportDetails from "../../components/Traveler/TransportData";
import {PackageItem} from "../../components/Traveler/PackageItem";
import experienceDetails from "../../components/Traveler/ExperienceData";

const TrPackage = () => {
    const { cartItems } = useContext(ShopContext);
    console.log(cartItems);

    return (
        <div>
            <Navbar />
            <div>
                <Typography variant="h5" color="blue-gray" className="mx-10 my-8 font-semibold">
                    Create New Package
                </Typography>
                <div className="relative h-80 w-full">
                <div className="cart">
    {Object.keys(cartItems).map((category) => {
        return Object.keys(cartItems[category]).map((itemId) => {
            if (category === "accommodation") {
                const selectedAccommodation = accommodationsDetails.find(
                    (item) => item.accommodation_id === parseInt(itemId)
                );

                if (selectedAccommodation) {
                    return (
                        <PackageItem key={itemId} data={selectedAccommodation} category={category} />
                    );
                }
            } else if (category === "transport") {
                const selectedTransport = transportDetails.find(
                    (item) => item.transport_id === parseInt(itemId)
                );

                if (selectedTransport) {
                    return (
                        <PackageItem key={itemId} data={selectedTransport} category={category} />
                    );
                }
            }
            else if (category === "experience") {
                const selectedExperience = experienceDetails.find(
                    (item) => item.experience_id === parseInt(itemId)
                );

                if (selectedExperience) {
                    return (
                        <PackageItem key={itemId} data={selectedExperience} category={category} />
                    );
                }
            }
            return null;
        });
    })}
</div>
                    <div className="absolute bottom-25 left-0 m-10">
                        <SpeedDial>
                            <SpeedDialHandler>
                                <IconButton size="lg" className="rounded-full">
                                    <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                                </IconButton>
                            </SpeedDialHandler>
                            <SpeedDialContent>
                                <SpeedDialAction>
                                    <Link to={`/TrAllAcResult`}>
                                        <HomeIcon className="h-5 w-5" />
                                    </Link>
                                </SpeedDialAction>
                                <SpeedDialAction>
                                <Link to={`/TrAllTrResult`}>
                                    <TruckIcon className="h-5 w-5" />
                                    </Link>
                                </SpeedDialAction>
                                <SpeedDialAction>
                                <Link to={`/TrAllExResult`}>
                                    <MapIcon className="h-5 w-5" />
                                    </Link>
                                </SpeedDialAction>
                            </SpeedDialContent>
                        </SpeedDial>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrPackage;
