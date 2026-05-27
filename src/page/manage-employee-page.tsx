// ver todos los empleados
// buscar usuarios por nombre
// filtrar por sede
// filtrar por rol
// cambiar de rol
// despedir
// generar link de contratacion
//

import { EmployeeCardComponent } from "../components/employee-card-component";

export const ManageEmployeePage = () => {
  return (
    <>
        <section>
          <form>
            <input type="text" />
            <button type="button">buscar</button>
          </form>
          <select name="" id="">
            <option value="">filtrar por sede</option>
          </select>
          <select name="" id="">
            <option value="">filtrar por rol</option>
            <option value="">Admin</option>
            <option value="">waitress</option>
          </select>
        </section>
        <section>
          <EmployeeCardComponent />
        </section>
        <section>
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
        </section>
    </>
  );
};
