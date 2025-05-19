// src/services/intellecte.ts
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";


export const getQuiz = async () => {
  try {
    const response = await axios.get(`${API_URL}/quizintellect`); 
    return response.data; // back renvoie { question, options, quizId }
  } catch (error) {
    console.error("Erreur lors de la récupération du quiz", error);
    throw error;
  }
};

export const createQuiz = async (design: string, place: string, categori: string) => {
  try {
    const response = await axios.post(`${API_URL}/quiz`, { design, place, categori });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout du quiz", error);
    throw error;
  }
};