import { dishes } from "../helper/dishes";
import { DishCardComponent } from "../components/dish-card-component";
import { SectionComponent } from "../components/section-component";

export const WaitressPage = () => {
  return (
    <>
        <SectionComponent>
          <form>
            <input 
            className="p-2 shadow-xl rounded-lg w-full"
            type="search" placeholder="looking for dishes" />
            <select name="" id="">
              <option value="">category</option>
            </select>
          </form>
        </SectionComponent>
        <section className="flex flex-col gap-10 md:grid md:grid-cols-2 xl:grid-cols-5">
          <h1 className="text-center text-2xl font-bold mb-5 md:col-span-2 xl:col-span-5">DISHES</h1>
          {
            dishes.map((dish) => (
              <DishCardComponent image={dish.image} key={dish.id} name={dish.name} price={dish.price}/>
            ))
          }
        </section>
    </>
  );
};
