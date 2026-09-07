import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { ownerDashboard } from "../../helper/dashboardsActions"
import { ActionCard } from "../ActionCard/ActionCard"
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard"

export const OwnerDashboard = () => {
  const { auth:{name}} = useAuthContext()
    return(
        <>
        <HeaderDashboard />
        <main className="px-10 py-5">
          <section className="rounded-xl p-8 shadow-sm mb-8">
            <p className="text-gray-500 text-sm">
              Welcome Again
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Hi, {name} 👋
            </h2>

            <p className="text-gray-600 mt-1">
              owner
            </p>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {ownerDashboard.map((element) => 
                <ActionCard 
                  key={element.url}
                  imagen={element.image} 
                  title={element.title} 
                  url={element.url}
                />
              )}
          </section>
        </main>
        </>

    )
}
