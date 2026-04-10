import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

const Alert = ({ type, title, desc }) => {
  const styles = {
    danger: {
      border: "border-l-2 border-red-400",
      icon: <AlertTriangle size={16} className="text-red-400" />,
    },
    success: {
      border: "border-l-2 border-lime-400",
      icon: <CheckCircle size={16} className="text-lime-400" />,
    },
    neutral: {
      border: "border-l-2 border-gray-400",
      icon: <AlertCircle size={16} className="text-gray-400" />,
    },
  };

  return (
    <div
      className={`p-4 rounded-lg bg-black/40 border border-white/5 ${styles[type].border} hover:bg-white/5 transition`}
    >
      <div className="flex gap-3 items-start">

        {/* ICON */}
        <div className="mt-1">
          {styles[type].icon}
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{desc}</p>
        </div>

      </div>
    </div>
  );
};

export default Alert;