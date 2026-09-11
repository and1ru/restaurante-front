import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

interface result {
    id: number;
    name: string;
    image_url: string;
}

interface Response {
    message:string;
    success:boolean
    result: result[]
}

export const useDishesOwner = () => {
    return useQuery({
        queryKey:["owner-dishes"],
        queryFn: () => get<Response>("dishes/owner")
    })
}