import { useForm, type SubmitHandler } from "react-hook-form";
import { createRestaurantSchema, type createRestaurantType } from "../../schemas/create-restaurant";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/Input";

export const CreateRestaurant = () => {
  const {control,handleSubmit,formState: { errors }} = useForm<createRestaurantType>({
    defaultValues: {
      nameRestaurant: "",
    },
    mode: "onBlur",
    resolver: zodResolver(createRestaurantSchema),
  });

  const handleForm: SubmitHandler<createRestaurantType> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex flex-col gap-6"
    >
      <Input
        control={control}
        label="Nombre del restaurante"
        name="nameRestaurant"
        type="text"
        error={errors.nameRestaurant}
      />

      <button
        className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
      >
        Crear restaurante
      </button>
    </form>
  );
};