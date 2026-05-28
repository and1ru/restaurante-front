import { useNavigate } from "react-router-dom";
import { style } from "../helper/style";

interface Props {
  imagen: string;
  title: string;
  url: string;
}

export const TargetDashboardComponent = ({ imagen, title, url }: Props) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(url)} className={style.card}>
      <img src={imagen} alt="" className="w-full h-20 rounded-lg" />
      <p>{title}</p>
    </div>
  );
};
