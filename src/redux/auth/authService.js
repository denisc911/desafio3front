import { API_URL } from '../../utils/constanst'
import axios from 'axios';


/* const register = async (userData) => {
	const res = await axios.post(`${API_URL}/users`, userData);
	return res.data;
}; */

const login = async (user) => {
	const res = await axios.post(`${API_URL}/user/login`, user);
	return res.data;
};

const access = async () => {
    const res = await axios.get(`${API_URL}/user/access`)
    return res.data
};

const logout = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await

    axios.delete('${API_URL}/user/logout', {
        headers: {
            authorization: token,
        }
    })
    if (res.data) localStorage.clear()
        return res.data
}

// Nueva función para obtener todos los usuarios
const getAllUsers = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await axios.get(`${API_URL}/user/getall`, {
        headers: {
            authorization: token,
        },
    });
    return res.data;
};

//OBTENER INFO USUARIO LOGEADO
const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await axios.get(`${API_URL}/user/userinfo`, {
        headers: {
            authorization: token,
        },
    })
    return res.data
}

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
    getUserInfo,
    deleteUser,
    access
};
export default authService;
