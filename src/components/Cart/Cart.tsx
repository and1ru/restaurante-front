import { useDishCart } from "../../context/WaitressCart/WaitressCart.store";
import { useCreateOrder } from "../../customHooks/useCreateOrder/useCreateOrder";
import { CartDish } from "../CartDish/CartDish";

export const Cart = () => {
  const { mutate } = useCreateOrder()
  const clear = useDishCart((state) => state.clear)
  const dishes = useDishCart((state) => state.dishes)
  const total = dishes.reduce((prev, current) => prev + Number(current.price) * Number(current.quantity), 0)

  const handleClick = () => {
    mutate(dishes)
    clear()
  }

  return (
    <aside className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-6">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Order Summary</h2>

      <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        {dishes.map((dish) => <li><CartDish id={dish.id} image={dish.image} name={dish.name} price={dish.price} quantity={1} /></li>)}
      </ul>

      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between items-center text-lg font-bold text-gray-900">
          <span>Total:</span>
          <span>$ {total}</span>
        </div>
        <button 
          onClick={handleClick}
          className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800">
          Enviar
        </button>
      </div>
    </aside>
  );
};