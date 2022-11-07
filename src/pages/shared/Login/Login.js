import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook,FaGoogle } from "react-icons/fa";
const Login = () => {
    return (
        <div className='min-h-[50vh]'>
            <div className=' w-96 border mx-auto h-96 mt-[5%] p-5'>
                <h2 className='text-center text-2xl font-bold mb-5'>Login</h2>
                <form className='flex flex-col'>
                    <input className='border p-3 my-5 rounded-lg' type="email" name="email" placeholder='Enter Your Email' id="" />
                    <input className='border p-3 rounded-lg' type="password" name="password" placeholder='Enter Your Password' id="" />
                    <button className='underline text-end mb-5 text-[#F86061]'>Forgotten password?</button>
                    <input className='border p-3 btn' type="submit" value="Login" />
                </form>
                <div className='flex justify-center mt-5 gap-5 text-3xl text-[#f75353]'>
                    <p className='cursor-pointer'><FaGoogle /></p>
                    <p className='cursor-pointer'><FaFacebook /></p>
                </div>
            </div>
        </div>
    );
};

export default Login;