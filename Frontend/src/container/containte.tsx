
import Header from "../users/layouts/Header";
import Left from "../users/layouts/left";
import { Outlet } from "react-router-dom";


export default function Home() {
  return (

    <div className="min-h-screen bg-gray-100">
      {/* Header component */}
      <Header />

      <div className="flex">
        {/* Sidebar component*/}
        <Left />

        {/* Main Content */}
        <div className=" p-6 flex h-full flex-col justify-center items-center md:ml-64 ml-16 ">
          <Outlet />
        </div>
      </div>
    </div>


  );
}
