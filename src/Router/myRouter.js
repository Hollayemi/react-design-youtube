import React from "react"
import { useRoutes } from 'react-router-dom';

import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup';
import ForgotPass from '../components/auth/ForgotPass';


import Display from '../components/displayPage/displaySection'
import Header from '../components/displayPage/header';
import Sidebar from '../components/displayPage/sidebar';

const MyRouter = () => {

    let allRoutes = useRoutes([
        {
            path:"/",
            children: [
                {path:"/signin", element:<Login />},
                {path:"/Signup", element:<Signup /> },
                {path:"/forgotPassword", element:<ForgotPass />}

            ]
        },
        {
            path: "/mocomoca",
            children: [
                {path:"youtuba",
                element:
                    <> 
                        <Header />
                        <div className='flex'>
                            <div className='mySideBar z-30 fixed h-full w-1/2 bg-teal-900 shadow hidden xl:w-1/6 lg:w-1/5 md:w-1/4 sm:w-1/4 sm:block  '>
                            <Sidebar />
                            </div>
            
                            <div className='w-full sm:ml-56 sm:w-5/6 p-4 flex justify-center bg-gray-100'>
                            <Display  />
                            </div>
                        </div> 
                    </>}
            ]
        }
    ])
    return allRoutes
}

export default MyRouter
