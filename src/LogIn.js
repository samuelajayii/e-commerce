import sidepic from './img/Side Image.svg'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("User Logged in Successfully", {position : 'top-center'})
            window.location.href = '/home'
        } catch (error) {
            toast.error(error.message, {position : 'bottom-center'})
        }
    }

    return (
        <div className='flex my-24 gap-36'>
            <img src={sidepic} alt='' className='w-[705px] h-[681px] hidden lg:block' />

            <div className='flex flex-col self-center w-full mx-auto lg:w-fit lg:mx-0 '>

                <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-fit mx-auto'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Log in to Exclusive</h1>
                        <h1 className='mb-6 mt-4'>Enter your details below</h1>

                        <div className='flex flex-col gap-6'>
                            <input type='email' placeholder='Email' className='outline-none border-b border-[#202020] py-1.5 text-[#202020]' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type='password' placeholder='Password' className='outline-none border-b border-[#202020] py-1.5 text-[#202020]' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='mt-10 flex items-center gap-10 justify-between'>
                            <Button type='submit' variant='contained' disableElevation sx={{
                                backgroundColor: '#db4444',
                                ":hover": {
                                    backgroundColor: '#db4444'
                                }
                            }}>Log in</Button>
                            <Button>Forgot password?</Button>
                        </div>
                        <h1 className='mt-6 text-center'>Don't have an account? <NavLink to='/signup' className='border-b border-black text-center cursor-pointer'>Sign Up</NavLink></h1>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;