import React from 'react'
import { useState } from 'react'
import logo from './images/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    const [Nav, setNav] = useState(false);

    const handelNav = () => {
        setNav(!Nav);
    };

    return (
        <div>
            <div className='flex justify-between items-center pl-5 pr-5 pt-10'>
                <div className='flex items-center'>
                    <div className='pr-10'><a href='/'><img src={logo} alt='/'></img></a></div>
                    <div className='hidden md:block'>
                        <ul className='flex items-centers'>
                            <li className='pr-10 text-lg capitalize font-bold text-gray-500 hover:text-black'><a href='/'>features</a></li>
                            <li className='pr-10 text-lg capitalize font-bold text-gray-500 hover:text-black'><a href='/'>pricing</a></li>
                            <li className='pr-10 text-lg capitalize font-bold text-gray-500 hover:text-black'><a href='/'>resources</a></li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex justify-center items-center'>
                    <div className='pr-10 text-lg capitalize font-bold text-gray-500 hover:text-black'><a href='/'>login</a></div>
                    <div className='mr-10 text-lg capitalize font-bold bg-teal-400 text-white flex items-center justify-center border-transparent rounded-3xl pt-2 pb-2 pl-7 pr-7 hover:opacity-50'><a href='/'>sign up</a></div>
                </div>
                <div className='md:hidden' onClick={handelNav}>
                    {Nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>
            <div className={`ml-5 md:hidden mt-5 mr-5 bg-violet-900 justify-center text-center border-transparent rounded-xl ${Nav ? 'flex' : 'hidden'}`}>
                <ul className='text-white capitalize font-bold w-[90%]'>
                    <li className='pt-5 pb-5'><a href='/'>features</a></li>
                    <li className='pb-5'><a href='/'>pricing</a></li>
                    <li className='pb-5'><a href='/'>resources</a></li>
                    <hr className='w-full border border-gray-500'></hr>
                    <li className='pt-5 pb-5'><a href='/'>login</a></li>
                    <li className='w-full mb-5 pt-3 pb-3 flex items-center border-transparent rounded-2xl bg-teal-400'><a className='w-full' href='/'>sign up</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar