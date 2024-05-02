// Define navigation links via NavLink component of react-router-dom to  to login and registartion components


import React from 'react';

import { NavLink } from 'react-router-dom';



function Navigation() {

     return (
        <div >
            <NavLink to="/login" >Login</NavLink>
            <NavLink to="/registration" >Registration</NavLink>
        </div>
    )
}

export default Navigation;