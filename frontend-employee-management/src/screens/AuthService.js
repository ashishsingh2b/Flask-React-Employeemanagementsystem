// src/screens/AuthService.js

const API_URL = 'http://localhost:5000/api'; // Adjust this if your API URL is different

const register = async (username, email, password) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    return response.json();
};

const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    return response.json();
};

const AuthService = {
    register,
    login,
};

export default AuthService;
