import {  Routes, Route, } from 'react-router'
import ConnectorPage from '../component/page/dashboard/connector/connector'
import CatalogPage from '../component/page/dashboard/warehouse/catalog/catalog'
const DashboardRoute = () => {
    return (
        <Routes>
            <Route path='/connector' element={<ConnectorPage />} />
            <Route path='/warehouse' element={<CatalogPage />} />
            <Route path='warehouse/:id' element={<CatalogPage />} />
        </Routes>
    )
}

export default DashboardRoute