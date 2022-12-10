import React from "react";
// Import Layout
import { DefaultLayout, ManageFarmLayout } from "../components/Layouts";
// Import Route Pages

import Tasking from "../pages/Manage farm/Tasking";
import Setting_pump from "../pages/Manage farm/Setting pump";
import Setting from "../pages/Setting";
import History from "../pages/History";
import Home from "../pages/Home";
import Fields from "../pages/Fields";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Forumn from "../pages/Forumn";
import Dashboard from "../pages/Dashboard";
import PostList from "../pages/Post/PostList";
import PostDetail from "../pages/Post/PostDetail";
import Account from "../pages/Account";
import FeedbackForm from "../pages/SendFeedback";
import SendFeedback from "../pages/SendFeedback";
// Not Required Login
// layout:null --> No Layout
const publicRoutes = [
  { path: "/", component: Login, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: Signup, layout: null },
  { path: "/manage_farm", component: Tasking, layout: DefaultLayout },
  { path: "/manage_farm/tasking", component: Tasking, layout: DefaultLayout },
  {
    path: "/manage_farm/setting-pump",
    component: Setting_pump,
    layout: DefaultLayout,
  },
  { path: "/fields", component: Fields },
  { path: "/field/setting", component: Setting },
  { path: "/field/:id", component: Home, layout: ManageFarmLayout },
  { path: "/field/dashboard", component: Dashboard },
  { path: "/history", component: History },
  { path: "/forumn", component: Forumn },
  { path: "/field/dashboard", component: Dashboard },
  { path: "/forumn/forumn-title", component: PostList },
  { path: "/forumn/forumn-title/post-title", component: PostDetail },
  { path: "/account", component: Account },
  { path: "/SendFeedback", component: SendFeedback},
];

//Require Login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
