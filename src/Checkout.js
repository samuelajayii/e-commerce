/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react'
import { CartContext } from './context/cart'
import { Divider, Checkbox, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import nagad from './img/Nagad.svg'
import visa from './img/Visa.svg'
import mastercard from './img/Mastercard.svg'
import bkash from './img/Bkash.svg'

const handleSubmit = (e) => {
    e.preventDefault()
}

const Checkout = () => {

    const { cartItems, getCartTotal } = useContext(CartContext)

    let total = 0;

    getCartTotal() >= 140 ? total = 0 : total = 20;

    return (
        <div className='lg:mx-20 mx-4 my-20'>

            <h1 className='text-4xl font-semibold mb-10'>Billing Details</h1>

            <div className='flex gap-20'>

                <div>
                    <form className='flex flex-col gap-10 ' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm text-[#a2a2a2]'>First Name</label>
                            <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] px-3 outline-none rounded-md' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm text-[#a2a2a2]'>Company Name (optional)</label>
                            <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] px-3 outline-none rounded-md' />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm text-[#a2a2a2]'>Street Address</label>
                            <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] px-3 outline-none rounded-md' required />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm text-[#a2a2a2]'>Apartment, Floor etc (optional)</label>
                            <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] px-3 outline-none rounded-md' />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm text-[#a2a2a2]'>Town / City</label>
                            <input type='text' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] px-3 outline-none rounded-md' required />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm text-[#a2a2a2]'>Phone Number</label>
                            <input type='number' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] px-3 outline-none rounded-md' required />

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm text-[#a2a2a2]'>Town / City</label>
                            <input type='email' className='bg-[#F5F5F5] lg:w-[30vw] lg:h-[2.5rem] px-3 outline-none rounded-md' required />

                        </div>
                        <div className='flex items-center'>
                            <Checkbox size='medium' sx={{
                                color: '#db4444',
                                '&.Mui-checked': {
                                    color: '#db4444',
                                }
                            }} /> <label className='text-sm'>Save this information for faster check-out next time</label>
                        </div>

                    </form>
                </div>

                <div className='w-[40vw] flex flex-col gap-4'>
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
                    >
                        <FormControlLabel value="bank" control={<Radio sx={{
                            color: 'black',
                            '&.Mui-checked': {
                                color: 'black',
                            }
                        }} />} label="Bank" />
                        <FormControlLabel value="cash on delivery" control={<Radio sx={{
                            color: 'black',
                            '&.Mui-checked': {
                                color: 'black',
                            }
                        }} />} label="Cash on delivery" />
                    </RadioGroup>
                </div>

            </div>
        </div>

    );
}

export default Checkout;