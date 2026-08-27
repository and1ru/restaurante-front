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
    
    case "owner":
      return <OwnerDashboard />

    case "admin":
      return <AdminDashboard />

    case "chef":
      return <ChefDashboard />

    case "waitrees":
      return <WaitressDashboard />

    case "receptionist":
      return <ReceptionistDashboard />
  }
};