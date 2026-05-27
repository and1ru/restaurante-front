export const CreateRestaurantPage = () => {
  return (
    <>
        <section className="shadow-xl shadow-black/60 p-10">
          <h1 className="text-center text-2xl font-bold">Crear restaurante</h1>
          <form className="flex flex-col">
            <input 
            className="shadow-xl p-2 rounded-lg my-7"
            type="text" placeholder="nombre restaurante"/>
            <button className="bg-green-500 p-2 rounded-lg font-bold">crear</button>
          </form>
        </section>
    </>
  );
};
