// layouts/MainLayout.tsx
import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import HeaderAdmin from "../components/headerAdmin";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <div className="flex">
        <Sidebar/>
        <main className="flex-1 ml-16 md:ml-44 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
