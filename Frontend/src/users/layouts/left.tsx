// src/components/Left.tsx
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MemoryIcon from "@mui/icons-material/Memory";
import { useNavigate } from "react-router-dom";

const Left: React.FC = () => {
  const navigate = useNavigate();

  return (
    <aside className=" fixed top-1/4 left-0 h-auto md:w-40 py-6 bg-blue-500 text-white shadow-xl rounded-r-2xl z-50"> 
      <ul className="flex flex-col items-center md:items-start space-y-6 relative z-10 px-4 ">
        <DashboardIcon fontSize="large" className=" hover:text-white hover:scale-125 transition-transform cursor-pointer" onClick={() => navigate("/user")} />
        <QuizIcon fontSize="large" className="hover:text-white hover:scale-125 transition-transform cursor-pointer" onClick={() => navigate("/quizConnaissance")} />
        <PsychologyIcon fontSize="large" className="hover:text-white hover:scale-125 transition-transform cursor-pointer" onClick={() => navigate("/quizIntelligence")} />
        <MemoryIcon fontSize="large" className="hover:text-white hover:scale-125 transition-transform cursor-pointer" onClick={() => navigate("/quizMemoire")} />
      </ul>
    </aside>
  );
};
 
export default Left;