import {Star, StarGray} from "@/src/svg/Star";

export const HandleRate = (num : any) => {
    const rates = []
    for(let i = 1; i < 6; i++) {

        rates.push(i <= num.num ? Star : StarGray)
    }
    return (
        <p className='flex'>
            {rates.map( (star:any, index) => (
                <span key={index}>{star}</span>
            ))}
        </p>
)
}

export const formatCash = (str: string) =>{
    str = str.toString()
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}



