import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, type reservationType } from "../../schemas/reservation";
import { Input } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";

export const BookPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<reservationType>({
        defaultValues: {
            day: "",
            name: "",
            people: 1,
            hour: "",
            phone: ""
        },
        mode: "onBlur",
        resolver: zodResolver(reservationSchema),
    });

    const handleForm: SubmitHandler<reservationType> = (data) => {
        console.log(data)
    };

    return (
        <>
        <Header />
            <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                        Book a Table
                    </h1>
                    <form
                        onSubmit={handleSubmit(handleForm)}
                        className="space-y-5"
                    >
                        <Input control={control} label="Day" name="day" error={errors.day} type="date" />
                        <Input control={control} label="Number people" name="people" error={errors.people} type="number" />
                        <Input control={control} label="Name" name="name" error={errors.name} type="string" />
                        <Input control={control} label="Time" name="hour" error={errors.hour} type="time" />
                        <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
                            Book
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
};