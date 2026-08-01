import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  const navegar = useNavigate();

  function handleLogin() {
    navegar("/login");
  }

  function handleRegister() {
    navegar("/register");
  }

  return (
    <>
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">
            Maneja tu restaurante
          </h1>

          <div className="flex gap-3">
            <button
              onClick={handleLogin}
              className="bg-orange-600 hover:bg-orange-700 transition p-2 px-4 rounded-lg"
            >
              Login
            </button>

            <button
              onClick={handleRegister}
              className="border border-white hover:bg-white hover:text-black transition p-2 px-4 rounded-lg"
            >
              Register
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
                Administra tu restaurante de forma fácil y rápida
              </h2>

              <p className="text-gray-600 text-lg mb-6">
                Controla ventas, empleados, inventario y sedes desde un
                solo lugar. Nuestra plataforma te ayuda a organizar
                tu negocio y ahorrar tiempo en procesos diarios.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={handleRegister}
                  className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Comenzar ahora
                </button>

                <button
                  onClick={handleLogin}
                  className="border border-gray-800 hover:bg-gray-800 hover:text-white transition px-6 py-3 rounded-lg font-semibold"
                >
                  Ya tengo cuenta
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                ¿Qué puedes hacer?
              </h3>

              <div className="space-y-5">

                <div>
                  <h4 className="font-semibold text-orange-600">
                    Gestión de ventas
                  </h4>

                  <p className="text-gray-600">
                    Registra ventas rápidamente y mantén el control
                    total de tus ingresos diarios.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600">
                    Control de inventario
                  </h4>

                  <p className="text-gray-600">
                    Administra productos, ingredientes y cantidades
                    disponibles en tiempo real.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600">
                    Manejo de empleados
                  </h4>

                  <p className="text-gray-600">
                    Crea roles para administradores y trabajadores
                    con diferentes permisos.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600">
                    Múltiples sedes
                  </h4>

                  <p className="text-gray-600">
                    Gestiona varias sucursales desde una sola plataforma.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ¿Por qué usar nuestra plataforma?
            </h2>

            <p className="text-gray-600 mb-12">
              Diseñada para restaurantes pequeños, medianos y grandes.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Más organización
                </h3>

                <p className="text-gray-600">
                  Centraliza toda la información de tu negocio
                  en un solo sistema.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Ahorra tiempo
                </h3>

                <p className="text-gray-600">
                  Automatiza tareas repetitivas y mejora
                  la eficiencia de tu equipo.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Mejor control
                </h3>

                <p className="text-gray-600">
                  Visualiza ventas, inventario y rendimiento
                  del negocio fácilmente.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>
            © 2026 Maneja tu restaurante - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
};