// Import Layout
// import { HeaderOnly } from "../components/Layouts"

// Import Route Pages
import HomePage from "../pages/Home"

// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
    {path: "\\", component: HomePage },
    {path: "\sample", component: HomePage }
]

export const privateRoutes = []

export default {publicRoutes,privateRoutes}
//Require Login
