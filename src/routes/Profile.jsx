import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import '../style/profile/profile.css';
import { getOneUser } from "../redux/auth/authSlice";

export default function Profile() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [ userData, setUserData ] = useState(null)

    
    
    useEffect(() => {
        // Llama a la acción para obtener el usuario
        dispatch(getOneUser());
    }, [dispatch]);

    // Actualiza userData cuando el usuario cambia en el estado de Redux
    useEffect(() => {
        setUserData(user);
    }, [user]);


    console.log("User in Profile:", user);

    /* const defaultProfileImage = "https://via.placeholder.com/150"; // URL de imagen genérica */
    const defaultProfileImage = "../../public/flowers-min.png"

    return (
        <div className="profile-container">
            <h1>Profile</h1>
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
