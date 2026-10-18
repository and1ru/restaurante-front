import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../apiClient";
import type { filterEmployeeType } from "../../schemas/filterEmployee";

interface Result {
    id: number,
    name: string,
    role: string,
    Branch: { name: string, id:number }
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
      const result = await apiClient.get<Response>("employees", { params:filters })

      return result.data
    },
  })
}