import { useNavigate } from "react-router-dom";
import { Input } from "./input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { registerSchema, type registerType } from "../schemas/register";

// Clases consistentes con el diseño del Login
const formClass = "flex flex-col gap-5";
const buttonClass = "w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-indigo-100 transition-all duration-200 active:scale-[0.99] mt-2 cursor-pointer";

export const RegisterForm = () => {
  const navegar = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<registerType>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    mode: "onBlur",
    resolver: zodResolver(registerSchema)
  });

  const handleForm: SubmitHandler<registerType> = (data) => {
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
        <Input 
          control={control} 
          label="Confirmar Contraseña" 
          name="confirmPassword" 
          type="password" 
          error={errors.confirmPassword}
        />
      </div>

      <button type="submit" className={buttonClass}>
        Registrarse
      </button>
    </form>
  );
};