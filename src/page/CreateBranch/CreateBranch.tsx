import { Header } from "../../components/Header/Header";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createBranchSchema, type createBranchType } from "../../schemas/createBranch";
import { zodResolver } from "@hookform/resolvers/zod";
import { style } from "../../helper/style";
import { useCreateBranch } from "../../customHooks/useCreateBranch/useCreateBranch";
import { Input } from "../../components/Input/Input";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const CreateBranch = () => {
  const { mutate, isSuccess, isError } = useCreateBranch()
  const [succesOpen, setSuccesOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)
  const { control, handleSubmit, formState: { errors }, reset } = useForm<createBranchType>({
    defaultValues: {
      name: "",
      table: "1",
      address: "",
      city: "",
      country: ""
    },
    mode: "onBlur",
    resolver: zodResolver(createBranchSchema)
  })

  const handleForm: SubmitHandler<createBranchType> = (body) => {
    mutate(body)
  }

  useEffect(()=> {
    if(isSuccess){
      setSuccesOpen(true)
      reset()
    }
    if(isError){
      setErrorOpen(true)
    }
  },[isSuccess,isError])

  return (
    <>
      <SuccessMessage open={succesOpen}>
        se creo la nueva sede
      </SuccessMessage>
      <ErrorMessage open={errorOpen}>
        error al intetar crear la sede
      </ErrorMessage>
      <Header />
      <main className="my-10 mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <section className="">
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-10">
            Create Branch
          </h1>
          <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
            <Input control={control} label="Branch Name" name="name" type="text" error={errors.name} />
            <Input control={control} label="Country" name="country" type="text" error={errors.country} />
            <Input control={control} label="City" name="city" type="text" error={errors.city} />
            <Input control={control} label="Address" name="address" type="text" error={errors.address} />
            <Input control={control} label="tables" name="table" type="number" error={errors.table} />
            <button className={style.button}>Crear</button>
          </form>
        </section>
      </main>
    </>

  );
};