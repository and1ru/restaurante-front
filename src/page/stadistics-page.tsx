import { EstadisticasCardComponent } from "../components/estadisticas-card-component";
import { SectionComponent } from "../components/select-component";

export const StadisticsPage = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">ESTADISTICAS</h1>
      <SectionComponent>
        <form className="flex flex-col gap-5 mb-5">
          <label htmlFor="sede">seleccina sede</label>
          <input
            type="text"
            id="sede"
            placeholder="medellín"
            className="p-2 shadow-xl rounded-lg"
          />
          <label htmlFor="dish">selecciona un plato</label>
          <input
            type="text"
            id="dish"
            placeholder="hamburguesa"
            className="p-2 shadow-xl rounded-lg"
          />
        </form>
        <select name="" id="" className="w-full p-2 rounded-lg shadow-xl">
          <option value="today">Hoy</option>
          <option value="yesterday">Ayer</option>
          <option value="week">esta semana</option>
          <option value="month">este mes</option>
          <option value="year">este año</option>
          <option value="always">siempre</option>
        </select>
      </SectionComponent>
      <SectionComponent>
        <EstadisticasCardComponent />
      </SectionComponent>
      <SectionComponent>
        <h2 className="text-center text-xl font-bold">Grafica</h2>
      </SectionComponent>
    </>
  );
};
