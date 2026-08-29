import { useForm, type SubmitHandler } from "react-hook-form";
import { createBranchSchema, type createBranchType } from "../../schemas/createBranch";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/Input";
import { style } from "../../helper/style";
import { useCreateBranch } from "../../customHooks/useCreateBranch/useCreateBranch";

export const CreateBranch = () => {
  const { mutate } = useCreateBranch()
  const { control, handleSubmit, formState: { errors } } = useForm<createBranchType>({
    defaultValues: {
      name:"",
      table: 1,
      address: "",
      city: "",
      country: ""
    },
    mode: "onBlur",
    resolver: zodResolver(createBranchSchema)
  })

  const handleForm: SubmitHandler<createBranchType> = (body) => {
    console.log(body)
    mutate(body)
  }

  return (
    <form onSubmit={handleSubmit(handleForm)} className={style.form}>
      <Input control={control} label="Branch Name" name="name" type="text" error={errors.name}/>
      <Input control={control} label="Country" name="country" type="text" error={errors.country} />
      <Input control={control} label="City" name="city" type="text" error={errors.city} />
      <Input control={control} label="Address" name="address" type="text" error={errors.address} />
      <Input control={control} label="tables" name="table" type="number" error={errors.table} minimo={1} />
      <button className={style.button}>Crear</button>
    </form>
  );
};
