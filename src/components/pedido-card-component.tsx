import { useState } from "react";

interface Props {
  mesa: number;
  date: string;
  estado: string;
}

type EstadoPedido = "pending" | "cooking" | "ready";

export const CardPedido = ({ mesa, date }: Props) => {
  const [estadoPedido, setEstadoPedido] = useState<EstadoPedido>("pending");

  function handleClick() {
    if(estadoPedido === "pending"){
        setEstadoPedido("cooking")
    }

    if(estadoPedido === "cooking"){
        setEstadoPedido("ready")
    }
  }

  return (
    <div key={mesa} className="shadow-xl shadow-gray w-full p-4 flex flex-col gap-2 ">
      <p>Mesa: {mesa}</p>
      <p>hace: {date}</p>
      <p>estado: <span  className={`${estadoPedido === "pending" ? "text-red-600" : estadoPedido === "cooking" ? "text-yellow-500" : "text-green-500" }`}>{estadoPedido}</span></p>
      <div>
        <p className="font-medium text-lg">pedidos:</p>
        <ul className="flex flex-col gap-2">
          <li>2 hamburguesas</li>
          <li>1 cocacola 100ml</li>
        </ul>
      </div>
      <button 
      className={`mt-3 p-2 rounded-lg w-full text-white font-bold ${estadoPedido === "pending" ? "bg-blue-600" : estadoPedido === "cooking" ? "bg-green-500" : "hidden" }`}
      onClick={handleClick}>cambiar estado</button>
    </div>
  );
};