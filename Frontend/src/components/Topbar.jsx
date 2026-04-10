import { Bell, HelpCircle, Search, Settings, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Dropdown from "./dashboard/DropDown";
import DropdownItem from "./dashboard/DropdownItem";
const Topbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const notifRef = useRef();
  const helpRef = useRef();
  const profileRef = useRef();

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handler = (e) => {
      if (
        !notifRef.current?.contains(e.target) &&
        !helpRef.current?.contains(e.target) &&
        !profileRef.current?.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-8 py-4 border-b border-white/5">

      {/* SEARCH */}
      <div className="w-[420px] relative">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search sessions, players, or courts..."
          className="w-full bg-black/60 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-cyan-400 transition"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 relative">

        {/* NOTIFICATIONS */}
        <div ref={notifRef} className="relative">
          <div
            onClick={() =>
              setActiveDropdown(activeDropdown === "notif" ? null : "notif")
            }
            className="cursor-pointer text-gray-400 hover:text-white relative"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-lime-400 rounded-full"></span>
          </div>

          {activeDropdown === "notif" && (
            <Dropdown>
              <p className="font-semibold mb-2">Notifications</p>
              <p className="text-sm text-gray-400">No new alerts</p>
            </Dropdown>
          )}
        </div>

        {/* HELP */}
        <div ref={helpRef} className="relative">
          <div
            onClick={() =>
              setActiveDropdown(activeDropdown === "help" ? null : "help")
            }
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            <HelpCircle size={20} />
          </div>

          {activeDropdown === "help" && (
            <Dropdown>
              <p className="font-semibold mb-2">Help Center</p>
              <p className="text-sm text-gray-400">FAQs & Support</p>
            </Dropdown>
          )}
        </div>

        {/* PROFILE */}
        <div ref={profileRef} className="relative">
          <div
            onClick={() =>
              setActiveDropdown(activeDropdown === "profile" ? null : "profile")
            }
            className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-lg cursor-pointer"
          >
            <div className="text-right">
              <p className="text-sm font-medium">Alex Chen</p>
              <p className="text-xs text-gray-400">Facility Manager</p>
            </div>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center text-black font-bold">
              AC
            </div>
          </div>

          {activeDropdown === "profile" && (
            <Dropdown>
              <DropdownItem icon={<Settings size={16} />} label="Settings" />
              <DropdownItem icon={<LogOut size={16} />} label="Logout" danger />
            </Dropdown>
          )}
        </div>

      </div>
    </div>
  );
};

export default Topbar;