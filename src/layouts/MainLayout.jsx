import "../assets/tailwind.css";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";

export function MainLayout() {

  // cek login
  const isLogin = localStorage.getItem("isLogin");

  const navigate = useNavigate();

  // proteksi dashboard
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  // logout
  const handleLogout = () => {
    localStorage.removeItem("isLogin");

    navigate("/");
  };

  return (
    <div
      id="app-container"
      className="bg-gray-100 min-h-screen flex"
    >

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div id="main-content" className="flex-1">

        {/* Header */}
        <div className="flex justify-between items-center">

          <Header />

          {/* Logout Button */}
          <div className="p-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>

        </div>

        {/* Content */}
        <Outlet />

      </div>
    </div>
  );
}

export default MainLayout;