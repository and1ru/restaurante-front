import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const CreateDishPage = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/private/dashboard", { replace: true });
  }

  const imagenRef = useRef<HTMLInputElement | null>(null);

  function handleImage() {
    imagenRef.current?.click();
  }

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button onClick={handleBack} type="button" className="text-2xl">
          ⬅️
        </button>

        <h1 className="text-xl font-bold">Manejador de restaurantes</h1>

        <button className="bg-red-600 px-4 py-2 rounded-lg">Salir</button>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        <section className="shadow-xl shadow-black/80 rounded-lg p-10">
          <h1 className="text-center text-2xl font-bold mb-10">Create Dish</h1>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="dish name" className="shadow-xl p-2 rounded-lg" />
            <button type="button" className="border py-10 rounded-lg" onClick={handleImage}>seleccionar imagen</button>
            <input type="file" className="hidden" ref={imagenRef} />
            <textarea name="" id="" className="shadow-xl p-2 rounded-lg h-20"></textarea>
            <textarea name="" id="" className="shadow-xl p-2 rounded-lg"></textarea>
            <button className="bg-blue-500 w-full p-2 rounded-lg text-white font-bold">Crear</button>
          </form>
        </section>
      </main>
    </>
  );
};
