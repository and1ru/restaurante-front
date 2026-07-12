import { useNavigate } from "react-router-dom";
import { DarkModeComponent } from "./darkmode-component";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/private/dashboard", { replace: true });
  }

  function goToLogin(){
    navigate("/login", { replace: true });
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Izquierda */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-100 transition text-xl"
          >
            ←
          </button>

          <h1 className="text-xl font-bold text-gray-800">
            Restaurante Manager
          </h1>
        </div>

        {/* Derecha */}
        <div className="flex items-center gap-4">
          <DarkModeComponent />

          <button
          onClick={goToLogin}
          className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition">
            Salir
          </button>
        </div>

      </div>
    </header>
  );
};