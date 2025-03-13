import React from 'react'
import {
  UserIcon,
  LayoutDashboardIcon,
  FileTextIcon,
  FuelIcon,
  WrenchIcon,
  PackageIcon,
  Settings2Icon,
  Users2Icon,
  MapPinIcon,
  GlobeIcon,
} from 'lucide-react'


/*
 * Sidebar sample 
 * */
const Sidebar = () => {
  return (
    <div className="w-60 bg-blue-50 flex flex-col h-full ">
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
      <div className="p-4 ">
        <div className="flex items-center">
          <UserIcon className="mr-2 text-gray-600" size={24} />
          <div>
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
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul>
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
          <NavItem icon={<FileTextIcon size={18} />} text="Accounting" />
          <li className="mt-4">
            <div className="px-4 py-2">
              <div className="flex items-center justify-between text-gray-600">
                <span className="text-sm font-medium">Setup</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
            </div>
          </li>
          <NavItem icon={<MapPinIcon size={18} />} text="Stations" indented />
          <NavItem
            icon={<GlobeIcon size={18} />}
            text="Global Records"
            indented
          />
          <li className="mt-4">
            <div className="px-4 py-2">
              <div className="flex items-center justify-between text-gray-600">
                <span className="text-sm font-medium">Settings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
            </div>
          </li>
          <NavItem icon={<Users2Icon size={18} />} text="Users" indented />
        </ul>
      </nav>
    </div>
  )
}

const NavItem = ({ icon, text, active = false, indented = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center px-4 py-2 ${active ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-blue-50'} ${indented ? 'pl-8' : ''}`}
      >
        <span className="mr-3">{icon}</span>
        <span className="text-sm">{text}</span>
      </a>
    </li>
  )
}

export default Sidebar

