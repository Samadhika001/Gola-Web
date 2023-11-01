import React, { useContext, } from "react";
import {Link, useParams} from "react-router-dom";
import Footer from "../../components/Traveler/Footer";
import accommodationsDetails from "../../components/Traveler/HotelData";
import {IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,Typography,} from "@material-tailwind/react";
import {
    PlusIcon,
    HomeIcon,
    TruckIcon,
    MapIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../components/Traveler/Navbar";
import { useLocation,useNavigate } from 'react-router-dom';
import {PackageItem} from "../../components/Traveler/PackageItem";
import {ShopContext} from "../../context/shop_context";

const TrPackage = () => {
    const { cartItems, checkout } = useContext(ShopContext);


    const navigate = useNavigate();


    return (
    <div>
        <Navbar/>
      <div >
          <Typography variant="h5" color="blue-gray" className="mx-10 my-8 font-semibold">
              Create New Package
          </Typography>
          <div className="relative h-80 w-full">
              <div className="cart">
                  {Object.keys(cartItems).map(itemId => {
                      // Check if the quantity of the item in the cart is not zero
                      if (cartItems[itemId] !== 0) {
                          // Find the selected accommodation that corresponds to the current itemId
                          const selectedAccommodation = accommodationsDetails.find(
                              accommodation => accommodation.accommodation_id === parseInt(itemId)
                          );

                          // Render the PackageItem component for the selected accommodation
                          return <PackageItem key={itemId} data={selectedAccommodation} />;
                      }
                      return null;
                  })}
                  <div className="absolute bottom-25 left-0 m-10">
                      <SpeedDial>
                          <SpeedDialHandler>
                              <IconButton size="lg" className="rounded-full">
                                  <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                              </IconButton>
                          </SpeedDialHandler>
                          <SpeedDialContent>
                              <SpeedDialAction>
                                  <Link to={`/TrSearchResult`}>
                                      <HomeIcon className="h-5 w-5" />
                                  </Link>
                              </SpeedDialAction>
                              <SpeedDialAction>
                                  <TruckIcon className="h-5 w-5" />
                              </SpeedDialAction>
                              <SpeedDialAction>
                                  <MapIcon className="h-5 w-5" />
                              </SpeedDialAction>
                          </SpeedDialContent>
                      </SpeedDial>
                  </div>
              </div>


              {/*{totalAmount > 0 ? (*/}
              {/*    <div className="checkout">*/}
              {/*        <p> Subtotal: ${totalAmount} </p>*/}
              {/*        <button onClick={() => navigate("/")}> Continue Shopping </button>*/}
              {/*        <button*/}
              {/*            onClick={() => {*/}
              {/*                checkout();*/}
              {/*                navigate("/checkout");*/}
              {/*            }}*/}
              {/*        >*/}
              {/*            {" "}*/}
              {/*            Checkout{" "}*/}
              {/*        </button>*/}
              {/*    </div>*/}
              {/*) : (*/}
              {/*    <h1> Your Shopping Cart is Empty</h1>*/}
              {/*)}*/}
          </div>


          </div>

    </div>
  );
};

export default TrPackage;
