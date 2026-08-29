import { useQuery } from "@tanstack/react-query"
import { get } from "../useActions"

export const useGetEmployees = () => {
    return useQuery({
        queryFn: () => get(""),
        queryKey: []
    })
}