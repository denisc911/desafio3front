import axios from 'axios';

const API_URL = 'http://localhost:3001';

/* const register = async (userData) => {
	const res = await axios.post(`${API_URL}/users`, userData);
	return res.data;
}; */

const login = async (user) => {
	const res = await axios.post(`${API_URL}/users/login`, user);
	if (res.data) {
		localStorage.setItem('user', JSON.stringify(res.data.user));
		localStorage.setItem('token', JSON.stringify(res.data.token));
	}
	return res.data;
};

const logout = async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const res = await

    axios.delete('${API_URL}/users/logout', {
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
    const res = await axios.get(`${API_URL}/users`, {
        headers: {
            authorization: token,
        },
    });
    return res.data;
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
    deleteUser,
};
export default authService;
