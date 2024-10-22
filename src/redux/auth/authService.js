import { API_URL } from '../../utils/constanst'
import axios from 'axios';


/* const register = async (userData) => {
	const res = await axios.post(`${API_URL}/users`, userData);
	return res.data;
}; */

const login = async (user) => {
	const res = await axios.put(`${API_URL}/user/login`, user, { withCredentials: true });
	return res.data;
};

const access = async () => {
    const res = await axios.get(`${API_URL}/user/access`, { withCredentials: true })
    return res.data
};

const logout = async () => {
    const res = await

    axios.delete('${API_URL}/user/logout', {
        withCredentials: true 
    })

    return res.data
}

// Nueva función para obtener todos los usuarios
const getAllUsers = async () => {
    const res = await axios.get(`${API_URL}/user/getall`,
        { withCredentials: true }
    );
    console.log("User data from API:", res.data);
    return res.data;
};

//OBTENER INFO USUARIO LOGEADO
const getOneUser = async () => {
    const res = await axios.get(`${API_URL}/user/profile`, { 
        withCredentials: true,
    });
    console.log( 'peticion desde authService:', res.data);
    
    return res.data; // Solo retorna los datos
};

// Nueva función para eliminar un usuario
const deleteUser = async (userId) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await axios.delete(`${API_URL}/users/${userId}`, {
        headers: {
            authorization: token,
        },
    });
    return res.data;
};


const authService = {
	/* register, */
    login,
    logout,
    getAllUsers,
    getOneUser,
    deleteUser,
    access
};
export default authService;
