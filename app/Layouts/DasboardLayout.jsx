import Sidebar from "~/Components/Sidebar";
import Navbar from "~/Components/Navbar";
import { Outlet } from "react-router";

//layout for the whole admin dashboard
const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout;
