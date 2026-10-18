import { useNavigate } from "react-router-dom";

interface Props{
  id: number;
  name:string;
  role:string;
  branchName:string;
}

export const EmployeeCard = ({id, name, role, branchName}:Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/private/employee/${id}`, { replace:true })
  }

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {role} • {branchName}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
          onClick={ handleClick }
            className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-2.5 font-medium text-blue-600 transition hover:bg-blue-100"
          >
            Edit Employee
          </button>
        </div>
      </div>
    </article>
  );
};