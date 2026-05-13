import React, { Suspense } from "react";
import "./assets/tailwind.css";

import { Routes, Route } from "react-router-dom";

// Layouts
import VisitorLayout from './layouts/VisitorLayout';
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

// WAJIB IMPORT GUEST DI SINI
import Guest from "./pages/Guest"; 

import Customer from "./pages/Customer";
import Order from "./pages/Order";
import NotFound from "./pages/Notfound";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold">Loading...</h1>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* Guest: Dibungkus dengan VisitorLayout */}
        <Route element={<VisitorLayout />}>
          <Route path="/" element={<Guest />} />
        </Route>

        {/* Dashboard */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="order" element={<Order />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;