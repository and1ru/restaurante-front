import { useDishCart } from "../../context/WaitressCart/WaitressCart.store";

interface Props {
  image: string;
  name: string;
  price: number;
  id: number,
  quantity:number
}

export const CartDish = ({ image, name, price, id, quantity }: Props) => {
  const remove = useDishCart((state) => state.remove)
  const updateQuantity = useDishCart((state) => state.updateQuantity)
  const dish = useDishCart((state) => state.dishes).find((item) => item.id === id )!

  const handleClick = () => {
    remove(id)
  }

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if(value<1) return
    updateQuantity(id, value)
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 p-2">
      <img src={image} alt={name}
        className="h-14 w-14 rounded-md object-cover bg-gray-100"
      />

      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-gray-900">
          {name}
        </p>
        <p className="text-sm font-semibold text-gray-700 my-2">
          ${price}
        </p>
        <button onClick={handleClick} className="bg-red-500 p-1 rounded-lg">eliminar</button>
      </div>
      <input
        type="number"
        min="1"
        onChange={handleQuantity}
        value={dish.quantity}
        defaultValue={quantity}
        className="w-14 rounded-md border border-gray-300 px-2 py-1 text-center text-sm outline-none transition focus:border-black"
      />
    </div>
  );
};