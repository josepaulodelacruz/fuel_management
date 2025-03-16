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
    route(StringRoutes.dashboard, "./Pages/Dashboard/index.jsx"),
    route(StringRoutes.salesTransactions, "./Pages/SalesTransactions/index.jsx"),
    route(StringRoutes.fuelManagement, "./Pages/FuelManagement/index.jsx"),
    route(StringRoutes.serviceManagement, "./Pages/ServiceManagement/index.jsx"),
    route(StringRoutes.inventoryManagement, "./Pages/InventoryManagement/index.jsx"),
  ])
] satisfies RouteConfig;
