import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"

interface Props {
    children:ReactNode
}

// se pone afuera para que no se vuelva a crear cada vez que se renderiza
const queryClient = new QueryClient()

export const QueryProvider = ({children}:Props) =>{
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}