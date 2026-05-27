import { EstadisticasCardComponent } from "../components/estadisticas-card-component";

export const StadisticsPage = () => {
  return (
    <>
        <main className="p-5 flex flex-col gap-10">
            <h1 className="text-center text-2xl font-bold">ESTADISTICAS</h1>
            <section className="p-5 shadow-xl shadow-black/80 rounded-lg">
                <form className="flex flex-col gap-5 mb-5">
                    <label htmlFor="sede">seleccina sede</label>
                    <input type="text" id="sede" placeholder="medellín" className="p-2 shadow-xl rounded-lg" />
                    <label htmlFor="dish">selecciona un plato</label>
                    <input type="text" id="dish" placeholder="hamburguesa" className="p-2 shadow-xl rounded-lg"/>
                </form>
                <select name="" id="" className="w-full p-2 rounded-lg shadow-xl">
                    <option value="today">Hoy</option>
                    <option value="yesterday">Ayer</option>
                    <option value="week">esta semana</option>
                    <option value="month">este mes</option>
                    <option value="year">este año</option>
                    <option value="always">siempre</option>
                </select>
            </section>
            <section>
                <EstadisticasCardComponent/>
            </section>
            <section className="p-5 shadow-xl shadow-black/80 rounded-lg">
                <h2 className="text-center text-xl font-bold">Grafica</h2>

            </section>
        </main>
    </>
  );
};
