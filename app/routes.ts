import { type RouteConfig, index, route } from "@react-router/dev/routes";
import StringRoutes from "./Constants/StringRoutes.js";

export default [
  //temporary initial screen
  index("routes/home.tsx"),


  //pattern
  route(StringRoutes.dev, "Pages/Dev/index.jsx")
] satisfies RouteConfig;
