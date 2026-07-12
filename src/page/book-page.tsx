import { useForm, type SubmitHandler } from "react-hook-form";
import { style } from "../helper/style";
import { reservationSchema, type reservationType } from "../schemas/reservation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/input-component";

export const BookPage = () => {
    const today = new Date().toISOString().split("T")[0];

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<reservationType>({
        defaultValues: {
            day: new Date(),
            name: "",
            people: 1,
            hour: "",
        },
        mode: "onBlur",
        resolver: zodResolver(reservationSchema),
    });

    const handleForm: SubmitHandler<reservationType> = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Book a Table
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Reserve your table in just a few seconds.
                </p>

                <form
                    onSubmit={handleSubmit(handleForm)}
                    className="space-y-5"
                >
                    <Input
                        control={control}
                        label="Day"
                        name="day"
                        error={errors.day}
                        type="date"
                        minimo={today}
                    />

                    <Input
                        control={control}
                        label="Number people"
                        name="people"
                        error={errors.people}
                        type="number"
                    />

                    <Input
                        control={control}
                        label="Name"
                        name="name"
                        error={errors.name}
                        type="string"
                    />

                    <Input
                        control={control}
                        label="Time"
                        name="hour"
                        error={errors.hour}
                        type="time"
                    />

                    <button
                        className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
                        type="button"
                    >
                        Book
                    </button>
                </form>
            </div>
        </div>
    );
};