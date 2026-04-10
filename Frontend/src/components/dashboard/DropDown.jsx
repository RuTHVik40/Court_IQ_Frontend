const Dropdown = ({ children }) => {
  return (
    <div className="absolute right-0 mt-3 w-56 bg-[#111827] border border-white/10 rounded-xl shadow-xl p-3 z-50 space-y-2">
      {children}
    </div>
  );
};
export default Dropdown;