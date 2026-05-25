import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../page/home-page";

export const routes = createBrowserRouter([
    {
       path:"/home",
       element: <HomePage/> 
    }
])