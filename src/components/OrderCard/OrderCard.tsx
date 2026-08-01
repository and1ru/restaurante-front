import { useState } from "react";

interface Props {
  mesa: number;
  date: string;
  estado: string;
}

type EstadoPedido = "pending" | "cooking" | "ready";

export const OrderCard = ({ mesa, date }: Props) => {
  const [estadoPedido, setEstadoPedido] = useState<EstadoPedido>("pending");

  function handleClick() {
    if (estadoPedido === "pending") {
      setEstadoPedido("cooking");
    }

    if (estadoPedido === "cooking") {
      setEstadoPedido("ready");
    }
  }

  const statusStyle = {
    pending: "bg-red-50 text-red-600 border-red-200",
    cooking: "bg-amber-50 text-amber-600 border-amber-200",
    ready: "bg-green-50 text-green-600 border-green-200",
  };

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Table {mesa}
        </h2>

        <span className="text-sm text-gray-400">{date}</span>
      </div>

      <div className="mt-4">
        <span
          className={`rounded-full border px-3 py-1 text-sm font-medium ${statusStyle[estadoPedido]}`}
        >
          {estadoPedido}
        </span>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Order
        </h3>

        <ul className="space-y-2 text-gray-700">
          <li>• 2 Hamburgers</li>
          <li>• 1 Coca-Cola 100ml</li>
        </ul>
      </div>

      {estadoPedido !== "ready" && (
        <button
          onClick={handleClick}
          className={`mt-6 w-full rounded-xl py-3 font-medium text-white transition ${
            estadoPedido === "pending"
              ? "bg-gray-900 hover:bg-black"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {estadoPedido === "pending"
            ? "Start cooking"
            : "Mark as ready"}
        </button>
      )}
    </article>
  );
};