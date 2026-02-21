import Sidebar from "../../../layout/dashboard/sidebar/sidebar";
import './connector.css'
import DashboardNavbar from "../../../layout/dashboard/navbar/navbar";
import Model from "../../../layout/dashboard/connector/model/model";
import Connector from "../../../layout/dashboard/connector/connector";
import { useState, useEffect } from "react";
const ConnectorPage = () => {
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

export default ConnectorPage