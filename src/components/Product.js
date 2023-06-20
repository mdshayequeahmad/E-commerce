import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/ecommerceSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
    const dispatch = useDispatch();

    const [details, setDetails] = useState({});
    let [baseQty, setBaseQty] = useState(1);

    const location = useLocation();
    useEffect(() => {
        setDetails(location.state.item);
    }, []);

    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-10 xl:flex xl:gap-10'>
                <div className='xl:w-2/5 w-full xl:relative'>
                    <img
                        className="w-[350px] h-[450px] object-center sm:w-[400px] sm:h-[500px] xl:w-full xl:h-[550px] xl:object-cover"
                        src={details.image}
                        alt="ProductImg"
                    />
                    <div className='absolute top-4 right-0'>
                        {details.isNew && (
                            <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>
                                Sale
                            </p>
                        )}
                    </div>
                </div>
                <div className='w-3/5 flex flex-col justify-center gap-12'>
                    <div>
                        <h1 className=' text-4xl font-semibold'>{details.title}</h1>
                        <div className=' flex items-center gap-3 mt-3'>
                            <p className=' line-through font-base text-gray-500'>${details.oldPrice}</p>
                            <p className=' text-2xl font-medium text-gray-900'>${details.price}</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-2 text-base'>
                        <div className=' flex'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className=' text-xs text-gray-500'>(1 Customer review)</p>
                    </div>
                    <p className=' text-base text-gray-500 mt-3'>{details.description}</p>
                    <div className='flex flex-col sm:flex sm:gap-4'>
                        <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                            <p className=' text-sm'>Quantity</p>
                            <div className=' flex items-center gap-4 text-sm font-bold'>
                                <button onClick={() => setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)} className=' border h-5 font-normal text-lg flex items-center 
                                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer 
                                        duration-300 active:bg-black'
                                >
                                    -
                                </button>
                                <span>{baseQty}</span>
                                <button onClick={() => setBaseQty(baseQty + 1)} className=' border h-5 font-normal text-lg flex items-center 
                                        justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer 
                                        duration-300 active:bg-black'
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => dispatch(addToCart({
                                    _id: details._id,
                                    title: details.title,
                                    image: details.image,
                                    price: details.price,
                                    quantity: baseQty,
                                    description: details.description
                                })
                                ) & toast.success(`${details.title} is added.`)
                                }
                                className=' bg-black text-white py-3 px-14 mt-3 lg:bg-black lg:text-white lg:py-3 lg:px-14'>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                    <p className=' text-base text-gray-500'>
                        Catagory: <span className=' font-medium capitalize'>{details.category}</span>
                    </p>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Product;