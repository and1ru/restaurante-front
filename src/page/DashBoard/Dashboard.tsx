import { AdminDashboard } from "../../components/AdminDashboard/AdminDashboard";
import { ChefDashboard } from "../../components/ChefDashboard/ChefDashboard";
import { OwnerDashboard } from "../../components/OwnerDashboard/OwnerDashboard";
import { ReceptionistDashboard } from "../../components/ReceptionistDashboard/ReceptionistDashboard";
import { RootDashboard } from "../../components/RootDashboard/RootDashboard";
import { WaitressDashboard } from "../../components/WaitressDashboard/WaitressDashboard";

export const DashboardPage = () => {
  return (
      <>
        <OwnerDashboard />
        <RootDashboard />
        <WaitressDashboard />
        <ChefDashboard />
        <ReceptionistDashboard />
        <AdminDashboard />
      </>
  );
};