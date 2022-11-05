// Import Layout
import { HeaderOnly } from "../components/Layouts"

// Import Route Pages
import HomePage from "../pages/Home"
import ManageFarm from "../pages/Manage farm"

// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
    {path: "/", component: HomePage },
    {path: "/sample", component: HomePage, layout:HeaderOnly },
    {path: "/manage_farm", component: ManageFarm}
];

//Require Login
const privateRoutes = [];

export {publicRoutes,privateRoutes};
