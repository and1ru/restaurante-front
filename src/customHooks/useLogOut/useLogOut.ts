import { useMutation } from "@tanstack/react-query"
import { post } from "../useActions"

export const useLogOut = () => {
    return useMutation({
        mutationFn:() => post("logOut")
    })
}