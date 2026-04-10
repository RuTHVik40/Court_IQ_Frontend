const StatBox = ({ title, value, extra, danger }) => {
  return (
    <div className={`bg-[#111827] p-6 rounded-2xl border border-white/5 ${danger ? "border-red-500/20" : ""}`}>
      
      <p className="text-xs text-gray-400">{title}</p>

      <h2 className={`text-2xl font-bold mt-2 ${danger ? "text-red-400" : ""}`}>
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-1">{extra}</p>

      {/* Glow */}
      <div className="mt-4 h-1 bg-gradient-to-r from-green-400 to-purple-500 rounded"></div>
    </div>
  );
};

export default StatBox;