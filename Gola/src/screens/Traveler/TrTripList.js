import React from "react";
import TransportCard from "../../components/Traveler/TransportCard";
import Sidebar from "../../components/Traveler/Sidebar";

import Footer from "../../components/Traveler/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

import {Button, Card, Typography,Rating} from "@material-tailwind/react";
import Navbar from "../../components/Traveler/Navbar";
import {PlusIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import packageDetails from "../../components/Traveler/PackageData";
import img from "../../assets/borabora2.jpg";

const TrTripList = () => {
  const [trips, setTrips] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("") //database fetch link
  //     .then((result) => setTrips(result.data))
  //     .catch((err) => console.log(err));
  // }, []);
    const ongoingPackages = packageDetails.filter((packageDetails) => packageDetails.package_status === 0);
    const UpcomingPackages = packageDetails.filter((packageDetails) => packageDetails.package_status === 2);
    const completePackages = packageDetails.filter((packageDetails) => packageDetails.package_status === 3);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
        <div className="m-4">
            <Typography variant="h4" color="blue-gray"className=" my-5" >
            My Trips
        </Typography>

            <div className="my-4 grid grid-cols-2 gap-4 ">
                <div className="mb-8 flex items-center justify-between gap-8">
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link to="/TrPackage">
                    <Button className="flex items-center gap-3" size="sm">
                        <PlusIcon strokeWidth={2} className="h-4 w-4" /> Create Trip Package
                    </Button>
                </Link>
                </div>
                </div>
            </div>
        <Typography variant="h5" color="blue-gray" >
            Ongoing
        </Typography>
            <table className="mt-4 w-full min-w-max table-auto text-left">
                <tbody>
                {ongoingPackages.map((packageDetails, index) => {
                    const isLast = index === packageDetails.length - 1;
                    const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={packageDetails.package_id}>
                            <td className={classes}>
                                <div className="flex items-center gap-3 text-left">

                                        <Link to="/TrviewService">
                                            <img className=" h-40 w-40" src={img} alt="image" />
                                        </Link>
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                            className="font-semibold"
                                        >
                                           {packageDetails.package_name}
                                        </Typography>
                                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                            {packageDetails.package_start_point}
                                        </Typography>
                                        <Typography variant="small">{packageDetails.package_full_cost}</Typography>
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


            <Typography variant="h5" color="blue-gray" >
                Upcoming
            </Typography>
            <table className="mt-4 w-full min-w-max table-auto text-left">
                <tbody>
                {UpcomingPackages.map((packageDetails, index) => {
                    const isLast = index === packageDetails.length - 1;
                    const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={packageDetails.package_id}>
                            <td className={classes}>
                                <div className="flex items-center gap-3 text-left">

                                    <Link to="/TrviewService">
                                        <img className=" h-40 w-40" src={img} alt="image" />
                                    </Link>
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                            className="font-semibold"
                                        >
                                            {packageDetails.package_name}
                                        </Typography>
                                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                            {packageDetails.package_start_point}
                                        </Typography>
                                        <Typography variant="small">{packageDetails.package_full_cost}</Typography>
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
            <Typography variant="h5" color="blue-gray" >
              Completed
            </Typography>
            <table className="mt-4 w-full min-w-max table-auto text-left">
                <tbody>
                {completePackages.map((packageDetails, index) => {
                    const isLast = index === packageDetails.length - 1;
                    const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={packageDetails.package_id}>
                            <td className={classes}>
                                <div className="flex items-center gap-3 text-left">

                                    <Link to="/TrviewService">
                                        <img className=" h-40 w-40" src={img} alt="image" />
                                    </Link>
                                    <div className="flex flex-col">
                                        <Typography
                                            variant="h6"
                                            color="blue-gray"
                                            className="font-semibold"
                                        >
                                            {packageDetails.package_name}
                                        </Typography>
                                        <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                            {packageDetails.package_start_point}
                                        </Typography>
                                        <Typography variant="small">{packageDetails.package_full_cost}</Typography>
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
        </div>
      <Footer />
    </div>
  );
};

export default TrTripList;
