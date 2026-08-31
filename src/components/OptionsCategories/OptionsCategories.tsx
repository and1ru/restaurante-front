import { useGetCategories } from "../../customHooks/useGetCategories/useGetCategories";

export const OptionsCategories = () => {
  const { data } = useGetCategories()
  return (
    <>
        {data?.result.map((category) => (<option key={category.id} value={category.id}>{category.name}</option>))}
    </>
  );
};
