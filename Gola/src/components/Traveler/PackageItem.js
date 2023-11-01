import {Link} from "react-router-dom";
import img from "../../assets/borabora2.jpg";
import {Rating, Typography} from "@material-tailwind/react";
import React, {useContext}from "react";
import { ShopContext } from "../../context/shop_context";

 export const PackageItem= (props) =>{
     const{ accommodation_id,accommodation_name,accommodation_prise,accommodation_image}=props.data;
     const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
         useContext(ShopContext);
     return(
         <div className="flex items-center gap-3 text-left mx-10">

             <Link to="/TrviewService">
                 <img className=" h-40 w-40" src={accommodation_image} alt="image" />
             </Link>

             <div className="flex flex-col gap-4">
                 <Typography
                     variant="h6"
                     color="blue-gray"
                     className="font-semibold"
                 >
                     {accommodation_name}
                 </Typography>
                 <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                     {accommodation_prise}
                 </Typography>
             </div>
         </div>
     );

 };

