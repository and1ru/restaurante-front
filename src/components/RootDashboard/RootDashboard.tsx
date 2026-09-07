import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { rootDashboard } from "../../helper/dashboardsActions"
import { ActionCard } from "../ActionCard/ActionCard"
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard"

export const RootDashboard = () => {
  const { auth: {name, role}} = useAuthContext()
    return(
        <>
        <HeaderDashboard />
        <main className="px-5">
        <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm my-8">
          <p className="text-gray-500 text-sm">
            Welcome again
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Hi, {name} 👋
          </h2>

          <p className="text-gray-600 mt-1">
            {role}
          </p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-4">
            {rootDashboard.map((element) => 
              <ActionCard 
                key={element.url}
                imagen={element.image} 
                title={element.title} 
                url={element.url}/>
              )}
        </section>
        </main>

        </>

    )
}
