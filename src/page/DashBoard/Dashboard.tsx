import { AdminDashboard } from "../../components/AdminDashboard/AdminDashboard";
import { ChefDashboard } from "../../components/ChefDashboard/ChefDashboard";
import { OwnerDashboard } from "../../components/OwnerDashboard/OwnerDashboard";
import { ReceptionistDashboard } from "../../components/ReceptionistDashboard/ReceptionistDashboard";
import { RootDashboard } from "../../components/RootDashboard/RootDashboard";
import { WaitressDashboard } from "../../components/WaitressDashboard/WaitressDashboard";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export const DashboardPage = () => {
  const { auth:{role} } = useAuthContext()

  switch (role) {
    case "ROOT":
      return <RootDashboard />
    
    case "OWNER":
      return <OwnerDashboard />

    case "ADMIN":
      return <AdminDashboard />

    case "CHEF":
      return <ChefDashboard />

    case "WAITRESS":
      return <WaitressDashboard />

    case "RECEPTIONIST":
      return <ReceptionistDashboard />
  }
};