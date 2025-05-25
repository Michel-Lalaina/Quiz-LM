import Score from "./components/Dashboard/tableScore";
import Sidebar from "./components/sidebar";


export default function HomeAdmin() {

    return(
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar/>
      <Score/>
    </div>
    )
}