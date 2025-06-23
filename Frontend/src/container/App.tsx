import { BrowserRouter, Routes, Route } from "react-router-dom";

import Log from "../users/Pages/Login";

// Admin layout et pages
import MainLayout from "../Admin/layouts/MainLayout";
import Score from "../Admin/components/Dashboard/tableScore";


// User layout et pages
import Home from "./containte"; // ce fichier sert de layout user
import QuizCards from "../components/quizCard";
import QuizConnaissance from "../users/Pages/QuizConnaissance";
import QuizIntellect from "../users/Pages/QuizIntelligence";
import QuizMemoire from "../users/Pages/QuizMemoire";
import UserStats from "../users/statUser";
import SettingsPage from "../users/Pages/Setting";
import  UserManage  from "../Admin/pages/userMange";
import ManageQuizs from "../Admin/pages/QuizManage";
import SignUp from "../users/Pages/Singup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login page only */}
        <Route path="/" element={<Log />} />
        <Route path="/Signup" element={<SignUp/>} />

        {/* Admin section */}
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Score />} />
          <Route path="ManageQuizs" element={<ManageQuizs/>}/>
          <Route path="liste" element={<UserManage />} />
        </Route>

        {/* User section */}
        <Route path="/user" element={<Home />}>
          <Route index element={<QuizCards />} />
          <Route path="quizConnaissance" element={<QuizConnaissance />} />
          <Route path="quizIntelligence" element={<QuizIntellect />} />
          <Route path="quizMemoire" element={<QuizMemoire />} />
          <Route path="userState/:userId" element={<UserStats />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
