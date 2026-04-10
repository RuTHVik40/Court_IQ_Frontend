import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import CourtStatus from "./pages/CourtStatus";
import Sessions from "./pages/Sessions";
import CourtSetup from "./pages/CourtSetup";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<LoginPage />} />

        {/* DASHBOARD LAYOUT WRAPPER */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="court-status" element={<CourtStatus />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="court-setup" element={<CourtSetup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;