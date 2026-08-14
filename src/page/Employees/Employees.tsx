import { EmployeeCard } from "../../components/EmployeeCard/EmployeeCard";
import { FilterEmployee } from "../../components/FilterEmployee/FilterEmployee";
import { HireCode } from "../../components/HireCode/HireCode";
import { HireForm } from "../../components/HireForm/HireForm";

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

      <FilterEmployee />

      <section className="space-y-4">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </section>

      <HireForm/>
      <HireCode />
    </div>
  );
};