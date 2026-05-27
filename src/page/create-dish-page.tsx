import { useRef } from "react";

export const CreateDishPage = () => {
  const imagenRef = useRef<HTMLInputElement | null>(null);

  function handleImage() {
    imagenRef.current?.click();
  }

  return (
    <>
      <section className="shadow-xl shadow-black/80 rounded-lg p-10">
        <h1 className="text-center text-2xl font-bold mb-10">Create Dish</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="dish name"
            className="shadow-xl p-2 rounded-lg"
          />
          <button
            type="button"
            className="border py-10 rounded-lg"
            onClick={handleImage}
          >
            seleccionar imagen
          </button>
          <input type="file" className="hidden" ref={imagenRef} />
          <textarea
            name=""
            id=""
            className="shadow-xl p-2 rounded-lg h-20"
          ></textarea>
          <textarea
            name=""
            id=""
            className="shadow-xl p-2 rounded-lg"
          ></textarea>
          <button className="bg-blue-500 w-full p-2 rounded-lg text-white font-bold">
            Crear
          </button>
        </form>
      </section>
    </>
  );
};
