import React from 'react'

const Dashboard__fabric
 = () => {
  return (
    <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
        <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">Chất liệu</h4>
        <div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Cotton
              </label>

          </div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Nỉ
              </label>

          </div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Polyester (PE)
              </label>

          </div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Kaki
              </label>

          </div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Lụa
              </label>
          </div>
        </div>
        <a className='text-xs font-medium flex items-center text-[#0b74e5] cursor-pointer' href="">
          Xem thêm
          <svg className="text-[#0b74e5] ml-[5.5px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#0B74E5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
          </a>



    </div>
  )
}

export default Dashboard__fabric
