import React from "react";
import { Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import "./navbar.css";

export const Navbar = () => {
    return <div className="navbar">
        <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/petbeheavior">PET BEHEAVIOR</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>

        </div>
    </div>
}
