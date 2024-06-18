import React from 'react';
import appleLogo from './img/1200px-Apple_gray_logo 1.svg'
import iphone from './img/hero_endframe__cvklg0xk3w6e_large 2.svg'
import Todays from './Todays';
import Category from './Category';
import Intro from './Intro';
import Best from './Best';

    const categories = ["Women's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"]


const Home = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex gap-10 mb-20'>

                <ul className='border-r w-fit px-32 py-10 hidden lg:flex flex-col gap-3 font-semibold'>

                    {categories.map((category, id) => {
                        return (
                            <li key={id} className='cursor-pointer'>{category}</li>
                        )
                        
                    })}
                </ul>


                <div className='bg-black lg:w-[60vw] w-full lg:h-[56dvh] self-center p-10 text-white flex justify-between'>
                    <div className='flex gap-4 flex-col justify-between'>
                        <div className='flex gap-4 items-center'>
                            <img src={appleLogo} alt=''></img>
                            <h1>iPhone 14 Series</h1>
                        </div>
                        <h1 className='text-5xl w-[294px] font-semibold'>Up to 10% off Voucher</h1>
                        <h1 className='border-b border-white w-fit cursor-pointer font-semibold'>Shop Now</h1>
                    </div>

                    <img src={iphone} alt='' className='hidden md:block'/>
                </div>
            </div>

            <Todays />
            <Category />
            <Best />

            <div>
                
            </div>

            <Intro />
        </div>

    );
}

export default Home;