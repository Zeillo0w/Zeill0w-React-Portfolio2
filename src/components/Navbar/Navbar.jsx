import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <div className="logo">
                        <img src="./assets/images/logo.png" alt="" width="250px" height="auto" />
                    </div>

                    <ul>
                        <li>
                            <a className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a className='menu-item'>About</a>
                        </li>
                        <li>
                            <a className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a className='menu-item'>Projets</a>
                        </li>

                        <button className='contact-btn' On onClick={() => { }}>
                            Contact Me !
                        </button>
                    </ul>

                    <button class='menu-btn' onClick={toggleMenu}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }}
                        >
                            {openMenu ? "X" : "O"}
                        </span>
                    </button>

                </div>
            </nav>
        </>
    )
}

export default Navbar