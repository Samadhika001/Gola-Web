import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
    Input,
} from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TransportCard = () => {
  // Assuming you have fetched and stored transport data in 'transports' state
  const transports = [
    {
      transport_id: 1,
      transport_name: "Yoga Transport",
      transport_image: "https://www.vanhiresrilanka.com/images-vanhire/Hire_Luxury_Van_Colombo/VanHire2_orig.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 2,
      transport_name: "taxi.lk",
      transport_image: "https://www.taxi.lk/operation/images/inependent/2/thumbnail.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 3,
      transport_name: "travel Lanka",
      transport_image: "https://www.lankaholidays.com/pics/38359/Dual%20AC%20van.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 4,
      transport_name: "Yoga Transport",
      transport_image: "https://www.vanhiresrilanka.com/images-vanhire/Hire_Luxury_Van_Colombo/VanHire2_orig.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 5,
      transport_name: "taxi.lk",
      transport_image: "https://www.taxi.lk/operation/images/inependent/2/thumbnail.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 6,
      transport_name: "Yoga Transport",
      transport_image: "https://www.vanhiresrilanka.com/images-vanhire/Hire_Luxury_Van_Colombo/VanHire2_orig.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 7,
      transport_name: "taxi.lk",
      transport_image: "https://www.taxi.lk/operation/images/inependent/2/thumbnail.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 8,
      transport_name: "travel Lanka",
      transport_image: "https://www.lankaholidays.com/pics/38359/Dual%20AC%20van.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 9,
      transport_name: "Yoga Transport",
      transport_image: "https://www.vanhiresrilanka.com/images-vanhire/Hire_Luxury_Van_Colombo/VanHire2_orig.jpg",
      // Add other transport properties here
    },
    {
      transport_id: 10,
      transport_name: "taxi.lk",
      transport_image: "https://www.taxi.lk/operation/images/inependent/2/thumbnail.jpg",
      // Add other transport properties here
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
      <div>
        <div className="m-8  flex items-center justify-between gap-8">
          <div>
            <Typography variant="h4" color="blue-gray">
              You might like these
            </Typography>
            <Typography color="gray" className=" font-normal">
              Explore transportation options for your next trip
            </Typography>
          </div>
        </div>
        <div className="m-8 w-72 flex flex-row gap-4">
          <Input label="Your Label" />

          <Link to="/TrSearchResult">
            <Button>Search</Button>
          </Link>
        </div>

        <Slider {...settings}>
          {transports.map((transport) => (
              <div key={transport.transport_id}>
                <Card className="m-6 w-64">
                  <Link to="/TrViewService">
                    <CardHeader color="blue-gray" className="relative h-40">
                      <img
                          className="w-full h-full"
                          src={transport.transport_image}
                          alt="card-image"
                      />
                    </CardHeader>
                  </Link>
                  <CardBody className="text-left">
                    <Link to="/TrViewService">
                      <Typography variant="h5" color="blue-gray" className="font-medium">
                        {transport.transport_name}
                      </Typography>
                    </Link>
                    <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                      3.7
                      <Rating value={4} />
                    </div>
                  </CardBody>
                  <CardFooter className="flex flex row gap-4 pt-0"></CardFooter>
                </Card>
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default TransportCard;
