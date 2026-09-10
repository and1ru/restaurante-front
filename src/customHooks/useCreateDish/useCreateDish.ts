import { useMutation } from "@tanstack/react-query"
import { post } from "../useActions"

export const useCreateDish = () => {
    return useMutation({
        mutationFn:(body:FormData) => post("create-dish",body)
    })
}