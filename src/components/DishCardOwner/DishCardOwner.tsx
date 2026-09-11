interface Props {
    image: string;
    name: string;
}

export const DishCardOwner = ({ image, name }: Props) => {
    return (
        <>
            <div className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                <img
                    src={image}
                    alt={`Dish ${name}`}
                    className="h-52 w-70 object-cover"
                />
                <div className="space-y-4 p-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">
                            {name}
                        </h2>
                    </div>
                    <button className="bg-gray-700 w-full text-white rounded-lg p-2">Update</button>
                </div>
            </div>
        </>

    );
};