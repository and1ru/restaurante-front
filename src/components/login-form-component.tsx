import { useNavigate } from "react-router-dom";
import { Input } from "./input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginType } from "../schemas/login";
import { useForm, type SubmitHandler } from "react-hook-form";

export const LoginForm = () => {
    const navegar = useNavigate()

    const {control, handleSubmit, formState: {errors}} = useForm<loginType>({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onBlur",
        resolver: zodResolver(loginSchema)
    })

    const handleForm:SubmitHandler<loginType> = (data) => {
        console.log(data)
        navegar("/private/dashboard", {replace:true})
    }
  return (
        <form onSubmit={handleSubmit(handleForm)} className="flex flex-col">
            <Input control={control} label="Correo" name="email" type="text" error={errors.email}/>
            <Input control={control} label="Contraseña" name="password" type="password" error={errors.password}/>
            <button className="p-2 rounded-lg w-full bg-blue-500 text-white font-bold hover:bg-blue-600 button-transform mb-5">Enviar</button>
        </form>
  );
};