import React from 'react';
import { Link } from 'react-router-dom';

const NotLogged = () => {
    return (
        <div className="text-center lg:text-5xl text-3xl font-semibold my-32">
            Please <Link to='/login' className='underline'> Login or Signup</Link>
        </div>
    );
}

export default NotLogged;