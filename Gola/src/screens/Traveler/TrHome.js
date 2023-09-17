import React from "react";
import Sidebar from "../../components/Traveler/Sidebar";
import NavbarWithSearch from "../../components/Traveler/TrNavbar";
import Navbar from "../../components/LandingPage/Navbar";
import Footer from "../../components/LandingPage/Footer";
import { Input, Button } from "@material-tailwind/react";
const Home = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <div>
            <NavbarWithSearch />
            <div className="relative flex gap-2 md:w-max pl-[50px] mt-6">
              <Input
                type="search"
                label="Type here..."
                className="pr-20"
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button
                size="sm"
                className="!absolute right-1 top-1 rounded bg-[#09B600]"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
