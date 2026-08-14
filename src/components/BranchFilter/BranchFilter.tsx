export const BranchFilter = () => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
                Branch
            </label>

            <select className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                <option value="">select branch</option>
            </select>
        </div>
    )
}