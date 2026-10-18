import { EmployeeCard } from "../../components/EmployeeCard/EmployeeCard";
import { Header } from "../../components/Header/Header";
import { useGetEmployees } from "../../customHooks/useGetEmployees/useGetEmployees";
import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { useForm, type SubmitHandler } from "react-hook-form"
import { type filterEmployeeType } from "../../schemas/filterEmployee"
import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";
import { OptionBranches } from "../../components/OptionBranches/OptionBranches";
import { useState } from "react";

export const ManageEmployeePage = () => {
  const { auth: { role } } = useAuthContext()

  const [filters, setFilters] = useState<filterEmployeeType>({
    employeeBranchId: "",
    employeeName: "",
    employeeRole: "",
  })

  const { control, handleSubmit } = useForm<filterEmployeeType>({
    defaultValues: {
      employeeBranchId: "",
      employeeName: "",
      employeeRole: "",
    },
  })

  const handleForm: SubmitHandler<filterEmployeeType> = (body) => {
    console.log(body)
    setFilters(body)
  }

  const { data, isError, isLoading } = useGetEmployees(filters)
  console.log(data)

  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 p-6 md:p-10 max-w-7xl mx-auto w-full">
        <section>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Manage Employees
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Search, filter, and manage all employees across your branches.
          </p>
        </section>

        {/* Sección de filtros mejorada */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <form
            className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end"
            onSubmit={handleSubmit(handleForm)}
          >
            {/* Input de nombre (ocupa más espacio en desktop) */}
            <div className="md:col-span-5">
              <Input control={control} label="Employee Name" name="employeeName" type="text" />
            </div>

            {/* Select de sucursales (si es OWNER) */}
            {role === "OWNER" && (
              <div className="md:col-span-3">
                <Select control={control} name="employeeBranchId">
                  <option value="">All branches</option>
                  <OptionBranches />
                </Select>
              </div>
            )}

            {/* Select de roles */}
            <div className={role === "OWNER" ? "md:col-span-2" : "md:col-span-5"}>
              <Select control={control} name="employeeRole">
                <option value="">All roles</option>
                {role === "OWNER" && <option value="ADMIN">Admin</option>}
                <option value="WAITRESS">Waitress</option>
                <option value="RECEPTIONIST">Receptionist</option>
                <option value="CHEF">Chef</option>
              </Select>
            </div>

            {/* Botón de filtrar */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-[42px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-xl transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                Filter
              </button>
            </div>
          </form>
        </section>

        {/* Employees */}
        <section className="pb-10 flex flex-col gap-4">
          {isLoading ? <p className="bg-blue-300 text-center p-3 rounded-lg">loading...</p> : isError ? <p className="bg-red-300 text-center p-3 rounded-lg">¡ops! Something went wrong</p> : <>
            <div className="text-sm font-medium text-gray-500 mb-1">
              Results ({data?.result?.length || 0})
            </div>
            {data?.result.length === 0 ? <p className="bg-blue-300 text-center p-3 rounded-lg">Not found employees</p> :
              data?.result.map((employee) =>
                <EmployeeCard
                  id={employee.id}
                  key={employee.id}
                  branchName={employee.Branch.name}
                  name={employee.name}
                  role={employee.role}
                />
              )}
          </>}
        </section>
      </main>
    </>
  );
};