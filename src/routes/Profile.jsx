import { useState, useEffect } from 'react';
import '../style/profile/profile.css';

export default function Profile() {
    // Estado para almacenar los datos del usuario
    const [userData, setUserData] = useState(null);

    // Al montar el componente, intentar cargar el usuario desde localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser)); // Si hay un usuario, lo cargamos en el estado
        } else {
            setUserData(null); // Si no hay usuario, establecemos userData como null
        }
    }, []); // Solo se ejecuta al montar el componente

    const defaultProfileImage = "../../public/flowers-min.png"; // Imagen por defecto

    return (
        <div className="profile-container">
            <h1>Tu Perfil</h1>
            <img
                src={userData?.profileImage || defaultProfileImage} 
                alt="Foto de perfil"
                className="profile-image"
            />
            <p>{userData?.nombre || "Nombre no disponible"}</p>
            <p>{userData?.dni || "DNI no disponible"}</p>
        </div>
    );
}
