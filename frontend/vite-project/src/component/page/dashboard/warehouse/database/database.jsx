import Sidebar from "../../../../layout/dashboard/sidebar/sidebar";
import DatabaseCompo from "../../../../layout/dashboard/warehouse/database/database";
import DashboardNavbar from "../../../../layout/dashboard/navbar/navbar";

const DatabasePage = () => {
    return (
        <>
            <DashboardNavbar />
            <div className="pageDataSource">
                <Sidebar />
                <DatabaseCompo />
            </div>
        </>
    )
}

export default DatabasePage