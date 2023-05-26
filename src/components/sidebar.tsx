import { removeToken } from '@/helpers/storage'
import { removeUser } from '@/redux/users/user.slice'
import { IconOut, IconSettings, IconSupport } from '@/utilities/contants-icons'
import { sidebarRoutes } from '@/utilities/routes'
import { useAppDispatch, useAppSelector } from '@/utilities/types'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Sidebar = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const navigate = useNavigate()
    const logOutUser = () => {
        removeToken('user')
        dispatch(removeUser())
        toast.success('Logout success')
        navigate('/')
    }
    return (
        <div className=' mx-3 w-3/12 my-4 2xl:w-1/5 min-h-[760px]'>
            <div className='px-4 h-full'>
                <div className='flex flex-col h-full'>
                    {/* page title */}
                    <h1 className='text-2xl font-bold'>Richard's UI</h1>
                    {/* search bar */}
                    <div className='mt-5'>
                        <label htmlFor="searchbar"></label>
                        <input
                            type="text"
                            name="searchbar"
                            id="searchbar"
                            placeholder='Search'
                            className='w-full rounded-md bg-purple-600 h-11 p-2 outline-none duration-500 placeholder:text-white'
                        />
                    </div>
                    {/* navigations */}
                    <div className='mt-8 flex gap-4 flex-col justify-between h-full'>
                        <ul className='flex gap-4 flex-col'>
                            {
                                sidebarRoutes.map(route => {
                                    return (
                                        <li className='flex font-semibold text-gray-100' key={route.id}>
                                            <Link to={route.path} className=' flex gap-2 items-center px-1'>
                                                {<route.icon className='w-6 h-6' />}
                                                {route.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }


                        </ul>
                        <ul className=''>
                            <li className='flex font-semibold text-gray-100'>
                                <Link to={'/dashboard/support'} className=' flex gap-1 items-center px-1'>
                                    <IconSupport className='w-6 h-6' />
                                    Support
                                </Link>
                            </li>
                            <li className='flex font-semibold text-gray-100 mt-3'>
                                <Link to={'/dashboard/settings'} className=' flex gap-1 items-center px-1'>
                                    <IconSettings className='w-6 h-6' />
                                    Settings
                                </Link>
                            </li>
                            <li className='border-t border-white py-10 mt-8 flex justify-between items-center'>
                                <div className='flex flex-1'>
                                    <div className="rounded-full w-12 border h-12 mr-3"></div>
                                    <div className='flex-1'>
                                        <p className='font-bold'>{user?.name}</p>
                                        <p className='text-sm font-thin'>{user?.email}</p>


                                    </div>

                                </div>

                                <button onClick={logOutUser} className='cursor-pointer text-white flex gap-1 px-1 ml-1'>
                                    <IconOut className='w-6 h-6' />
                                </button>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar