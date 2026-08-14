export const TimeFilter = () => {
    return (
    <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">
            Periodo
        </label>

        <select className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <option value="">Select Time</option>
            <option value="today">Hoy</option>
            <option value="yesterday">Ayer</option>
            <option value="week">Esta semana</option>
            <option value="month">Este mes</option>
            <option value="year">Este año</option>
            <option value="always">Siempre</option>
        </select>
    </div>
    )
}