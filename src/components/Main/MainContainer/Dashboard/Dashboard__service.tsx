import React from 'react'

const Dashboard__service = () => {
  return (
    <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
        <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">Dịch vụ</h4>
        <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-start mr-[2px]">
          <input className='mr-3' id='now__checkbox' type='checkbox' />
          <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
            <span>
              <img className= "h-[10px] w-auto" src="../../../../../public/now__icon.png" alt="" />
            </span>
            <span>

            Giao Siêu Tốc 2H
            </span>
            </label>

        </div>
        <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-start mr-[2px]">
          <input className='mr-3' id='now__checkbox' type='checkbox' />
          <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
            <span>
              <img className= "h-[10px] w-auto" src="../../../../../public/astra__icon.png" alt="" />
            </span>
            <span>

            Thưởng thêm Astra
            </span>
            </label>

        </div>

    </div>
  )
}

export default Dashboard__service