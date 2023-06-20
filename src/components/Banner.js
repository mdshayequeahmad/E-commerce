import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/may/wk22/BX-GW-PC_Hero-Books_BAU_MAY-W4_2x._CB587876380_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
        "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/June23/MFD/unrec/Watches/1/Revised/Watches_3000._CB603112384_.jpg"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='w-100% h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div
                    style={{transform: `translateX(-${currentSlide * 100}vw)`}}
                    className='w-[400vw] h-full flex transition-transform duration-1000'
                >
                    <img
                        className='w-screen h-full object-cover'
                        src={data[0]}
                        alt="ImageOne"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[1]}
                        alt="ImageOne"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[2]}
                        alt="ImageOne"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[3]}
                        alt="ImageOne"
                        loading='priority'
                    />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-48'>
                    <div onClick={prevSlide} className='w-12 h-14 border-[1px] border-gray-700 flex items-center 
                         justify-center hover:cursor-pointer hover:bg-gray-700 
                       hover:text-white active:bg-gray-900 duration-300'>
                        <HiArrowLeft />
                    </div>
                    <div onClick={nextSlide} className='w-12 h-14 border-[1px] border-gray-700 flex items-center 
                         justify-center hover:cursor-pointer hover:bg-gray-700 
                       hover:text-white active:bg-gray-900 duration-300'>
                        <HiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;