import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import QuizIcon from "@mui/icons-material/Quiz";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const navigate = useNavigate();

  return (
    <motion.header
      className="fixed md:h-1/6 w-full z-50 backdrop-blur-md bg-white/80 shadow-md"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar className="flex justify-between items-center px-4 sm:px-8">
          {/* Left menu */}
          <div className="flex items-center space-x-1 sm:space-x-4 text-gray-800">
            <Tooltip title="Accueil" arrow>
              <IconButton onClick={() => navigate("/user")} color="inherit">
                <HomeIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Quiz" arrow>
              <IconButton onClick={() => navigate("/quiz")} color="inherit">
                <QuizIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Résultats" arrow>
              <IconButton onClick={() => navigate("/resultats")} color="inherit">
                <EmojiEventsIcon />
              </IconButton>
            </Tooltip>
          </div>

          {/* Centre : logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <PsychologyIcon
              style={{
                fontSize: 42,
                color: "#facc15",
                filter: "drop-shadow(0 0 4px rgba(250, 204, 21, 0.6))",
              }}
            />
            <span className="text-lg sm:text-xl font-extrabold text-gray-900 select-none">
              QuizUp
            </span>
          </motion.div>

          {/* Right icons */}
          <div className="flex items-center space-x-2 sm:space-x-4 text-gray-800">
            {/* Socials */}
            <Tooltip title="Facebook" arrow>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter" arrow>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram" arrow>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            {/* Notifs et compte */}
            <Tooltip title="Notifications" arrow>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Se deconnecter" arrow>
              <IconButton onClick={() => navigate("/")} color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>

          </div>
        </Toolbar>
      </AppBar>
      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </motion.header>
  );
}
