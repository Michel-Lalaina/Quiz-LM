import axios from "axios";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { getQuiz } from "../services/memoire";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";

interface QuizProps {
  id: number;
  title: string;
  description: string;
  A: string;
  B: string;
  C: string;
  D: string;
  true: string;
}

const QuizMemoire = () => {
  const [quizData, setQuizData] = useState<QuizProps[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const data = await getQuiz();
        setQuizData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du quiz", error);
      }
    };

    fetchQuizData();
  }, []);

  const handleChange = (quizId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [quizId]: value }));
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    try {
      const response = await axios.post("http://localhost:8000/submit", {
        answers,
      });
      setFeedback(response.data.feedback); // Supposons que le backend renvoie un objet { quizId: feedbackMessage }
    } catch (error) {
      console.error("Erreur lors de l'envoi des réponses", error);
    }
  };

  if (quizData.length === 0) {
    return <div className="bg-gray-100 p-4 items-center"> 
    <CircularProgress/>
     <p className="bg-white">Chargement des questions...</p>
     </div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {quizData.map((quiz) => (
        <Card key={quiz.id} className="p-4 shadow-xl rounded-2xl w-96 h-full">
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">{quiz.description}</p>
            <h2 className="text-xl font-bold mb-4">{quiz.title}</h2>
            <h6 className="text-xl ">{quiz.A} </h6>
            <h6 className="text-xl ">{quiz.B} </h6>
            <h6 className="text-xl ">{quiz.C} </h6>
            <TextField
              className="w-full mt-4"
              label="Votre réponse"
              variant="outlined"
              value={answers[quiz.id] || ""}
              onChange={(e) => handleChange(quiz.id, e.target.value)}
            />
            {submitted && feedback[quiz.id] && (
              <p className="mt-2 text-green-600">{feedback[quiz.id]}</p>
            )}
          </CardContent>
        </Card>
      ))}
      </div>

      <Button  variant="contained" color="primary" className="w-64 mb-6"
       onClick={handleSubmit}  disabled={submitted}
      >
        Envoyer les réponses
      </Button>
    
    </div>
  );
};

export default QuizMemoire;
