import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import {Bars3Icon} from "@heroicons/react/24/solid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";
import {Avatar, Input} from "@material-tailwind/react";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";


const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNavbar = () => {
    setnav(!nav);
    setLogo(!logo);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
      <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}> <Link to='/'> Log Out</Link>  </MenuItem>
      </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
      <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
  );


  return (
      <div
          className="flex w-full justify-between items-center h-16 px-4 absolute z-50 text-Black "
          style={{
              position: "sticky",
              top: "0px", // Adjust this value according to your layout
              background: "rgba(255, 255, 255, 255)", // Transparent white background with 50% opacity
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
          }}
      >

      <div className=" px-7">
        <img className="h-[90px] w-[90px]" src={Logo} alt="" srcSet=""/>
      </div>
      <div className="px-16">
        <ul className="hidden md:flex">
          <li className="p-4 font-bold"> <Link to="/Trhome"> Home</Link></li>
          <li className="p-4 font-bold">To Do</li>
          <li className="p-4 font-bold">Travel Map</li>
          {/*<li className="p-4 font-bold">Cart</li>*/}

          <li className="p-4 font-bold"><Link to="/TrTripList"> My Trips</Link></li>
        </ul>
      </div>
<div>
  <Box sx={{ flexGrow: 1 }}>
    <Toolbar>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {/*<IconButton size="large" aria-label="show 4 new mails" color="inherit">*/}
        {/*  <Badge badgeContent={4} color="error">*/}
        {/*    <MailIcon />*/}
        {/*  </Badge>*/}
        {/*</IconButton>*/}
        <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ margin: '0 8px' }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ margin: '0 8px' }}
        >
          <Avatar
              variant="circular"
              alt="user 1"
              className="border-2 border-white hover:z-10 focus:z-10"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </IconButton>

      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
    </Toolbar>

    {renderMobileMenu}
    {renderMenu}
  </Box>
</div>




      {/*<div className=" ml-44 pt-2 font-bold">*/}
      {/*  <Link to="/loginScreen">*/}
      {/*    <Bars3Icon className="h-5 w-5" />*/}
      {/*  </Link>*/}

      {/*</div>*/}

      {/* Hamburger menu */}
      <div
        className="md:hidden z-10 cursor-pointer text-white"
        onClick={handleNavbar} // Corrected the function name here
      >
        {nav ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt4 size={30} />}
      </div>

      {/* Mobile menu dropdown */}

    </div>
  );
};

export default Navbar;
