import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    // Styles for the navigation container
    const navContainerStyle = {
        backgroundColor: '#f0f0f0',  // Light grey background
        padding: '10px 20px',         // Padding around the navigation
        display: 'flex',              // Display links in a row
        justifyContent: 'space-around',  // Distribute space evenly around the links
        alignItems: 'center'          // Center links vertically
    };

    // Basic styles for NavLink components
    const navLinkStyle = {
        textDecoration: 'none',       // Remove underline from links
        color: '#333',                // Dark grey text color
        fontSize: '16px',             // Text size
        fontWeight: 'bold',           // Bold text
        padding: '5px 10px',          // Padding for each link
        borderRadius: '5px'           // Rounded corners for link backgrounds
    };

    // Function to determine active style
    const getActiveStyle = ({ isActive }) => ({
        backgroundColor: isActive ? '#007BFF' : 'transparent',  // Blue background for active link
        color: isActive ? '#ffffff' : '#333',                   // White text for active, dark grey for inactive
    });

    return (
        <div style={navContainerStyle}>
            <NavLink 
                to="/login" 
                style={({ isActive }) => ({
                    ...navLinkStyle,
                    ...getActiveStyle({ isActive })
                })}>
                Login
            </NavLink>
            <NavLink 
                to="/registration" 
                style={({ isActive }) => ({
                    ...navLinkStyle,
                    ...getActiveStyle({ isActive })
                })}>
                Registration
            </NavLink>
            <NavLink 
                to="/products" 
                style={({ isActive }) => ({
                    ...navLinkStyle,
                    ...getActiveStyle({ isActive })
                })}>
                Products
            </NavLink>
            <NavLink 
                to="/orders" 
                style={({ isActive }) => ({
                    ...navLinkStyle,
                    ...getActiveStyle({ isActive })
                })}>
                Orders
            </NavLink>
        </div>
    );
}

export default Navigation;
