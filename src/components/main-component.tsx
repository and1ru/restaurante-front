import { Outlet } from "react-router-dom";

export const MainComponent = () => {
  return (
    <main className="p-6 max-w-7xl mx-auto ">
        <Outlet></Outlet>
    </main>
  );
};
