import { useRef } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { branchDishSchema, type branchDishType } from "../../schemas/branchDish";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/Input";
import { useCreateBranchDish } from "../../customHooks/useCreateBranchDish/useCreateBranchDish";
import { useUpdateBranchDish } from "../../customHooks/useUpdateBranchDish/useUpdateBranchDish";

interface Props {
    image: string;
    name: string;
    inBranch: boolean
    id: number
    price: number | null
    branchDishId: number | null
}

export const DishCardAmin = ({ image, name, inBranch, id, price, branchDishId }: Props) => {
    const { mutate: createDish } = useCreateBranchDish()
    const { mutate: updateDish } = useUpdateBranchDish()
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    const { control, formState: { errors }, handleSubmit } = useForm<branchDishType>({
        defaultValues: {
            price: "0"
        },
        mode: "onBlur",
        resolver: zodResolver(branchDishSchema)
    })

    const showModal = () => {
        dialogRef.current?.showModal()
    }

    const closeModal = () => {
        dialogRef.current?.close()
    }

    const handleForm: SubmitHandler<branchDishType> = (data) => {
        if (!inBranch) {
            createDish({
                price: Number(data.price),
                id
            });
        }

        if(inBranch){
            updateDish({
                price: Number(data.price),
                id: branchDishId!
            });
        }
    }

    return (
        <>
            <dialog ref={dialogRef} className="m-auto p-5 rounded-lg w-100 ">
                <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5">
                    <Input control={control} label="Dish Price" name="price" type="number" error={errors.price} />
                    <div className="flex gap-3">
                        <button onClick={closeModal} className="border flex-1 rounded-lg p-3" type="button">Cerrar</button>
                        <button className="border flex-1 rounded-lg p-3">Enviar</button>
                    </div>
                </form>
            </dialog>

            <div className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${!inBranch && "opacity-40"}`}>
                <img
                    src={image}
                    alt={`Dish ${name}`}
                    className="h-52 w-70 object-cover"
                />
                <div className="space-y-4 p-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">
                            {name}
                        </h2>
                        {price && <p>{price}</p>}
                    </div>
                    <div className="flex gap-3">
                        {inBranch ?
                            <button className="border w-full p-4 rounded-lg" onClick={showModal}>update</button> :
                            <button className="border w-full p-4 rounded-lg" onClick={showModal}>agregar</button>}
                    </div>
                </div>
            </div>
        </>

    );
};