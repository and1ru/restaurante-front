import { Link } from "react-router-dom";
import { LoginForm } from "../components/login-form-component";

export const LoginPage = () => {
  return (
    // Centramos todo en pantalla completa con flex, items-center y justify-center
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      
      {/* Tarjeta de Login optimizada con ancho máximo y sombra suave */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100/80 flex flex-col">
        
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            ¡Bienvenido!
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Ingresa tus credenciales para acceder
          </p>
        </div>

        {/* Formulario */}
        <LoginForm />

        {/* Enlace de Registro estilizado abajo */}
        <div className="text-center mt-6 pt-5 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            ¿No tienes una cuenta?{" "}
            <Link 
              to="/register" 
              className="font-semibold text-indigo-600 hover:text-indigo-500 hover:underline transition-colors duration-150"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
};