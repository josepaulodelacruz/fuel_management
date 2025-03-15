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
} from 'lucide-react'
import useToggleDrawer from '~/Hooks/Sidenav/useToggleDrawer'

/*
 * Sidebar sample 
 * */
const Sidebar = () => {
  const { isOpen } = useToggleDrawer();

  return (
    <div className="bg-blue-50 flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40/FFB000/000000.png?text=F"
            alt="Fortunewell Logo"
            className="mr-2"
          />
          <div
            style={{
              zIndex: isOpen ? '1' : '-1',
              transform: isOpen ? 'translateX(0px)' : 'translateX(-10px)',
              opacity: isOpen ? 1 : 0,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
          >
            <h1 className="text-lg font-bold text-blue-900">Fortunewell</h1>
            <p className="text-xs text-gray-600">
              Integrated Fuel Management System
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 ">
        <ul>
          <AdminNavItem />
          <NavItem
            icon={<LayoutDashboardIcon size={18} />}
            text="Dashboard"
            active
          />
          <NavItem
            icon={<FileTextIcon size={18} />}
            text="Sales Transactions"
          />
          <NavItem icon={<FuelIcon size={18} />} text="Fuel Management" />
          <NavItem icon={<WrenchIcon size={18} />} text="Service Management" />
          <NavItem
            icon={<PackageIcon size={18} />}
            text="Inventory Management"
          />
        </ul>
      </nav>
    </div>
  )
}

const NavItem = ({ icon, text, active = false, indented = false }) => {
  const { isOpen } = useToggleDrawer();

  return (
    <li>
      <a
        href="#"
        className={`flex items-center px-4 py-2 ${active ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-blue-50'} ${indented ? 'pl-8' : ''}`}
      >
        <span className="mr-3">{icon}</span>
        <span
          style={{
            transform: isOpen ? 'translateX(0px)' : 'translateX(-10px)',
            opacity: isOpen ? 1 : 0,
            transition: 'transform 0.3s ease, opacity 0.3s ease',
          }}
          className="text-sm">{text}</span>
      </a>
    </li>
  )
}

const AdminNavItem = () => {
  const { isOpen } = useToggleDrawer();

  return (
    <li className="flex flex-row items-center px-3">
      <span className='mr-2'>
        <UserIcon size={24} />
      </span>
      <div
        style={{
          transform: isOpen ? 'translateX(0px)' : 'translateX(-10px)',
          opacity: isOpen ? 1 : 0,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
        }}
      >
        <div className="flex items-center">
          <span className="font-medium text-gray-700">Alice Feeney</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <p className="text-xs text-gray-600">Admin</p>
      </div>
    </li>

  )
}

export default Sidebar;
