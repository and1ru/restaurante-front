import { useDishesOwner } from "../../customHooks/useDishesOwner/useDishesOwner";
import { DishCardOwner } from "../DishCardOwner/DishCardOwner";

export const DishesOwner = () => {
  const { data, isLoading, isError } = useDishesOwner();
  console.log(data);
  return (
    <>
      {isLoading && (
        <p className="bg-blue-300 text-center p-3 rounded-lg">Loading...</p>
      )}
      {isError && (
        <p className="bg-red-300 text-center p-3 rounded-lg">
          Something went wrong
        </p>
      )}
      {data?.result.length === 0 ? (
        <p className="bg-blue-300 text-center p-3 rounded-lg">No dishes yet</p>
      ) : (
        data?.result.map((dish) => (
          <DishCardOwner
            image={dish.image_url}
            name={dish.name}
            key={dish.id}
          />
        ))
      )}
    </>
  );
};
