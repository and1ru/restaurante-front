import { useForm, type SubmitHandler } from "react-hook-form";
import { createRestaurantSchema, type createRestaurantType } from "../schemas/create-restaurant";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input-component";
import { style } from "../helper/style";

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
      <button className={style.button}>crear</button>
    </form>
  );
};
