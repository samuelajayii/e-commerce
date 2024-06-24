import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Error = () => {



    return (
        <div className='h-screen'>
            <div className='flex flex-col items-center justify-center h-full gap-7'>
                <h1 className='text-6xl font-semibold'>404 Not Found</h1>
                <h1>Your visited page not found, Go back to home page or return to previous page</h1>
                <NavLink to="/home">
                    <Button variant='contained' sx={{
                        backgroundColor: '#db4444',
                        textTransform: 'none',
                        padding: '10px 40px',
                        ":hover": {
                            backgroundColor: '#db4444'
                        }
                    }}>Go back to Home Page</Button>
                </NavLink>
            </div>
        </div>

    );
}

export default Error;