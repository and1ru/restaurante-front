import { useMutation } from "@tanstack/react-query"
import { post } from "../useActions"
import type { createBranchType } from "../../schemas/createBranch"

export const useCreateBranch = () => {
    return useMutation({
        mutationFn: (body:createBranchType) => post("create-branch", body)
    })
}