import { socket } from "../../customHooks/socket";

interface Dishes{
  name:string;
  quantity:number
  id:number
}

interface Props {
  estado: string;
  dishes: Dishes[]
  id: number
}


export const OrderCardWaitress = ({estado, dishes, id}: Props) => {

  function handleClick() {
    socket.emit("update-state", {state:estado, id})
  }

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mt-4">
        <span
          className={`rounded-full border px-3 py-1 text-sm font-medium`}
        >
          {estado}
        </span>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Order
        </h3>

        <ul className="space-y-2 text-gray-700">
          { dishes.map( dish => <li key={dish.id}>{dish.quantity} || {dish.name}</li>)}
        </ul>
      </div>


        <button
          onClick={handleClick}
          className={`mt-6 w-full rounded-xl py-3 font-medium transition text-white bg-gray-900`}
        >
          mark as done
        </button>

    </article>
  );
};