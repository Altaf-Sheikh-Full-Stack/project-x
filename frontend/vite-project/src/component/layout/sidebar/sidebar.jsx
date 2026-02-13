import './sidebar.css'
import { NavLink } from 'react-router'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavLink className="link" to='/dashboard/datasource'>
                Connector
            </NavLink>
            <NavLink className="link" to='/dashboard/warehouse'>
                wharehouse
            </NavLink>
            {/* <NavLink className="link">Computation</NavLink>
            <NavLink className="link">analytics</NavLink>
            <NavLink className="link">AI/ML</NavLink> */}



        </div>
    )
}

export default Sidebar