import { useDishesOwner } from "../../customHooks/useDishesOwner/useDishesOwner";
import { DishCardOwner } from "../DishCardOwner/DishCardOwner";

export const DishesOwner = () => {
    const { data } = useDishesOwner()
    console.log(data)
  return (
    <>
        {data?.result.map((dish) => <DishCardOwner image={dish.image_url} name={dish.name} key={dish.id}/>)}
    </>
  );
};
