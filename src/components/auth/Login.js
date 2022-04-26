import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import { myLoginHandler } from '../../Redux/Handler/actions'



const Login = () => {
    const dispatch = useDispatch()

    const allStates = useSelector(state => state)
    console.log(allStates);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (e) =>{
        e.preventDefault();
        dispatch(myLoginHandler(username,password))
    }


    return (
        <div className='bg-teal-900 h-full w-full absolute flex items-center justify-center'>
            <div className='flex items-center border p-8 rounded justify-center flex-col'>
                <h1 className='font-bold text-white'>MocoMoca Login</h1>
                <div>
                    <form onSubmit={loginHandler} className='flex flex-col items-center justify-center'>
                        <input 
                            type="text"
                            value={username}
                            onChange={ e =>setUsername(e.target.value)}
                            className='border focus:border-red-100 w-full m-2 mt-8 bg-transparent rounded-xl text-white px-5 py-1' 
                            placeholder='Username'/>
                        <div className='w-full flex px-2 text-xs justify-between items-center'>
                            <Link to="/forgotPassword" className='cursor-pointer text-xs hover:text-teal-200 text-teal-100'>forgot password</Link>
                            <i className='fa fa-eye hover:text-teal-200 text-teal-100'></i>
                        </div>
                        <input 
                            value={password}
                            onChange={ e =>setPassword(e.target.value)}
                            className='border focus:border-red-100 w-full m-2 mb-3 bg-transparent rounded-xl text-white px-5 py-1' 
                            placeholder='password'
                            type="password" />

                        <button className='text-black h-8 w-full bg-teal-200 rounded-full shadow-lg'>Login</button>

                        <div className='w-full flex px-2 text-xs justify-between mt-2 items-center'>
                            <p className='text-sm hover:text-teal-200 text-teal-100'>don't have account </p>
                            <Link to="/Signup" className='text-sm hover:text-teal-200 text-teal-100'>Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
