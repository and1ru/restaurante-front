import { CreateDishForm } from "../../components/CreateDishForm/CreateDishForm";

export const CreateDishPage = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Dish
          </h1>
          <p className="mt-2 text-gray-500">
            Add a new dish to your restaurant menu.
          </p>
        </div>
        <CreateDishForm />
      </div>
    </>
  );
};