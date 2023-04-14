import {useAppDispatch, useAppSelector} from "@/src/components/hook";
import {RootState} from "@/src/store";
import {GrNext} from "react-icons/gr";
import Image from "next/image";
import tikiNow from "@/public/img/tikiNow.png"
import tikiAstra from "@/public/img/tikiAstra.png"
import {MdCancel} from "react-icons/md";
import {clearParam, deleteParam, updateParams} from "@/src/store/reducers/products";

const Index = () => {
    const paramUrl = useAppSelector( (state : RootState) => state.productReducer.paramUrl)
    const paging = useAppSelector( (state: RootState) => state.productReducer.productList).paging;
    const dispatch = useAppDispatch()
    const sortOptions = useAppSelector((state: RootState) => state.productReducer.productList).sort_options
    const filterList = useAppSelector((state: RootState) => state.productReducer.filterList)
    const handleRemoveClick = (filter: any) => {
        dispatch(deleteParam(filter))
    }
    console.log(Object.keys(paramUrl))
    const handleClearClick = () => {
        dispatch(clearParam({}))
    }
    const handleSortChange = (sort: any) => {
        const payload = {
            sort: sort.query_value
        }
        dispatch(updateParams(payload))
    }
    const nextPage = () => {
        let payload = {}
        if (paging?.current_page < paging?.last_page)
            payload = {
            page: paging?.current_page + 1
        }
        dispatch(updateParams(payload))
    }
    const prevPage = () => {
        let payload = {}
        if(paging?.current_page > 1) {
            payload = {
                page: paging?.current_page - 1
            }
            dispatch(updateParams(payload))
        }
    }


    return (
        <div className='bg-white'>
            <div className='pt-3 pl-4'>
                <h1 className='inline font-normal text-[#38383d] text-xl '>Thời trang nam</h1>
            </div>
            <div className=' clear-both'>
                <div>
                    <div className='flex justify-between border-b border-solid border-[#f2f2f2] pt-3'>
                        <div className='mr-[10px] inline-block list-none'>
                            <ul className='flex'>
                                {sortOptions && sortOptions.map( (sort: any, index: any) => (
                                    <li key={index} className={`capitalize inline-block  relative cursor-pointer text-sm px-4 py-3  hover:after:block hover:font-medium hover:text-primary after:content-[""]  after:absolute after:border-solid after:border-b-[4px] after:border-primary after:rounded-[2px] after:w-[40px] after:left-[50%] after:translate-x-[-50%] ${sort.selected ? 'text-primary font-medium relative after:block' : 'font-normal after:hidden '}`}>
                                        <a onClick={() => handleSortChange(sort)}>{sort.display_value}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex h-[36px] mt-1 mr-4 mb-2'>
                            <div className='flex items-center gap-[5px]'>
                                <span className='text-primary'>{paging?.current_page}</span>
                                <span>/</span>
                                <span>{paging?.last_page}</span>
                            </div>
                            <div className='flex gap-0 ml-3 items-center'>
                                <a
                                    className={`w-[36px] h-[36px] flex items-center justify-center ${paging?.current_page === 1 ? 'cursor-not-allowed pointer-events-none opacity-40' : 'cursor-pointer'}`}
                                    onClick={() => prevPage()}>
                                    <GrNext className='rotate-180  max-w-full' />
                                </a>
                                <a
                                    className={`w-[36px] h-[36px] flex items-center justify-center cursor-pointer ${paging?.current_page === paging?.last_page ? 'cursor-not-allowed pointer-events-none opacity-40' : 'cursor-pointer'}`}
                                    onClick={() => nextPage()}>
                                    <GrNext />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='flex py-3 pr-4 pl-[15px]'>
                        <div className= 'flex'>
                            <p className={` ${Object.keys(paramUrl).includes('support_p2h_delivery')? 'bg-[#dbeeff] border-primary border border-solid' : 'bg-[#eeeeee]'} cursor-pointer border-transparent text-primary w-[78px] flex justify-center items-center mr-[10px] px-3 py-[10px] relative rounded-[100px] h-[32px]`} >
                                <Image src={tikiNow} width={'0'} height={'0'} sizes='100wh' alt='Giao siêu tốc 2H' className='max-h-[12px] max-w-full w-auto'/>
                            </p>
                            <p className={` ${Object.keys(paramUrl).includes('seller_asa_cashback')? 'bg-[#dbeeff] border-primary border border-solid' : 'bg-[#eeeeee]'} cursor-pointer border-transparent text-primary w-[78px] flex justify-center items-center mr-[10px] px-3 py-[10px] relative rounded-[100px] h-[32px]`} >
                                <Image src={tikiAstra} width={'0'} height={'0'} sizes='100wh' alt='Giao siêu tốc 2H' className='max-h-[12px] max-w-full w-auto'/>
                            </p>
                        </div>
                        {filterList && filterList.map( (filter:any, index : any) => (
                            <p
                                key={index}
                                className='bg-[#f0f8ff] text-[#0b74e5] border-solid border mr-[10px] border-[#1a94ff] text-[13px] px-[10px] py-3 rounded-[100px] flex items-center  mr-{10px] h-[32px] relative font-normal cursor-pointer'>
                                <a>{filter.displayName}</a>
                                <a className='flex' onClick={() => handleRemoveClick(filter)}>
                                    <MdCancel className='ml-[11px] text-[20px]' />
                                </a>
                            </p>
                        ))}
                        <p className=' text-[#0b74e5]  mr-[10px] font-extrabold text-[13px] px-[10px] py-3 rounded-[100px] flex items-center  mr-{10px] h-[32px] relative font-normal cursor-pointer' >
                            <a onClick={() => handleClearClick()}>Xóa tất cả</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index