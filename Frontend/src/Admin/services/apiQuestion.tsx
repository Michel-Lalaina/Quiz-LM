import axios from "axios";
const API_URL = "http://127.0.0.1:8000"; // URL backend FastAPI


export const getQuizs = async () => {
    try {
      const response = await axios.get(`${API_URL}/quizconnaissance`);
      return response.data; 
    } catch (error) {
      console.error("Erreur lors de la récupération du quiz", error);
      throw error;
    }
  };

export const createQuiz = async (
  title: string,
  description: string,
  A: string,
  B: string,
  C: string,
  D: string,
  vrai: string
) => {
  const response = await axios.post(`${API_URL}/quizs`, {
    title,
    description,
    A,
    B,
    C,
    D,
    vrai,
  });
  return response.data;
};


export const updateQuiz = async (id: number, nom: string, email: string) => {
    const response = await axios.put(`${API_URL}/quizs/${id}`, { nom, email });
    return response.data;
};

export const deleteQuiz = async (id: number) => {
    await axios.delete(`${API_URL}/quizs/${id}`);
};
