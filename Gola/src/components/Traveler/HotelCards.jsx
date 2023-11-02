import React, { useState, useEffect } from "react";
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
import {Link, useParams} from "react-router-dom";
const HotelCard = ({ accommodations }) => {
  // Assuming you have fetched and stored accommodation data in 'accommodations' state


  // const { accommodationId } = useParams();
  // const AccommodationsDetails = accommodationsDetails.find(
  //     (hotel) => hotel.accommodation_id === parseInt(accommodationId)
  // );


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
              Explore destinations for your next trip
            </Typography>
          </div>
        </div>
        <div className="m-8 w-72 flex flex-row gap-4">
          <Input label="Accomodation"/>

          <Link to="/TrSearchResult">
            <Button>Search</Button>
          </Link>
        </div>

        <Slider {...settings}>
          {accommodations.map((accommodation) => (
              <div key={accommodation.accommodation_id}>
                <Card className="m-6 w-64">
                  <Link to={`/TrViewAcDetails/${accommodation.accommodation_id}`}>
                    <CardHeader color="blue-gray" className="relative h-40">
                      <img className="w-full h-full" src={accommodation.accommodation_image} alt="accommodation" />
                    </CardHeader>
                  </Link>
                  <CardBody className="text-left">
                    <Link to={`/TrViewAcDetails/${accommodation.accommodation_id}`}>
                      <Typography variant="h5" color="blue-gray" className="font-medium">
                        {accommodation.accommodation_name}
                      </Typography>
                    </Link>
                    <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                      3.7
                      <Rating value={4} />
                    </div>
                    <Typography> {accommodation.accommodation_address}</Typography>
                  </CardBody>
                  <CardFooter className="flex flex row gap-4 pt-0"></CardFooter>
                </Card>
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default HotelCard;
