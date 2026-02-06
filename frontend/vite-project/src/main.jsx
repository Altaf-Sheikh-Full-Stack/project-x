import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './component/page/home/home.jsx'
import LoginPage from './component/page/login/login.jsx'
import RegisterPage from './component/page/register/register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import DataSource from './component/page/dashboard/dataSource/dataSource.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Routes>
        <Route path='/dashboard/datasource' element={<DataSource />} />
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
