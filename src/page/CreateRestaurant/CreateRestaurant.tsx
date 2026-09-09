import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createRestaurantSchema, type createRestaurantType } from "../../schemas/createRestaurant";
import { Input } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { useCreateRestaurant } from "../../customHooks/useCreateRestaurant/useCreateRestaurant";
import { useEffect, useState } from "react";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const CreateRestaurantPage = () => {
  const { mutate, isSuccess, isError } = useCreateRestaurant()
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openError, setOpenError] = useState(false)
  const { control, handleSubmit, formState: { errors }, reset } = useForm<createRestaurantType>({
    defaultValues: {
      nameRestaurant: "",
      confirmPassword: "",
      email: "",
      ownerName: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(createRestaurantSchema),
  });

  const handleForm: SubmitHandler<createRestaurantType> = (body) => {
    setOpenError(false)
    setOpenSuccess(false)
    mutate(body)
  };

  useEffect(()=> {
    if(isSuccess){
      setOpenSuccess(true)
      reset()
    }
    if(isError){
      setOpenError(true)
    }
    
  },[isSuccess, isError])

  return (
    <>
    <ErrorMessage open={openError}>
      error al intentar crear el restaurante
    </ErrorMessage>
    <SuccessMessage open={openSuccess}>
      se creo el restuarante
    </SuccessMessage>
    <Header />
    <main className="my-10">
      <section className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Create Restaurant
        </h1>

        <div className="mt-8">
          <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-6">
            <Input control={control} label="Owner Name" name="ownerName" type="text" error={errors.ownerName} />
            <Input control={control} label="Restaurant Name" name="nameRestaurant" type="text" error={errors.nameRestaurant} />
            <Input control={control} label="Email" name="email" type="email" error={errors.email} />
            <Input control={control} label="Password" name="password" type="password" error={errors.password} />
            <Input control={control} label="Confrim Password" name="confirmPassword" type="password" error={errors.confirmPassword} />
            <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
              Create
            </button>
          </form>
        </div>
      </section>
    </main>

    </>
  );
};