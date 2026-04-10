const Slider = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-xs text-gray-400 mb-1">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="w-full h-1 bg-white/10 rounded">
      <div className="w-[80%] h-full bg-cyan-400 rounded"></div>
    </div>
  </div>
);
export default Slider;