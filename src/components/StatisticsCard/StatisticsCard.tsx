export const StatisticsCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-6">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Ventas
        </p>
        <p className="text-3xl font-bold text-gray-800 mt-2">
          $12.002.990
        </p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Pedidos
        </p>
        <p className="text-2xl font-semibold text-gray-800 mt-2">
          123
        </p>
      </div>
    </div>
  );
};