import { useMutation } from "@tanstack/react-query";
import { post } from "../useActions";
import { type loginType } from "../../schemas/login";

interface Response {
  message: string;
  success: boolean;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: (body: loginType) => post<loginType, Response>("login", body),
  });
};
