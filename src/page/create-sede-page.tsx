import { CreateSedeFormComponent } from "../components/create-sede-form-component";
import { SectionComponent } from "../components/select-component";

export const CreateSedePage = () => {
  return (
    <>
      <SectionComponent>
        <h1 className="text-2xl text-center font-bold mb-10">Create sede</h1>
        <CreateSedeFormComponent/>
      </SectionComponent>
    </>
  );
};
