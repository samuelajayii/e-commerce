/* eslint-disable no-unused-vars */
import logo from './img/Logo.svg'
import heart from './img/heart.svg'
import cart from './img/cart.svg'
import search from './img/search.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { auth, db } from './firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Tooltip, Zoom, Menu, MenuItem, Avatar, Button } from '@mui/material'



const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [homeButton, setHomeButton] = useState(null)

    const [userDetails, setUserDetails] = useState(null)
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setUserDetails(docSnap.data())
                setHomeButton(true)
            } else {

            }
        })
    }

    const handleLogout = async () => {
        try {
            await auth.signOut()
            window.location.href = '/login'
            toast.success("Signed out successfully")
        } catch (error) {
            toast.error("Error logging out: ", error.message)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <header className=' border-b pb-4'>
            <div className="bg-black text-white h-12 flex justify-center items-center">
                <h1 className="font-thin text-sm text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline font-semibold">SHOP NOW</span></h1>

            </div>
            <nav className='flex flex-row justify-between px-10 items-center w-full mt-8 '>
                <img src={logo} alt='' />

                <ul className='lg:flex hidden flex-row gap-14 items-center'>
                    {homeButton ? <NavLink to='home'><li className='cursor-pointer'>Home</li></NavLink> : '' }
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>About</li>
                    {!userDetails && <NavLink to='signup'><li className='cursor-pointer'>Sign Up / Log In</li></NavLink>}

                </ul>

                <div className=' flex-row gap-7 items-center lg:flex hidden'>
                    <div className='flex flex-row bg-[#F5F5F5] rounded px-2'>
                        <input type='text' placeholder='What are you looking for?' className='bg-[#F5F5F5] outline-none text-sm h-[38px] w-[243px] px-2'></input><img src={search} alt='' className='cursor-pointer w-5' />
                    </div>

                    <img src={heart} alt='' className='cursor-pointer w-5' />
                    <img src={cart} alt='' className='cursor-pointer w-5' />
                    {userDetails ?
                        (<div className='flex gap-5 items-center cursor-pointer'>
                            <Tooltip title="Account Settings" placement='top' TransitionComponent={Zoom} arrow aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                {userDetails.name}
                            </Tooltip>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                elevation={10}
                            >
                                <MenuItem onClick={handleClose}>Manage my account</MenuItem>
                                <MenuItem onClick={handleClose}>My orders</MenuItem>
                                <MenuItem onClick={handleClose}>My cancellations</MenuItem>
                                <MenuItem onClick={handleClose}>Reviews</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>) : ''}
                </div>
            </nav>
        </header>
    );
}

export default Header;