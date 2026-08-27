import type { createRestaurantType } from "../../schemas/createRestaurant";
import { apiClient } from "../apiClient";
import { useAction } from "../useActions";

export const useCreateRestaurant = (body: createRestaurantType) => {
  const request = () => apiClient.post("", body);
  const { data, error, loading, action } =
    useAction<createRestaurantType>(request);

  return { data, error, loading, login: action };
};
