import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

interface result {
    id: number;
    name: string;
    image_url: string;
    price:number
}

interface Response {
    message:string;
    success:boolean
    result: result[]
}

export const useWaitressDishes = () => {
    return useQuery({
        queryKey:["waitress-dishes"],
        queryFn: () => get<Response>("dishes/waitress")
    })
}