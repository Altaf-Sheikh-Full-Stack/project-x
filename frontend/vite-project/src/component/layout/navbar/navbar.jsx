import { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { NavbarData } from './navbarData';
import SubMenu from './SubMenu';
import ButtonPrimary from '../../common/button/primary';
import ButtonSecondary from '../../common/button/secondary';
import { NavLink } from "react-router";
function Navbar() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    let navbarRef = useRef()
    useEffect(() => {
        const handle = (e) => {
            if (navbarRef.current && !navbarRef.current.contains(e.target)) {
                setActiveSubMenu(null)
            }
        }

        document.addEventListener("mousedown", handle)
    })
    const toggleSubMenu = (submenu) => {
        if (activeSubMenu === submenu) {
            setActiveSubMenu(null)
        } else {
            setActiveSubMenu(submenu);
        }

    };

    return (
        <>
            <div className="Navbar">
                {NavbarData.map((item, index) => (
                    <p
                        key={index}
                        className="nav-link"
                        onMouseEnter={() => toggleSubMenu(item.submenu)}
                    >
                        {item.title}

                    </p>
                ))}
                <NavLink to="/login"><ButtonSecondary buttonSecondary={"Login"}/></NavLink>
                <NavLink to="/register"><ButtonPrimary buttonPrimary={"Sign in"}/></NavLink>
            </div>

            {activeSubMenu && (<SubMenu subItem={activeSubMenu} ref={navbarRef} />)}
        </>
    );
}

export default Navbar;
