// src/components/Left.tsx
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MemoryIcon from "@mui/icons-material/Memory";
import { useNavigate } from "react-router-dom";

const Left: React.FC = () => {
  const navigate = useNavigate();

  return (
    <aside className="fixed top-1/4 left-0 h-auto md:w-44 py-6 px-2 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl rounded-r-3xl z-50">
      <ul className="flex flex-col items-center md:items-start space-y-6 px-2">
        <li
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform hover:bg-white hover:text-blue-600 px-3 py-2 rounded-xl w-full"
          onClick={() => navigate("userState/:userId")}
        >
          <DashboardIcon fontSize="medium" />
          <span className="hidden md:inline font-medium text-sm">Tableau</span>
        </li>
        <li
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform hover:bg-white hover:text-blue-600 px-3 py-2 rounded-xl w-full"
          onClick={() => navigate("quizConnaissance")}
        >
          <QuizIcon fontSize="medium" />
          <span className="hidden md:inline font-medium text-sm">Connaissance</span>
        </li>
        <li
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform hover:bg-white hover:text-blue-600 px-3 py-2 rounded-xl w-full"
          onClick={() => navigate("quizIntelligence")}
        >
          <PsychologyIcon fontSize="medium" />
          <span className="hidden md:inline font-medium text-sm">Intelligence</span>
        </li>
        <li
          className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform hover:bg-white hover:text-blue-600 px-3 py-2 rounded-xl w-full"
          onClick={() => navigate("quizMemoire")}
        >
          <MemoryIcon fontSize="medium" />
          <span className="hidden md:inline font-medium text-sm">Mémoire</span>
        </li>
      </ul>
    </aside>
  );
};

export default Left;
