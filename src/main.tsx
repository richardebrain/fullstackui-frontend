import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error/404'
import SignIn from './pages/sign/sign-in'
import SignUp from './pages/sign/sign-up'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Project from './pages/projects/Project'
import Users from './pages/users/Users'
import Tasks from './pages/tasks/Tasks'
import Reporting from './pages/reporting/Reporting'
import Settings from './pages/settings/Settings'
import Index from './pages/index/Index'
import Support from './pages/suppport/Support'
const router = createBrowserRouter([

  {
    path: '/',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    errorElement: <ErrorPage />,

  },
  {
    path: '/dashboard',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />

      },
      {
        path: '/dashboard/projects',
        element: <Project />,
      },
      {
        path: '/dashboard/users',
        element: <Users />
      },
      {
        path: '/dashboard/tasks',
        element: <Tasks />
      },
      {
        path: '/dashboard/reporting',
        element: <Reporting />
      },
      {
        path: '/dashboard/settings',
        element: <Settings />
      },
      {
        path: '/dashboard/support',
        element: <Support />
      }
    ]
  },



])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </Provider>
  </React.StrictMode>,
)
