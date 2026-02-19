import Sidebar from "../../../../layout/dashboard/sidebar/sidebar";
import WarehouseCompo from "../../../../layout/dashboard/warehouse/catalog/catalog";
import DashboardNavbar from "../../../../layout/dashboard/navbar/navbar";

const CatalogPage = () => {
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

export default CatalogPage