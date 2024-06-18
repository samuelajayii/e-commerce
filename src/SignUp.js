
import sidepic from './img/Side Image.svg'
import { useState } from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from './firebase'
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
    
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db, "Users", user.uid),{
                    email: user.email,
                    name: name
                })
            }
            console.log("User is registered successfully");
            toast.success("User is registered successfully", {position : 'top-center'})
            window.location.href = '/home'
        } catch (error) {
            toast.error(error.message, {position : 'bottom-center'})
        }
    
    }

    return (
        <div className='flex my-24 gap-36'>
            <img src={sidepic} alt='' className='w-[705px] h-[681px] hidden lg:block' />

            <div className='flex flex-col self-center w-full mx-auto lg:w-fit lg:mx-0'>

                <form onSubmit={handleRegister} className='flex flex-col gap-6 w-fit mx-auto'>
                    <h1 className='text-3xl font-semibold mb-4'>Create an account</h1>
                    <h1>Enter your details below</h1>

                    <input type='text' placeholder='Name' className='outline-none border-b border-[#202020] py-1.5 text-[#202020]' onChange={(e) => setName(e.target.value)} required/>

                    <input type='email' placeholder='Email' className='outline-none border-b border-[#202020] py-1.5 text-[#202020]' onChange={(e) => setEmail(e.target.value)}/>

                    <input type='password' placeholder='Password' className='outline-none border-b border-[#202020] py-1.5 text-[#202020]' onChange={(e) => setPassword(e.target.value)}/>
                    <Button type='submit' disableElevation variant='contained' sx={{
                        backgroundColor: '#DB4444',
                        textTransform: 'none',
                        boxShadow: 'none',
                        ":hover": {
                            backgroundColor: '#DB4444'
                        }
                    }}>Create Account</Button>
                    <Button variant='outlined' disableElevation sx={{
                        borderColor: 'black',
                        color: 'black',
                        textTransform: 'none',
                        fontFeatureSettings: 'normal',
                        ":hover": {
                            backgroundColor: 'none'
                        }
                    }}>Sign Up With Google</Button>

                    <h1 className='mt-6 text-center'>Already have an account? <NavLink to='/login' className='border-b border-black text-center cursor-pointer'>Log In</NavLink></h1>
                </form>
            </div>
        </div>
    );
}

export default SignUp;