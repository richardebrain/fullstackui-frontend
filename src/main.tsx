import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error/404'
import SignIn from './pages/sign/sign-in'
import SignUp from './pages/sign/sign-up'


const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

    ]
  },
  {
    path: '/',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
 

])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
