import React, {useState} from 'react'
import {useAppDispatch} from "@/src/components/hook";
import {updateDashboard} from "@/src/store/reducers/products";
import {lightningcss} from "tailwindcss/src/oxide/cli/build/deps";

const Dashboard__props = ({props} : any) => {
    const [display, setDisplay] = useState(false);
    const [checkId, setCheckId] = useState<Array<number>>([]);
    const [queryName, setQueryName] = useState('');
    const dispatch = useAppDispatch()

    const onChangeInput = (index: number, value: any) => {
        setCheckId(prev => {
            const isChecked = checkId.includes(index)
            if(isChecked) {

                return checkId.filter( item => item !== index)
            }else  {
                setQueryName(!(queryName === '') ? queryName + ',' + value.query_value : value.query_value)
                return [...prev, index]
            }
        })
        const payload= {
            [props && props.query_name] : queryName
        }
        if (queryName !== '') {
            dispatch(updateDashboard(payload))
        }
    }
    return (
        <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
            <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">{props && props.display_name}</h4>
            <div>
                {props && props.values.map((value: any, index: number ) => (
                    <div key={index} className={`${(index > props.collapsed - 1 && !display) ? 'hidden' : ''} text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-center mr-[2px]`}>
                        <input className='mr-3' id={`checkbox${props.query_name}-${index}`} checked={checkId.includes(index)} type='checkbox' onChange={() => onChangeInput(index, value)} />
                        <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor={`checkbox${props.query_name}-${index}`} >
                            {value.display_value}
                        </label>
                    </div>
                ))}
            </div>
            <a className={`${!(props && props.values.length > props.collapsed) ? 'hidden' : ''} text-xs font-medium flex items-center text-[#0b74e5] cursor-pointer`} onClick={() => setDisplay(!display)}>
                {display ? 'Thu gọn': 'Xem thêm'}
                <svg
                    className={`text-[#0b74e5] ml-[5.5px] ${display ? 'rotate-180' : ''} `}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    color="#0B74E5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
            </a>



        </div>
    )
}

export default Dashboard__props
