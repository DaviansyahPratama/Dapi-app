import React from 'react';
import { Outlet } from 'react-router-dom';
// Pastikan path import komponen guest-nya sesuai dengan struktur foldermu
import Navbar from '../components/guest/Navbar'; 

const VisitorLayout = () => {
  return (
    <div className="visitor-layout-container">
      {/* Navbar khusus guest akan selalu muncul di atas */}
      <Navbar />
      
      {/* <Outlet /> adalah tempat di mana halaman spesifik (misal: Guest.jsx) akan dirender */}
      <main>
        <Outlet />
      </main>

      {/* Kalau kamu punya komponen Footer untuk guest, bisa ditaruh di sini */}
    </div>
  );
};

export default VisitorLayout;