// Header.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import QuizIcon from "@mui/icons-material/Quiz";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

const HeaderAdmin: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100 border-b border-gray-200 shadow-sm z-50"
    >
      <Toolbar className="flex justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <QuizIcon  fontSize="large" />
          <div className="flex flex-col">
            <Typography variant="h6" className="text-gray-900 font-semibold">
              Admin Quiz Panel
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Manage quizzes & users
            </Typography>
          </div>
        </div>
        <Box className="flex items-center space-x-4">
          <Typography variant="body2" className="text-gray-700 font-medium">
            Admin
          </Typography>
          <Tooltip title="Admin Profile">
            <Avatar className="bg-purple-600 text-white">A</Avatar>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAdmin;
