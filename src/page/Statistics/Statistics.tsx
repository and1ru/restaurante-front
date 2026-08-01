import { StatisticsCard } from "../../components/StatisticsCard/StatisticsCard";

export const StadisticsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Estadísticas
        </h1>

        {/* Filtros */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">
            Filtros
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex flex-col gap-2">
              <label
                htmlFor="sede"
                className="text-sm font-medium text-gray-600"
              >
                Sede
              </label>

              <input
                id="sede"
                type="text"
                placeholder="Medellín"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="dish"
                className="text-sm font-medium text-gray-600"
              >
                Plato
              </label>

              <input
                id="dish"
                type="text"
                placeholder="Hamburguesa"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-600">
                Periodo
              </label>

              <select className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                <option value="today">Hoy</option>
                <option value="yesterday">Ayer</option>
                <option value="week">Esta semana</option>
                <option value="month">Este mes</option>
                <option value="year">Este año</option>
                <option value="always">Siempre</option>
              </select>
            </div>
          </form>
        </section>

        {/* Tarjetas */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Resumen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatisticsCard />
            <StatisticsCard />
            <StatisticsCard />
            <StatisticsCard />
          </div>
        </section>
      </div>
    </main>
  );
};