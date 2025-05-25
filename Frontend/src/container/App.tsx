import Home from "./containte";
import  HomeAdmin  from "../Admin/homeAdmin";
import Users from "../Admin/components/AddUser";
import UserStats from "../users/statUser";
import SettingsPage from "../users/Pages/Setting";
import QuizMemoire from "../users/Pages/QuizMemoire";
import QuizIntellect from "../users/Pages/QuizIntelligence";
import QuizConnaissance from "../users/Pages/QuizConnaissance";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "../users/Pages/Login";
import { UserList } from "../Admin/components/userList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/quizConnaissance" element={<QuizConnaissance />} />
        <Route path="/quizIntelligence" element={<QuizIntellect />} />
        <Route path="/userState/:userId" element={<UserStats />} /> 
        <Route path="/quizMemoire" element={<QuizMemoire />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<HomeAdmin/>}/>
        <Route path="/liste" element={<UserList/>}/>
        <Route path="/user" element={<Users/>} />
        <Route path="/" element={<Log/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;