interface Props {
    image:string;
    name:string;
    price:number;
    quantity:number;

}
export const CartDish = ({ image, name, price, quantity = 1 }:Props) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 p-2">
      <img
        src={image}
        alt={name}
        className="h-14 w-14 rounded-md object-cover flex-shrink-0 bg-gray-100"
      />
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-gray-900">
          {name}
        </p>
        <p className="text-sm font-semibold text-gray-700">
          ${price}
        </p>
      </div>
      <input
        type="number"
        min="1"
        defaultValue={quantity}
        className="w-14 rounded-md border border-gray-300 px-2 py-1 text-center text-sm outline-none transition focus:border-black"
      />
    </div>
  );
};