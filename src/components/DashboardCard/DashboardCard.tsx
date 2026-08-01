import { useNavigate } from "react-router-dom";

interface Props {
  imagen: string;
  title: string;
  url: string;
}

export const DashboardCard = ({
  imagen,
  title,
  url,
}: Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(url)}
      className="
        w-full
        bg-white
        border
        border-gray-200
        rounded-xl
        p-6
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        flex-col
        items-center
        gap-4
        cursor-pointer
      "
    >
      <img
        src={imagen}
        alt={title}
        className="w-16 h-16 object-contain"
      />

      <h3 className="text-gray-800 font-semibold text-lg text-center">
        {title}
      </h3>
    </button>
  );
};