import { useNavigate } from "react-router-dom";

interface Props {
    imagen: string;
    title: string;
    url: string;
}

export const TargetDashboardComponent = ({imagen, title, url}:Props) => {
    const navigate = useNavigate()
  return (
    <div 
    onClick={() => navigate(url)}
    className="shadow-lg shadow-black/50 w-40 py-3 px-2 rounded-lg hover:shadow-black/70">
        <img src={imagen} alt="" className="w-full h-20 rounded-lg" />
        <p>{title}</p>
    </div>
  );
};
