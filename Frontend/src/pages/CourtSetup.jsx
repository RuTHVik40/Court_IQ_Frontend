import { Maximize2, Crop, Move, Info, Video, Cpu, Settings2, Grid } from "lucide-react";
import StatusBadge from "../components/dashboard/StatusBadge";
import Slider from "../components/dashboard/Slider";
import { useState } from "react";
import ToolBtn from "../components/dashboard/ToolBadge";
const CourtSetup = () => {
    const [netZone, setNetZone] = useState(true);
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">Badminton Court 04</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Define region of interest (ROI) and computer vision parameters.
          </p>
        </div>

        <div className="flex gap-3">
          <StatusBadge icon={<Video size={14} />} label="ACTIVE STREAM" />
            <StatusBadge icon={<Cpu size={14} />} label="60 FPS" />
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT IMAGE */}
        <div className="col-span-2 bg-[#111827] rounded-2xl border border-white/5 p-4">

          <div className="relative rounded-xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
              alt="court"
              className="w-full h-[420px] object-cover"
            />

            {/* ROI BOX */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-2 border-dashed border-cyan-400 w-[70%] h-[60%] relative">

                <textarea
                className="w-full mt-2 bg-black/50 border border-white/5 rounded-lg px-3 py-2 text-sm outline-none focus:border-cyan-400 transition resize-none"
                rows={2}
                defaultValue="Service Area"
                />

                {/* CORNERS */}
                {["tl", "tr", "bl", "br"].map((pos, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 bg-cyan-400 absolute ${
                      pos === "tl" && "top-0 left-0"
                    } ${pos === "tr" && "top-0 right-0"} ${
                      pos === "bl" && "bottom-0 left-0"
                    } ${pos === "br" && "bottom-0 right-0"}`}
                  ></div>
                ))}

              </div>
            </div>

            {/* TOOLS */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <ToolBtn icon={<Move size={16} />} />
              <ToolBtn icon={<Crop size={16} />} />
              <ToolBtn icon={<Maximize2 size={16} />} />
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-[#111827] rounded-2xl border border-white/5 p-6 space-y-5">

          <h3 className="font-semibold flex items-center gap-2">
            <Settings2 size={16} className="text-cyan-400" />
            Control Panel
            </h3>
            

          {/* INPUT */}
          <div>
            <label className="text-xs text-gray-400">ZONE LABEL</label>
            <input
              className="w-full mt-2 bg-black/50 border border-white/5 rounded-lg px-3 py-2 text-sm outline-none"
              defaultValue="Service Area"
            />
          </div>

          {/* SLIDER */}
          <Slider label="SENSITIVITY" value="84%" />
          <Slider label="MOTION THRESHOLD" value="12ms" />

          {/* TOGGLE */}
          <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">

  {/* LEFT SIDE */}
  <div className="flex items-center gap-2 text-xs text-gray-300">
    <Grid size={14} className="text-purple-400" />
    <span className="tracking-wide">NET ZONE ANALYSIS</span>
  </div>

  {/* SWITCH */}
  <button
    onClick={() => setNetZone(!netZone)}
    className={`w-10 h-5 rounded-full relative transition ${
      netZone ? "bg-lime-400" : "bg-gray-600"
    }`}
  >
    <div
      className={`w-4 h-4 bg-black rounded-full absolute top-0.5 transition ${
        netZone ? "right-0.5" : "left-0.5"
      }`}
    ></div>
  </button>

</div>

          {/* TIP */}
          <div className="bg-white/5 p-4 rounded-lg text-xs text-gray-400 flex gap-2">
            <Info size={16} />
            For best results, align ROI with baseline markers.
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-gray-500">
          LAST CHANGED: 2 HOURS AGO
        </p>

        <div className="flex gap-3">
          <button className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition">
            CANCEL
            </button>

            <button className="px-5 py-2 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition shadow-[0_0_10px_rgba(34,197,94,0.3)]">
            SAVE CHANGES
            </button>
        </div>
      </div>

    </div>
  );
};

export default CourtSetup;