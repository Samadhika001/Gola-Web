import React from "react";
import '../../../src/index.css';
import logo from '../../../src/assets/logo.png'
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BeakerIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentTextIcon,
  CalendarIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const Sidebar=()=> {
  return (
    <Card className="shadow-blue-gray-50 w-full max-w-[20rem] p-4 shadow-xl font-[poppins] flex-shrink-0">
      <div className="flex items-center p-4">
        <img src={logo} alt="" srcset="" className="h-20 w-30" />
      </div>
      <List>
        <Link to="/TrHome">
          <ListItem className="bg-[#d3fccf]">
            <ListItemPrefix>
              <HomeIcon className="w-5 h-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>

        <Link to="/TrTripTour">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="w-5 h-5" />
            </ListItemPrefix>
            Trip
          </ListItem>
        </Link>
        <Link to="/TrProfile">
          <ListItem className="bg-[#d3fccf]">
            <ListItemPrefix>
              <UserCircleIcon className="w-5 h-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
        <Link to="/TrChat">
          <ListItem>
            <ListItemPrefix>
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
            </ListItemPrefix>
            Chat
          </ListItem>
        </Link>
        <Link to="/TrCalender">
          <ListItem className="bg-[#d3fccf]">
            <ListItemPrefix>
              <CalendarIcon className="w-5 h-5" />
            </ListItemPrefix>
            Calender
          </ListItem>
        </Link>
        <Link to="/TrToDo">
          <ListItem>
            <ListItemPrefix>
              <DocumentTextIcon className="w-5 h-5" />
            </ListItemPrefix>
            To do
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default Sidebar;