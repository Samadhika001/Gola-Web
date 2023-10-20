import React, { useEffect, useState } from "react";
import TrHotels from "./TrHotels";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import TrNavbar from "../../components/Traveler/TrNavbar";
import Sidebar from "../../components/Traveler/Sidebar";
import Footer from "../../components/LandingPage/Footer";

const TrPackage = ({ cart, setCart, handleChange }) => {
  // useEffect(() => {

  //   console.log(packageDetails);
  // });
  const [price, setPrice] = useState(0);
  const packageDetails = useSelector((state) => state.TravellerReducer.package);
  console.log(packageDetails);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();

    // const handlePrice=()=>{
    //     let ans =0;
    //     cart.map((item)=>{
    //         (ans += item.amount * item.price);
    //         setPrice(ans)
    //     })
    // }

    // useEffect(()=>{
    //     handlePrice();
    // });
  };
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>
            <TrNavbar />
            <article className="grid gap-2 lg:grid-cols-3 pt-[40px]">
              {packageDetails.map((item) => (
                <div className="cart" key={item.id}>
                  <div className="max-h-[50px] max-w-[50px] flex ml-[20px] mr-[20px]">
                    <img
                      src={item.img}
                      alt=""
                      srcset=""
                      className="pt-[10px]"
                    />
                    <p className="pl-[20px]">{item.name}</p>
                    {/* <p className="pl-[20px]">{item.price}</p> */}
                  </div>
                  <br />
                </div>
              ))}
            </article>
            <br />
            <br />

            <Link to="/Payment">
              <Button className="h-[40px] w-[150px] bg-light-green-800 ml-[40px]">
                Create Package
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrPackage;
