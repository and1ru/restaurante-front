import { dishes } from "../helper/dishes";
import { DishCardComponent } from "../components/dish-card-component";

export const WaitressPage = () => {
  return (
    <>
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
    </>
  );
};
