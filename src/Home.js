import React from 'react';
import appleLogo from './img/1200px-Apple_gray_logo 1.svg'
import iphone from './img/hero_endframe__cvklg0xk3w6e_large 2.svg'



const Home = () => {
    return (
        <div className='flex gap-10 mb-20'>
            <div>
                <ul className='border-r w-fit px-32 py-10 hidden lg:flex flex-col gap-3 font-semibold'>
                    <li className='cursor-pointer'>Women's Fashion</li>
                    <li className='cursor-pointer'>Men's Fashion</li>
                    <li className='cursor-pointer'>Electronics</li>
                    <li className='cursor-pointer'>Home & Lifestyle</li>
                    <li className='cursor-pointer'>Medicine</li>
                    <li className='cursor-pointer'>Sports & Outdoor</li>
                    <li className='cursor-pointer'>Baby's & Toys</li>
                    <li className='cursor-pointer'>Groceries & Pets</li>
                    <li className='cursor-pointer'>Health & Beauty</li>
                </ul>
            </div>


            <div className='bg-black w-[60vw] h-[56dvh] self-center p-10 text-white flex justify-between'>
                <div className='flex  gap-4 flex-col justify-between'>
                    <div className='flex gap-4 items-center'>
                        <img src={appleLogo} alt=''></img>
                        <h1>iPhone 14 Series</h1>
                    </div>
                    <h1 className='text-5xl w-[294px] font-semibold'>Up to 10% off Voucher</h1>
                    <h1 className='border-b border-white w-fit cursor-pointer font-semibold'>Shop Now</h1>
                </div>

                <img src={iphone} alt='' />
            </div>



        </div>
    );
}

export default Home;