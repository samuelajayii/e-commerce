import React from 'react';
import { userContext } from './App';
import { useContext } from 'react';
import NotLogged from './NotLogged';
import { Box, Divider, Paper } from '@mui/material';

const Contact = () => {

    const { userDetails } = useContext(userContext)

    return (
        <div className='lg:mx-20 py-20 mx-4'>

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

            

        </div>
    );
}

export default Contact;