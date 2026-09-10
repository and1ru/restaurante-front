import { useMutation } from "@tanstack/react-query"
import { post } from "../useActions"

interface Body {
    id:number;
    price:number
}

export const useCreateBranchDish = () => {
    return useMutation({
        mutationFn:(body:Body) => post("create-branch-dish",body)
    })
}