import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return(
        <div style={styles.container}>
            <h1>Welcome to the Employee Management System</h1>
            <p>Manage your employees efficiently with our application. You can register new users, log in, and manage employee records.</p>
            
            <div style={styles.navLinks}>
                 <Link to="/register" style={styles.link}>
                     Register
                 </Link>
                 <Link to="/login" style={styles.link}>
                     Login
                 </Link>
                 <Link to="/employees" style={styles.link}>
                     View Employees
                 </Link>
          
            </div>
        </div>
    )

}

// Inline styles for simplicity
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        padding: '20px',
    },
    navLinks: {
        marginTop: '20px',
    },
    link: {
        margin: '0 10px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

export default Home;
