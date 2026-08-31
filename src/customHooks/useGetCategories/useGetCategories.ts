import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

interface Result {
    name: string;
    id: number;
}

interface Response {
    message:string;
    success:boolean;
    result:Result[]
}

export const useGetCategories = () => {
    return useQuery({
        queryFn: () => get<Response>("categories"),
        queryKey:[]
    })
}