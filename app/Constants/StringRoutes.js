
class StringRoutes {
  static dev = 'dev';
  static dashboard = 'dashboard';
  static salesTransactions = 'sales-transactions';

  static fuelManagement = 'fuel-management';
  static fuelPrice = 'fuel-management/fuelPrice';
  static fuelDelivery = 'fuel-management/fuelDelivery';
  static lubricants = 'fuel-management/lubricants';


  static serviceManagement = 'service-management';
  static inventoryManagement = 'inventory-management';
  


  // Highlight the selected route depending on the current URL
  highlightRoute = (routeKey = "") => {
    if (routeKey.includes(StringRoutes.dashboard)) {
      return "Dashboard";
    } else if (routeKey.includes(StringRoutes.salesTransactions)) {
      return "Sales Transactions";
    } else if (routeKey.includes(StringRoutes.fuelManagement)) {
      return "Fuel Management";
    } else if (routeKey.includes(StringRoutes.serviceManagement)) {
      return "Service Management";
    } else if (routeKey.includes(StringRoutes.inventoryManagement)) {
      return "Inventory Management";
    } else {
      return "Unknown Route";
    }
  };
}

export default StringRoutes;
