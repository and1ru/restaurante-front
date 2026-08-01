import { useRef } from "react";

export const CreateDishPage = () => {
  const imagenRef = useRef<HTMLInputElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function handleImage() {
    imagenRef.current?.click();
  }

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Dish
          </h1>

          <p className="mt-2 text-gray-500">
            Add a new dish to your restaurant menu.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Dish Name
            </label>

            <input
              type="text"
              placeholder="Classic Burger"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>

            <div className="flex gap-3">
              <select className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
                <option>Select a category</option>
                <option>Burgers</option>
                <option>Drinks</option>
                <option>Desserts</option>
              </select>

              <button
                type="button"
                onClick={openDialog}
                className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
              >
                New
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Image
            </label>

            <button
              type="button"
              onClick={handleImage}
              className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-gray-500 transition hover:border-gray-900 hover:text-gray-900"
            >
              Select image
            </button>

            <input
              ref={imagenRef}
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Ingredients
            </label>

            <textarea
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
            />
          </div>

          <button className="w-full rounded-xl bg-gray-900 py-3 font-medium text-white transition hover:bg-black">
            Create Dish
          </button>
        </form>
      </div>

      <dialog
        ref={dialogRef}
        className="w-full max-w-md rounded-2xl p-0 backdrop:bg-black/40"
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
  );
};