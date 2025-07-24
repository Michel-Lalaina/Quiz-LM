import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logout from "@mui/icons-material/Logout"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function HeaderAdmin() {
  const navigate = useNavigate();

  return (
    <motion.header
      className="fixed md:h-20 w-full z-50 backdrop-blur-md bg-white/80 shadow-md"
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

            <Tooltip title="Résultats" arrow>
              <IconButton onClick={() => navigate("/resultats")} color="inherit">
                <EmojiEventsIcon />
              </IconButton>
            </Tooltip>
          </div>

          {/* Centre : logo */}
<AccountCircleIcon/>
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
                <Logout />
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
