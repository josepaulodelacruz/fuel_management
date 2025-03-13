import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import StringRoutes from "./Constants/StringRoutes.js";

export default [
    //temporary initial screen
    index("routes/home.tsx"),

  /*
   * - Layout
   * add your page/views inside the layout
   */
  //pattern
  route(StringRoutes.dev, "Pages/Dev/index.jsx"),
  route(StringRoutes.fuelManagement, "Pages/FuelManagement.jsx")

] satisfies RouteConfig;
