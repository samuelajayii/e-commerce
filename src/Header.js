
import logo from './img/Logo.svg'
import heart from './img/heart.svg'
import cart from './img/cart.svg'
import search from './img/search.svg'
import { NavLink, Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { userContext } from './App'
import { auth, db } from './firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Tooltip, Zoom, Menu, MenuItem, Avatar, List, ListItem, ListItemButton, ListItemText, Divider, Box, SwipeableDrawer } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { categories } from './Home'


const Header = () => {



    // this state is for the categories menu
    const [menu, setMenu] = useState(false)

    const toggleDrawer = (newMenu) => () => {
        setMenu(newMenu);
    };

    // this state is for the profile menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // to make the link to the home valid upon logging in and invalid when you log out
    const [homeButton, setHomeButton] = useState(null)

    // changes to true upon logging in. Used to show logged in status
    const {userDetails, setUserDetails} = useContext(userContext)



    // fetch user data
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

    // log out of profile
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <header className=' border-b pb-4'>
            <div className="bg-black text-white h-12 flex justify-center items-center">
                <h1 className="font-thin text-sm text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline font-semibold">SHOP NOW</span></h1>

            </div>
            <nav className='flex flex-row justify-between lg:px-10 px-5 items-center w-full mt-8 '>
                <img src={logo} alt='' className='lg:block hidden' />
                
                {userDetails ? <FontAwesomeIcon icon={faBars} className='text-xl lg:hidden' onClick={toggleDrawer(true)} /> : ""}

                <ul className='lg:flex flex-row gap-14 items-center'>
                    {homeButton ? <NavLink to='home'><li className='cursor-pointer lg:flex hidden items-center'>Home</li></NavLink> : ''}
                    {userDetails ? (
                        <div className='lg:flex hidden flex-row items-center gap-14'>
                            
                            <NavLink to="/contact"><li className='cursor-pointer'>Contact</li></NavLink>
                            <NavLink to='/about'><li className='cursor-pointer'>About</li></NavLink>
                            
                        </div>

                    ) : ''}
                    {!userDetails && <NavLink to='signup'><li className='cursor-pointer block'>Sign Up / Log In</li></NavLink>}
                </ul>

                {userDetails && (
                    <div className='flex-row gap-7 items-center lg:flex hidden'>
                        <div className='flex flex-row bg-[#F5F5F5] rounded px-2'>
                            <input type='text' placeholder='What are you looking for?' className='bg-[#F5F5F5] outline-none text-sm h-[38px] w-[243px] px-2'></input><img src={search} alt='' className='cursor-pointer w-5' />
                        </div>
                        <div className='flex items-center gap-7'>
                            <Tooltip title="Wishlist" placement='top' TransitionComponent={Zoom} arrow>
                                <Link to="/wishlist">
                                    <img src={heart} alt='' className='cursor-pointer w-5' />
                                </Link>
                            </Tooltip>
                            <Tooltip title="Cart" placement='top' TransitionComponent={Zoom} arrow><Link to='/cart'><img src={cart} alt='' className='cursor-pointer w-5' /></Link></Tooltip>
                        </div>
                        <div className='flex gap-5 items-center cursor-pointer'>
                            <Tooltip title="Account Settings" placement='top' TransitionComponent={Zoom} arrow aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <h1>{userDetails.name}</h1>

                            </Tooltip>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                elevation={20}
                            >
                                <div className='block lg:hidden'>
                                    <MenuItem onClick={handleClose}><Link to="/home" className='w-full h-full'>Home</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link to="/contact" className='w-full h-full'>Contact</Link></MenuItem>
                                    <MenuItem onClick={handleClose}><Link to="/about" className='w-full h-full'>About</Link></MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}><Link to='/cart' className='w-full h-full'>Cart</Link> </MenuItem>
                                    <MenuItem onClick={handleClose}><Link to="/wishlist"  className='w-full h-full'>Wishlist</Link></MenuItem>

                                    <Divider />
                                </div>

                                <MenuItem onClick={handleClose}>Manage my account</MenuItem>
                                <MenuItem onClick={handleClose}>My orders</MenuItem>
                                <MenuItem onClick={handleClose}>My cancellations</MenuItem>
                                <MenuItem onClick={handleClose}>Reviews</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>

                            </Menu>
                        </div>
                    </div>
                )}
                
                <div className='cursor-pointer lg:hidden flex items-center gap-6'>
                    {userDetails && (
                        <div>
                            <Avatar id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>{userDetails.name[0]}</Avatar>
                        </div>
                    )}
                    <SwipeableDrawer open={menu} onOpen={() => { }} onClose={toggleDrawer(false)}>
                        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                            <List>
                                <h1 className='text-2xl py-5 px-3'>Categories</h1>
                                <Divider />
                                {categories.map((category, id) => {
                                    return (
                                        <ListItem key={id} >
                                            <ListItemButton>
                                                <ListItemText >{category}</ListItemText>
                                            </ListItemButton>

                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    </SwipeableDrawer>
                </div>
            </nav>
        </header>
    );
}

export default Header;