import { CreateRestaurantFormComponent } from "../components/create-restaurant-form-component";
import { SectionComponent } from "../components/select-component";

export const CreateRestaurantPage = () => {
  return (
    <>
        <SectionComponent >
          <h1 className="text-center text-2xl font-bold">Crear restaurante</h1>
          <CreateRestaurantFormComponent/>
        </SectionComponent>
    </>
  );
};
