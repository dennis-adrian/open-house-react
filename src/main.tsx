import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.tsx'
import IntroPage from './pages/IntroPage.tsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: localStorage.getItem('email') ? <ProductsPage /> : <IntroPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
