import React, { useState,useEffect} from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import {Carousel, Typography,Rating,Accordion,
    AccordionHeader,
    AccordionBody,
    Input,Button} from "@material-tailwind/react";

import TopBar from "../../components/Serviceprovider/TopBar";
import jetwing from "../../assets/jetwing.jpg";
import accommodationsDetails from '../../components/Traveler/HotelData'; // Import your accommodation data

function TrViewService() {
    // const navigate = useNavigate();
    //
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     navigate('/Trhome');
    // };

    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const { accommodation_id } = useParams();
    const selectedAccommodation = accommodationsDetails.find(accommodation => accommodation.accommodation_id === parseInt(accommodation_id));

    return (
        <div className="flex flex-col ">
            <div className="border w-full">
                <TopBar/>
            </div>

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
                    {/*<form className="my-4 mx-12 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>*/}
                    <div classname="my-4 mx-12 w-80 max-w-screen-lg sm:w-96">

                        <Link to={`/TrTripCreate/${selectedAccommodation.accommodation_id}`}>
                        <Button  className="m-6" fullWidth>
                            Add to Plan
                        </Button>
                        </Link>
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
                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-4">
                        Facilities
                    </Typography>

                    {/*<Typography variant="h5" color="blue-gray" className="mt-6 mb-5">*/}
                    {/*    Room Types*/}
                    {/*</Typography>*/}
                    {/*<>*/}
                    {/*    <Accordion open={open === 1}>*/}
                    {/*        <AccordionHeader onClick={() => handleOpen(1)}>Deluxe Double or Twin Room</AccordionHeader>*/}
                    {/*        <AccordionBody>*/}
                    {/*            Access for the Differenty-Abled/*/}
                    {/*            Central Air Conditioning with Individual Temperature Controls/*/}
                    {/*            Electric Power (220V-240V)/*/}
                    {/*            Telephone with IDD Facilities/*/}
                    {/*            Tea and Coffee Making Facilities/*/}
                    {/*            Mini Bar/*/}
                    {/*            42″ LCD Television with Satellite Channels,/*/}
                    {/*            Free Wi-Fi/*/}
                    {/*            King Size Bed/ Twin Size Bed/*/}
                    {/*            Guest Laundry Facility/*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*    <Accordion open={open === 2}>*/}
                    {/*        <AccordionHeader onClick={() => handleOpen(2)}>*/}
                    {/*            Studio*/}
                    {/*        </AccordionHeader>*/}
                    {/*        <AccordionBody>*/}
                    {/*            Central Air Conditioning with Individual Temperature Controls/*/}
                    {/*            Electric Power (220V-240V)/*/}
                    {/*            Telephone with IDD Facilities/*/}
                    {/*            Tea and Coffee Making Facilities/*/}
                    {/*            Mini Bar/*/}
                    {/*            42″ LCD Television with Satellite Channels/*/}
                    {/*            Free Wi-Fi/*/}
                    {/*            King Size Bed/ Twin Size Bed/*/}
                    {/*            Guest Laundry Facility/*/}
                    {/*            Bath and Shower/*/}
                    {/*            Bathrobes/*/}
                    {/*        </AccordionBody>*/}
                    {/*    </Accordion>*/}
                    {/*</>*/}
                </div>
            </div>

        </div>
    );
}
export default TrViewService;