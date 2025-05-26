import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import HeaderAdmin from "./components/headerAdmin";


export default function HomeAdmin() {

    return(
    <div className=" min-h-screen bg-gray-100">
      <HeaderAdmin/>
      <Sidebar/>
      <Outlet/>
    </div>
    )
}