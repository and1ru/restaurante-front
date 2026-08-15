import { ownerDashboard } from "../../helper/dashboardsActions"
import { ActionCard } from "../ActionCard/ActionCard"
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard"

export const OwnerDashboard = () => {
    return(
        <>
        <HeaderDashboard />
        <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-8">
          <p className="text-gray-500 text-sm">
            Bienvenido de nuevo
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Hola, Andrés 👋
          </h2>

          <p className="text-gray-600 mt-1">
            Administrador • Medellín
          </p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-4">
            {ownerDashboard.map((element) => (<ActionCard imagen={element.image} title={element.title} url={element.url}/>))}
        </section>
        </>

    )
}
