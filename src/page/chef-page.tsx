import { useNavigate } from "react-router-dom";
import { CardPedido } from "../components/pedido-card-component";

export const ChefPage = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/private/dashboard", { replace: true });
  }

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button onClick={handleBack} type="button" className="text-2xl">
          ⬅️
        </button>

        <h1 className="text-xl font-bold">Manejador de restaurantes</h1>

        <button className="bg-red-600 px-4 py-2 rounded-lg">Salir</button>
      </header>
      <main>
        <h1 className="text-center text-2xl font-bold ">PEDIDOS</h1>
        <section className="px-8 py-5">
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
        </section>
      </main>
    </>
  );
};
