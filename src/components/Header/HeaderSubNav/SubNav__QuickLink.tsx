import React from 'react'

const styleQuicklink = 'block font-normal mr-3 whitespace-nowrap'
const quicklinks = [
    {label: 'trái cây'},
    {label: 'thịt, trứng'},
    {label: 'rau củ quả'},
    {label: 'sữa, bơ, phô mai'},
    {label: 'hải sản'},
    {label: 'gạo, mì ăn liền'},
    {label: 'đồ uống, rượu bia'},
    {label: 'bánh kẹo'},
]


const SubNav__QuickLink = () => {
  return (
    <div className='ml-[105px] text-grayText flex items-start h-6 mt-2 flex-wrap overflow-hidden'>
      {quicklinks.map((link, index) => <a className={`${styleQuicklink}`} key={index}>{link.label} </a> )}
    </div>
  )
}

export default SubNav__QuickLink