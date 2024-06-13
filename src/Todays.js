import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import redbox from './img/redbox.svg'

const Todays = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(json => setProducts(json))
        console.log(products)
    }, [products])

    return (
        <div className='px-20 mb-10'>

            <div className='flex flex-col gap-4 px-4 mb-6'>
                <div className='flex items-center gap-4'>
                    <img src={redbox} alt='' />
                    <h1 className='text-[#db4444] font-semibold'>Today's</h1>
                </div>


                <h1 className='font-bold text-4xl'>Flash Sales</h1>
            </div>

            <div id='scroll' className='flex flex-row overflow-x-scroll overflow-y-hidden items-center gap-5'>

                {products.length === 0 ? <div>Loading....</div> : products.map((product) => {
                    return (
                        <div className='rounded w-[270px] h-[70vh] flex flex-col items-center shrink-0 px-4 gap-3'>
                            <div className='bg-[#F5F5F5] p-5 w-full flex items-center justify-center h-[200px]'>
                                <img src={product.image} alt='' className='h-[180px] w-[150px] mix-blend-multiply'></img>
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
                                }} variant='contained' disableElevation>Add to Cart</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}

export default Todays;