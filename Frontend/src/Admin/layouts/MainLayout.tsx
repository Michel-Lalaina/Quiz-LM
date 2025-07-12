// layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import HeaderAdmin from "../components/headerAdmin";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderAdmin />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

