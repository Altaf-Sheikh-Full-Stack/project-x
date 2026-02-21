import { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { NavbarData } from './navbarData';
import SubMenu from './SubMenu';
import ButtonPrimary from '../../common/button/primary';
import ButtonSecondary from '../../common/button/secondary';
import NavbarModel from './model/model';
import { NavLink } from "react-router";
function Navbar() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [open, setOpen] = useState("none")
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

    const openModel = () => {
        setOpen("block")
    }

    const newState = (data) => {
        setOpen(data)
    }

  
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
               
                <NavLink to="/login"><ButtonSecondary buttonSecondary={"Login"} /></NavLink>
                <NavLink to="/register"><ButtonPrimary buttonPrimary={"Sign in"} /></NavLink>
                <div onClick={openModel} className='opennavbarmodel'>
                <svg    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
                </svg>
                </div>
            </div>

            {activeSubMenu && (<SubMenu subItem={activeSubMenu} ref={navbarRef} />)}
            < NavbarModel State={newState} value={open}/>
        </>
    );
}

export default Navbar;
