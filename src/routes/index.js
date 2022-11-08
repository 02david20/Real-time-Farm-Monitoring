// Import Layout


// Import Route Pages
import HomePage from "../pages/Home"
import Tasking from "../pages/Manage farm/Tasking"

// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
    {path: "/", component: HomePage },
    {path: "/sample", component: HomePage},
    {path: "/sample/setting", component: HomePage},

    {path: "/manage_farm/tasking", component: Tasking},
    {path: "/manage_farm/setting-pump", component: Tasking}
]

//Require Login
const privateRoutes = [];

export {publicRoutes,privateRoutes};
