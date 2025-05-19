import axios from "axios";

// URL de ton backend FastAPI
const API_URL = "http://127.0.0.1:8000";

export const getQuiz = async () => {
    try {
      const response = await axios.get(`${API_URL}/quizconnaissance`);
      return response.data; 
    } catch (error) {
      console.error("Erreur lors de la récupération du quiz", error);
      throw error;
    }
  };

export const createQuiz = async (nom: string, email: string) => {
    const response = await axios.post(`${API_URL}/quizs`, { nom, email });
    return response.data;
};

export const updateQuiz = async (id: number, nom: string, email: string) => {
    const response = await axios.put(`${API_URL}/quizs/${id}`, { nom, email });
    return response.data;
};

export const deleteQuiz = async (id: number) => {
    await axios.delete(`${API_URL}/quizs/${id}`);
};
