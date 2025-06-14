// src/components/AddForm.tsx
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import Email from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import { getQuizs } from "../../services/apiQuestion";
import { createQuiz } from "../../services/apiQuestion"; // <-- importer ici

interface QuizProps {
    id: number;
    title: string;
    description: string;
    A?: string;
    B?: string;
    C?: string;
    D?: string;
    vrai: string;
}

export const AddForm: React.FC = () => {
    const [Quiz, setQuizs] = useState<QuizProps[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [C, setC] = useState("");
    const [D, setD] = useState("");
    const [vrai, setVrai] = useState("");

    const fetchQuizs = async () => {
        const data = await getQuizs();
        setQuizs(data);
    };

    useEffect(() => {
        fetchQuizs();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createQuiz(title, description, A, B, C, D, vrai);
            setTitle("");
            setDescription("");
            setA("");
            setB("");
            setC("");
            setD("");
            setVrai("");
            await fetchQuizs();
        } catch (error) {
            console.error("Erreur lors de la création du quiz :", error);
        }
    };

    return (
        <div className="w-2/4">
            <div className="max-w-5xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-lg">
                <Card className="shadow-md rounded-xl">
                    <CardContent>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="title"
                                name="title"
                                variant="outlined"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                            />
                            <TextField
                                fullWidth
                                label="A"
                                name="A"
                                variant="outlined"
                                value={A}
                                onChange={(e) => setA(e.target.value)}
                                InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                            />
                            <TextField
                                fullWidth
                                label="B"
                                name="B"
                                variant="outlined"
                                value={B}
                                onChange={(e) => setB(e.target.value)}
                                InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                            />
                            <TextField
                                fullWidth
                                label="C"
                                name="C"
                                variant="outlined"
                                value={C}
                                onChange={(e) => setC(e.target.value)}
                                InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                            />
                            <TextField
                                fullWidth
                                label="D"
                                name="D"
                                variant="outlined"
                                value={D}
                                onChange={(e) => setD(e.target.value)}
                                InputProps={{ startAdornment: <Send className="text-gray-500" /> }}
                            />
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                multiline
                                rows={2}
                                variant="outlined"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                label="vrai"
                                name="vrai"
                                variant="outlined"
                                value={vrai}
                                onChange={(e) => setVrai(e.target.value)}
                                InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="w-full md:w-auto flex items-center gap-2"
                            >
                                Enregistrer
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
