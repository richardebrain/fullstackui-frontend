import DashboardLayout from './components/dashboard'
import Sidebar from './components/sidebar'
import { useEffect } from 'react'
import { getToken } from './helpers/storage'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './utilities/types'
import { removeUser, setUser } from './redux/users/user.slice'
import { toast } from 'react-toastify'

function App() {
  const user = getToken('user')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (user !== null) {
      dispatch(setUser({
        name: user.name,
        email: user.email,
        id: user.sub
      }))
    } else {
      dispatch(removeUser())
      toast.error('Please login to continue')
      navigate('/')
    }

  }, [user])
  return (
    <div className="bg-purple-700 w-full  text-gray-100 ">
      <div className='relative flex pt-4'>
        <Sidebar />
        <DashboardLayout />
      </div>
    </div>
  )
}

export default App
