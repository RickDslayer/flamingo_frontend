import React, { useState, useEffect } from "react";
import styles from "./BusRoutes.module.css";

const BusRoutes = () => {
  const [busRoutes, setBusRoutes] = useState([
    {
      id: 1,
      codigo: "BUS001",
      horaSalida: "08:00 AM",
      origen: "Cúcuta",
      destino: "Bucaramanga",
      duracion: "5h",
      numeroBus: "123",
      terminal: "Terminal Cúcuta",
    },
    {
      id: 2,
      codigo: "BUS002",
      horaSalida: "09:30 AM",
      origen: "Cúcuta",
      destino: "Bogotá",
      duracion: "12h",
      numeroBus: "456",
      terminal: "Terminal Cúcuta",
    },
  ]);

  useEffect(() => {
    // Aquí podrías realizar una llamada a un endpoint en el futuro para obtener las rutas de buses.
  }, []);

  const handleBuyClick = (routeId) => {
    // Aquí puedes agregar la lógica para manejar la compra
    console.log("Compra realizada para la ruta:", routeId);
  };

  return (
    <div className={styles.background}>
      <h2 className={styles.h2}>Viajes</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Código Viaje</th>
            <th className={styles.th}>Hora de Salida</th>
            <th className={styles.th}>Origen</th>
            <th className={styles.th}>Destino</th>
            <th className={styles.th}>Duración</th>
            <th className={styles.th}>Número del Bus</th>
            <th className={styles.th}>Terminal</th>
            <th className={styles.th}></th> {/* Columna vacía para el botón */}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {busRoutes.map((route) => (
            <tr key={route.id}>
              <td className={styles.td}>{route.codigo}</td>
              <td className={styles.td}>{route.horaSalida}</td>
              <td className={styles.td}>{route.origen}</td>
              <td className={styles.td}>{route.destino}</td>
              <td className={styles.td}>{route.duracion}</td>
              <td className={styles.td}>{route.numeroBus}</td>
              <td className={styles.td}>{route.terminal}</td>
              <td className={styles.td}>
                <button
                  className={styles.buyButton}
                  onClick={() => handleBuyClick(route.id)}
                >
                  Comprar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusRoutes;

