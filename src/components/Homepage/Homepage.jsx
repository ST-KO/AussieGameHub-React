import React from 'react';
import { Outlet } from 'react-router-dom'; 

import Navbar from '../Navbar/Navbar';

const Homepage = () => {
    return(
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            
        </>
    );
}

export default Homepage;