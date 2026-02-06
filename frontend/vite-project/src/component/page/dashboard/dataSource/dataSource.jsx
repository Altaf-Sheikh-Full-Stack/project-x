import Sidebar from "../../../layout/sidebar/sidebar";
import './dataSource.css'
import plus from './svg/plus.svg'
const DataSource = () =>{
    return(
        <div className="pageDataSource">
            <div className="sidebarDataSource">
                <Sidebar/>
            </div>
            <div className="contentDataSource">
                <h1>Upload file</h1>
                <div className="contentDataSourcefile">
                    <img src={plus} alt="" />
                </div>
            </div>
        </div> 
    )
}

export default DataSource