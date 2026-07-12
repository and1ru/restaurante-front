import { useNavigate } from "react-router-dom";
import { Input } from "./input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginType } from "../schemas/login";
import { useForm, type SubmitHandler } from "react-hook-form";

// Clases sugeridas en caso de que quieras actualizar tu archivo ../helper/style
const formClass = "flex flex-col gap-5";
const buttonClass = "w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-indigo-100 transition-all duration-200 active:scale-[0.99] mt-2 cursor-pointer";

export const LoginForm = () => {
  const navegar = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<loginType>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (data) => {
    console.log(data);
    navegar("/private/dashboard", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={formClass}>
      <div className="space-y-4">
        <Input 
          control={control} 
          label="Correo Electrónico" 
          name="email" 
          type="text" 
          error={errors.email}
        />
        <Input 
          control={control} 
          label="Contraseña" 
          name="password" 
          type="password" 
          error={errors.password}
        />
      </div>

      <button type="submit" className={buttonClass}>
        Iniciar Sesión
      </button>
    </form>
  );
};