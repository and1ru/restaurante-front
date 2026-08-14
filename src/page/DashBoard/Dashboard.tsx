import { useNavigate } from "react-router-dom";
import { dashboardActions } from "../../helper/dashboardsActions";
import { SectionCard } from "../../components/SectionCard/SectionCard";

export const DashboardPage = () => {

  const navigate = useNavigate()
    function goToLogin(){
    navigate("/login", { replace: true });
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Restaurante Manager
          </h1>

          <button 
          onClick={goToLogin}
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition">
            Salir
          </button>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-7xl mx-auto p-6">

        {/* Bienvenida */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-8">
          <p className="text-gray-500 text-sm">
            Bienvenido de nuevo
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Hola, Andrés 👋
          </h2>

          <p className="text-gray-600 mt-1">
            Administrador • Medellín
          </p>
        </section>

        {/* Acciones */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            ¿Qué deseas hacer?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {dashboardActions.map((action) => (
              <SectionCard
                key={action.url}
                imagen={action.image}
                title={action.title}
                url={action.url}
              />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};