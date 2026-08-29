import reservation from "../assets/images/reservation.png";
import restaurant from "../assets/images/restaurant.png";
import headquarter from "../assets/images/headquarter.png";
import waitress from "../assets/images/waitress.png";
import chef from "../assets/images/chef.png";
import recruitment from "../assets/images/recruitment.png";
import metric from "../assets/images/metric.png";
import friedRice from "../assets/images/fried-rice.png";

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
    image: "",
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
    title: "Create a new sede",
    image: headquarter,
    url: "/private/create-sede",
  },
  {
    title:"Hire",
    image: "",
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
    title: "Create dish",
    image: friedRice,
    url: "/private/create-dish",
  },
]