import Sidebar from "../../../layout/sidebar/sidebar";
import WarehouseCompo from "../../../layout/warehouse/warehouse";
import DashboardNavbar from "../../../layout/dashboardNavbar/dashboardNavbar";

const WarehousePage = () => {
    const add = () => {
        
    }
    return(
        <>
        
        <DashboardNavbar/>
        <div className="pageDataSource">
            <Sidebar/>
            
            <WarehouseCompo onClick={"add"} SearchPlaceholder={'Search database'} buttonValue={"Create database"}  heading={"Data wharehouse"} description={"A place all your data lives in a manner"}/>
        </div>
        </>
    )
}

export default WarehousePage