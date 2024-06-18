import React, { useEffect, useState } from 'react';
import redbox from './img/redbox.svg'
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
const Best = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing?limit=10")
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [products])




    return (
        <div>
            <div className='lg:px-20 px-5 mb-10'>
                <div className='border-b pb-10'>
                    <div className='flex flex-col gap-4 px-4 mb-6'>
                        <div className='flex items-center gap-4'>
                            <img src={redbox} alt='' />
                            <h1 className='text-[#db4444] font-semibold'>This month</h1>
                        </div>

                        <h1 className='font-bold text-4xl'>Best Selling Category</h1>
                    </div>


                    <div id='scroll' className='flex flex-row overflow-x-scroll overflow-y-hidden lg:items-center lg:gap-5 h-[370px]'>
                        {products.length === 0 ? <div>Loading....</div> : products.map((product, id) => {
                            return (
                                <div key={id} className='rounded lg:w-[270px] w-[190px] h-[150px] lg:h-[70vh] flex flex-col items-center shrink-0 px-4 lg:gap-3 gap-4 relative'>
                                    <div className='bg-[#F5F5F5] p-5 w-full flex items-center justify-center h-[200px]'>
                                        <img src={product.image} alt='' className='lg:h-[180px] h-[80px] w-[70px] lg:w-[150px] mix-blend-multiply'></img>
                                        <div className='flex flex-col absolute top-2 right-7 gap-1'>
                                            <FontAwesomeIcon icon={faHeart} className='cursor-pointer p-1 bg-white rounded-full' />
                                            <FontAwesomeIcon icon={faEye} className='cursor-pointer p-1 bg-white rounded-full' />
                                        </div>

                                    </div>
                                    <div className='self-start gap-2 flex flex-col h-[90px] mb-10'>
                                        <h1>{product.title}</h1>
                                        <h1>${product.price}</h1>
                                        <h1>Rate: {product.rating.rate}</h1>
                                    </div>
                                    <div className='w-full'>
                                        <Button sx={{
                                            width: '100%',
                                            backgroundColor: 'black',
                                            textTransform: 'none',
                                        }} variant='contained' disableElevation>Add to Cart</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Best;