import React from 'react'

const Dashboard__design
 = () => {
  return (
    <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
        <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">Kiểu dáng</h4>
        <div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Regular fit
              </label>

          </div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Slim fit
              </label>

          </div>

          <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]">
            <input className='mr-3' id='now__checkbox' type='checkbox' />
            <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
              Ngoại cỡ
              </label>

          </div>
        </div>



    </div>
  )
}

export default Dashboard__design
