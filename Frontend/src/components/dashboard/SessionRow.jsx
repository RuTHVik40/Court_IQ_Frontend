
import { MoreVertical } from "lucide-react";
const SessionRow = ({ time, court, duration, players, type, status }) => {
  const statusStyle = {
    PAID: "bg-lime-400/20 text-lime-400",
    PENDING: "bg-yellow-500/20 text-yellow-400",
    LEAK: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="grid grid-cols-6 px-6 py-5 items-center border-b border-white/5 hover:bg-white/5 transition">

      {/* TIME */}
      <div>
        <p className="text-sm">{time}</p>
        <p className="text-xs text-gray-400">{court}</p>
      </div>

      {/* DURATION */}
      <div className="text-sm">{duration}</div>

      {/* PLAYERS */}
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {[...Array(players)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#111827]"
            ></div>
          ))}
        </div>
      </div>

      {/* TYPE */}
      <div>
        <span className="px-3 py-1 text-xs bg-white/5 rounded-md">
          {type}
        </span>
      </div>

      {/* STATUS */}
      <div>
        <span className={`px-3 py-1 text-xs rounded ${statusStyle[status]}`}>
          {status}
        </span>
      </div>

      {/* ACTION */}
      <div className="flex justify-end">
        <MoreVertical size={18} className="cursor-pointer text-gray-400 hover:text-white" />
      </div>

    </div>
  );
};

export default SessionRow;