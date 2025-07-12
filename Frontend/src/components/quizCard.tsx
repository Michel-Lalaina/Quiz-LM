
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AvatarGroup from "@mui/material/AvatarGroup";
import Acceuil from "./Intro";

const quizzes = [
  {
    id: 1,
    title: "Connaissance",
    description: "Testez vos connaissances générales à travers divers sujets.",
    image: "/image/coter.jpg",
    path: "/quizConnaissance",
  },
  {
    id: 2,
    title: "Intelligence",
    description: "Mettez à l'épreuve votre logique et votre raisonnement.",
    image: "/image/colorful-fbrain.jpg",
    path: "/quizIntelligence",
  },
  {
    id: 3,
    title: "Mémoire",
    description: "Améliorez et testez votre mémoire à travers des défis stimulants.",
    image: "/image/concept-cerveau.jpg",
    path: "/quizMemoire",
  },
];

const QuizCards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Acceuil/>
      <h2 className="text-2xl font-bold mb-2">Quiz</h2>
      <p className="text-gray-600 mb-6">Choisissez un type de quiz et testez vos compétences.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-2xl shadow-lg p-4">
            <img src={quiz.image} alt={quiz.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">{quiz.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{quiz.description}</p>
            <Button
              variant="outlined"
              className="mt-4 w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={() => navigate(quiz.path)}
            >
              Démarrer Quiz
            </Button>
            <div className="mt-4">
              <AvatarGroup max={4}>
                <Avatar alt="U1" src="/avatars/user1.jpg" />
                <Avatar alt="U2" src="/avatars/user2.jpg" />
                <Avatar alt="U3" src="/avatars/user3.jpg" />
                <Avatar alt="U4" src="/avatars/user4.jpg" />
              </AvatarGroup>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCards;
