import React from 'react';

const Home = () => {
    return (
        <div>
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

        </div>
    );
}

export default Home;