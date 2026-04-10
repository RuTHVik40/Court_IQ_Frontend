const StatusBadge = ({ label, icon }) => (
  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
    {icon}
    {label}
  </div>
);

export default StatusBadge;