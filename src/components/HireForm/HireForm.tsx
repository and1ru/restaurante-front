import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../Input/Input";
import { loginSchema, type loginType } from "../../schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { style } from "../../helper/style";

export const HireForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<loginType>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (data) => {
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={style.form}>
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

      <button type="submit" className={style.button}>
        Hire
      </button>
    </form>
  );
}