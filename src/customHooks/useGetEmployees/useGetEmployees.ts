import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../apiClient";
import type { filterEmployeeType } from "../../schemas/filterEmployee";

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

export const useGetEmployees = (filters: filterEmployeeType) => {
  return useQuery({
    queryKey: ["employees", filters],

    queryFn: async () => {
      const result = await apiClient.get<Response>("get-employees", {
        params: filters,
      })

      return result.data
    },
  })
}