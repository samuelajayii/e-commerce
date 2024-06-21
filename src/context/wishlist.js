import { createContext, useState, useEffect } from 'react'

export const WishListContext = createContext()

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState(localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList')) : [])

    const addToList = (item) => {
        const isItemInList = wishList.find((wishItem) => wishItem.id === item.id);

        if (isItemInList) {
            setWishList(
                wishList.map((wishItem) =>
                    wishItem.id === item.id
                        ? { ...wishItem, quantity: wishItem.quantity + 1 }
                        : wishItem
                )
            );
        } else {
            setWishList([...wishList, { ...item, quantity: 1 }]);
        }
    };

    const removeFromList = (item) => {
        const isItemInList = wishList.find((wishItem) => wishItem.id === item.id);

        if (isItemInList.quantity === 1) {
            setWishList(wishList.filter((wishItem) => wishItem.id !== item.id));
        } else {
            setWishList(
                wishList.map((wishItem) =>
                    wishItem.id === item.id
                        ? { ...wishItem, quantity: wishItem.quantity - 1 }
                        : wishItem
                )
            );
        }
    };

    const clearList = () => {
        setWishList([]);
    };

    const getCartTotal = () => {
        return wishList.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [wishList]);

    useEffect(() => {
        const wishList = localStorage.getItem("wishList");
        if (wishList) {
            setWishList(JSON.parse(wishList));
        }
    }, []);

    return (
        <WishListContext.Provider
            value={{
                wishList,
                addToList,
                removeFromList,
                clearList,
                getCartTotal,
            }}
        >
            {children}
        </WishListContext.Provider>
    );
};
