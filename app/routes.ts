import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import StringRoutes from "./Constants/StringRoutes.js";

export default [
  layout("./Layouts/DashboardLayout.jsx", [
    index("./Pages/Dashboard/index.jsx"), // "/" 
    route(StringRoutes.fuelManagement, "./Pages/FuelManagement/index.jsx", [
      index("./SubRoutes/FuelManagement/FuelMaster.jsx"), // fuelManagement index (fuelMaster)

      //fuelManagement subroutes
      route("fuelPrice", "./SubRoutes/FuelManagement/FuelPrice.jsx"),
      route("fuelDelivery", "./SubRoutes/FuelManagement/FuelDelivery.jsx"),
      route("lubricants", "./SubRoutes/FuelManagement/Lubricants.jsx"),
    ]),
  ]),
] satisfies RouteConfig;
