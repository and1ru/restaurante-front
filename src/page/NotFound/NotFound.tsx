import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        {/* Número 404 destacado */}
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            ¡Ups! Página no encontrada
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            La página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        <div>
          <Link
            to="/private/dashboard"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
          >
            Come Back
          </Link>
        </div>
      </div>
    </div>
  );
};