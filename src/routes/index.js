// Import Layout


// Import Route Pages
import HomePage from "../pages/Home"
import Tasking from "../pages/Manage farm/Tasking";
import Setting_pump from "../pages/Manage farm/Setting pump";
import FeedbackForm from "../pages/SendFeedback/FeedbackForm";


// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/sample", component: HomePage},
    { path: "/sample/setting", component: HomePage},
    { path: "/SendFeedback/FeedbackForm", component: FeedbackForm},
]

const privateRoutes = []

export {publicRoutes,privateRoutes}
//Require Login
