import React from "react";
import beachVid from "../../assets/beachVid.mp4";
import homeimg from "../../assets/6.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { Typography, Input,Button,Card } from "@material-tailwind/react";

const Home = () => {
    const [destination, setDestination] = React.useState("");
    const onChange = ({ target }) => setDestination(target.value);
  return (
    <div className="w-full h-screen relative">

      <div
        className="absolute top-0 left-0 w-full h-full flex
      flex-col justify-center item-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold">Explore The Nature </h1>
        <h2 className="py-3">Top  Location Sri Lanka</h2>
          <h4 className="py-3">Plan your dream trip to Sri Lanka effortlessly with our app and <br/>
              immerse yourself in the wonders of this enchanting island nation.</h4>


              <div className="flex justify-center items-center p-4">
                  <Card className="p-3 w-96 ">
                  <div className="relative flex flex-row gap-4 max-w-[24rem]">
                      <Input
                          variant="standard"
                          type="text"
                          label="Where you want to go?"
                          value={destination}
                          onChange={onChange}
                          className="pr-20"
                          containerProps={{
                              className: "min-w-0",
                          }}
                      />
                      <Button
                          size="sm"
                          color={destination ? "gray" : "blue-gray"}
                          disabled={!destination}
                          className="!absolute right-1 top-1 rounded"
                      >
                          Find
                      </Button>
                  </div>

                  </Card>
              </div>

      </div>
    </div>
  );
};

export default Home;
