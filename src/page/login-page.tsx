import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, type loginType } from "../schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/input-component";

export const LoginPage = () => {
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
    <main className="p-10">
        <div className="p-10 shadow-2xl rounded-lg shadow-black/70">
            <h1 className="text-center text-2xl font-bold mb-10">Login</h1>
            <form onSubmit={handleSubmit(handleForm)} className="flex flex-col">
                <Input control={control} label="Correo" name="email" type="text" error={errors.email}/>
                <Input control={control} label="Contraseña" name="password" type="password" error={errors.password}/>
                <button className="p-2 rounded-lg w-full bg-blue-500 text-white font-bold hover:bg-blue-600 button-transform mb-5">Enviar</button>
            </form>
            <Link to="/register" className="text-blue-500 cursor-pointer" >don't you have account?</Link>
        </div>
    </main>
  );
};
