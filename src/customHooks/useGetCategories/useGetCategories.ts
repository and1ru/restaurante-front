import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

export const useGetCategories = () => {
    return useQuery({
        queryFn: () => get(""),
        queryKey:[]
    })
}