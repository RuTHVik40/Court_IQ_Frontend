import { TrendingUp, AlertTriangle, Activity } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import AlertItem from "../components/dashboard/AlertItem";
import TableRow from "../components/dashboard/TableRow";
import { Download } from "lucide-react";
const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">Operational Intelligence</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Live monitoring and financial leakage analysis for your sporting facility.
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 text-sm transition">
          <Download size={16} />
          EXPORT REPORT
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-6">

        <StatCard title="TOTAL COURTS" value="24" extra="+2 Net" type="courts" />
        <StatCard title="ACTIVE NOW" value="18" extra="75% Capacity" type="active" />
        <StatCard title="REVENUE TODAY" value="$3,240" extra="+12%" type="revenue" />
        <StatCard title="LEAK DETECTED" value="$420" extra="3 Instances" type="leak" />

      </div>

      {/* CHART + ALERTS */}
      <div className="grid grid-cols-3 gap-6">

        {/* CHART */}
        <div className="col-span-2 bg-[#111827] rounded-2xl p-6 border border-white/5 relative overflow-hidden">

          <h3 className="text-lg font-semibold mb-1">Usage Trends</h3>
          <p className="text-gray-400 text-sm mb-4">
            Hourly occupancy levels across all courts
          </p>

          {/* FAKE GRAPH (styled) */}
          <div className="h-[220px] flex items-end">
            <div className="w-full h-[120px] bg-gradient-to-t from-cyan-400/30 to-transparent rounded-xl blur-[1px]"></div>
          </div>

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-purple-600/10 pointer-events-none"></div>
        </div>

        {/* ALERTS */}
        <div className="bg-[#111827] rounded-2xl p-6 border border-white/5 space-y-4">

          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Active Alerts</h3>
            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
              3 CRITICAL
            </span>
          </div>

          <AlertItem
          title="Unreserved Session"
          desc="Court 14 has active use but no session booked."
          action="INVESTIGATE"
          type="danger"
        />

        <AlertItem
          title="Revenue Leak"
          desc="Cash payment not reconciled."
          action="RESOLVE"
          type="danger"
        />

        <AlertItem
          title="Hardware Offline"
          desc="Sensor not responding."
          action="RESTART"
          type="neutral"
        />

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 p-6">

        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Recent Sessions</h3>
          <button className="text-sm text-gray-400 hover:text-white">
            VIEW ALL
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="text-gray-400 text-xs border-b border-white/5">
            <tr>
              <th className="text-left py-3">COURT</th>
              <th className="text-left">CLIENT</th>
              <th className="text-left">TIME</th>
              <th className="text-left">STATUS</th>
              <th className="text-right">AMOUNT</th>
            </tr>
          </thead>

          <tbody>

            <TableRow court="Elite Tennis Court" client="Marcus" status="PAID" amount="$70" />
            <TableRow court="Main Arena - B" client="Elena" status="PENDING" amount="$120" />
            <TableRow court="Indoor Padel A" client="Unknown" status="LEAK" amount="-$40" danger />
            <TableRow court="Grand Slam Hall" client="David" status="PAID" amount="$90" />

          </tbody>
        </table>

      </div>

    </div>
  );
};

export default Dashboard;