import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    IconButton,
    Tooltip,
    Typography
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {PencilIcon, PlusIcon, TrashIcon} from "@heroicons/react/24/solid";
import jetwing from "../../assets/jetwing.jpg";
import jetwingAd from "../../assets/jetwingAd.jpeg";
import jetwingsaman from "../../assets/jetwindsaman.jpeg";

const HomeContent = () =>{


    return(
<div className="pl-24">

            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        You might like these
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Explore destinations for your next trip
                    </Typography>
                </div>
            </div>


        <div className="flex flex-row gap-6 ml-10">
            <Card className="m-6 w-80">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={jetwing}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Jetwing Colombo 7
                    </Typography>
                    <Typography>
                        We are the epitome of urban luxury in the heart of metropolitan Colombo and is our home of Sri Lankan hospitality in the city.
                    </Typography>
                </CardBody>
                <CardFooter className="flex flex row gap-4 pt-0">
                    <Link to="/ViewService">
                        <Button>View More</Button>
                    </Link>
                </CardFooter>
            </Card>
            <Card className="m-6 w-80">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        className="h-full w-full"
                        src={jetwingAd}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Jetwing Adventure
                    </Typography>
                    <Typography>
                        We are a team of passionate outdoors and nature lovers. We offer cycling, walking and hiking, nature and wildlife, eco and family tours in Sri Lanka
                    </Typography>
                </CardBody>
                <CardFooter className="flex flex row gap-4 pt-0">
                    <Button>View More</Button>
                </CardFooter>
            </Card>
            <Card className="m-6 w-80">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        className="h-full w-full"
                        src={jetwingsaman}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Jetwind Saman Villa
                    </Typography>
                    <Typography>
                        Jetwing Saman Villas is laid out on a magnificent rocky headland dividing two long, surf-swept golden beaches in Benthota,Galle.
                    </Typography>
                </CardBody>
                <CardFooter className="flex flex row gap-4 pt-0">
                    <Button>View More</Button>

                </CardFooter>
            </Card>
        </div>



</div>




    );

};

export default HomeContent;