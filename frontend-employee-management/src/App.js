import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home'; // Correct path for Home component
import Register from './screens/Register'; // Assuming Register component is in the same folder
import Login from './screens/Login'; // Assuming you have a Login component in the same folder
import EmployeeList from './screens/EmployeeList'; // Correct path for EmployeeList component

function App() {
    return (
        <Router>
            <Routes> {/* Change Switch to Routes */}
                <Route path="/" element={<Home />} /> {/* Change component prop to element */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/employees" element={<EmployeeList />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
