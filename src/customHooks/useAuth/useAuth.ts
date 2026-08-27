import { useQuery } from "@tanstack/react-query"
import { get } from '../useActions'

interface Result{
    name:string;
    role:string
}

interface Response {
    message:string;
    success:boolean
    result:Result
}

export const useAuth = () => {
    return useQuery({
        queryKey: ["auth"],
        queryFn:() => get<Response>("auth")
    })
}