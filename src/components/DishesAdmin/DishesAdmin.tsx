import { useAdminDishes } from "../../customHooks/useDishesAdmin/useDishesAdmin";
import { DishCardAmin } from "../DishCardAdmin/DishCardAdmin";

export const DishesAdmin = () => {
  const { data, isError, isLoading } = useAdminDishes();
  return (
    <>
      {isLoading && <p className="bg-blue-300 text-center p-3 rounded-lg">Loading...</p>}
      {isError && <p className="bg-red-300 text-center p-3 rounded-lg">Something went wrong</p>}
      {data?.result.length === 0 ? <p className="bg-blue-300 text-center p-3 rounded-lg">No dishes yet</p> :
        data?.result.map((dish) => (
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
