import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'

const Cart = () => {
    return (
        <div className='relative '>
            <a className="block " href="">
                <div className='cart-btn ml-6 p-0 relative w-10 h-10 btn hover:bg-hoverActive'>
                    <FiShoppingCart className='w-6 max-w-full h-6 text-primary '/>
                    <span
                        className="bg-[#ff424f] text-white absolute right-0 -top-1 h-4 rounded-lg flex justify-center items-center text-center font-bold text-[10px] py-[0.5px] px-1">0</span>
                </div>
            </a>
        </div>
    )
}

export default Cart