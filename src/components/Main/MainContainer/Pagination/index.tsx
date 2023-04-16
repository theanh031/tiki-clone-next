import {useAppDispatch, useAppSelector} from "@/src/components/hook";
import {RootState} from "@/src/store";
import ShortPage from "@/src/components/Main/MainContainer/Pagination/ShortPage";
import LongPage from "@/src/components/Main/MainContainer/Pagination/LongPage";
import {GrNext} from "react-icons/gr";
import {updateParams} from "@/src/store/reducers/products";

const Index = () => {
    const page = useAppSelector( (state : RootState) => state.productReducer.productList).paging
    const dispatch = useAppDispatch()
    const handleClick = (action: string) => {
        let payload = {}
        if(action === 'prev' && page.current_page > 1 ) {
            payload = {
                page: page?.current_page - 1
            }
        }
        if(action === 'next' && page.current_page < 50) {
            payload = {
                page: page?.current_page + 1
            }
        }
        dispatch(updateParams(payload))

    }
    return (
        <div className='text-center'>
            <ul className='mt-[77px] mb-[16px] flex gap-[16px] justify-center items-center'>
                <li>
                    <a
                        className={`${page?.current_page === 1 ? 'opacity-40': 'cursor-pointer'} items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center`}
                        onClick={() => handleClick('prev')}>
                        <GrNext className='rotate-180  max-w-full' />
                    </a>
                </li>
                {page?.current_page < 5 || page?.current_page > 45 ? <ShortPage/> : <LongPage />}
                <li>
                    <a
                        className={`${page?.current_page === 50 ? 'opacity-40': 'cursor-pointer'} items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center`}
                        onClick={() => handleClick('next')}>
                        <GrNext className=' max-w-full' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Index;
