import type {Control, FieldError, FieldValues, Path} from "react-hook-form";
import {Controller,} from "react-hook-form"
import { style } from "../helper/style";

interface Props<T extends FieldValues> {
  type: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  error?: FieldError;
}

export const Input = <T extends FieldValues>({type,name,label,error,control}: Props<T>) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <input {...field} id={name} type={type} className={style.input} />}
      />

      {error ? <p className={style.error}>{error.message}</p> : ""}
    </div>
  );
};
