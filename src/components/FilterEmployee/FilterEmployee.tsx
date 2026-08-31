import { useSearchParams } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { OptionBranches } from "../OptionBranches/OptionBranches"
import { useEffect, useState } from "react"

export const FilterEmployee = () => {
    const { auth: {role}} = useAuthContext()
    const [a, setA] = useState({role:"", branch:""})
    const [_params, setParams] = useSearchParams()

    const handleRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value

        setA({
            ...a,
            role:newValue
        })
    }

    const handleBranch = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value
        setA({
            ...a,
            branch:newValue
        })
    }

    useEffect(()=> {
        setParams({"role":a.role, "branch":a.branch})
    },[a])

    return (
        <section className="px-10">
            <form className="grid gap-4 md:grid-cols-3">
                <input
                    type="text"
                    placeholder="Search employee..."
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
                />

                { role === "OWNER" && 
                                <select 
                    onChange={handleBranch}
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
                        <option value="">All branches</option>
                    <OptionBranches />
                </select>
                }

                
                <select 
                    onChange={handleRole}
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
                    <option value="">All roles</option>
                    { role === "OWNER" && <option value="ADMIN">Admin</option> }
                    
                    <option value="WAITRESS">Waitress</option>
                    <option value="RECEPTIONIST">receptionist</option>
                    <option value="CHEF">Chef</option>
                </select>
            </form>
        </section>

    )
}