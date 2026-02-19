import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './component/page/home/home.jsx'
import LoginPage from './component/page/login/login.jsx'
import RegisterPage from './component/page/register/register.jsx'
import { BrowserRouter, Routes, Route, } from 'react-router'
import ConnectorPage from './component/page/dashboard/connector/connector.jsx'
import EmailVerify from './component/page/emailVerify/emailVerify.jsx'
import CatalogPage from './component/page/dashboard/warehouse/catalog/catalog.jsx'
import DatabasePage from './component/page/dashboard/warehouse/database/database.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
window.__TANSTACK_QUERY_CLIENT__ = queryClient;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/emailVerify' element={<EmailVerify />} />
        </Routes>

        <Routes>
          
          <Route path='/connector' element={<ConnectorPage />} />
          <Route path='/warehouse' element={<CatalogPage />} />
          <Route path='warehouse/database:id' element={<DatabasePage/>} />
          <Route path='warehouse/database' element={<DatabasePage/>} />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
