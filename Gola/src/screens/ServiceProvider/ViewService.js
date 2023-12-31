
import { PencilIcon, PlusIcon,CheckIcon} from "@heroicons/react/24/solid";
import {Carousel, Typography,Rating,Accordion,
    AccordionHeader,
    AccordionBody,} from "@material-tailwind/react";
import Sidebar from "../../components/Serviceprovider/Sidebar";
import TopBar from "../../components/Serviceprovider/TopBar";
import * as React from "react";
import jetwing from "../../assets/jetwing.jpg";
import jetwingAd from "../../assets/jetwingAd.jpeg";
import jetwingsaman from "../../assets/jetwindsaman.jpeg";
import {Link} from "react-router-dom";

function ViewService() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="flex flex-col ">
            <div className="border w-full">
                <TopBar/>
            </div>

            <div className=" m-8 ">
                <div className="flex justify-center items-center">
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
                        src={jetwing}
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
                </div>
                <Typography variant="h3" color="blue-gray" className="ml-6 mt-6 ">
                    Jetwing Colombo 7
                </Typography>
                <div className="flex m-2">
                    <Rating className="ml-4" value={4} readonly />
                    <Typography color="gray" className="ml-2 font-normal">
                        Colombo 7, Sri Lanka
                    </Typography>
                </div>
                <hr className="m-4 border-blue-gray-50" />
                <Typography variant="h5" color="blue-gray" className="m-6">
                    Description
                </Typography>
                <div className="ml-6 h-[500px] w-[1000px]">
                <Typography>
                    Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site.

                    Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries.

                    You will find a 24-hour front desk at the property.

                    R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.
                </Typography>
                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-4">
                       Facilities
                    </Typography>
                    <Typography >
                        <ul className="list-disc">
                            <li>Outdoor swimming pool</li>
                            <li>Airport shuttle</li>
                            <li>Non-smoking rooms</li>
                            <li>Spa and wellness centre</li>
                            <li>Fitness centre</li>
                            <li>Room service</li>
                        </ul>
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mt-6 mb-5">
                        Room Types
                    </Typography>
                    <>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>Deluxe Double or Twin Room</AccordionHeader>
                        <AccordionBody>
                            Access for the Differenty-Abled/
                            Central Air Conditioning with Individual Temperature Controls/
                            Electric Power (220V-240V)/
                            Telephone with IDD Facilities/
                            Tea and Coffee Making Facilities/
                            Mini Bar/
                            42″ LCD Television with Satellite Channels,/
                            Free Wi-Fi/
                            King Size Bed/ Twin Size Bed/
                            Guest Laundry Facility/
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                           Studio
                        </AccordionHeader>
                        <AccordionBody>
                            Central Air Conditioning with Individual Temperature Controls/
                            Electric Power (220V-240V)/
                            Telephone with IDD Facilities/
                            Tea and Coffee Making Facilities/
                            Mini Bar/
                            42″ LCD Television with Satellite Channels/
                            Free Wi-Fi/
                            King Size Bed/ Twin Size Bed/
                            Guest Laundry Facility/
                            Bath and Shower/
                            Bathrobes/
                        </AccordionBody>
                    </Accordion>
                </>
                </div>
            </div>

        </div>
    );
}
export default ViewService;