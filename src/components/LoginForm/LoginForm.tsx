import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type loginType } from "../../schemas/login";
import { Input } from "../Input/Input";
import { useLogin } from "../../customHooks/useLogin/useLogin";
import { useEffect } from "react";

export const LoginForm = () => {
  const navegar = useNavigate();
  const { mutate, isSuccess} = useLogin()
  const { control, handleSubmit, formState: { errors } } = useForm<loginType>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (body) => {
    mutate(body)
  };

  useEffect(()=> {
    if(isSuccess){
    navegar("/private/dashboard", {replace:true})
  }
  },[isSuccess])

  return (
    <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
      <div className="space-y-4">
        <Input control={control} label="Correo Electrónico" name="email" type="text" error={errors.email}/>
        <Input control={control} label="Contraseña" name="password" type="password" error={errors.password}/>
      </div>
      <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-indigo-100 transition-all duration-200 active:scale-[0.99] mt-2 cursor-pointer">
        Iniciar Sesión
      </button>
    </form>
  );
};