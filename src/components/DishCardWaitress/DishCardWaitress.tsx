import { useDishCart } from "../../context/WaitressCart/WaitressCart.store";

interface Props {
    image: string;
    name: string;
    price: number
    id: number
}

export const DishCardWaitress = ({ image, name, price, id }: Props) => {
    const add = useDishCart((state) => state.add)
    
    const handleClick = () => {
        add({
            id,
            image,
            name,
            price,
            quantity: 1
        })
    }

    return (
        <div className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}>
            <img
                src={image}
                alt={`Dish ${name}`}
                className="h-52 w-full object-cover"
            />
            <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {name}
                    </h2>
                    <p>{price}</p>
                </div>
            <button 
                onClick={handleClick}
                className="bg-gray-700 border w-full p-2 rounded-lg text-white hover:bg-gray-800">Agregar</button>
            </div>
        </div>
    );
};
