import React from "react";
import { useNavigate } from "react-router-dom"; // Para redireccionar entre páginas
import { Link } from "react-scroll";
import styles from "./Home.module.css";


const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Redirige a la página de login
  };

  const handleRegister = () => {
    navigate("/register"); // Redirige a la página de registro
  };

  return (
    <div name="Home" className={styles.home}> 
    <div className={styles.container}>
    <p>
          Viaja a  <br />
          <b> cualquier parte de Venezuela!</b>
        </p>
        <p>
          Con los mejores <br />
          <b>precios.</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        
      <div className={styles.buttonContainer}>
        <button onClick={handleLogin} className={styles.button}>Iniciar Sesion</button>
        <button onClick={handleRegister} className={styles.button}>Registrarse</button>
      </div>
    </div>
    </div>
  );
};

export default Home;




