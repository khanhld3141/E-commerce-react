import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false);



    return (

        <>
            <header className='header'>
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className="fas fa-border-all"></span>
                        <h4>
                            Categories <i className="fa fa-chevron-down"></i>
                        </h4>
                    </div>
                    <nav className="navNavLink">
                        <ul className={MobileMenu ? "nav-NavLinks-MobileMenu" : "NavLink f_flex capitalize "} onClick={() => setMobileMenu(false)}>
                            <li >
                                <NavLink exact={true} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/user'>User Account</NavLink>
                            </li>
                            <li>
                                <NavLink to='/vendor'>Vendor Account</NavLink>
                            </li>
                            <li>
                                <NavLink to='/track'>Track my order</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <i className="fas fa-times close home-btn"></i> :
                                    <i className="fas fa-bars open"></i>
                            }
                        </button>
                    </nav>

                </div>


            </header>
        </>
    )
}

export default Navbar;