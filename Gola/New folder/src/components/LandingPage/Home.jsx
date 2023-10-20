import React from "react";
import beachVid from "../../assets/beachVid.mp4";

import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={beachVid}
      />
      <div
        className="absolute top-0 left-0 w-full h-full
       bg-gray-700/30"></div>
      <div
        className="absolute top-0 left-0 w-full h-full flex 
      flex-col justify-center item-center text-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold">Explore The Nature </h1>
        <h2 className="py-3">Top  Location Sri Lanka</h2>
          <h4 className="py-3">Plan your dream trip to Sri Lanka effortlessly with our app and <br/>
              immerse yourself in the wonders of this enchanting island nation.</h4>
        {/*<form*/}
        {/*  className="flex items-center justify-between */}
        {/*max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">*/}
        {/*  <div>*/}
        {/*    <input*/}
        {/*      className="bg-transparent w-[300px] sm:w-[400px] */}
        {/*      font-[Poppins] focus:outline-none"*/}
        {/*      type="text"*/}
        {/*      placeholder="Search Destination"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <button>*/}
        {/*      <AiOutlineSearch*/}
        {/*        size={20}*/}
        {/*        className="icon"*/}
        {/*        style={{ color: "#ffff" }}*/}
        {/*      />*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</form>*/}
      </div>
    </div>
  );
};

export default Home;
