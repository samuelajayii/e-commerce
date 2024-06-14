/* eslint-disable no-unused-vars */
import React from 'react';
import redbox from './img/redbox.svg'

const Intro = () => {
    return (
        <div className='flex flex-col mt-14 mx-20'>
            <div className='flex self-start flex-col mb-8 px-4'>
                <div className='flex flex-row gap-4 items-center'>
                    <img src={redbox} alt='redbox' />
                    <h1 className='text-[#DB4444] font-bold'>Featured</h1>
                </div>
                <h1 className='text-2xl font-semibold mt-3'>New Arrival</h1>
            </div>

            <div className='flex flex-wrap flex-col lg:flex-wrap items-center justify-center gap-4 lg:h-[550px] mb-10'>
                <div className='item bg-black rounded overflow-hidden relative h-[25rem] lg:h-full '>
                    <div className='card-1 text-white flex'>
                        <div className='p-4 w-[15.125rem] absolute bottom-0'>
                            <h1 className='text-xl font-semibold'>PlayStation 5</h1>
                            <p className=''>Black and White version of the PS5 coming out on sale</p>
                            <p className='font-thin border-b w-fit'>Shop Now</p>
                        </div>
                    </div>
                </div>
                <div className='item flex flex-col gap-4 h-full'>
                    <div className='bg-[#0e0d0d] rounded overflow-hidden lg:w-[35.625rem] relative h-[17.7rem] w-[95vw]'>
                        <div className='card-2 text-white flex'>
                            <div className='p-4 w-[15.125rem] absolute bottom-0'>
                                <h1 className='text-xl font-semibold'>Women's Collections</h1>
                                <p className=''>Featured woman collections that give you another vibe</p>
                                <p className='font-thin border-b w-fit'>Shop Now</p>
                            </div>
                        </div>
                    </div>


                    <div className='item flex gap-4 flex-col lg:flex-row items-center w-full'>
                        <div className='bg-[#1c1c1cf5] rounded overflow-hidden w-full relative'>
                            <div className='card-3 text-white flex'>
                                <div className='p-4 w-[15.125rem] absolute bottom-0'>
                                    <h1 className='text-xl font-semibold'>Speakers</h1>
                                    <p className=''>Amazon Wireless Speakers</p>
                                    <p className='font-thin border-b w-fit'>Shop Now</p>
                                </div>
                            </div>
                        </div>

                        <div className='item bg-[#1c1c1cf5] rounded overflow-hidden w-full relative'>
                            <div className='card-4 text-white flex'>
                                <div className='p-4 w-[15.125rem] absolute bottom-0'>
                                    <h1 className='text-xl font-semibold'>Perfume</h1>
                                    <p className=''>GUCCI INTENSE OUD EDP</p>
                                    <p className='font-thin border-b w-fit'>Shop Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;