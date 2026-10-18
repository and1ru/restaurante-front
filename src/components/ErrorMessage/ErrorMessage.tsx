import { useEffect, useRef, type ReactNode } from "react";

interface Props {
    open:boolean
    children:ReactNode
}

export const ErrorMessage = ({open, children}:Props) => {
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
    <dialog ref={dialogRef} className="m-auto p-6 rounded-xl max-w-100">
        <div className="border-5 rounded-full bg-red-50 border-red-600 w-30 h-30 flex justify-center items-center mx-auto">
            <div className="text-5xl">❌</div>
        </div>
        <div className="my-5 font-medium text-xl text-red-500 text-center">
            {children}
            <p>try it again</p>
        </div>
        
        <button onClick={handleClose} className="bg-red-500 outline-none w-full rounded-lg p-2 text-white hover:bg-red-600">Close</button>
    </dialog>
  );
};
