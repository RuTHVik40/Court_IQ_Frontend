import { Clock, ExternalLink } from "lucide-react";
const CourtCard = ({ name, players, status, time }) => {
  return (
    <div className="relative bg-[#111827] rounded-2xl p-5 border border-white/5 overflow-hidden hover:border-cyan-400/30 transition">

      {/* STATUS */}
      <span className={`text-xs px-2 py-1 rounded ${
        status === "ACTIVE"
          ? "bg-lime-400/20 text-lime-400"
          : "bg-gray-500/20 text-gray-400"
      }`}>
        {status}
      </span>

      {/* TITLE */}
      <h3 className="mt-3 text-sm font-medium">{name}</h3>

      {/* PLAYERS */}
      <div className="text-center my-6">
        <h1 className="text-5xl font-bold text-cyan-400">{players}</h1>
        <p className="text-xs text-gray-400 tracking-wide">PLAYERS TRACKED</p>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          {time}
        </div>
        <ExternalLink size={16} className="cursor-pointer hover:text-white" />
      </div>

      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-purple-600/10 pointer-events-none"></div>
    </div>
  );
};

export default CourtCard;