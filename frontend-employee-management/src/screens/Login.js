import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService'; // Correctly import AuthService

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        if (!username || !password) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        try {
            const response = await AuthService.login(username, password); // Call login method

            if (response.token) {
                // Handle successful login (e.g., save token and redirect)
                localStorage.setItem('token', response.token); // Save token in local storage
                navigate('/employees'); // Redirect to employee list or dashboard
            } else {
                // Handle errors (e.g., wrong username or password)
                setErrorMessage(response.message || "Login failed.");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
