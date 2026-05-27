import { useNavigate } from "react-router-dom";

export const CreateRestaurantPage = () => {

  const navegar = useNavigate()

  function handleClick() {
    navegar("/private/dashboard", {replace:true})
  }
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <button 
        onClick={handleClick}
        type="button" className="text-2xl">{"⬅️"}</button>
        <h1>Manejador de restaurantes</h1>
        <button className="bg-red-600 p-2 rounded-lg">salir</button>
      </header>
      <main className="p-6 max-w-7xl mx-auto">
        <section className="shadow-xl shadow-black/60 p-10">
          <h1 className="text-center text-2xl font-bold">Crear restaurante</h1>
          <form className="flex flex-col">
            <input 
            className="shadow-xl p-2 rounded-lg my-7"
            type="text" placeholder="nombre restaurante"/>
            <button className="bg-green-500 p-2 rounded-lg font-bold">crear</button>
          </form>
        </section>
      </main>
    </>
  );
};
