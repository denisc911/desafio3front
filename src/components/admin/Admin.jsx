// Admin.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, deleteUser, reset } from '../../redux/auth/authSlice';
import { DeleteOutlined } from '@ant-design/icons';
import '../../style/admin/admin.css';

const Admin = () => {
    const dispatch = useDispatch();
    const { users, isLoading, isError, message, user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user && user.role === 'admin') {
            dispatch(getAllUsers());
        }

        return () => {
            dispatch(reset());
        };
    }, [dispatch, user]);

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    };

    if (isLoading) return <span>Loading...</span>;
    if (isError) return <span>Error: {message}</span>;

    return (
        <div className="admin-container">
            <h2>Lista de Usuarios</h2>
            {message && <p className="message">{message}</p>}
            {users && users.length === 0 ? (
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
                        {users && users.map((user) => (
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Admin;