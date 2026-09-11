import { DishesAdmin } from "../../components/DishesAdmin/DishesAdmin";
import { DishesOwner } from "../../components/DishesOwner/DishesOwner";
import { Header } from "../../components/Header/Header";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export const Dishes = () => {
    const { auth: {role}} = useAuthContext()
  return (
    <>
        <Header />
        <main className="p-10 flex flex-col gap-10">
            <section>
                <h2 className="text-center text-2xl font-bold">Dishes</h2>
            </section>
            <section className="flex gap-5 flex-wrap">
                { role === "OWNER" && <DishesOwner/> }
                { role === "ADMIN" && <DishesAdmin />}
            </section>
        </main>    
    </>
  );
};
