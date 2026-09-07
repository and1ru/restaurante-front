import { useForm, type SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { hireSchema, type hireType } from "../../schemas/hire";
import { Select } from "../../components/Select/Select";
import { OptionBranches } from "../../components/OptionBranches/OptionBranches";
import { useHire } from "../../customHooks/useHire/useHire";
import { useEffect, useState } from "react";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const Hire = () => {
  const { mutate, isSuccess, isError } = useHire()
    const [succesOpen, setSuccesOpen] = useState(false)
    const [errorOpen, setErrorOpen] = useState(false)
  const { control, handleSubmit, formState: { errors }, reset } = useForm<hireType>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(hireSchema)
  });

  const handleForm: SubmitHandler<hireType> = (body) => {
    mutate(body)
  };

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
            se contrato el usuario
          </SuccessMessage>
          <ErrorMessage open={errorOpen}>
            error al intetar contratar el usuario
          </ErrorMessage>
      <Header />
      <main className="my-10 ">
        <section className="shadow-sm max-w-xl mx-auto p-10 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-10">Hire</h2>
          <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
            <Input control={control} label="Employee Name" name="name" type="text" error={errors.name} />
            <Input control={control} label="Email" name="email" type="email" error={errors.email} />
            <Input control={control} label="Password" name="password" type="password" error={errors.password} />
            <Select control={control} name="role">
              <option value="">Select Role</option>
              <option value="ADMIN">Admin</option>
              <option value="WAITRESS">Waitress</option>
              <option value="RECEPTIONIST">receptionist</option>
              <option value="CHEF">Chef</option>
            </Select>
            <Select control={control} name="branch">
              <option value="">Select Branch</option>
              <OptionBranches />
            </Select>
            <button className="bg-gray-700 p-4 text-white font-bold rounded-lg">Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
};
