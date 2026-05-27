import { useNavigate } from "react-router-dom";
import { dishes } from "../helper/dishes";
import { DishCardComponent } from "../components/dish-card-component";

export const WaitressPage = () => {
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
        <section>
          <form>
            <input 
            className="p-2 shadow-xl rounded-lg w-full"
            type="search" placeholder="looking for dishes" />
            <select name="" id="">
              <option value="">category</option>
            </select>
          </form>
        </section>
        <section className="">
          <h1 className="text-center text-2xl font-bold">DISHES</h1>
          {
            dishes.map((dish) => (
              <DishCardComponent image={dish.image} key={dish.id} name={dish.name} price={dish.price}/>
            ))
          }
        </section>
      </main>
    </>
  );
};
