import { TargetDashboardComponent } from "../components/target-dashboard-component";
import { dashboardActions } from "../helper/dashboardsActions";

export const DashboardPage = () => {
  return (
    <>
      <header className="bg-gray-800  p-4 flex justify-between items-center">
        <h1 className="text-white text-xl">Manejador de restaurantes</h1>
        <button className="bg-orange-200 p-2 font-bold rounded-lg">salir</button>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">Hi, Andres 👋🏽</h2>
        <h2 className="text-xl font-bold">Administrador - medellin</h2>
        <hr className="my-2" />
        <section className="flex gap-5 justify-center flex-wrap">
          <h2 className="w-full text-xl font-bold">what will you do?</h2>

          { dashboardActions.map((action) => (
            <TargetDashboardComponent imagen={action.image} title={action.title} url={action.url} />
          ))}
        </section>
      </main>
    </>
  );
};
