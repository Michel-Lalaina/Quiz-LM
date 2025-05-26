// Header.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountCircle from "@mui/icons-material/AccountCircle";

const HeaderAdmin: React.FC = () => {
  return (
    <AppBar position="sticky" className="bg-white shadow-md border-b border-gray-200 z-50">
      <Toolbar className="flex justify-between">
        <div className="flex items-center space-x-3">
          <QuizIcon className="text-blue-600" fontSize="large" />
          <Typography variant="h6" className="text-gray-800 font-bold">
            Admin Quiz Panel
          </Typography>
        </div>
        <div className="flex items-center space-x-4">
          <Typography variant="body1" className="text-gray-600">
            Admin
          </Typography>
          <IconButton>
            <AccountCircle className="text-blue-600" fontSize="large" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAdmin;
