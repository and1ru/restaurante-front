import { CardPedido } from "../components/pedido-card-component";
import { SectionComponent } from "../components/select-component";

export const ChefPage = () => {
  return (
    <>
        <h1 className="text-center text-2xl font-bold ">PEDIDOS</h1>
        <SectionComponent>
          <CardPedido mesa={1} estado="pendiente" date="10/05/2026" />
        </SectionComponent>
    </>
  );
};
