import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../apiClient";
import { useSearchParams } from "react-router-dom";

interface User {
    name:string
    role:string
}

interface Branch {
    name: string;
};

interface Result {
    id: number,
    userId: number,
    branchId: number,
    User: User
    Branch: Branch
}

interface Response {
    message: string;
    success: boolean;
    result: Result[]
}

export const useGetEmployees = () => {
    const [searchParams] = useSearchParams()
    const role = searchParams.get("role")
    const branch = searchParams.get("branch")

    return useQuery({
        queryFn: async () => {
            const response = await apiClient.get<Response>("get-employees", {
                params: {
                    role,
                    branch
                }
            })

            return response.data

        },
        queryKey: [role, branch]
    })
}