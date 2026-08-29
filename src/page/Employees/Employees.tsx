import { EmployeeCard } from "../../components/EmployeeCard/EmployeeCard";
import { FilterEmployee } from "../../components/FilterEmployee/FilterEmployee";
import { Header } from "../../components/Header/Header";

export const ManageEmployeePage = () => {
  return (
    <>
    <Header />
    <main className="flex flex-col gap-5">
      <section className="px-10 py-5">
        <h1 className="text-3xl font-bold text-gray-900">
          Manage Employees
        </h1>
        <p className="mt-2 text-gray-500">
          Search, filter and manage your restaurant staff.
        </p>
      </section>
      <FilterEmployee />
      <section className="px-10 pb-10 flex flex-col gap-4">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </section>
    </main>

    </>
  );
};