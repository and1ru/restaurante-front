import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../page/home-page";
import { LoginPage } from "../page/login-page";
import { RegisterPage } from "../page/register-page";
import { DashboardPage } from "../page/dashboard-page";
import { CreateRestaurantPage } from "../page/create-restaurant-page";
import { StadisticsPage } from "../page/stadistics-page";
import { ManageEmployeePage } from "../page/manage-employee-page";
import { CreateSedePage } from "../page/create-sede-page";
import { CreateDishPage } from "../page/create-dish-page";
import { ChefPage } from "../page/chef-page";
import { Root } from "../page/root";
import { WaitressPage } from "../page/waitress-page";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/private/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/private/",
    element: <Root />,
    children: [
      {
        path: "create-restaurant",
        element: <CreateRestaurantPage />,
      },
      {
        path: "create-sede",
        element: <CreateSedePage />,
      },
      {
        path: "stadistics",
        element: <StadisticsPage />,
      },
      {
        path: "manage-employee",
        element: <ManageEmployeePage />,
      },

      {
        path: "create-dish",
        element: <CreateDishPage />,
      },
      {
        path: "chef",
        element: <ChefPage />,
      },
      {
        path: "waitress",
        element: <WaitressPage/>
      }
    ],
  },
]);
