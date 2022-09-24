import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const RouteNavBar = () => {
    return (
        <ul>

            <li>
                <Link to='/products'>Product</Link>
            </li>
            <li>
                <Link to='/admin'>Dashboard</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/'>Home</Link>
            </li>

        </ul>
    );
};

export default RouteNavBar;