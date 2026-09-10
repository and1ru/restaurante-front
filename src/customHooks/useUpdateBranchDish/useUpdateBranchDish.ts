import { useMutation } from "@tanstack/react-query"
import { patch } from "../useActions"

interface Body {
    id:number;
    price:number
}

export const useUpdateBranchDish = () => {
    return useMutation({
        mutationFn:(body:Body) => patch("update-branch-dish",body)
    })
}