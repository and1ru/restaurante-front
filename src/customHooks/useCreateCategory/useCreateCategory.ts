import { useMutation } from "@tanstack/react-query"
import { post } from "../useActions"
import type { categoryType } from "../../schemas/category"

export const useCreateCategory = () => {
    return useMutation({
        mutationFn:(body:categoryType) => post("",body)
    })
}