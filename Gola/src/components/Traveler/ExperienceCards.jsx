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
import { Link } from "react-router-dom";

const ExperienceCards = ({values}) => {
  const experiences = [
    {
      experience_id: 1,
      experience_name: "Yaala Safari with Lk tours",
      experience_image: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_074e428fee.jpg",
      // Add other experience properties here
    },
    {
      experience_id: 2,
      experience_name: "Mud House Village Tours",
      experience_image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d1/41/ba/caption.jpg?w=1200&h=-1&s=1",
      // Add other experience properties here
    },
    {
      experience_id: 3,
      experience_name: "Lavingo Travel",
      experience_image: "https://lavingotravels.com/wp-content/uploads/2016/02/adventure-sri-lanka.jpg",
      // Add other experience properties here
    },
    {
      experience_id: 4,
      experience_name: "Flying Ravana",
      experience_image: "https://d1ynolcus8dvgv.cloudfront.net/2019/02/flying-rawana-header-image-mobile.jpg",
      // Add other experience properties here
    },
    {
      experience_id: 5,
      experience_name: "Sri Lanka Baloons",
      experience_image: "https://www.ceylonexpeditions.com/medias/itinerary/big/438/hot-air-balloon-family-adventure-holidays-in-sri-lanka-ceylon-expeditions-travel-agent-1.jpg",
      // Add other experience properties here
    },
    {
      experience_id: 6,
      experience_name: "Yaala Safari with Lk tours",
      experience_image: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_074e428fee.jpg",
      // Add other experience properties here
    },
    {
      experience_id: 7,
      experience_name: "Mud House Village Tours",
      experience_image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d1/41/ba/caption.jpg?w=1200&h=-1&s=1",
      // Add other experience properties here
    },
    {
      experience_id: 8,
      experience_name: "Lavingo Travel",
      experience_image: "https://lavingotravels.com/wp-content/uploads/2016/02/adventure-sri-lanka.jpg",
      // Add other experience properties here
    },
    {
      experience_id: 9,
      experience_name: "Flying Ravana",
      experience_image: "https://d1ynolcus8dvgv.cloudfront.net/2019/02/flying-rawana-header-image-mobile.jpg",
      // Add other experience properties here
    },
    {
      experience_id: 10,
      experience_name: "Sri Lanka Baloons",
      experience_image: "https://www.ceylonexpeditions.com/medias/itinerary/big/438/hot-air-balloon-family-adventure-holidays-in-sri-lanka-ceylon-expeditions-travel-agent-1.jpg",
      // Add other experience properties here
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
              You might like these experiences
            </Typography>
            <Typography color="gray" className=" font-normal">
              Explore unique experiences for your next adventure
            </Typography>
          </div>
        </div>
        <div className="m-8 w-72 flex flex-row gap-4">
          <Input label={values} />

          <Link to="/SearchResult">
            <Button>Search</Button>
          </Link>
        </div>

        <Slider {...settings}>
          {experiences.map((experience) => (
              <div key={experience.experience_id}>
                <Card className="m-6 w-64">
                  <Link to="/ViewExperienceDetails">
                    <CardHeader color="blue-gray" className="relative h-40">
                      <img
                          className="w-full h-full"
                          src={experience.experience_image}
                          alt="card-image"
                      />
                    </CardHeader>
                  </Link>
                  <CardBody className="text-left">
                    <Link to="/ViewExperienceDetails">
                      <Typography variant="h5" color="blue-gray" className="font-medium">
                        {experience.experience_name}
                      </Typography>
                    </Link>
                    <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                      3.7
                      <Rating value={4} />
                    </div>
                    {/*<Typography>Adventure, Exploration, Fun, etc.</Typography>*/}
                  </CardBody>
                  <CardFooter className="flex flex row gap-4 pt-0"></CardFooter>
                </Card>
              </div>
          ))}
        </Slider>
      </div>
  );

};

export default ExperienceCards;
