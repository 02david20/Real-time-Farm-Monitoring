// Import Layout
import { DefaultLayout } from "../components/Layouts";
// Import Route Pages

import Home from "../pages/Home";
// import SendFeedback from "../pages/SendFeedback";
import Feedbacks from "../pages/Feedbacks";
import LoginsReport from "../pages/LoginsReport";
// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/feedbacks", component: Feedbacks },
  { path: "/logins-report", component: LoginsReport },
];

//Require Login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
