import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import axios from "axios";

const UserStats: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  // États sécurisés
  const [score, setScore] = useState<number | null>(null);
  const [totalQuestions, setTotalQuestions] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId || isNaN(Number(userId))) {
      setError("ID utilisateur invalide.");
      setLoading(false);
      return;
    }

    const fetchStats = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${userId}/stats`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Auth sécurisée
          },
        });
        setScore(response.data.score);
        setTotalQuestions(response.data.totalQuestions || 1);
      } catch (err) {
        console.error("Erreur lors de la récupération des statistiques :", err);
        setError("Impossible de récupérer les statistiques.");
      }
       finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [userId]);

  const successRate = ((score || 0) / totalQuestions) * 100;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-md mx-auto mt-10">
      <Card className="p-6 shadow-xl rounded-2xl bg-white">
        <CardContent className="text-center">
          <Typography variant="h5" className="font-bold text-gray-700">🎯 Vos Statistiques</Typography>

          {loading ? (
            <CircularProgress className="my-6" />
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <>
              <div className="flex justify-center items-center my-6 relative">
                <CircularProgress variant="determinate" value={successRate} size={100} thickness={6} />
                <Typography variant="h6" className="absolute text-xl font-semibold" style={{ color: "#1976d2" }}>
                  {Math.round(successRate)}%
                </Typography>
              </div>

              <Typography variant="h6" className="text-gray-600">
                Score: <span className="font-bold text-indigo-600">{score} / {totalQuestions}</span>
              </Typography>

              <motion.div whileHover={{ scale: 1.05 }} className="mt-4">
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
                  onClick={() => navigate("/quizConnaissance")} // Ex: Retourner vers le quiz
                >
                  Rejouer un Quiz
                </button>
              </motion.div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserStats;
