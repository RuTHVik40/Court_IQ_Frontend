import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex bg-[#0b0f1a] text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 h-screen flex flex-col overflow-hidden">

        <Topbar />

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />   {/* 🔥 THIS IS IMPORTANT */}
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;