import { BranchFilter } from "../../components/BranchFilter/BranchFilter";
import { DishFilter } from "../../components/DishFilter/DishFilter";
import { StatisticsCard } from "../../components/StatisticsCard/StatisticsCard";
import { TimeFilter } from "../../components/TimeFilter/TimeFilter";

export const StadisticsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Estadísticas
        </h1>
        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">
            Filtros
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DishFilter />
            <BranchFilter />
            <TimeFilter/>
          </form>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Summary
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