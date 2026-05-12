import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customer";
import Orders from "./pages/order";
import {Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <Sidebar />
    <div id="main-content" className="flex-1">
      <Header />
      <Dashboard />
    </div>
  </div>,
);
