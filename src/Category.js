import React from 'react';
import redbox from './img/redbox.svg'
import camera from './img/Category-Camera.svg'
import smartwatch from './img/Category-SmartWatch.svg'
import cellphone from './img/Category-CellPhone.svg'
import computer from './img/Category-Computer.svg'
import gamepad from './img/Category-Gamepad.svg'
import headphone from './img/Category-Headphone.svg'

const categories = [
    {
        image: camera,
        desc: 'Camera'
    },
    {
        image: smartwatch,
        desc: 'SmartWatch'
    },
    {
        image: cellphone,
        desc: 'Phones'
    },
    {
        image: computer,
        desc: 'Computers'
    },
    {
        image: gamepad,
        desc: 'Gaming'
    },
    {
        image: headphone,
        desc: 'Headphones'
    }
]



const Category = () => {
    return (
        <div className='lg:px-20 px-5 mb-10'>
            <div className='border-b pb-10'>
                <div className='flex flex-col gap-4 px-4 mb-6'>
                    <div className='flex items-center gap-4'>
                        <img src={redbox} alt='' />
                        <h1 className='text-[#db4444] font-semibold'>Categories</h1>
                    </div>

                    <h1 className='font-bold text-4xl'>Browse by Category</h1>
                </div>

                <div className='flex flex-row lg:gap-3 gap-1 flex-wrap items-center justify-center'>
                    {categories.map((category) => {
                        return (
                            <div key={category.id} className='cursor-pointer border flex flex-col gap-4 items-center justify-center lg:w-[10.6rem] lg:h-[9.065rem] w-[8rem] h-7rem flex-wrap hover:scale-110 transition-all duration-300 '>
                                <img src={category.image} alt='category'/>
                                <h1>{category.desc}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Category;