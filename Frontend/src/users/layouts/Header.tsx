import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PsychologyIcon from "@mui/icons-material/Psychology";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const navigate = useNavigate();

  return (
    <motion.header className="fixed w-full h-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="sticky" color="primary" className="shadow-md">
        <Toolbar className="flex justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="font-bold hidden sm:block">
              Quiz App
            </Typography>
          </div>

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <PsychologyIcon style={{ fontSize: 48, color: "#FFD700" }} />
          </motion.div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate("/userState/:userId")}>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className="h-16" />
    </motion.header>
  );
}
