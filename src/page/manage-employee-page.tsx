// ver todos los empleados
// buscar usuarios por nombre
// filtrar por sede
// filtrar por rol
// cambiar de rol
// despedir
// generar link de contratacion
//

import { EmployeeCardComponent } from "../components/employee-card-component";
import { SectionComponent } from "../components/section-component";

export const ManageEmployeePage = () => {
  return (
    <>
        <SectionComponent>
          <form className="mb-6">
            <input type="text" className="border focus:outline-none p-2 rounded-lg w-full" placeholder="name employee"/>
          </form>
          <select name="" id="" className="w-full border p-2 rounded-lg mb-6">
            <option value="">filtrar por sede</option>
          </select>
          <select name="" id="" className="w-full border p-2 rounded-lg">
            <option value="">filtrar por rol</option>
            <option value="">Admin</option>
            <option value="">waitress</option>
          </select>
        </SectionComponent>
        <section className="flex flex-col gap-5 mb-10">
          <EmployeeCardComponent /><EmployeeCardComponent /><EmployeeCardComponent /><EmployeeCardComponent /><EmployeeCardComponent />
        </section>
        <SectionComponent>
          <h1 className="text-center text-2xl font-bold">
            GENERAR CODIGO DE CONTRATACION
          </h1>
          <select name="" id="">
            <option value="">seleccionar rol</option>
            <option value="">Admin</option>
            <option value="">waitress</option>
          </select>
          <select name="" id="">
            <option value="">seleccionar sede</option>
          </select>
        </SectionComponent>
    </>
  );
};
