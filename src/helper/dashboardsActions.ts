import reservation from "../assets/images/reservation.png";
import restaurant from "../assets/images/restaurant.png";
import headquarter from "../assets/images/headquarter.png";
import waitress from "../assets/images/waitress.png";
import chef from "../assets/images/chef.png";
import recruitment from "../assets/images/recruitment.png";
import metric from "../assets/images/metric.png";
import friedRice from "../assets/images/fried-rice.png";

export const dashboardActions = [
  {
    title: "Book",
    image: reservation,
    url: "/private/book",
  },
  {
    title: "Create a new restaurant",
    image: restaurant,
    url: "/private/create-restaurant",
  },
  {
    title: "Create a new sede",
    image: headquarter,
    url: "/private/create-sede",
  },
  {
    title: "Waitress",
    image: waitress,
    url: "/private/waitress",
  },
  {
    title: "Chef",
    image: chef,
    url: "/private/chef",
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
];