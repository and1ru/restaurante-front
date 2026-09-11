import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

interface result {
    id: number;
    name: string;
    image_url: string;
    price:number;
    branchId:number
    inBranch:boolean
}

interface Response {
    message:string;
    success:boolean
    result: result[]
}

export const useAdminDishes = () => {
    return useQuery({
        queryKey:["admin-dishes"],
        queryFn: () => get<Response>("dishes/admin")
    })
}