import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import StringRoutes from "./Constants/StringRoutes.js";

export default [
  index("./Pages/Dev/index.jsx"),

  /*
   * - Layout
   * add your page/views inside the layout
   */
  layout("./Layouts/DasboardLayout.jsx", [
    //initial dashboard page
    route(StringRoutes.dashboard, "./Pages/Dashboard/index.jsx")
  ])
  
] satisfies RouteConfig;
