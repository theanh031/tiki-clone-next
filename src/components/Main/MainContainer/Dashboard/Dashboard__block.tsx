import {useAppDispatch} from "@/src/components/hook";
import {updateDashboard} from "@/src/store/reducers/products";

const Dashboard__block = ({category} : any ) => {
    const dispatch = useAppDispatch()
    const handleDashboardClick = (item: any) => {
        const payload = {
            category: item.query_value,
            urlKey: item.url_key,
        }
        dispatch(updateDashboard(payload))
    }

    const dashboardItemStyle = 'text-[12px] font-normal text-[rgb(56, 56, 61)] pb-3 leading-4 flex items-center cursor-pointer';
    return (
        <div className=' overflow-hidden pb-3'>
            <h4 className='leading-5 text-[rgb(56, 56, 61)] block py-3 font-medium'>{category && category.display_name}</h4>
            <div>
                {category && category.values.map((item: any) => (
                    <a
                        key={item.url_key}
                        className={dashboardItemStyle}
                        onClick={() => {
                            handleDashboardClick(item)
                        }}>{item.display_value}</a>
                ))}
            </div>
        </div>
    )
}

export default Dashboard__block