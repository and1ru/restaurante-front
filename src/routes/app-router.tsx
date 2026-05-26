import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../page/home-page";
import { LoginPage } from "../page/login-page";
import { RegisterPage } from "../page/register-page";
import { DashboardPage } from "../page/dashboard-page";
import { CreateRestaurantPage } from "../page/create-restaurant-page";
import { CreateSedePage } from "../page/create-sede-page";

export const routes = createBrowserRouter([
    {
       path:"",
       element: <HomePage/> 
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/private/dashboard",
        element: <DashboardPage/>
    },
    {
        path: "/private/create-restaurant",
        element: <CreateRestaurantPage/>
    },
    {
        path: "/private/create-sede",
        element: <CreateSedePage/>
    }
])