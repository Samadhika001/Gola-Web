import React from "react";
import Logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import Bg from "../assets/sigiriya.jpg";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const ChooseTypeScreen = () => {
    return (
        <div className="w-full h-screen relative">
            <img
                src={Bg}
                alt="image 1"
                className=" h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-700/30">
                <div
                    className="flex w-full justify-between items-center
     h-20 px-4 absolute z-10 text-white"
                >
                    <div>
                        <img className="h-[100px] w-[100px]" src={Logo} alt="" srcSet=""/>
                    </div>
                    <ul className="hidden md:flex">
                        <li className="p-4">Home</li>
                        <li className="p-4">Destination</li>
                        <li className="p-4">Travel</li>
                        <li className="p-4">View</li>
                        <li className="p-4">Book</li>
                    </ul>
                    <div className="ml-[50px] space-x-2 pl-[50px] font-bold">
                        <Link to="/loginScreen">
                            <button className="text-[#ffffff] h-[40px] w-[120px] rounded-lg ">
                                Login
                            </button>
                        </Link>
                    </div>


                </div>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="flex flex-row gap-12">
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h3" color="blue-gray" className="mb-2">
                                    Are you Here for <br/> Plan a Trip?
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link to="/SignUpScreen">
                                <Button>Join</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h3" color="blue-gray" className="mb-2">
                                    Are you Here for <br/> Give a service?
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link to="/ServiceReg1">
                                <Button>Join</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

            </div>


        </div>

    );
};
export default ChooseTypeScreen;
