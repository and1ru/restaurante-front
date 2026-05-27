import { SectionComponent } from "../components/select-component";

export const CreateSedePage = () => {
  return (
    <>
      <SectionComponent>
        <h1 className="text-2xl text-center font-bold mb-10">Create sede</h1>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="country"
            className="p-2 rounded-lg input-style"
          />
          <input
            type="text"
            placeholder="city"
            className="p-2 rounded-lg input-style"
          />
          <input
            type="text"
            placeholder="address"
            className="p-2 rounded-lg input-style"
          />
          <button className="bg-green-500 p-2 rounded-lg">Crear</button>
        </form>
      </SectionComponent>
    </>
  );
};
