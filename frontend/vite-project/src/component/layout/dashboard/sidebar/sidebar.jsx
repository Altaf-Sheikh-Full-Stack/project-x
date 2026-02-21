import './sidebar.css'
import { NavLink } from 'react-router'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavLink className="link" to='/connector'>
                Connector
            </NavLink>
            <NavLink className="link" to='/warehouse'>
                wharehouse
            </NavLink>
            <a className="link">Query(in devlopment)</a>
            <a className="link">analytics(in devlopment)</a>
            <a className="link">AI/ML(in devlopment)</a>

        </div>
    )
}

export default Sidebar