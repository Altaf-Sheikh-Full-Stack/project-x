import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, } from 'react-router'
import AuthRoute from './route/auth.jsx'
import DashboardRoute from './route/dashboard.jsx'
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
        <AuthRoute />
        <DashboardRoute/>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
