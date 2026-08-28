import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../customHooks/useLogOut/useLogOut";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export const ButtonLogOut = () => {
    const navigate = useNavigate();
    const { mutateAsync } = useLogOut()
    const { setAuth } = useAuthContext()

    function goToLogin() {
        navigate("/login", { replace: true });
        mutateAsync()
        setAuth({role:"", name:""})
    }

    return (
        <button
            onClick={goToLogin}
            className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition">
            Salir
        </button>
    )
}