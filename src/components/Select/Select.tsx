import type { ReactNode } from "react";
import type { Control, FieldError, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  children: ReactNode
  error?: FieldError
}

export const Select = <T extends FieldValues>({ name, control, children, error }: Props<T>) => {
  return (
    <>
      <Controller control={control} name={name} render={({ field }) => (
        <select {...field} id={name} className={`w-full rounded-lg border px-4 py-2.5 outline-none transition`}>
          {children}
        </select>
      )} />
        { error && <p className="text-red-500">{error.message}</p>}
    </>

  );
};