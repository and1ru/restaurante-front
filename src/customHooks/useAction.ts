import type { AxiosResponse } from "axios";
import { useState } from "react"

interface UseAction<TResponse>{
    data: TResponse | null;
    loading: boolean,
    error: unknown
    action: () => Promise<void>
}

export const useAction = <TResponse>(fn:() => Promise<AxiosResponse<TResponse>>):UseAction<TResponse> => {
    const [data, setData] = useState<null| TResponse>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    const action = async () => {
        setLoading(true)
        setError(null)
        try {
            const request = await fn()
            setData(request.data)
        } catch (error) {
            setError(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return {data, loading, error, action}
}