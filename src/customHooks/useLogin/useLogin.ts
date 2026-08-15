import type { loginType } from "../../schemas/login"
import { apiClient } from "../apiClient"
import { useAction } from "../useAction"

export const useLogin = (body:loginType) => {
    const request = () => apiClient.post("login", body)
    const {data, error, loading, action} = useAction<loginType>(request)

    return {data, error, loading, login:action}
}