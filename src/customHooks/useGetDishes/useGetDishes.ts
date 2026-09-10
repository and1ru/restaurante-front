import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

interface result {
    id: number;
    name: string;
    image_url: string;
    is_in_branch:boolean
    price:number
    branchDishId:number
}

interface Response {
    message:string;
    success:boolean
    result: result[]
}

export const useGetDishes = () => {
    return useQuery({
        queryKey:["dishes"],
        queryFn: () => get<Response>("dishes")
    })
}