import { SectionComponent } from "../components/select-component";

export const CreateRestaurantPage = () => {
  return (
    <>
        <SectionComponent >
          <h1 className="text-center text-2xl font-bold">Crear restaurante</h1>
          <form className="flex flex-col">
            <input 
            className="input-style p-2 rounded-lg my-7"
            type="text" placeholder="nombre restaurante"/>
            <button className="bg-green-500 p-2 rounded-lg font-bold">crear</button>
          </form>
        </SectionComponent>
    </>
  );
};
