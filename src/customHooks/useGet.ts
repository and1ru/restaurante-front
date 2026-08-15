import { useEffect, useState } from "react"
import { apiClient } from "./apiClient"

interface UseGet<T>{
    data: T | null;
    loading: boolean,
    error: unknown
}

export const useGet = <T>(url:string):UseGet<T> => {
    const [data, setData] = useState<null| T>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(null)

    const get = async () => {
        setLoading(true)
        try {
            const request = await apiClient.get(url)
            setData(request.data)
        } catch (error) {
            setError(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        get()
    },[])

    return {data, loading, error}
}