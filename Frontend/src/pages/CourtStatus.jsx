import { ExternalLink, Plus, Clock, Video, SlidersHorizontal } from "lucide-react";
import Alert from "../components/dashboard/AlertItem";
import CourtCard from "../components/dashboard/CourtCard";
const courts = [
  { name: "Main Arena - Court 1", players: 4, status: "ACTIVE", time: "42:15 remaining" },
  { name: "Indoor - Court B", players: 0, status: "IDLE", time: "Ready for booking" },
  { name: "Padel Zone #1", players: 2, status: "ACTIVE", time: "12:04 remaining" },
  { name: "Main Arena - Court 2", players: 4, status: "ACTIVE", time: "58:30 remaining" },
  { name: "Padel Zone #2", players: 0, status: "IDLE", time: "Ready for booking" },
  { name: "Indoor - Court A", players: 10, status: "ACTIVE", time: "04:22 remaining" },
  { name: "Squash Box 1", players: 2, status: "ACTIVE", time: "25:00 remaining" },
  { name: "Practice Wall", players: 0, status: "IDLE", time: "Ready for booking" },
];

const CourtStatus = () => {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs text-lime-400 tracking-wide">FACILITY DASHBOARD</p>
          <h1 className="text-4xl font-bold">
            Real-Time <span className="text-cyan-400">Monitoring</span>
          </h1>
        </div>

        <div className="flex gap-3">

        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm hover:bg-white/10 transition">
            <Video size={16} />
            LIVE FEED
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm hover:bg-white/10 transition">
            <SlidersHorizontal size={16} />
            FILTER
        </button>

        </div>
        </div>

      {/* COURTS GRID */}
      <div className="grid grid-cols-4 gap-6">

        {courts.map((court, i) => (
          <CourtCard key={i} {...court} />
        ))}

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-3 gap-6">

        {/* GRAPH */}
        <div className="col-span-2 bg-[#111827] rounded-2xl p-6 border border-white/5">

          <h3 className="font-semibold mb-4">
            Facility Utilization <span className="text-purple-400">Live Graph</span>
          </h3>

          <div className="flex items-end gap-3 h-[180px]">
            {[40, 60, 90, 120, 140, 110, 70, 40, 30, 50, 80].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}px` }}
                className={`w-6 rounded bg-gradient-to-t ${
                  i >= 3 && i <= 5
                    ? "from-cyan-400 to-cyan-200"
                    : "from-white/10 to-white/5"
                }`}
              ></div>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-3">
            <span>08:00 AM</span>
            <span>CURRENT: 14:00 PM</span>
            <span>10:00 PM</span>
          </div>
        </div>

        {/* ALERTS */}
        <div className="bg-[#111827] rounded-2xl p-6 border border-white/5 space-y-4">

          <h3 className="font-semibold">Traffic Alerts</h3>

          <Alert type="danger" title="Court Overcrowded" desc="Max capacity exceeded." />
          <Alert type="success" title="Padel Cleaning" desc="Court cleaned and ready." />

          <button className="w-full mt-2 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition">
            VIEW ALL LOGS
            </button>
        </div>

      </div>

      {/* FLOATING BUTTON */}
      <button className="fixed bottom-8 right-8 bg-lime-400 text-black p-4 rounded-xl shadow-lg hover:bg-lime-300 transition">
        <Plus />
      </button>

    </div>
  );
};

export default CourtStatus;