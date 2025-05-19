
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import Email from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";




export const AddForm: React.FC = () => {

    return (<div className="w-2/4">
        <div className=" max-w-5xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-lg">
            <Card className="shadow-md rounded-xl">
                <CardContent>
                    <form className="space-y-4">
                        <TextField
                            fullWidth
                            label="A"
                            name="A"
                            variant="outlined"

                            InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                        />
                        <TextField
                            fullWidth
                            label="B"
                            name="B"
                            variant="outlined"

                            InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                        />
                        <TextField
                            fullWidth
                            label="C"
                            name="C"
                            variant="outlined"

                            InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
                        />
                        <TextField
                            fullWidth
                            label="D"
                            name="D"
                            variant="outlined"

                            InputProps={{ startAdornment: <Send className="text-gray-500" /> }}
                        />

                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            multiline
                            rows={2}
                            variant="outlined"

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