/* eslint-disable no-unused-vars */
import React from 'react';
import { userContext } from './App';
import { useContext } from 'react';
import NotLogged from './NotLogged';
import { Box, Divider, Paper, Button } from '@mui/material';

const Contact = () => {

    const { userDetails } = useContext(userContext)

    return (
        <div className='lg:mx-20 py-20 mx-4 flex gap-10'>

            <Box component={Paper} sx={{
                width: 330,
                padding: '50px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5
            }}>
                <h1 className='font-semibold text-xl'>Call to us</h1>
                <p>We are availabe 24/7,7 days a week</p>
                <p>Phone: +8801611112222</p>
                <Divider />
                <h1 className='font-semibold text-xl'>Write To Us</h1>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
            </Box>

            <Box component={Paper} sx={{
                padding: '20px',
                display: 'flex',
                gap: 1,
                flexDirection: 'column',
                width: 'fit-content'
            }}>
                <div className='flex flex-row gap-3 flex-wrap shrink'>
                    <input type='text' placeholder='Your Name' className='bg-[#F5F5F5] outline-none text-sm h-[38px] w-[13rem] px-2 rounded-sm'></input>
                    <input type='email' placeholder='Your Email' className='bg-[#F5F5F5] outline-none text-sm h-[38px] w-[13rem] px-2 rounded-sm'></input>
                    <input type='number' placeholder='Your Phone' className='bg-[#F5F5F5] outline-none text-sm h-[38px] w-[13rem] px-2 rounded-sm'></input>
                </div>
                <div>
                    <textarea type='text' rows={10} cols={50} className='bg-[#f5f5f5] w-full text-sm rounded p-3 resize-none outline-none' placeholder='Your Message'>

                    </textarea>
                </div>
                <Button variant='contained' disableElevation sx={{
                    backgroundColor: '#db4444',
                    textTransform: 'none',
                    width: 'fit-content',
                    alignSelf: 'flex-end',
                    padding: '10px 40px',
                    ":hover": {
                        backgroundColor: '#db4444'
                    }
                }}>Send Message</Button>

            </Box>

        </div>
    );
}

export default Contact;