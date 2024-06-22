/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { WishListContext } from './context/wishlist';
import { Typography, Button, CardContent, CardMedia, CardActions, Card } from '@mui/material';
import { CartContext } from './context/cart';
import { userContext } from './App';
import NotLogged from './NotLogged';

const Wishlist = () => {

    const { wishList, addToList, removeFromList, clearList, } = useContext(WishListContext)
    const { addToCart } = useContext(CartContext)
    const { userDetails } = useContext(userContext)


    return (
        <div>
            {userDetails ? <div className='lg:mx-20 mx-4 flex flex-col items-center justify-center'>
                <h1 className='mt-10 lg:text-4xl text-xl font-bold'>WISHLIST</h1>
                <div className='justify-center items-center my-14 flex flex-row gap-5 flex-wrap'>

                    {wishList.map((item, id) => {
                        return (
                            <Card key={id} sx={{
                                width: 260,
                                pt: 2,
                            }}>
                                <CardMedia sx={{
                                    height: "150px",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain'
                                }} image={item.image}></CardMedia>
                                <CardContent sx={{
                                    width: { sm: "90vw", lg: 260 },
                                    height: 90,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    mt: 2

                                }}>
                                    <Typography sx={{
                                        width: '100%'
                                    }}>{item.title}</Typography>
                                    <Typography>${item.price}</Typography>


                                </CardContent>
                                <CardActions sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Button onClick={() => addToCart(item)} sx={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        width: '100%',
                                        ':hover': {
                                            backgroundColor: 'black'
                                        }
                                    }} >Add to Cart</Button>
                                </CardActions>
                                <CardActions>
                                    <Button onClick={() => removeFromList(item)} sx={{
                                        backgroundColor: 'black',
                                        marginLeft: 0,
                                        color: 'white',
                                        width: '100%',
                                        ':hover': {
                                            backgroundColor: 'black'
                                        }
                                    }}>Remove</Button>
                                </CardActions>
                            </Card>
                        )
                    })}
                </div>

                <button
                    className="px-4 mb-10 py-2 bg-gray-800 text-white font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                        clearList()
                    }}
                >
                    Clear Wishlist
                </button>
            </div > : <NotLogged />}
        </div>


    );
}

export default Wishlist;