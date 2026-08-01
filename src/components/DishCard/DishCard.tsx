interface Props {
    image: string;
    name: string;
    price: number;
}

export const DishCard = ({ image, name, price }: Props) => {
    return (
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
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

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                        ${price}
                    </span>
                </div>

                <div className="flex gap-3">
                    <button className="flex-1 rounded-lg bg-black py-2.5 font-medium text-white transition hover:bg-gray-800">
                        Add
                    </button>

                    <button className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium transition hover:bg-gray-100">
                        Details
                    </button>
                </div>
            </div>
        </article>
    );
};