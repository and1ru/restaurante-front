import { useForm, type SubmitHandler } from "react-hook-form";
import { style } from "../helper/style";
import { reservationSchema, type reservationType } from "../schemas/reservation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/input-component";

export const BookPage = () => {
    const today = new Date().toISOString().split("T")[0];
    const {control, handleSubmit, formState: {errors}} = useForm<reservationType>({
        defaultValues: {
            day: new Date(),
            name: "",
            people: 1,
            hour: ""
        },
        mode: "onBlur",
        resolver: zodResolver(reservationSchema)
    })

    const handleForm:SubmitHandler<reservationType> = (data) => {
        console.log(data)
    }
    
  return (
    <>
        <h1 className="text-center font-bold text-2xl">BOOK</h1>
        <form onSubmit={handleSubmit(handleForm)} className={style.form}>
            <Input control={control} label="Day" name="day" error={errors.day} type="date" minimo={`${today}`}/>
            <Input control={control} label="Number people" name="people" error={errors.people} type="number" />
            <Input control={control} label="Name" name="name" error={errors.name} type="string" />
            <Input control={control} label="Time" name="hour" error={errors.hour} type="time" />
            <button className={style.button} type="button">Book</button>
        </form>
    </>
  );
};
