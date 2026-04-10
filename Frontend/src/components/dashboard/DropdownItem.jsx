const DropdownItem = ({ icon, label, danger }) => {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition ${
        danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-gray-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
};
export default DropdownItem;