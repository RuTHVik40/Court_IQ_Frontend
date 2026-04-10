import { NavLink } from "react-router-dom";
import { LayoutDashboard, Calendar, Activity, Settings, LogOut, Home } from "lucide-react";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition";

  const activeClass = "bg-white/5 text-white";

  return (
    <div className="w-[260px] h-screen bg-[#0b0f1a] border-r border-white/5 flex flex-col justify-between p-5">

      {/* LOGO */}
      <div>
        <h1 className="text-xl font-bold text-white tracking-wide mb-8">
          Court<span className="text-cyan-400">IQ</span>
        </h1>

        {/* NAV LINKS */}
        <div className="flex flex-col gap-2">

          <NavLink to="/app/dashboard" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink to="/app/court-status" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            <Home size={18} /> Court Status
          </NavLink>

          <NavLink to="/app/sessions" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            <Calendar size={18} /> Sessions
          </NavLink>

          <NavLink to="/app/court-setup" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
            <Activity size={18} /> Court Setup
          </NavLink>

        </div>

        {/* CTA BUTTON */}
        <button className="mt-8 w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition">
          BOOK A COURT
        </button>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
          <Settings size={18} /> Settings
        </div>
        <div className="flex items-center gap-3 text-gray-400 hover:text-red-400 cursor-pointer">
          <LogOut size={18} /> Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;