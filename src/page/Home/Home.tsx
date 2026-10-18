import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navegar = useNavigate();

  function handleLogin() {
    navegar("/login");
  }

  return (
    <>
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">
            Manage your restaurant
          </h1>

          <div className="flex gap-3">
            <button
              onClick={handleLogin}
              className="bg-orange-600 hover:bg-orange-700 transition p-2 px-4 rounded-lg"
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
                Manage your restaurant easily and quickly
              </h2>

              <p className="text-gray-600 text-lg mb-6">
                Control sales, employees, inventory, and locations from a
                single place. Our platform helps you organize
                your business and save time on daily processes.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={handleLogin}
                  className="border border-gray-800 hover:bg-gray-800 hover:text-white transition px-6 py-3 rounded-lg font-semibold"
                >
                  I already have an account
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                What can you do?
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-orange-600">
                    Sales management
                  </h4>

                  <p className="text-gray-600">
                    Record sales quickly and maintain total
                    control of your daily revenue.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600">
                    Inventory control
                  </h4>

                  <p className="text-gray-600">
                    Manage products, ingredients, and available quantities
                    in real time.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600">
                    Employee management
                  </h4>

                  <p className="text-gray-600">
                    Create roles for administrators and staff
                    with different permissions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600">
                    Multiple locations
                  </h4>

                  <p className="text-gray-600">
                    Manage multiple branches from a single platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why use our platform?
            </h2>

            <p className="text-gray-600 mb-12">
              Designed for small, medium, and large restaurants.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Better organization
                </h3>

                <p className="text-gray-600">
                  Centralize all your business information
                  in a single system.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Save time
                </h3>

                <p className="text-gray-600">
                  Automate repetitive tasks and improve
                  your team's efficiency.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Better control
                </h3>

                <p className="text-gray-600">
                  Easily view sales, inventory, and business performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>
            © 2026 Manage your restaurant - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};