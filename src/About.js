import React from 'react';
import sideimage from './img/sideimage2.svg'
import { userContext } from './App';
import { useContext } from 'react';
import NotLogged from './NotLogged';

const About = () => {

    const { userDetails } = useContext(userContext)

    return (


        <div className='lg:ml-20 my-20 lg:mr-0 mx-4'>
            {userDetails ? (
                <div>
                    <div className='flex gap-10 relative items-center jusitfy-center'>
                        <div className='lg:w-[525px] self-center'>
                            <h1 className='font-semibold lg:text-6xl text-3xl mb-10'>Our Story</h1>
                            <p className='mb-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>

                            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                        <img className='lg:block hidden mr-0' src={sideimage} alt='side-img' />
                    </div>
                </div>
            ) : (<NotLogged />)}


        </div>
    );
}

export default About;