import { CardPedido } from "../components/pedido-card-component";

export const ChefPage = () => {
  return (
    <>
        <h1 className="text-center text-2xl font-bold ">PEDIDOS</h1>
        <section className="p-5 mb-10 flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
        </section>
    </>
  );
};
