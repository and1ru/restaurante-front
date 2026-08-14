import { CartDish } from "../CartDish/CartDish";

export const Cart = () => {
  return (
    <aside className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-6">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-3">Order Summary</h2>
      
      <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        <li><CartDish image="" name="" price={1} quantity={1}/></li>
        <li><CartDish image="" name="" price={1} quantity={1}/></li>
        <li><CartDish image="" name="" price={1} quantity={1}/></li>
        <li><CartDish image="" name="" price={1} quantity={1}/></li>
        <li><CartDish image="" name="" price={1} quantity={1}/></li>
      </ul>

      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between items-center text-lg font-bold text-gray-900">
          <span>Total:</span>
          <span>$9999</span>
        </div>
        <button className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800">
          Enviar
        </button>
      </div>
    </aside>
  );
};