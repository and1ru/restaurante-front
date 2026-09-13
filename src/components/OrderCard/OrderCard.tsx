import { useState } from "react";

interface Dishes{
  name:string;
  quantity:number
  branch_dish_id:number
}

interface Props {
  estado: string;
  dishes: Dishes[]
}


export const OrderCard = ({estado,dishes}: Props) => {
  const [estadoPedido, setEstadoPedido] = useState(estado);

  function handleClick() {
    if (estadoPedido === "pending") {
      setEstadoPedido("cooking");
    }

    if (estadoPedido === "cooking") {
      setEstadoPedido("ready");
    }
  }

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mt-4">
        <span
          className={`rounded-full border px-3 py-1 text-sm font-medium`}
        >
          {estadoPedido}
        </span>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Order
        </h3>

        <ul className="space-y-2 text-gray-700">
          { dishes.map( dish => <li key={dish.branch_dish_id}>{dish.quantity} {dish.name}</li>)}
        </ul>
      </div>


        <button
          onClick={handleClick}
          className={`mt-6 w-full rounded-xl py-3 font-medium transition `}
        >
          {estadoPedido === "PENDDING"
            ? "Start cooking"
            : "Mark as ready"}
        </button>

    </article>
  );
};