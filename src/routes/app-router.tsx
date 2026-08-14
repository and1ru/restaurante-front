import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../page/Home/Home";
import { LoginPage } from "../page/Login/Login";
import { RegisterPage } from "../page/Register/Register";
import { DashboardPage } from "../page/DashBoard/Dashboard";
import { BookPage } from "../page/Book/Book";
import { CreateRestaurantPage } from "../page/CreateRestaurant/CreateRestaurant";
import { CreateSedePage } from "../page/CreateBranch/CreateBranch";
import { StadisticsPage } from "../page/Statistics/Statistics";
import { ManageEmployeePage } from "../page/Employees/Employees";
import { CreateDishPage } from "../page/CreateDish/CreateDish";
import { ChefPage } from "../page/Chef/Chef";
import { WaitressPage } from "../page/Waitress/Waitress";
import { Root } from "../page/Root/Root";
import { Custommer } from "../page/Custommer/Custommer";
import { NotFound } from "../page/NotFound/NotFound";
import { Reservation } from "../page/Reservation/Reservation";
import { ConfirmBook } from "../page/ConfirmBook/ConfirmBook";

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
    path: "/menu/:menuId",
    element: <Custommer />
  },
  {
    path: "/private/",
    element: <Root />,
    children: [
      {
        path: "book",
        element: <BookPage/>
      },
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
      },
      {
        path: "reservation",
        element: <Reservation />
      },
      {
        path: "confirmBook",
        element: <ConfirmBook />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);
