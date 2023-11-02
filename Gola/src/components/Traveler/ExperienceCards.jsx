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

const ExperienceCards = ({experiences}) => {
  
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
          <Input label= "Experience" />

          <Link to="/SearchResult">
            <Button>Search</Button>
          </Link>
        </div>

        <Slider {...settings}>
          {experiences.map((experience) => (
              <div key={experience.experience_id}>
                <Card className="m-6 w-64">
                <Link to={`/TrViewExDetails/${experience.experience_id}`}>
                  <CardHeader color="blue-gray" className="relative h-40">
                      <img
                        className="w-full h-full"
                        src={experience.experience_image}
                        alt=""
                      />
                    </CardHeader>
                  </Link>
                  <CardBody className="text-left">
                  <Link to={`/TrViewExDetails/${experience.experience_id}`}>                    
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
                  <CardFooter className="flex flex-row gap-4 pt-0"></CardFooter>
                </Card>
              </div>
          ))}
        </Slider>
      </div>
  );

};

export default ExperienceCards;
