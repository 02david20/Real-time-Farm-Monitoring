// Import Layout

// Import Route Pages
import HomePage from "../pages/Home";
import History from "../pages/History";

// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/sample", component: HomePage },
  { path: "/sample/setting", component: HomePage },
  { path: "/history", component: History },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
//Require Login
