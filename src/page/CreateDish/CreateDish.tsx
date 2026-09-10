import { useForm, type SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { createDishSchema, type createDishType } from "../../schemas/createDish";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../../components/Select/Select";
import { OptionsCategories } from "../../components/OptionsCategories/OptionsCategories";
import { TextArea } from "../../components/TextArea/TextArea";
import { InputFile } from "../../components/InputFile/InputFile";
import { useCreateDish } from "../../customHooks/useCreateDish/useCreateDish";
import { useEffect, useState } from "react";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

const defaultValues = {
  category: "",
  description: "",
  name: "",
  image: undefined
}

export const CreateDishPage = () => {
  const { mutate, isError, isSuccess } = useCreateDish()
  const [openError, setOpenError] = useState(false)
  const [openSuccess, setOpenSuccess] = useState(false)
  const { control, formState: { errors }, handleSubmit, reset } = useForm<createDishType>({
    defaultValues,
    resolver: zodResolver(createDishSchema),
    mode: "onBlur"
  })

  const handleForm: SubmitHandler<createDishType> = (data) => {
    setOpenSuccess(false)
    setOpenError(false)
    const form = new FormData()
    form.append("name", data.name)
    form.append("image", data.image)
    form.append("category", data.category)
    form.append("description", data.description)
    mutate(form)
  }

  useEffect(() => {
    if (isError) {
      setOpenError(true)
    }
    if (isSuccess) {
      setOpenSuccess(true)
      reset(defaultValues)
    }
  }, [isError, isSuccess,])

  return (
    <>
      <SuccessMessage open={openSuccess}>
        se creo correctamente el plato
      </SuccessMessage>
      <ErrorMessage open={openError}>
        ocurrio un error al intentar crear el plato
      </ErrorMessage>
      <Header />
      <main className="my-10 mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Create Dish
          </h1>
        </section>
        <section className="w-100 mx-auto">
          <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
            <Input control={control} label="Dish Name" name="name" type="text" error={errors.name} />
            <InputFile control={control} label="Dish Image" name="image" error={errors.image} />
            <Select control={control} name="category" error={errors.category}>
              <option value="">Select Category</option>
              <OptionsCategories />
            </Select>
            <TextArea control={control} label="Description" name="description" error={errors.description} />
            <button className="bg-gray-700 p-3 rounded-lg text-white">Create</button>
          </form>
        </section>
      </main>

    </>
  );
};