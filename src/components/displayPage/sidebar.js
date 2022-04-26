import React from "react";


const Sidebar = () => {
    return (
        <div className="transparent fixed mt-20">
            <ul className="p-3 w-7/8">
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-home pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Home</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-fire pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Trending</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-clock pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">History</p></a></li>
                <p className="text-sm mt-6 w-8/9">Best on YouTube</p>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-music pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Music</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-football pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Sports</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-gamepad pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Gaming</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-tv pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Movie</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-home pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">TV Shows</p></a></li>

                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-globe pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">News</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-wifi pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Live</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-docker pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">Spotlive</p></a></li>
                <li className="flex items-center text-xs py-2"><i className="fa text-white fa-diamond pr-4"></i> <a href ="#"><p className="text-sm text-gray-500 hover:text-white hover:font-bold">TV Shows</p></a></li>
            </ul>
        </div>
    )
}

export default Sidebar