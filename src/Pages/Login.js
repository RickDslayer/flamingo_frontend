import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'; 
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Simular el inicio de sesión con datos estáticos
      if (email === "user@example.com" && password === "user123") {
        navigate('/busroutes');
      } else if (email === "admin@example.com" && password === "admin123") {
        navigate('/admin');
      } else {
        alert('Login failed: Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    try {
      // Simular el inicio de sesión con Google
      navigate('/busroutes');
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  const handleGoogleLoginError = () => {
    console.error('Error al iniciar sesión con Google');
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.text}>Login</h2>
          <div className={styles.underline}></div>
          <form onSubmit={handleLogin}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.input}>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.forgotPassword}>
              Olvidó su contraseña? <span>haga click aquí para restablecer!</span>
            </div>
            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submit}>Login</button>
            </div>
          </form>
          <div className={styles.orSeparator}>
            <span>OR</span>
          </div>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}  
            onError={handleGoogleLoginError}  
          />
        </div>
      </div>
    </div>
  );
};

export default Login;





