interface Props {
    dialogRef: React.RefObject<HTMLDialogElement | null>
}
export const CreateCategory = ({ dialogRef }: Props) => {

    function openDialog() {
        dialogRef.current?.showModal();
    }

    function closeDialog() {
        dialogRef.current?.close();
    }

    return (
        <>
            <button
                type="button"
                onClick={openDialog}
                className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
            >
                New
            </button>
            <dialog
                ref={dialogRef}
                className="w-full max-w-md m-auto rounded-2xl p-0 backdrop:bg-black/40"
            >
                <div className="p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">
                            New Category
                        </h2>

                        <button
                            onClick={closeDialog}
                            className="text-2xl text-gray-400 transition hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Category Name
                            </label>

                            <input
                                type="text"
                                placeholder="Burgers"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={closeDialog}
                                className="rounded-xl border border-gray-300 px-5 py-3 font-medium transition hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                className="rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-black"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>

    )
}