import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import '../style/profile/profile.css';
import { getOneUser } from "../redux/auth/authSlice";

export default function Profile() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getOneUser());
        
    }, []);


    /* const defaultProfileImage = "https://via.placeholder.com/150"; // URL de imagen genérica */
    const defaultProfileImage = "../../public/flowers-min.png"

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <img
                src={user?.profileImage || defaultProfileImage} 
                alt="Foto de perfil"
                className="profile-image"
            />
            <p>{user?.nombre || "Nombre no disponible"}</p>
            <p>{user?.dni || "DNI no disponible"}</p>
        </div>
    );
}
