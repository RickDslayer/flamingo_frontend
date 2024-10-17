import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminDashboard from "./Pages/AdminDashboard";
import BusRoutes from "./Pages/BusRoutes";
import NavBar from "./Components/navBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Manejar inicio de sesión
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("/logeo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User logged in:", data);
        setIsAuthenticated(true);
      } else {
        // Manejar errores de inicio de sesión
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Manejar registro
  const handleRegister = async (email, password) => {
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered:", data);
      } else {
        // Manejar errores de registro
        const errorData = await response.json();
        console.error("Registration failed:", errorData.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        {/* Controlar acceso al Admin Dashboard */}
        <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" />} />
        {/* Controlar acceso a BusRoutes */}
        <Route path="/busroutes" element={isAuthenticated ? <BusRoutes /> : <Navigate to="/login" />} />
        {/* Redirección predeterminada */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;








