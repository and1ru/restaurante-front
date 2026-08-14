export const DishFilter = () => {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor="dish"
                className="text-sm font-medium text-gray-600"
            >
                Dish
            </label>

            <input
                id="dish"
                type="text"
                placeholder="Hamburguesa"
                className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    )
}