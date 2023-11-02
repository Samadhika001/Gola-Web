import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Rating, Typography } from "@material-tailwind/react";
import { ShopContext } from "../../context/shop_context";

export const PackageItem = (props) => {
    const { data, category } = props;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className="flex items-center gap-3 text-left mx-10">
            <Link to="/TrViewAcDetails">
                <img
                    className="h-40 w-40"
                    src={
                        category === "accommodation"
                            ? data.accommodation_image
                            : category === "transport"
                            ? data.transport_image
                            : data.experience_image
                    }

                />
            </Link>

            <div className="flex flex-col gap-4">
                <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-semi-bold"
                >
                    {category === "accommodation"
                        ? data.accommodation_name
                        : category === "transport"
                        ? data.transport_name
                        : data.experience_name}
                </Typography>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal opacity-70"
                >
                    {category === "accommodation"
                        ? data.accommodation_prise
                        : category === "transport"
                        ? data.transport_prise
                        : data.experience_prise}
                </Typography>
            </div>
        </div>
    );
};
