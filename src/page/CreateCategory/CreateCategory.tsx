import { useForm, type SubmitHandler } from "react-hook-form";
import { categorySchema, type categoryType } from "../../schemas/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { useCreateCategory } from "../../customHooks/useCreateCategory/useCreateCategory";

export const CreateCategory = () => {
  const { mutate } = useCreateCategory()
  const { control, handleSubmit, formState: { errors } } = useForm<categoryType>({
    defaultValues: {
      name: ""
    },
    mode: "onBlur",
    resolver: zodResolver(categorySchema)
  })

  const handleForm: SubmitHandler<categoryType> = (body) => {
    mutate(body)
  }

  return (
    <>
      <Header />
      <main className="p-10">
        <section className="mx-auto max-w-xl shadow-lg p-5 h-80">
          <h2 className="text-center text-xl font-bold text-gray-900">New Category</h2>
          <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5 mt-10">
            <Input control={control} label="Category Name" name="name" type="text" error={errors.name} />

            <button type="submit" className="rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-black">
              Create
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
