import { useMutation } from "@tanstack/react-query";
import type { createRestaurantType } from "../../schemas/createRestaurant";
import { post } from "../useActions";

interface Response{
  message:string;
  success:boolean
}

export const useCreateRestaurant = () => {
  return useMutation({
    mutationFn:(body: createRestaurantType) => post<createRestaurantType, Response>("create-restaurant", body)
  })
};
