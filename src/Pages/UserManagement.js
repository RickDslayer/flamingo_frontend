import React, { useState } from "react";
import styles from "./UserManagement.module.css"; 

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, nombre: "Juan Pérez", correo: "juan@example.com", direccion: "123 Calle Falsa", telefono: "555-5555" },
  ]);

  const [newUser, setNewUser] = useState({
    nombre: "",
    correo: "",
    direccion: "",
    telefono: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (isEditing) {
      setUsers(users.map((user) => (user.id === currentUserId ? { ...newUser, id: currentUserId } : user)));
      setIsEditing(false);
      setCurrentUserId(null);
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    }
    setNewUser({ nombre: "", correo: "", direccion: "", telefono: "" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (user) => {
    setNewUser({ nombre: user.nombre, correo: user.correo, direccion: user.direccion, telefono: user.telefono });
    setIsEditing(true);
    setCurrentUserId(user.id);
  };

  return (
    <div className={styles.container}>
      <h2>Gestión de Usuarios</h2>
      <form className={styles.form}>
        <input name="nombre" value={newUser.nombre} onChange={handleInputChange} placeholder="Nombre" />
        <input name="correo" value={newUser.correo} onChange={handleInputChange} placeholder="Correo" />
        <input name="direccion" value={newUser.direccion} onChange={handleInputChange} placeholder="Dirección" />
        <input name="telefono" value={newUser.telefono} onChange={handleInputChange} placeholder="Teléfono" />
        <button type="button" onClick={handleAddUser} className={styles.button}>
          {isEditing ? "Actualizar Usuario" : "Añadir Usuario"}
        </button>
      </form>

      <h3>Lista de Usuarios</h3>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <span>{user.nombre}</span>
            <span>{user.correo}</span>
            <span>{user.telefono}</span>
            <div className="buttons">
              <button className={styles.botonEditar} onClick={() => handleEditUser(user)}>
                Editar
              </button>
              <button className={styles.botonEliminar} onClick={() => handleDeleteUser(user.id)}>
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

