import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <header>
                <Link to="/Home" className="logo">LOGO</Link>
                <ul className={click?'mobileNavbar' : "nomobileNavbar" }>
                    <li><Link to="/Home">HOME</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                    <li><Link to="/Service">SERVICES</Link></li>
                    <li><Link to="/Blogs">BLOGS</Link></li>
                    <li><Link to="/Contact">CONTACT</Link></li>
                </ul>
                <Link to ="/" className="menu-icon" onClick={handleClick}><i className={click ? 'fa fa-times' : "fa fa-bars"} /></Link>
            </header>
        </>
    )
};

export default Header;