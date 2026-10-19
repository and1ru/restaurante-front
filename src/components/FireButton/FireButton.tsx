import { useRef } from "react";
import { useFire } from "../../customHooks/useFire/useFire";

interface Props {
    employeeId: number
}

export const FireButton = ({ employeeId }:Props) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    const { mutate, isSuccess, isPending } = useFire(employeeId)

    const open = () => {
        dialogRef.current?.showModal()
    }

    const close = () => {
        dialogRef.current?.close()
    }

    const fire = () => {
        mutate()
        if(isSuccess){
            close()
        }
    }

    return (
        <>
            <button
                onClick={open}
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-800">
                Fire Employee
            </button>
            <dialog
                className="m-auto max-w-150 min-w-100 h-60 p-5 justify-between rounded-xl" 
                ref={dialogRef}>
                <p className="text-center pt-10">Are you sure you want to fire this employee?</p>
                <div className="flex justify-end gap-4 mt-22">
                    <button onClick={close} className="p-2 border border-gray-400 rounded-lg hover:bg-gray-300">Cancelar</button>
                    <button 
                        disabled={isPending}
                        onClick={fire} 
                        className={`py-2 px-7 border border-red-400 rounded-lg hover:bg-red-300 ${ isPending && "cursor-not-allowed"}`}>Fire</button>
                </div>

            </dialog>
        </>
    );
};
