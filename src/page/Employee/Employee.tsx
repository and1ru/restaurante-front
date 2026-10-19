import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useGetEmployee } from "../../customHooks/useGetEmployee/useGetEmployee";
import { FireButton } from "../../components/FireButton/FireButton";

export const Employee = () => {
  const { employeeId } = useParams();
  const id = employeeId ? Number(employeeId) : 0;
  const { data, isError, isLoading } = useGetEmployee(id);

  if(!data || isError){
    return <p>error</p>
  }

  const employee = data.result;

  const date = new Date(employee.hireDate)
  const day = date.getDate()
  const month = date.toLocaleDateString("en", { month: "long" })
  const year = date.getFullYear()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Page heading */}
          <section>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Employee details
            </h1>
          </section>

          {/* Employee information */}
          {!isLoading && !isError && employee && (
            <>
              {/* Profile card */}
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl font-bold uppercase text-blue-700 ring-1 ring-blue-100">
                    {employee.name?.trim().charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-500">
                      Employee profile
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                      {employee.name}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      Employee ID: {employeeId}
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-100">
                    {employee.role}
                  </span>
                </div>
              </section>

              {/* Details */}
              <section>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                      $
                    </div>
                    <p className="text-sm font-medium text-slate-500">
                      Monthly salary
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      ${employee.salary}
                    </p>
                  </article>
                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
                      @
                    </div>
                    <p className="text-sm font-medium text-slate-500">
                      Branch
                    </p>
                    <p className="mt-2 text-xl font-bold text-slate-900">
                      {employee.branch}
                    </p>
                  </article>

                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-xl">
                      <span aria-hidden="true">◷</span>
                    </div>
                    <p className="text-sm font-medium text-slate-500">
                      Hire date
                    </p>
                    <p className="mt-2 text-xl font-bold text-slate-900">
                      {day} {month} {year}
                    </p>
                  </article>
                </div>
              </section>

              {/* Actions */}
              <section className="flex flex-col justify-between gap-4 rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
                <div>
                  <h2 className="font-bold text-slate-900">
                    Employment actions
                  </h2>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                    Terminating employment is a significant action. Verify the
                    employee's information before proceeding.
                  </p>
                </div>

                <FireButton employeeId={id} />
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
};