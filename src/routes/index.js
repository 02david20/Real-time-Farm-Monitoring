// Import Layout


// Import Route Pages
import HomePage from "../pages/Home"
import ManageFarm from "../pages/Manage farm"

// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
    {path: "/", component: HomePage },
    {path: "/sample", component: HomePage},
    {path: "/sample/setting", component: HomePage},

    {path: "/manage_farm", component: ManageFarm}
]

//Require Login
const privateRoutes = [];

export {publicRoutes,privateRoutes};
