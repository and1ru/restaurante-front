import { useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"

interface Props {
    children:ReactNode
}

interface Auth{
    name:string;
    role:string
}

export const AuthProvider = ({children}:Props) => {
    const [auth, setAuth] = useState<Auth>({name:"", role:""})
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}