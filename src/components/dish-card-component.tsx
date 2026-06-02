import { style } from "../helper/style";

interface Props {
    image:string;
    key: number;
    name: string;
    price: number
}

export const DishCardComponent = ({image, key, name, price}:Props) => {
  return (
    <div key={key} className={style.cardDish}>
        <img src={image} alt={`imagen ${name} dish`} className="w-full h-40 rounded-lg border" />
        <p>{name}</p>
        <p>{price}$</p>
        <button className={style.button}>Agregar</button>
        <button className={style.buttonSecondary}>Ver mas</button>
    </div>
  );
};