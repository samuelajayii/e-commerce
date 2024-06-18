import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import redbox from './img/redbox.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';

const Todays = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [products])

    return (
        <div className='lg:px-20 px-5 mb-10'>

            <div className='border-b pb-10'>
                <div className='flex flex-col gap-4 px-4 mb-6'>
                    <div className='flex items-center gap-4'>
                        <img src={redbox} alt='' />
                        <h1 className='text-[#db4444] font-semibold'>Today's</h1>
                    </div>


                    <h1 className='font-bold text-4xl'>Flash Sales</h1>
                </div>

                <div id='scroll' className='flex flex-row overflow-x-scroll overflow-y-hidden lg:items-center lg:gap-3 h-[370px] lg:h-[480px]'>

                    {products.length === 0 ? <div>Loading....</div> : products.map((product, id) => {
                        return (
                            <div key={id} className='rounded lg:w-[270px] w-[190px] h-[150px] lg:h-[80vh] flex flex-col items-center shrink-0 px-4 lg:gap-3 gap-4 relative'>
                                <div className='bg-[#F5F5F5] p-5 w-full flex items-center justify-center'>
                                    <img src={product.image} alt='' className='lg:h-[180px] h-[80px] w-[70px] lg:w-[150px] mix-blend-multiply'></img>
                                    <div className='flex flex-col absolute top-2 right-7 gap-1'>
                                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer bg-white rounded-full p-1' />
                                        <FontAwesomeIcon icon={faEye} className='cursor-pointer bg-white rounded-full p-1' />
                                    </div>

                                </div>
                                <div className='self-start gap-2 flex flex-col h-[90px] mb-10'>
                                    <h1>{product.title}</h1>
                                    <h1>${product.price}</h1>
                                    <h1>Rate: {product.rating.rate} / 5</h1>
                                </div>
                                <div className='w-full mt-3'>
                                    <Button sx={{
                                        width: '100%',
                                        backgroundColor: 'black',
                                        textTransform: 'none'
                                    }} variant='contained' disableElevation>Add to Cart</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center mt-14'>
                    <Button disableElevation variant="contained" sx={{
                        backgroundColor: "#db4444",
                        padding: '10px 22px',
                        fontSize: '12px',
                        ":hover": {
                            backgroundColor: "#db4444"
                        }
                    }}>View All Products</Button>
                </div>
            </div>
        </div>

    );
}

export default Todays;