import React, {useState, useEffect, useContext} from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import {Carousel, Typography,Rating,Accordion,
    Popover,
    PopoverHandler,
    PopoverContent,
   Button,
    Card,
    Input,
    Checkbox,
} from "@material-tailwind/react";

import TopBar from "../../components/Serviceprovider/TopBar";
import jetwing from "../../assets/jetwing.jpg";
import accommodationsDetails from '../../components/Traveler/HotelData';
import {ShopContext} from "../../context/shop_context";
import transportDetails from "../../components/Traveler/TransportData"; // Import your accommodation data
function TrViewService() {

    const{addToCart}=useContext(ShopContext);
    const { cartItems } = useContext(ShopContext);

    const [open, setOpen] = React.useState(1);
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        checkInDate: '',
        checkOutDate: '',
        roomsCount: 1,
    });


    const { accommodation_id } = useParams();
    const selectedAccommodation = accommodationsDetails.find(accommodation => accommodation.accommodation_id === parseInt(accommodation_id));
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });
    };

    return (
        <div className="flex flex-col ">
            <div className="border w-full">
                <TopBar/>
            </div>
            {selectedAccommodation && (
            <div className=" m-8 ">
                <div className="flex flex-row">
                    <Carousel
                        className=" h-[500px] w-[1000px] rounded-xl "
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <img
                            src={selectedAccommodation.accommodation_image}
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                    <div className="my-4 mx-12 w-80 max-w-screen-lg sm:w-96">
                        <Popover>
                            <PopoverHandler>
                        <Button  className="m-6" fullWidth>
                            Add to Plan
                        </Button>
                            </PopoverHandler>
                            <PopoverContent>
                                <Card color="transparent" shadow={false}>
                                    <Typography color="gray" className="mt-1 font-normal">
                                       Enter your details to Add to package.
                                    </Typography>
                                    <form  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                        <div className="mb-1 flex flex-col gap-6">
                                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                Check-In Date
                                            </Typography>
                                            <Input
                                                size="lg"
                                                type="date"
                                                name="checkInDate"
                                                value={userInput.checkInDate}
                                                onChange={handleInputChange}
                                                placeholder="Check-In Date"
                                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                Check-out Date
                                            </Typography>
                                            <Input
                                                size="lg"
                                                type="date"
                                                name="checkOutDate"
                                                value={userInput.checkOutDate}
                                                onChange={handleInputChange}
                                                placeholder="Check-Out Date"
                                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                                Rooms Count
                                            </Typography>
                                            <Input
                                                size="lg"
                                                type="text"
                                                name="roomsCount"
                                                value={userInput.roomsCount}
                                                onChange={handleInputChange}
                                                placeholder="Rooms Count"
                                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                labelProps={{
                                                    className: "before:content-none after:content-none",
                                                }}
                                            />
                                        </div>
                                        <Button
                                            onClick={() => {
                                                addToCart(selectedAccommodation.accommodation_id);
                                                navigate(`/TrPackage`); // Replace 'your-new-page-url' with the actual URL you want to navigate to
                                            }}
                                            className="mt-6"
                                            fullWidth
                                        >
                                            Add
                                        </Button>

                                    </form>
                                </Card>

                            </PopoverContent>
                        </Popover>

                    </div>

                </div>
                <Typography variant="h3" color="blue-gray" className="ml-6 mt-6 ">
                    {selectedAccommodation.accommodation_name}
                </Typography>
                <div className="flex m-2">
                    <Rating className="ml-4" value={4} readonly />
                    <Typography color="gray" className="ml-2 font-normal">
                        {selectedAccommodation.accommodation_address}
                    </Typography>
                </div>
                <hr className="m-4 border-blue-gray-50" />
                <Typography variant="h5" color="blue-gray" className="m-6">
                    Description
                </Typography>
                <div className="ml-6 h-[500px] w-[1000px]">
                    <Typography>
                        {selectedAccommodation.accommodation_description}
                    </Typography>

                    <Typography variant="h5" className="my-4">
                         Price For one person: {selectedAccommodation.accommodation_prise} $
                    </Typography>
                </div>
            </div>
            )}
        </div>
    );
}
export default TrViewService;