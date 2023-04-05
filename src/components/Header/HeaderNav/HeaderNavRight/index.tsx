import React, { useState } from 'react'
import Cart from './Cart';
import {RiHome5Line,RiHome5Fill} from 'react-icons/ri'
import {AiOutlineCrown, AiFillCrown} from 'react-icons/ai'
import {BsEmojiWink, BsEmojiWinkFill} from 'react-icons/bs'

const iconStyle = 'w-6 h-6 mr-1 rounded-[50%] max-w-full overflow-clip'


const items = [
  {id: 0, label: 'Trang chủ', icons: [<RiHome5Line key={0} className={iconStyle} />, <RiHome5Fill key={1} className={iconStyle}/>]},
  {id: 1, label: 'Astra',icons: [<AiOutlineCrown key={0} className={iconStyle} />, <AiFillCrown key={1} className={iconStyle}/>]},
  {id: 2, label: 'Tài khoản',icons: [<BsEmojiWink key={0} className={iconStyle} />, <BsEmojiWinkFill key={1} className={iconStyle}/>]},
]
const Index = () => {
  const [navid, setNavid] = useState(0)
  const handleIconChange = (newId:number) => {
    setNavid(newId);
  }
 
  return (
  
    <div className='flex ml-12 items-center justify-end' >
        <div className='flex items-center justify-center  text-grayText'>
          {items.map(item => (
            <div key={item.id} onClick={() => handleIconChange(item.id)} className={`flex items-center justify-center py-2 px-4 cursor-pointer relative rounded-lg  ${item.id === navid ? ' hover:bg-hoverActive text-primary' : 'hover:bg-[#dcdce1]'}`}>
              {item.id === navid ? item.icons[1] : item.icons[0] }
              <a className='font-medium leading-[150%] '>{item.label}</a>
            </div>
          ))}
        </div>
        <Cart />
    </div>
  
      
  )
}

export default Index