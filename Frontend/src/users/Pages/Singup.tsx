// src/pages/SignUp.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import RightSideLogin from "../../components/RightLogin";
import { createUser } from "../../Admin/services/apiUser";

const SignUp = () => {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) return;

    await createUser(nom, email); // use only name and email like previous createUser

    setNom("");
    setEmail("");
    setAge("");
    setProfession("");
    setPassword("");
    setConfirmPassword("");

    navigate("/user");
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <Typography variant="h5" className="font-bold mb-2">
              Create Account
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Please fill the form to create your account.
            </Typography>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField label="Full Name" fullWidth variant="outlined" placeholder="John Doe" value={nom} onChange={(e) => setNom(e.target.value)} />
            <TextField label="Email" type="email" fullWidth variant="outlined" placeholder="name@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Age" type="number" fullWidth variant="outlined" placeholder="25" value={age} onChange={(e) => setAge(e.target.value)} />
            <TextField label="Profession" fullWidth variant="outlined" placeholder="Developer" value={profession} onChange={(e) => setProfession(e.target.value)} />
            <TextField label="Password" type="password" fullWidth variant="outlined" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField label="Confirm Password" type="password" fullWidth variant="outlined" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  I agree to the&nbsp;
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">Terms and Conditions</a>
                </Typography>
              }
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              type="submit"
              className="!bg-blue-600 hover:!bg-blue-700"
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
      <RightSideLogin />
    </section>
  );
};

export default SignUp;