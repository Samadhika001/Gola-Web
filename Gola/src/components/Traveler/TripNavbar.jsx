import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useNavigate ,Link } from "react-router-dom";
 
const TripNavbarWithSearch = () => {
  return (
    <div className="w-full pt-2 shadow-blue-gray-50 shadow-lg">
      <div className="flex-wrap items-center justify-between gap-y-4 text-blue-gray-900 bg-[#ffffff]">
        <div className="flex pb-[10px] text-[green] font-bold justify-center">
          {/* <Link
            className="pr-[50px]  pl-[50px] pt-[5px] pb-[5px] hover:bg-[#efefef] rounded-xl"
            to=""
          >
            Home
          </Link> */}
          <Link
            className="pr-[50px] pl-[50px] pt-[5px] pb-[5px] hover:bg-[#efefef] rounded-xl"
            to="/TrTripTour"
          >
            Tour
          </Link>
          <Link
            className="pr-[50px] pl-[50px] pt-[5px] pb-[5px] hover:bg-[#efefef] rounded-xl"
            to="/TrTripList"
          >
            Trip List
          </Link>
          <Link
            className="pr-[50px] pl-[50px] pt-[5px] pb-[5px] hover:bg-[#efefef] rounded-xl"
            to="/TrTripCreate"
          >
            Create New Trip
          </Link>
        </div>
        {/* <div className="flex gap-1 ml-auto md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <Cog6ToothIcon className="w-4 h-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="w-4 h-4" />
          </IconButton>
        </div> */}
        
      </div>
    </div>
  );
};

export default TripNavbarWithSearch;