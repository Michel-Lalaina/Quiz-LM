import axios from "axios";

// URL de ton backend FastAPI
const API_URL = "http://127.0.0.1:8000";

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const createUser = async (nom: string, email: string) => {
    const response = await axios.post(`${API_URL}/users`, { nom, email });
    return response.data;
};

export const updateUser = async (id: number, nom: string, email: string) => {
    const response = await axios.put(`${API_URL}/users/${id}`, { nom, email });
    return response.data;
};

export const deleteUser = async (id: number) => {
    await axios.delete(`${API_URL}/users/${id}`);
};
