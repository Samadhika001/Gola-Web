import React from "react";
import Navbar from "../../components/Traveler/Navbar";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";

import {
    Card,
    CardHeader,
    Input,
    Typography,
    Rating,
    CardBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import jetwing from "../../assets/jetwing.jpg";
import jetwingAd from "../../assets/jetwingAd.jpeg";
import jetwingsaman from "../../assets/jetwindsaman.jpeg";
import pic1 from "../../assets/maldives.jpg";
import pic2 from "../../assets/maldives2.jpg";
const TrSearchResult = () => {

    const TABLE_ROWS = [
        {
            img: jetwing,
            name: "Jetwing Colombo",
            location: "Colombo 7, Sri Lanka",
            des:"We are the epitome of urban luxury in the heart of metropolitan Colombo and is our home of Sri Lankan hospitality in the city.",

        },
        {
            img: jetwingAd,
            name: "Jetwing Adventure",
            location: "Colombo, Sri Lanka",
            des:"We are the epitome of urban luxury in the heart of metropolitan Colombo and is our home of Sri Lankan hospitality in the city.",


        },
        {
            img: jetwingsaman,
            name: "Laurent Perrier",
            location: "Galle, Sri Lanka",
            des:"We are the epitome of urban luxury in the heart of metropolitan Colombo and is our home of Sri Lankan hospitality in the city.",


        },
        {
            img: pic1,
            name: "Michael Levi",
            location: "Trincomalee, Sri Lanka",
            des:"We are the epitome of urban luxury in the heart of metropolitan Colombo and is our home of Sri Lankan hospitality in the city.",


        },
        {
            img: pic2,
            name: "Richard Gran",
            location: "Jaffna, Sri Lanka",
            des:"We are the epitome of urban luxury in the heart of metropolitan Colombo and is our home of Sri Lankan hospitality in the city.",


        },
    ];
    return(
        <div className=" w-160 m-8">
            <Navbar />
            <div className=" my-8 w-72">
                <Input label="Search" icon={<SearchIcon/>} />
            </div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                <div>
                <Typography variant="h5" color="blue-gray">
                    Search Results
                </Typography>

            </div>
                </CardHeader>
                <CardBody className=" px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <tbody>
                        {TABLE_ROWS.map(
                            ({ img, name, location,des }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3 text-left">
                                                <Link to="/TrviewService">
                                                    <img className=" h-40 w-40" src={img} alt={name} />
                                                </Link>

                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="h6"
                                                        color="blue-gray"
                                                        className="font-semiboold"
                                                    >
                                                        <Link to="/TrviewService">
                                                            {name}
                                                        </Link>

                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {location}
                                                    </Typography>
                                                    <Typography variant="small">
                                                        {des}
                                                    </Typography>
                                                    <div className="text-left">
                                                        <Rating value={4} className="m-0 scale-75"/>

                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                );
                            },
                        )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>

    );
};
export default TrSearchResult ;

