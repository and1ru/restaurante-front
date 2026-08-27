import { createContext, useContext } from "react";

interface Auth{
    name:string;
    role:string
}
interface AuthContext {
    auth: Auth
    setAuth: React.Dispatch<React.SetStateAction<Auth>>
}

export const AuthContext = createContext<null | AuthContext>(null)

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("no context")
    }

    return context
}