import { MoreVertical } from "lucide-react";
import StatBox from "../components/dashboard/StatBox";
import SessionRow from "../components/dashboard/SessionRow";
import { SlidersHorizontal, Download, ChevronLeft, ChevronRight } from "lucide-react";
const sessions = [
  {
    time: "09:00 AM",
    court: "Court 01 - Indoor",
    duration: "60 Min",
    players: 3,
    type: "Private Lesson",
    status: "PAID",
  },
  {
    time: "10:30 AM",
    court: "Court 04 - Clay",
    duration: "90 Min",
    players: 2,
    type: "Match Play",
    status: "PENDING",
  },
  {
    time: "11:00 AM",
    court: "Court 02 - Indoor",
    duration: "120 Min",
    players: 1,
    type: "Free Session",
    status: "LEAK",
  },
  {
    time: "01:30 PM",
    court: "Court 03 - Grass",
    duration: "60 Min",
    players: 4,
    type: "Tournament",
    status: "PAID",
  },
];

const Sessions = () => {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">Active Sessions</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Real-time overview of ongoing and upcoming court activities.
          </p>
        </div>

        <div className="flex gap-3">

        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition">
            <SlidersHorizontal size={16} />
            FILTER
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition">
            <Download size={16} />
            EXPORT
        </button>

        </div>
        </div>

      {/* TABLE */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden">

        {/* HEAD */}
        <div className="grid grid-cols-6 px-6 py-4 text-xs text-gray-400 border-b border-white/5">
          <div>TIME</div>
          <div>DURATION</div>
          <div>PLAYERS</div>
          <div>SESSION TYPE</div>
          <div>PAYMENT STATUS</div>
          <div className="text-right">ACTIONS</div>
        </div>

        {/* ROWS */}
        {sessions.map((s, i) => (
          <SessionRow key={i} {...s} />
        ))}

        {/* FOOTER */}
        <div className="flex justify-between px-6 py-4 text-xs text-gray-400 border-t border-white/5">
          <span>SHOWING 4 OF 28 SESSIONS</span>
          <div className="flex items-center gap-2">
        <button className="p-2 bg-white/5 rounded-md hover:bg-white/10">
            <ChevronLeft size={16} />
        </button>
        <button className="p-2 bg-white/5 rounded-md hover:bg-white/10">
            <ChevronRight size={16} />
        </button>
        </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">

        <StatBox title="OCCUPANCY RATE" value="84%" extra="+12% cx LW" />

        <StatBox title="PENDING REVENUE" value="$1,240" extra="8 Invoices" />

        <StatBox
          title="SYSTEM HEALTH"
          value="Warning"
          extra="1 Alert"
          danger
        />

      </div>

    </div>
  );
};

export default Sessions;