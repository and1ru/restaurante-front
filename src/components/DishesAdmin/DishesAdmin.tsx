import { useAdminDishes } from "../../customHooks/useDishesAdmin/useDishesAdmin";
import { DishCardAmin } from "../DishCardAdmin/DishCardAdmin";

export const DishesAdmin = () => {
  const { data } = useAdminDishes();
  console.log(data)
  console.log();
  return (
    <>
      {data?.result.map((dish) => (
        <DishCardAmin
          key={dish.id}
          price={dish.price}
          branchDishId={dish.branchId}
          id={dish.id}
          image={dish.image_url}
          name={dish.name}
          inBranch={dish.inBranch}
        />
      ))}
    </>
  );
};
