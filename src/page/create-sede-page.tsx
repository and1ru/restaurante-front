import { useNavigate } from "react-router-dom";

export const CreateSedePage = () => {
  const navegar = useNavigate();
  function handleClick() {
    navegar("/private/dashboard", { replace: true });
  }
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button onClick={handleClick} type="button" className="text-2xl">
          {"⬅️"}
        </button>
        <h1>Manejador de restaurantes</h1>
        <button className="bg-red-600 p-2 rounded-lg">salir</button>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        <section className="shadow-xl shadow-black/60 p-10 rounded-lg">
            <h1 className="text-2xl text-center font-bold mb-10">Create sede</h1>
            <form className="flex flex-col gap-5">
                <input type="text" placeholder="country" className="p-2 rounded-lg shadow-xl"/>
                <input type="text" placeholder="city" className="p-2 rounded-lg shadow-xl"/>
                <input type="text" placeholder="address" className="p-2 rounded-lg shadow-xl"/>
                <button className="bg-green-500 p-2 rounded-lg">Crear</button>
            </form>
        </section>
      </main>
    </>
  );
};
