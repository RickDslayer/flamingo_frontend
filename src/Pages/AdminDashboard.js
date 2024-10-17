import React, { useState } from "react";
import TravelManagement from "./TravelManagement";
import UserManagement from "./UserManagement";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("travels");
//comentario xd
  return (
    <div className={styles.background}>
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardTitle}>Admin Dashboard</h1>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${
            activeSection === "travels" ? styles.activeButton : ""
          }`}
          onClick={() => setActiveSection("travels")}
        >
          Gestion de Rutas
        </button>
        <button
          className={`${styles.button} ${
            activeSection === "users" ? styles.activeButton : ""
          }`}
          onClick={() => setActiveSection("users")}
        >
          Gestion de Usuarios
        </button>
      </div>

      <div className={styles.sectionContainer}>
        {activeSection === "travels" && <TravelManagement />}
        {activeSection === "users" && <UserManagement />}
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
