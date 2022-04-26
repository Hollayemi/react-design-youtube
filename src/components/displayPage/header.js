import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

   const openSideBar=()=>{
        document.querySelector('.mySideBar').classList.toggle('hidden')
    }

    const [search, setSearch] = useState("")
    const theSearch = (e) => setSearch(e.target.value)

    return (
        <div className="flex justify-between fixed w-full shadow-lg z-40 bg-white items-center p-4">
            
            <div className="flex justify-center items-center">
                <div className="block sm:hidden">
                    <i onClick={openSideBar} className="fa fa-bars text-teal-900 px-3 hidden"></i>
                </div>
                <i className="fa fa-youtube text-teal-900 px-3"></i>
                <h2 className="font-bold text-red-400 hidden sm:block">Youtube</h2>
            </div>


            <div className="w-2/4 flex justify-center items-center">
                <form className="w-4/5 flex justify-center item-center">
                    <input className="border w-7/8 sm:w-4/5 px-4 h-8 border-r-0 rounded" value={search} onChange={theSearch} type={"text"}></input>
                    <button className="flex items-center justify-center rounded  border w-8 border-l-0 h-8 m-0"><i className="fa fa-search"></i></button>
                </form>
            </div>


            <div className="block sm:hidden">
                <i className="fa fa-user p-2"></i>
            </div>


            <div className="flex justify-center items-center hidden sm:flex">
                <i className="fa px-1 fa-tag"></i>
                <i className="fa px-12 fa-th"></i>
                <i className="fa fa-user p-2"></i>
                <Link to="/Signin" className="font-bold text-red-400">Sign in</Link>
            </div>
        </div>
    )
}

export default Header