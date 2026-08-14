import { useRef } from "react";
import { CreateCategory } from "../CreateCategory/CreateCategory"

export const CreateDishForm = () => {
      const dialogRef = useRef<HTMLDialogElement | null>(null);
  const imagenRef = useRef<HTMLInputElement | null>(null);

  function handleImage() {
    imagenRef.current?.click();
  }
    return (
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
                    <CreateCategory dialogRef={dialogRef} />
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
    )
}