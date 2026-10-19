import { useMutation } from "@tanstack/react-query";
import { deleteR } from "../useActions";

interface Response {
  message: string;
  success: boolean;
}

export const useFire = (employeeId:number) => {
  return useMutation({
    mutationFn: () => deleteR<Response>(`fire/${employeeId}`),
  });
};