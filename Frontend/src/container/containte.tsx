
import Header from "../users/layouts/Header";
import Acceuil from "../components/Intro";
import QuizCards from "../components/quizCard";
import Left from "../users/layouts/left";


export default function Home() {
  return (
    <div className=" w-screen ">

      {/* Header component */}
      <Header />

      <div className="flex ">
        {/* Sidebar component*/}
        <Left/>

        {/* Main Content */}
        <main className="flex-1 p-6 flex h-full flex-col justify-center items-center md:ml-64 ml-16 ">
          <Acceuil />
          {/* QuizCard component */}
          <QuizCards />
        </main>

      </div>
      {/* Footer component */}
    

    </div>
  );
}
