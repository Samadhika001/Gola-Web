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

const HotelCard = ({values}) => {
  // Assuming you have fetched and stored accommodation data in 'accommodations' state
  const accommodations = [
    {
      accommodation_id: 1,
      accommodation_name: "Jetwing Colombo 7",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    {
      accommodation_id: 2,
      accommodation_name: "Jetwing Adventure",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mukUQHj33zfwUqxqM3x4hGTr_5LGXT-iZg&usqp=CAU",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    {
      accommodation_id: 3,
      accommodation_name: "Jetwind Saman Villa",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/03/7a/c5/birds-eye-view.jpg?w=700&h=-1&s=1",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    {
      accommodation_id: 4,
      accommodation_name: "Jetwing Colombo 7",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    {
      accommodation_id: 5,
      accommodation_name: "Jetwing Adventure",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mukUQHj33zfwUqxqM3x4hGTr_5LGXT-iZg&usqp=CAU",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    {
      accommodation_id: 6,
      accommodation_name: "Jetwind Saman Villa",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/03/7a/c5/birds-eye-view.jpg?w=700&h=-1&s=1",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },{
      accommodation_id: 7,
      accommodation_name: "Jetwing Colombo 7",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    {
      accommodation_id: 8,
      accommodation_name: "Jetwing Adventure",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5mukUQHj33zfwUqxqM3x4hGTr_5LGXT-iZg&usqp=CAU",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    {
      accommodation_id: 9,
      accommodation_name: "Jetwind Saman Villa",
      accommodation_address:"Colombo 7, Sri Lanka",
      accommodation_image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/03/7a/c5/birds-eye-view.jpg?w=700&h=-1&s=1",
      accommodation_description:"Description\n" +
          "Situated in the heart of Colombo, Ward Place, 2.4 km from U.S. Embassy, Jetwing Colombo Seven boasts a year-round rooftop pool. The hotel has a sun terrace and spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is offered throughout the property and free private parking is available on site. Each room at this hotel is air conditioned and comes with a flat-screen TV with satellite channels. All rooms have a seating area where you can relax. Tea/coffee making facilities can be found in the room. Rooms have a private bathroom. For your comfort, you will find bath robes and free toiletries. You will find a 24-hour front desk at the property. R Premadasa Stadium is 2.6 km from Jetwing Colombo Seven, while Asiri Surgical Hospital is 2.6 km away. Bandaranaike International Airport is 29 km from the property.\n" +
          "\n" +
          "Facilities\n" +
          "Outdoor swimming pool\n" +
          "Airport shuttle\n" +
          "Non-smoking rooms\n" +
          "Spa and wellness centre\n" +
          "Fitness centre\n" +
          "Room service",
    },
    // Add more accommodations here
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
              Explore destinations for your next trip
            </Typography>
          </div>
        </div>
        <div className="m-8 w-72 flex flex-row gap-4">
          <Input label={values} />

          <Link to="/TrSearchResult">
            <Button>Search</Button>
          </Link>
        </div>

        <Slider {...settings}>
          {accommodations.map((accommodation) => (
              <div key={accommodation.accommodation_id}>
                <Card className="m-6 w-64">
                  <Link to="/TrViewService">
                    <CardHeader color="blue-gray" className="relative h-40">
                      <img className="w-full h-full" src={accommodation.accommodation_image} alt="card-image" />
                    </CardHeader>
                  </Link>
                  <CardBody className="text-left">
                    <Link to="/TrViewService">
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
