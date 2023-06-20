import React, { useEffect, useState } from 'react';
import CartItem from "../components/CartItem";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.ecommerce.productData);
  const userInfo = useSelector((state) => state.ecommerce.userInfo);

  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData])

  const handleCkeckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout")
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    })
  };

  return (
    <div>
      <img
        className='w-full h-60 object-cover'
        src="https://as1.ftcdn.net/v2/jpg/03/14/28/96/1000_F_314289672_yEQMeEM4k2Z80wAeJmr0BQM01ajOPhVD.jpg"
        alt=""
      />
      <div className='max-w-screen-xl mx-auto py-20 xl:flex'>
        <CartItem />
        <div className='bg-[#fafafa] md:w-1/3 md:bg-[#fafafa] md:py-6 md:px-4'>
          <div className=' flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className=' text-2xl font-medium'>Cart Totals</h2>
            <p className=' flex items-center gap-4 text-base'>
              Subtotal
              <span className=' font-titleFont font-bold text-lg'>$ {totalAmt}</span>
            </p>
            <p className=' flex items-center gap-4 text-base'>
              Shipping
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error laudantium debitis placeat.</span>
            </p>
          </div>
          <p className=' font-titleFont font-semibold flex justify-between mt-6'>
            Total
            <span className=' text-xl font-bold'>$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCkeckout}
            className='text-base bg-black text-white w-full py-3 mt-6 hover: bg-gray-800 duration-300'>
            Proceed to Checkout
          </button>
          {
            payNow && (
              <div className='w-full mt-6 flex items-center justify-center'>
                <StripeCheckout
                  stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY}
                  name="Ecommerce App"
                  amount={totalAmt * 100}
                  label='Pay Now'
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )
          }
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
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

export default Cart;