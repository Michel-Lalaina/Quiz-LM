// import axios from "axios";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { getQuiz } from "../services/connaissance";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";

interface QuizProps {
  id: number;
  title: string;
  description: string;
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  true: string;
}

const QuizConnaissance = () => {
  const [quizData, setQuizData] = useState<QuizProps[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number | null>(null);

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
    let newScore = 0;

    quizData.forEach((quiz) => {
      if (answers[quiz.id] === quiz.true) {
        newScore += 1;
      }
    });

    setScore(newScore);
    setSubmitted(true);
  };

  if (quizData.length === 0) {
    return (
      <div className="bg-gray-100 p-4 flex flex-col items-center">
        <CircularProgress />
        <p className="bg-white mt-2">Chargement des questions...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quizData.map((quiz) => (
          <Card key={quiz.id} className="p-4 shadow-xl rounded-2xl w-96 h-full">
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">{quiz.description}</p>
              <h2 className="text-xl font-bold mb-4">{quiz.title}</h2>
              <FormControl component="fieldset">
                <FormLabel component="legend">Choisissez une réponse</FormLabel>
                <RadioGroup
                  value={answers[quiz.id] || ""}
                  onChange={(e) => handleChange(quiz.id, e.target.value)}
                >
                  {quiz.A && (
                    <FormControlLabel
                      value="A"
                      control={<Radio />}
                      label={quiz.A}
                    />
                  )}
                  {quiz.B && (
                    <FormControlLabel
                      value="B"
                      control={<Radio />}
                      label={quiz.B}
                    />
                  )}
                  {quiz.C && (
                    <FormControlLabel
                      value="C"
                      control={<Radio />}
                      label={quiz.C}
                    />
                  )}
                  {quiz.D && (
                    <FormControlLabel
                      value="D"
                      control={<Radio />}
                      label={quiz.D}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center mt-6">
        <Button
          variant="contained"
          color="primary"
          className="w-64 mb-6"
          onClick={handleSubmit}
          disabled={submitted}
        >
          Envoyer les réponses
        </Button>

        {submitted && (
          <p className="text-xl font-bold">
            Score final : {score} / {quizData.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizConnaissance;
