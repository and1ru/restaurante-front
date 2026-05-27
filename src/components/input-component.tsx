import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  type: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  error?: FieldError;
}

export const Input = <T extends FieldValues>({type,name,label,error,control}: Props<T>) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <input {...field} id={name} type={type} />}
      />

      {error ? <p>{error.message}</p> : null}
    </>
  );
};
