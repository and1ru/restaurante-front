import { Cart } from "../../components/Cart/Cart";
import { DishCardWaitress } from "../../components/DishCardWaitress/DishCardWaitress";
import { Header } from "../../components/Header/Header";
import { useWaitressDishes } from "../../customHooks/useDishesWaitress/useDishesWaitress";

export const WaitressPage = () => {
  const { data } = useWaitressDishes()
  console.log(data)
  return (
    <>
    <Header />
    <main className="space-y-8 px-4 md:p-6">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center">Dishes</h2>
        <p className="mt-2 text-gray-500 text-center">
          Search and select dishes to create an order.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-6">
          <Cart />
        </div>
        <main className="space-y-6 lg:col-span-8">

          {/* Buscador */}
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <form className="flex flex-col gap-4 sm:flex-row">
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

          {/* dishes */}
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {data?.result.map((dish) => 
              <DishCardWaitress 
                id={dish.id} 
                image={dish.image_url} 
                name={dish.name} 
                price={dish.price} 
                key={dish.id} />
            )}
          </section>
        </main>
      </section>
    </main>
    </>
    
  );
};