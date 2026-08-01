import { EmployeeCard } from "../../components/EmployeeCard/EmployeeCard";

export const ManageEmployeePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Manage Employees
        </h1>

        <p className="mt-2 text-gray-500">
          Search, filter and manage your restaurant staff.
        </p>
      </div>

      {/* Filters */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <form className="grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search employee..."
            className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
          />

          <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
            <option>All branches</option>
          </select>

          <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
            <option>All roles</option>
            <option>Admin</option>
            <option>Waitress</option>
          </select>
        </form>
      </section>

      {/* Employees */}
      <section className="space-y-4">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </section>

      {/* Hiring Code */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Generate Hiring Code
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Select the role and branch for the new employee.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
            <option>Select role</option>
            <option>Admin</option>
            <option>Waitress</option>
          </select>

          <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
            <option>Select branch</option>
          </select>
        </div>

        <button
          className="mt-6 w-full rounded-xl bg-gray-900 py-3 font-medium text-white transition hover:bg-black"
        >
          Generate Code
        </button>
      </section>
    </div>
  );
};