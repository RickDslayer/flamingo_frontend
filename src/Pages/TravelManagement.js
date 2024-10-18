import React, { useState, useEffect } from "react";
import styles from "./TravelManagement.module.css";

const TravelManagement = () => {
  const [travels, setTravels] = useState(() => {
    const savedTravels = localStorage.getItem("travels");
    return savedTravels ? JSON.parse(savedTravels) : [
      {
        id: 1,
        codigo: "BUS001",
        horaSalida: "08:00 AM",
        origen: "Cúcuta",
        destino: "Bucaramanga",
        duracion: "5h",
        bus: "123",
        terminal: "Terminal Cúcuta",
      },
    ];
  });

  const [newTravel, setNewTravel] = useState({
    id: null,
    codigo: "",
    horaSalida: "",
    origen: "",
    destino: "",
    duracion: "",
    bus: "",
    terminal: "",
  });

  useEffect(() => {
    localStorage.setItem("travels", JSON.stringify(travels));
  }, [travels]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTravel({ ...newTravel, [name]: value });
  };

  const handleAddTravel = () => {
    if (newTravel.id) {
      // Update existing travel
      setTravels(
        travels.map((travel) =>
          travel.id === newTravel.id ? { ...newTravel } : travel
        )
      );
    } else {
      // Add new travel
      setTravels([...travels, { ...newTravel, id: Date.now() }]);
    }
    resetForm();
  };

  const handleDeleteTravel = (id) => {
    setTravels(travels.filter((travel) => travel.id !== id));
  };

  const handleEditTravel = (travel) => {
    setNewTravel(travel);
  };

  const resetForm = () => {
    setNewTravel({
      id: null,
      codigo: "",
      horaSalida: "",
      origen: "",
      destino: "",
      duracion: "",
      bus: "",
      terminal: "",
    });
  };

  return (
    <div>
      <h2>Gestión de Rutas</h2>
      <form>
        <input
          name="codigo"
          value={newTravel.codigo}
          onChange={handleInputChange}
          placeholder="Código"
        />
        <input
          name="horaSalida"
          value={newTravel.horaSalida}
          onChange={handleInputChange}
          placeholder="Hora de salida"
        />
        <input
          name="origen"
          value={newTravel.origen}
          onChange={handleInputChange}
          placeholder="Origen"
        />
        <input
          name="destino"
          value={newTravel.destino}
          onChange={handleInputChange}
          placeholder="Destino"
        />
        <input
          name="duracion"
          value={newTravel.duracion}
          onChange={handleInputChange}
          placeholder="Duración"
        />
        <input
          name="bus"
          value={newTravel.bus}
          onChange={handleInputChange}
          placeholder="Bus"
        />
        <input
          name="terminal"
          value={newTravel.terminal}
          onChange={handleInputChange}
          placeholder="Terminal"
        />
        <button
          className={styles.botonAdd}
          type="button"
          onClick={handleAddTravel}
        >
          {newTravel.id ? "Actualizar Ruta" : "Añadir Ruta"}
        </button>
        <button className={styles.botonReset} type="button" onClick={resetForm}>
          Cancelar
        </button>
      </form>

      <h3>Rutas</h3>
      <ul className={styles.Rutas}>
        {travels.map((travel) => (
          <li key={travel.id} className={styles.travelItem}>
            <span className={styles.detallesRuta}>
              {travel.codigo} - {travel.origen} a {travel.destino} ({travel.duracion})
            </span>
            <button
              className={styles.botonEditar}
              onClick={() => handleEditTravel(travel)}
            >
              Editar
            </button>
            <button
              className={styles.botonBorrar}
              onClick={() => handleDeleteTravel(travel.id)}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelManagement;

