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
            <WarehouseCompo/>
        </div>
        </>
    )
}

export default WarehousePage