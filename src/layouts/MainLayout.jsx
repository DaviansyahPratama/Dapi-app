import "../assets/tailwind.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";


export function MainLayout() {
  

  return (
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <Sidebar />
    <div id="main-content" className="flex-1">
      <Header />

     <Outlet />
    </div>
  </div>

  )
}

export default MainLayout;