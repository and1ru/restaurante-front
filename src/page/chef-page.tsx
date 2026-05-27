import { CardPedido } from "../components/pedido-card-component";

export const ChefPage = () => {
  return (
    <>
        <h1 className="text-center text-2xl font-bold ">PEDIDOS</h1>
        <section className="px-8 py-5">
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
        </section>
    </>
  );
};
