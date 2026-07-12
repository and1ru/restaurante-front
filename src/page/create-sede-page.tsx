import { CreateSedeFormComponent } from "../components/create-sede-form-component";
import { SectionComponent } from "../components/section-component";

export const CreateSedePage = () => {
  return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Create Branch
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Enter the information for the new restaurant branch.
        </p>

        <div className="mt-8">
          <CreateSedeFormComponent />
        </div>
      </div>
  );
};