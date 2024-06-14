import React from 'react';
import logo from './img/whitelogo.svg'
import qrcode from './img/Frame 719.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className='relative bottom-0 '>
            <div className='bg-black text-white px-16 py-24 hidden lg:flex flex-row justify-center gap-20 '>
                <div className='flex flex-col w-[217px] gap-6'>
                    <img src={logo} alt='logo' className='w-[118px] h-[24px]' />
                    <h1 className='font-semibold text-[18px]'>Subscribe</h1>
                    <h1>Get 10% off your first order</h1>

                    <div className='border rounded border-white px-5 py-3 -mt-2 flex items-center gap-1'>
                        <input type='text' placeholder='Enter your email' className='outline-none bg-transparent text-sm font-mono' />
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </div> 
                </div>


                <div className='flex flex-col w-[217px] gap-6 text-white'>
                    <h1 className='text-xl font-semibold'>Support</h1>
                    <h1>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</h1>
                    <h1>exclusive@gmail.com</h1>
                    <h1> +88015-88888-9999</h1>
                </div>
                <div className='flex flex-col w-[217px] gap-6 text-white'>
                    <h1 className='text-xl font-semibold'>Account</h1>
                    <ul className='flex flex-col gap-3'>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className='flex flex-col w-[217px] gap-6 text-white'>
                    <h1 className='text-xl font-semibold'>Quick Link</h1>
                    <ul className='flex flex-col gap-3'>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex flex-col w-[400px] gap-6 text-white'>
                    <h1 className='text-xl font-semibold'>Download App</h1>
                    <h1 className='text-[#7a7a7a] text-sm'>Save $3 with App New User Only</h1>
                    <img src={qrcode} alt='' />
                    <div className='flex flex-row gap-4 items-center'>
                        <FontAwesomeIcon icon={faFacebookF} className='cursor-pointer'/>
                        <FontAwesomeIcon icon={faTwitter} className='cursor-pointer'/>
                        <FontAwesomeIcon icon={faInstagram} className='cursor-pointer'/>
                        <FontAwesomeIcon icon={faLinkedinIn} className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;