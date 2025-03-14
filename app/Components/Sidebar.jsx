import { NavLink } from "react-router-dom";
import StringRoutes from "~/Constants/StringRoutes"; 
import {
  UserIcon,
  LayoutDashboardIcon,
  FileTextIcon,
  FuelIcon,
  WrenchIcon,
  PackageIcon,
  Users2Icon,
  MapPinIcon,
  GlobeIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-60 bg-blue-50 flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40/FFB000/000000.png?text=F"
            alt="Fortunewell Logo"
            className="mr-2"
          />
          <div>
            <h1 className="text-lg font-bold text-blue-900">Fortunewell</h1>
            <p className="text-xs text-gray-600">
              Integrated Fuel Management System
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <NavItem to={`${StringRoutes.dashboard}`} icon={<LayoutDashboardIcon size={18} />} text="Dashboard" />
          <NavItem to="/salesTransaction" icon={<FileTextIcon size={18} />} text="Sales Transactions" />
          <NavItem to={`/${StringRoutes.fuelManagement}`} icon={<FuelIcon size={18} />} text="Fuel Management" />

          <NavItem to="/serviceManagement" icon={<WrenchIcon size={18} />} text="Service Management" />
          <NavItem to="/inventoryManagement" icon={<PackageIcon size={18} />} text="Inventory Management" />
          <NavItem to="/accounting" icon={<FileTextIcon size={18} />} text="Accounting" />

          <li className="mt-4">
            <div className="px-4 py-2">
              <div className="flex items-center justify-between text-gray-600">
                <span className="text-sm font-medium">Setup</span>
              </div>
            </div>
          </li>
          <NavItem to="/stations" icon={<MapPinIcon size={18} />} text="Stations" indented />
          <NavItem to="/globalRecords" icon={<GlobeIcon size={18} />} text="Global Records" indented />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text, active = false, indented = false }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 ${
            isActive ? "bg-blue-100 text-blue-800" : "text-gray-600 hover:bg-blue-50"
          } ${indented ? "pl-8" : ""}`
        }
      >
        <span className="mr-3">{icon}</span>
        <span className="text-sm">{text}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;
