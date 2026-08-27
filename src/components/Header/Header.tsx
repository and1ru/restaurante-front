import { useNavigate } from "react-router-dom";
import { Dark } from "../Dark/Dark";
import { ButtonLogOut } from "../ButtonLogOut/ButtonLogOut";

export const Header = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/private/dashboard", { replace: true });
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
          <Dark />
        <ButtonLogOut/>
        </div>

      </div>
    </header>
  );
};