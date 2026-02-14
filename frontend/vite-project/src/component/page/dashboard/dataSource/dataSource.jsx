import Sidebar from "../../../layout/sidebar/sidebar";
import './dataSource.css'
import DashboardNavbar from "../../../layout/dashboardNavbar/dashboardNavbar";
import WarehouseCompo from "../../../layout/warehouse/warehouse";
import Model from "../../../layout/model/model";
import Connector from "../../../layout/connector/connector";
import { useState, useEffect } from "react";
const DataSource = () => {

   



    const [state, setState] = useState()


    const click = () => setState("flex")

    const getData = (data) => setState(data)





    return (
        <>

            <Model state={state} onClick={getData} />
            <DashboardNavbar />
            <div className="pageDataSource">
                <Sidebar />
                <Connector onClick={click}/>
            </div>

        </>
    )
}

export default DataSource