import reservation from "../assets/images/reservation.png";
import restaurant from "../assets/images/restaurant.png";
import headquarter from "../assets/images/headquarter.png";
import waitress from "../assets/images/waitress.png";
import chef from "../assets/images/chef.png";
import recruitment from "../assets/images/recruitment.png";
import metric from "../assets/images/metric.png";
import friedRice from "../assets/images/fried-rice.png";
import hire from "../assets/images/hire.png";
import category from "../assets/images/category.png";

export const rootDashboard = [
  {
    title: "Create a new restaurant",
    image: restaurant,
    url: "/private/create-restaurant",
  },
]

export const receptionistDashboard = [
  {
    title: "Book",
    image: reservation,
    url: "/private/book",
  },
  {
    title: "Confirm Book",
    image: "",
    url: "/private/confirmBook"
  }
]

export const chefDashboard = [
  {
    title: "Chef",
    image: chef,
    url: "/private/chef",
  },
]

export const waitressDashboard = [
  {
    title: "Waitress",
    image: waitress,
    url: "/private/waitress",
  },
]

export const adminDashboard = [
    {
    title:"Hire",
    image: hire,
    url: "/private/hire"
  },
  {
    title: "Manage employees",
    image: recruitment,
    url: "/private/manage-employee",
  },
  {
    title: "Statistics",
    image: metric,
    url: "/private/stadistics",
  },
]

export const ownerDashboard = [
  {
    title: "New branch",
    image: headquarter,
    url: "/private/create-sede",
  },
  {
    title: "New Category",
    image: category,
    url: "/private/create-category",
  },
  {
    title:"Hire",
    image: hire,
    url: "/private/hire"
  },
  {
    title: "Manage employees",
    image: recruitment,
    url: "/private/manage-employee",
  },
  {
    title: "Statistics",
    image: metric,
    url: "/private/stadistics",
  },
  {
    title: "New Dish",
    image: friedRice,
    url: "/private/create-dish",
  },
]