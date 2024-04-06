import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        fontSize: "17px"
    }
    
    return (
        <header>
            <Link to="/" className='site-logo'>Aussie Game Hub</Link>
            {/* <Link className='site-logo'>Aussie Game Hub</Link> */}
            <nav className='navbar-link'>
                
                {/* <NavLink to="games" style={({isActive}) => isActive ? activeStyle : null}>GAMES</NavLink> */}
                {/* <NavLink to="." style={({isActive}) => isActive ? activeStyle : null}>GAMES</NavLink> */}

                {/* <NavLink to="studios?locationId=1&languageId=1" style={({isActive}) => isActive ? activeStyle : null}>STUDIOS</NavLink> */}
                <NavLink to="studios?locationId=1&languageId=1" style={({isActive}) => isActive ? activeStyle : null}>AUSSIE-STUDIOS</NavLink>

                <NavLink to="creators" style={({isActive}) => isActive ? activeStyle : null}>CREATORS</NavLink>
            </nav>

        </header>
        
    );
}

export default Navbar;