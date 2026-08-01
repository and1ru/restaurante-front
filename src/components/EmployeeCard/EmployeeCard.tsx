export const EmployeeCard = () => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Andre Felipe
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Administrator • Medellín
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Change Role
          </button>

          <button
            className="rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 font-medium text-red-600 transition hover:bg-red-100"
          >
            Fire Employee
          </button>
        </div>
      </div>
    </article>
  );
};