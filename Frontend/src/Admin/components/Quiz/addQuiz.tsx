
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import Email from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import { getQuizs } from "../../services/apiQuestion";


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

const [Quiz, setQuizs] = useState<QuizProps[]>();
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [A, setA] = useState("");
const [B, setB] = useState("");
const [C, setC] = useState("");
const [D, setD] = useState("");
const [vrai, setVrai] = useState("");

useEffect(() => {
    fetchQuizs();
}, []);

const fetchQuizs = async () => {
    const data = await getQuizs();
    setQuizs(data);
};

const handleSubmit=async(e:React.FormEvent)=>{
e.preventDefault();
}

export const AddForm: React.FC = () => {

    return (<div className="w-2/4">
        <div className=" max-w-5xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-lg">
            <Card className="shadow-md rounded-xl">
                <CardContent>
                    <form className="space-y-4">
                        <TextField
                            fullWidth
                            label="title"
                            name="ttle"
                            variant="outlined"
                            onChange={(e) => setTitle(e.target.value)}

                            InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                        />

                        <TextField
                            fullWidth
                            label="A"
                            name="A"
                            variant="outlined"
                            onChange={(e) => setA(e.target.value)}

                            InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                        />
                        <TextField
                            fullWidth
                            label="B"
                            name="B"
                            variant="outlined"
                            onChange={(e) => setB(e.target.value)}
                            InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                        />
                        <TextField
                            fullWidth
                            label="C"
                            name="C"
                            variant="outlined"
                            onChange={(e) => setC(e.target.value)}
                            InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                        />
                        <TextField
                            fullWidth
                            label="D"
                            name="D"
                            variant="outlined"
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
                            onChange={(e) => setDescription(e.target.value)}

                        />
                        <TextField
                            fullWidth
                            label="vrai"
                            name="vari"
                            variant="outlined"
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
    )
}