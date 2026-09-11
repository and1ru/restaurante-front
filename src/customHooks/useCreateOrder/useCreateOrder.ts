import { useMutation } from "@tanstack/react-query"
import { post } from "../useActions"

export const useCreateOrder = () => {
    return useMutation({
        mutationFn: (body:any) => post("create-order", body)
    })
}