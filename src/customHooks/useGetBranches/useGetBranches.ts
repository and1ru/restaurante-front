import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

interface result {
    id: number;
    name: string;
    city: string;
}

interface Response {
    message:string;
    success:boolean
    result: result[]
}

export const useGetBranches = () => {
    return useQuery({
        queryKey:[],
        queryFn: () => get<Response>("branches")
    })
}