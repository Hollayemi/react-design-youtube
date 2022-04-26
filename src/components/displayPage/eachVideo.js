import React from "react";
import Agent from "../../asset/agent.png"

const Video = (prop) =>{
    return (
        <div className="flex flex-col w-5/6 h-56 lg:w-1/6 md:w-1/5 sm:w-2/5  sm:h-48 overflow-hidden border rounded m-1">
            <div className="h-32 overflow-hidden relative ">
                <img src={prop.pic} className="hover:scale-10" alt="alt" ></img>
                <div className="absolute w-full h-full bg-teal-700 top-0 overflow-hidden opacity-25"></div>
            </div>
            <div className="h-4 overflow:hiddden ">
                <h5 className="font-bold text-xs p-2">{prop.title}</h5>
                <p className="text-xs p-1">{prop.desc}</p>
            </div>
        </div>
    )
}

export default Video