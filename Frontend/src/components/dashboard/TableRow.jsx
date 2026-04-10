const TableRow = ({ court, client, status, amount, danger }) => {
  const statusStyle = {
    PAID: "bg-lime-400/20 text-lime-400",
    PENDING: "bg-yellow-500/20 text-yellow-400",
    LEAK: "bg-red-500/20 text-red-400",
  };

  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition">

      {/* COURT */}
      <td className="py-4 font-medium">{court}</td>

      {/* CLIENT */}
      <td>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gray-500"></div>
          <span className="text-sm">{client}</span>
        </div>
      </td>

      {/* TIME */}
      <td className="text-sm text-gray-400">14:00 - 15:30</td>

      {/* STATUS */}
      <td>
        <span className={`px-2 py-1 rounded text-xs ${statusStyle[status]}`}>
          {status === "LEAK" ? "LEAK DETECTED" : status}
        </span>
      </td>

      {/* AMOUNT */}
      <td className={`text-right ${danger ? "text-red-400" : ""}`}>
        {amount}
      </td>
    </tr>
  );
};

export default TableRow;