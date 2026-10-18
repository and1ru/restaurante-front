import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../apiClient";

interface Result {
  id: number,
  salary: number,
  hireDate: Date,
  name: string,
  role: string,
  branch: string
}

interface Response {
    message: string;
    success: boolean;
    result: Result
}

export const useGetEmployee = (employeeId:number) => {
  return useQuery({
    queryKey: ["employee"],

    queryFn: async () => {
      const result = await apiClient.get<Response>(`employee/${employeeId}`)

      return result.data
    },
  })
}