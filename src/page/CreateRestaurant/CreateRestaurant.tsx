import { CreateRestaurant } from "../../components/CreateRestaurant/CreateRestaurant";

export const CreateRestaurantPage = () => {
  return (
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Crear restaurante
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Ingresa la información para registrar un nuevo restaurante.
        </p>

        <div className="mt-8">
          <CreateRestaurant />
        </div>
      </div>

  );
};