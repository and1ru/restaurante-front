import { useNavigate } from "react-router-dom";
import { Dark } from "../Dark/Dark";

export const HeaderDashboard = () => {
    const navigate = useNavigate();

    function goToLogin() {
        navigate("/login", { replace: true });
    }
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        Restaurante Manager
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <Dark />

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
