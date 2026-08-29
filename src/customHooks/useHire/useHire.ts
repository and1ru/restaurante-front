import { useMutation } from "@tanstack/react-query"
import { post } from "../useActions"
import type { hireType } from "../../schemas/hire"

export const useHire = () => {
    return useMutation({
        mutationFn: (body:hireType) => post("hire", body)
    })
}