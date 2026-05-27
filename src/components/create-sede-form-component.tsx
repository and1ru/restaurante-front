import { useForm, type SubmitHandler } from "react-hook-form";
import { createSedeSchema, type createSedeType } from "../schemas/create-sede";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input-component";

export const CreateSedeFormComponent = () => {
          const {control, handleSubmit, formState: {errors}} = useForm<createSedeType>({
              defaultValues: {
                address: "",
                city: "",
                country: ""
              },
              mode: "onBlur",
              resolver: zodResolver(createSedeSchema)
          })
      
          const handleForm:SubmitHandler<createSedeType> = (data) => {
              console.log(data)
          }
  return (
    <form onSubmit={handleSubmit(handleForm)}>
        <Input control={control} label="Country" name="country" type="text" error={errors.country} />
        <Input control={control} label="City" name="city" type="text" error={errors.city} />
        <Input control={control} label="Address" name="address" type="text" error={errors.address} />
        <button className="bg-green-500 p-2 rounded-lg">Crear</button>
    </form>
  );
};
