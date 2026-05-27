interface Props {
    image:string;
    key: number;
    name: string;
    price: number
}

export const DishCardComponent = ({image, key, name, price}:Props) => {
  return (
    <div key={key} className="shadow-xl shadow-black p-4 w-50 mx-auto flex flex-col gap-3 rounded-lg">
        <img src={image} alt={`imagen ${name} dish`} className="w-full h-30 rounded-lg" />
        <p>{name}</p>
        <p>{price}$</p>
        <button className="bg-green-500 w-full p-2 rounded-lg text-white font-bold">Agregar</button>
        <button className="bg-blue-500 w-full p-2 rounded-lg text-white font-bold">Ver mas</button>
    </div>
  );
};