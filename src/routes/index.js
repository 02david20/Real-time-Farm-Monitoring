// Import Layout

// Import Route Pages

import Tasking from "../pages/Manage farm/Tasking"
import Setting_pump from "../pages/Manage farm/Setting pump"
import Setting from "../pages/Setting"
import History from "../pages/History"
import HomePage from "../pages/Home";



// Not Required Login
// layout:null --> No Layout
const publicRoutes = [

    {path: "/", component: HomePage },
    {path: "/sample", component: HomePage},
    {path: "/sample/setting", component: HomePage},
    {path: "/manage_farm", component: Tasking},
    {path: "/manage_farm/tasking", component: Tasking},
    {path: "/manage_farm/setting-pump", component: Setting_pump},
    {path: "/field/setting", component: Setting},
    {path: "/history", component: History },
]


//Require Login
const privateRoutes = [];

export {publicRoutes,privateRoutes};
