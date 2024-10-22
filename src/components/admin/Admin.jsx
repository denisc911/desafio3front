// Admin.js
import React, { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import '../../style/admin/admin.css';

const generateRandomUsers = () => {
    const firstNames = ["Juan", "Ana", "Carlos", "Marta", "Luis", "Lucía", "Pedro", "María", "José", "Elena"];
    const lastNames = ["Pérez", "García", "Rodríguez", "Fernández", "Gómez", "Sánchez", "López", "Martínez", "Díaz", "Moreno"];
    
    const randomDNI = () => Math.floor(10000000 + Math.random() * 90000000); // Genera DNIs aleatorios entre 10000000 y 99999999
    const randomFullName = () => {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        return `${firstName} ${lastName}`;
    };

    // Genera 50 usuarios aleatorios
    const users = Array.from({ length: 50 }, () => ({
        _id: Math.random().toString(36).substring(7), // Generar ID único aleatorio
        name: randomFullName(),
        dni: randomDNI(),
    }));

    return users;
};

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null); // Estado para almacenar el usuario en edición

    useEffect(() => {
        // Generar y establecer los 50 usuarios aleatorios
        setUsers(generateRandomUsers());
    }, []);

    const handleDelete = (userId) => {
        setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
    };

    const handleEditClick = (user) => {
        setEditUser(user); // Establecer el usuario a editar
    };

    const handleEditChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };

    const handleSaveEdit = () => {
        setUsers(prevUsers =>
            prevUsers.map(user => (user._id === editUser._id ? editUser : user))
        );
        setEditUser(null); // Cerrar el modal al guardar
    };

    const handleCancelEdit = () => {
        setEditUser(null); // Cerrar el modal sin guardar
    };

    return (
        <div className="admin-container">
            <h2>Lista de Usuarios</h2>
            {users.length === 0 ? (
                <p>No hay usuarios.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>DNI</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td data-label="Nombre">{user.name}</td>
                                <td data-label="DNI">{user.dni}</td>
                                <td data-label="Acciones">
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="delete-button"
                                    >
                                        <DeleteOutlined />
                                    </button>
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="edit-button"
                                    >
                                        <EditOutlined />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modal de edición */}
            {editUser && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Editar Usuario</h3>
                        <label>
                            Nombre:
                            <input
                                type="text"
                                name="name"
                                value={editUser.name}
                                onChange={handleEditChange}
                            />
                        </label>
                        <label>
                            DNI:
                            <input
                                type="text"
                                name="dni"
                                value={editUser.dni}
                                onChange={handleEditChange}
                            />
                        </label>
                        <div className="modal-actions">
                            <button onClick={handleSaveEdit}>Guardar</button>
                            <button onClick={handleCancelEdit}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
