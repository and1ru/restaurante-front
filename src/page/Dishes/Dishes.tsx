import { DishCard } from "../../components/DishCard/DishCard";
import { Header } from "../../components/Header/Header";
import { useGetDishes } from "../../customHooks/useGetDishes/useGetDishes";

export const Dishes = () => {
    const { data } = useGetDishes()
    console.log(data)
  return (
    <>
        <Header />
        <main className="p-10 flex flex-col gap-10">
            <section>
                <h2 className="text-center text-2xl font-bold">Dishes</h2>
            </section>
            <section className="flex gap-5 flex-wrap">
                { data?.result.map((dish) => 
                    <DishCard image={dish.image_url} name={dish.name} key={dish.id} inBranch={dish.is_in_branch} id={dish.id} price={dish.price} branchDishId={dish.branchDishId}/>
                )}
            </section>
        </main>    
    </>
  );
};
