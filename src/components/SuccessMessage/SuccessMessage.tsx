import { useEffect, useRef, type ReactNode } from "react";

interface Props {
    open:boolean
    children:ReactNode
}

export const SuccessMessage = ({open, children}:Props) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    const handleClose = () => {
        dialogRef.current?.close()
    }

    useEffect(() => {
        if(open){
            dialogRef.current?.showModal()
        }
    },[open])

  return (
    <dialog ref={dialogRef} className="m-auto p-4 rounded-xl">
        <div className="border-5 rounded-full bg-green-50 border-green-600 w-30 h-30 flex justify-center items-center mx-auto">
            <div className="text-5xl text-green-600">✓</div>
        </div>
        <p className="my-5 font-medium text-xl text-green-600">{children}</p>
        
        <button onClick={handleClose} className="bg-red-500 w-full rounded-lg p-2 text-white hover:bg-red-600">Close</button>
    </dialog>
  );
};
