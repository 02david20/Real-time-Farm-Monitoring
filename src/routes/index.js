// Import Layout

// Import Route Pages


import Setting from "../pages/Setting"
import History from "../pages/History"
import HomePage from "../pages/Home";


// Not Required Login
// layout:null --> No Layout
const publicRoutes = [

    {path: "/", component: HomePage },
    {path: "/sample", component: HomePage},
    {path: "/sample/setting", component: HomePage},
    {path: "/field/setting", component: Setting},
    {path: "/history", component: History },
]


const privateRoutes = [];

export { publicRoutes, privateRoutes };
//Require Login
