import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const Root = () => {
  return (
    <>
      <Header/>
          <main className="p-6 max-w-7xl mx-auto md:px-20 md:py-20">
        <Outlet></Outlet>
    </main>
    </>
  );
};
