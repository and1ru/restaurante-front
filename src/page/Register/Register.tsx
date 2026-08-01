import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  return (
    // Centrado absoluto en pantalla completa con el mismo fondo degradado sutil
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      
      {/* Tarjeta de Registro optimizada con sombra suave */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100/80 flex flex-col">
        
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Crear Cuenta
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Regístrate para empezar a gestionar tus ventas
          </p>
        </div>

        {/* Formulario */}
        <RegisterForm />

        {/* Enlace de redirección al Login */}
        <div className="text-center mt-6 pt-5 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            ¿Ya tienes una cuenta?{" "}
            <Link 
              to="/login" 
              className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline transition-colors duration-150"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
};