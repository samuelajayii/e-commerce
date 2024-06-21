import React from 'react';
import { useContext } from 'react';
import { WishListContext } from './context/wishlist';


const Wishlist = () => {

    const { wishList, addToList, removeFromList, clearList, } = useContext(WishListContext)

    return (
        <div>
            {wishList.map((item, id) => {
                return (
                    <div>{item.title}</div>
                )
            })}
        </div>
    );
}

export default Wishlist;