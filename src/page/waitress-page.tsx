import { dishes } from "../helper/dishes";
import { DishCardComponent } from "../components/dish-card-component";

export const WaitressPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dishes</h1>
        <p className="mt-2 text-gray-500">
          Search and select dishes to create an order.
        </p>
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <form className="flex flex-col gap-4 md:flex-row">
          <input
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            type="search"
            placeholder="Search dishes..."
          />

          <select className="rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black">
            <option>All categories</option>
          </select>
        </form>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dishes.map((dish) => (
          <DishCardComponent
            key={dish.id}
            image={dish.image}
            name={dish.name}
            price={dish.price}
          />
        ))}
      </section>
    </div>
  );
};