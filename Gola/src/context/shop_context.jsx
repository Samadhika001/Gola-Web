import { createContext, useState } from "react";

export const ShopContext = createContext(null);

// Define the categories
const categories = ["accommodation", "experience", "transport"];

const getDefaultCart = () => {
    // Initialize the cart with sub-objects for each category
    const cart = {};
    categories.forEach((category) => {
        cart[category] = {};
    });

    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    // const addToCart = (category, itemId) => {
    //     setCartItems((prev) => ({
    //         ...prev,
    //         [itemId]: {
    //             category, // Include the category property
    //             quantity: (prev[itemId] && prev[itemId].quantity) ? prev[itemId].quantity + 1 : 1,
    //         },
    //     }));
    // };
    const addToCart = (category, id) => {
        if (!cartItems[category]) {
            cartItems[category] = {};
        }
        cartItems[category][id] = (cartItems[category][id] || 0) + 1;
    };
 
    const removeFromCart = (category, itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [itemId]: Math.max(0, (prev[category][itemId] || 0) - 1),
            },
        }));
    };

    const updateCartItemCount = (category, itemId, newAmount) => {
        setCartItems((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [itemId]: newAmount,
            },
        }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        checkout,
    };

    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
