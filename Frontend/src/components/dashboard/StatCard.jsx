import { Grid, Zap, DollarSign, AlertTriangle } from "lucide-react";

const iconMap = {
  courts: <Grid size={22} />,
  active: <Zap size={22} />,
  revenue: <DollarSign size={22} />,
  leak: <AlertTriangle size={22} />,
};

const StatCard = ({ title, value, extra, type }) => {
  const styles = {
    courts: "border-l-2 border-white/20",
    active: "border-l-2 border-white/40",
    revenue: "border-l-2 border-purple-400",
    leak: "border-l-2 border-red-400",
  };

  return (
    <div className={`bg-[#111827] p-6 rounded-2xl border border-white/5 relative ${styles[type]}`}>

      {/* ICON */}
      <div className="absolute top-4 right-4 text-white/10">
        {iconMap[type]}
      </div>

      <p className="text-xs text-gray-400">{title}</p>

      <h2 className={`text-3xl font-bold mt-2 ${type === "leak" ? "text-red-400" : ""}`}>
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-1">{extra}</p>
    </div>
  );
};

export default StatCard;