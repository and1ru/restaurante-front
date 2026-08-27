import { LoginForm } from "../../components/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <section className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100/80 flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            ¡Bienvenido!
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Ingresa tus credenciales para acceder
          </p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
};