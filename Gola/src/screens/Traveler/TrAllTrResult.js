import React, {useContext} from "react";
import Navbar from "../../components/Traveler/Navbar";
import {Input, Card, CardHeader, Typography, Rating, CardBody, Button} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import transportDetails from "../../components/Traveler/TransportData"; // Import your accommodation data

const TrAllTrResult = () => {

    return (
        <div className="w-160 m-8">
            <Navbar />
            <div className="my-8 w-72">
                <Input label="Search" icon={<SearchIcon />} />
            </div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                           Transport for Your Choices
                        </Typography>
                    </div>
                </CardHeader>
                <CardBody className="px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <tbody>
                        {transportDetails.map((transport, index) => {
                            const isLast = index === transportDetails.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={transport.transport_id}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3 text-left">
                                            <Link to={`/TrViewTrDetails/${transport.transport_id}`}>
                                                <img className="h-40 w-40" src={transport.transport_image} alt={transport.transport_name} />
                                            </Link>
                                            <div className="flex flex-col">
                                                <Typography variant="h6" color="blue-gray" className="font-semi-bold">
                                                    <Link to={`/TrViewTrDetails/${transport.transport_id}`}>{transport.transport_name}</Link>
                                                </Typography>
                                                <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                    {transport.transport_address}
                                                </Typography>
                                                {/*<Typography variant="small">{accommodation.accommodation_description}</Typography>*/}
                                                <div className="text-left">
                                                    <Rating value={4} className="m-0 scale-75" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
};

export default TrAllTrResult;
