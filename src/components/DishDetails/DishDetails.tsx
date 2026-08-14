import { useRef } from "react"

export const DishDetails = () => {
    const dialogRef = useRef<null | HTMLDialogElement>(null)

    const showModal = () => {
        if(dialogRef){
            dialogRef.current?.showModal()
        }
    }

    const closeModal = () => {
        if(dialogRef){
            dialogRef.current?.close()
        }
    }

    return(
        <>
            <button 
            className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium transition hover:bg-gray-100"
            onClick={showModal}>Detail</button>
            <dialog ref={dialogRef} className="rounded-lg p-4 bg-white m-auto w-100 h-100">
                <button onClick={closeModal} className="sticky top-0 bg-red-500 text-white p-3 rounded-lg left-82 font-bold">X</button>
                <h2 className="text-center font-bold text-xl mb-5">Name Dish</h2>
                <img src="" alt="" className="w-full border h-40 rounded-lg"/>
                <p className="mt-5">ingredientes</p>
                <ul>
                    <li>queso</li>
                    <li>queso</li>
                    <li>queso</li>
                    <li>queso</li>
                    <li>queso</li>
                    <li>queso</li>
                </ul>
            </dialog>
        </>
    )
}