// Sidebar.tsx
import Button from "@mui/material/Button";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();
  return (
    <aside className="w-64 bg-white shadow-xl p-6 space-y-6">
      <div className="text-xl font-bold">Admin Panel</div>
      <nav className="flex flex-col space-y-4">
        <Button
          variant="text"
          startIcon={<BarChartIcon className="text-gray-600" />}
          className="justify-start text-left" 
        >
          Dashboard
        </Button>
        <Button
          variant="text"
          startIcon={<ChecklistIcon className="text-gray-600" />}
          className="justify-start text-left"
        >
          Gérer Questions
        </Button>
        <Button
          variant="text"
          startIcon={<GroupIcon className="text-gray-600" />}
          className="justify-start text-left" onClick={() => navigate("/liste")}
        >
          Utilisateurs
        </Button>
      </nav>
    </aside>
  );
}
