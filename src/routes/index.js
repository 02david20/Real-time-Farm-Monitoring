// Import Layout

// Import Route Pages

import Tasking from "../pages/Manage farm/Tasking";
import Setting_pump from "../pages/Manage farm/Setting pump";
import Setting from "../pages/Setting";
import History from "../pages/History";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forumn from "../pages/Forumn"

// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
  { path: "/", component: Login, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: Signup, layout: null },
  { path: "/manage_farm", component: Tasking },
  { path: "/manage_farm/tasking", component: Tasking },
  { path: "/manage_farm/setting-pump", component: Setting_pump },
  { path: "/field/setting", component: Setting },
  { path: "/field", component: Home },
  { path: "/history", component: History },
  { path: "/history", component: Forumn }
];

//Require Login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
