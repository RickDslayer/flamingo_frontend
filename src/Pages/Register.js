import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
  const [documentType, setDocumentType] = useState("cedula");
  const [documentNumber, setDocumentNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("+58");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden!");
      return;
    }
    if (email !== confirmEmail) {
      alert("Los correos no coinciden!");
      return;
    }

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          documentType,
          documentNumber,
          name,
          email,
          password,
          address,
          postalCode,
          phone: `${phoneCode}${phoneNumber}`
        })
      });

      const data = await response.json();
      if (data.success) {
        navigate('/login'); 
      } else {
        alert('Error en el registro: ' + data.message);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    console.log(credentialResponse);
    navigate('/login'); 
  };

  const handleGoogleLoginError = () => {
    console.error('Error al iniciar sesión con Google');
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.text}>Registro</h2>
          <div className={styles.underline}></div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              
              {/* Tipo de Documento */}
              <div className={styles.input}>
                <label>Tipo de Documento:</label>
                <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} required>
                  <option value="cedula">Cédula</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>
              </div>
              
              {/* Número de Documento */}
              <div className={styles.input}>
                <label>Número de Documento:</label>
                <input
                  type="text"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  required
                />
              </div>
  
              {/* Nombre */}
              <div className={styles.input}>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
  
              {/* Correo */}
              <div className={styles.input}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
  
              {/* Confirmar Correo */}
              <div className={styles.input}>
                <label>Confirmar Email:</label>
                <input
                  type="email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  required
                />
              </div>
  
              {/* Contraseña */}
              <div className={styles.input}>
                <label>Contraseña:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
  
              {/* Confirmar Contraseña */}
              <div className={styles.input}>
                <label>Confirmar Contraseña:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Actualiza el estado de confirmPassword
                  required
                />
              </div>
  
              {/* Dirección */}
              <div className={styles.input}>
                <label>Dirección:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
  
              {/* Código Postal */}
              <div className={styles.input}>
                <label>Código Postal:</label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </div>
  
              {/* Teléfono con Código País */}
              <div className={styles.input}>
                <label>Teléfono:</label>
                <div className={styles.phoneContainer}>
                  <select value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)} required>
                    <option value="+58">+58 (Venezuela)</option>
                    <option value="+57">+57 (Colombia)</option>
                    <option value="+1">+1 (USA)</option>
                  </select>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Número de teléfono"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submit}>Registrarse</button>
            </div>
          </form>
  
          <div className={styles.orSeparator}>
            <span>OR</span>
          </div>
          
          {/* Botón de login con Google */}
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}  // Callback en éxito
            onError={handleGoogleLoginError}  // Callback en error
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

