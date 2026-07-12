import { CardPedido } from "../components/pedido-card-component";

export const ChefPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Kitchen Orders</h1>
        <p className="mt-2 text-gray-500">
          Manage and update incoming orders.
        </p>
      </div>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
        <CardPedido mesa={2} estado="pendiente" date="10/05/2026" />
        <CardPedido mesa={3} estado="pendiente" date="10/05/2026" />
        <CardPedido mesa={4} estado="pendiente" date="10/05/2026" />
        <CardPedido mesa={5} estado="pendiente" date="10/05/2026" />
      </section>
    </div>
  );
};