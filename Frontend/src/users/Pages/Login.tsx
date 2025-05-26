
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import RightSideLogin from "../../components/RightLogin";

const Log = () => {

  const navigate = useNavigate();

return(
  <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50">
  {/* Colonne gauche (formulaire login) */}
  <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <Typography variant="h5" className="font-bold mb-2">
          Sign In
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Enter your credentials to access your account.
        </Typography>
      </div>

      <form className="space-y-4">
        <TextField label="Email" type="email" fullWidth variant="outlined" placeholder="name@mail.com"
        />
        <TextField
          label="Password" type="password" fullWidth variant="outlined"  placeholder="********"
        />

        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2">
              I agree to the&nbsp;
              <a href="#" className="text-blue-600 underline hover:text-blue-800">  Terms and Conditions
              </a>
            </Typography>
          }
        />

        <Button
          variant="contained"  fullWidth size="large"
          className="!bg-blue-600 hover:!bg-blue-700" onClick={() => navigate("/user")}
        >
          Sign In
        </Button>

        <div className="flex justify-between items-center mt-2">
          <FormControlLabel
            control={<Checkbox />} label="Subscribe to newsletter"
          />
          <a href="#" className="text-sm text-blue-600 hover:underline"> Forgot Password?
          </a>
        </div>

        <Button
          variant="outlined" fullWidth size="large"
         className="mt-4 flex items-center justify-center gap-2" onClick={() => navigate("/admin")}
        >
          <svg width="18" height="18" fill="currentColor" className="text-red-500"> </svg>
          Sign in with AeSIT
        </Button>
      </form>
    </div>
  </div>
   <RightSideLogin/>
</section>

)
}
 export default Log;