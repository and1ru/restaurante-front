import { useForm, type SubmitHandler } from "react-hook-form";
import { createRestaurantSchema, type createRestaurantType } from "../schemas/create-restaurant";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input-component";

export const CreateRestaurantFormComponent = () => {
      const {control, handleSubmit, formState: {errors}} = useForm<createRestaurantType>({
          defaultValues: {
            nameRestaurant: ""
          },
          mode: "onBlur",
          resolver: zodResolver(createRestaurantSchema)
      })
  
      const handleForm:SubmitHandler<createRestaurantType> = (data) => {
          console.log(data)
      }
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input control={control} label="nombre empresa" name="nameRestaurant" type="text" error={errors.nameRestaurant}/>
      <button className="bg-green-500 p-2 rounded-lg font-bold">crear</button>
    </form>
  );
};
