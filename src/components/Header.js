import React, { useState } from 'react';
import { logo, cartIcon, userLogo } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const productData = useSelector((state) => state.ecommerce.productData);
    const userInfo = useSelector((state) => state.ecommerce.userInfo);

    const [toggle, setToggle] = useState(false);

    return (

        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <Link to="/">
                    <div className='h-35 w-40'>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div>
                    {
                        toggle ?
                            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl mr-5 lg:hidden block' />
                            :
                            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl mr-5 lg:hidden block' />
                    }
                    <div className='hidden lg:flex lg:justify-between lg:gap-8'>
                        <ul className='flex items-center gap-8'>
                            <Link to="/">
                                <li className='text-base text-black font-bold hover:text-orange-900 
                                    hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                                    Home
                                </li>
                            </Link>
                            <li className='text-base text-black font-bold hover:text-orange-900 
                              hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                                Pages
                            </li>
                            <li className='text-base text-black font-bold hover:text-orange-900 
                              hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                                Shop
                            </li>
                            <li className='text-base text-black font-bold hover:text-orange-900 
                              hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                                Blog
                            </li>
                            <li className='text-base text-black font-bold hover:text-orange-900 
                              hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>
                                About Us
                            </li>
                        </ul>
                        <div className='flex justify-between gap-8'>
                            <Link to="/cart">
                                <div className='relative'>
                                    <img className='w-6' src={cartIcon} alt="cartImage" />
                                    <span className='absolute w-6 top-2 left-0 text-sm flex items-center 
                                    justify-center font-semibold font-titleFont'>
                                        {productData.length}
                                    </span>
                                </div>
                            </Link>
                            <Link to="/login">
                                <img className='w-6 h-6 rounded-full' src={userInfo ? userInfo.image : userLogo} alt="user" />
                            </Link>
                            {userInfo && (
                                <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
                                    {userInfo.name}
                                </p>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive  Menu */}
            <div className={`lg:hidden duration-300 px-3 w-full h-screen  mt-5 top-[56px] bg-blue-100 fixed ${toggle ? 'left-[0%]' : 'left-[-100%]'}`}>
                <ul className='gap-8'>
                    <Link to="/">
                        <li className='text-base text-black font-bold hover:text-orange-900 
                            hover:underline underline-offset-2 mb-3 decoration-[1px] cursor-pointer'>
                            Home
                        </li>
                    </Link>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                  hover:underline underline-offset-2 mb-3 decoration-[1px] cursor-pointer'>
                        Pages
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                  hover:underline underline-offset-2 mb-3 decoration-[1px] cursor-pointer'>
                        Shop
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                  hover:underline underline-offset-2 mb-3 decoration-[1px] cursor-pointer'>
                        Blog
                    </li>
                    <li className='text-base text-black font-bold hover:text-orange-900 
                  hover:underline underline-offset-2 mb-3 decoration-[1px] cursor-pointer'>
                        About Us
                    </li>
                </ul>
                <div className=''>
                    <Link to="/cart">
                        <div className='relative'>
                            <img className='w-6' src={cartIcon} alt="cartImage" />
                            <span className='absolute w-6 top-2 left-0 text-sm flex items-center 
                        justify-center font-semibold font-titleFont'>
                                {productData.length}
                            </span>
                        </div>
                    </Link>
                    <Link to="/login">
                        <img className='w-6 h-6 mt-3 mb-3 rounded-full' src={userInfo ? userInfo.image : userLogo} alt="user" />
                    </Link>
                    {userInfo && (
                        <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
                            {userInfo.name}
                        </p>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;