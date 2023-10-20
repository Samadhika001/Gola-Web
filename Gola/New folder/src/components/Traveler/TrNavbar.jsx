import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useNavigate ,Link } from "react-router-dom";
 
const TrNavbar = () => {
  
  return (
    <div className="p-[20px] shadow-blue-gray-50 shadow-lg h-[60px]">
      <div className="flex-wrap items-center justify-between gap-y-4 text-blue-gray-900 bg-[#ffffff]">
        <div className="flex pb-[10px] text-[green] font-bold">
          <Link
            className="pr-[50px]  pl-[50px] hover:bg-[#efefef] rounded-xl"
            to="/TrHotels"
          >
            Hotels
          </Link>
          <Link
            className="pr-[50px] pl-[50px] hover:bg-[#efefef] rounded-xl"
            to="/TrPlaces"
          >
            Places
          </Link>
          <Link
            className="pr-[50px] pl-[50px] hover:bg-[#efefef] rounded-xl"
            to="/TrFoods"
          >
            Food
          </Link>
          <Link
            className="pr-[50px] pl-[50px] hover:bg-[#efefef] rounded-xl"
            to=""
          >
            Experience
          </Link>
          <Link
            className="pr-[50px] pl-[50px] hover:bg-[#efefef] rounded-xl"
            to=""
          >
            Transport
          </Link>
          <Link
            className="bg-gray-400 pr-[50px] pl-[50px] hover:bg-[#efefef] rounded-xl"
            to="/TrPackage"
          >
            Package
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
}

export default TrNavbar;