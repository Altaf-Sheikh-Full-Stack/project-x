import Sidebar from "../../../layout/sidebar/sidebar";
import './dataSource.css'
import DashboardNavbar from "../../../layout/dashboardNavbar/dashboardNavbar";
import WarehouseCompo from "../../../layout/warehouse/warehouse";
import Model from "../../../layout/model/model";
import { useState } from "react";
const DataSource = () => {
    const [state, setState] = useState()

  
    const click = () => setState("flex")

    const getData = (data) => setState(data)




    return (
        <>
        <Model  state={state} onClick={getData} />
            <DashboardNavbar/>
            <div className="pageDataSource">
                <Sidebar />
                <WarehouseCompo delete={"delete"} onClick={click} SearchPlaceholder={'Search data'} buttonValue={"Upload data"} heading={"Data source"} description={"Connect and upload all your data at one place"}/>
            </div>

        </>
    )
}

export default DataSource