/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext, useState, useEffect } from 'react'
import { CartContext } from './context/cart'
import { Divider, Checkbox, Radio, RadioGroup, FormControlLabel, Box, Button } from '@mui/material';
import nagad from './img/Nagad.svg'
import visa from './img/Visa.svg'
import mastercard from './img/Mastercard.svg'
import bkash from './img/Bkash.svg'

const Checkout = () => {

    const { cartItems, getCartTotal, clearCart } = useContext(CartContext)

    const [disable, setDisable] = useState(true)



    useEffect(() => {
        if (cartItems.length > 0){
            setDisable(false)
        }
    },)

    let total = 0;

    getCartTotal() >= 140 ? total = 0 : total = 20;

    return (
        <div className='lg:mx-20 mx-4 my-20'>

            <h1 className='text-4xl font-semibold mb-10'>Billing Details</h1>

            <div className='flex gap-20 justify-center'>
                <form className='flex flex-col lg:flex-row gap-10 '>
                    <div>


                        <div className='flex flex-col gap-10 ' >
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-[#a2a2a2]'>First Name</label>
                                <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] py-3 px-3 outline-none rounded-md' required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-[#a2a2a2]'>Company Name (optional)</label>
                                <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] py-3 px-3 outline-none rounded-md' />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-[#a2a2a2]'>Street Address</label>
                                <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] py-3 px-3 outline-none rounded-md' required />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-[#a2a2a2]'>Apartment, Floor etc (optional)</label>
                                <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] py-3 px-3 outline-none rounded-md' />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-[#a2a2a2]'>Town / City</label>
                                <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] py-3 px-3 outline-none rounded-md' required />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-[#a2a2a2]'>Phone Number</label>
                                <input type='number' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] py-3 px-3 outline-none rounded-md' required />

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-[#a2a2a2]'>Email Address</label>
                                <input type='email' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] py-3 px-3 outline-none rounded-md' required />

                            </div>
                            <FormControlLabel control={<Checkbox size='medium' sx={{
                                color: '#db4444',
                                '&.Mui-checked': {
                                    color: '#db4444',
                                }
                            }} />} label="Save this information for faster check-out next time" />

                        </div>
                    </div>

                    <div className='lg:w-[40vw] flex flex-col gap-4'>
                        {cartItems.map((item, id) => {
                            return (
                                <div key={id} className='flex flex-row gap-8 items-center justify-between w-full'>
                                    <img src={item.image} className='w-12 h-12' alt='item-img' />
                                    <h1 className='w-80'>{item.title}</h1>
                                    <h1 className=''>${item.price}</h1>
                                </div>
                            )
                        })}

                        <div className='flex items-center justify-between w-full'>
                            <h1 className='font-semibold'>Subtotal:</h1>
                            <h1>${getCartTotal()}</h1>
                        </div>

                        <Divider sx={{ bgcolor: 'black' }} />

                        <div className='flex items-center justify-between w-full'>
                            <h1 className='font-semibold'>Shipping:</h1>
                            <h1>${total}</h1>
                        </div>

                        <Divider sx={{ bgcolor: 'black' }} />

                        <div className='flex items-center justify-between w-full'>
                            <h1 className='font-semibold'>Total:</h1>
                            <h1>${getCartTotal() + total}</h1>
                        </div>


                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="bank"
                            name="radio-buttons-group"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <FormControlLabel value="bank" control={<Radio sx={{
                                    color: 'black',
                                    '&.Mui-checked': {
                                        color: 'black',
                                    }
                                }} />} label="Bank" />
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}>
                                    <img src={bkash} alt='' />
                                    <img src={visa} alt='' />
                                    <img src={mastercard} alt='' />
                                    <img src={nagad} alt='' />
                                </Box>
                            </Box>

                            <FormControlLabel value="cash on delivery" control={<Radio sx={{
                                color: 'black',
                                '&.Mui-checked': {
                                    color: 'black',
                                }
                            }} />} label="Cash on delivery" />
                        </RadioGroup>
                        <div className='flex flex-row gap-3 items-center'>
                            <input type='text' className='outline-none border w-[70%] h-[56px] rounded px-4 border-black' placeholder='Enter Coupon' />
                            <Button variant='contained' disableElevation sx={{
                                height: "100%",
                                backgroundColor: '#db4444',
                                textTransform: 'none',
                                ":hover": {
                                    backgroundColor: '#db4444'
                                }
                            }} >Apply Coupon</Button>
                        </div>

                        <Button onClick={clearCart} type='submit' variant='contained' disableElevation sx={{
                            backgroundColor: '#db4444',
                            padding: '10px 55px',
                            width: 'fit-content',
                            textTransform: 'none',
                            ":hover": {
                                backgroundColor: '#db4444'
                            }
                        }} >Place Order</Button>

                    </div>
                </form>


            </div>
        </div>

    );
}

export default Checkout;