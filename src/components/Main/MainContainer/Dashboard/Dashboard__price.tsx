import React from 'react'

const Dashboard__price = () => {
  return (
    <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
        <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">Giá</h4>
        <div>
          <div className='cursor-pointer'>
            <span className='bg-my__gray text-xs py-1 px-3 inline-block relative text-[rgb(56, 56, 61)] rounded-xl mb-1'>Dưới 80.000đ</span>
          </div>

          <div className='cursor-pointer'>
            <span className='bg-my__gray text-xs py-1 px-3 inline-block relative text-[rgb(56, 56, 61)] rounded-xl mb-1'>80.000đ -&#62; 180.000đ</span>
          </div>

          <div className='cursor-pointer'>
            <span className='bg-my__gray text-xs py-1 px-3 inline-block relative text-[rgb(56, 56, 61)] rounded-xl mb-1'>180.000đ -&#62; 440.000đ</span>
          </div>

          <div className='cursor-pointer'>
            <span className='bg-my__gray text-xs py-1 px-3 inline-block relative text-[rgb(56, 56, 61)] rounded-xl mb-1'>Trên 440.000đ</span>
          </div>
        </div>

        <div className='text-my__gray1 text-xs mt-1 pb-2'>
          Chọn khoảng giá
        </div>

        <div className='flex items-center'>
          <input className='flex-1 w-[77px] h-[30px] px-2 bg-white rounded text-left border border-solid border-[#b8b8b8] outline-none text-[13px]' pattern='[0-9]*' placeholder='Giá từ' value="0" />
          <span className='w-[7px] h-[1px] text-[0] inline-block bg-[#9a9a9a] mx-1 align-middle'> - </span>
          <input className='flex-1 w-[77px] h-[30px] px-2 bg-white rounded text-left border border-solid border-[#b8b8b8] outline-none text-[13px]' pattern='[0-9]*' placeholder='Giá đến' value="0" />
        </div>
        <button className='bg-white border border-solid border-[#0b74e5] text-xs text-[#0b74e5] py-[5px] px-[15px] w-full mt-2 rounded' >Áp dụng</button>
      

    </div>
  )
}

export default Dashboard__price