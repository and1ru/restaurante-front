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
    branch: "0",
    name: "",
    role: "",
  })

  const { control, handleSubmit } = useForm<filterEmployeeType>({
    defaultValues: {
      branch: "0",
      name: "",
      role: ""
    },
  })

  const handleForm: SubmitHandler<filterEmployeeType> = (body) => {
    console.log(body)
    setFilters(body)
  }

  const { data } = useGetEmployees(filters)
  console.log(data)

  return (
    <>
      <Header />
      <main className="flex flex-col gap-5">
        <section className="px-10 py-5">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Manage Employees
          </h2>
        </section>
        <section className="px-10 my-5">
          <form className="flex gap-10" onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="" name="name" type="text" />

            {role === "OWNER" &&
              <Select control={control} name="branch">
                <option value="">All branches</option>
                <OptionBranches />
              </Select>
            }

            <Select control={control} name="role">
              <option value="">All roles</option>
              {role === "OWNER" && <option value="ADMIN">Admin</option>}

              <option value="WAITRESS">Waitress</option>
              <option value="RECEPTIONIST">receptionist</option>
              <option value="CHEF">Chef</option>
            </Select>
            <button className="bg-blue-400 p-2 w-30 rounded-lg">filtrar</button>
          </form>
        </section>
        <section className="px-10 pb-10 flex flex-col gap-4">
          {data?.result.map((employee) =>
            <EmployeeCard
              key={employee.id}
              branchName={employee.Branch.name}
              name={employee.User.name}
              role={employee.User.role} />
          )}
        </section>
      </main>
    </>
  );
};